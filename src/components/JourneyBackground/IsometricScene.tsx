"use client";

import React from "react";
import { MotionValue, useTransform, motion } from "framer-motion";

interface IsometricSceneProps {
  progress: MotionValue<number>;
}

// Vertical path that winds down the left side - full height
function JourneyPath({ progress }: { progress: MotionValue<number> }) {
  const pathLength = useTransform(progress, [0, 0.95], [0.05, 1]);
  // Path gets wider as it approaches the end
  const strokeWidth = useTransform(progress, [0, 0.6, 0.95], [3, 4, 8]);
  const glowWidth = useTransform(progress, [0, 0.6, 0.95], [16, 28, 50]);

  return (
    <svg
      className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-24"
      viewBox="0 0 80 1000"
      preserveAspectRatio="none"
    >
      {/* Main path - dashed line */}
      <motion.path
        d="M 40 0
           C 50 80, 30 140, 40 200
           S 55 280, 40 360
           S 25 440, 40 520
           S 55 600, 40 680
           S 30 760, 40 840
           S 50 920, 40 1000"
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
           S 50 920, 40 1000"
        fill="none"
        stroke="#3BB782"
        style={{ pathLength, strokeWidth: glowWidth }}
        opacity={0.15}
        filter="blur(6px)"
      />
    </svg>
  );
}

// 0-12%: Chaotic CRM - messy office building at top
function ChaoticCRM({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.12, 0.18], [1, 0.8, 0.3]);
  const scale = useTransform(progress, [0, 0.12], [1, 0.95]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute top-[2%] left-1/2 -translate-x-1/2"
    >
      <svg width="80" height="90" viewBox="0 0 80 90" fill="none">
        {/* Building shadow */}
        <ellipse cx="40" cy="87" rx="28" ry="4" fill="black" opacity="0.15" />

        {/* Main building - gray, slightly tilted for chaos feel */}
        <g transform="rotate(-3 40 50)">
          {/* Building body */}
          <rect x="12" y="20" width="56" height="65" fill="#6B7280" rx="2" />

          {/* Windows - some lit, some dark (chaotic) */}
          <rect x="18" y="26" width="8" height="10" fill="#1F2937" />
          <rect x="30" y="26" width="8" height="10" fill="#FEF3C7" />
          <rect x="42" y="26" width="8" height="10" fill="#1F2937" />

          <rect x="18" y="40" width="8" height="10" fill="#FEF3C7" />
          <rect x="30" y="40" width="8" height="10" fill="#1F2937" />
          <rect x="42" y="40" width="8" height="10" fill="#374151" />

          <rect x="18" y="54" width="8" height="10" fill="#1F2937" />
          <rect x="30" y="54" width="8" height="10" fill="#FEF3C7" />
          <rect x="42" y="54" width="8" height="10" fill="#1F2937" />

          {/* Door */}
          <rect x="30" y="70" width="16" height="15" fill="#1F2937" rx="1" />

          {/* Roof */}
          <rect x="10" y="16" width="60" height="6" fill="#4B5563" rx="1" />

          {/* Chaos elements - papers flying */}
          <rect x="60" y="22" width="6" height="8" fill="white" transform="rotate(20 60 22)" opacity="0.6" />
          <rect x="64" y="36" width="5" height="6" fill="white" transform="rotate(-15 64 36)" opacity="0.4" />
          <rect x="2" y="28" width="5" height="7" fill="white" transform="rotate(15 2 28)" opacity="0.5" />
        </g>

        {/* Storm cloud above */}
        <ellipse cx="40" cy="10" rx="20" ry="8" fill="#9CA3AF" opacity="0.5" />
        <ellipse cx="28" cy="8" rx="12" ry="6" fill="#9CA3AF" opacity="0.4" />
      </svg>
    </motion.div>
  );
}

