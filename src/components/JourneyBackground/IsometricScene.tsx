"use client";

import { MotionValue, useTransform, motion } from "framer-motion";

interface IsometricSceneProps {
  progress: MotionValue<number>;
}

// Vertical path that winds down the left side - ends at contact form (~90%)
function JourneyPath({ progress }: { progress: MotionValue<number> }) {
  const pathLength = useTransform(progress, [0, 0.85], [0.05, 1]);
  // Path gets wider as it approaches the end
  const strokeWidth = useTransform(progress, [0, 0.6, 0.85], [3, 4, 8]);
  const glowWidth = useTransform(progress, [0, 0.6, 0.85], [16, 28, 50]);

  return (
    <svg
      className="absolute left-1/2 -translate-x-1/2 top-0 h-[92%] w-24"
      viewBox="0 0 80 920"
      preserveAspectRatio="none"
    >
      {/* Main path - dashed line, ends at contact form */}
      <motion.path
        d="M 40 0
           C 50 80, 30 140, 40 200
           S 55 280, 40 360
           S 25 440, 40 520
           S 55 600, 40 680
           S 30 760, 40 840
           S 50 880, 40 920"
        fill="none"
        stroke="#3BB782"
        strokeDasharray="12 8"
        style={{ pathLength, strokeWidth }}
        opacity={0.6}
      />

      {/* Path glow - expands as it goes down */}
      <motion.path
        d="M 40 0
           C 50 80, 30 140, 40 200
           S 55 280, 40 360
           S 25 440, 40 520
           S 55 600, 40 680
           S 30 760, 40 840
           S 50 880, 40 920"
        fill="none"
        stroke="#3BB782"
        style={{ pathLength, strokeWidth: glowWidth }}
        opacity={0.15}
        filter="blur(6px)"
      />
    </svg>
  );
}

// Starting point - chaotic office building at top
function StartingOffice({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.2], [1, 0.4]);
  const scale = useTransform(progress, [0, 0.15], [1, 0.9]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute top-[2%] left-1/2 -translate-x-1/2"
    >
      <svg width="100" height="120" viewBox="0 0 100 120" fill="none">
        {/* Building shadow */}
        <ellipse cx="50" cy="115" rx="35" ry="5" fill="black" opacity="0.15" />

        {/* Main building - gray, slightly tilted for chaos feel */}
        <g transform="rotate(-3 50 60)">
          {/* Building body */}
          <rect x="15" y="25" width="70" height="85" fill="#6B7280" rx="2" />

          {/* Windows - some lit, some dark (chaotic) */}
          <rect x="22" y="32" width="10" height="12" fill="#1F2937" />
          <rect x="38" y="32" width="10" height="12" fill="#FEF3C7" />
          <rect x="54" y="32" width="10" height="12" fill="#1F2937" />

          <rect x="22" y="50" width="10" height="12" fill="#FEF3C7" />
          <rect x="38" y="50" width="10" height="12" fill="#1F2937" />
          <rect x="54" y="50" width="10" height="12" fill="#374151" />

          <rect x="22" y="68" width="10" height="12" fill="#1F2937" />
          <rect x="38" y="68" width="10" height="12" fill="#FEF3C7" />
          <rect x="54" y="68" width="10" height="12" fill="#1F2937" />

          {/* Door */}
          <rect x="38" y="90" width="20" height="20" fill="#1F2937" rx="1" />

          {/* Roof */}
          <rect x="12" y="20" width="76" height="8" fill="#4B5563" rx="1" />

          {/* Chaos elements - papers flying */}
          <rect x="78" y="28" width="8" height="10" fill="white" transform="rotate(20 78 28)" opacity="0.6" />
          <rect x="82" y="45" width="6" height="8" fill="white" transform="rotate(-15 82 45)" opacity="0.4" />
        </g>

        {/* Storm cloud above */}
        <ellipse cx="50" cy="12" rx="25" ry="10" fill="#9CA3AF" opacity="0.5" />
        <ellipse cx="35" cy="10" rx="15" ry="8" fill="#9CA3AF" opacity="0.4" />
      </svg>
    </motion.div>
  );
}

