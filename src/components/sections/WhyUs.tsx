"use client";

import { motion } from "framer-motion";

const differentiators = [
  {
    number: "01",
    title: "Three-Vertical Specialization",
    description: "Healthcare, IT Services, and SaaS — we understand your compliance requirements, sales cycles, and tech stacks inside out.",
  },
  {
    number: "02",
    title: "Right-Sized Partner",
    description: "Senior talent without the overhead. Small enough that our founder is involved in every engagement, experienced enough to handle enterprise complexity.",
  },
  {
    number: "03",
    title: "Outcome-Obsessed",
    description: "We measure success by your results, not our billable hours. That's why clients stay for years, not months.",
  },
  {
    number: "04",
    title: "14 Years of Stability",
    description: "200+ implementations across 10+ countries. We've seen every scenario and know what actually works.",
  },
];

export function WhyUs() {
  return (
    <section className="py-[var(--spacing-section)] bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Header */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block"
            >
              Why Media Garcia
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight text-black mb-6"
            >
              Enterprise results. Boutique partnership.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-black/60 leading-relaxed mb-8"
            >
              Unlike large HubSpot agencies that assign you to junior staff, we provide senior-level expertise from day one — with a founder who stays involved throughout your engagement.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-12"
            >
              <div>
                <span className="text-4xl font-black text-teal-500">14+</span>
                <p className="text-sm text-black/50 mt-1">Years experience</p>
              </div>
              <div>
                <span className="text-4xl font-black text-teal-500">200+</span>
                <p className="text-sm text-black/50 mt-1">Implementations</p>
              </div>
            </motion.div>
          </div>

          {/* Right - Differentiators */}
          <div className="space-y-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex gap-6 p-6 bg-white rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <span className="text-5xl font-black text-black/10 group-hover:text-teal-500/20 transition-colors shrink-0">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-black mb-2 group-hover:text-teal-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-black/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
