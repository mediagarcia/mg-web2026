"use client";

import type { ReactNode } from "react";
import { PreviewProvider } from "@/lib/images/preview-context";
import { ImagePreviewBar } from "@/components/ImagePreviewBar";

// Only add preview functionality in development
const isDevelopment = process.env.NODE_ENV === "development";

interface HomePageWrapperProps {
  children: ReactNode;
}

export function HomePageWrapper({ children }: HomePageWrapperProps) {
  if (!isDevelopment) {
    return <>{children}</>;
  }

  return (
    <PreviewProvider>
      {children}
      <ImagePreviewBar />
    </PreviewProvider>
  );
}
