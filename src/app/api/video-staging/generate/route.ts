import { NextRequest, NextResponse } from "next/server";
import { spawn } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import type { VideoManifest } from "@/lib/videos/types";

const MANIFEST_PATH = join(process.cwd(), "public/videos/generated/manifest.json");

// Only allow in development
function isDevelopment(): boolean {
  return process.env.NODE_ENV === "development";
}

export async function POST(request: NextRequest) {
  if (!isDevelopment()) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const body = await request.json();
    const { slot, prompt, count = 2 } = body;

    if (!slot) {
      return NextResponse.json({ error: "Missing slot" }, { status: 400 });
    }

    // If no prompt provided, try to get from existing slot
    let finalPrompt = prompt;
    if (!finalPrompt && existsSync(MANIFEST_PATH)) {
      const manifest: VideoManifest = JSON.parse(readFileSync(MANIFEST_PATH, "utf-8"));
      finalPrompt = manifest.slots[slot]?.prompt;
    }

    if (!finalPrompt) {
      return NextResponse.json({ error: "No prompt provided and slot has no existing prompt" }, { status: 400 });
    }

    // Get aspect ratio and duration from existing slot or defaults
    let aspect = "16:9";
    let duration = "8";
    if (existsSync(MANIFEST_PATH)) {
      const manifest: VideoManifest = JSON.parse(readFileSync(MANIFEST_PATH, "utf-8"));
      aspect = manifest.slots[slot]?.aspect || "16:9";
      duration = String(manifest.slots[slot]?.duration || 8);
    }

    // Run the generate-videos script
    const result = await new Promise<{ success: boolean; output: string }>((resolve) => {
      const args = [
        "run", "generate-video", "--",
        "--slot", slot,
        "--prompt", finalPrompt,
        "--count", String(count),
        "--aspect", aspect,
        "--duration", duration,
      ];

      const child = spawn("npm", args, {
        cwd: process.cwd(),
        shell: true,
        env: { ...process.env },
      });

      let output = "";
      let errorOutput = "";

      child.stdout?.on("data", (data) => {
        output += data.toString();
      });

      child.stderr?.on("data", (data) => {
        errorOutput += data.toString();
      });

      child.on("close", (code) => {
        resolve({
          success: code === 0,
          output: output || errorOutput,
        });
      });

      child.on("error", (err) => {
        resolve({
          success: false,
          output: err.message,
        });
      });
    });

    if (!result.success) {
      return NextResponse.json({ error: "Generation failed", details: result.output }, { status: 500 });
    }

    // Return updated manifest
    const updatedManifest: VideoManifest = JSON.parse(readFileSync(MANIFEST_PATH, "utf-8"));

    return NextResponse.json({
      success: true,
      slot: updatedManifest.slots[slot],
      output: result.output,
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate videos", details: String(error) }, { status: 500 });
  }
}