// 12-25%: Platform Icons - HubSpot-style sprocket with connections
function PlatformIcons({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.10, 0.15, 0.22, 0.28], [0, 1, 1, 0.3]);
  const scale = useTransform(progress, [0.10, 0.15], [0.8, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute top-[14%] left-1/2 -translate-x-1/2"
    >
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
        {/* Central sprocket/gear */}
        <circle cx="35" cy="35" r="14" fill="#3BB782" />
        <circle cx="35" cy="35" r="8" fill="#2F9268" />
        {/* Gear teeth */}
        <rect x="32" y="18" width="6" height="6" fill="#3BB782" rx="1" />
        <rect x="32" y="46" width="6" height="6" fill="#3BB782" rx="1" />
        <rect x="18" y="32" width="6" height="6" fill="#3BB782" rx="1" />
        <rect x="46" y="32" width="6" height="6" fill="#3BB782" rx="1" />

        {/* Connected nodes */}
        <circle cx="12" cy="15" r="6" fill="#3BB782" opacity="0.7" />
        <circle cx="58" cy="15" r="6" fill="#3BB782" opacity="0.7" />
        <circle cx="12" cy="55" r="6" fill="#3BB782" opacity="0.7" />
        <circle cx="58" cy="55" r="6" fill="#3BB782" opacity="0.7" />

        {/* Connection lines */}
        <line x1="20" y1="25" x2="28" y2="30" stroke="#3BB782" strokeWidth="2" opacity="0.5" />
        <line x1="50" y1="25" x2="42" y2="30" stroke="#3BB782" strokeWidth="2" opacity="0.5" />
        <line x1="20" y1="50" x2="28" y2="42" stroke="#3BB782" strokeWidth="2" opacity="0.5" />
        <line x1="50" y1="50" x2="42" y2="42" stroke="#3BB782" strokeWidth="2" opacity="0.5" />
      </svg>
    </motion.div>
  );
}

// 25-40%: Growth Chart - rising bar chart with arrow
function GrowthChart({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.22, 0.28, 0.36, 0.42], [0, 1, 1, 0.3]);
  const scale = useTransform(progress, [0.22, 0.28], [0.8, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute top-[28%] left-1/2 -translate-x-1/2"
    >
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        {/* Chart base line */}
        <line x1="10" y1="50" x2="50" y2="50" stroke="#3BB782" strokeWidth="2" opacity="0.6" />
        <line x1="10" y1="50" x2="10" y2="10" stroke="#3BB782" strokeWidth="2" opacity="0.6" />

        {/* Bars - increasing height */}
        <rect x="15" y="38" width="8" height="12" fill="#3BB782" rx="1" />
        <rect x="26" y="28" width="8" height="22" fill="#3BB782" rx="1" />
        <rect x="37" y="18" width="8" height="32" fill="#3BB782" rx="1" />

        {/* Upward arrow */}
        <path d="M48 8 L52 16 L49 16 L49 24 L47 24 L47 16 L44 16 Z" fill="#3BB782" />

        {/* Trend line */}
        <path d="M19 34 L30 24 L41 14" stroke="#2F9268" strokeWidth="2" fill="none" strokeDasharray="3 2" />
      </svg>
    </motion.div>
  );
}

// 40-55%: Industry Icons - medical cross, server, cloud (vertical)
function IndustryIcons({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.38, 0.43, 0.52, 0.58], [0, 1, 1, 0.3]);
  const scale = useTransform(progress, [0.38, 0.43], [0.8, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute top-[43%] left-1/2 -translate-x-1/2"
    >
      <svg width="50" height="80" viewBox="0 0 50 80" fill="none">
        {/* Medical Cross */}
        <rect x="18" y="2" width="14" height="22" fill="#EE82F0" rx="2" />
        <rect x="13" y="8" width="24" height="10" fill="#EE82F0" rx="2" />
        <rect x="20" y="4" width="10" height="18" fill="#D41ED7" opacity="0.6" />
        <rect x="15" y="10" width="20" height="6" fill="#D41ED7" opacity="0.6" />

        {/* Server/Database */}
        <rect x="12" y="30" width="26" height="18" fill="#EE82F0" rx="3" />
        <line x1="12" y1="36" x2="38" y2="36" stroke="#D41ED7" strokeWidth="1.5" />
        <line x1="12" y1="42" x2="38" y2="42" stroke="#D41ED7" strokeWidth="1.5" />
        <circle cx="33" cy="33" r="2" fill="#3BB782" />
        <circle cx="33" cy="39" r="2" fill="#3BB782" />
        <circle cx="33" cy="45" r="2" fill="#F97316" />

        {/* Cloud */}
        <ellipse cx="25" cy="65" rx="14" ry="8" fill="#EE82F0" />
        <ellipse cx="17" cy="63" rx="8" ry="6" fill="#EE82F0" />
        <ellipse cx="33" cy="63" rx="8" ry="6" fill="#EE82F0" />
        <ellipse cx="25" cy="60" rx="6" ry="5" fill="#EE82F0" />
      </svg>
    </motion.div>
  );
}

