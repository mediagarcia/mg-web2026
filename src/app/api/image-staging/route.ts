import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync, existsSync, unlinkSync, mkdirSync, copyFileSync } from "node:fs";
import { join, dirname } from "node:path";
import type { ImageManifest } from "@/lib/images/types";

const MANIFEST_PATH = join(process.cwd(), "public/images/generated/manifest.json");
const SELECTED_DIR = join(process.cwd(), "public/images/selected");

/**
 * Copy a selected image to the selected/ folder for deployment.
 * The selected folder is tracked in git, while generated/ is gitignored.
 */
function copyToSelectedFolder(slot: string, sourcePath: string): string {
  // Ensure selected directory exists
  if (!existsSync(SELECTED_DIR)) {
    mkdirSync(SELECTED_DIR, { recursive: true });
  }

  // Create a clean filename: slot-name.ext (e.g., "hero.png", "industries-healthcare.png")
  const ext = sourcePath.split(".").pop() || "png";
  const cleanSlot = slot.replace(/\//g, "-"); // Replace slashes with dashes
  const destFilename = `${cleanSlot}.${ext}`;
  const destPath = join(SELECTED_DIR, destFilename);

  // Copy the file
  const fullSourcePath = join(process.cwd(), "public", sourcePath);
  if (existsSync(fullSourcePath)) {
    copyFileSync(fullSourcePath, destPath);
    return `/images/selected/${destFilename}`;
  }

  return sourcePath; // Return original if copy fails
}

// Only allow in development
function isDevelopment(): boolean {
  return process.env.NODE_ENV === "development";
}

export async function GET() {
  if (!isDevelopment()) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    if (!existsSync(MANIFEST_PATH)) {
      return NextResponse.json({
        version: "1.0",
        lastUpdated: new Date().toISOString(),
        slots: {},
      });
    }

    const content = readFileSync(MANIFEST_PATH, "utf-8");
    const manifest: ImageManifest = JSON.parse(content);
    return NextResponse.json(manifest);
  } catch {
    return NextResponse.json({ error: "Failed to read manifest" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (!isDevelopment()) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const body = await request.json();
    const { slot, selected } = body;

    if (!slot || typeof selected !== "string") {
      return NextResponse.json({ error: "Missing slot or selected" }, { status: 400 });
    }

    // Load manifest
    if (!existsSync(MANIFEST_PATH)) {
      return NextResponse.json({ error: "Manifest not found" }, { status: 404 });
    }

    const content = readFileSync(MANIFEST_PATH, "utf-8");
    const manifest: ImageManifest = JSON.parse(content);

    // Update selection
    if (!manifest.slots[slot]) {
      return NextResponse.json({ error: "Slot not found" }, { status: 404 });
    }

    // Find the selected file to get its path
    const selectedFile = manifest.slots[slot].files.find((f) => f.filename === selected);
    if (!selectedFile) {
      return NextResponse.json({ error: "Selected file not found" }, { status: 404 });
    }

    // Copy to selected folder for deployment
    const selectedPath = copyToSelectedFolder(slot, selectedFile.path);

    manifest.slots[slot].selected = selected;
    manifest.slots[slot].selectedPath = selectedPath; // Store the deployed path
    manifest.slots[slot].updatedAt = new Date().toISOString();
    manifest.lastUpdated = new Date().toISOString();

    // Save manifest
    writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));

    return NextResponse.json({ success: true, manifest, selectedPath });
  } catch {
    return NextResponse.json({ error: "Failed to update manifest" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  if (!isDevelopment()) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const body = await request.json();
    const { slot, filename } = body;

    if (!slot || !filename) {
      return NextResponse.json({ error: "Missing slot or filename" }, { status: 400 });
    }

    // Load manifest
    if (!existsSync(MANIFEST_PATH)) {
      return NextResponse.json({ error: "Manifest not found" }, { status: 404 });
    }

    const content = readFileSync(MANIFEST_PATH, "utf-8");
    const manifest: ImageManifest = JSON.parse(content);

    // Remove file from slot
    if (!manifest.slots[slot]) {
      return NextResponse.json({ error: "Slot not found" }, { status: 404 });
    }

    // Find and delete the actual file from disk
    const fileToDelete = manifest.slots[slot].files.find((f) => f.filename === filename);
    if (fileToDelete) {
      const filePath = join(process.cwd(), "public", fileToDelete.path);
      if (existsSync(filePath)) {
        try {
          unlinkSync(filePath);
        } catch (err) {
          console.error("Failed to delete file from disk:", err);
        }
      }
    }

    manifest.slots[slot].files = manifest.slots[slot].files.filter((f) => f.filename !== filename);

    // Clear selection if deleted file was selected
    if (manifest.slots[slot].selected === filename) {
      manifest.slots[slot].selected = null;
    }

    manifest.slots[slot].updatedAt = new Date().toISOString();
    manifest.lastUpdated = new Date().toISOString();

    // Save manifest
    writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));

    return NextResponse.json({ success: true, manifest });
  } catch {
    return NextResponse.json({ error: "Failed to update manifest" }, { status: 500 });
  }
}
