"use client";

import { HubSpotForm } from "@/components/HubSpotForm";

export function ContactForm() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-black mb-6">Tell us about your project</h2>
      <HubSpotForm formId="9889726d-8529-4a21-a79a-3fd746e3fc44" />
      <p className="text-xs text-black/40 text-center mt-4">
        We&apos;ll respond within 24 hours with next steps.
      </p>
    </div>
  );
}
