"use client";

import { motion } from "framer-motion";

type AspectRatio = "square" | "video" | "portrait" | "wide" | "ultrawide";

interface ImagePlaceholderProps {
  aspectRatio?: AspectRatio;
  label?: string;
  showLabel?: boolean;
  className?: string;
  variant?: "gradient" | "solid" | "pattern";
  color?: "teal" | "purple" | "mixed";
}

const aspectRatioMap: Record<AspectRatio, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[2/1]",
  ultrawide: "aspect-[3/1]",
};

const gradientMap: Record<string, string> = {
  teal: "from-teal-500/20 via-teal-600/10 to-teal-700/5",
  purple: "from-neon-purple-500/20 via-neon-purple-600/10 to-neon-purple-700/5",
  mixed: "from-teal-500/15 via-neon-purple-500/10 to-orange-red-500/5",
};

export function ImagePlaceholder({
  aspectRatio = "video",
  label,
  showLabel = false,
  className = "",
  variant = "gradient",
  color = "mixed",
}: ImagePlaceholderProps) {
  const isDev = process.env.NODE_ENV === "development";
  const shouldShowLabel = showLabel || (isDev && label);

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl ${aspectRatioMap[aspectRatio]} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Background */}
      {variant === "gradient" && (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradientMap[color]}`}
        />
      )}
      {variant === "solid" && (
        <div className="absolute inset-0 bg-zinc-800/50" />
      )}
      {variant === "pattern" && (
        <div className="absolute inset-0 bg-zinc-900">
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="placeholder-dots"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="10" cy="10" r="1" fill="#3BB782" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#placeholder-dots)" />
          </svg>
        </div>
      )}

      {/* Decorative elements */}
      <div className="absolute inset-0">
        {/* Corner accents */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/10 rounded-tl-lg" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/10 rounded-br-lg" />

        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white/20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Dev label */}
      {shouldShowLabel && label && (
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white/60 font-mono">
            {label}
          </span>
        </div>
      )}
    </motion.div>
  );
}

// Card-sized placeholder for service/feature cards
export function CardImagePlaceholder({
  className = "",
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <ImagePlaceholder
      aspectRatio="video"
      variant="gradient"
      color="mixed"
      label={label}
      className={className}
    />
  );
}

// Hero-sized placeholder with more visual interest
export function HeroImagePlaceholder({
  className = "",
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <ImagePlaceholder
      aspectRatio="wide"
      variant="gradient"
      color="mixed"
      label={label}
      className={`min-h-[300px] ${className}`}
    />
  );
}

// Square avatar/team photo placeholder
export function AvatarPlaceholder({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeMap = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-full bg-gradient-to-br from-teal-500/20 to-neon-purple-500/10 ${sizeMap[size]} ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-1/2 h-1/2 text-white/20"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>
    </motion.div>
  );
}
