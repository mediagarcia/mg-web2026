"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CenteredGlow, FadingGridPattern } from "@/components/ui/visuals";

export function CTABanner() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-teal-500 to-teal-600 relative overflow-hidden">
      {/* Enhanced background pattern */}
      <FadingGridPattern
        type="dots"
        color="white"
        opacity={0.1}
        spacing={24}
        fadeDirection="both"
      />

      {/* Centered glow effect */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Decorative orbs */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-white blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-neon-purple-500 blur-3xl opacity-30" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-2xl lg:text-4xl font-black text-white mb-4">
              Ready to build a revenue system that works?
            </h2>
            <p className="text-white/80 text-lg max-w-xl">
              Let&apos;s discuss how we can transform your CRM into a growth engine—on any platform.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <div className="flex flex-col items-center sm:items-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-black hover:text-white transition-all duration-300 group"
              >
                Book a Strategy Call
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <span className="text-white/60 text-sm mt-2">30 minutes with a senior strategist. No commitment.</span>
            </div>
            <Link
              href="tel:+18886124250"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-teal-600 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
