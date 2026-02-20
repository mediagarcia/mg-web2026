"use client";

import { motion } from "framer-motion";
import { integrationApproaches, getPlatformById } from "@/data/platforms";
import { PlatformLogo } from "./PlatformLogo";

const accentColors: Record<string, { bar: string; bg: string; text: string }> = {
  teal: {
    bar: "bg-teal-500",
    bg: "bg-teal-500/10",
    text: "text-teal-500",
  },
  purple: {
    bar: "bg-neon-purple-500",
    bg: "bg-neon-purple-500/10",
    text: "text-neon-purple-500",
  },
  orange: {
    bar: "bg-orange-red-500",
    bg: "bg-orange-red-500/10",
    text: "text-orange-red-500",
  },
};

const approachIcons: Record<string, React.ReactNode> = {
  native: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
  "third-party": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  custom: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  ),
};

export function IntegrationApproaches() {
  return (
    <div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xl lg:text-2xl font-black text-black mb-2"
      >
        How we connect it all
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-black/50 mb-8 max-w-2xl"
      >
        Three approaches to integration — we pick the right one based on complexity, budget, and scale.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {integrationApproaches.map((approach, index) => {
          const colors = accentColors[approach.color];
          return (
            <motion.div
              key={approach.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative bg-white rounded-2xl overflow-hidden border border-black/5 hover:shadow-lg transition-all duration-300"
            >
              {/* Color-coded top accent bar */}
              <div className={`h-1 ${colors.bar}`} />

              <div className="p-6 lg:p-8">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${colors.bg} ${colors.text}`}
                >
                  {approachIcons[approach.id]}
                </div>

                {/* Title & Description */}
                <h4 className="text-lg font-bold text-black mb-2">
                  {approach.title}
                </h4>
                <p className="text-sm text-black/55 leading-relaxed mb-4">
                  {approach.description}
                </p>

                {/* Example */}
                <div className="text-xs text-black/40 bg-gray-50 rounded-lg px-3 py-2 mb-5">
                  <span className="font-semibold text-black/50">e.g.</span>{" "}
                  {approach.example}
                </div>

                {/* Platform logos */}
                <div className="flex items-center gap-2 flex-wrap">
                  {approach.platformIds.map((pid) => {
                    const p = getPlatformById(pid);
                    if (!p) return null;
                    return (
                      <div
                        key={pid}
                        className="opacity-40 hover:opacity-100 transition-opacity"
                        style={{ color: p.brandColor }}
                        title={p.name}
                      >
                        <PlatformLogo platformId={pid} size="sm" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
