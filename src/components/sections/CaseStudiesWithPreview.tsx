"use client";

import { usePreview } from "@/lib/images/preview-context";
import { CaseStudies, type CaseStudyImages } from "./CaseStudies";

interface CaseStudiesWithPreviewProps {
  defaultImages?: CaseStudyImages;
}

// Map case study slugs to their base slot names
const slugToBaseSlot: Record<string, string> = {
  "healthcare-integration": "case-study-healthcare",
  "lead-generation-saas": "case-study-saas",
  "crm-migration": "case-study-crm",
};

export function CaseStudiesWithPreview({ defaultImages }: CaseStudiesWithPreviewProps = {}) {
  const { isPreviewMode, getCurrentImagePath, manifest } = usePreview();

  // Dynamically find all versioned slots for a base slot name
  // Returns slots sorted by version (highest first), e.g., [v3, v2, base]
  const findVersionedSlots = (baseSlot: string): string[] => {
    if (!manifest) return [baseSlot];

    const allSlots = Object.keys(manifest.slots);
    const versions: { slot: string; version: number }[] = [];

    for (const slot of allSlots) {
      if (slot === baseSlot) {
        versions.push({ slot, version: 0 });
      } else if (slot.startsWith(`${baseSlot}-v`)) {
        const versionMatch = slot.match(/-v(\d+)$/);
        if (versionMatch) {
          versions.push({ slot, version: parseInt(versionMatch[1], 10) });
        }
      }
    }

    return versions.sort((a, b) => b.version - a.version).map((v) => v.slot);
  };

  // Get image path for a slug, checking highest version first
  const getImageForSlug = (slug: string) => {
    const baseSlot = slugToBaseSlot[slug];
    if (!baseSlot) return undefined;

    const slots = findVersionedSlots(baseSlot);
    for (const slotId of slots) {
      const path = getCurrentImagePath(slotId);
      if (path) return path;
    }
    return undefined;
  };

  // In preview mode, use the preview context's current images
  const images: CaseStudyImages = isPreviewMode
    ? {
        generic: getCurrentImagePath("case-studies-generic", defaultImages?.generic ?? undefined),
        "healthcare-integration": getImageForSlug("healthcare-integration"),
        "lead-generation-saas": getImageForSlug("lead-generation-saas"),
        "crm-migration": getImageForSlug("crm-migration"),
      }
    : defaultImages ?? {};

  return <CaseStudies images={images} />;
}
