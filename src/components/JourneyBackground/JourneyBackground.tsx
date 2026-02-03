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
  visible,
}: {
  y: string;
  progress: number;
  variant: CharacterVariant;
  visible: boolean;
}) {
  // Bounce effect
  const bounceOffset = Math.sin(progress * Math.PI * 20) * 2;

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
    </motion.div>
  );
}

// Path bloom effect - lines spread beneath the contact form (above footer)
function PathBloom({ progress }: { progress: number }) {
  // Start showing at 78% scroll (contact form area), fully visible by 92%
  const bloomProgress = Math.max(0, Math.min(1, (progress - 0.76) / 0.16));

  if (bloomProgress <= 0) return null;

  return (
    <motion.div
      className="fixed left-0 z-[44] pointer-events-none"
      style={{
        bottom: "15%", // Stay above the footer
        width: "100%",
        height: "20%",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: bloomProgress * 0.6 }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 800 200"
        preserveAspectRatio="xMinYMax slice"
      >
        {/* Expanding path glow - radiates from bottom left */}
        <defs>
          <radialGradient id="pathBloomGradient" cx="5%" cy="100%" r="120%">
            <stop offset="0%" stopColor="#3BB782" stopOpacity={0.5 * bloomProgress} />
            <stop offset="25%" stopColor="#3BB782" stopOpacity={0.25 * bloomProgress} />
            <stop offset="50%" stopColor="#3BB782" stopOpacity={0.08 * bloomProgress} />
            <stop offset="100%" stopColor="#3BB782" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3BB782" stopOpacity={0.6 * bloomProgress} />
            <stop offset="100%" stopColor="#3BB782" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Main bloom shape - spreads under contact form */}
        <ellipse
          cx={50 + bloomProgress * 100}
          cy="200"
          rx={80 + bloomProgress * 500}
          ry={40 + bloomProgress * 120}
          fill="url(#pathBloomGradient)"
        />

        {/* Horizontal path lines spreading across beneath form */}
        <motion.path
          d={`M 30 180
              Q ${100 + bloomProgress * 150} ${170 - bloomProgress * 20}, ${250 + bloomProgress * 200} ${175 - bloomProgress * 10}
              Q ${400 + bloomProgress * 150} ${180}, ${600 + bloomProgress * 100} ${185}`}
          stroke="url(#lineGradient)"
          strokeWidth={3 + bloomProgress * 4}
          fill="none"
          strokeDasharray="15 10"
        />

        <motion.path
          d={`M 40 195
              Q ${150 + bloomProgress * 100} ${190}, ${350 + bloomProgress * 200} ${188}
              Q ${500 + bloomProgress * 100} ${192}, ${700 + bloomProgress * 50} ${195}`}
          stroke="url(#lineGradient)"
          strokeWidth={2 + bloomProgress * 3}
          fill="none"
          strokeDasharray="10 15"
          opacity={0.7}
        />

        {/* Third line - subtle */}
        <motion.path
          d={`M 50 165
              Q ${120 + bloomProgress * 100} ${158 - bloomProgress * 10}, ${280 + bloomProgress * 150} ${162}
              Q ${420 + bloomProgress * 100} ${155}, ${550 + bloomProgress * 80} ${160}`}
          stroke="url(#lineGradient)"
          strokeWidth={2 + bloomProgress * 2}
          fill="none"
          strokeDasharray="8 12"
          opacity={0.5}
        />
      </svg>
    </motion.div>
  );
}

// CTA Emergence - character in background near contact form (above footer)
function CTAEmergence({
  progress,
  variant,
}: {
  progress: number;
  variant: CharacterVariant;
}) {
  // Start showing at 78% scroll - AFTER small character fades out
  const shouldShow = progress > 0.78;
  const emergenceProgress = Math.max(0, (progress - 0.78) / 0.15);

  if (!shouldShow) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 60 }}
      animate={{
        opacity: Math.min(emergenceProgress * 0.8, 0.8), // Keep it somewhat transparent as background
        scale: 0.7 + emergenceProgress * 0.3,
        y: 30 - emergenceProgress * 30,
      }}
      className="fixed bottom-[18%] left-[3%] z-[42] pointer-events-none"
    >
      {/* Moderately sized character - stays above footer */}
      <div className="w-40 h-60">
        <CharacterLarge variant={variant} size="xlarge" />
      </div>

      {/* Speech bubble with CTA hint - appears later */}
      <AnimatePresence>
        {emergenceProgress > 0.6 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute top-8 left-[70%] bg-white rounded-2xl px-5 py-3 shadow-2xl border-2 border-teal-500"
          >
            <div className="text-base font-bold text-gray-800">Ready to start?</div>
            <div className="text-sm text-gray-500">Your journey awaits!</div>
            {/* Pointer */}
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[12px] border-r-white" />
          </motion.div>
        )}
      </AnimatePresence>
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
      // Show picker again when back at top
      if (v < 0.02) setShowPicker(true);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // Character Y position (8% to 78% - ends before contact CTA)
  const charYValue = useTransform(smoothProgress, [0, 0.72], [8, 78]);
  const [charY, setCharY] = useState("8%");

  useEffect(() => {
    const unsubscribe = charYValue.on("change", (v) => {
      setCharY(`${v}%`);
    });
    return () => unsubscribe();
  }, [charYValue]);

  // Hide small character well BEFORE large one appears (clean gap, no overlap)
  const showSmallCharacter = currentProgress < 0.72;

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
          <JourneyCharacter
            y={charY}
            progress={currentProgress}
            variant={character}
            visible={showSmallCharacter}
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

      {/* Path bloom effect - expands into CTA area */}
      <PathBloom progress={currentProgress} />

      {/* CTA Emergence - large character in background */}
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
