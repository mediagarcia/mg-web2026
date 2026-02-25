"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Bell } from "lucide-react";
import { GradientOrb } from "@/components/ui/visuals";
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
      className="pt-[var(--spacing-section)] pb-16 lg:pb-20 bg-gray-50 relative overflow-hidden scroll-mt-24"
    >
      <GradientOrb
        color="teal"
        size="xl"
        className="-top-48 -right-48 opacity-20"
        intensity="subtle"
        blur="xl"
      />
      <GradientOrb
        color="purple"
        size="lg"
        className="bottom-1/4 -left-32 opacity-15"
        intensity="subtle"
        blur="xl"
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-4 block"
          >
            What We&apos;re Building
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight text-black"
          >
            Meet Poco
          </motion.h2>
        </div>

        {/* Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl border border-gray-100 p-8 lg:p-12 overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Branding + Copy + Form */}
            <div>
              <Image
                src="/images/poco/poco-logo.png"
                alt="Poco logo"
                width={80}
                height={80}
                className="rounded-2xl mb-6"
              />

              <span className="inline-block bg-amber-500/10 text-amber-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                Coming Soon
              </span>

              <h3 className="text-3xl lg:text-4xl font-black text-black mb-2">
                Poco
              </h3>
              <p className="text-lg text-amber-600 font-medium mb-4">
                Tracks the little things
              </p>

              <p className="text-black/60 leading-relaxed mb-8">
                An AI-powered platform that tracks promises, monitors project
                health, and surfaces what matters&nbsp;&mdash; born from
                everything we&apos;ve learned building CRM and RevOps systems.
              </p>

              {/* Notify CTA */}
              <AnimatePresence mode="wait">
                {!showForm ? (
                  <motion.button
                    key="btn"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    onClick={() => setShowForm(true)}
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
                  >
                    <Bell className="w-4 h-4" />
                    Get Notified
                  </motion.button>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-sm"
                  >
                    <p className="text-sm text-black/50 mb-3">
                      Drop your email and we&apos;ll let you know when Poco launches.
                    </p>
                    <HubSpotForm
                      formId="ea85ebc5-732f-4c64-a26d-c80eb800e790"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right: Screenshot + Features */}
            <div>
              <div className="relative">
                {/* Browser frame */}
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 lg:rotate-1 lg:hover:rotate-0 transition-transform duration-500">
                  <div className="bg-gray-900 px-4 py-2.5 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                    </div>
                    <div className="flex-1 mx-8">
                      <div className="bg-gray-800 rounded-md px-3 py-1 text-xs text-gray-400 text-center truncate">
                        poco.mediagarcia.com
                      </div>
                    </div>
                  </div>
                  <Image
                    src="/images/poco/dashboard-preview.png"
                    alt="Poco dashboard showing action items, project health metrics, and team activity"
                    width={1400}
                    height={900}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2 mt-6 justify-center lg:justify-start">
                {features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1.5 bg-amber-500/10 rounded-full text-xs text-amber-700 font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-black/10"
        >
          {[
            { value: "200+", label: "CRM Implementations" },
            { value: "98%", label: "Client Retention" },
            { value: "$4M+", label: "Revenue Attributed" },
            { value: "50+", label: "5-Star Reviews" },
          ].map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="text-4xl lg:text-5xl font-black text-black mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-black/50 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
