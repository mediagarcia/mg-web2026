#!/usr/bin/env npx tsx
import { config } from "dotenv";

// Load environment variables from .env.local and .env
config({ path: ".env.local" });
config({ path: ".env" });

/**
 * AI Video Generation CLI Script
 * Generates videos via Google Veo 2.0 API and updates the manifest.
 *
 * Usage:
 *   npm run generate-video -- --slot hero --prompt "Modern tech office" --count 2
 *
 * Options:
 *   --slot     (required) Slot identifier (e.g., hero, services/ai)
 *   --prompt   (required) Video generation prompt
 *   --count    (optional) Number of variants (default: 2)
 *   --aspect   (optional) Aspect ratio: 16:9, 9:16 (default: 16:9)
 *   --duration (optional) Duration in seconds: 5, 6, 8 (default: 8)
 *   --name     (optional) Base filename
 *   --out      (optional) Custom output directory
 */

import { writeFileSync, readFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import type { VideoManifest, VideoSlot, GeneratedVideoFile, VideoAspectRatio, VideoDuration } from "../src/lib/videos/types";

const MANIFEST_PATH = join(process.cwd(), "public/videos/generated/manifest.json");
const GENERATED_DIR = join(process.cwd(), "public/videos/generated");
const MODEL = "veo-2.0-generate-001";

const POLL_INTERVAL_MS = 10_000; // 10 seconds
const POLL_TIMEOUT_MS = 5 * 60 * 1000; // 5 minutes

interface Args {
  slot?: string;
  prompt?: string;
  count: number;
  aspect: VideoAspectRatio;
  duration: VideoDuration;
  name?: string;
  out?: string;
}

function parseArgs(): Args {
  const args: Args = {
    count: 2,
    aspect: "16:9",
    duration: 8,
  };

  const argv = process.argv.slice(2);
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    const nextArg = argv[i + 1];

    if (arg === "--slot" && nextArg) {
      args.slot = nextArg;
      i++;
    } else if (arg === "--prompt" && nextArg) {
      args.prompt = nextArg;
      i++;
    } else if (arg === "--count" && nextArg) {
      args.count = parseInt(nextArg, 10);
      i++;
    } else if (arg === "--aspect" && nextArg) {
      if (["16:9", "9:16"].includes(nextArg)) {
        args.aspect = nextArg as VideoAspectRatio;
      }
      i++;
    } else if (arg === "--duration" && nextArg) {
      const dur = parseInt(nextArg, 10);
      if ([5, 6, 8].includes(dur)) {
        args.duration = dur as VideoDuration;
      }
      i++;
    } else if (arg === "--name" && nextArg) {
      args.name = nextArg;
      i++;
    } else if (arg === "--out" && nextArg) {
      args.out = nextArg;
      i++;
    }
  }

  return args;
}

function loadManifest(): VideoManifest {
  if (existsSync(MANIFEST_PATH)) {
    const content = readFileSync(MANIFEST_PATH, "utf-8");
    return JSON.parse(content);
  }
  return {
    version: "1.0",
    lastUpdated: new Date().toISOString(),
    slots: {},
  };
}

function saveManifest(manifest: VideoManifest): void {
  manifest.lastUpdated = new Date().toISOString();
  writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
}

function getNextFileNumber(slot: VideoSlot): number {
  if (slot.files.length === 0) return 1;

  const numbers = slot.files.map((f) => {
    const match = f.filename.match(/-(\d+)\.\w+$/);
    return match ? parseInt(match[1], 10) : 0;
  });

  return Math.max(...numbers) + 1;
}

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function generateVideo(
  prompt: string,
  aspect: VideoAspectRatio,
  duration: VideoDuration,
): Promise<Buffer | null> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is required");
  }

  const BASE_URL = "https://generativelanguage.googleapis.com/v1beta";
  const url = `${BASE_URL}/models/${MODEL}:predictLongRunning`;

  // Start the long-running operation
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify({
      instances: [
        {
          prompt,
        },
      ],
      parameters: {
        aspectRatio: aspect,
        durationSeconds: duration,
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`API error (${response.status}):`, errorText);
    return null;
  }

  const operation = await response.json();
  const operationName = operation.name;

  if (!operationName) {
    console.error("No operation name in response:", JSON.stringify(operation));
    return null;
  }

  console.log(`  Operation started: ${operationName}`);
  console.log(`  Polling every ${POLL_INTERVAL_MS / 1000}s (timeout: ${POLL_TIMEOUT_MS / 1000}s)...`);

  // Poll for completion
  const pollUrl = `${BASE_URL}/${operationName}`;
  const startTime = Date.now();

  while (Date.now() - startTime < POLL_TIMEOUT_MS) {
    await sleep(POLL_INTERVAL_MS);

    const pollResponse = await fetch(pollUrl, {
      headers: {
        "x-goog-api-key": apiKey,
      },
    });

    if (!pollResponse.ok) {
      const errorText = await pollResponse.text();
      console.error(`Poll error (${pollResponse.status}):`, errorText);
      return null;
    }

    const pollResult = await pollResponse.json();

    if (pollResult.done) {
      if (pollResult.error) {
        console.error("Operation failed:", JSON.stringify(pollResult.error));
        return null;
      }

      // Extract video from Gemini API response format
      const samples = pollResult.response?.generateVideoResponse?.generatedSamples;
      if (!samples || samples.length === 0) {
        console.error("No generated samples in response:", JSON.stringify(pollResult.response));
        return null;
      }

      const videoUri = samples[0]?.video?.uri;
      if (videoUri) {
        console.log(`  Downloading video from: ${videoUri.substring(0, 80)}...`);
        // Veo video URIs require the API key for authentication
        const downloadUrl = videoUri.includes("?")
          ? `${videoUri}&key=${apiKey}`
          : `${videoUri}?key=${apiKey}`;
        const downloadResponse = await fetch(downloadUrl);

        if (downloadResponse.ok) {
          const arrayBuffer = await downloadResponse.arrayBuffer();
          return Buffer.from(arrayBuffer);
        }

        const errText = await downloadResponse.text().catch(() => "");
        console.error(`Failed to download video (${downloadResponse.status}): ${errText.substring(0, 200)}`);
        return null;
      }

      console.error("No video URI in response:", JSON.stringify(samples[0]));
      return null;
    }

    const elapsed = Math.round((Date.now() - startTime) / 1000);
    console.log(`  Still processing... (${elapsed}s elapsed)`);
  }

  console.error("Operation timed out");
  return null;
}

