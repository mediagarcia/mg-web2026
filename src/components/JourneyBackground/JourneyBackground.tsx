"use client";

import { useScroll, useTransform, useSpring, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { IsometricScene } from "./IsometricScene";
import { Character } from "./Character";
import { useReducedMotion } from "./hooks/useReducedMotion";
import { useMediaQuery } from "./hooks/useMediaQuery";

// Static fallback for reduced motion or mobile
function StaticJourneyIllustration() {
  return (
    <div className="fixed left-0 top-0 bottom-0 w-32 z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-20">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 120 800"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Simple vertical path */}
          <path
            d="M 60 50 Q 70 200, 60 400 Q 50 600, 60 750"
            stroke="#3BB782"
            strokeWidth="3"
            strokeDasharray="10 8"
            fill="none"
            opacity="0.5"
          />

          {/* Start building silhouette */}
          <rect x="30" y="30" width="60" height="70" fill="#6B7280" opacity="0.5" rx="2" />

          {/* End building silhouette */}
          <rect x="25" y="680" width="70" height="90" fill="#1F2937" opacity="0.5" rx="2" />

          {/* Character silhouette */}
          <ellipse cx="60" cy="400" rx="15" ry="25" fill="#3BB782" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}

// Inner component that uses scroll hooks (only rendered client-side after mount)
function JourneyBackgroundInner({
  prefersReducedMotion,
  isMobile,
}: {
  prefersReducedMotion: boolean;
  isMobile: boolean;
}) {
  // Get scroll progress
  const { scrollYProgress } = useScroll();

  // Smooth the scroll progress for less jittery animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
  });

  // Character moves from top to bottom as user scrolls
  const charY = useTransform(smoothProgress, [0, 1], ["8%", "78%"]);

  // Return static version for reduced motion or mobile
  if (prefersReducedMotion || isMobile) {
    return <StaticJourneyIllustration />;
  }

  return (
    <>
      {/* Main journey background layer - vertical strip on left */}
      <div className="fixed left-0 top-0 bottom-0 w-36 lg:w-44 z-10 overflow-hidden pointer-events-none">
        {/* Fade edge for smooth transition to content */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/80 z-30" />

        {/* Scene container */}
        <div className="relative w-full h-full opacity-70">
          <IsometricScene progress={smoothProgress} />
          <Character y={charY} progress={smoothProgress} />
        </div>
      </div>
    </>
  );
}

export function JourneyBackground() {
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 1023px)");

  // Only render on client after mount to avoid SSR issues with scroll hooks
  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR and initial mount, render nothing
  if (!mounted) {
    return null;
  }

  return (
    <JourneyBackgroundInner
      prefersReducedMotion={prefersReducedMotion}
      isMobile={isMobile}
    />
  );
}
