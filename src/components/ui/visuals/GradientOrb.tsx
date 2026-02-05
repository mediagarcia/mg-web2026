"use client";

import { motion } from "framer-motion";

type OrbColor = "teal" | "purple" | "orange";
type OrbSize = "sm" | "md" | "lg" | "xl";

interface GradientOrbProps {
  color?: OrbColor;
  size?: OrbSize;
  className?: string;
  blur?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
  intensity?: "subtle" | "medium" | "strong";
}

const colorMap: Record<OrbColor, string> = {
  teal: "rgba(59, 183, 130, VAR)",
  purple: "rgba(238, 130, 240, VAR)",
  orange: "rgba(236, 71, 36, VAR)",
};

const intensityMap: Record<string, number> = {
  subtle: 0.15,
  medium: 0.3,
  strong: 0.5,
};

const sizeMap: Record<OrbSize, string> = {
  sm: "w-32 h-32",
  md: "w-64 h-64",
  lg: "w-96 h-96",
  xl: "w-[500px] h-[500px]",
};

const blurMap: Record<string, string> = {
  sm: "blur-2xl",
  md: "blur-3xl",
  lg: "blur-[100px]",
  xl: "blur-[150px]",
};

export function GradientOrb({
  color = "teal",
  size = "md",
  className = "",
  blur = "lg",
  animate = true,
  intensity = "medium",
}: GradientOrbProps) {
  const colorValue = colorMap[color].replace("VAR", String(intensityMap[intensity]));

  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${sizeMap[size]} ${blurMap[blur]} ${className}`}
      style={{
        background: `radial-gradient(circle, ${colorValue} 0%, transparent 70%)`,
      }}
      initial={animate ? { scale: 0.8, opacity: 0 } : false}
      animate={
        animate
          ? {
              scale: [1, 1.05, 1],
              opacity: 1,
            }
          : { opacity: 1 }
      }
      transition={
        animate
          ? {
              scale: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              },
              opacity: {
                duration: 0.8,
              },
            }
          : { opacity: { duration: 0.8 } }
      }
      aria-hidden="true"
    />
  );
}

// Pre-composed orb clusters for common use cases
export function TealPurpleOrbPair({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <GradientOrb
        color="teal"
        size="xl"
        className="-top-48 -right-48"
        intensity="medium"
      />
      <GradientOrb
        color="purple"
        size="lg"
        className="-bottom-32 -left-32"
        intensity="subtle"
      />
    </div>
  );
}

export function CenteredGlow({
  color = "teal",
  className = ""
}: {
  color?: OrbColor;
  className?: string
}) {
  const colorValue = colorMap[color].replace("VAR", "0.15");

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        background: `radial-gradient(ellipse at center, ${colorValue} 0%, transparent 50%)`,
      }}
      aria-hidden="true"
    />
  );
}
