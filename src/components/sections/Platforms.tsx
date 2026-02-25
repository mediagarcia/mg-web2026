"use client";

import { motion } from "framer-motion";
import { GradientOrb } from "@/components/ui/visuals";
import { HubSpotHero } from "./platforms/HubSpotHero";
import { PlatformCategories } from "./platforms/PlatformCategories";
import { IntegrationApproaches } from "./platforms/IntegrationApproaches";

export function Platforms() {
  return (
    <section
      id="platforms"
      className="pt-[var(--spacing-section-sm)] pb-[var(--spacing-section)] bg-gray-50 relative overflow-hidden"
    >
      {/* Background orbs */}
      <GradientOrb
        color="teal"
        size="xl"
        className="-top-48 -left-64 opacity-50"
        intensity="subtle"
        blur="xl"
      />
      <GradientOrb
        color="purple"
        size="lg"
        className="top-1/2 -right-48 opacity-40"
        intensity="subtle"
        blur="xl"
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
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
            The tools we work with — and how we connect them
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-black/60 leading-relaxed"
          >
            From HubSpot at the core to 15+ supporting platforms, we build
            integrations that keep your revenue stack running as one system.
          </motion.p>
        </div>

        {/* Sub-section A: HubSpot Hero */}
        <div className="mb-16 lg:mb-20">
          <HubSpotHero />
        </div>

        {/* Sub-section B: Platform Categories */}
        <div className="mb-16 lg:mb-20">
          <PlatformCategories />
        </div>

        {/* Sub-section C: Integration Approaches */}
        <IntegrationApproaches />
      </div>
    </section>
  );
}
