import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import type { ImageManifest } from "./types";

const MANIFEST_PATH = join(process.cwd(), "public/images/generated/manifest.json");

function loadManifest(): ImageManifest | null {
  try {
    if (!existsSync(MANIFEST_PATH)) return null;
    return JSON.parse(readFileSync(MANIFEST_PATH, "utf-8"));
  } catch {
    return null;
  }
}

/**
 * Get the selected image path for a slot, with optional fallback.
 * Server-side only (uses node:fs).
 *
 * @param slot - The slot identifier (e.g., "hero", "services/ai")
 * @param fallback - Optional fallback path if slot doesn't exist or has no images
 * @returns The image path or fallback, or null if neither exists
 */
export function getImageForSlot(slot: string, fallback?: string): string | null {
  const manifest = loadManifest();
  if (!manifest) return fallback ?? null;

  const slotData = manifest.slots[slot];
  if (!slotData || slotData.files.length === 0) {
    return fallback ?? null;
  }

  // Return selected image path (prefer selectedPath for deployed images)
  if (slotData.selected) {
    // Use selectedPath if available (points to /images/selected/ for production)
    if (slotData.selectedPath) {
      return slotData.selectedPath;
    }
    // Fall back to finding in files array (for backwards compatibility)
    const selectedFile = slotData.files.find((f) => f.filename === slotData.selected);
    if (selectedFile) {
      return selectedFile.path;
    }
  }

  // Fall back to first image if no selection (dev only, won't work in prod)
  return slotData.files[0]?.path ?? fallback ?? null;
}

/**
 * Get the selected image for a base slot, checking versioned variants first.
 * Automatically finds highest version (v3 > v2 > base).
 * Server-side only (uses node:fs).
 *
 * @param baseSlot - The base slot name (e.g., "case-study-healthcare")
 * @param fallback - Optional fallback path
 * @returns The image path from highest versioned slot with selection, or fallback
 */
export function getVersionedImageForSlot(baseSlot: string, fallback?: string): string | null {
  const manifest = loadManifest();
  if (!manifest) return fallback ?? null;

  // Find all versioned slots
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

  // Sort by version descending (highest first)
  versions.sort((a, b) => b.version - a.version);

  // Return first slot that has a selected image
  for (const { slot } of versions) {
    const result = getImageForSlot(slot);
    if (result) return result;
  }

  return fallback ?? null;
}
