"use client";

import { useScroll, useTransform, useSpring, motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, createContext, useContext, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import { IsometricScene } from "./IsometricScene";
import { CharacterVariant, CharacterSVG, CharacterPicker } from "./CharacterVariants";
import { useReducedMotion } from "./hooks/useReducedMotion";
import { useMediaQuery } from "./hooks/useMediaQuery";

// Context for sharing character selection
const CharacterContext = createContext<{
  character: CharacterVariant;
  setCharacter: (c: CharacterVariant) => void;
}>({
  character: "professional",
  setCharacter: () => {},
});

export const useCharacter = () => useContext(CharacterContext);

// Hook to track CTA heading position with RAF throttling
interface CTAPosition {
  top: number;
  left: number;
  right: number;
  bottom: number;
  centerX: number;
  centerY: number;
}

function useCTAHeadingPosition(): CTAPosition | null {
  const [position, setPosition] = useState<CTAPosition | null>(null);
  const rafRef = useRef<number | null>(null);

  const updatePosition = useCallback(() => {
    const element = document.getElementById("journey-cta-heading");
    if (!element) {
      setPosition(null);
      return;
    }

    const rect = element.getBoundingClientRect();
    setPosition({
      top: rect.top,
      left: rect.left,
      right: rect.right,
      bottom: rect.bottom,
      centerX: rect.left + rect.width / 2,
      centerY: rect.top + rect.height / 2,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return; // Already scheduled
      rafRef.current = requestAnimationFrame(() => {
        updatePosition();
        rafRef.current = null;
      });
    };

    // Initial position
    updatePosition();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updatePosition);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updatePosition]);

  return position;
}

// Animated character in the journey strip with arrival speech bubble
function JourneyCharacter({
  y,
  progress,
  variant,
  visible,
}: {
  y: string;
  progress: number;
  variant: CharacterVariant;
  visible: boolean;
}) {
  // Bounce effect
  const bounceOffset = Math.sin(progress * Math.PI * 20) * 2;

  // Show speech bubble when near the end
  const showSpeechBubble = progress > 0.92;

  return (
    <motion.div
      style={{ top: y }}
      animate={{
        x: bounceOffset,
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.5,
      }}
      transition={{ opacity: { duration: 0.3 }, scale: { duration: 0.3 } }}
      className="absolute left-1/2 -translate-x-1/2 w-12 h-16 z-20 drop-shadow-lg"
    >
      <CharacterSVG variant={variant} className="w-full h-full" />

      {/* Arrival speech bubble */}
      <AnimatePresence>
        {showSpeechBubble && visible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap"
          >
            <div className="bg-white rounded-xl px-3 py-2 shadow-lg border-2 border-teal-500">
              <div className="text-xs font-bold text-gray-800">You made it! Let&apos;s connect.</div>
            </div>
            {/* Pointer triangle */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white" />
            <div className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-teal-500" style={{ marginTop: '-8px' }} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Arrival glow behind CTA heading
function CTAArrivalGlow({
  progress,
  ctaPosition,
}: {
  progress: number;
  ctaPosition: CTAPosition | null;
}) {
  // Appear at 88%+ scroll
  const glowProgress = Math.max(0, Math.min(1, (progress - 0.88) / 0.1));

  if (glowProgress <= 0 || !ctaPosition) return null;

  const width = ctaPosition.right - ctaPosition.left + 100;
  const height = ctaPosition.bottom - ctaPosition.top + 60;

  return (
    <motion.div
      className="fixed z-[41] pointer-events-none"
      style={{
        left: ctaPosition.left - 50,
        top: ctaPosition.top - 30,
        width,
        height,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: glowProgress * 0.6 }}
    >
      <svg className="w-full h-full" style={{ overflow: "visible" }}>
        <defs>
          <radialGradient id="arrivalGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#3BB782" stopOpacity="0.4">
              <animate
                attributeName="stopOpacity"
                values="0.3;0.5;0.3"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="60%" stopColor="#3BB782" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#3BB782" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse
          cx="50%"
          cy="50%"
          rx="50%"
          ry="50%"
          fill="url(#arrivalGlow)"
        />
      </svg>
    </motion.div>
  );
}

// Static fallback for reduced motion or mobile
function StaticJourneyIllustration({ variant }: { variant: CharacterVariant }) {
  return (
    <div className="fixed left-0 top-0 bottom-0 w-24 z-[45] overflow-hidden pointer-events-none opacity-30">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 80 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M 40 30 Q 50 150, 40 300 Q 30 450, 40 570"
          stroke="#3BB782"
          strokeWidth="2"
          strokeDasharray="8 6"
          fill="none"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

// Inner component that uses scroll hooks
function JourneyBackgroundInner({
  prefersReducedMotion,
  isMobile,
  character,
  setCharacter,
}: {
  prefersReducedMotion: boolean;
  isMobile: boolean;
  character: CharacterVariant;
  setCharacter: (c: CharacterVariant) => void;
}) {
  const { scrollYProgress } = useScroll();
  const [showPicker, setShowPicker] = useState(true);
  const [currentProgress, setCurrentProgress] = useState(0);

  // Track CTA heading position for glow effect
  const ctaPosition = useCTAHeadingPosition();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
  });

  // Track progress
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (v) => {
      setCurrentProgress(v);
      // Hide picker after scrolling a bit
      if (v > 0.05) setShowPicker(false);
      // Show picker again when back at top
      if (v < 0.02) setShowPicker(true);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // Character Y position (8% to 92% - full journey to the bottom)
  const charYValue = useTransform(smoothProgress, [0, 0.95], [8, 92]);
  const [charY, setCharY] = useState("8%");

  useEffect(() => {
    const unsubscribe = charYValue.on("change", (v) => {
      setCharY(`${v}%`);
    });
    return () => unsubscribe();
  }, [charYValue]);

  if (prefersReducedMotion || isMobile) {
    return <StaticJourneyIllustration variant={character} />;
  }

  return (
    <>
      {/* Journey strip - full height */}
      <div className="fixed left-0 top-0 bottom-0 w-28 lg:w-36 z-[45] overflow-visible pointer-events-none">
        {/* Scene elements */}
        <div className="relative w-full h-full">
          <IsometricScene progress={smoothProgress} />
          <JourneyCharacter
            y={charY}
            progress={currentProgress}
            variant={character}
            visible={true}
          />
        </div>
      </div>

      {/* Character picker - positioned to the right of the journey strip */}
      <AnimatePresence>
        {showPicker && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="fixed top-32 left-40 lg:left-44 pointer-events-auto z-[46]"
          >
            <CharacterPicker selected={character} onSelect={setCharacter} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Arrival glow behind CTA heading */}
      <CTAArrivalGlow progress={currentProgress} ctaPosition={ctaPosition} />
    </>
  );
}

export function JourneyBackground() {
  const [mounted, setMounted] = useState(false);
  const [character, setCharacter] = useState<CharacterVariant>("professional");
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Only show journey on home page
  if (!mounted || pathname !== "/") {
    return null;
  }

  return (
    <CharacterContext.Provider value={{ character, setCharacter }}>
      <JourneyBackgroundInner
        prefersReducedMotion={prefersReducedMotion}
        isMobile={isMobile}
        character={character}
        setCharacter={setCharacter}
      />
    </CharacterContext.Provider>
  );
}
