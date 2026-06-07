"use client";

import { ContactForm } from "@/components/forms/ContactForm";
import { MeshBackground } from "@/components/ui/visuals";
import { GradientOrb } from "@/components/ui/visuals";

const commitments = [
  {
    title: "You approve every action type.",
    body: "Portal Pulse never runs one you have not signed off on before.",
    d: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
  {
    title: "Every action has an undo path.",
    body: "And we use it before you have to ask.",
    d: "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3",
  },
  {
    title: "If something goes wrong, you hear it from us first.",
    body: "With the blast radius, before you find it yourself.",
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
  },
];

export function ScanCTASection() {
  return (
    <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
      <MeshBackground />
      <GradientOrb
        color="teal"
        size="xl"
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
        intensity="subtle"
        blur="xl"
      />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: copy */}
          <div className="lg:pt-8">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
              See it on your own portal
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              The fastest way to understand how we work is to let the agent read
              your portal. Read-only, about five minutes, and nothing changes
              without your sign-off.
            </p>

            <a
              href="https://portalpulse.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-black font-bold px-7 py-4 rounded-xl transition-colors mb-10"
            >
              Run your first pulse
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>

            <div className="space-y-4">
              {commitments.map((c) => (
                <div key={c.title} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-teal-500 mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={c.d} />
                  </svg>
                  <p className="text-white/50 text-sm">
                    <strong className="text-white/70">{c.title}</strong>{" "}
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl">
            <div className="mb-6">
              <h3 className="text-xl font-black text-black">Prefer to talk first?</h3>
              <p className="text-black/60 text-sm mt-1">
                Tell us about your portal and we will walk you through what a first
                pulse would surface.
              </p>
            </div>
            <ContactForm
              defaultInquiry="Service Request"
              defaultMessage="I'd like to talk to Media Garcia about Portal Pulse for my portal."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
