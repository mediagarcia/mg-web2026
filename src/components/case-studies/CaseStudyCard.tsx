"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CaseStudy } from "@/data/case-studies";
import { DuotoneImage } from "@/components/ui/DuotoneImage";
import { GeometricOverlay, type GeometricPattern } from "@/components/ui/GeometricOverlay";

// Mapping of case study slugs to duotone colors and geometric patterns
const caseStudyStyles: Record<
  string,
  {
    color: "teal" | "purple" | "orange";
    pattern: GeometricPattern;
  }
> = {
  "healthcare-integration": { color: "teal", pattern: "spiral" },
  "lead-generation-saas": { color: "purple", pattern: "grid" },
  "crm-migration": { color: "orange", pattern: "arc" },
};

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index?: number;
  showMetric?: boolean;
  variant?: "default" | "compact";
}

export function CaseStudyCard({
  caseStudy,
  index = 0,
  showMetric = true,
  variant = "default",
}: CaseStudyCardProps) {
  const style = caseStudyStyles[caseStudy.slug] || {
    color: "teal" as const,
    pattern: "spiral" as const,
  };

  const primaryMetric = caseStudy.results[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group h-full"
    >
      <Link
        href={`/work/${caseStudy.slug}`}
        className="block h-full bg-white rounded-2xl overflow-hidden border border-black/5 hover:border-black/10 hover:shadow-lg transition-all duration-300"
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* Background image with duotone effect */}
          <DuotoneImage
            src={caseStudy.image}
            alt={`${caseStudy.client} case study`}
            color={style.color}
            intensity="medium"
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
          />

          {/* Geometric overlay pattern */}
          <GeometricOverlay
            pattern={style.pattern}
            position="bottom-left"
            color="white"
            opacity={0.15}
            size={120}
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />

          {/* Content Overlay */}
          <div className="absolute inset-0 p-5 flex flex-col justify-between">
            {/* Tags + Logo */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex gap-2 flex-wrap">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                  {caseStudy.industry}
                </span>
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                  {caseStudy.service}
                </span>
              </div>
              {/* Client logo placeholder - shows when logo exists */}
              {caseStudy.clientLogo && (
                <div className="bg-white rounded-lg p-1.5 shadow-sm">
                  <div className="w-8 h-8 bg-black/10 rounded flex items-center justify-center text-[8px] font-bold text-black/30">
                    LOGO
                  </div>
                </div>
              )}
            </div>

            {/* CTA - appears on hover */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-4 py-2 rounded-full">
                View Case Study
                <svg
                  className="w-4 h-4"
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

        {/* Content */}
        <div className="p-6">
          <p className="text-sm text-black/50 font-medium mb-2">
            {caseStudy.client}
          </p>
          <h3 className="text-xl font-bold text-black mb-3 group-hover:text-teal-500 transition-colors line-clamp-2">
            {caseStudy.title}
          </h3>
          <p className="text-black/60 leading-relaxed text-sm line-clamp-2 mb-4">
            {caseStudy.description}
          </p>

          {/* Primary Metric */}
          {showMetric && primaryMetric && (
            <div className="pt-4 border-t border-black/5">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-teal-500">
                  {primaryMetric.metric}
                </span>
                <span className="text-sm text-black/50">
                  {primaryMetric.label}
                </span>
              </div>
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  );
}
