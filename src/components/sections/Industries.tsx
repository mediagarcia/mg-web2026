"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const industries = [
  {
    name: "Healthcare",
    slug: "healthcare",
    description: "HubSpot implementations that understand healthcare complexity — long sales cycles, multiple stakeholders, and the need for careful, compliant communication.",
    features: [
      "Multi-stakeholder sales tracking",
      "Long-cycle lead nurturing",
      "Referral management systems",
      "Patient journey automation",
    ],
    gradient: "from-teal-500 to-teal-600",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    name: "IT Services",
    slug: "information-technology",
    description: "HubSpot solutions built for IT companies managing complex sales cycles, technical buyers, and multi-stakeholder decisions.",
    features: [
      "Technical content marketing",
      "Long-cycle lead nurturing",
      "Partner ecosystem management",
      "Product-led growth enablement",
    ],
    gradient: "from-neon-purple-500 to-neon-purple-600",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "SaaS",
    slug: "saas",
    description: "Scale your SaaS company with HubSpot automations designed for subscription revenue, product adoption, and customer success.",
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
            Industries We Serve
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight text-black mb-6"
          >
            Deep expertise in three verticals
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-black/60 leading-relaxed"
          >
            We specialize in industries with complex sales cycles and high stakes. Our HubSpot implementations are tailored to the unique challenges of healthcare, IT services, and SaaS.
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
