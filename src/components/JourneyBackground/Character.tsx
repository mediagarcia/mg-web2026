"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface CharacterProps {
  y: MotionValue<string>;
  progress: MotionValue<number>;
}

export function Character({ y, progress }: CharacterProps) {
  // Character bounces slightly as they "walk"
  const bounce = useTransform(
    progress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [0, -3, 0, -3, 0, -3, 0, -3, 0, -3, 0]
  );

  return (
    <motion.div
      style={{ top: y, x: bounce }}
      className="absolute left-1/2 -translate-x-1/2 w-14 h-20 z-20"
    >
      {/* Business Professional Character - Isometric Style */}
      <svg
        viewBox="0 0 56 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-lg"
      >
        {/* Shadow */}
        <ellipse cx="28" cy="76" rx="12" ry="3" fill="black" opacity="0.25" />

        {/* Legs - dark pants */}
        <path d="M21 56 L21 68 L24 68 L24 56 Z" fill="#1a1a1a" />
        <path d="M32 56 L32 68 L35 68 L35 56 Z" fill="#1a1a1a" />

        {/* Shoes */}
        <ellipse cx="22.5" cy="70" rx="3" ry="1.5" fill="#0a0a0a" />
        <ellipse cx="33.5" cy="70" rx="3" ry="1.5" fill="#0a0a0a" />

        {/* Body - teal jacket (brand color) */}
        <path
          d="M17 36 L17 58 L39 58 L39 36 C39 30 34 28 28 28 C22 28 17 30 17 36 Z"
          fill="#3BB782"
        />

        {/* Jacket details - lapels */}
        <path d="M24 36 L28 44 L32 36 L28 38 Z" fill="#2F9268" />

        {/* Shirt collar */}
        <path d="M24 32 L28 38 L32 32" stroke="white" strokeWidth="1.5" fill="none" />

        {/* Tie */}
        <path d="M28 38 L26.5 42 L28 56 L29.5 42 Z" fill="#EE82F0" />

        {/* Arms */}
        <path d="M17 38 L12 52 L15 53 L19 42 Z" fill="#3BB782" />
        <path d="M39 38 L44 52 L41 53 L37 42 Z" fill="#3BB782" />

        {/* Hands */}
        <circle cx="13" cy="54" r="2.5" fill="#f5d0c5" />
        <circle cx="43" cy="54" r="2.5" fill="#f5d0c5" />

        {/* Briefcase in right hand */}
        <rect x="40" y="54" width="8" height="6" rx="1" fill="#8B4513" />
        <rect x="42.5" y="53" width="3" height="1.5" rx="0.5" fill="#654321" />

        {/* Neck */}
        <rect x="25" y="24" width="6" height="6" fill="#f5d0c5" />

        {/* Head */}
        <ellipse cx="28" cy="17" rx="10" ry="11" fill="#f5d0c5" />

        {/* Hair */}
        <path
          d="M18 14 C18 7 22 3 28 3 C34 3 38 7 38 14 C38 10 34 9 28 9 C22 9 18 10 18 14 Z"
          fill="#2a2a2a"
        />

        {/* Face - simple features */}
        <circle cx="24" cy="15" r="1.5" fill="#2a2a2a" />
        <circle cx="32" cy="15" r="1.5" fill="#2a2a2a" />

        {/* Confident smile */}
        <path d="M25 22 Q28 25 31 22" stroke="#2a2a2a" strokeWidth="1.2" fill="none" />

        {/* Glow around character */}
        <ellipse cx="28" cy="40" rx="18" ry="25" fill="url(#characterGlow)" opacity="0.4" />

        <defs>
          <radialGradient id="characterGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3BB782" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3BB782" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
