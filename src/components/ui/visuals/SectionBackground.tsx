"use client";

import { GradientOrb, TealPurpleOrbPair, CenteredGlow } from "./GradientOrb";
import { GridPattern, FadingGridPattern } from "./GridPattern";

type Preset =
  | "orbs-teal-purple"
  | "orbs-subtle"
  | "grid-dots"
  | "grid-lines"
  | "glow-center"
  | "mesh-gradient"
  | "minimal";

interface SectionBackgroundProps {
  preset?: Preset;
  className?: string;
  children?: React.ReactNode;
  // Fine-grained control
  showOrbs?: boolean;
  showGrid?: boolean;
  showGlow?: boolean;
  orbColor?: "teal" | "purple" | "orange";
  gridColor?: "teal" | "white" | "gray";
  gridOpacity?: number;
}

export function SectionBackground({
  preset = "minimal",
  className = "",
  children,
  showOrbs,
  showGrid,
  showGlow,
  orbColor = "teal",
  gridColor = "white",
  gridOpacity = 0.05,
}: SectionBackgroundProps) {
  // Determine what to show based on preset or explicit props
  const shouldShowOrbs = showOrbs ?? (
    preset === "orbs-teal-purple" ||
    preset === "orbs-subtle"
  );
  const shouldShowGrid = showGrid ?? (
    preset === "grid-dots" ||
    preset === "grid-lines" ||
    preset === "mesh-gradient"
  );
  const shouldShowGlow = showGlow ?? (
    preset === "glow-center" ||
    preset === "mesh-gradient"
  );

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {/* Gradient orbs */}
      {shouldShowOrbs && preset === "orbs-teal-purple" && (
        <TealPurpleOrbPair />
      )}
      {shouldShowOrbs && preset === "orbs-subtle" && (
        <>
          <GradientOrb
            color={orbColor}
            size="lg"
            className="-top-32 -right-32"
            intensity="subtle"
            blur="xl"
          />
        </>
      )}
      {shouldShowOrbs && !["orbs-teal-purple", "orbs-subtle"].includes(preset) && (
        <GradientOrb
          color={orbColor}
          size="lg"
          className="-top-32 -right-32"
          intensity="subtle"
        />
      )}

      {/* Grid patterns */}
      {shouldShowGrid && preset === "grid-dots" && (
        <FadingGridPattern
          type="dots"
          color={gridColor}
          opacity={gridOpacity}
          fadeDirection="both"
        />
      )}
      {shouldShowGrid && preset === "grid-lines" && (
        <GridPattern
          type="lines"
          color={gridColor}
          opacity={gridOpacity}
        />
      )}
      {shouldShowGrid && preset === "mesh-gradient" && (
        <FadingGridPattern
          type="dots"
          color={gridColor}
          opacity={0.03}
          fadeDirection="both"
        />
      )}

      {/* Centered glow */}
      {shouldShowGlow && (
        <CenteredGlow color={orbColor} />
      )}

      {/* Mesh gradient overlay for mesh-gradient preset */}
      {preset === "mesh-gradient" && (
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(59,183,130,0.05) 0%, rgba(238,130,240,0.05) 100%)",
          }}
        />
      )}

      {children}
    </div>
  );
}

// Quick-use exports for common patterns
export function OrbsBackground({ className = "" }: { className?: string }) {
  return <SectionBackground preset="orbs-teal-purple" className={className} />;
}

export function DotsBackground({ className = "" }: { className?: string }) {
  return <SectionBackground preset="grid-dots" className={className} />;
}

export function MeshBackground({ className = "" }: { className?: string }) {
  return <SectionBackground preset="mesh-gradient" className={className} />;
}

export function GlowBackground({
  color = "teal",
  className = ""
}: {
  color?: "teal" | "purple" | "orange";
  className?: string
}) {
  return <SectionBackground preset="glow-center" orbColor={color} className={className} />;
}
