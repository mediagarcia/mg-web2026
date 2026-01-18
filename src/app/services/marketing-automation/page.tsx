import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketing Automation | Media Garcia",
  description: "Automate campaigns that convert with HubSpot marketing automation. Nurture leads, personalize content, and drive revenue on autopilot.",
};

const features = [
  {
    title: "Lead Nurturing Workflows",
    description: "Automated email sequences that guide prospects from awareness to purchase.",
  },
  {
    title: "Behavioral Triggers",
    description: "Smart automations based on website visits, email engagement, and form submissions.",
  },
  {
    title: "Personalization",
    description: "Dynamic content that adapts to each contact's interests and stage.",
  },
  {
    title: "Lead Scoring",
    description: "Automatic lead qualification so sales focuses on the best opportunities.",
  },
  {
    title: "A/B Testing",
    description: "Data-driven optimization of subject lines, content, and send times.",
  },
  {
    title: "Attribution Reporting",
    description: "Track which campaigns drive the most revenue and optimize accordingly.",
  },
];

const automations = [
  "Welcome series for new subscribers",
  "Re-engagement campaigns for cold leads",
  "Post-demo follow-up sequences",
  "Customer onboarding workflows",
  "Upsell and cross-sell campaigns",
  "Event and webinar promotion",
];

export default function MarketingAutomationPage() {
  return (
    <>
      <PageHeader
        badge="Service"
        title="Marketing Automation"
        description="Automate campaigns that convert with strategic HubSpot marketing automation. We build the workflows that nurture leads while you sleep."
        breadcrumbs={[
          { label: "Services", href: "/services/marketing-automation" },
          { label: "Marketing Automation", href: "/services/marketing-automation" },
        ]}
      />

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12">Automation Capabilities</h2>
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

      {/* Common Automations */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-black mb-6">Common Automations We Build</h2>
              <p className="text-black/60 mb-8 leading-relaxed">
                From simple welcome emails to complex multi-touch campaigns, we design automations that match your buyer journey.
              </p>
              <ul className="space-y-4">
                {automations.map((automation) => (
                  <li key={automation} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-teal-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black/70">{automation}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-black mb-6">Average Results</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-black/60">Email Open Rate</span>
                    <span className="font-bold text-teal-500">+45%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-teal-500 rounded-full" style={{ width: "75%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-black/60">Lead Conversion</span>
                    <span className="font-bold text-teal-500">+60%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-teal-500 rounded-full" style={{ width: "85%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-black/60">Time Saved</span>
                    <span className="font-bold text-teal-500">20+ hrs/week</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-teal-500 rounded-full" style={{ width: "90%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
