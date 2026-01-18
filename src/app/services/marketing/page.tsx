import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Growth Marketing | Media Garcia",
  description: "SEO, paid advertising, content marketing, and conversion optimization to drive qualified traffic and accelerate growth.",
};

const services = [
  {
    title: "Search Engine Optimization",
    description: "Technical SEO, content optimization, and link building to improve organic visibility.",
    icon: "🔍",
  },
  {
    title: "Paid Advertising",
    description: "Google Ads, LinkedIn Ads, and Facebook Ads management with a focus on ROI.",
    icon: "📈",
  },
  {
    title: "Content Marketing",
    description: "Strategic content creation that attracts, educates, and converts your ideal customers.",
    icon: "✍️",
  },
  {
    title: "Conversion Optimization",
    description: "A/B testing and UX improvements to increase conversion rates across your funnel.",
    icon: "🎯",
  },
  {
    title: "Email Marketing",
    description: "Strategic email campaigns that nurture leads and drive engagement.",
    icon: "📧",
  },
  {
    title: "Analytics & Attribution",
    description: "Track what's working and optimize your marketing spend for maximum ROI.",
    icon: "📊",
  },
];

const results = [
  { metric: "150%", label: "Average Traffic Increase" },
  { metric: "3.2x", label: "Lead Generation Growth" },
  { metric: "45%", label: "Lower Cost Per Lead" },
];

export default function MarketingPage() {
  return (
    <>
      <PageHeader
        badge="Service"
        title="Growth Marketing"
        description="Drive qualified traffic and accelerate growth with data-driven marketing strategies. SEO, paid ads, content, and conversion optimization."
        breadcrumbs={[
          { label: "Services", href: "/services/marketing" },
          { label: "Growth Marketing", href: "/services/marketing" },
        ]}
      />

      {/* Results */}
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

      {/* Services */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12">Marketing Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-gray-50 rounded-2xl p-8">
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                <p className="text-black/60 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-black mb-6">Data-Driven Growth</h2>
              <p className="text-black/60 mb-8 leading-relaxed">
                We don&apos;t just run campaigns—we build growth engines. Every tactic is tied to measurable business outcomes with clear attribution.
              </p>
              <div className="space-y-6">
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-bold text-black">Revenue-Focused</h4>
                  <p className="text-sm text-black/60">We measure success by pipeline and closed revenue, not vanity metrics</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-bold text-black">HubSpot Integrated</h4>
                  <p className="text-sm text-black/60">Full visibility into how marketing drives sales outcomes</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-bold text-black">Continuous Optimization</h4>
                  <p className="text-sm text-black/60">Regular testing and refinement to improve performance over time</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
              <h3 className="text-2xl font-bold text-black mb-6">What&apos;s Included</h3>
              <ul className="space-y-4">
                {[
                  "Monthly strategy sessions",
                  "Custom reporting dashboards",
                  "Competitor analysis",
                  "Keyword research & tracking",
                  "Campaign management",
                  "Creative development",
                  "Landing page optimization",
                  "Quarterly business reviews",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-teal-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
