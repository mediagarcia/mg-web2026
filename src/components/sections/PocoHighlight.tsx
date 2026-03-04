"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const features = [
  "Commitment Tracking",
  "Operational Plans",
  "Project Health",
  "AI Accountability",
];

export function PocoHighlight() {
  return (
    <section
      id="poco"
      className="py-12 lg:py-16 bg-gray-50 scroll-mt-24"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link
            href="/poco"
            className="group block bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 hover:border-amber-200 hover:shadow-sm transition-all"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
              {/* Logo + Branding */}
              <div className="flex items-center gap-4 shrink-0">
                <Image
                  src="/images/poco/poco-logo.png"
                  alt="Poco logo"
                  width={48}
                  height={48}
                  sizes="48px"
                  className="rounded-xl"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-black text-black">Poco</h3>
                    <span className="bg-amber-500/10 text-amber-600 text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                      Internal Platform
                    </span>
                  </div>
                  <p className="text-sm text-amber-600 font-medium">
                    Delivering to outcomes, not hours
                  </p>
                </div>
              </div>

              {/* Description + Feature pills */}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-black/60 leading-relaxed mb-3">
                  Our internal operations platform that tracks commitments,
                  monitors project health, and ensures we deliver on every promise.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2.5 py-1 bg-amber-500/10 rounded-full text-[11px] text-amber-700 font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* See How We Work link */}
              <div className="shrink-0">
                <span className="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  See How We Work
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
