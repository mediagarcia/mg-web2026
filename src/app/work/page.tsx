"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";
import { GradientOrb } from "@/components/ui/visuals";

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
        title="Something big is coming"
        description="We're building something we're genuinely excited about. Stay tuned."
        breadcrumbs={[{ label: "Work", href: "/work" }]}
      />

      {/* Poco Coming Soon */}
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