// Obstacle 1 - Data Silo (upper middle)
function Obstacle1({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.15, 0.25, 0.35], [0, 0.8, 0.3]);
  const x = useTransform(progress, [0.15, 0.25, 0.35], [20, 0, -10]);

  return (
    <motion.div
      style={{ opacity, x }}
      className="absolute top-[22%] left-1/2 -translate-x-1/2"
    >
      <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
        <ellipse cx="30" cy="65" rx="20" ry="4" fill="black" opacity="0.15" />
        <rect x="12" y="15" width="36" height="48" fill="#EF4444" rx="3" opacity="0.7" />
        <ellipse cx="30" cy="15" rx="18" ry="6" fill="#DC2626" opacity="0.8" />
        {/* Lock symbol */}
        <rect x="22" y="32" width="16" height="12" fill="#1F2937" rx="2" />
        <path d="M26 32 V28 A4 4 0 0 1 34 28 V32" stroke="#1F2937" strokeWidth="3" fill="none" />
      </svg>
    </motion.div>
  );
}

// Obstacle 2 - Tangled integrations (middle)
function Obstacle2({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.35, 0.45, 0.55], [0, 0.8, 0.3]);
  const x = useTransform(progress, [0.35, 0.45, 0.55], [-20, 0, 10]);

  return (
    <motion.div
      style={{ opacity, x }}
      className="absolute top-[42%] left-1/2 -translate-x-1/2"
    >
      <svg width="70" height="60" viewBox="0 0 70 60" fill="none">
        {/* Tangled wires */}
        <path
          d="M10 10 C25 30, 45 5, 60 25 S50 50, 35 55 S10 40, 10 10"
          stroke="#F97316"
          strokeWidth="3"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M15 20 C40 25, 30 45, 55 50"
          stroke="#EE82F0"
          strokeWidth="2.5"
          fill="none"
          opacity="0.6"
        />
        <circle cx="10" cy="10" r="5" fill="#F97316" opacity="0.8" />
        <circle cx="55" cy="50" r="5" fill="#EE82F0" opacity="0.8" />
        <circle cx="35" cy="30" r="4" fill="#3BB782" opacity="0.6" />
      </svg>
    </motion.div>
  );
}

// Tool icons that appear mid-journey
function ToolIcons({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.25, 0.35, 0.5], [0, 0.9, 0.5]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute top-[32%] left-1/2 -translate-x-1/2 flex flex-col gap-2"
    >
      {/* CRM icon */}
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="2" width="28" height="28" rx="6" fill="#3BB782" opacity="0.8" />
        <circle cx="11" cy="11" r="3" fill="white" opacity="0.9" />
        <circle cx="21" cy="11" r="3" fill="white" opacity="0.9" />
        <circle cx="16" cy="21" r="3" fill="white" opacity="0.9" />
        <line x1="11" y1="11" x2="21" y2="11" stroke="white" strokeWidth="1.5" opacity="0.7" />
        <line x1="16" y1="11" x2="16" y2="21" stroke="white" strokeWidth="1.5" opacity="0.7" />
      </svg>
    </motion.div>
  );
}

