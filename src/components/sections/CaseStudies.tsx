"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import { DuotoneImage } from "@/components/ui/DuotoneImage";
import { GeometricOverlay, type GeometricPattern } from "@/components/ui/GeometricOverlay";

export interface CaseStudyImages {
  generic?: string | null;
  [key: string]: string | null | undefined; // Allow slug-based overrides
}

interface CaseStudiesProps {
  images?: CaseStudyImages;
}

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

export function CaseStudies({ images }: CaseStudiesProps = {}) {
  return (
    <section id="work" className="py-[var(--spacing-section)] bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
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
              Results that speak for themselves
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-black font-medium hover:text-teal-500 transition-colors group"
            >
              View all case studies
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => {
            // Use slug-specific override, generic override, or default image
            const imageUrl = images?.[study.slug] ?? images?.generic ?? study.image;
            // Get duotone styling for this case study
            const style = caseStudyStyles[study.slug] || { color: "teal" as const, pattern: "spiral" as const };

            return (
              <motion.article
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/work/${study.slug}`}>
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                    {/* Background image with duotone effect */}
                    <DuotoneImage
                      src={imageUrl}
                      alt={`${study.client} case study`}
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
                      size={160}
                    />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    {/* Tags */}
                    <div className="flex gap-2">
                      <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                      <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                        {study.service}
                      </span>
                    </div>

                    {/* CTA - appears on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-4 py-2 rounded-full">
                        View Case Study
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <p className="text-sm text-black/50 font-medium mb-2">{study.client}</p>
                  <h3 className="text-xl lg:text-2xl font-bold text-black mb-3 group-hover:text-teal-500 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-black/60 leading-relaxed">
                    {study.description}
                  </p>
                </div>
              </Link>
            </motion.article>
            );
          })}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-t border-black/10"
        >
          {[
            { value: "200+", label: "CRM Implementations" },
            { value: "98%", label: "Client Retention" },
            { value: "$4M+", label: "Revenue Attributed" },
            { value: "50+", label: "5-Star Reviews" },
          ].map((stat, index) => (
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
