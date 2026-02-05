import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import type { ImageManifest } from "./types";

const MANIFEST_PATH = join(process.cwd(), "public/images/generated/manifest.json");

/**
 * Get the selected image path for a slot, with optional fallback.
 * Server-side only (uses node:fs).
 *
 * @param slot - The slot identifier (e.g., "hero", "services/ai")
 * @param fallback - Optional fallback path if slot doesn't exist or has no images
 * @returns The image path or fallback, or null if neither exists
 */
export function getImageForSlot(slot: string, fallback?: string): string | null {
  try {
    if (!existsSync(MANIFEST_PATH)) {
      return fallback ?? null;
    }

    const manifestContent = readFileSync(MANIFEST_PATH, "utf-8");
    const manifest: ImageManifest = JSON.parse(manifestContent);

    const slotData = manifest.slots[slot];
    if (!slotData || slotData.files.length === 0) {
      return fallback ?? null;
    }

    // Return selected image, or first variant, or fallback
    if (slotData.selected) {
      const selectedFile = slotData.files.find((f) => f.filename === slotData.selected);
      if (selectedFile) {
        return selectedFile.path;
      }
    }

    // Fall back to first image if no selection
    return slotData.files[0].path;
  } catch {
    return fallback ?? null;
  }
}
