"use client";

import React from "react";
import { MotionValue, useTransform, motion } from "framer-motion";
import { IsometricImage } from "./IsometricImage";

interface IsometricSceneProps {
  progress: MotionValue<number>;
}

// Vertical path that winds down the left side - full height
function JourneyPath({ progress }: { progress: MotionValue<number> }) {
  const pathLength = useTransform(progress, [0, 0.95], [0.05, 1]);
  // Path gets wider as it approaches the end
  const strokeWidth = useTransform(progress, [0, 0.6, 0.95], [3, 4, 8]);
  const glowWidth = useTransform(progress, [0, 0.6, 0.95], [16, 28, 50]);

  return (
    <svg
      className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-24"
      viewBox="0 0 80 1000"
      preserveAspectRatio="none"
    >
      {/* Main path - dashed line */}
      <motion.path
        d="M 40 0
           C 50 80, 30 140, 40 200
           S 55 280, 40 360
           S 25 440, 40 520
           S 55 600, 40 680
           S 30 760, 40 840
           S 50 920, 40 1000"
        fill="none"
        stroke="#3BB782"
        strokeDasharray="12 8"
        style={{ pathLength, strokeWidth }}
        opacity={0.6}
      />

      {/* Path glow - expands as it goes down */}
      <motion.path
        d="M 40 0
           C 50 80, 30 140, 40 200
           S 55 280, 40 360
           S 25 440, 40 520
           S 55 600, 40 680
           S 30 760, 40 840
           S 50 920, 40 1000"
        fill="none"
        stroke="#3BB782"
        style={{ pathLength, strokeWidth: glowWidth }}
        opacity={0.15}
        filter="blur(6px)"
      />
    </svg>
  );
}

// 0-12%: Chaotic CRM - messy office building at top
function ChaoticCRM({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.12, 0.18], [1, 0.8, 0.3]);
  const scale = useTransform(progress, [0, 0.12], [1, 0.95]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute top-[2%] left-1/2 -translate-x-1/2 w-20 h-[90px]"
    >
      <IsometricImage
        slot="journey/chaotic-crm"
        alt="Chaotic office - starting point"
        className="w-full h-full"
        priority={true}
      />
    </motion.div>
  );
}

// 12-25%: Platform Icons - HubSpot-style sprocket with connections
function PlatformIcons({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.10, 0.15, 0.22, 0.28], [0, 1, 1, 0.3]);
  const scale = useTransform(progress, [0.10, 0.15], [0.8, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute top-[14%] left-1/2 -translate-x-1/2 w-[70px] h-[70px]"
    >
      <IsometricImage
        slot="journey/platform-icons"
        alt="Platform integration icons"
        className="w-full h-full"
        priority={true}
      />
    </motion.div>
  );
}

// 25-40%: Growth Chart - rising bar chart with arrow
function GrowthChart({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.22, 0.28, 0.36, 0.42], [0, 1, 1, 0.3]);
  const scale = useTransform(progress, [0.22, 0.28], [0.8, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute top-[28%] left-1/2 -translate-x-1/2 w-[60px] h-[60px]"
    >
      <IsometricImage
        slot="journey/growth-chart"
        alt="Business growth chart"
        className="w-full h-full"
      />
    </motion.div>
  );
}

// 40-55%: Industry Icons - medical cross, server, cloud (vertical)
function IndustryIcons({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.38, 0.43, 0.52, 0.58], [0, 1, 1, 0.3]);
  const scale = useTransform(progress, [0.38, 0.43], [0.8, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute top-[43%] left-1/2 -translate-x-1/2 w-[50px] h-[80px]"
    >
      <IsometricImage
        slot="journey/industry-icons"
        alt="Healthcare and tech industry icons"
        className="w-full h-full"
      />
    </motion.div>
  );
}

// 55-70%: Process Steps - Discovery, Strategy, Build, Launch (2x2 grid)
function ProcessSteps({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.52, 0.58, 0.67, 0.73], [0, 1, 1, 0.3]);
  const scale = useTransform(progress, [0.52, 0.58], [0.8, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute top-[58%] left-1/2 -translate-x-1/2 w-[60px] h-[60px]"
    >
      <IsometricImage
        slot="journey/process-steps"
        alt="Process workflow steps"
        className="w-full h-full"
      />
    </motion.div>
  );
}

// 70-85%: Award Badge - certificate with ribbon
function AwardBadge({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.67, 0.73, 0.82, 0.88], [0, 1, 1, 0.3]);
  const scale = useTransform(progress, [0.67, 0.73], [0.8, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute top-[73%] left-1/2 -translate-x-1/2 w-[60px] h-[70px]"
    >
      <IsometricImage
        slot="journey/award-badge"
        alt="Achievement award badge"
        className="w-full h-full"
      />
    </motion.div>
  );
}

// 85-95%: Testimonial Stars - speech bubbles with 5-star ratings
function TestimonialStars({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.82, 0.88, 0.93, 0.97], [0, 1, 1, 0.5]);
  const scale = useTransform(progress, [0.82, 0.88], [0.8, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute top-[86%] left-1/2 -translate-x-1/2 w-[70px] h-[55px]"
    >
      <IsometricImage
        slot="journey/testimonials"
        alt="Customer testimonial stars"
        className="w-full h-full"
      />
    </motion.div>
  );
}

// 95-100%: Success Building - triumphant destination showing the hero's journey completion
function SuccessBuilding({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.90, 0.95], [0, 1]);
  const scale = useTransform(progress, [0.90, 0.95], [0.6, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute bottom-[1%] left-1/2 -translate-x-1/2 w-[100px] h-[120px]"
    >
      <IsometricImage
        slot="journey/success-building"
        alt="Triumphant success building - destination"
        className="w-full h-full"
      />
    </motion.div>
  );
}

export function IsometricScene({ progress }: IsometricSceneProps) {
  return (
    <div className="relative w-full h-full">
      {/* Brick path background - behind everything, z-0 */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          opacity: 0.5,
          mixBlendMode: 'multiply',
        }}
      >
        <IsometricImage
          slot="journey/brick-path"
          alt="Journey path"
          className="w-full h-full"
        />
      </div>

      {/* Scene elements on top - z-10 */}
      <div className="relative z-10">
        {/* Journey path */}
        <JourneyPath progress={progress} />

        {/* Scene elements - ordered by scroll position (top to bottom) */}
        <ChaoticCRM progress={progress} />
        <PlatformIcons progress={progress} />
        <GrowthChart progress={progress} />
        <IndustryIcons progress={progress} />
        <ProcessSteps progress={progress} />
        <AwardBadge progress={progress} />
        <TestimonialStars progress={progress} />
        <SuccessBuilding progress={progress} />
      </div>
    </div>
  );
}
