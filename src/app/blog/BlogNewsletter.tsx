"use client";

import { HubSpotForm } from "@/components/HubSpotForm";

const NEWSLETTER_FORM_ID = process.env.NEXT_PUBLIC_HS_FORM_NEWSLETTER;

export function BlogNewsletter() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">Subscribe to our newsletter</h2>
          <p className="text-black/60 mb-8">
            Get the latest HubSpot tips and growth strategies delivered to your inbox every week.
          </p>
          {NEWSLETTER_FORM_ID ? (
            <HubSpotForm formId={NEWSLETTER_FORM_ID} className="max-w-md mx-auto" />
          ) : (
            <a
              href="mailto:hello@mediagarcia.com?subject=Newsletter%20Subscription"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-teal-500 transition-colors"
            >
              Subscribe via Email
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
