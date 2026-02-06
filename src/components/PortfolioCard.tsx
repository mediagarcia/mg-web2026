"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { PortfolioItem, getCategoryLabel } from "@/data/portfolio";

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
}

export function PortfolioCard({ item, index }: PortfolioCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Link
        href={`/work/portfolio/${item.slug}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 rounded-2xl"
      >
        {/* 16:9 Image Container */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-gray-100">
          <Image
            src={item.image}
            alt={`${item.title} preview`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Category Badge (top-left) */}
          <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium bg-black/60 backdrop-blur-sm text-white rounded-full">
            {getCategoryLabel(item.category)}
          </span>

          {/* Live Badge (top-right) */}
          {item.isLive && (
            <span
              className="absolute top-3 right-3 px-3 py-1 text-xs font-medium bg-green-500/20 backdrop-blur-sm text-green-400 rounded-full flex items-center gap-1.5"
              aria-label="Live demo available"
            >
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Live
            </span>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-black group-hover:text-teal-500 transition-colors">
          {item.title}
        </h3>
        <p className="text-black/60 text-sm mt-1 line-clamp-2">
          {item.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {item.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs text-black/40">
              #{tech}
            </span>
          ))}
        </div>
      </Link>
    </motion.article>
  );
}
