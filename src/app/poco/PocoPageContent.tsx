"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Bell, X } from "lucide-react";
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
    src: "/images/poco/screenshot-dashboard.png",
    alt: "Poco dashboard with action items, weekly summary, and performance metrics",
    caption: "Your daily command center — ClickUp, Calendar & Email unified",
    width: 1366,
    height: 768,
  },
  {
    src: "/images/poco/screenshot-clients.png",
    alt: "Client list with health statuses, hours tracking, and meeting counts",
    caption: "Client health at a glance with HubSpot sync",
    width: 1366,
    height: 768,
  },
  {
    src: "/images/poco/screenshot-meetings.png",
    alt: "Meetings list with AI analysis, task extraction, and question tracking",
    caption: "Every meeting tracked with AI-extracted tasks & questions",
    width: 1366,
    height: 768,
  },
  {
    src: "/images/poco/screenshot-meeting-report.png",
    alt: "AI-generated meeting summary with suggested goals and action items",
    caption: "AI meeting intelligence from Google Meet recordings",
    width: 1366,
    height: 768,
  },
  {
    src: "/images/poco/screenshot-projects.png",
    alt: "Project dashboard with health scores, task counts, and overdue tracking",
    caption: "Project health synced from ClickUp in real time",
    width: 1366,
    height: 768,
  },
  {
    src: "/images/poco/screenshot-client-detail.png",
    alt: "Client detail view with email tracking, meetings, contracts, and activity insights",
    caption: "Deep AI-powered insights for every client relationship",
    width: 1366,
    height: 768,
  },
  {
    src: "/images/poco/screenshot-client-comms.png",
    alt: "Unified communications timeline with email threads and Slack messages",
    caption: "Unified Email & Slack communications timeline",
    width: 1366,
    height: 768,
  },
  {
    src: "/images/poco/screenshot-client-retainer.png",
    alt: "Client retainer management with utilization tracking and invoice settings",
    caption: "Retainer tracking with QuickBooks Online integration",
    width: 1366,
    height: 768,
  },
  {
    src: "/images/poco/screenshot-goals.png",
    alt: "Goal tracking dashboard with AI-suggested goals from meeting patterns",
    caption: "AI-suggested goals surfaced from meeting patterns",
    width: 1366,
    height: 768,
  },
  {
    src: "/images/poco/screenshot-contracts.png",
    alt: "Contract obligations tracking with status indicators and compliance scores",
    caption: "Contract obligations tracked automatically from uploads",
    width: 1366,
    height: 768,
  },
  {
    src: "/images/poco/screenshot-budget.png",
    alt: "Financial dashboard with revenue, margins, utilization and time tracking from QBO",
    caption: "Financial health powered by QuickBooks Online",
    width: 1366,
    height: 768,
  },
  {
    src: "/images/poco/screenshot-business-dev.png",
    alt: "Business development pipeline with conversion rates and prospect tracking",
    caption: "Business development pipeline & conversion tracking",
    width: 1366,
    height: 768,
  },
];

export function PocoPageContent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (lightboxOpen) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % gallerySlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [lightboxOpen]);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") setCurrentSlide((prev) => (prev + 1) % gallerySlides.length);
      if (e.key === "ArrowLeft") setCurrentSlide((prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, closeLightbox]);

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
                  <div
                    className="bg-[#1a1a2e] relative cursor-pointer"
                    style={{ aspectRatio: "16 / 9" }}
                    onClick={() => setLightboxOpen(true)}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={gallerySlides[currentSlide].src}
                          alt={gallerySlides[currentSlide].alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>
                    <div className="absolute bottom-3 right-3 bg-black/50 text-white/80 text-xs px-2 py-1 rounded-md pointer-events-none">
                      Click to expand
                    </div>
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 lg:p-8"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 lg:top-6 lg:right-6 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Close fullscreen view"
            >
              <X className="w-8 h-8" />
            </button>

            <div
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={gallerySlides[currentSlide].src}
                    alt={gallerySlides[currentSlide].alt}
                    width={1366}
                    height={768}
                    sizes="100vw"
                    className="w-full h-auto rounded-lg"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Lightbox caption + dots */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm text-white/60 font-medium">
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
                          : "bg-white/30 hover:bg-white/50"
                      }`}
                      aria-label={`View screenshot ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Prev/Next arrows */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 text-white/50 hover:text-white transition-colors"
                aria-label="Previous screenshot"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % gallerySlides.length)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 text-white/50 hover:text-white transition-colors"
                aria-label="Next screenshot"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
