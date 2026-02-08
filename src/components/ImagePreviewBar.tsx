"use client";

import { useState, useEffect, useCallback } from "react";
import { usePreview } from "@/lib/images/preview-context";
import { useVideoPreview } from "@/lib/videos/preview-context";
import type { VideoDesignSettings } from "@/lib/videos/types";
import { DEFAULT_VIDEO_DESIGN } from "@/lib/videos/types";

// Only render in development
const isProduction = process.env.NODE_ENV === "production";

// Map slots to page paths + section selectors for navigation
const slotToPageMap: Record<string, { path: string; selector?: string }> = {
  // Image slots (homepage)
  "hero": { path: "/", selector: "section:first-of-type" },
  "industries-healthcare": { path: "/", selector: "#industries" },
  "industries-it": { path: "/", selector: "#industries" },
  "industries-saas": { path: "/", selector: "#industries" },
  "case-studies-generic": { path: "/", selector: "#work" },
  "case-study-healthcare": { path: "/", selector: "#work" },
  "case-study-saas": { path: "/", selector: "#work" },
  "case-study-crm": { path: "/", selector: "#work" },
  "why-us": { path: "/" },
  "services-accent": { path: "/", selector: "#services" },
  "stats-background": { path: "/" },
  // Video slots
  "hero-video": { path: "/", selector: "section:first-of-type" },
  "services-video": { path: "/services" },
  "about-video": { path: "/about" },
};

