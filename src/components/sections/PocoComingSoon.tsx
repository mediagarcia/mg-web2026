"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Bell } from "lucide-react";
import { HubSpotForm } from "@/components/HubSpotForm";

const features = [
  "Promise Tracking",
  "Project Health",
  "AI Insights",
  "Meeting Intelligence",
];

export function PocoComingSoon() {
  const [showForm, setShowForm] = useState(false);

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
          className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8"
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
                    Coming Soon
                  </span>
                </div>
                <p className="text-sm text-amber-600 font-medium">
                  Tracks the little things
                </p>
              </div>
            </div>

            {/* Description + Feature pills */}
            <div className="flex-1 min-w-0">
              <p className="text-sm text-black/60 leading-relaxed mb-3">
                An AI-powered platform that tracks promises, monitors project
                health, and surfaces what matters.
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

            {/* Notify CTA */}
            <div className="shrink-0">
              <AnimatePresence mode="wait">
                {!showForm ? (
                  <motion.button
                    key="btn"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    onClick={() => setShowForm(true)}
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2.5 rounded-full transition-colors text-sm"
                  >
                    <Bell className="w-3.5 h-3.5" />
                    Get Notified
                  </motion.button>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-72"
                  >
                    <p className="text-xs text-black/40 mb-2">
                      We&apos;ll let you know when Poco launches.
                    </p>
                    <HubSpotForm
                      formId="ea85ebc5-732f-4c64-a26d-c80eb800e790"
                      theme="poco"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
