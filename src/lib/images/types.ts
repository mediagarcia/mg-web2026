/**
 * TypeScript interfaces for AI Image Generation workflow
 */

export interface GeneratedFile {
  filename: string;
  path: string;
  generatedAt: string;
}

export interface ImageSlot {
  slot: string;
  prompt: string;
  model: string;
  aspect: AspectRatio;
  createdAt: string;
  updatedAt: string;
  files: GeneratedFile[];
  selected: string | null;
  selectedPath?: string | null; // Path in /images/selected/ for deployment
}

export interface ImageManifest {
  version: string;
  lastUpdated: string;
  slots: Record<string, ImageSlot>;
}

export type AspectRatio = "16:9" | "4:3" | "1:1" | "9:16";

export interface GenerateOptions {
  slot: string;
  prompt: string;
  count?: number;
  aspect?: AspectRatio;
  name?: string;
  out?: string;
}
