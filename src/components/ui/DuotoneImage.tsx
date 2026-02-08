"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

// Brand colors for duotone effects
const duotoneColors = {
  teal: {
    base: "#3BB782",
    dark: "#236E4E",
  },
  purple: {
    base: "#EE82F0",
    dark: "#9F17A1",
  },
  orange: {
    base: "#EC4724",
    dark: "#972814",
  },
} as const;

export interface DuotoneImageProps {
  src: string;
  alt: string;
  color: keyof typeof duotoneColors;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  intensity?: "light" | "medium" | "strong";
  sizes?: string;
}

/**
 * DuotoneImage - Applies a brand-colored duotone effect to images
 *
 * Uses CSS filters and blend modes to create editorial-style duotone treatment:
 * 1. Base image is desaturated (grayscale)
 * 2. Colored overlay is applied with multiply blend mode
 * 3. Creates premium editorial aesthetic inspired by Mole Street
 */
export function DuotoneImage({
  src,
  alt,
  color,
  className,
  fill = true,
  width,
  height,
  priority = false,
  intensity = "medium",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: DuotoneImageProps) {
  const colors = duotoneColors[color];

  // Intensity controls overlay opacity
  const opacityMap = {
    light: "opacity-60",
    medium: "opacity-75",
    strong: "opacity-90",
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Base image - desaturated */}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        priority={priority}
        sizes={fill ? sizes : undefined}
        className="object-cover grayscale contrast-[1.1] brightness-[1.05]"
      />

      {/* Duotone overlay - gradient from base to dark color */}
      <div
        className={cn(
          "absolute inset-0 mix-blend-multiply",
          opacityMap[intensity]
        )}
        style={{
          background: `linear-gradient(135deg, ${colors.base} 0%, ${colors.dark} 100%)`,
        }}
      />

      {/* Optional highlight overlay for depth */}
      <div
        className="absolute inset-0 mix-blend-soft-light opacity-30"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, ${colors.base}40 0%, transparent 60%)`,
        }}
      />
    </div>
  );
}
