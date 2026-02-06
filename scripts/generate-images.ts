#!/usr/bin/env npx tsx
import { config } from "dotenv";

// Load environment variables from .env.local and .env
config({ path: ".env.local" });
config({ path: ".env" });

/**
 * AI Image Generation CLI Script
 * Generates images via Gemini API and updates the manifest.
 *
 * Usage:
 *   npm run generate-image -- --slot hero --prompt "Modern tech office" --count 3
 *
 * Options:
 *   --slot     (required) Slot identifier (e.g., hero, services/ai)
 *   --prompt   (required) Image generation prompt
 *   --count    (optional) Number of variants (default: 3)
 *   --aspect   (optional) Aspect ratio: 16:9, 4:3, 1:1, 9:16 (default: 16:9)
 *   --name     (optional) Base filename
 *   --out      (optional) Custom output directory
 */

import { writeFileSync, readFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import type { ImageManifest, ImageSlot, GeneratedFile, AspectRatio } from "../src/lib/images/types";

const MANIFEST_PATH = join(process.cwd(), "public/images/generated/manifest.json");
const GENERATED_DIR = join(process.cwd(), "public/images/generated");
const MODEL = "gemini-2.0-flash-exp-image-generation";

interface Args {
  slot?: string;
  prompt?: string;
  count: number;
  aspect: AspectRatio;
  name?: string;
  out?: string;
}

function parseArgs(): Args {
  const args: Args = {
    count: 3,
    aspect: "16:9",
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
      if (["16:9", "4:3", "1:1", "9:16"].includes(nextArg)) {
        args.aspect = nextArg as AspectRatio;
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

function loadManifest(): ImageManifest {
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

function saveManifest(manifest: ImageManifest): void {
  manifest.lastUpdated = new Date().toISOString();
  writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
}

function getNextFileNumber(slot: ImageSlot): number {
  if (slot.files.length === 0) return 1;

  const numbers = slot.files.map((f) => {
    const match = f.filename.match(/-(\d+)\.\w+$/);
    return match ? parseInt(match[1], 10) : 0;
  });

  return Math.max(...numbers) + 1;
}

async function generateImage(prompt: string, aspect: AspectRatio): Promise<Buffer | null> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is required");
  }

  // Map aspect ratio to image dimensions guidance in the prompt
  const aspectPrompt = `Generate a high-quality photorealistic image with ${aspect} aspect ratio. ${prompt}`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: aspectPrompt }],
        },
      ],
      generationConfig: {
        responseModalities: ["TEXT", "IMAGE"],
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`API error (${response.status}):`, errorText);
    return null;
  }

  const data = await response.json();

  // Extract image from response
  const candidates = data.candidates;
  if (!candidates || candidates.length === 0) {
    console.error("No candidates in response");
    return null;
  }

  const parts = candidates[0].content?.parts;
  if (!parts) {
    console.error("No parts in response");
    return null;
  }

  for (const part of parts) {
    if (part.inlineData?.mimeType?.startsWith("image/")) {
      const base64Data = part.inlineData.data;
      return Buffer.from(base64Data, "base64");
    }
  }

  console.error("No image found in response");
  return null;
}

async function main() {
  const args = parseArgs();

  // Validate required args
  if (!args.slot) {
    console.error("Error: --slot is required");
    console.error("Usage: npm run generate-image -- --slot hero --prompt \"Your prompt here\"");
    process.exit(1);
  }

  if (!args.prompt) {
    console.error("Error: --prompt is required");
    console.error("Usage: npm run generate-image -- --slot hero --prompt \"Your prompt here\"");
    process.exit(1);
  }

  // Validate API key
  if (!process.env.GEMINI_API_KEY) {
    console.error("Error: GEMINI_API_KEY environment variable is not set");
    console.error("Add GEMINI_API_KEY=your_key to your .env.local file");
    process.exit(1);
  }

  console.log(`\nGenerating ${args.count} images for slot: ${args.slot}`);
  console.log(`Prompt: ${args.prompt}`);
  console.log(`Aspect ratio: ${args.aspect}\n`);

  // Load or create manifest
  const manifest = loadManifest();

  // Get or create slot
  const now = new Date().toISOString();
  let slot: ImageSlot = manifest.slots[args.slot] ?? {
    slot: args.slot,
    prompt: args.prompt,
    model: MODEL,
    aspect: args.aspect,
    createdAt: now,
    updatedAt: now,
    files: [],
    selected: null,
  };

  // Update slot metadata
  slot.prompt = args.prompt;
  slot.model = MODEL;
  slot.aspect = args.aspect;
  slot.updatedAt = now;

  // Determine output directory
  const outputDir = args.out ?? join(GENERATED_DIR, args.slot.replace(/\//g, "-"));
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  // Generate images
  const baseName = args.name ?? args.slot.replace(/\//g, "-");
  let startNumber = getNextFileNumber(slot);
  let successCount = 0;

  for (let i = 0; i < args.count; i++) {
    const fileNumber = String(startNumber + i).padStart(3, "0");
    const filename = `${baseName}-${fileNumber}.png`;
    const filePath = join(outputDir, filename);
    const publicPath = `/images/generated/${args.slot.replace(/\//g, "-")}/${filename}`;

    console.log(`Generating ${i + 1}/${args.count}: ${filename}...`);

    try {
      const imageBuffer = await generateImage(args.prompt, args.aspect);

      if (imageBuffer) {
        writeFileSync(filePath, imageBuffer);

        const fileEntry: GeneratedFile = {
          filename,
          path: publicPath,
          generatedAt: new Date().toISOString(),
        };

        slot.files.push(fileEntry);
        successCount++;
        console.log(`  ✓ Saved: ${filePath}`);
      } else {
        console.log(`  ✗ Failed to generate image`);
      }
    } catch (error) {
      console.error(`  ✗ Error:`, error instanceof Error ? error.message : error);
    }
  }

  // Save manifest
  manifest.slots[args.slot] = slot;
  saveManifest(manifest);

  console.log(`\n✓ Generated ${successCount}/${args.count} images`);
  console.log(`✓ Manifest updated: ${MANIFEST_PATH}`);
  console.log(`\nTo review and select images, visit: http://localhost:3500/image-staging`);
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
