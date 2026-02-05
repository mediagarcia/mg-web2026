"use client";

import { usePreview } from "@/lib/images/preview-context";
import { Hero } from "./Hero";

interface HeroWithPreviewProps {
  defaultImage?: string | null;
  slot?: string;
}

export function HeroWithPreview({ defaultImage, slot = "hero" }: HeroWithPreviewProps) {
  const { isPreviewMode, getCurrentImagePath } = usePreview();

  // In preview mode, use the preview context's current image
  // Otherwise, use the server-provided default image
  const heroImage = isPreviewMode
    ? getCurrentImagePath(slot, defaultImage ?? undefined)
    : defaultImage;

  return <Hero heroImage={heroImage} />;
}
