"use client";

import { usePreview } from "@/lib/images/preview-context";
import { WhyUs } from "./WhyUs";

interface WhyUsWithPreviewProps {
  defaultImage?: string | null;
  slot?: string;
}

export function WhyUsWithPreview({ defaultImage, slot = "why-us" }: WhyUsWithPreviewProps) {
  const { isPreviewMode, getCurrentImagePath } = usePreview();

  // In preview mode, use the preview context's current image
  const backgroundImage = isPreviewMode
    ? getCurrentImagePath(slot, defaultImage ?? undefined)
    : defaultImage;

  return <WhyUs backgroundImage={backgroundImage} />;
}
