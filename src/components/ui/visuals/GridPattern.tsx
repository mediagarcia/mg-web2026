"use client";

type PatternType = "dots" | "lines" | "grid";
type PatternColor = "teal" | "white" | "gray";

interface GridPatternProps {
  type?: PatternType;
  color?: PatternColor;
  opacity?: number;
  spacing?: number;
  className?: string;
}

const colorMap: Record<PatternColor, string> = {
  teal: "#3BB782",
  white: "#ffffff",
  gray: "#71717a",
};

export function GridPattern({
  type = "dots",
  color = "white",
  opacity = 0.1,
  spacing = 24,
  className = "",
}: GridPatternProps) {
  const fillColor = colorMap[color];
  const patternId = `pattern-${type}-${color}-${spacing}`;

  const renderPattern = () => {
    switch (type) {
      case "dots":
        return (
          <pattern
            id={patternId}
            x="0"
            y="0"
            width={spacing}
            height={spacing}
            patternUnits="userSpaceOnUse"
          >
            <circle cx={spacing / 2} cy={spacing / 2} r="1.5" fill={fillColor} />
          </pattern>
        );
      case "lines":
        return (
          <pattern
            id={patternId}
            x="0"
            y="0"
            width={spacing}
            height={spacing}
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="0"
              y1={spacing}
              x2={spacing}
              y2={spacing}
              stroke={fillColor}
              strokeWidth="0.5"
            />
          </pattern>
        );
      case "grid":
        return (
          <pattern
            id={patternId}
            x="0"
            y="0"
            width={spacing}
            height={spacing}
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="0"
              y1={spacing}
              x2={spacing}
              y2={spacing}
              stroke={fillColor}
              strokeWidth="0.5"
            />
            <line
              x1={spacing}
              y1="0"
              x2={spacing}
              y2={spacing}
              stroke={fillColor}
              strokeWidth="0.5"
            />
          </pattern>
        );
    }
  };

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>{renderPattern()}</defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}

// Pre-composed pattern for hero/section backgrounds
export function SubtleDotPattern({ className = "" }: { className?: string }) {
  return (
    <GridPattern
      type="dots"
      color="white"
      opacity={0.05}
      spacing={32}
      className={className}
    />
  );
}

// Fade-out gradient mask version
export function FadingGridPattern({
  type = "dots",
  color = "white",
  opacity = 0.1,
  spacing = 24,
  fadeDirection = "bottom",
  className = "",
}: GridPatternProps & { fadeDirection?: "top" | "bottom" | "both" }) {
  const fillColor = colorMap[color];
  const patternId = `fading-pattern-${type}-${color}-${spacing}`;
  const maskId = `fade-mask-${fadeDirection}`;

  const getMaskGradient = () => {
    switch (fadeDirection) {
      case "top":
        return "linear-gradient(to bottom, transparent 0%, white 30%)";
      case "bottom":
        return "linear-gradient(to bottom, white 70%, transparent 100%)";
      case "both":
        return "linear-gradient(to bottom, transparent 0%, white 20%, white 80%, transparent 100%)";
    }
  };

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width={spacing}
          height={spacing}
          patternUnits="userSpaceOnUse"
        >
          {type === "dots" && (
            <circle cx={spacing / 2} cy={spacing / 2} r="1.5" fill={fillColor} />
          )}
          {type === "lines" && (
            <line
              x1="0"
              y1={spacing}
              x2={spacing}
              y2={spacing}
              stroke={fillColor}
              strokeWidth="0.5"
            />
          )}
          {type === "grid" && (
            <>
              <line
                x1="0"
                y1={spacing}
                x2={spacing}
                y2={spacing}
                stroke={fillColor}
                strokeWidth="0.5"
              />
              <line
                x1={spacing}
                y1="0"
                x2={spacing}
                y2={spacing}
                stroke={fillColor}
                strokeWidth="0.5"
              />
            </>
          )}
        </pattern>
        <linearGradient id={maskId} x1="0" y1="0" x2="0" y2="1">
          {fadeDirection === "top" && (
            <>
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="30%" stopColor="white" stopOpacity="1" />
            </>
          )}
          {fadeDirection === "bottom" && (
            <>
              <stop offset="70%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </>
          )}
          {fadeDirection === "both" && (
            <>
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="20%" stopColor="white" stopOpacity="1" />
              <stop offset="80%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </>
          )}
        </linearGradient>
        <mask id={`${maskId}-mask`}>
          <rect width="100%" height="100%" fill={`url(#${maskId})`} />
        </mask>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill={`url(#${patternId})`}
        mask={`url(#${maskId}-mask)`}
      />
    </svg>
  );
}
