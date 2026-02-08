"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";
import { GradientOrb } from "@/components/ui/visuals";

const faqs = [
  {
    question: "What platforms do you work with?",
    answer: "We're a Platinum HubSpot Partner and work extensively with Salesforce, Zoho, Pipedrive, and custom-built solutions. We recommend the platform that fits your needs, budget, and existing tech stack—not the one that's easiest for us.",
  },
  {
    question: "Do you work with healthcare organizations?",
    answer: "Yes, healthcare is one of our core verticals. We understand HIPAA compliance requirements, EHR integrations, and the unique challenges of healthcare sales and marketing. We've helped providers, health tech companies, and life sciences organizations build compliant, effective revenue systems.",
  },
  {
    question: "How long does a typical implementation take?",
    answer: "Implementation timelines vary based on complexity, but most projects complete within 4-12 weeks. We start with a thorough discovery phase to understand your needs, then build and launch in sprints. Simple CRM onboarding can be done in as little as 2-4 weeks.",
  },
  {
    question: "Can you migrate our data from another CRM?",
    answer: "Yes, we've migrated data from Salesforce, Pipedrive, Zoho, legacy systems, and spreadsheets—with zero data loss. Our migration process includes data mapping, cleaning, validation, and thorough testing before go-live.",
  },
  {
    question: "Do you offer ongoing support after implementation?",
    answer: "Yes, we offer flexible ongoing support packages. Many clients continue working with us for optimization, training, custom integrations, and strategic guidance. Our goal is long-term partnership—98% of our clients stay with us year over year.",
  },
  {
    question: "What's included in a revenue systems audit?",
    answer: "Our free audit includes a comprehensive review of your CRM setup, data quality, automation workflows, lead scoring, reporting configuration, and integration architecture. You'll receive a detailed report with specific recommendations and a prioritized roadmap.",
  },
];

function FAQItem({ faq, isOpen, onClick }: { faq: typeof faqs[0]; isOpen: boolean; onClick: () => void }) {
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
        <span className={`w-10 h-10 rounded-full bg-black/5 flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-teal-500 text-white" : "group-hover:bg-black/10"}`}>
          <svg
            className={`w-5 h-5 transition-transform ${isOpen ? "rotate-45" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
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

// FAQ Schema for SEO - content is static, not user input
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-[var(--spacing-section)] bg-white relative overflow-hidden">
      {/* Decorative gradient orb */}
      <GradientOrb
        color="teal"
        size="lg"
        className="-bottom-32 -right-32 opacity-40"
        intensity="subtle"
        blur="xl"
      />
      {/* FAQ Schema for SEO - faqSchema is a static constant, not user input */}
      <Script
        id="faq-schema"
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
              Common Questions
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight text-black mb-6"
            >
              Questions we hear every week
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-black/60 leading-relaxed mb-8"
            >
              Everything you need to know about working with us. Can&apos;t find the answer you&apos;re looking for? Reach out to our team.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              href="#contact"
              className="inline-flex items-center gap-2 text-teal-500 font-medium hover:text-teal-600 transition-colors group"
            >
              Get in touch
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>

          {/* Right - FAQ List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
