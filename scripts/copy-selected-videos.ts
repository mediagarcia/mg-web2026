/**
 * Copy all selected videos from generated/ to selected/ folder
 * Run with: npx tsx scripts/copy-selected-videos.ts
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync } from "node:fs";
import { join } from "node:path";

const MANIFEST_PATH = join(process.cwd(), "public/videos/generated/manifest.json");
const SELECTED_DIR = join(process.cwd(), "public/videos/selected");

interface GeneratedVideoFile {
  filename: string;
  path: string;
  generatedAt: string;
  durationSeconds: number;
}

interface VideoSlot {
  slot: string;
  prompt: string;
  model: string;
  aspect: string;
  duration: number;
  createdAt: string;
  updatedAt: string;
  files: GeneratedVideoFile[];
  selected: string | null;
  selectedPath?: string | null;
}

interface VideoManifest {
  version: string;
  lastUpdated: string;
  slots: Record<string, VideoSlot>;
}

function copyToSelectedFolder(slot: string, sourcePath: string): string {
  // Ensure selected directory exists
  if (!existsSync(SELECTED_DIR)) {
    mkdirSync(SELECTED_DIR, { recursive: true });
  }

  // Create a clean filename: slot-name.ext
  const ext = sourcePath.split(".").pop() || "mp4";
  const cleanSlot = slot.replace(/\//g, "-");
  const destFilename = `${cleanSlot}.${ext}`;
  const destPath = join(SELECTED_DIR, destFilename);

  // Copy the file
  const fullSourcePath = join(process.cwd(), "public", sourcePath);
  if (existsSync(fullSourcePath)) {
    copyFileSync(fullSourcePath, destPath);
    console.log(`  Copied: ${sourcePath} -> /videos/selected/${destFilename}`);
    return `/videos/selected/${destFilename}`;
  }

  console.log(`  Warning: Source not found: ${fullSourcePath}`);
  return sourcePath;
}

async function main() {
  console.log("Copying selected videos to selected/ folder...\n");

  if (!existsSync(MANIFEST_PATH)) {
    console.error("Manifest not found at", MANIFEST_PATH);
    process.exit(1);
  }

  const manifest: VideoManifest = JSON.parse(readFileSync(MANIFEST_PATH, "utf-8"));
  let copiedCount = 0;

  for (const [slotId, slotData] of Object.entries(manifest.slots)) {
    if (slotData.selected) {
      const selectedFile = slotData.files.find((f) => f.filename === slotData.selected);
      if (selectedFile) {
        console.log(`Slot: ${slotId}`);
        const selectedPath = copyToSelectedFolder(slotId, selectedFile.path);
        slotData.selectedPath = selectedPath;
        copiedCount++;
      }
    }
  }

  // Update manifest with selectedPath values
  manifest.lastUpdated = new Date().toISOString();
  writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));

  console.log(`\nDone! Copied ${copiedCount} videos.`);
  console.log("Manifest updated with selectedPath values.");
}

main().catch(console.error);
