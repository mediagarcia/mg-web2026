"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Bell } from "lucide-react";
import { GradientOrb } from "@/components/ui/visuals";
import { HubSpotForm } from "@/components/HubSpotForm";

const features = [
  {
    title: "Promise Tracking",
    description: "Automatically capture and track every commitment made in meetings, emails, and chats.",
  },
  {
    title: "Project Health",
    description: "Real-time health scores across all client engagements so nothing falls through the cracks.",
  },
  {
    title: "AI Insights",
    description: "Surface patterns and risks before they become problems with intelligent analysis.",
  },
  {
    title: "Meeting Intelligence",
    description: "Turn every conversation into actionable items with automatic summarization.",
  },
];

const gallerySlides = [
  {
    src: "/images/poco/feature-dashboard-overview.png",
    alt: "Poco dashboard overview with weekly summary and action items",
    caption: "Your daily command center",
    width: 1400,
    height: 350,
  },
  {
    src: "/images/poco/feature-action-items.png",
    alt: "Action items panel with status badges and task priorities",
    caption: "Track every promise across clients",
    width: 1400,
    height: 580,
  },
  {
    src: "/images/poco/feature-metrics.png",
    alt: "Health metric cards showing response speed, task documentation, and weekly coverage",
    caption: "Health metrics at a glance",
    width: 1400,
    height: 235,
  },
];

export function PocoPageContent() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % gallerySlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gray-50 relative overflow-hidden">
        <GradientOrb
          color="teal"
          size="xl"
          className="-top-32 -right-32 opacity-20"
          intensity="subtle"
          blur="xl"
        />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-black/40 hover:text-teal-500 transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-black/20">/</span>
                <span className="text-black/60">Poco</span>
              </li>
            </ol>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Branding + Copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 mb-8"
              >
                <Image
                  src="/images/poco/poco-logo.png"
                  alt="Poco logo"
                  width={72}
                  height={72}
                  sizes="72px"
                  className="rounded-2xl"
                />
                <div>
                  <span className="inline-block bg-amber-500/10 text-amber-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-1">
                    Coming Soon
                  </span>
                  <h1 className="text-4xl lg:text-5xl font-black text-black">
                    Poco
                  </h1>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-amber-600 font-medium mb-4"
              >
                Tracks the little things
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-lg text-black/60 leading-relaxed mb-8"
              >
                An AI-powered platform that tracks promises, monitors project
                health, and surfaces what matters&nbsp;&mdash; born from
                everything we&apos;ve learned building 200+ CRM and RevOps systems.
              </motion.p>

              {/* Notify Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Bell className="w-4 h-4 text-amber-500" />
                  <p className="text-sm font-medium text-black/70">
                    Get notified when Poco launches
                  </p>
                </div>
                <HubSpotForm
                  formId="ea85ebc5-732f-4c64-a26d-c80eb800e790"
                  theme="light"
                />
              </motion.div>
            </div>

            {/* Right: Screenshot Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50">
                  <div className="bg-gray-900 px-4 py-2.5 flex items-center gap-2" aria-hidden="true">
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
                  <div className="bg-[#1a1a2e] relative min-h-[200px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Image
                          src={gallerySlides[currentSlide].src}
                          alt={gallerySlides[currentSlide].alt}
                          width={gallerySlides[currentSlide].width}
                          height={gallerySlides[currentSlide].height}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="w-full h-auto"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Caption + dots */}
                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm text-black/50 font-medium">
                    {gallerySlides[currentSlide].caption}
                  </p>
                  <div className="flex gap-2">
                    {gallerySlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? "bg-amber-500 w-5"
                            : "bg-black/15 hover:bg-black/30"
                        }`}
                        aria-label={`View screenshot ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-4 block">
              Features
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black">
              Everything that falls through the cracks&nbsp;&mdash; caught
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-black/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-amber-500 to-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-white blur-3xl" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl lg:text-4xl font-black text-white mb-4">
              Interested in Poco?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Sign up above to get notified when we launch, or book a call to learn more about how Poco can help your team.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-all"
            >
              Book an Intro Call
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
