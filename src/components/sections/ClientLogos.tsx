"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "ADVI", logo: "/images/clients/advi.svg" },
  { name: "Men's Pro", logo: "/images/clients/menspro.png" },
  { name: "Current Energy", logo: "/images/clients/currentenergy.png" },
  { name: "Cloud Force Gurus", logo: "/images/clients/cloudforcegurus.png" },
  { name: "Delve Health", logo: "/images/clients/delvehealth.svg" },
  { name: "Optix", logo: "/images/clients/optix.png" },
  { name: "Vertex Education", logo: "/images/clients/vertexeducation.png" },
  { name: "MIPI Alliance", logo: "/images/clients/mipi.png" },
  { name: "Novi Connect", logo: "/images/clients/noviconnect.svg" },
];

export function ClientLogos() {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-12 lg:py-16 bg-white border-y border-black/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-black/40 uppercase tracking-widest mb-10"
        >
          Trusted by innovative companies
        </motion.p>
      </div>

      <div className="relative [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div
          className="flex w-max animate-logo-scroll hover:[animation-play-state:paused]"
        >
          {doubled.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex items-center justify-center flex-shrink-0 w-[160px] sm:w-[200px] lg:w-[240px] px-5 lg:px-8"
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={160}
                height={48}
                unoptimized
                className="max-h-6 w-auto max-w-[110px] object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
