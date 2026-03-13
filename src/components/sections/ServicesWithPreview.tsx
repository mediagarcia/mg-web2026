"use client";

import { usePreview } from "@/lib/images/preview-context";
import { Services } from "./Services";

interface ServicesWithPreviewProps {
  defaultImage?: string | null;
  slot?: string;
}

export function ServicesWithPreview({ defaultImage, slot = "services-banner" }: ServicesWithPreviewProps) {
  const { isPreviewMode, getCurrentImagePath } = usePreview();

  const bannerImage = isPreviewMode
    ? getCurrentImagePath(slot, defaultImage ?? undefined)
    : defaultImage;

  return <Services bannerImage={bannerImage} />;
}
