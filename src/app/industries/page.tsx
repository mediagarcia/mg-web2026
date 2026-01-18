import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries We Serve | Media Garcia",
  description: "HubSpot solutions tailored for IT and SaaS companies. We understand your unique sales cycles, buyers, and growth challenges.",
};

const industries = [
  {
    name: "Information Technology",
    slug: "information-technology",
    description: "HubSpot solutions built for IT companies managing complex sales cycles, technical buyers, and multi-stakeholder decisions.",
    features: [
      "Technical content marketing",
      "Long-cycle lead nurturing",
      "Partner ecosystem management",
      "Product-led growth enablement",
    ],
    color: "teal",
  },
  {
    name: "SaaS",
    slug: "saas",
    description: "Scale your SaaS company with HubSpot automations designed for subscription revenue, product adoption, and customer success.",
    features: [
      "Trial-to-paid conversion funnels",
      "Usage-based lead scoring",
      "Customer health monitoring",
      "Expansion revenue workflows",
    ],
    color: "purple",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        badge="Industries"
        title="Specialized expertise for tech companies"
        description="We understand the unique challenges of selling technology. Our HubSpot implementations are tailored to your industry's specific needs."
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
        ]}
      />

      {/* Industries Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group block bg-gray-50 rounded-3xl p-8 lg:p-12 hover:shadow-2xl transition-all duration-500"
              >
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center ${
                  industry.color === "teal" ? "bg-teal-500" : "bg-neon-purple-500"
                }`}>
                  {industry.color === "teal" ? (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  )}
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4 group-hover:text-teal-500 transition-colors">
                  {industry.name}
                </h2>
                <p className="text-black/60 leading-relaxed mb-6">{industry.description}</p>
                <ul className="grid grid-cols-2 gap-3 mb-8">
                  {industry.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-black/70">
                      <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-black/40 group-hover:text-teal-500 transition-colors">
                  Learn more
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry Focus */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-6">Why Industry Focus Matters</h2>
            <p className="text-lg text-black/60 leading-relaxed mb-12">
              Generic HubSpot implementations miss the nuances of your industry. We bring deep understanding of tech company operations, enabling faster implementation and better results.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6">
                <p className="text-4xl font-black text-teal-500 mb-2">50%</p>
                <p className="text-black/60">Faster Implementation</p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <p className="text-4xl font-black text-teal-500 mb-2">3x</p>
                <p className="text-black/60">Better Lead Quality</p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <p className="text-4xl font-black text-teal-500 mb-2">98%</p>
                <p className="text-black/60">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
