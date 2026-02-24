import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "CRM Total Cost of Ownership Calculator | Media Garcia",
  description: "Compare the total cost of ownership between HubSpot, Salesforce, and other CRM platforms.",
};

export default function TCOCalculatorPage() {
  return (
    <>
      <PageHeader
        badge="Calculator"
        title="CRM Total Cost of Ownership"
        description="Compare the true cost of different CRM platforms over time, including hidden costs most vendors don't mention."
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "TCO Calculator", href: "/resources/tco-calculator" },
        ]}
      />

      {/* Coming Soon */}
      <section className="py-32 lg:py-48 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
            Coming Soon
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-black mb-6">
            We&apos;re building something better
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto mb-12">
            Our interactive TCO calculator is being rebuilt with real-time data and more accurate comparisons. In the meantime, we&apos;re happy to run a custom analysis for you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-teal-500 transition-colors"
          >
            Request a Custom TCO Analysis
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