// 55-70%: Process Steps - Discovery, Strategy, Build, Launch (2x2 grid)
function ProcessSteps({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.52, 0.58, 0.67, 0.73], [0, 1, 1, 0.3]);
  const scale = useTransform(progress, [0.52, 0.58], [0.8, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute top-[58%] left-1/2 -translate-x-1/2"
    >
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        {/* Magnifying glass - Discovery (top-left) */}
        <circle cx="14" cy="14" r="8" stroke="#F97316" strokeWidth="2.5" fill="none" />
        <line x1="20" y1="20" x2="26" y2="26" stroke="#F97316" strokeWidth="2.5" />

        {/* Lightbulb - Strategy (top-right) */}
        <path d="M46 6 C40 6 36 11 36 17 C36 21 38 23 38 26 L42 26 L42 28 L50 28 L50 26 L54 26 C54 23 56 21 56 17 C56 11 52 6 46 6 Z" fill="#F97316" />
        <rect x="41" y="28" width="10" height="3" fill="#F97316" rx="1" />
        <line x1="46" y1="0" x2="46" y2="3" stroke="#F97316" strokeWidth="1.5" />
        <line x1="56" y1="6" x2="58" y2="4" stroke="#F97316" strokeWidth="1.5" />
        <line x1="36" y1="6" x2="34" y2="4" stroke="#F97316" strokeWidth="1.5" />

        {/* Hammer/Wrench - Build (bottom-left) */}
        <rect x="6" y="38" width="6" height="18" fill="#F97316" rx="1" />
        <rect x="4" y="36" width="10" height="6" fill="#F97316" rx="1" />
        <rect x="20" y="42" width="8" height="4" fill="#F97316" rx="1" />
        <rect x="16" y="44" width="4" height="12" fill="#F97316" rx="1" transform="rotate(-45 18 50)" />

        {/* Rocket - Launch (bottom-right) */}
        <path d="M46 60 L44 52 L46 40 L48 52 Z" fill="#F97316" />
        <ellipse cx="46" cy="38" rx="5" ry="7" fill="#F97316" />
        <circle cx="46" cy="38" r="2" fill="white" />
        <path d="M40 50 L42 48 L44 54 Z" fill="#F97316" opacity="0.7" />
        <path d="M52 50 L50 48 L48 54 Z" fill="#F97316" opacity="0.7" />
        {/* Flame */}
        <path d="M44 58 Q46 65 48 58 Q46 62 44 58 Z" fill="#EF4444" opacity="0.9" />
      </svg>
    </motion.div>
  );
}

// 70-85%: Award Badge - certificate with ribbon
function AwardBadge({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.67, 0.73, 0.82, 0.88], [0, 1, 1, 0.3]);
  const scale = useTransform(progress, [0.67, 0.73], [0.8, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute top-[73%] left-1/2 -translate-x-1/2"
    >
      <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
        {/* Certificate circle */}
        <circle cx="30" cy="25" r="20" fill="#F59E0B" />
        <circle cx="30" cy="25" r="15" fill="#FBBF24" />
        <circle cx="30" cy="25" r="10" fill="#F59E0B" />

        {/* Star in center */}
        <path d="M30 15 L32 22 L39 22 L34 27 L36 34 L30 30 L24 34 L26 27 L21 22 L28 22 Z" fill="#FEF3C7" />

        {/* Ribbons */}
        <path d="M20 40 L22 55 L26 50 L30 58 L25 42 Z" fill="#DC2626" />
        <path d="M40 40 L38 55 L34 50 L30 58 L35 42 Z" fill="#DC2626" />

        {/* Ribbon detail */}
        <path d="M22 48 L26 45 L24 50 Z" fill="#B91C1C" />
        <path d="M38 48 L34 45 L36 50 Z" fill="#B91C1C" />
      </svg>
    </motion.div>
  );
}

