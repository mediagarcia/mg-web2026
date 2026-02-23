"use client";

import { HubSpotForm } from "@/components/HubSpotForm";

const CONTACT_FORM_ID = process.env.NEXT_PUBLIC_HS_FORM_CONTACT;

export function ContactForm() {
  if (CONTACT_FORM_ID) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-black mb-6">Send us a message</h2>
        <HubSpotForm formId={CONTACT_FORM_ID} />
        <p className="text-xs text-black/40 text-center mt-4">
          We&apos;ll respond within 24 hours with next steps.
        </p>
      </div>
    );
  }

  // Fallback: direct user to email/call if HubSpot form not configured
  return (
    <div>
      <h2 className="text-2xl font-bold text-black mb-6">Send us a message</h2>
      <div className="bg-gray-50 rounded-2xl p-8 text-center">
        <p className="text-black/60 mb-4">
          Ready to get started? Reach out directly and we&apos;ll respond within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@mediagarcia.com"
            className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-teal-500 transition-colors"
          >
            Email Us
          </a>
          <a
            href="tel:+18886124250"
            className="inline-flex items-center justify-center gap-2 border-2 border-black text-black px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-colors"
          >
            Call +1 888-612-4250
          </a>
        </div>
      </div>
    </div>
  );
}
