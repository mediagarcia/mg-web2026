"use client";

import { motion } from "framer-motion";

export type CharacterVariant = "professional" | "creative" | "leader";

interface CharacterSVGProps {
  variant: CharacterVariant;
  className?: string;
}

const variantStyles = {
  professional: {
    jacket: "#3BB782",      // Teal
    jacketDark: "#2F9268",
    tie: "#EE82F0",         // Purple
    hair: "#2a2a2a",
    skin: "#f5d0c5",
  },
  creative: {
    jacket: "#EE82F0",      // Purple
    jacketDark: "#D41ED7",
    tie: "#3BB782",         // Teal
    hair: "#8B4513",        // Brown
    skin: "#d4a574",
  },
  leader: {
    jacket: "#1F2937",      // Dark gray
    jacketDark: "#111827",
    tie: "#F97316",         // Orange
    hair: "#4a4a4a",        // Gray
    skin: "#c9a882",
  },
};

export function CharacterSVG({ variant, className = "" }: CharacterSVGProps) {
  const styles = variantStyles[variant];

  return (
    <svg
      viewBox="0 0 56 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shadow */}
      <ellipse cx="28" cy="76" rx="12" ry="3" fill="black" opacity="0.25" />

      {/* Legs */}
      <path d="M21 56 L21 68 L24 68 L24 56 Z" fill="#1a1a1a" />
      <path d="M32 56 L32 68 L35 68 L35 56 Z" fill="#1a1a1a" />

      {/* Shoes */}
      <ellipse cx="22.5" cy="70" rx="3" ry="1.5" fill="#0a0a0a" />
      <ellipse cx="33.5" cy="70" rx="3" ry="1.5" fill="#0a0a0a" />

      {/* Body */}
      <path
        d="M17 36 L17 58 L39 58 L39 36 C39 30 34 28 28 28 C22 28 17 30 17 36 Z"
        fill={styles.jacket}
      />

      {/* Lapels */}
      <path d="M24 36 L28 44 L32 36 L28 38 Z" fill={styles.jacketDark} />

      {/* Collar */}
      <path d="M24 32 L28 38 L32 32" stroke="white" strokeWidth="1.5" fill="none" />

      {/* Tie */}
      <path d="M28 38 L26.5 42 L28 56 L29.5 42 Z" fill={styles.tie} />

      {/* Arms */}
      <path d="M17 38 L12 52 L15 53 L19 42 Z" fill={styles.jacket} />
      <path d="M39 38 L44 52 L41 53 L37 42 Z" fill={styles.jacket} />

      {/* Hands */}
      <circle cx="13" cy="54" r="2.5" fill={styles.skin} />
      <circle cx="43" cy="54" r="2.5" fill={styles.skin} />

      {/* Briefcase */}
      <rect x="40" y="54" width="8" height="6" rx="1" fill="#8B4513" />
      <rect x="42.5" y="53" width="3" height="1.5" rx="0.5" fill="#654321" />

      {/* Neck */}
      <rect x="25" y="24" width="6" height="6" fill={styles.skin} />

      {/* Head */}
      <ellipse cx="28" cy="17" rx="10" ry="11" fill={styles.skin} />

      {/* Hair */}
      <path
        d="M18 14 C18 7 22 3 28 3 C34 3 38 7 38 14 C38 10 34 9 28 9 C22 9 18 10 18 14 Z"
        fill={styles.hair}
      />

      {/* Eyes */}
      <circle cx="24" cy="15" r="1.5" fill="#2a2a2a" />
      <circle cx="32" cy="15" r="1.5" fill="#2a2a2a" />

      {/* Smile */}
      <path d="M25 22 Q28 25 31 22" stroke="#2a2a2a" strokeWidth="1.2" fill="none" />

      {/* Glow */}
      <ellipse cx="28" cy="40" rx="18" ry="25" fill={`url(#glow-${variant})`} opacity="0.4" />

      <defs>
        <radialGradient id={`glow-${variant}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={styles.jacket} stopOpacity="0.5" />
          <stop offset="100%" stopColor={styles.jacket} stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

interface CharacterPickerProps {
  selected: CharacterVariant;
  onSelect: (variant: CharacterVariant) => void;
}

export function CharacterPicker({ selected, onSelect }: CharacterPickerProps) {
  const variants: { id: CharacterVariant; label: string }[] = [
    { id: "professional", label: "Pro" },
    { id: "creative", label: "Creative" },
    { id: "leader", label: "Leader" },
  ];

  return (
    <div className="flex flex-col items-center gap-2 p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
        Pick Your Guide
      </span>
      <div className="flex gap-2">
        {variants.map((v) => (
          <motion.button
            key={v.id}
            onClick={() => onSelect(v.id)}
            className={`relative p-1 rounded-lg transition-all ${
              selected === v.id
                ? "bg-gray-100 ring-2 ring-teal-500"
                : "hover:bg-gray-50"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CharacterSVG variant={v.id} className="w-8 h-12" />
            {selected === v.id && (
              <motion.div
                layoutId="selected-indicator"
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-teal-500 rounded-full"
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// Large character for CTA section
export function CharacterLarge({
  variant,
  size = "large",
}: {
  variant: CharacterVariant;
  size?: "large" | "xlarge";
}) {
  const styles = variantStyles[variant];

  // Size classes based on size prop
  const sizeClasses = size === "xlarge"
    ? "w-full h-full drop-shadow-2xl"
    : "w-32 h-48 drop-shadow-2xl";

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0, x: -100 }}
      animate={{ scale: 1, opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="relative w-full h-full"
    >
      <svg
        viewBox="0 0 120 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={sizeClasses}
      >
        {/* Shadow */}
        <ellipse cx="60" cy="172" rx="30" ry="8" fill="black" opacity="0.2" />

        {/* Legs */}
        <path d="M45 125 L45 155 L52 155 L52 125 Z" fill="#1a1a1a" />
        <path d="M68 125 L68 155 L75 155 L75 125 Z" fill="#1a1a1a" />

        {/* Shoes */}
        <ellipse cx="48.5" cy="160" rx="7" ry="3" fill="#0a0a0a" />
        <ellipse cx="71.5" cy="160" rx="7" ry="3" fill="#0a0a0a" />

        {/* Body */}
        <path
          d="M35 78 L35 130 L85 130 L85 78 C85 65 75 60 60 60 C45 60 35 65 35 78 Z"
          fill={styles.jacket}
        />

        {/* Lapels */}
        <path d="M50 78 L60 95 L70 78 L60 82 Z" fill={styles.jacketDark} />

        {/* Collar */}
        <path d="M50 68 L60 82 L70 68" stroke="white" strokeWidth="3" fill="none" />

        {/* Tie */}
        <path d="M60 82 L56 92 L60 125 L64 92 Z" fill={styles.tie} />

        {/* Arms */}
        <path d="M35 82 L22 115 L30 118 L40 90 Z" fill={styles.jacket} />
        <path d="M85 82 L98 115 L90 118 L80 90 Z" fill={styles.jacket} />

        {/* Hands */}
        <circle cx="25" cy="120" r="6" fill={styles.skin} />
        <circle cx="95" cy="120" r="6" fill={styles.skin} />

        {/* Waving hand (right) - raised */}
        <path d="M85 82 L105 60 L100 55 L78 85 Z" fill={styles.jacket} />
        <circle cx="102" cy="52" r="6" fill={styles.skin} />

        {/* Neck */}
        <rect x="52" y="48" width="16" height="14" fill={styles.skin} />

        {/* Head */}
        <ellipse cx="60" cy="32" rx="22" ry="26" fill={styles.skin} />

        {/* Hair */}
        <path
          d="M38 28 C38 12 46 4 60 4 C74 4 82 12 82 28 C82 18 74 16 60 16 C46 16 38 18 38 28 Z"
          fill={styles.hair}
        />

        {/* Eyes */}
        <circle cx="50" cy="28" r="3.5" fill="#2a2a2a" />
        <circle cx="70" cy="28" r="3.5" fill="#2a2a2a" />
        {/* Eye highlights */}
        <circle cx="51" cy="27" r="1" fill="white" />
        <circle cx="71" cy="27" r="1" fill="white" />

        {/* Eyebrows */}
        <path d="M45 22 Q50 20 55 22" stroke={styles.hair} strokeWidth="2" fill="none" />
        <path d="M65 22 Q70 20 75 22" stroke={styles.hair} strokeWidth="2" fill="none" />

        {/* Big smile */}
        <path d="M48 42 Q60 55 72 42" stroke="#2a2a2a" strokeWidth="2.5" fill="none" />

        {/* Speech bubble hint */}
        <ellipse cx="105" cy="25" rx="12" ry="10" fill="white" stroke={styles.jacket} strokeWidth="2" />
        <text x="105" y="29" textAnchor="middle" fontSize="12" fill={styles.jacket}>!</text>
      </svg>
    </motion.div>
  );
}
