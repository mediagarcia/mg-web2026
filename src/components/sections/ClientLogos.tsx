"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "TechCorp", logo: "/images/clients/techcorp.svg" },
  { name: "Innovate", logo: "/images/clients/innovate.svg" },
  { name: "GrowthCo", logo: "/images/clients/growthco.svg" },
  { name: "DataFlow", logo: "/images/clients/dataflow.svg" },
  { name: "CloudSync", logo: "/images/clients/cloudsync.svg" },
  { name: "ScaleUp", logo: "/images/clients/scaleup.svg" },
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
              className="group opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={120}
                height={40}
                className="h-10 w-auto grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
