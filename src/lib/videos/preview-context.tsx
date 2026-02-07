"use client";

import { createContext, useContext, useState, useEffect, useCallback, useMemo, type ReactNode } from "react";
import type { VideoManifest, VideoDesignSettings } from "./types";
import { DEFAULT_VIDEO_DESIGN } from "./types";

interface VideoPreviewContextValue {
  isPreviewMode: boolean;
  setPreviewMode: (enabled: boolean) => void;
  manifest: VideoManifest | null;
  isLoading: boolean;
  currentSlot: string | null;
  setCurrentSlot: (slot: string | null) => void;
  currentVariantIndex: Record<string, number>;
  cycleVariant: (slot: string, direction: "prev" | "next") => void;
  getCurrentVideoPath: (slot: string, fallback?: string) => string | null;
  getCurrentFilename: (slot: string) => string | null;
  getSlotVariantInfo: (slot: string) => { current: number; total: number } | null;
  getSlotPrompt: (slot: string) => string | null;
  selectCurrentVariant: (slot: string) => Promise<boolean>;
  deleteCurrentVariant: (slot: string) => Promise<boolean>;
  regenerateSlot: (slot: string, prompt?: string) => Promise<boolean>;
  refreshManifest: () => Promise<void>;
  getDesignSettings: (slot: string) => VideoDesignSettings;
  updateDesignSetting: (slot: string, key: keyof VideoDesignSettings, value: number) => void;
  resetDesignSettings: (slot: string) => void;
}

const VideoPreviewContext = createContext<VideoPreviewContextValue | null>(null);

// In production, return a no-op provider
const isProduction = process.env.NODE_ENV === "production";

