"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CaseStudy } from "@/data/case-studies";
import { DuotoneImage } from "@/components/ui/DuotoneImage";
import { GeometricOverlay } from "@/components/ui/GeometricOverlay";

interface FeaturedCaseStudyProps {
  caseStudy: CaseStudy;
}

export function FeaturedCaseStudy({ caseStudy }: FeaturedCaseStudyProps) {
  // Display up to 3 metrics
  const displayMetrics = caseStudy.results.slice(0, 3);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <Link href={`/work/${caseStudy.slug}`} className="group block">
        <div className="relative rounded-3xl overflow-hidden bg-black">
          {/* Background Image */}
          <div className="absolute inset-0">
            <DuotoneImage
              src={caseStudy.image}
              alt={`${caseStudy.client} case study`}
              color="teal"
              intensity="strong"
              className="w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          </div>

          {/* Geometric Pattern */}
          <GeometricOverlay
            pattern="spiral"
            position="bottom-right"
            color="white"
            opacity={0.1}
            size={300}
          />

          {/* Content */}
          <div className="relative z-10 p-8 lg:p-12 min-h-[400px] lg:min-h-[480px] flex flex-col justify-between">
            {/* Top: Badge + Tags */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-block bg-teal-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                Featured
              </span>
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium px-3 py-1.5 rounded-full">
                {caseStudy.industry}
              </span>
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium px-3 py-1.5 rounded-full">
                {caseStudy.service}
              </span>
              {caseStudy.timeline && (
                <span className="inline-block bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium px-3 py-1.5 rounded-full">
                  {caseStudy.timeline}
                </span>
              )}
            </div>

            {/* Bottom: Content + Metrics */}
            <div>
              {/* Title & Description */}
              <div className="max-w-2xl mb-8">
                <p className="text-white/60 text-sm font-medium mb-2">
                  {caseStudy.client}
                </p>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4 group-hover:text-teal-400 transition-colors">
                  {caseStudy.title}
                </h2>
                <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                  {caseStudy.description}
                </p>
              </div>

              {/* Metrics Row */}
              <div className="flex flex-wrap gap-8 lg:gap-12 mb-6">
                {displayMetrics.map((result, index) => (
                  <div key={result.label} className="flex flex-col">
                    <span className="text-3xl lg:text-4xl font-black text-teal-400">
                      {result.metric}
                    </span>
                    <span className="text-sm text-white/60 mt-1">
                      {result.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <span className="inline-flex items-center gap-2 text-white font-medium group-hover:text-teal-400 transition-colors">
                Read the full story
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
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.section>
  );
}
