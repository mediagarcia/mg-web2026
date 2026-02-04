"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTopOnNavigation() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  // Disable browser scroll restoration on mount
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Use useLayoutEffect to scroll before paint, preventing flash at old position
  useLayoutEffect(() => {
    // Skip scroll on initial page load (browser handles that correctly)
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Scroll to top immediately
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
