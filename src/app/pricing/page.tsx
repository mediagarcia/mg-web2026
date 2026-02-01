import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner, FAQ } from "@/components/sections";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | Media Garcia",
  description: "Transparent pricing for HubSpot implementation, automation, and growth services. Packages starting at $3,500.",
};

const packages = [
  {
    name: "Starter",
    price: "$3,500",
    period: "one-time",
    description: "Perfect for teams new to HubSpot who need a solid foundation.",
    features: [
      "HubSpot portal setup",
      "Basic pipeline configuration",
      "Data import (up to 5,000 contacts)",
      "Team training (2 hours)",
      "30 days email support",
    ],
    cta: "Start With Starter",
    popular: false,
  },
  {
    name: "Professional",
    price: "$7,500",
    period: "one-time",
    description: "Comprehensive implementation for growing teams with complex needs.",
    features: [
      "Everything in Starter",
      "Custom automation workflows",
      "Advanced pipeline setup",
      "Data migration (up to 25,000 contacts)",
      "Sales sequence setup",
      "Custom reporting dashboards",
      "Team training (4 hours)",
      "60 days email support",
    ],
    cta: "Choose Professional",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "project-based",
    description: "Full-scale transformation for organizations with complex requirements.",
    features: [
      "Everything in Professional",
      "Custom integrations",
      "Multi-hub implementation",
      "Advanced automation",
      "Custom object setup",
      "Dedicated project manager",
      "On-site training available",
      "90 days priority support",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

const addons = [
  { name: "CRM Migration", price: "From $2,500", description: "Full data migration from your existing CRM" },
  { name: "Custom Integration", price: "From $3,000", description: "Connect HubSpot to your other tools" },
  { name: "Website Development", price: "From $10,000", description: "HubSpot CMS website build" },
  { name: "Ongoing Support", price: "$1,500/mo", description: "Monthly optimization and support" },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        badge="Pricing"
        title="Transparent, value-based pricing"
        description="No hidden fees or surprise costs. Choose the package that fits your needs, or contact us for a custom solution."
        breadcrumbs={[
          { label: "Pricing", href: "/pricing" },
        ]}
      />

      {/* Packages */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-3xl p-8 ${
                  pkg.popular
                    ? "bg-black text-white ring-4 ring-teal-500"
                    : "bg-gray-50"
                }`}
              >
                {pkg.popular && (
                  <span className="inline-block px-3 py-1 bg-teal-500 text-white text-xs font-bold rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? "text-white" : "text-black"}`}>
                  {pkg.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-black ${pkg.popular ? "text-white" : "text-black"}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-sm ${pkg.popular ? "text-white/60" : "text-black/60"}`}>
                    {" "}{pkg.period}
                  </span>
                </div>
                <p className={`mb-6 ${pkg.popular ? "text-white/70" : "text-black/60"}`}>
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 shrink-0 ${pkg.popular ? "text-teal-500" : "text-teal-500"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${pkg.popular ? "text-white/80" : "text-black/70"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 rounded-full font-medium transition-colors ${
                    pkg.popular
                      ? "bg-teal-500 text-white hover:bg-teal-400"
                      : "bg-black text-white hover:bg-teal-500"
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12">Add-On Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon) => (
              <div key={addon.name} className="bg-white rounded-2xl p-6">
                <h3 className="text-lg font-bold text-black mb-1">{addon.name}</h3>
                <p className="text-teal-500 font-bold mb-3">{addon.price}</p>
                <p className="text-sm text-black/60">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="bg-black rounded-3xl p-8 lg:p-16 text-white text-center">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">Need a custom solution?</h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Every business is different. Let&apos;s discuss your specific needs and create a custom package that fits your goals and budget.
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
        </div>
      </section>

      <CTABanner />
    </>
  );
}
