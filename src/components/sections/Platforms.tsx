"use client";

import { motion } from "framer-motion";
import { platforms } from "@/data/platforms";
import { PlatformLogo } from "./platforms/PlatformLogo";
import { GradientOrb } from "@/components/ui/visuals";

export function Platforms() {
  return (
    <section
      id="platforms"
      className="py-[var(--spacing-section-sm)] bg-gray-50 relative overflow-hidden"
    >
      {/* Background orb */}
      <GradientOrb
        color="teal"
        size="xl"
        className="-top-48 -right-64 opacity-50"
        intensity="subtle"
        blur="xl"
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block"
          >
            Platform Ecosystem
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight text-black mb-6"
          >
            The tools we work with
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-black/60 leading-relaxed"
          >
            From CRM to ERP, we integrate across 15+ platforms to keep your
            revenue stack running as one system.
          </motion.p>
        </div>

        {/* Logo Cloud Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="group flex flex-col items-center gap-3 bg-white rounded-2xl p-6 border border-transparent hover:border-black/5 hover:shadow-lg transition-all duration-300"
            >
              {/* Logo */}
              <div
                className="opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                style={{ color: platform.brandColor }}
              >
                <PlatformLogo platformId={platform.id} size="lg" />
              </div>

              {/* Name */}
              <span className="text-sm font-semibold text-black/70 group-hover:text-black transition-colors text-center">
                {platform.name}
              </span>

              {/* HubSpot Platinum Partner badge */}
              {platform.id === "hubspot" && (
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff7a59] bg-[#ff7a59]/10 rounded-full px-2.5 py-1">
                  Platinum Partner
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