export function VideoPreviewProvider({ children }: { children: ReactNode }) {
  const [isPreviewMode, setPreviewMode] = useState(false);
  const [manifest, setManifest] = useState<VideoManifest | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSlot, setCurrentSlot] = useState<string | null>(null);
  const [currentVariantIndex, setCurrentVariantIndex] = useState<Record<string, number>>({});
  const [designSettings, setDesignSettings] = useState<Record<string, VideoDesignSettings>>(() => {
    if (typeof window === "undefined") return {};
    try {
      return JSON.parse(localStorage.getItem("video-design-settings") || "{}");
    } catch {
      return {};
    }
  });

  const getDesignSettings = useCallback((slot: string): VideoDesignSettings => {
    return { ...DEFAULT_VIDEO_DESIGN, ...designSettings[slot] };
  }, [designSettings]);

  const updateDesignSetting = useCallback((slot: string, key: keyof VideoDesignSettings, value: number) => {
    setDesignSettings((prev) => {
      const updated = { ...prev, [slot]: { ...DEFAULT_VIDEO_DESIGN, ...prev[slot], [key]: value } };
      try { localStorage.setItem("video-design-settings", JSON.stringify(updated)); } catch {}
      return updated;
    });
  }, []);

  const resetDesignSettings = useCallback((slot: string) => {
    setDesignSettings((prev) => {
      const updated = { ...prev };
      delete updated[slot];
      try { localStorage.setItem("video-design-settings", JSON.stringify(updated)); } catch {}
      return updated;
    });
  }, []);

  // Fetch manifest from API and initialize variant indices from selections
  const refreshManifest = useCallback(async () => {
    if (isProduction) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/video-staging");
      if (response.ok) {
        const data: VideoManifest = await response.json();
        setManifest(data);

        // Initialize currentVariantIndex from manifest's selected values
        const initialIndices: Record<string, number> = {};
        for (const [slotId, slotData] of Object.entries(data.slots)) {
          if (slotData.selected) {
            const selectedIndex = slotData.files.findIndex(
              (f) => f.filename === slotData.selected
            );
            if (selectedIndex >= 0) {
              initialIndices[slotId] = selectedIndex;
            }
          }
        }
        setCurrentVariantIndex((prev) => ({ ...initialIndices, ...prev }));
      }
    } catch (error) {
      console.error("Failed to fetch video manifest:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Load manifest when preview mode is enabled
  useEffect(() => {
    if (isProduction) return;

    if (isPreviewMode && !manifest) {
      refreshManifest();
    }
  }, [isPreviewMode, manifest, refreshManifest]);

  // Check URL for preview param on mount
  useEffect(() => {
    if (isProduction) return;

    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("preview") === "1") {
        setPreviewMode(true);
      }
    }
  }, []);

  // Cycle through variants for a slot and auto-save selection
  const cycleVariant = useCallback((slot: string, direction: "prev" | "next") => {
    if (!manifest?.slots[slot]) return;

    const slotData = manifest.slots[slot];
    const totalVariants = slotData.files.length;
    if (totalVariants === 0) return;

    const currentIndex = currentVariantIndex[slot] ?? 0;
    let newIndex: number;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % totalVariants;
    } else {
      newIndex = currentIndex === 0 ? totalVariants - 1 : currentIndex - 1;
    }

    setCurrentVariantIndex((prev) => ({ ...prev, [slot]: newIndex }));

    // Auto-save the selection to manifest
    const selectedFile = slotData.files[newIndex];
    if (selectedFile) {
      fetch("/api/video-staging", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slot, selected: selectedFile.filename }),
      }).catch((err) => console.error("Failed to auto-save selection:", err));
    }
  }, [manifest, currentVariantIndex]);

  // Get current video path for a slot (respects preview mode overrides)
  const getCurrentVideoPath = useCallback((slot: string, fallback?: string): string | null => {
    if (!isPreviewMode || !manifest?.slots[slot]) {
      return fallback ?? null;
    }

    const slotData = manifest.slots[slot];
    if (slotData.files.length === 0) {
      return fallback ?? null;
    }

    const variantIndex = currentVariantIndex[slot] ?? 0;
    return slotData.files[variantIndex]?.path ?? fallback ?? null;
  }, [isPreviewMode, manifest, currentVariantIndex]);

  // Get variant info for display
  const getSlotVariantInfo = useCallback((slot: string): { current: number; total: number } | null => {
    if (!manifest?.slots[slot]) return null;

    const slotData = manifest.slots[slot];
    if (slotData.files.length === 0) return null;

    return {
      current: (currentVariantIndex[slot] ?? 0) + 1,
      total: slotData.files.length,
    };
  }, [manifest, currentVariantIndex]);

  // Get current filename for a slot
  const getCurrentFilename = useCallback((slot: string): string | null => {
    if (!manifest?.slots[slot]) return null;

    const slotData = manifest.slots[slot];
    if (slotData.files.length === 0) return null;

    const variantIndex = currentVariantIndex[slot] ?? 0;
    return slotData.files[variantIndex]?.filename ?? null;
  }, [manifest, currentVariantIndex]);

  // Get prompt for a slot
  const getSlotPrompt = useCallback((slot: string): string | null => {
    if (!manifest?.slots[slot]) return null;
    return manifest.slots[slot].prompt ?? null;
  }, [manifest]);

  // Delete the current variant from a slot
  const deleteCurrentVariant = useCallback(async (slot: string): Promise<boolean> => {
    if (isProduction) return false;
    if (!manifest?.slots[slot]) return false;

    const slotData = manifest.slots[slot];
    const variantIndex = currentVariantIndex[slot] ?? 0;
    const fileToDelete = slotData.files[variantIndex];

    if (!fileToDelete) return false;

    try {
      const response = await fetch("/api/video-staging", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slot, filename: fileToDelete.filename }),
      });

      if (response.ok) {
        // Adjust index if we deleted the last item
        const newTotal = slotData.files.length - 1;
        if (newTotal > 0 && variantIndex >= newTotal) {
          setCurrentVariantIndex((prev) => ({ ...prev, [slot]: newTotal - 1 }));
        }
        await refreshManifest();
        return true;
      }
    } catch (error) {
      console.error("Failed to delete variant:", error);
    }

    return false;
  }, [manifest, currentVariantIndex, refreshManifest]);

  // Regenerate videos for a slot (optionally with modified prompt)
  const regenerateSlot = useCallback(async (slot: string, prompt?: string): Promise<boolean> => {
    if (isProduction) return false;

    try {
      const response = await fetch("/api/video-staging/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slot, prompt, count: 2 }),
      });

      if (response.ok) {
        await refreshManifest();
        return true;
      }
    } catch (error) {
      console.error("Failed to regenerate slot:", error);
    }

    return false;
  }, [refreshManifest]);

  // Select the current variant for a slot (save to manifest)
  const selectCurrentVariant = useCallback(async (slot: string): Promise<boolean> => {
    if (isProduction) return false;
    if (!manifest?.slots[slot]) return false;

    const slotData = manifest.slots[slot];
    const variantIndex = currentVariantIndex[slot] ?? 0;
    const selectedFile = slotData.files[variantIndex];

    if (!selectedFile) return false;

    try {
      const response = await fetch("/api/video-staging", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slot, selected: selectedFile.filename }),
      });

      if (response.ok) {
        await refreshManifest();
        return true;
      }
    } catch (error) {
      console.error("Failed to select variant:", error);
    }

    return false;
  }, [manifest, currentVariantIndex, refreshManifest]);

  const contextValue = useMemo<VideoPreviewContextValue>(() => ({
    isPreviewMode,
    setPreviewMode,
    manifest,
    isLoading,
    currentSlot,
    setCurrentSlot,
    currentVariantIndex,
    cycleVariant,
    getCurrentVideoPath,
    getCurrentFilename,
    getSlotVariantInfo,
    getSlotPrompt,
    selectCurrentVariant,
    deleteCurrentVariant,
    regenerateSlot,
    refreshManifest,
    getDesignSettings,
    updateDesignSetting,
    resetDesignSettings,
  }), [
    isPreviewMode,
    manifest,
    isLoading,
    currentSlot,
    currentVariantIndex,
    cycleVariant,
    getCurrentVideoPath,
    getCurrentFilename,
    getSlotVariantInfo,
    getSlotPrompt,
    selectCurrentVariant,
    deleteCurrentVariant,
    regenerateSlot,
    refreshManifest,
    getDesignSettings,
    updateDesignSetting,
    resetDesignSettings,
  ]);

  // In production, just render children without context
  if (isProduction) {
    return <>{children}</>;
  }

  return (
    <VideoPreviewContext.Provider value={contextValue}>
      {children}
    </VideoPreviewContext.Provider>
  );
}

export function useVideoPreview(): VideoPreviewContextValue {
  const context = useContext(VideoPreviewContext);

  // In production, return a no-op context
  if (isProduction || !context) {
    return {
      isPreviewMode: false,
      setPreviewMode: () => {},
      manifest: null,
      isLoading: false,
      currentSlot: null,
      setCurrentSlot: () => {},
      currentVariantIndex: {},
      cycleVariant: () => {},
      getCurrentVideoPath: (_slot, fallback) => fallback ?? null,
      getCurrentFilename: () => null,
      getSlotVariantInfo: () => null,
      getSlotPrompt: () => null,
      selectCurrentVariant: async () => false,
      deleteCurrentVariant: async () => false,
      regenerateSlot: async () => false,
      refreshManifest: async () => {},
      getDesignSettings: () => DEFAULT_VIDEO_DESIGN,
      updateDesignSetting: () => {},
      resetDesignSettings: () => {},
    };
  }

  return context;
}
