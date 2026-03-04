"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GradientOrb } from "@/components/ui/visuals";
import { HubSpotMeetings } from "@/components/HubSpotMeetings";

const MEETINGS_URL =
  "https://hub.mediagarcia.com/meetings/louis3/intro";

const whatYouGet = [
  "Honest assessment of your current CRM and RevOps setup",
  "Quick wins we can spot in 15 minutes",
  "Whether a formal engagement makes sense (zero pressure)",
  "Actionable next steps — even if we never work together",
];

const trustStats = [
  { value: "200+", label: "Implementations" },
  { value: "94%", label: "Adoption Rate" },
  { value: "100+", label: "Five-Star Reviews" },
];

export function BookLandingContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-32 bg-white relative overflow-hidden">
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

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
                Free 15-Minute Call
              </span>
              <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.1] tracking-tight text-black mb-6">
                Let&apos;s see if we can help.
              </h1>
              <p className="text-lg lg:text-xl text-black/60 leading-relaxed mb-8 max-w-lg">
                A quick, no-pressure conversation with a senior strategist about
                your revenue operations, CRM challenges, and growth goals.
              </p>

              {/* What you get */}
              <ul className="space-y-3 mb-10">
                {whatYouGet.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-teal-500 shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-black/70">{item}</span>
                  </li>
                ))}
              </ul>

              {/* You'll meet */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-teal-500/20 shadow-md shrink-0">
                    <Image
                      src="/images/team/team-member-1.jpg"
                      alt="Louis Garcia"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-black">
                      Louis Garcia
                    </h2>
                    <p className="text-sm text-teal-500 font-medium">
                      CEO & Founder
                    </p>
                    <p className="text-xs text-black/50 mt-0.5">
                      15+ years building revenue systems
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#ff7a59]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium text-black/50">
                    Gold HubSpot Partner
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-medium text-black/50">
                    100+ Five-Star Reviews
                  </span>
                </div>
              </div>

              <p className="text-sm text-black/40 mt-6">
                Prefer email?{" "}
                <Link
                  href="/contact#contact-form"
                  className="text-teal-500 hover:text-teal-600 font-medium transition-colors"
                >
                  Send a message
                </Link>
              </p>
            </motion.div>

            {/* Right: Embedded Calendar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="bg-gray-50 rounded-3xl p-4 lg:p-6 border border-gray-100">
                <HubSpotMeetings
                  url={MEETINGS_URL}
                  className="min-h-[760px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
            {trustStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-black text-black">
                  {stat.value}
                </p>
                <p className="text-sm text-black/50 font-medium mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
