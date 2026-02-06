"use client";

import { usePreview } from "@/lib/images/preview-context";
import { PageHeader, type PageHeaderProps } from "./PageHeader";

interface PageHeaderWithPreviewProps extends Omit<PageHeaderProps, "image"> {
  defaultImage?: string | null;
  slot: string;
}

export function PageHeaderWithPreview({
  defaultImage,
  slot,
  ...props
}: PageHeaderWithPreviewProps) {
  const { isPreviewMode, getCurrentImagePath } = usePreview();

  // In preview mode, use the preview context's current image
  // Otherwise, use the server-provided default image
  const heroImage = isPreviewMode
    ? getCurrentImagePath(slot, defaultImage ?? undefined)
    : defaultImage;

  return <PageHeader {...props} image={heroImage} />;
}
