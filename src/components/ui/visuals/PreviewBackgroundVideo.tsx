"use client";

import { useRef, useEffect } from "react";
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

/**
 * BackgroundVideo that swaps source in preview mode and applies design settings.
 * Controls live in the preview bar (ImagePreviewBar), not on this component.
 */
export function PreviewBackgroundVideo({
  slot,
  defaultSrc,
  defaultOpacity = 100,
  overlay,
  overlayOpacity,
  ...rest
}: PreviewBackgroundVideoProps) {
  const { isPreviewMode, getCurrentVideoPath, getDesignSettings } = useVideoPreview();
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const src = isPreviewMode
    ? getCurrentVideoPath(slot, defaultSrc) ?? defaultSrc
    : defaultSrc;

  const settings = getDesignSettings(slot);
  const inPreview = isPreviewMode;

  const effectiveOpacity = inPreview ? settings.opacity : defaultOpacity;
  const effectiveOverlay = inPreview ? settings.overlayDarkness : (overlayOpacity ?? 60);
  const effectiveBlur = inPreview ? settings.blur : 0;
  const effectiveBrightness = inPreview ? settings.brightness : 100;
  const effectiveSaturation = inPreview ? settings.saturation : 100;
  const effectiveSpeed = inPreview ? settings.speed : 1;

  // Apply playback speed to the video element
  useEffect(() => {
    if (!inPreview) return;
    const container = videoContainerRef.current;
    if (!container) return;
    const video = container.querySelector("video");
    if (video) {
      video.playbackRate = effectiveSpeed;
    }
  }, [effectiveSpeed, inPreview, src]);

  // Build CSS filter string for blur/brightness/saturation
  const filterParts: string[] = [];
  if (effectiveBlur > 0) filterParts.push(`blur(${effectiveBlur}px)`);
  if (effectiveBrightness !== 100) filterParts.push(`brightness(${effectiveBrightness / 100})`);
  if (effectiveSaturation !== 100) filterParts.push(`saturate(${effectiveSaturation / 100})`);
  const filterStr = filterParts.length > 0 ? filterParts.join(" ") : undefined;

  return (
    <div
      ref={videoContainerRef}
      style={{ opacity: effectiveOpacity / 100 }}
      className="absolute inset-0 z-0"
    >
      <BackgroundVideo
        src={src}
        overlay={overlay ?? true}
        overlayOpacity={effectiveOverlay}
        videoFilter={filterStr}
        {...rest}
      />
    </div>
  );
}
