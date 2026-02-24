"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "We respond within 24 hours",
    description: "A real person reviews your inquiry.",
  },
  {
    number: 2,
    title: "Discovery call",
    description: "15 minutes to understand your goals and challenges.",
  },
  {
    number: 3,
    title: "Platform-agnostic recommendation",
    description: "We suggest the right approach for you.",
  },
  {
    number: 4,
    title: "Custom proposal",
    description: "Timeline, investment, and expected outcomes.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-black/5"
          >
            <h3 className="text-sm font-bold text-black/40 uppercase tracking-widest mb-6">
              What happens next?
            </h3>
            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-teal-500/10 text-teal-500 text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                  <p className="text-sm text-black/70">
                    <strong className="text-black">{step.title}</strong> &mdash;{" "}
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-black/40 mt-6">
              No hard sell. No platform lock-in. Just a conversation about what&apos;s possible.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
