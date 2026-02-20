import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import Link from "next/link";
import { GradientOrb, FadingGridPattern } from "@/components/ui/visuals";

export const metadata: Metadata = {
  title: "Pricing | Media Garcia",
  description: "Flexible retainer packages for HubSpot, CRM, and RevOps services. Growth plans starting at $5,000/month.",
};

const packages = [
  {
    name: "Growth",
    price: "$5,000",
    period: "/month",
    description: "For teams ready to optimize their CRM and revenue operations.",
    features: [
      "Dedicated strategist",
      "CRM optimization & cleanup",
      "Automation management",
      "Monthly performance reporting",
      "Pipeline refinement",
      "Email & chat support",
      "Up to 40 hrs/month",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Scale",
    price: "$10,000",
    period: "/month",
    description: "Comprehensive RevOps for scaling teams with complex needs.",
    features: [
      "Everything in Growth",
      "Advanced integrations",
      "Custom dashboards & reporting",
      "Multi-hub strategy",
      "Dedicated project manager",
      "Priority Slack support",
      "Sales enablement",
      "Up to 80 hrs/month",
    ],
    cta: "Choose Scale",
    popular: true,
  },
  {
    name: "Custom",
    price: "Let's Talk",
    period: "project-based",
    description: "Tailored solutions for enterprise-grade requirements.",
    features: [
      "Custom scope & deliverables",
      "Enterprise integrations",
      "CRM migrations",
      "Cross-functional team",
      "Executive strategy sessions",
      "On-site workshops available",
      "SOW-based pricing",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

const commonProjects = [
  { name: "CRM Migration", price: "$5,000+", description: "Full data migration from your existing CRM with zero downtime" },
  { name: "Website Build", price: "$10,000+", description: "High-converting websites on HubSpot CMS or custom builds" },
  { name: "Custom Integration", price: "$7,000+", description: "Connect HubSpot to your EHR, ERP, or any platform" },
  { name: "Training & Enablement", price: "$2,500+", description: "Hands-on training to ensure team adoption sticks" },
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
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <GradientOrb color="teal" size="xl" className="-top-48 -right-48 opacity-20" intensity="subtle" blur="xl" />
        <GradientOrb color="purple" size="lg" className="top-1/2 -left-32 opacity-15" intensity="subtle" blur="xl" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
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

      {/* Competitive Positioning */}
      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-black/60 leading-relaxed">
              <strong className="text-black">How we compare:</strong> Agencies with comparable certifications and experience typically charge $8,000–$25,000/month. We keep costs lower by staying lean, senior-led, and outcome-focused—so you get enterprise expertise without the enterprise overhead.
            </p>
          </div>
        </div>
      </section>

      {/* Common Projects */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">Common Projects</h2>
          <p className="text-black/60 mb-12 max-w-2xl">
            Our retainers cover ongoing optimization, strategy, and support. These are common one-time projects we handle alongside your retainer—scoped and priced separately.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonProjects.map((project) => (
              <div key={project.name} className="bg-white rounded-2xl p-6">
                <h3 className="text-lg font-bold text-black mb-1">{project.name}</h3>
                <p className="text-teal-500 font-bold mb-3">{project.price}</p>
                <p className="text-sm text-black/60">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="bg-black rounded-3xl p-8 lg:p-16 text-white text-center">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">Need something custom?</h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Every business is different. Let&apos;s discuss your specific needs and create a package that fits your goals and budget.
            </p>
            <div className="flex flex-col items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-full font-medium hover:bg-teal-400 transition-colors"
              >
                Get a Custom Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <span className="text-white/40 text-sm mt-3">No obligation. We&apos;ll send a proposal within 48 hours.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
