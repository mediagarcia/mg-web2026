"use client";

import { usePreview } from "@/lib/images/preview-context";
import { Industries, type IndustryImages } from "./Industries";

interface IndustriesWithPreviewProps {
  defaultImages?: IndustryImages;
}

export function IndustriesWithPreview({ defaultImages }: IndustriesWithPreviewProps = {}) {
  const { isPreviewMode, getCurrentImagePath, manifest } = usePreview();

  // Dynamically find all versioned slots for a base slot name
  // Returns slots sorted by version (highest first), e.g., [v3, v2, base]
  const findVersionedSlots = (baseSlot: string): string[] => {
    if (!manifest) return [baseSlot];

    const allSlots = Object.keys(manifest.slots);
    const versions: { slot: string; version: number }[] = [];

    for (const slot of allSlots) {
      // Match base slot or versioned variants (e.g., industries-healthcare, industries-healthcare-v2)
      if (slot === baseSlot) {
        versions.push({ slot, version: 0 });
      } else if (slot.startsWith(`${baseSlot}-v`)) {
        const versionMatch = slot.match(/-v(\d+)$/);
        if (versionMatch) {
          versions.push({ slot, version: parseInt(versionMatch[1], 10) });
        }
      }
    }

    // Sort by version descending (highest first)
    return versions.sort((a, b) => b.version - a.version).map((v) => v.slot);
  };

  // Get image path, checking highest version first
  const getImageForSlot = (baseSlot: string) => {
    const slots = findVersionedSlots(baseSlot);
    for (const slotId of slots) {
      const path = getCurrentImagePath(slotId);
      if (path) return path;
    }
    return undefined;
  };

  // In preview mode, use the preview context's current images (highest version priority)
  const images: IndustryImages = isPreviewMode
    ? {
        healthcare: getImageForSlot("industries-healthcare"),
        it: getImageForSlot("industries-it"),
        saas: getImageForSlot("industries-saas"),
      }
    : defaultImages ?? {};

  return <Industries images={images} />;
}
