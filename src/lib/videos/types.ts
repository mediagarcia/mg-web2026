/**
 * TypeScript interfaces for AI Video Generation workflow
 */

export interface GeneratedVideoFile {
  filename: string;
  path: string;
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
  selectedPath?: string | null; // Path in /videos/selected/ for deployment
}

export interface VideoManifest {
  version: string;
  lastUpdated: string;
  slots: Record<string, VideoSlot>;
}

export type VideoAspectRatio = "16:9" | "9:16";

export type VideoDuration = 5 | 6 | 8;

export interface VideoDesignSettings {
  opacity: number;        // 0-100
  overlayDarkness: number; // 0-100
  blur: number;           // 0-20 (px)
  speed: number;          // 0.25-2.0
  brightness: number;     // 0-200 (%)
  saturation: number;     // 0-200 (%)
}

export const DEFAULT_VIDEO_DESIGN: VideoDesignSettings = {
  opacity: 100,
  overlayDarkness: 60,
  blur: 0,
  speed: 1,
  brightness: 100,
  saturation: 100,
};

export interface VideoGenerateOptions {
  slot: string;
  prompt: string;
  count?: number;
  aspect?: VideoAspectRatio;
  duration?: VideoDuration;
  name?: string;
  out?: string;
}
