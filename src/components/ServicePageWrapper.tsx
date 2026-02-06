"use client";

import type { ReactNode } from "react";
import { PreviewProvider } from "@/lib/images/preview-context";
import { ImagePreviewBar } from "@/components/ImagePreviewBar";

// Only add preview functionality in development
const isDevelopment = process.env.NODE_ENV === "development";

interface ServicePageWrapperProps {
  children: ReactNode;
}

export function ServicePageWrapper({ children }: ServicePageWrapperProps) {
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
