import { Metadata } from "next";
import { CTABanner } from "@/components/sections";
import { GradientOrb, FadingGridPattern } from "@/components/ui/visuals";
import { getVersionedImageForSlot } from "@/lib/images/get-image-for-slot";
import { ServicePageWrapper } from "@/components/ServicePageWrapper";
import { PageHeaderWithPreview } from "@/components/PageHeaderWithPreview";

export const metadata: Metadata = {
  title: "HubSpot for SaaS Companies | Media Garcia",
  description: "Scale your SaaS company with HubSpot automations designed for subscription revenue, product adoption, and customer success.",
};

const challenges = [
  {
    title: "Trial-to-Paid Conversion",
    description: "Converting free trials and freemium users to paying customers requires perfectly timed engagement.",
  },
  {
    title: "Customer Churn",
    description: "Identifying at-risk customers before they cancel requires proactive monitoring and intervention.",
  },
  {
    title: "Expansion Revenue",
    description: "Growing accounts through upsells and cross-sells is often more valuable than new customer acquisition.",
  },
  {
    title: "Product-Led Growth",
    description: "Connecting product usage data with marketing automation to drive conversions and expansion.",
  },
];

const solutions = [
  {
    title: "Trial Conversion Funnels",
    description: "Automated sequences that guide trial users to activation and conversion.",
    features: ["Onboarding sequences", "Feature adoption tracking", "Usage-based triggers", "Conversion optimization"],
  },
  {
    title: "Customer Health Scoring",
    description: "Proactive identification of at-risk customers with automated intervention workflows.",
    features: ["Health score models", "Risk alerts", "Success playbooks", "Churn prevention"],
  },
  {
    title: "Expansion Workflows",
    description: "Identify and nurture expansion opportunities based on usage and engagement.",
    features: ["Usage triggers", "Upsell sequences", "Feature promotion", "Account reviews"],
  },
  {
    title: "Product-Led Automation",
    description: "Connect product analytics to HubSpot for behavior-driven marketing and sales.",
    features: ["Product data sync", "Usage scoring", "In-app messaging", "Sales alerts"],
  },
];

const metrics = [
  { label: "Trial-to-Paid", before: "12%", after: "28%", improvement: "+133%" },
  { label: "Net Revenue Retention", before: "95%", after: "118%", improvement: "+24%" },
  { label: "Customer Churn", before: "8%", after: "3%", improvement: "-62%" },
  { label: "Time to Value", before: "14 days", after: "5 days", improvement: "-64%" },
];

export default function SaaSIndustryPage() {
  const heroImage = getVersionedImageForSlot("industries-saas");

  return (
    <ServicePageWrapper>
      <PageHeaderWithPreview
        badge="Industry"
        title="HubSpot for SaaS Companies"
        description="Scale your SaaS business with HubSpot implementations designed for subscription metrics, product-led growth, and customer success."
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: "SaaS", href: "/industries/saas" },
        ]}
        defaultImage={heroImage}
        slot="industries-saas"
        imageAlt="SaaS growth and subscription business"
        duotoneColor="orange"
      />

      {/* Challenges */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <GradientOrb color="teal" size="xl" className="-top-48 -right-48 opacity-20" intensity="subtle" blur="xl" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12">SaaS Challenges We Solve</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge) => (
              <div key={challenge.title} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-black mb-3">{challenge.title}</h3>
                <p className="text-black/60 leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
        <FadingGridPattern type="dots" color="gray" opacity={0.08} spacing={28} fadeDirection="both" />
        <GradientOrb color="purple" size="lg" className="bottom-0 -left-32 opacity-20" intensity="subtle" blur="xl" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12">SaaS-Specific Solutions</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div key={solution.title} className="bg-white rounded-2xl p-8">
                <h3 className="text-xl font-bold text-black mb-3">{solution.title}</h3>
                <p className="text-black/60 mb-6">{solution.description}</p>
                <ul className="grid grid-cols-2 gap-3">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-black/70">
                      <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="bg-teal-500 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-2">
                Built for SaaS growth
              </h3>
              <p className="text-white/80">
                Talk to someone who understands product-led growth and subscription metrics.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-all shrink-0"
            >
              Book a Strategy Call
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Metrics Comparison */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12 text-center">Typical Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="bg-gray-50 rounded-2xl p-6 text-center">
                <p className="text-sm text-black/50 mb-4">{metric.label}</p>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div>
                    <p className="text-sm text-black/40">Before</p>
                    <p className="text-xl font-bold text-black/60">{metric.before}</p>
                  </div>
                  <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div>
                    <p className="text-sm text-black/40">After</p>
                    <p className="text-xl font-bold text-black">{metric.after}</p>
                  </div>
                </div>
                <p className="text-2xl font-black text-teal-500">{metric.improvement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </ServicePageWrapper>
  );
}