// 85-95%: Testimonial Stars - speech bubbles with 5-star ratings
function TestimonialStars({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.82, 0.88, 0.93, 0.97], [0, 1, 1, 0.5]);
  const scale = useTransform(progress, [0.82, 0.88], [0.8, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute top-[86%] left-1/2 -translate-x-1/2"
    >
      <svg width="70" height="55" viewBox="0 0 70 55" fill="none">
        {/* Speech bubble 1 (back) */}
        <path d="M5 8 Q5 2 15 2 L45 2 Q55 2 55 8 L55 28 Q55 34 45 34 L20 34 L12 42 L14 34 L15 34 Q5 34 5 28 Z" fill="#3BB782" opacity="0.6" />

        {/* Speech bubble 2 (front) */}
        <path d="M15 18 Q15 12 25 12 L55 12 Q65 12 65 18 L65 38 Q65 44 55 44 L30 44 L22 52 L24 44 L25 44 Q15 44 15 38 Z" fill="#3BB782" />

        {/* Stars in front bubble */}
        <g transform="translate(22, 22)">
          <path d="M5 0 L6 3.5 L9.5 3.5 L6.75 5.5 L7.75 9 L5 7 L2.25 9 L3.25 5.5 L0.5 3.5 L4 3.5 Z" fill="#FEF3C7" />
          <path d="M15 0 L16 3.5 L19.5 3.5 L16.75 5.5 L17.75 9 L15 7 L12.25 9 L13.25 5.5 L10.5 3.5 L14 3.5 Z" fill="#FEF3C7" />
          <path d="M25 0 L26 3.5 L29.5 3.5 L26.75 5.5 L27.75 9 L25 7 L22.25 9 L23.25 5.5 L20.5 3.5 L24 3.5 Z" fill="#FEF3C7" />
          <path d="M35 0 L36 3.5 L39.5 3.5 L36.75 5.5 L37.75 9 L35 7 L32.25 9 L33.25 5.5 L30.5 3.5 L34 3.5 Z" fill="#FEF3C7" />
        </g>

        {/* Stars hint in back bubble */}
        <g transform="translate(12, 8)">
          <circle cx="8" cy="8" r="2" fill="#FEF3C7" opacity="0.7" />
          <circle cx="16" cy="8" r="2" fill="#FEF3C7" opacity="0.7" />
          <circle cx="24" cy="8" r="2" fill="#FEF3C7" opacity="0.7" />
        </g>
      </svg>
    </motion.div>
  );
}

// 95-100%: Glowing Destination - enhanced endpoint with pulsing effect
function GlowingDestination({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.90, 0.95], [0, 1]);
  const scale = useTransform(progress, [0.90, 0.95], [0.6, 1.2]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute bottom-[2%] left-1/2 -translate-x-1/2"
    >
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        {/* Glowing endpoint - destination marker */}
        <circle cx="50" cy="50" r="45" fill="#3BB782" opacity="0.25" filter="blur(12px)" />
        <circle cx="50" cy="50" r="30" fill="#3BB782" opacity="0.4" filter="blur(6px)" />
        <circle cx="50" cy="50" r="18" fill="#3BB782" opacity="0.7" />
        <circle cx="50" cy="50" r="10" fill="#3BB782" opacity="0.9" />

        {/* Sparkle/star burst */}
        <path d="M50 25 L52 45 L50 35 L48 45 Z" fill="white" opacity="0.8" />
        <path d="M50 75 L52 55 L50 65 L48 55 Z" fill="white" opacity="0.8" />
        <path d="M25 50 L45 52 L35 50 L45 48 Z" fill="white" opacity="0.8" />
        <path d="M75 50 L55 52 L65 50 L55 48 Z" fill="white" opacity="0.8" />

        {/* Pulsing ring */}
        <circle
          cx="50"
          cy="50"
          r="35"
          fill="none"
          stroke="#3BB782"
          strokeWidth="2"
          opacity="0.5"
        >
          <animate attributeName="r" values="30;40;30" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Second pulsing ring (offset timing) */}
        <circle
          cx="50"
          cy="50"
          r="35"
          fill="none"
          stroke="#3BB782"
          strokeWidth="1.5"
          opacity="0.3"
        >
          <animate attributeName="r" values="25;35;25" dur="2s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>
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

      {/* Scene elements - ordered by scroll position (top to bottom) */}
      <ChaoticCRM progress={progress} />
      <PlatformIcons progress={progress} />
      <GrowthChart progress={progress} />
      <IndustryIcons progress={progress} />
      <ProcessSteps progress={progress} />
      <AwardBadge progress={progress} />
      <TestimonialStars progress={progress} />
      <GlowingDestination progress={progress} />
    </div>
  );
}
