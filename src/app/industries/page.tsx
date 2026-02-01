import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries We Serve | Media Garcia",
  description: "HubSpot solutions tailored for healthcare, IT services, and SaaS companies. Deep expertise in industries with complex sales cycles.",
};

const industries = [
  {
    name: "Healthcare",
    slug: "healthcare",
    description: "HubSpot implementations that understand healthcare complexity — long sales cycles, multiple stakeholders, and careful communication.",
    features: [
      "Multi-stakeholder sales tracking",
      "Long-cycle lead nurturing",
      "Referral management systems",
      "Patient journey automation",
    ],
    color: "teal",
  },
  {
    name: "IT Services",
    slug: "information-technology",
    description: "HubSpot solutions built for IT companies managing complex sales cycles, technical buyers, and multi-stakeholder decisions.",
    features: [
      "Technical content marketing",
      "Long-cycle lead nurturing",
      "Partner ecosystem management",
      "Product-led growth enablement",
    ],
    color: "purple",
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
    color: "orange",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        badge="Industries"
        title="Deep expertise in three verticals"
        description="We specialize in industries with complex sales cycles and high stakes. Healthcare, IT services, and SaaS — we understand your unique challenges."
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
        ]}
      />

      {/* Industries Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group block bg-gray-50 rounded-3xl p-8 lg:p-10 hover:shadow-2xl transition-all duration-500"
              >
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center ${
                  industry.color === "teal" ? "bg-teal-500" : industry.color === "purple" ? "bg-neon-purple-500" : "bg-orange-red-500"
                }`}>
                  {industry.color === "teal" ? (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  ) : industry.color === "purple" ? (
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
              Generic HubSpot implementations miss the nuances of your industry. We bring 14+ years of experience with complex B2B sales cycles, enabling faster implementation and better results.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6">
                <p className="text-4xl font-black text-teal-500 mb-2">14+</p>
                <p className="text-black/60">Years of Experience</p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <p className="text-4xl font-black text-teal-500 mb-2">200+</p>
                <p className="text-black/60">Implementations</p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <p className="text-4xl font-black text-teal-500 mb-2">50+</p>
                <p className="text-black/60">Five-Star Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
