"use client";

import { ContactForm } from "@/components/forms/ContactForm";
import { MeshBackground } from "@/components/ui/visuals";
import { GradientOrb } from "@/components/ui/visuals";

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
              Request your free scan
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              Get a complete CRM health audit covering 82 assessment rules
              across contacts, deals, workflows, integrations, and security.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-teal-500 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
                <p className="text-white/50 text-sm">
                  <strong className="text-white/70">Read-only access.</strong>{" "}
                  We never write or modify your HubSpot data.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-teal-500 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-white/50 text-sm">
                  <strong className="text-white/70">Under 5 minutes.</strong>{" "}
                  Full portal scan with prioritized findings.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-teal-500 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
                <p className="text-white/50 text-sm">
                  <strong className="text-white/70">
                    Detailed report delivered.
                  </strong>{" "}
                  Severity ratings, fix instructions, and estimated impact.
                </p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl">
            <ContactForm
              defaultInquiry="Service Request"
              defaultMessage="I'd like to request a HubScan.Ai audit for my portal."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
