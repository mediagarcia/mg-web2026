"use client";

import { useState, useEffect } from "react";

interface BackgroundVideoProps {
  src: string;
  poster?: string;
  overlay?: boolean;
  overlayOpacity?: number; // 0-100, default 60
  videoFilter?: string;    // CSS filter string (blur, brightness, saturate)
  className?: string;
}

export function BackgroundVideo({
  src,
  poster,
  overlay = true,
  overlayOpacity = 60,
  videoFilter,
  className = "",
}: BackgroundVideoProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // If reduced motion is preferred or not yet client-side, show poster only
  if (!isClient || prefersReducedMotion) {
    return (
      <div
        className={`absolute inset-0 z-0 pointer-events-none ${className}`}
        aria-hidden="true"
      >
        {poster && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${poster})` }}
          />
        )}
        {overlay && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity / 100})` }}
          />
        )}
      </div>
    );
  }

  return (
    <div
      className={`absolute inset-0 z-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <video
        key={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: videoFilter }}
      >
        <source src={src} type="video/mp4" />
      </video>
      {overlay && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity / 100})` }}
        />
      )}
    </div>
  );
}
