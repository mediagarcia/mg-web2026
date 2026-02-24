"use client";

import { motion } from "framer-motion";
import { DuotoneImage } from "@/components/ui/DuotoneImage";
import { GeometricOverlay, type GeometricPattern } from "@/components/ui/GeometricOverlay";

interface SectionImageProps {
  src: string;
  alt: string;
  caption?: string;
  color?: "teal" | "purple" | "orange";
  pattern?: GeometricPattern;
  aspect?: "16:9" | "4:3" | "1:1";
}

export function SectionImage({
  src,
  alt,
  caption,
  color = "teal",
  pattern,
  aspect = "16:9",
}: SectionImageProps) {
  const aspectClasses = {
    "16:9": "aspect-video",
    "4:3": "aspect-[4/3]",
    "1:1": "aspect-square",
  };

  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="my-8"
    >
      <div className={`relative ${aspectClasses[aspect]} rounded-2xl overflow-hidden`}>
        <DuotoneImage
          src={src}
          alt={alt}
          color={color}
          intensity="light"
          className="absolute inset-0"
        />
        {pattern && (
          <GeometricOverlay
            pattern={pattern}
            position="bottom-right"
            color="white"
            opacity={0.15}
            size={100}
          />
        )}
      </div>
      {caption && (
        <figcaption className="text-sm text-black/40 mt-3 text-center">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}
