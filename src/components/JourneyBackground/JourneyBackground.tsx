"use client";

import { useScroll, useTransform, useSpring, motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, createContext, useContext } from "react";
import { IsometricScene } from "./IsometricScene";
import { CharacterVariant, CharacterSVG, CharacterPicker, CharacterLarge } from "./CharacterVariants";
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

// Animated character in the journey strip
function JourneyCharacter({
  y,
  progress,
  variant,
}: {
  y: string;
  progress: number;
  variant: CharacterVariant;
}) {
  // Bounce effect
  const bounceOffset = Math.sin(progress * Math.PI * 20) * 2;

  return (
    <motion.div
      style={{ top: y }}
      animate={{ x: bounceOffset }}
      className="absolute left-1/2 -translate-x-1/2 w-12 h-16 z-20 drop-shadow-lg"
    >
      <CharacterSVG variant={variant} className="w-full h-full" />
    </motion.div>
  );
}

// CTA Emergence - character pops out into main content
function CTAEmergence({
  progress,
  variant,
}: {
  progress: number;
  variant: CharacterVariant;
}) {
  // Only show when near the bottom (85%+)
  const shouldShow = progress > 0.82;
  const emergenceProgress = Math.max(0, (progress - 0.82) / 0.18);

  if (!shouldShow) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3, x: -200 }}
      animate={{
        opacity: emergenceProgress,
        scale: 0.5 + emergenceProgress * 0.5,
        x: -50 + emergenceProgress * 50,
      }}
      className="fixed bottom-32 left-8 z-50 pointer-events-none"
    >
      <CharacterLarge variant={variant} />

      {/* Speech bubble with CTA hint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: emergenceProgress > 0.5 ? 1 : 0, y: 0 }}
        className="absolute -top-4 left-24 bg-white rounded-xl px-4 py-2 shadow-xl border-2 border-teal-500"
      >
        <div className="text-sm font-bold text-gray-800">Ready to start?</div>
        <div className="text-xs text-gray-500">Your journey awaits!</div>
        {/* Pointer */}
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white" />
      </motion.div>
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

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
  });

  // Track progress for CTA emergence
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (v) => {
      setCurrentProgress(v);
      // Hide picker after scrolling a bit
      if (v > 0.05) setShowPicker(false);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // Character Y position (8% to 75%)
  const charYValue = useTransform(smoothProgress, [0, 0.82], [8, 75]);
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
      {/* Journey strip - transparent, no background */}
      <div className="fixed left-0 top-0 bottom-0 w-28 lg:w-36 z-[45] overflow-visible pointer-events-none">
        {/* Scene elements */}
        <div className="relative w-full h-full">
          <IsometricScene progress={smoothProgress} />
          <JourneyCharacter y={charY} progress={currentProgress} variant={character} />
        </div>

        {/* Character picker - only at start */}
        <AnimatePresence>
          {showPicker && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute top-24 left-2 pointer-events-auto z-50"
            >
              <CharacterPicker selected={character} onSelect={setCharacter} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CTA Emergence - character pops out at bottom */}
      <CTAEmergence progress={currentProgress} variant={character} />
    </>
  );
}

export function JourneyBackground() {
  const [mounted, setMounted] = useState(false);
  const [character, setCharacter] = useState<CharacterVariant>("professional");
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 1023px)");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
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
