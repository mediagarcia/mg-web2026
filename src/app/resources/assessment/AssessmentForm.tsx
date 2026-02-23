"use client";

import { HubSpotForm } from "@/components/HubSpotForm";

const ASSESSMENT_FORM_ID = process.env.NEXT_PUBLIC_HS_FORM_ASSESSMENT;

export function AssessmentForm() {
  if (ASSESSMENT_FORM_ID) {
    return <HubSpotForm formId={ASSESSMENT_FORM_ID} />;
  }

  return (
    <div className="text-center py-4">
      <p className="text-white/60 mb-6">
        Request your free CRM assessment by reaching out directly.
      </p>
      <a
        href="mailto:hello@mediagarcia.com?subject=CRM%20Assessment%20Request"
        className="w-full bg-teal-500 text-white py-4 rounded-full font-medium hover:bg-teal-400 transition-colors inline-block"
      >
        Request Assessment
      </a>
    </div>
  );
}
