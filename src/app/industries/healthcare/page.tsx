import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "HubSpot for Healthcare Companies | Media Garcia",
  description: "HubSpot implementations that understand healthcare complexity — long sales cycles, multiple stakeholders, and compliant communication workflows.",
};

const challenges = [
  {
    title: "Long Sales Cycles",
    description: "Healthcare decisions involve multiple stakeholders, committees, and approval processes that can stretch for months or years.",
  },
  {
    title: "Multiple Stakeholders",
    description: "Tracking engagement across clinical staff, administrators, procurement, and executives requires sophisticated CRM workflows.",
  },
  {
    title: "Referral Management",
    description: "Managing physician referrals, partner relationships, and referral source attribution is critical for growth.",
  },
  {
    title: "Communication Complexity",
    description: "Balancing personalized outreach with appropriate communication channels and timing for healthcare audiences.",
  },
];

const solutions = [
  {
    title: "Multi-Stakeholder Deal Tracking",
    description: "Comprehensive deal pipeline that tracks all decision-makers and their engagement throughout the sales process.",
    features: ["Stakeholder mapping", "Buying committee tracking", "Engagement scoring", "Decision timeline management"],
  },
  {
    title: "Referral Management System",
    description: "Track and nurture referral sources with automated workflows and attribution reporting.",
    features: ["Referral source tracking", "Partner portal integration", "Attribution reporting", "Relationship nurturing"],
  },
  {
    title: "Long-Cycle Nurturing",
    description: "Sophisticated drip campaigns designed for healthcare buying timelines.",
    features: ["Multi-touch sequences", "Content personalization", "Re-engagement workflows", "Lifecycle stage automation"],
  },
  {
    title: "Patient Journey Automation",
    description: "Streamline patient communications while maintaining appropriate touchpoints.",
    features: ["Appointment reminders", "Follow-up automation", "Satisfaction surveys", "Care coordination"],
  },
];

const metrics = [
  { label: "Lead Response Time", before: "48 hours", after: "2 hours", improvement: "-96%" },
  { label: "Referral Attribution", before: "23%", after: "89%", improvement: "+287%" },
  { label: "Sales Cycle Visibility", before: "Limited", after: "Full pipeline", improvement: "Complete" },
  { label: "Stakeholder Tracking", before: "Spreadsheets", after: "Automated", improvement: "Unified" },
];

export default function HealthcareIndustryPage() {
  return (
    <>
      <PageHeader
        badge="Industry"
        title="HubSpot for Healthcare"
        description="We understand healthcare complexity — the long sales cycles, multiple stakeholders, and the need for careful, compliant communication. Our implementations are built for how healthcare really works."
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: "Healthcare", href: "/industries/healthcare" },
        ]}
      />

      {/* Challenges */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12">Healthcare Challenges We Solve</h2>
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
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12">Healthcare-Specific Solutions</h2>
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
                Built for healthcare complexity
              </h3>
              <p className="text-white/80">
                Talk to someone who understands long sales cycles and multi-stakeholder deals.
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

      {/* Why Us for Healthcare */}
      <section className="py-20 lg:py-32 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-black mb-6">Why Healthcare Organizations Choose Us</h2>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              We&apos;ve worked with healthcare organizations for over 14 years. We understand the unique dynamics of healthcare sales — the committee decisions, the long timelines, and the importance of building trust with clinical and administrative stakeholders.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-teal-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/80">Experience with healthcare sales complexity and long decision cycles</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-teal-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/80">Understanding of multi-stakeholder relationship management</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-teal-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/80">Proven referral tracking and attribution systems</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-teal-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/80">Boutique partnership with senior-level expertise on every engagement</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
