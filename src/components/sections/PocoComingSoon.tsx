"use client";

import { motion } from "framer-motion";
import { GradientOrb } from "@/components/ui/visuals";

export function PocoComingSoon() {
  return (
    <section id="work" className="pt-[var(--spacing-section)] pb-16 lg:pb-20 bg-gray-50 relative overflow-hidden">
      <GradientOrb
        color="teal"
        size="xl"
        className="-top-48 -right-48 opacity-20"
        intensity="subtle"
        blur="xl"
      />
      <GradientOrb
        color="purple"
        size="lg"
        className="bottom-1/4 -left-32 opacity-15"
        intensity="subtle"
        blur="xl"
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight text-black"
          >
            Something big is coming
          </motion.h2>
        </div>

        {/* Poco Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl border border-gray-100 p-8 lg:p-12 max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-teal-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          <span className="inline-block bg-teal-500/10 text-teal-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Coming Soon
          </span>

          <h3 className="text-3xl lg:text-4xl font-black text-black mb-4">
            Poco
          </h3>

          <p className="text-black/60 leading-relaxed max-w-lg mx-auto mb-6">
            We&apos;re building something we&apos;re genuinely excited about — an AI-driven app
            born from everything we&apos;ve learned building CRM and RevOps systems. Stay tuned.
          </p>

          <div className="flex flex-wrap gap-2 justify-center">
            {["AI-Powered", "Built In-House", "RevOps DNA"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 rounded-full text-xs text-black/60 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-black/10"
        >
          {[
            { value: "200+", label: "CRM Implementations" },
            { value: "98%", label: "Client Retention" },
            { value: "$4M+", label: "Revenue Attributed" },
            { value: "50+", label: "5-Star Reviews" },
          ].map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="text-4xl lg:text-5xl font-black text-black mb-2">{stat.value}</p>
              <p className="text-sm text-black/50 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