// Milestone flags along the journey
function Milestones({ progress }: { progress: MotionValue<number> }) {
  const flag1Scale = useTransform(progress, [0.2, 0.28], [0, 1]);
  const flag2Scale = useTransform(progress, [0.45, 0.53], [0, 1]);
  const flag3Scale = useTransform(progress, [0.65, 0.73], [0, 1]);

  return (
    <>
      <motion.div
        style={{ scale: flag1Scale }}
        className="absolute top-[18%] left-[65%] origin-bottom"
      >
        <svg width="20" height="28" viewBox="0 0 20 28">
          <rect x="2" y="4" width="2" height="24" fill="#3BB782" />
          <polygon points="4,4 20,9 4,14" fill="#3BB782" opacity="0.9" />
        </svg>
      </motion.div>

      <motion.div
        style={{ scale: flag2Scale }}
        className="absolute top-[48%] left-[25%] origin-bottom"
      >
        <svg width="20" height="28" viewBox="0 0 20 28">
          <rect x="2" y="4" width="2" height="24" fill="#EE82F0" />
          <polygon points="4,4 20,9 4,14" fill="#EE82F0" opacity="0.9" />
        </svg>
      </motion.div>

      <motion.div
        style={{ scale: flag3Scale }}
        className="absolute top-[68%] left-[60%] origin-bottom"
      >
        <svg width="20" height="28" viewBox="0 0 20 28">
          <rect x="2" y="4" width="2" height="24" fill="#F97316" />
          <polygon points="4,4 20,9 4,14" fill="#F97316" opacity="0.9" />
        </svg>
      </motion.div>
    </>
  );
}

// Guide/campfire scene (lower middle)
function CampfireScene({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.55, 0.65, 0.8], [0, 0.9, 0.5]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute top-[58%] left-1/2 -translate-x-1/2"
    >
      <svg width="70" height="55" viewBox="0 0 70 55" fill="none">
        {/* Campfire glow */}
        <ellipse cx="35" cy="45" rx="20" ry="8" fill="#F97316" opacity="0.3" filter="blur(4px)" />

        {/* Campfire */}
        <path d="M28 48 Q32 30 35 35 Q38 25 42 48 Z" fill="#F97316" opacity="0.8" />
        <path d="M32 48 Q35 32 38 48 Z" fill="#FEF3C7" opacity="0.9" />

        {/* Figure silhouettes */}
        <circle cx="15" cy="38" r="5" fill="#374151" opacity="0.6" />
        <rect x="12" y="44" width="6" height="10" fill="#374151" opacity="0.5" rx="1" />

        <circle cx="55" cy="38" r="5" fill="#374151" opacity="0.6" />
        <rect x="52" y="44" width="6" height="10" fill="#374151" opacity="0.5" rx="1" />
      </svg>
    </motion.div>
  );
}

// Journey end marker - simple glow point at contact form area
function JourneyEndPoint({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.7, 0.85], [0, 1]);
  const scale = useTransform(progress, [0.7, 0.85], [0.5, 1.2]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute top-[88%] left-1/2 -translate-x-1/2"
    >
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        {/* Glowing endpoint */}
        <circle cx="30" cy="30" r="25" fill="#3BB782" opacity="0.2" filter="blur(8px)" />
        <circle cx="30" cy="30" r="15" fill="#3BB782" opacity="0.4" filter="blur(4px)" />
        <circle cx="30" cy="30" r="8" fill="#3BB782" opacity="0.8" />
        {/* Sparkle */}
        <path d="M30 18 L32 28 L30 22 L28 28 Z" fill="white" opacity="0.6" />
        <path d="M18 30 L28 32 L22 30 L28 28 Z" fill="white" opacity="0.6" />
      </svg>
    </motion.div>
  );
}

export function IsometricScene({ progress }: IsometricSceneProps) {
  return (
    <div className="relative w-full h-full">
      {/* No solid background - transparent to blend with page */}

      {/* Journey path */}
      <JourneyPath progress={progress} />

      {/* Scene elements - ordered by position (top to bottom) */}
      <StartingOffice progress={progress} />
      <Obstacle1 progress={progress} />
      <ToolIcons progress={progress} />
      <Obstacle2 progress={progress} />
      <Milestones progress={progress} />
      <CampfireScene progress={progress} />
      {/* Journey ends with a glow point that leads into the CTA bloom */}
      <JourneyEndPoint progress={progress} />
    </div>
  );
}
