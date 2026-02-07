"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface BackgroundVideoProps {
  src: string;
  poster?: string;
  overlay?: boolean;
  overlayOpacity?: number; // 0-100, default 60
  className?: string;
}

export function BackgroundVideo({
  src,
  poster,
  overlay = true,
  overlayOpacity = 60,
  className = "",
}: BackgroundVideoProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(1);
  const fadeTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

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

  // Crossfade looping: fade out near end, fade in at start
  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.duration || !isFinite(video.duration)) return;

    const timeLeft = video.duration - video.currentTime;
    const fadeWindow = 0.8; // seconds to fade

    if (timeLeft < fadeWindow) {
      // Fade out near the end
      setVideoOpacity(Math.max(0, timeLeft / fadeWindow));
    } else if (video.currentTime < fadeWindow) {
      // Fade in at the start
      setVideoOpacity(Math.min(1, video.currentTime / fadeWindow));
    } else {
      setVideoOpacity(1);
    }
  }, []);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (fadeTimerRef.current) clearInterval(fadeTimerRef.current);
    };
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
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: videoOpacity,
          transition: "opacity 0.15s ease",
        }}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={() => setVideoOpacity(0)}
        onPlaying={() => setVideoOpacity(1)}
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