// Navigate to the right page and scroll to section for a given slot
function navigateToSlot(slot: string) {
  const mapping = slotToPageMap[slot];

  // Fallback mapping by name pattern
  const targetPath = mapping?.path ?? (
    slot.includes("hero") ? "/" :
    slot.includes("services") ? "/services" :
    slot.includes("about") ? "/about" :
    slot.startsWith("industries") ? "/" :
    slot.startsWith("case-stud") ? "/" :
    "/"
  );

  const currentPath = window.location.pathname;

  if (currentPath !== targetPath) {
    // Navigate to the correct page with preview mode preserved
    window.location.href = `${targetPath}?preview=1`;
    return;
  }

  // Already on the right page — scroll to section
  const selector = mapping?.selector;
  if (selector) {
    try {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
    } catch {
      // Selector might be invalid
    }
  }

  // Fallback: scroll to top for hero-ish slots
  if (slot.includes("hero")) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

export function ImagePreviewBar() {
  const imageCtx = usePreview();
  const videoCtx = useVideoPreview();

  // Destructure image context as primary
  const {
    isPreviewMode,
    manifest,
    isLoading,
    currentSlot,
    setCurrentSlot,
    getSlotPrompt,
    refreshManifest,
  } = imageCtx;

  const [isSelecting, setIsSelecting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showRemixInput, setShowRemixInput] = useState(false);
  const [remixPrompt, setRemixPrompt] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showVideoControls, setShowVideoControls] = useState(true);

  // Sync preview mode between image and video contexts
  const setPreviewMode = useCallback((enabled: boolean) => {
    imageCtx.setPreviewMode(enabled);
    videoCtx.setPreviewMode(enabled);
  }, [imageCtx, videoCtx]);

  // Track which slots are video slots
  const videoSlotSet = new Set(
    videoCtx.manifest ? Object.keys(videoCtx.manifest.slots).filter(
      (slot) => videoCtx.manifest!.slots[slot].files.length > 0
    ) : []
  );

  const isVideoSlot = (slot: string) => videoSlotSet.has(slot);

  // Get available slots from both manifests
  const imageSlots = manifest ? Object.keys(manifest.slots).filter(
    (slot) => manifest.slots[slot].files.length > 0
  ) : [];
  const videoSlots = Array.from(videoSlotSet);
  const availableSlots = [...imageSlots, ...videoSlots];

  // Delegate to the right context based on slot type
  const cycleVariant = useCallback((slot: string, direction: "prev" | "next") => {
    if (videoSlotSet.has(slot)) {
      videoCtx.cycleVariant(slot, direction);
    } else {
      imageCtx.cycleVariant(slot, direction);
    }
  }, [imageCtx, videoCtx, videoSlotSet]);

  const getSlotVariantInfo = useCallback((slot: string) => {
    return videoSlotSet.has(slot)
      ? videoCtx.getSlotVariantInfo(slot)
      : imageCtx.getSlotVariantInfo(slot);
  }, [imageCtx, videoCtx, videoSlotSet]);

  const getCurrentFilename = useCallback((slot: string) => {
    return videoSlotSet.has(slot)
      ? videoCtx.getCurrentFilename(slot)
      : imageCtx.getCurrentFilename(slot);
  }, [imageCtx, videoCtx, videoSlotSet]);

  const selectCurrentVariant = useCallback(async (slot: string) => {
    return videoSlotSet.has(slot)
      ? videoCtx.selectCurrentVariant(slot)
      : imageCtx.selectCurrentVariant(slot);
  }, [imageCtx, videoCtx, videoSlotSet]);

  const deleteCurrentVariant = useCallback(async (slot: string) => {
    return videoSlotSet.has(slot)
      ? videoCtx.deleteCurrentVariant(slot)
      : imageCtx.deleteCurrentVariant(slot);
  }, [imageCtx, videoCtx, videoSlotSet]);

  const regenerateSlot = useCallback(async (slot: string, prompt?: string) => {
    return videoSlotSet.has(slot)
      ? videoCtx.regenerateSlot(slot, prompt)
      : imageCtx.regenerateSlot(slot, prompt);
  }, [imageCtx, videoCtx, videoSlotSet]);

  const getSlotPromptCombined = useCallback((slot: string) => {
    return videoSlotSet.has(slot)
      ? videoCtx.getSlotPrompt(slot)
      : getSlotPrompt(slot);
  }, [getSlotPrompt, videoCtx, videoSlotSet]);

  // Set first slot as default when manifest loads
  useEffect(() => {
    if (availableSlots.length > 0 && !currentSlot) {
      setCurrentSlot(availableSlots[0]);
    }
  }, [availableSlots, currentSlot, setCurrentSlot]);

  // Cycle through slots (for up/down navigation)
  const cycleSlot = useCallback((direction: "prev" | "next") => {
    if (availableSlots.length === 0) return;

    const currentIndex = currentSlot ? availableSlots.indexOf(currentSlot) : -1;
    let newIndex: number;

    if (direction === "next") {
      newIndex = currentIndex < availableSlots.length - 1 ? currentIndex + 1 : 0;
    } else {
      newIndex = currentIndex > 0 ? currentIndex - 1 : availableSlots.length - 1;
    }

    const newSlot = availableSlots[newIndex];
    setCurrentSlot(newSlot);
    // Auto-scroll to the section
    setTimeout(() => navigateToSlot(newSlot), 100);
  }, [availableSlots, currentSlot, setCurrentSlot]);

  // Keyboard shortcuts
  useEffect(() => {
    if (isProduction || !isPreviewMode) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if typing in an input or select
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
        return;
      }

      // Left/Right: cycle through variants
      if (currentSlot) {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          cycleVariant(currentSlot, "prev");
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          cycleVariant(currentSlot, "next");
        } else if (e.key === "Enter") {
          e.preventDefault();
          handleSelect();
        }
      }

      // Up/Down: cycle through slots
      if (e.key === "ArrowUp") {
        e.preventDefault();
        cycleSlot("prev");
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        cycleSlot("next");
      }

      // Escape to close modals first, then preview mode
      if (e.key === "Escape") {
        if (showDeleteConfirm) {
          setShowDeleteConfirm(false);
        } else if (showRemixInput) {
          setShowRemixInput(false);
          setRemixPrompt("");
        } else {
          setPreviewMode(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPreviewMode, currentSlot, cycleVariant, cycleSlot, setPreviewMode, showRemixInput, showDeleteConfirm]);

  const handleSelect = useCallback(async () => {
    if (!currentSlot || isSelecting) return;

    setIsSelecting(true);
    const success = await selectCurrentVariant(currentSlot);
    setIsSelecting(false);

    if (success) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }
  }, [currentSlot, isSelecting, selectCurrentVariant]);

  const handleDeleteClick = useCallback(() => {
    if (!currentSlot || isDeleting) return;
    setShowDeleteConfirm(true);
  }, [currentSlot, isDeleting]);

  const handleDeleteConfirm = useCallback(async () => {
    if (!currentSlot || isDeleting) return;

    setShowDeleteConfirm(false);
    setIsDeleting(true);
    await deleteCurrentVariant(currentSlot);
    setIsDeleting(false);
  }, [currentSlot, isDeleting, deleteCurrentVariant]);

  const handleRegenerate = useCallback(async () => {
    if (!currentSlot || isRegenerating) return;

    setIsRegenerating(true);
    await regenerateSlot(currentSlot);
    setIsRegenerating(false);
  }, [currentSlot, isRegenerating, regenerateSlot]);

  const handleRemix = useCallback(async () => {
    if (!currentSlot || isRegenerating || !remixPrompt.trim()) return;

    setIsRegenerating(true);
    await regenerateSlot(currentSlot, remixPrompt.trim());
    setIsRegenerating(false);
    setShowRemixInput(false);
    setRemixPrompt("");
  }, [currentSlot, isRegenerating, remixPrompt, regenerateSlot]);

  // Initialize remix prompt with current slot's prompt when opening
  const openRemixInput = useCallback(() => {
    if (currentSlot) {
      const existingPrompt = getSlotPromptCombined(currentSlot);
      setRemixPrompt(existingPrompt ?? "");
    }
    setShowRemixInput(true);
  }, [currentSlot, getSlotPromptCombined]);

  // Production guard
  if (isProduction) {
    return null;
  }

  // Not in preview mode - show toggle button
  if (!isPreviewMode) {
    return (
      <button
        onClick={() => setPreviewMode(true)}
        className="fixed bottom-4 right-4 z-50 bg-black text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 transition-colors text-sm font-medium flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Preview Media
      </button>
    );
  }

  const variantInfo = currentSlot ? getSlotVariantInfo(currentSlot) : null;
  const currentFilename = currentSlot ? getCurrentFilename(currentSlot) : null;
  const selectedFilename = currentSlot
    ? (isVideoSlot(currentSlot)
      ? videoCtx.manifest?.slots[currentSlot]?.selected
      : manifest?.slots[currentSlot]?.selected) || null
    : null;
  const isCurrentSelected = currentFilename === selectedFilename;

  return (
    <>
      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-gray-900 border border-white/10 rounded-xl p-6 max-w-md mx-4 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Delete Image?</h3>
                <p className="text-sm text-white/60">This cannot be undone</p>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-3 mb-4">
              <p className="text-xs text-white/40 mb-1">File to delete:</p>
              <p className="text-sm text-white font-mono truncate">{currentFilename}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 px-4 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="flex-1 px-4 py-2.5 bg-red-500 hover:bg-red-600 rounded-lg text-sm font-medium transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm text-white px-4 py-3 shadow-2xl">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
        {/* Left - Label and Slot Selector */}
        <div className="flex items-center gap-4">
          <span className="bg-teal-500 text-white text-xs font-bold px-2.5 py-1 rounded">
            Preview Mode
          </span>

          {isLoading ? (
            <span className="text-white/60 text-sm">Loading...</span>
          ) : availableSlots.length === 0 ? (
            <span className="text-white/60 text-sm">No media generated yet</span>
          ) : (
            <select
              value={currentSlot ?? ""}
              onChange={(e) => {
                const newSlot = e.target.value;
                setCurrentSlot(newSlot);
                // Auto-scroll to the section
                setTimeout(() => navigateToSlot(newSlot), 100);
              }}
              className="bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              {availableSlots.map((slot) => (
                <option key={slot} value={slot} className="bg-gray-900">
                  {isVideoSlot(slot) ? `\uD83C\uDFAC ${slot}` : slot}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Center - Navigation */}
        {currentSlot && variantInfo && (
          <div className="flex items-center gap-3">
            <button
              onClick={() => cycleVariant(currentSlot, "prev")}
              className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              title="Previous (Left Arrow)"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex flex-col items-center">
              <span className="text-sm font-medium">
                {variantInfo.current} of {variantInfo.total}
              </span>
              {selectedFilename && (
                <span className={`text-xs ${isCurrentSelected ? "text-green-400" : "text-white/40"}`}>
                  {isCurrentSelected ? (
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      Selected
                    </span>
                  ) : (
                    `Selected: #${(
                      (isVideoSlot(currentSlot)
                        ? videoCtx.manifest?.slots[currentSlot]?.files?.findIndex(f => f.filename === selectedFilename)
                        : manifest?.slots[currentSlot]?.files?.findIndex(f => f.filename === selectedFilename)
                      ) ?? -1) + 1 || "?"}`
                  )}
                </span>
              )}
            </div>

            <button
              onClick={() => cycleVariant(currentSlot, "next")}
              className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              title="Next (Right Arrow)"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* Right - Actions */}
        <div className="flex items-center gap-2">
          {currentSlot && variantInfo && (
            <>
              {/* Delete current variant */}
              <button
                onClick={handleDeleteClick}
                disabled={isDeleting || variantInfo.total <= 1}
                className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-red-500/80 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                title="Delete this variant"
              >
                {isDeleting ? (
                  <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                )}
              </button>

              {/* Regenerate */}
              <button
                onClick={handleRegenerate}
                disabled={isRegenerating}
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5"
                title="Generate 3 more with same prompt"
              >
                {isRegenerating ? (
                  <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                )}
                +3
              </button>

              {/* Remix */}
              <button
                onClick={openRemixInput}
                disabled={isRegenerating}
                className="px-3 py-1.5 bg-purple-500/80 hover:bg-purple-500 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                title="Modify prompt and regenerate"
              >
                Remix
              </button>

              <div className="w-px h-6 bg-white/20 mx-1" />

              {/* Select */}
              <button
                onClick={handleSelect}
                disabled={isSelecting}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  showSuccess
                    ? "bg-green-500 text-white"
                    : "bg-teal-500 hover:bg-teal-600 text-white"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSelecting ? "Saving..." : showSuccess ? "Selected!" : "Select"}
              </button>
            </>
          )}

          <button
            onClick={() => { refreshManifest(); videoCtx.refreshManifest(); }}
            className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            title="Refresh manifest"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>

          <button
            onClick={() => setPreviewMode(false)}
            className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-red-500/80 rounded-full transition-colors"
            title="Close preview (Escape)"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Remix input panel */}
      {showRemixInput && (
        <div className="max-w-[1400px] mx-auto mt-3 p-3 bg-white/5 rounded-lg border border-white/10">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <label className="block text-xs text-white/60 mb-1.5">Modify prompt and generate 3 new variants:</label>
              <textarea
                value={remixPrompt}
                onChange={(e) => setRemixPrompt(e.target.value)}
                placeholder="Enter modified prompt..."
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                rows={2}
                autoFocus
              />
            </div>
            <div className="flex flex-col gap-2 pt-5">
              <button
                onClick={handleRemix}
                disabled={isRegenerating || !remixPrompt.trim()}
                className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isRegenerating && (
                  <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                {isRegenerating ? "Generating..." : "Generate"}
              </button>
              <button
                onClick={() => {
                  setShowRemixInput(false);
                  setRemixPrompt("");
                }}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Video design controls */}
      {currentSlot && isVideoSlot(currentSlot) && (
        <VideoDesignControls
          slot={currentSlot}
          show={showVideoControls}
          onToggle={() => setShowVideoControls(!showVideoControls)}
          settings={videoCtx.getDesignSettings(currentSlot)}
          onUpdate={(key, value) => videoCtx.updateDesignSetting(currentSlot, key, value)}
          onReset={() => videoCtx.resetDesignSettings(currentSlot)}
        />
      )}

      {/* Keyboard shortcuts hint */}
      <div className="max-w-[1400px] mx-auto mt-2 flex items-center gap-4 text-xs text-white/40">
        <span>↑ ↓ Switch slot</span>
        <span>← → Cycle variants</span>
        <span>Esc Close</span>
      </div>
    </div>
    </>
  );
}

// Compact slider for a single design setting
function DesignSlider({
  label,
  value,
  min,
  max,
  step,
  unit,
  defaultValue,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  defaultValue: number;
  onChange: (v: number) => void;
}) {
  const isDefault = value === defaultValue;
  return (
    <div className="flex flex-col gap-1 min-w-[140px]">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-white/60">{label}</span>
        <span className={`text-[11px] font-mono ${isDefault ? "text-white/40" : "text-teal-400"}`}>
          {step < 1 ? value.toFixed(2) : value}{unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1 accent-teal-500 cursor-pointer"
      />
    </div>
  );
}

// Video design controls panel
function VideoDesignControls({
  slot,
  show,
  onToggle,
  settings,
  onUpdate,
  onReset,
}: {
  slot: string;
  show: boolean;
  onToggle: () => void;
  settings: VideoDesignSettings;
  onUpdate: (key: keyof VideoDesignSettings, value: number) => void;
  onReset: () => void;
}) {
  const hasChanges = Object.keys(DEFAULT_VIDEO_DESIGN).some(
    (k) => settings[k as keyof VideoDesignSettings] !== DEFAULT_VIDEO_DESIGN[k as keyof VideoDesignSettings]
  );

  return (
    <div className="max-w-[1400px] mx-auto mt-2">
      <button
        onClick={onToggle}
        className="flex items-center gap-2 text-xs text-white/50 hover:text-white/80 transition-colors mb-1"
      >
        <svg
          className={`w-3 h-3 transition-transform ${show ? "rotate-90" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        Video Design
        {hasChanges && <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />}
      </button>

      {show && (
        <div className="p-3 bg-white/5 rounded-lg border border-white/10">
          <div className="flex flex-wrap items-end gap-x-5 gap-y-3">
            <DesignSlider
              label="Opacity"
              value={settings.opacity}
              min={0} max={100} step={1}
              unit="%"
              defaultValue={DEFAULT_VIDEO_DESIGN.opacity}
              onChange={(v) => onUpdate("opacity", v)}
            />
            <DesignSlider
              label="Overlay Dark"
              value={settings.overlayDarkness}
              min={0} max={100} step={1}
              unit="%"
              defaultValue={DEFAULT_VIDEO_DESIGN.overlayDarkness}
              onChange={(v) => onUpdate("overlayDarkness", v)}
            />
            <DesignSlider
              label="Blur"
              value={settings.blur}
              min={0} max={20} step={0.5}
              unit="px"
              defaultValue={DEFAULT_VIDEO_DESIGN.blur}
              onChange={(v) => onUpdate("blur", v)}
            />
            <DesignSlider
              label="Speed"
              value={settings.speed}
              min={0.25} max={2} step={0.05}
              unit="x"
              defaultValue={DEFAULT_VIDEO_DESIGN.speed}
              onChange={(v) => onUpdate("speed", v)}
            />
            <DesignSlider
              label="Brightness"
              value={settings.brightness}
              min={0} max={200} step={1}
              unit="%"
              defaultValue={DEFAULT_VIDEO_DESIGN.brightness}
              onChange={(v) => onUpdate("brightness", v)}
            />
            <DesignSlider
              label="Saturation"
              value={settings.saturation}
              min={0} max={200} step={1}
              unit="%"
              defaultValue={DEFAULT_VIDEO_DESIGN.saturation}
              onChange={(v) => onUpdate("saturation", v)}
            />
            {hasChanges && (
              <button
                onClick={onReset}
                className="text-[11px] text-white/40 hover:text-white/70 transition-colors px-2 py-1 bg-white/5 rounded"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
