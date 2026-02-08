"use client";

import type { ReactNode } from "react";

interface HomePageWrapperProps {
  children: ReactNode;
}

// Preview providers are now in DevPreviewProviders at the layout level
export function HomePageWrapper({ children }: HomePageWrapperProps) {
  return <>{children}</>;
}
