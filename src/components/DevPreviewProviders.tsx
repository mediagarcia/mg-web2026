"use client";

import type { ReactNode } from "react";
import { PreviewProvider } from "@/lib/images/preview-context";
import { VideoPreviewProvider } from "@/lib/videos/preview-context";
import { ImagePreviewBar } from "@/components/ImagePreviewBar";

const isDevelopment = process.env.NODE_ENV === "development";

export function DevPreviewProviders({ children }: { children: ReactNode }) {
  if (!isDevelopment) {
    return <>{children}</>;
  }

  return (
    <PreviewProvider>
      <VideoPreviewProvider>
        {children}
        <ImagePreviewBar />
      </VideoPreviewProvider>
    </PreviewProvider>
  );
}
