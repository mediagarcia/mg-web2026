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

// Path bloom effect - the path expands into the CTA area
function PathBloom({ progress }: { progress: number }) {
  // Start showing at 60% scroll, fully visible by 75%
  const bloomProgress = Math.max(0, Math.min(1, (progress - 0.55) / 0.20));

  if (bloomProgress <= 0) return null;

  return (
    <motion.div
      className="fixed left-0 z-[44] pointer-events-none"
      style={{
        bottom: "15%",
        width: "100%",
        height: "40%",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: bloomProgress * 0.6 }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMinYMax slice"
      >
        {/* Expanding path glow - starts as a point and blooms outward */}
        <defs>
          <radialGradient id="pathBloomGradient" cx="0%" cy="100%" r="100%">
            <stop offset="0%" stopColor="#3BB782" stopOpacity={0.4 * bloomProgress} />
            <stop offset="30%" stopColor="#3BB782" stopOpacity={0.2 * bloomProgress} />
            <stop offset="60%" stopColor="#3BB782" stopOpacity={0.05 * bloomProgress} />
            <stop offset="100%" stopColor="#3BB782" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="pathBloomGradient2" cx="0%" cy="100%" r="80%">
            <stop offset="0%" stopColor="#3BB782" stopOpacity={0.6 * bloomProgress} />
            <stop offset="50%" stopColor="#3BB782" stopOpacity={0.15 * bloomProgress} />
            <stop offset="100%" stopColor="#3BB782" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Main bloom shape - organic, expanding feel */}
        <ellipse
          cx={20 + bloomProgress * 80}
          cy="280"
          rx={30 + bloomProgress * 300}
          ry={20 + bloomProgress * 150}
          fill="url(#pathBloomGradient)"
        />

        {/* Inner glow - more concentrated */}
        <ellipse
          cx={20 + bloomProgress * 40}
          cy="290"
          rx={15 + bloomProgress * 120}
          ry={10 + bloomProgress * 60}
          fill="url(#pathBloomGradient2)"
        />

        {/* Path tendrils extending into CTA area */}
        <motion.path
          d={`M 20 300
              Q ${40 + bloomProgress * 60} ${280 - bloomProgress * 40}, ${80 + bloomProgress * 120} ${260 - bloomProgress * 30}
              Q ${120 + bloomProgress * 80} ${250 - bloomProgress * 20}, ${160 + bloomProgress * 100} ${260 - bloomProgress * 10}`}
          stroke="#3BB782"
          strokeWidth={2 + bloomProgress * 3}
          fill="none"
          opacity={0.3 * bloomProgress}
          strokeDasharray="8 12"
        />
      </svg>
    </motion.div>
  );
}

// CTA Emergence - larger character in background
function CTAEmergence({
  progress,
  variant,
}: {
  progress: number;
  variant: CharacterVariant;
}) {
  // Start showing at 65% scroll (CTA section), not 82%
  const shouldShow = progress > 0.60;
  const emergenceProgress = Math.max(0, (progress - 0.60) / 0.15);

  if (!shouldShow) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3, y: 100 }}
      animate={{
        opacity: Math.min(emergenceProgress * 0.85, 0.85), // Keep it somewhat transparent as background
        scale: 0.6 + emergenceProgress * 0.4,
        y: 50 - emergenceProgress * 50,
      }}
      className="fixed bottom-[10%] left-[5%] z-[42] pointer-events-none"
    >
      {/* Much larger character */}
      <div className="w-64 h-96">
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

  // Character Y position (8% to 65% - ends at CTA, not footer)
  const charYValue = useTransform(smoothProgress, [0, 0.65], [8, 65]);
  const [charY, setCharY] = useState("8%");

  useEffect(() => {
    const unsubscribe = charYValue.on("change", (v) => {
      setCharY(`${v}%`);
    });
    return () => unsubscribe();
  }, [charYValue]);

  // Hide small character when large one appears
  const showSmallCharacter = currentProgress < 0.62;

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
