"use client";

import { Suspense, useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
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
import { portfolioItems, categories } from "@/data/portfolio";
import { PortfolioCard } from "@/components/PortfolioCard";
import { PortfolioFilters } from "@/components/PortfolioFilters";
import { GradientOrb } from "@/components/ui/visuals";

const stats = [
  { value: "200+", label: "CRM Implementations" },
  { value: "98%", label: "Client Retention" },
  { value: "$4M+", label: "Client Revenue Attributed" },
  { value: "50+", label: "5-Star Reviews" },
];

function PortfolioShowcase() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      <GradientOrb
        color="purple"
        size="xl"
        className="-top-48 -left-48 opacity-15"
        intensity="subtle"
        blur="xl"
      />
      <GradientOrb
        color="teal"
        size="lg"
        className="bottom-1/4 -right-32 opacity-10"
        intensity="subtle"
        blur="xl"
      />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-widest text-teal-500 block"
        >
          Showcase
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl lg:text-4xl font-bold text-black mt-3 mb-8"
        >
          Things We&apos;ve Built
        </motion.h2>

        {/* Filters */}
        <PortfolioFilters />

        {/* Grid or Empty State */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map((item, index) => (
              <PortfolioCard key={item.id} item={item} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-black/50">No items in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  const [industryFilter, setIndustryFilter] =
    useState<Industry>("All Industries");
  const [serviceFilter, setServiceFilter] = useState<Service>("All Services");

  const featuredCaseStudy = getFeaturedCaseStudy();
  const filteredCaseStudies = filterCaseStudies(industryFilter, serviceFilter);

  const nonFeaturedCaseStudies = filteredCaseStudies.filter(
    (cs) => !cs.featured
  );
  const showFeatured =
    featuredCaseStudy &&
    industryFilter === "All Industries" &&
    serviceFilter === "All Services";

  return (
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
  );
}

function StatsSection() {
  return (
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
  );
}

function WorkPageContent() {
  const searchParams = useSearchParams();
  const showPortfolioFirst = searchParams.has("category");

  return (
    <>
      <PageHeader
        badge="Our Work"
        title={showPortfolioFirst ? "Things we've built" : "Client Success Stories"}
        description={
          showPortfolioFirst
            ? "Explore the tools, templates, and experiments we've built to push what's possible."
            : "Real outcomes from real partnerships. See how we've helped businesses transform their operations with strategic CRM implementation and automation."
        }
        breadcrumbs={[{ label: "Work", href: "/work" }]}
      />

      {showPortfolioFirst ? (
        <>
          <Suspense fallback={<div className="py-20 lg:py-32 bg-gray-50" />}>
            <PortfolioShowcase />
          </Suspense>
          <StatsSection />
          <CaseStudiesSection />
        </>
      ) : (
        <>
          <CaseStudiesSection />
          <StatsSection />
          <Suspense fallback={<div className="py-20 lg:py-32 bg-gray-50" />}>
            <PortfolioShowcase />
          </Suspense>
        </>
      )}

      <CTABanner />
    </>
  );
}

export default function WorkPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <WorkPageContent />
    </Suspense>
  );
}
