"use client";

import { cn } from "@/lib/utils";

export type GeometricPattern = "spiral" | "grid" | "arc";
export type OverlayPosition =
  | "bottom-left"
  | "bottom-right"
  | "top-left"
  | "top-right";

interface GeometricOverlayProps {
  pattern: GeometricPattern;
  position?: OverlayPosition;
  color?: string;
  opacity?: number;
  size?: number;
  className?: string;
}

/**
 * GeometricOverlay - Decorative SVG patterns for editorial-style imagery
 *
 * Inspired by Mole Street's design aesthetic with subtle geometric elements
 * overlaid on photography to add visual interest and brand personality.
 */
export function GeometricOverlay({
  pattern,
  position = "bottom-left",
  color = "currentColor",
  opacity = 0.15,
  size = 200,
  className,
}: GeometricOverlayProps) {
  const positionClasses: Record<OverlayPosition, string> = {
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
  };

  return (
    <div
      className={cn(
        "absolute pointer-events-none",
        positionClasses[position],
        className
      )}
      style={{ width: size, height: size, opacity }}
    >
      <PatternSVG pattern={pattern} color={color} size={size} />
    </div>
  );
}

interface PatternSVGProps {
  pattern: GeometricPattern;
  color: string;
  size: number;
}

function PatternSVG({ pattern, color, size }: PatternSVGProps) {
  switch (pattern) {
    case "spiral":
      return <SpiralPattern color={color} size={size} />;
    case "grid":
      return <GridPattern color={color} size={size} />;
    case "arc":
      return <ArcPattern color={color} size={size} />;
    default:
      return null;
  }
}

/**
 * Spiral Pattern - Concentric arcs creating a spiral-like effect
 * Similar to Mole Street's signature geometric element
 */
function SpiralPattern({ color, size }: { color: string; size: number }) {
  const strokeWidth = 1.5;
  const gap = size / 8;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Concentric quarter arcs from bottom-left corner */}
      {[1, 2, 3, 4, 5, 6].map((i) => {
        const radius = i * gap;
        return (
          <path
            key={i}
            d={`M ${radius} ${size} A ${radius} ${radius} 0 0 1 0 ${size - radius}`}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

/**
 * Grid Pattern - Uniform dot grid for subtle texture
 */
function GridPattern({ color, size }: { color: string; size: number }) {
  const dotSize = 3;
  const gap = size / 8;
  const dots: { x: number; y: number }[] = [];

  for (let x = gap; x < size; x += gap) {
    for (let y = gap; y < size; y += gap) {
      dots.push({ x, y });
    }
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {dots.map((dot, i) => (
        <circle key={i} cx={dot.x} cy={dot.y} r={dotSize} fill={color} />
      ))}
    </svg>
  );
}

/**
 * Arc Pattern - Parallel curved lines suggesting flow/movement
 */
function ArcPattern({ color, size }: { color: string; size: number }) {
  const strokeWidth = 1.5;
  const gap = size / 6;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Diagonal arcs sweeping from bottom-left to top-right */}
      {[1, 2, 3, 4, 5].map((i) => {
        const offset = i * gap;
        // Create arcs that curve from bottom to right side
        const startX = 0;
        const startY = size - offset;
        const endX = offset;
        const endY = 0;
        const controlX = offset * 0.4;
        const controlY = size - offset * 0.4;

        return (
          <path
            key={i}
            d={`M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}
