"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  categories,
  getPlatformsByCategory,
  type PlatformCategory,
} from "@/data/platforms";
import { PlatformLogo } from "./PlatformLogo";

const categoryIcons: Record<string, React.ReactNode> = {
  crm: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  engagement: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  automation: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  data: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  erp: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
};

export function PlatformCategories() {
  const [activeCategory, setActiveCategory] = useState<PlatformCategory>(
    "CRM & Sales"
  );
  const activePlatforms = getPlatformsByCategory(activeCategory);

  return (
    <div>
      {/* Tab Bar */}
      <div className="relative mb-8 overflow-x-auto scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
        <div className="flex gap-2 min-w-max">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(cat.label)}
              className="relative px-4 py-2.5 text-sm font-medium rounded-full transition-colors whitespace-nowrap"
              style={{
                color: activeCategory === cat.label ? "#000" : "rgba(0,0,0,0.5)",
              }}
            >
              {activeCategory === cat.label && (
                <motion.div
                  layoutId="platformTab"
                  className="absolute inset-0 bg-white rounded-full shadow-sm border border-black/5"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              <span className="relative flex items-center gap-2">
                {categoryIcons[cat.icon]}
                {cat.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Category Description */}
      <AnimatePresence mode="wait">
        <motion.p
          key={activeCategory + "-desc"}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          className="text-sm text-black/50 mb-6"
        >
          {categories.find((c) => c.label === activeCategory)?.description}
        </motion.p>
      </AnimatePresence>

      {/* Platform Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {activePlatforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="group relative bg-white rounded-2xl p-6 border border-transparent hover:border-black/5 hover:shadow-lg transition-all duration-300"
              style={
                {
                  "--brand-color": platform.brandColor,
                } as React.CSSProperties
              }
            >
              {/* Hover border accent */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 0 1px ${platform.brandColor}30`,
                }}
                aria-hidden="true"
              />

              <div className="relative flex items-start gap-4">
                {/* Logo */}
                <div
                  className="shrink-0 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                  style={{ color: platform.brandColor }}
                >
                  <PlatformLogo
                    platformId={platform.id}
                    size="lg"
                  />
                </div>

                {/* Info */}
                <div className="min-w-0">
                  <h4 className="font-bold text-black text-base mb-1">
                    {platform.name}
                  </h4>
                  <span className="inline-block text-xs font-medium text-black/40 bg-black/5 rounded-full px-2.5 py-0.5 mb-2">
                    {platform.relationship}
                  </span>
                  <p className="text-sm text-black/50 leading-relaxed">
                    {platform.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
