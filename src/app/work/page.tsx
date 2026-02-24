"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";
import { GradientOrb } from "@/components/ui/visuals";
import { caseStudies } from "@/data/case-studies";
import { CaseStudyCard } from "@/components/case-studies";
import { guides } from "@/data/guides";

const stats = [
  { value: "200+", label: "CRM Implementations" },
  { value: "98%", label: "Client Retention" },
  { value: "$4M+", label: "Client Revenue Attributed" },
  { value: "50+", label: "5-Star Reviews" },
];

export default function WorkPage() {
  return (
    <>
      <PageHeader
        badge="Our Work"
        title="Results, resources & what we're building"
        description="Case studies from real client engagements, in-depth guides for CRM teams, and a look at what's next."
        breadcrumbs={[{ label: "Work", href: "/work" }]}
      />

      {/* Case Studies */}
      <section id="case-studies" className="py-20 lg:py-32 bg-white scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
                Case Studies
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-black">
                Real results from real clients
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={study.slug}
                caseStudy={study}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Guides & Playbooks */}
      <section id="guides" className="py-20 lg:py-32 bg-gray-50 scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
                Guides & Playbooks
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-black">
                In-depth resources for CRM teams
              </h2>
            </div>
            <Link
              href="/resources/guides"
              className="inline-flex items-center gap-2 text-black font-medium hover:text-teal-500 transition-colors group"
            >
              View all guides
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <motion.article
                key={guide.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/resources/guides/${guide.slug}`}
                  className="group block h-full bg-white rounded-2xl overflow-hidden border border-black/5 hover:border-black/10 hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-6 flex flex-col h-full">
                    <span className="inline-block px-3 py-1 bg-teal-500/10 text-teal-600 rounded-full text-xs font-bold uppercase tracking-wider w-fit mb-4">
                      {guide.category}
                    </span>
                    <h3 className="text-lg font-bold text-black mb-3 group-hover:text-teal-500 transition-colors line-clamp-2">
                      {guide.title}
                    </h3>
                    <p className="text-black/60 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                      {guide.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-black/40 pt-4 border-t border-black/5">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {guide.readTime}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        {guide.tableOfContents.filter((t) => t.level === 1).length} chapters
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Poco Coming Soon */}
      <section id="poco" className="py-20 lg:py-32 bg-white relative overflow-hidden scroll-mt-24">
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl border border-gray-100 p-8 lg:p-16 max-w-3xl mx-auto text-center"
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

            <h2 className="text-3xl lg:text-5xl font-black text-black mb-6">
              Poco
            </h2>

            <p className="text-lg text-black/60 leading-relaxed max-w-lg mx-auto mb-8">
              An AI-driven app born from everything we&apos;ve learned building
              CRM and RevOps systems. We&apos;re not ready to share just yet,
              but we think you&apos;re going to love it.
            </p>

            <div className="flex flex-wrap gap-2 justify-center">
              {["AI-Powered", "Built In-House", "RevOps DNA"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white rounded-full text-xs text-black/60 font-medium border border-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
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

      <CTABanner />
    </>
  );
}
