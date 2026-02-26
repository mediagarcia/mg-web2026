"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import { GradientOrb } from "@/components/ui/visuals";

const pricingFaqs = [
  {
    question: "What's the minimum engagement size?",
    answer:
      "There's no strict minimum. We've done focused projects in a few weeks and long-term partnerships spanning years. We'll scope something that makes sense for both of us.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "No. Our retainer clients work with us month-to-month. We earn your business every month — that's why 98% of our clients renew year over year.",
  },
  {
    question: "Can I start with a small project first?",
    answer:
      "Absolutely. Many of our long-term partners started with a single project — a migration, an audit, or a workflow build. It's a great way to see how we work together.",
  },
  {
    question: "How do retainers work?",
    answer:
      "We agree on a monthly scope and set of priorities. You get a dedicated strategist and team, regular check-ins, and the flexibility to shift priorities as your business evolves.",
  },
  {
    question: "What happens if my needs change mid-engagement?",
    answer:
      "We adapt. Businesses change, and your partner should change with you. We'll adjust scope, timeline, or focus — no rigid SOWs that don't flex.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Most engagements kick off within 1-2 weeks of signing. Discovery and proposal happen within the first few days.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onClick,
}: {
  faq: (typeof pricingFaqs)[0];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-black/10 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-black group-hover:text-teal-500 transition-colors pr-4">
          {faq.question}
        </span>
        <span
          className={`w-10 h-10 rounded-full bg-black/5 flex items-center justify-center shrink-0 transition-colors ${
            isOpen ? "bg-teal-500 text-white" : "group-hover:bg-black/10"
          }`}
        >
          <svg
            className={`w-5 h-5 transition-transform ${isOpen ? "rotate-45" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-black/60 leading-relaxed pr-16">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// FAQ Schema for SEO - static constant derived from pricingFaqs array above, safe for JSON-LD injection
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricingFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <GradientOrb
        color="teal"
        size="lg"
        className="-bottom-32 -right-32 opacity-40"
        intensity="subtle"
        blur="xl"
      />
      {/* SEO structured data - faqSchema is a compile-time static constant, not user input */}
      <Script
        id="pricing-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Header */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block"
            >
              Pricing Questions
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight text-black mb-6"
            >
              The questions you&apos;re probably asking
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-black/60 leading-relaxed mb-8"
            >
              We believe in transparency. Here&apos;s what you need to know
              about working with us.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
            <Link
              href="/book"
              className="inline-flex items-center gap-2 text-teal-500 font-medium hover:text-teal-600 transition-colors group"
            >
              Have more questions? Let&apos;s talk
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
            </Link>
            </motion.div>
          </div>

          {/* Right - FAQ List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {pricingFaqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