async function main() {
  const args = parseArgs();

  // Validate required args
  if (!args.slot) {
    console.error("Error: --slot is required");
    console.error("Usage: npm run generate-video -- --slot hero --prompt \"Your prompt here\"");
    process.exit(1);
  }

  if (!args.prompt) {
    console.error("Error: --prompt is required");
    console.error("Usage: npm run generate-video -- --slot hero --prompt \"Your prompt here\"");
    process.exit(1);
  }

  // Validate API key
  if (!process.env.GEMINI_API_KEY) {
    console.error("Error: GEMINI_API_KEY environment variable is not set");
    console.error("Add GEMINI_API_KEY=your_key to your .env.local file");
    process.exit(1);
  }

  console.log(`\nGenerating ${args.count} videos for slot: ${args.slot}`);
  console.log(`Prompt: ${args.prompt}`);
  console.log(`Aspect ratio: ${args.aspect}`);
  console.log(`Duration: ${args.duration}s\n`);

  // Load or create manifest
  const manifest = loadManifest();

  // Get or create slot
  const now = new Date().toISOString();
  const slot: VideoSlot = manifest.slots[args.slot] ?? {
    slot: args.slot,
    prompt: args.prompt,
    model: MODEL,
    aspect: args.aspect,
    duration: args.duration,
    createdAt: now,
    updatedAt: now,
    files: [],
    selected: null,
  };

  // Update slot metadata
  slot.prompt = args.prompt;
  slot.model = MODEL;
  slot.aspect = args.aspect;
  slot.duration = args.duration;
  slot.updatedAt = now;

  // Determine output directory
  const outputDir = args.out ?? join(GENERATED_DIR, args.slot.replace(/\//g, "-"));
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  // Generate videos
  const baseName = args.name ?? args.slot.replace(/\//g, "-");
  const startNumber = getNextFileNumber(slot);
  let successCount = 0;

  for (let i = 0; i < args.count; i++) {
    const fileNumber = String(startNumber + i).padStart(3, "0");
    const filename = `${baseName}-${fileNumber}.mp4`;
    const filePath = join(outputDir, filename);
    const publicPath = `/videos/generated/${args.slot.replace(/\//g, "-")}/${filename}`;

    console.log(`Generating ${i + 1}/${args.count}: ${filename}...`);

    try {
      const videoBuffer = await generateVideo(args.prompt, args.aspect, args.duration);

      if (videoBuffer) {
        writeFileSync(filePath, videoBuffer);

        const fileEntry: GeneratedVideoFile = {
          filename,
          path: publicPath,
          generatedAt: new Date().toISOString(),
          durationSeconds: args.duration,
        };

        slot.files.push(fileEntry);
        successCount++;
        console.log(`  ✓ Saved: ${filePath}`);
      } else {
        console.log(`  ✗ Failed to generate video`);
      }
    } catch (error) {
      console.error(`  ✗ Error:`, error instanceof Error ? error.message : error);
    }
  }

  // Save manifest
  manifest.slots[args.slot] = slot;
  saveManifest(manifest);

  console.log(`\n✓ Generated ${successCount}/${args.count} videos`);
  console.log(`✓ Manifest updated: ${MANIFEST_PATH}`);
  console.log(`\nTo review and select videos, visit: http://localhost:3500/video-staging`);
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
