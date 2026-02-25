"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const MEETINGS_URL =
  "https://meetings.hubspot.com/louis3/discovery-meeting-with-louis";

const meetingDetails = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    text: "15-minute video call",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    text: "Choose a time that works for you",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: "Actionable insights, even if we don\u2019t work together",
  },
];

const coverItems = [
  "Your current revenue operations and tech stack",
  "Where you\u2019re losing deals or leaving money on the table",
  "Quick wins we can identify in 15 minutes",
  "Whether a formal engagement makes sense (no pressure)",
];

const trustIndicators = [
  {
    icon: (
      <svg className="w-5 h-5 text-[#ff7a59]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    label: "Gold HubSpot Partner",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
    label: "50+ Five-Star Reviews",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    label: "200+ Implementations",
  },
];

export function BookingHero() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Meet with Louis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
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
                <h2 className="text-xl font-bold text-black">Louis Garcia</h2>
                <p className="text-sm text-teal-500 font-medium">CEO & Founder</p>
                <p className="text-sm text-black/50 mt-1">
                  15+ years building revenue systems. Personally involved in every engagement.
                </p>
              </div>
            </div>

            <a
              href={MEETINGS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-teal-600 transition-colors w-full sm:w-auto group"
            >
              Book Your Intro Call
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-sm text-black/40 mt-3">
              15 minutes. Free. No sales pitch.
            </p>

            <div className="mt-8 space-y-4">
              {meetingDetails.map((detail) => (
                <div key={detail.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-500 shrink-0">
                    {detail.icon}
                  </div>
                  <p className="text-black/70 font-medium">{detail.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: What we'll cover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
              <h3 className="text-xl font-bold text-black mb-6">What we&apos;ll cover</h3>
              <ul className="space-y-4 mb-8">
                {coverItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-black/70">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Trust Indicators */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex flex-wrap gap-4">
                  {trustIndicators.map((indicator) => (
                    <div key={indicator.label} className="flex items-center gap-2">
                      {indicator.icon}
                      <span className="text-sm font-medium text-black/50">{indicator.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
