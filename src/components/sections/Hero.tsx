"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { OrganicShapeCluster, DotPattern } from "@/components/OrganicShapes";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Organic Background Shapes */}
      <OrganicShapeCluster />

      {/* Dot pattern accent */}
      <DotPattern className="top-20 right-20 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-0">
        <div className="max-w-4xl">
          {/* HubSpot Partner Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-black/5 rounded-full px-5 py-2.5 mb-8"
          >
            <svg className="w-6 h-6 text-[#ff7a59]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.984 2.21 2.21 0 00-4.42 0c0 .873.51 1.625 1.245 1.982v2.848a5.276 5.276 0 00-2.407 1.227l-6.39-4.972a2.474 2.474 0 00.093-.655 2.472 2.472 0 10-2.471 2.471c.426 0 .824-.11 1.17-.299l6.271 4.876a5.3 5.3 0 00-.203 1.422 5.3 5.3 0 00.203 1.422l-6.271 4.876c-.346-.19-.744-.299-1.17-.299a2.472 2.472 0 102.471 2.471c0-.228-.034-.447-.093-.655l6.39-4.972a5.276 5.276 0 002.407 1.227v2.848a2.198 2.198 0 00-1.245 1.982 2.21 2.21 0 004.42 0 2.198 2.198 0 00-1.267-1.984V16.07a5.287 5.287 0 10-5.096-9.14 5.287 5.287 0 005.096-9.14z"/>
            </svg>
            <span className="text-sm font-semibold text-black/80">HubSpot Solutions Partner</span>
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[1.05] tracking-tight text-black mb-8"
          >
            <span className="text-gradient">HubSpot</span> and Marketing Experts
          </motion.h1>

          {/* Subheadline - Mission */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl lg:text-2xl text-black/60 leading-relaxed max-w-2xl mb-12"
          >
            We build and run digital platforms that keep companies lean, growing, and easy to do business with.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-teal-500 transition-all duration-300 group"
            >
              Start Your Project
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="#work"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-black/20 text-black px-8 py-4 rounded-full text-lg font-medium hover:border-teal-500 hover:text-teal-500 transition-all duration-300"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-medium uppercase tracking-widest text-black/40">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-black/20 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 bg-black/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
