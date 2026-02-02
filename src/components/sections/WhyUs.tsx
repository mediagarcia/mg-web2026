"use client";

import { motion } from "framer-motion";

const differentiators = [
  {
    number: "01",
    title: "Platform Expertise, Not Lock-in",
    description: "HubSpot Platinum Partner. Salesforce integration experts. Custom API builders. We recommend what's right for your business, not what's easiest for us.",
  },
  {
    number: "02",
    title: "Industry-Specific Focus",
    description: "We specialize in healthcare, IT, and SaaS. We understand your compliance requirements, your buyers, and your sales cycles.",
  },
  {
    number: "03",
    title: "Outcome-Driven Approach",
    description: "We don't just configure CRMs—we architect revenue systems. Every workflow ties to measurable business results.",
  },
  {
    number: "04",
    title: "Global Reach, Local Touch",
    description: "Serving clients across 10+ countries while maintaining the responsiveness and care of a boutique partner.",
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
              Built different. Built for results.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-black/60 leading-relaxed mb-8"
            >
              We&apos;re not another CRM agency. We combine deep technical expertise with strategic thinking to build systems that drive real business growth.
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
                <span className="text-4xl font-black text-teal-500">98%</span>
                <p className="text-sm text-black/50 mt-1">Client retention</p>
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
