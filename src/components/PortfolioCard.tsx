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
        className="block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
      >
        {/* 16:9 Image Container */}
        <div className="relative aspect-video overflow-hidden bg-gray-100">
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

          {/* Hover Overlay with bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-black group-hover:text-teal-500 transition-colors">
            {item.title}
          </h3>
          <p className="text-black/60 text-sm mt-1 line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="px-5 pb-4 pt-3 border-t border-gray-100">
          <div className="flex flex-wrap gap-1.5">
            {item.techStack.slice(0, 3).map((tech) => (
              <span key={tech} className="text-xs text-black/50 bg-gray-50 px-2 py-0.5 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
