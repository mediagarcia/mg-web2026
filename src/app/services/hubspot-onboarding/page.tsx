import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HubSpot Onboarding | Media Garcia",
  description: "Get your team up and running fast with expert HubSpot onboarding. We handle setup, configuration, and training so you can focus on growth.",
};

const features = [
  {
    title: "Portal Setup & Configuration",
    description: "Complete HubSpot portal setup tailored to your business processes and team structure.",
  },
  {
    title: "Data Import & Cleanup",
    description: "Clean import of your existing contacts, companies, and deals with proper data hygiene.",
  },
  {
    title: "Pipeline Configuration",
    description: "Custom sales pipelines designed around your unique sales process and stages.",
  },
  {
    title: "Team Training",
    description: "Comprehensive training sessions to ensure your team adopts HubSpot effectively.",
  },
  {
    title: "Workflow Automation",
    description: "Essential automations to streamline repetitive tasks from day one.",
  },
  {
    title: "Reporting Dashboards",
    description: "Custom dashboards so leadership has visibility into key metrics immediately.",
  },
];

const process = [
  { step: "01", title: "Discovery Call", description: "Understand your goals, processes, and team structure" },
  { step: "02", title: "Configuration", description: "Set up your portal with custom properties and pipelines" },
  { step: "03", title: "Data Migration", description: "Import and clean your existing data" },
  { step: "04", title: "Training & Launch", description: "Train your team and go live with ongoing support" },
];

export default function HubSpotOnboardingPage() {
  return (
    <>
      <PageHeader
        badge="Service"
        title="HubSpot Onboarding"
        description="Get your team up and running fast with expert HubSpot onboarding. We handle setup, configuration, and training so you can focus on growth."
        breadcrumbs={[
          { label: "Services", href: "/services/hubspot-onboarding" },
          { label: "HubSpot Onboarding", href: "/services/hubspot-onboarding" },
        ]}
      />

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12">What&apos;s Included</h2>
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

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12">Our Onboarding Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="relative">
                <span className="text-6xl font-black text-teal-500/20">{item.step}</span>
                <h3 className="text-xl font-bold text-black mt-4 mb-2">{item.title}</h3>
                <p className="text-black/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="bg-black rounded-3xl p-8 lg:p-16 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-black mb-4">Ready to get started?</h2>
                <p className="text-white/60 leading-relaxed mb-8">
                  Our HubSpot onboarding packages start at $3,500 and typically complete within 2-4 weeks depending on complexity.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-full font-medium hover:bg-teal-400 transition-colors"
                >
                  Get a Custom Quote
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="text-center">
                <p className="text-sm text-white/40 uppercase tracking-wider mb-2">Starting at</p>
                <p className="text-6xl font-black text-teal-500">$3,500</p>
                <p className="text-white/60 mt-2">2-4 week delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
