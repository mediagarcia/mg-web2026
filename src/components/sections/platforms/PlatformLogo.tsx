"use client";

interface PlatformLogoProps {
  platformId: string;
  size?: "sm" | "md" | "lg";
  monochrome?: boolean;
  className?: string;
}

const sizeMap = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-12 h-12",
};

export function PlatformLogo({
  platformId,
  size = "md",
  monochrome = false,
  className = "",
}: PlatformLogoProps) {
  const sizeClass = sizeMap[size];
  const colorClass = monochrome ? "text-current" : "";

  const svgProps = {
    className: `${sizeClass} ${colorClass} ${className}`,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true as const,
  };

  const logos: Record<string, React.ReactNode> = {
    hubspot: (
      <svg {...svgProps}>
        <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.984 2.21 2.21 0 00-4.42 0c0 .873.51 1.625 1.245 1.982v2.848a5.276 5.276 0 00-2.407 1.227l-6.39-4.972a2.474 2.474 0 00.093-.655 2.472 2.472 0 10-2.471 2.471c.426 0 .824-.11 1.17-.299l6.271 4.876a5.3 5.3 0 00-.203 1.422 5.3 5.3 0 00.203 1.422l-6.271 4.876c-.346-.19-.744-.299-1.17-.299a2.472 2.472 0 102.471 2.471c0-.228-.034-.447-.093-.655l6.39-4.972a5.276 5.276 0 002.407 1.227v2.848a2.198 2.198 0 00-1.245 1.982 2.21 2.21 0 004.42 0 2.198 2.198 0 00-1.267-1.984V16.07a5.287 5.287 0 10-5.096-9.14z" />
      </svg>
    ),
    salesforce: (
      <svg {...svgProps}>
        <path d="M10.006 5.415a4.195 4.195 0 013.045-1.312c1.56 0 2.926.857 3.643 2.127a5.02 5.02 0 012.079-.45C21.104 5.78 23 7.677 23 10.006a4.226 4.226 0 01-4.227 4.226 4.18 4.18 0 01-.578-.04 3.563 3.563 0 01-3.249 2.115 3.54 3.54 0 01-1.677-.42 3.814 3.814 0 01-3.377 2.049 3.814 3.814 0 01-3.544-2.393 3.249 3.249 0 01-.478.036A3.321 3.321 0 012.55 12.26c0-1.252.697-2.34 1.723-2.9A3.94 3.94 0 014.1 8.368a3.98 3.98 0 013.978-3.978 3.96 3.96 0 011.928.5z" />
      </svg>
    ),
    gohighlevel: (
      <svg {...svgProps}>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    apollo: (
      <svg {...svgProps}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3l6.5 11.25H5.5L12 5z" />
      </svg>
    ),
    instantly: (
      <svg {...svgProps}>
        <path d="M13 3L4 14h7v7l9-11h-7V3z" />
      </svg>
    ),
    salesloft: (
      <svg {...svgProps}>
        <path d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 8v8m-4-4h8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    outreach: (
      <svg {...svgProps}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l6-8v4h4l-6 8z" />
      </svg>
    ),
    zapier: (
      <svg {...svgProps}>
        <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.4l-6.4 4.8 2.4-7.2-6-4.8h7.6L12 2z" />
      </svg>
    ),
    make: (
      <svg {...svgProps}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4a6 6 0 110 12 6 6 0 010-12zm0 2a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
    tray: (
      <svg {...svgProps}>
        <path d="M4 6h16M4 12h16M4 18h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="8" cy="6" r="1.5" />
        <circle cx="16" cy="12" r="1.5" />
        <circle cx="12" cy="18" r="1.5" />
      </svg>
    ),
    clay: (
      <svg {...svgProps}>
        <path d="M12 3C7.03 3 3 7.03 3 12h2a7 7 0 017-7V3zm0 18c4.97 0 9-4.03 9-9h-2a7 7 0 01-7 7v2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    zoominfo: (
      <svg {...svgProps}>
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
      </svg>
    ),
    powerbi: (
      <svg {...svgProps}>
        <path d="M14 4v16a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2a1 1 0 00-1 1zm-6 6v10a1 1 0 001 1h2a1 1 0 001-1V10a1 1 0 00-1-1H9a1 1 0 00-1 1zm-6 4v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1H3a1 1 0 00-1 1z" />
      </svg>
    ),
    databox: (
      <svg {...svgProps}>
        <path d="M3 3v18h18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 17l4-5 4 3 5-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    netsuite: (
      <svg {...svgProps}>
        <path d="M4 4h16v16H4V4zm4 4v8h8V8H8zm2 2h4v4h-4v-4z" />
      </svg>
    ),
    sage: (
      <svg {...svgProps}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" />
      </svg>
    ),
  };

  return logos[platformId] || (
    <svg {...svgProps}>
      <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12h8M12 8v8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
