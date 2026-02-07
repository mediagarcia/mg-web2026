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

export interface VideoGenerateOptions {
  slot: string;
  prompt: string;
  count?: number;
  aspect?: VideoAspectRatio;
  duration?: VideoDuration;
  name?: string;
  out?: string;
}
