"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";
import { caseStudies } from "@/data/case-studies";
import { CaseStudyCard, FeaturedCaseStudy } from "@/components/case-studies";
import { guides } from "@/data/guides";

const stats = [
  { value: "200+", label: "CRM Implementations" },
  { value: "98%", label: "Client Retention" },
  { value: "15+", label: "Years In Business" },
  { value: "50+", label: "5-Star Reviews" },
];

export default function WorkPage() {
  const featuredStudy = caseStudies.find((s) => s.featured);

  return (
    <>
      <PageHeader
        badge="Our Work"
        title="Results, resources & what we're building"
        description="Case studies from real client engagements, in-depth guides for CRM teams, and a look at what's next."
        breadcrumbs={[{ label: "Work", href: "/work" }]}
      />

      {/* Featured Case Study */}
      {featuredStudy && (
        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-8 block">
              Featured
            </span>
            <FeaturedCaseStudy caseStudy={featuredStudy} />
          </div>
        </section>
      )}

      {/* Case Studies */}
      <section id="case-studies" className="py-20 lg:py-32 bg-gray-50 scroll-mt-24">
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
      <section id="guides" className="py-20 lg:py-32 bg-white scroll-mt-24">
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
                  className="group block h-full bg-gray-50 rounded-2xl overflow-hidden border border-black/5 hover:border-black/10 hover:shadow-lg transition-all duration-300"
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
