import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync, existsSync, unlinkSync } from "node:fs";
import { join } from "node:path";
import type { ImageManifest } from "@/lib/images/types";

const MANIFEST_PATH = join(process.cwd(), "public/images/generated/manifest.json");

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

    manifest.slots[slot].selected = selected;
    manifest.slots[slot].updatedAt = new Date().toISOString();
    manifest.lastUpdated = new Date().toISOString();

    // Save manifest
    writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));

    return NextResponse.json({ success: true, manifest });
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
