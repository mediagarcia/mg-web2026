"use client";

import { motion } from "framer-motion";

// Placeholder company names - these would be replaced with actual client logos
const clients = [
  { name: "TechCorp", industry: "SaaS" },
  { name: "Innovate", industry: "Technology" },
  { name: "GrowthCo", industry: "Marketing" },
  { name: "DataFlow", industry: "Analytics" },
  { name: "CloudSync", industry: "Cloud" },
  { name: "ScaleUp", industry: "Startup" },
];

export function ClientLogos() {
  return (
    <section className="py-16 lg:py-24 bg-white border-y border-black/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-black/40 uppercase tracking-widest mb-12"
        >
          Trusted by innovative companies
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              {/* Placeholder logo - would be replaced with actual SVG/image */}
              <div className="flex items-center gap-2 text-black/30 group-hover:text-black/60 transition-colors">
                <div className="w-8 h-8 rounded bg-black/10 flex items-center justify-center">
                  <span className="text-xs font-bold">{client.name.charAt(0)}</span>
                </div>
                <span className="text-lg font-semibold tracking-tight">{client.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
