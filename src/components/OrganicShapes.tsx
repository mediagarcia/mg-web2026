"use client";

import { motion } from "framer-motion";

interface OrganicShapeProps {
  className?: string;
  variant?: "teal" | "purple" | "orange" | "gradient";
  animate?: boolean;
}

// SVG paths inspired by the Media Garcia brand organic shapes
const shapePaths = {
  blob1: "M44.3,-76.4C57.5,-69.1,68.3,-57.4,76.7,-43.8C85.1,-30.2,91.1,-15.1,90.7,-0.2C90.3,14.6,83.5,29.2,74.5,42.3C65.5,55.4,54.3,67,41,74.8C27.7,82.6,12.4,86.5,-2.9,90.5C-18.2,94.5,-36.4,98.5,-50.3,91.4C-64.2,84.3,-73.8,66,-79.5,47.5C-85.2,29,-87,10.3,-84.4,-7.2C-81.8,-24.7,-74.8,-41,-63.5,-52.7C-52.2,-64.4,-36.6,-71.5,-21.3,-77.1C-6,-82.7,9,-86.8,23.8,-85.4C38.6,-84,53.1,-77.1,44.3,-76.4Z",
  blob2: "M39.5,-67.8C50.8,-60.2,59.4,-48.6,67.1,-35.9C74.8,-23.2,81.6,-9.4,82,5.1C82.4,19.6,76.4,34.7,66.9,47.1C57.4,59.5,44.4,69.2,30.1,74.5C15.8,79.8,0.2,80.7,-15.2,77.9C-30.6,75.1,-45.8,68.6,-57.6,58.1C-69.4,47.6,-77.8,33.1,-81.3,17.5C-84.8,1.9,-83.4,-14.8,-77.2,-29.4C-71,-44,-60,-56.5,-46.6,-63.4C-33.2,-70.3,-17.4,-71.6,-1.3,-69.5C14.8,-67.4,28.2,-61.9,39.5,-67.8Z",
  blob3: "M37.9,-65.2C48.6,-57.9,56.5,-46.7,63.6,-34.5C70.7,-22.3,77,-9,77.4,4.4C77.8,17.8,72.3,31.2,64.1,42.5C55.9,53.8,45,63,32.6,69.6C20.2,76.2,6.3,80.2,-7.9,80.4C-22.1,80.6,-36.6,77,-48.4,69.5C-60.2,62,-69.3,50.6,-74.8,37.6C-80.3,24.6,-82.2,10,-80.4,-3.8C-78.6,-17.6,-73.1,-30.6,-64.8,-42C-56.5,-53.4,-45.4,-63.2,-33.1,-69.8C-20.8,-76.4,-7.3,-79.8,4.9,-79.3C17.1,-78.8,27.2,-72.5,37.9,-65.2Z",
};

export function OrganicShape({ className = "", variant = "teal", animate = true }: OrganicShapeProps) {
  const colors = {
    teal: "#3BB782",
    purple: "#EE82F0",
    orange: "#EC4724",
    gradient: "url(#gradient)",
  };

  return (
    <motion.svg
      viewBox="0 0 200 200"
      className={`absolute pointer-events-none ${className}`}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{
        scale: animate ? [0.95, 1.05, 0.95] : 1,
        opacity: 1,
        rotate: animate ? [0, 5, -5, 0] : 0,
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
        opacity: { duration: 1 }
      }}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3BB782" />
          <stop offset="100%" stopColor="#EE82F0" />
        </linearGradient>
      </defs>
      <g transform="translate(100 100)">
        <path
          d={shapePaths.blob1}
          fill={colors[variant]}
          fillOpacity={0.15}
        />
      </g>
    </motion.svg>
  );
}

// Component for multiple layered organic shapes
export function OrganicShapeCluster({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Large teal shape - top right */}
      <OrganicShape
        variant="teal"
        className="w-[800px] h-[800px] -top-[200px] -right-[200px] opacity-60"
      />

      {/* Medium purple shape - bottom left */}
      <OrganicShape
        variant="purple"
        className="w-[600px] h-[600px] -bottom-[150px] -left-[150px] opacity-40"
      />

      {/* Small gradient shape - center right */}
      <OrganicShape
        variant="gradient"
        className="w-[400px] h-[400px] top-1/3 -right-[100px] opacity-30"
      />
    </div>
  );
}

// Dot pattern component from the brand "i"
export function DotPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-20">
        <defs>
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#3BB782" />
          </pattern>
        </defs>
        <rect width="120" height="120" fill="url(#dots)" />
      </svg>
    </div>
  );
}
