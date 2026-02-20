# Video Generation System — Implementation Plan

## Resume Context
**Branch:** `feat/video-generation`
**Latest commit:** `416a0f5` — "Add video generation system with Veo API, staging UI, and live preview"
**Status:** Committed, not pushed. All features working.

### What's been built
- Full video generation system (Veo 2.0 API) mirroring image system
- Video staging UI at `/video-staging` with in-browser generate form
- Live preview system in root layout — persists across all pages
- `PreviewBackgroundVideo` component with opacity slider + crossfade looping
- Cross-page navigation (video slots route to correct pages with `?preview=1`)
- 6 videos generated (2 per slot: hero-video, services-video, about-video)

### Bug fixes applied during build
- `durationSeconds` must be a number (was `String(duration)`)
- Video download URIs need `?key=` API key appended
- Rate limiting: generate 1 at a time with 60s gaps
- `<video>` needs `key={src}` to reload on source change
- Preview providers must be at root layout level, not page level

### What's left / could do next
- Push branch and create PR
- Generate more video variants if current ones aren't ideal
- Install ffmpeg for video compression (not available on this machine)
- Consider shorter videos (5s) for faster loading
- Could add video preview support to more sections beyond hero/services/about

**What to do next:** Build the video generation system (described below).

---

## Overview
Build a video generation system mirroring the existing image generation system. The image system lives at:
- `scripts/generate-images.ts` — CLI script using Gemini API
- `src/lib/images/types.ts` — TypeScript types
- `src/app/api/image-staging/route.ts` + `generate/route.ts` — API endpoints
- `src/app/image-staging/page.tsx` + `client.tsx` — Dev staging UI
- `src/lib/images/preview-context.tsx` — React context for preview mode
- `public/images/generated/manifest.json` — Manifest tracking all generated images

The video system replicates this 1:1 but uses Google's Veo model (`veo-2.0-generate-001`) which has an async polling pattern.

## Key Difference: Async Polling
Image generation is synchronous (POST → get base64 back). Video uses `predictLongRunning`:
1. `POST /v1beta/models/veo-2.0-generate-001:predictLongRunning` → returns operation name
2. Poll `GET /v1beta/{operationName}` every 10-15s until `done: true`
3. Download MP4 from the returned URI

## New Files (10 total)

| # | File | Purpose |
|---|------|---------|
| 1 | `src/lib/videos/types.ts` | VideoManifest, VideoSlot, GeneratedVideoFile types |
| 2 | `scripts/generate-videos.ts` | CLI: calls Veo API, polls for completion, saves MP4s, updates manifest |
| 3 | `scripts/copy-selected-videos.ts` | Copies selected videos to `public/videos/selected/` |
| 4 | `src/app/api/video-staging/route.ts` | GET/POST/DELETE manifest CRUD + selection |
| 5 | `src/app/api/video-staging/generate/route.ts` | POST spawns CLI subprocess to regenerate |
| 6 | `src/app/video-staging/page.tsx` | Dev-only page wrapper |
| 7 | `src/app/video-staging/client.tsx` | Staging UI with `<video>` playback, carousel, select/delete |
| 8 | `src/lib/videos/get-video-for-slot.ts` | Helper to resolve video path from manifest |
| 9 | `src/lib/videos/preview-context.tsx` | React context for live preview mode |
| 10 | `public/videos/generated/manifest.json` | Empty initial manifest `{"version":"1.0","lastUpdated":"","slots":{}}` |

## Files to Modify (2)
- **`package.json`** — add `"generate-video": "tsx scripts/generate-videos.ts"`
- **`.gitignore`** — add `public/videos/generated/**/` + `!public/videos/generated/manifest.json`

## CLI Usage
```
npm run generate-video -- --slot hero --prompt "Abstract particles" --count 2 --aspect 16:9 --duration 8
```
- `--duration`: 5, 6, or 8 seconds (default: 8)
- `--aspect`: 16:9 or 9:16 only (Veo constraint, unlike images which support 4:3 and 1:1)
- `--count`: default 2 (videos are slower/larger than images)
- Uses same `GEMINI_API_KEY` env var from `.env` / `.env.local`

## Storage Structure
```
public/videos/generated/{slot}/{slot}-001.mp4   (gitignored)
public/videos/generated/manifest.json            (tracked in git)
public/videos/selected/{slot}.mp4                (tracked in git, production)
```

## Template Files to Mirror
Each video file mirrors its image counterpart:
- `scripts/generate-images.ts` → `scripts/generate-videos.ts`
- `scripts/copy-selected-images.ts` → `scripts/copy-selected-videos.ts`
- `src/lib/images/types.ts` → `src/lib/videos/types.ts`
- `src/app/api/image-staging/route.ts` → `src/app/api/video-staging/route.ts`
- `src/app/api/image-staging/generate/route.ts` → `src/app/api/video-staging/generate/route.ts`
- `src/app/image-staging/page.tsx` → `src/app/video-staging/page.tsx`
- `src/app/image-staging/client.tsx` → `src/app/video-staging/client.tsx`
- `src/lib/images/preview-context.tsx` → `src/lib/videos/preview-context.tsx`

## Implementation Order
1. Types (`src/lib/videos/types.ts`)
2. CLI script (`scripts/generate-videos.ts`)
3. `package.json` + `.gitignore` updates
4. API routes (CRUD + generate)
5. Deploy script (`scripts/copy-selected-videos.ts`)
6. Staging UI (page + client)
7. Helper + preview context

## Video Type Definitions
```typescript
export type VideoAspectRatio = "16:9" | "9:16";
export type VideoDuration = 5 | 6 | 8;

export interface GeneratedVideoFile {
  filename: string;       // "hero-001.mp4"
  path: string;           // "/videos/generated/hero/hero-001.mp4"
  generatedAt: string;
  durationSeconds: number;
}

export interface VideoSlot {
  slot: string;
  prompt: string;
  model: string;
  aspect: VideoAspectRatio;
  duration: VideoDuration;
  createdAt: string;
  updatedAt: string;
  files: GeneratedVideoFile[];
  selected: string | null;
  selectedPath?: string | null;
}

export interface VideoManifest {
  version: string;
  lastUpdated: string;
  slots: Record<string, VideoSlot>;
}
```

## Veo API Call Structure
```typescript
// Step 1: Submit
const url = `https://generativelanguage.googleapis.com/v1beta/models/veo-2.0-generate-001:predictLongRunning`;
const body = {
  instances: [{ prompt }],
  parameters: { aspectRatio: "16:9", durationSeconds: "8" }
};
// Headers: { "x-goog-api-key": apiKey, "Content-Type": "application/json" }

// Step 2: Poll
// GET https://generativelanguage.googleapis.com/v1beta/{operationName}
// Until response.done === true

// Step 3: Download
// response.response.generateVideoResponse.generatedSamples[0].video.uri
```

## Staging UI Differences from Image Version
- Uses `<video controls autoPlay muted loop>` instead of `<Image>`
- Thumbnails use `<video preload="metadata">` for first-frame display
- Shows duration in metadata section
- Longer loading states ("Generating videos... This may take 2-4 minutes")
- Otherwise identical layout: carousel, arrows, counter, thumbnail strip, select/delete buttons

## Verification
1. `npm run generate-video -- --slot test --prompt "A calm ocean wave" --count 1 --duration 5`
2. `npm run build` — no TS errors
3. Visit `/video-staging` — see slot with video playback
4. Select → confirm copied to `public/videos/selected/`
