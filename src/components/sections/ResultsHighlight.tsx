"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const results = [
  {
    metric: "94%",
    label: "User adoption rate",
    description:
      "Our CRM onboarding clients are actually using their systems.",
    link: "/services/hubspot-onboarding",
  },
  {
    metric: "0",
    label: "Data loss across 50+ migrations",
    description: "Zero-downtime cutovers. Every record accounted for.",
    link: "/services/crm-migration",
  },
  {
    metric: "40%",
    label: "Shorter sales cycles",
    description:
      "Structured pipelines and automation that close deals faster.",
    link: "/services/sales-enablement",
  },
];

interface ResultsHighlightProps {
  backgroundImage?: string | null;
}

export function ResultsHighlight({ backgroundImage }: ResultsHighlightProps = {}) {
  return (
    <section id="results" className="py-20 lg:py-32 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background texture image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover opacity-[0.10]"
          />
        </div>
      )}

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-teal-400 font-semibold text-sm uppercase tracking-wider mb-4 text-center"
        >
          Proven Results
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl lg:text-4xl font-black text-white mb-16 text-center"
        >
          Numbers that speak for themselves
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {results.map((result, index) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Link
                href={result.link}
                className="block group text-center lg:text-left"
              >
                <div className="text-5xl lg:text-6xl font-black text-teal-400 mb-3 group-hover:text-teal-300 transition-colors">
                  {result.metric}
                </div>
                <p className="text-lg font-semibold text-white mb-2">
                  {result.label}
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  {result.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
