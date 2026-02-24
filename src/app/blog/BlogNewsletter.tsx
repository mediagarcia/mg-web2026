"use client";

import { HubSpotForm } from "@/components/HubSpotForm";

export function BlogNewsletter() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">Subscribe to our newsletter</h2>
          <p className="text-black/60 mb-8">
            Get the latest HubSpot tips and growth strategies delivered to your inbox every week.
          </p>
          <HubSpotForm formId="1e17d757-c025-44e9-880f-7c4b012695a7" className="max-w-md mx-auto" />
        </div>
      </div>
    </section>
  );
}
