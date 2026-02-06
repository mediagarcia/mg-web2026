import { Metadata } from "next";
import { CTABanner } from "@/components/sections";
import { GradientOrb, FadingGridPattern } from "@/components/ui/visuals";
import { getVersionedImageForSlot } from "@/lib/images/get-image-for-slot";
import { ServicePageWrapper } from "@/components/ServicePageWrapper";
import { PageHeaderWithPreview } from "@/components/PageHeaderWithPreview";

export const metadata: Metadata = {
  title: "HubSpot for IT Companies | Media Garcia",
  description: "HubSpot solutions built for IT companies managing complex sales cycles, technical buyers, and multi-stakeholder decisions.",
};

const challenges = [
  {
    title: "Complex Sales Cycles",
    description: "IT purchases involve multiple stakeholders, long evaluation periods, and technical requirements that need careful nurturing.",
  },
  {
    title: "Technical Buyers",
    description: "Your buyers are sophisticated. Generic marketing won't work—you need content that demonstrates real expertise.",
  },
  {
    title: "Partner Ecosystems",
    description: "Managing channel partners, referral programs, and co-selling requires sophisticated CRM capabilities.",
  },
  {
    title: "Project-Based Revenue",
    description: "Tracking opportunities from initial contact through project completion requires custom pipeline management.",
  },
];

const solutions = [
  {
    title: "Technical Content Marketing",
    description: "Position your team as thought leaders with content that resonates with technical decision-makers.",
    features: ["White papers & case studies", "Technical blog content", "Webinar programs", "Demo request funnels"],
  },
  {
    title: "Long-Cycle Lead Nurturing",
    description: "Stay top-of-mind through months-long evaluation cycles with intelligent automation.",
    features: ["Multi-touch sequences", "Behavior-based triggers", "Sales/marketing alignment", "Engagement scoring"],
  },
  {
    title: "Partner Management",
    description: "Track partner-sourced deals and manage your channel relationships effectively.",
    features: ["Partner portal", "Deal registration", "Co-marketing tools", "Commission tracking"],
  },
  {
    title: "Technical Sales Enablement",
    description: "Equip your sales team with the tools to engage technical buyers effectively.",
    features: ["Solution configurators", "ROI calculators", "Technical playbooks", "Demo environments"],
  },
];

export default function ITIndustryPage() {
  const heroImage = getVersionedImageForSlot("industries-it");

  return (
    <ServicePageWrapper>
      <PageHeaderWithPreview
        badge="Industry"
        title="HubSpot for IT Companies"
        description="We understand the unique challenges of selling IT services and solutions. Our HubSpot implementations are built for complex B2B technology sales."
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: "Information Technology", href: "/industries/information-technology" },
        ]}
        defaultImage={heroImage}
        slot="industries-it"
        imageAlt="IT services and technology solutions"
        duotoneColor="purple"
      />

      {/* Challenges */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <GradientOrb color="teal" size="xl" className="-top-48 -right-48 opacity-20" intensity="subtle" blur="xl" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12">Challenges We Solve</h2>
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
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12">Our IT Industry Solutions</h2>
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
                Built for IT complexity
              </h3>
              <p className="text-white/80">
                Talk to someone who understands technical buyers and partner ecosystems.
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

      {/* Results */}
      <section className="py-20 lg:py-32 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black mb-12 text-center">Results for IT Companies</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-black text-teal-500">45%</p>
              <p className="text-white/60 mt-2">Shorter Sales Cycle</p>
            </div>
            <div>
              <p className="text-5xl font-black text-teal-500">2.8x</p>
              <p className="text-white/60 mt-2">More Qualified Leads</p>
            </div>
            <div>
              <p className="text-5xl font-black text-teal-500">60%</p>
              <p className="text-white/60 mt-2">Higher Win Rate</p>
            </div>
            <div>
              <p className="text-5xl font-black text-teal-500">$1.2M</p>
              <p className="text-white/60 mt-2">Avg. Pipeline Growth</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </ServicePageWrapper>
  );
}
