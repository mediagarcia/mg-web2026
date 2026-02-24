"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTopOnNavigation() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);
  const previousPathname = useRef(pathname);
  const isPopState = useRef(false);

  // Track back/forward navigation via popstate event
  useEffect(() => {
    const handlePopState = () => {
      isPopState.current = true;
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Use useLayoutEffect to scroll before paint, preventing flash at old position
  useLayoutEffect(() => {
    // Skip scroll on initial page load
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Skip scroll-to-top on back/forward navigation — let browser restore position
    if (isPopState.current) {
      isPopState.current = false;
      previousPathname.current = pathname;
      return;
    }

    // Only scroll to top on forward navigation (link clicks)
    if (pathname !== previousPathname.current) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      previousPathname.current = pathname;
    }
  }, [pathname]);

  return null;
}
