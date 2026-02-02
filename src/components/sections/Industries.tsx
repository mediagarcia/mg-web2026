"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const industries = [
  {
    name: "Healthcare & Life Sciences",
    slug: "healthcare",
    description: "Revenue systems for regulated environments. We understand HIPAA compliance, EHR integrations, and the nuances of selling to healthcare organizations.",
    features: [
      "HIPAA-compliant workflows",
      "EHR & patient system integrations",
      "Provider relationship management",
      "Compliance-aware automation",
    ],
    gradient: "from-teal-500 to-teal-600",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    name: "Information Technology",
    slug: "information-technology",
    description: "CRM and RevOps for technical buyers. Long sales cycles, multiple stakeholders, and solutions-based selling require specialized systems.",
    features: [
      "Technical content marketing",
      "Long-cycle lead nurturing",
      "Partner ecosystem management",
      "Multi-stakeholder deal tracking",
    ],
    gradient: "from-neon-purple-500 to-neon-purple-600",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "SaaS & Software",
    slug: "saas",
    description: "Scale your revenue engine from startup to scale-up. Product-led growth integrations, usage-based billing connections, and customer success automation.",
    features: [
      "Trial-to-paid conversion funnels",
      "Usage-based lead scoring",
      "Customer health monitoring",
      "Expansion revenue workflows",
    ],
    gradient: "from-orange-red-500 to-orange-red-600",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-[var(--spacing-section)] bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block"
          >
            Who We Serve
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight text-black mb-6"
          >
            Built for industries with complex sales
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-black/60 leading-relaxed"
          >
            We specialize in organizations where sales cycles are long, compliance matters, and your buyers are technical.
          </motion.p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/industries/${industry.slug}`}
                className="group block bg-gray-50 rounded-3xl p-8 lg:p-12 h-full hover:shadow-2xl transition-all duration-500"
              >
                {/* Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center text-white shrink-0`}>
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-black mb-2 group-hover:text-teal-500 transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-black/60 leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {industry.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-teal-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-black/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-medium text-black/40 group-hover:text-teal-500 transition-colors">
                  <span>Learn more about {industry.name}</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
