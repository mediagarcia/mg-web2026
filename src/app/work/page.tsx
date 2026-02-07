"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageHeaderWithPreview } from "@/components/PageHeaderWithPreview";
import { CTABanner } from "@/components/sections";
import {
  caseStudies,
  getFeaturedCaseStudy,
  filterCaseStudies,
  Industry,
  Service,
} from "@/data/case-studies";
import {
  CaseStudyCard,
  FeaturedCaseStudy,
  CaseStudyFilters,
} from "@/components/case-studies";
import { GradientOrb } from "@/components/ui/visuals";

const stats = [
  { value: "200+", label: "CRM Implementations" },
  { value: "98%", label: "Client Retention" },
  { value: "$4M+", label: "Client Revenue Attributed" },
  { value: "50+", label: "5-Star Reviews" },
];

export default function WorkPage() {
  const [industryFilter, setIndustryFilter] =
    useState<Industry>("All Industries");
  const [serviceFilter, setServiceFilter] = useState<Service>("All Services");

  const featuredCaseStudy = getFeaturedCaseStudy();
  const filteredCaseStudies = filterCaseStudies(industryFilter, serviceFilter);

  // Separate featured from non-featured for display
  const nonFeaturedCaseStudies = filteredCaseStudies.filter(
    (cs) => !cs.featured
  );
  const showFeatured =
    featuredCaseStudy &&
    industryFilter === "All Industries" &&
    serviceFilter === "All Services";

  return (
    <>
      <PageHeaderWithPreview
        slot="page-work"
        badge="Our Work"
        title="Client Success Stories"
        description="Real outcomes from real partnerships. See how we've helped businesses transform their operations with strategic CRM implementation and automation."
        breadcrumbs={[{ label: "Work", href: "/work" }]}
      />

      {/* Main Content */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
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
          {/* Featured Case Study */}
          {showFeatured && featuredCaseStudy && (
            <FeaturedCaseStudy caseStudy={featuredCaseStudy} />
          )}

          {/* Section Header with Filters */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl lg:text-3xl font-bold text-black"
              >
                {showFeatured ? "More Success Stories" : "All Case Studies"}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-black/60 mt-2"
              >
                {filteredCaseStudies.length} case{" "}
                {filteredCaseStudies.length === 1 ? "study" : "studies"}{" "}
                {industryFilter !== "All Industries" ||
                serviceFilter !== "All Services"
                  ? "matching your filters"
                  : ""}
              </motion.p>
            </div>
          </div>

          {/* Filters */}
          <CaseStudyFilters
            selectedIndustry={industryFilter}
            selectedService={serviceFilter}
            onIndustryChange={setIndustryFilter}
            onServiceChange={setServiceFilter}
          />

          {/* Case Studies Grid */}
          {filteredCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {(showFeatured ? nonFeaturedCaseStudies : filteredCaseStudies).map(
                (study, index) => (
                  <CaseStudyCard
                    key={study.slug}
                    caseStudy={study}
                    index={index}
                  />
                )
              )}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16 bg-gray-50 rounded-2xl"
            >
              <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-black/30"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">
                No matching case studies
              </h3>
              <p className="text-black/60 mb-4">
                Try adjusting your filters to find what you&apos;re looking for.
              </p>
              <button
                onClick={() => {
                  setIndustryFilter("All Industries");
                  setServiceFilter("All Services");
                }}
                className="text-teal-500 font-medium hover:text-teal-600 transition-colors"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-4xl lg:text-5xl font-black text-teal-500">
                  {stat.value}
                </p>
                <p className="text-white/60 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "32px 32px",
                }}
              />
            </div>

            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
                Ready to Transform Your Business?
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-6 max-w-3xl mx-auto">
                Let&apos;s create your success story
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
                Join 200+ companies that have transformed their revenue
                operations with our strategic CRM implementation.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-colors"
              >
                Get Similar Results
                <svg
                  className="w-5 h-5"
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
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
