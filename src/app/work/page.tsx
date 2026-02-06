"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";
import { caseStudies } from "@/data/case-studies";
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
  const router = useRouter();
  const activeCategory = searchParams.get("category") || "all";

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const handleClearFilter = () => {
    router.push("/work", { scroll: false });
  };

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
            <button
              onClick={handleClearFilter}
              className="text-teal-500 underline mt-2 hover:text-teal-600 transition-colors"
            >
              View all work
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default function WorkPage() {
  return (
    <>
      <PageHeader
        badge="Our Work"
        title="Real numbers from real clients"
        description="Real outcomes from real clients. See how we've helped businesses transform their operations with strategic CRM implementation and automation."
        breadcrumbs={[{ label: "Work", href: "/work" }]}
      />

      {/* Case Studies Grid */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <GradientOrb color="teal" size="xl" className="-top-48 -right-48 opacity-20" intensity="subtle" blur="xl" />
        <GradientOrb color="purple" size="lg" className="bottom-1/4 -left-32 opacity-15" intensity="subtle" blur="xl" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/work/${study.slug}`}>
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={study.image}
                      alt={`${study.client} case study`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-60`} />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="flex gap-2">
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                          {study.industry}
                        </span>
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                          {study.service}
                        </span>
                      </div>

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

                  <div>
                    <p className="text-sm text-black/50 font-medium mb-2">{study.client}</p>
                    <h3 className="text-xl lg:text-2xl font-bold text-black mb-3 group-hover:text-teal-500 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-black/60 leading-relaxed">{study.description}</p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
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
                <p className="text-4xl lg:text-5xl font-black text-teal-500">{stat.value}</p>
                <p className="text-white/60 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <Suspense fallback={<div className="py-20 lg:py-32 bg-gray-50" />}>
        <PortfolioShowcase />
      </Suspense>

      <CTABanner />
    </>
  );
}
