"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GradientOrb } from "@/components/ui/visuals";

const MEETINGS_URL =
  "https://meetings.hubspot.com/louis3/discovery-meeting-with-louis";

const whatYouGet = [
  "Honest assessment of your current CRM and RevOps setup",
  "Quick wins we can spot in 15 minutes",
  "Whether a formal engagement makes sense (zero pressure)",
  "Actionable next steps — even if we never work together",
];

const trustStats = [
  { value: "200+", label: "Implementations" },
  { value: "94%", label: "Adoption Rate" },
  { value: "50+", label: "Five-Star Reviews" },
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <a
                  href={MEETINGS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-teal-500 transition-all duration-300 group"
                >
                  Book an Intro Call
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-black/20 text-black px-8 py-4 rounded-full text-lg font-medium hover:border-teal-500 hover:text-teal-500 transition-all duration-300"
                >
                  Or Send a Message
                </Link>
              </div>
              <p className="text-sm text-black/40">
                15 minutes. Free. No sales pitch.
              </p>
            </motion.div>

            {/* Right: Louis card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
                {/* Person */}
                <div className="flex items-center gap-5 mb-8">
                  <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden ring-4 ring-teal-500/20 shadow-lg shrink-0">
                    <Image
                      src="/images/team/team-member-1.jpg"
                      alt="Louis Garcia"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-black">
                      Louis Garcia
                    </h2>
                    <p className="text-sm text-teal-500 font-medium">
                      CEO & Founder
                    </p>
                    <p className="text-sm text-black/50 mt-1">
                      15+ years building revenue systems. Personally involved in
                      every engagement.
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-500 shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-black/70 font-medium">
                      15-minute video call
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-500 shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-black/70 font-medium">
                      Choose a time that works for you
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-500 shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-black/70 font-medium">
                      Actionable insights, even if we don&apos;t work together
                    </p>
                  </div>
                </div>

                {/* Trust indicators */}
                <div className="border-t border-gray-200 pt-6">
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
                        50+ Five-Star Reviews
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-teal-500"
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
                        200+ Implementations
                      </span>
                    </div>
                  </div>
                </div>
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
