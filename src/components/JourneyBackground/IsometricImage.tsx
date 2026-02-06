"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface IsometricImageProps {
  slot: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}

export function IsometricImage({ slot, alt, className, style, priority = false }: IsometricImageProps) {
  const cleanSlot = slot.replace(/\//g, "-");
  const imagePath = `/images/selected/${cleanSlot}.png`;

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ minHeight: '60px', ...style }}
    >
      <Image
        src={imagePath}
        alt={alt}
        fill
        className="object-contain"
        sizes="(max-width: 144px) 100vw, 144px"
        priority={priority}
        loading={priority ? undefined : "lazy"}
      />
    </motion.div>
  );
}
