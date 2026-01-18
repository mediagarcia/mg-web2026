import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";

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
  return (
    <>
      <PageHeader
        badge="Industry"
        title="HubSpot for IT Companies"
        description="We understand the unique challenges of selling IT services and solutions. Our HubSpot implementations are built for complex B2B technology sales."
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: "Information Technology", href: "/industries/information-technology" },
        ]}
      />

      {/* Challenges */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
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
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
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
    </>
  );
}
