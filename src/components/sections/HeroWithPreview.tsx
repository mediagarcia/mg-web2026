"use client";

import { usePreview } from "@/lib/images/preview-context";
import { Hero } from "./Hero";

interface HeroWithPreviewProps {
  defaultImage?: string | null;
  defaultVideo?: string | null;
  slot?: string;
}

export function HeroWithPreview({ defaultImage, defaultVideo, slot = "hero" }: HeroWithPreviewProps) {
  const { isPreviewMode, getCurrentImagePath } = usePreview();

  // In preview mode, use the preview context's current image
  // Video preview is handled by PreviewBackgroundVideo inside Hero
  const heroImage = isPreviewMode
    ? getCurrentImagePath(slot, defaultImage ?? undefined)
    : defaultImage;

  return <Hero heroImage={heroImage} heroVideo={defaultVideo} />;
}
