"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { OrganicShapeCluster, DotPattern } from "@/components/OrganicShapes";
import { PreviewBackgroundVideo } from "@/components/ui/visuals";
import { useState, useEffect } from "react";

const rotatingWords = [
  "lean",
  "growing",
  "winning",
  "ahead",
  "profitable",
  "scaling",
  "focused",
  "thriving",
  "sharp",
  "agile",
  "closing",
  "in control",
  "on top",
  "sane",
  "selling",
];

const rotatingColors = [
  "text-teal-500",
  "text-neon-purple-500",
  "text-orange-red-500",
  "text-teal-500",
  "text-neon-purple-500",
  "text-orange-red-500",
];

// Scale animation - gentle scale + fade with subtle bounce
const scaleAnimation = {
  variants: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 1.1, opacity: 0 },
  },
  transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const },
};

interface HeroProps {
  heroImage?: string | null;
  heroVideo?: string | null;
  imageOpacity?: number; // 0-1, defaults to 0.04
}

export function Hero({ heroImage, heroVideo, imageOpacity = 0.04 }: HeroProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [mounted]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Video - subtle particles effect */}
      <PreviewBackgroundVideo
        slot="hero-video"
        defaultSrc={heroVideo ?? "/videos/hero-particles.mp4"}
        poster="/videos/hero-particles-poster.jpg"
        overlay={false}
        defaultOpacity={15}
      />

      {/* Background Image - subtle tech/consulting visual */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage ?? "/images/hero/hero-bg.jpg"}
          alt=""
          fill
          className="object-cover transition-opacity duration-300"
          style={{ opacity: imageOpacity }}
          priority
        />
      </div>

      {/* Organic Background Shapes */}
      <OrganicShapeCluster />

      {/* Dot pattern accent */}
      <DotPattern className="top-20 right-20 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-0">
        <div className="max-w-4xl">
          {/* Excellence Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-black/5 rounded-full px-5 py-2.5 mb-8"
          >
            <svg className="w-6 h-6 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="text-sm font-semibold text-black/80">RevOps & CRM Experts</span>
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
          </motion.div>

          {/* Pain Point Hook */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg lg:text-xl font-medium text-black/50 mb-4"
          >
            Tired of CRM investments that gather dust?
          </motion.p>

          {/* Main Headline with Rotating Text */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[clamp(2.5rem,7vw,4.5rem)] font-black leading-[1.1] tracking-tight text-black mb-8"
          >
            We build systems that
            <br />
            <span className="inline-flex items-baseline whitespace-nowrap">
              <span>keep you&nbsp;</span>
              <span className="relative inline-flex min-w-[4.5ch]">
                <AnimatePresence mode="wait">
                  {mounted && (
                    <motion.span
                      key={wordIndex}
                      variants={scaleAnimation.variants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={scaleAnimation.transition}
                      className={`whitespace-nowrap ${rotatingColors[wordIndex % rotatingColors.length]}`}
                    >
                      {rotatingWords[wordIndex]}
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>
            </span>
          </motion.h1>

          {/* Subheadline - Enhanced Mission */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl lg:text-2xl text-black/60 leading-relaxed max-w-2xl mb-10"
          >
            We design RevOps and automation platforms for healthcare, IT, and SaaS companies—across HubSpot, Salesforce, and custom stacks.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-teal-500 transition-all duration-300 group"
            >
              Book a Strategy Call
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
              href="/work"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-black/20 text-black px-8 py-4 rounded-full text-lg font-medium hover:border-teal-500 hover:text-teal-500 transition-all duration-300"
            >
              See Our Results
            </Link>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-sm text-black/50 mb-10"
          >
            30 minutes with a senior strategist. No commitment.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center gap-6 text-sm text-black/50"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#ff7a59]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Platinum HubSpot Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00A1E0]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Salesforce Integration Experts</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">50+ Five-Star Reviews</span>
            </div>
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
