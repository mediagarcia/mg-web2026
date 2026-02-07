"use client";

import { useState, useEffect } from "react";
import { useVideoPreview } from "@/lib/videos/preview-context";
import { BackgroundVideo } from "./BackgroundVideo";

interface PreviewBackgroundVideoProps {
  slot: string;
  defaultSrc: string;
  defaultOpacity?: number; // 0-100, the parent's default opacity (e.g., 15 for opacity-15)
  poster?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  className?: string;
}

const OPACITY_STORAGE_KEY = "video-preview-opacity";

function loadSavedOpacity(): Record<string, number> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(OPACITY_STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveOpacity(slot: string, value: number) {
  try {
    const stored = loadSavedOpacity();
    stored[slot] = value;
    localStorage.setItem(OPACITY_STORAGE_KEY, JSON.stringify(stored));
  } catch {
    // ignore
  }
}

/**
 * BackgroundVideo that swaps source in preview mode and adds opacity control.
 * Drop-in replacement for BackgroundVideo on pages with video slots.
 */
export function PreviewBackgroundVideo({
  slot,
  defaultSrc,
  defaultOpacity = 100,
  ...rest
}: PreviewBackgroundVideoProps) {
  const { isPreviewMode, getCurrentVideoPath } = useVideoPreview();
  const [opacity, setOpacity] = useState(defaultOpacity);
  const [showSlider, setShowSlider] = useState(false);

  // Load saved opacity on mount
  useEffect(() => {
    const saved = loadSavedOpacity();
    if (saved[slot] !== undefined) {
      setOpacity(saved[slot]);
    }
  }, [slot]);

  const src = isPreviewMode
    ? getCurrentVideoPath(slot, defaultSrc) ?? defaultSrc
    : defaultSrc;

  const effectiveOpacity = isPreviewMode ? opacity : defaultOpacity;

  return (
    <div style={{ opacity: effectiveOpacity / 100 }} className="absolute inset-0 z-0">
      <BackgroundVideo src={src} {...rest} />
      {/* Opacity control in preview mode */}
      {isPreviewMode && (
        <div className="absolute top-2 right-2 z-20 pointer-events-auto">
          <button
            onClick={() => setShowSlider(!showSlider)}
            className="w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors backdrop-blur-sm"
            title="Adjust video intensity"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
          {showSlider && (
            <div className="absolute top-10 right-0 bg-black/80 backdrop-blur-sm rounded-lg p-3 min-w-[180px] shadow-xl border border-white/10">
              <label className="text-xs text-white/70 block mb-2">
                Video Intensity: {opacity}%
              </label>
              <input
                type="range"
                min={0}
                max={100}
                value={opacity}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setOpacity(val);
                  saveOpacity(slot, val);
                }}
                className="w-full accent-teal-500"
              />
              <div className="flex justify-between text-[10px] text-white/40 mt-1">
                <span>Subtle</span>
                <span>Full</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
