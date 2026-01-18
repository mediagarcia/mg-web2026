import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sales Enablement | Media Garcia",
  description: "Empower your sales team to close more deals with HubSpot sales enablement. Automated sequences, playbooks, and pipeline optimization.",
};

const features = [
  {
    title: "Sales Sequences",
    description: "Automated email sequences that nurture prospects through your sales funnel.",
  },
  {
    title: "Pipeline Optimization",
    description: "Data-driven pipeline stages and deal tracking for predictable revenue.",
  },
  {
    title: "Sales Playbooks",
    description: "Documented best practices and scripts for consistent team performance.",
  },
  {
    title: "Lead Scoring",
    description: "Intelligent lead scoring to prioritize the hottest opportunities.",
  },
  {
    title: "Meeting Scheduling",
    description: "Seamless calendar integration and booking links for faster conversions.",
  },
  {
    title: "Sales Analytics",
    description: "Real-time dashboards showing rep performance and pipeline health.",
  },
];

const results = [
  { metric: "40%", label: "Faster Sales Cycle" },
  { metric: "2.5x", label: "More Qualified Meetings" },
  { metric: "35%", label: "Higher Win Rate" },
];

export default function SalesEnablementPage() {
  return (
    <>
      <PageHeader
        badge="Service"
        title="Sales Enablement"
        description="Empower your sales team to close more deals with strategic HubSpot sales enablement. We build the systems that turn reps into closers."
        breadcrumbs={[
          { label: "Services", href: "/services/sales-enablement" },
          { label: "Sales Enablement", href: "/services/sales-enablement" },
        ]}
      />

      {/* Results Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-3 gap-8 text-center">
            {results.map((result) => (
              <div key={result.label}>
                <p className="text-4xl lg:text-5xl font-black text-teal-500">{result.metric}</p>
                <p className="text-white/60 mt-2">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12">Sales Enablement Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-black/60 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12">Perfect For</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-black mb-3">Growing Sales Teams</h3>
              <p className="text-black/60">Scale your sales process without sacrificing quality or consistency.</p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-black mb-3">Complex B2B Sales</h3>
              <p className="text-black/60">Manage multi-stakeholder deals with long sales cycles effectively.</p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-black mb-3">Revenue Operations</h3>
              <p className="text-black/60">Align sales, marketing, and customer success around revenue goals.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
