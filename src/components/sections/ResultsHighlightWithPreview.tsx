"use client";

import { usePreview } from "@/lib/images/preview-context";
import { ResultsHighlight } from "./ResultsHighlight";

interface ResultsHighlightWithPreviewProps {
  defaultImage?: string | null;
  slot?: string;
}

export function ResultsHighlightWithPreview({ defaultImage, slot = "results-bg" }: ResultsHighlightWithPreviewProps) {
  const { isPreviewMode, getCurrentImagePath } = usePreview();

  const backgroundImage = isPreviewMode
    ? getCurrentImagePath(slot, defaultImage ?? undefined)
    : defaultImage;

  return <ResultsHighlight backgroundImage={backgroundImage} />;
}
