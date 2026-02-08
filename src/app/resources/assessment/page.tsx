import { Metadata } from "next";
import { PageHeaderWithPreview } from "@/components/PageHeaderWithPreview";
import { getImageForSlot } from "@/lib/images/get-image-for-slot";

export const metadata: Metadata = {
  title: "CRM Assessment | Media Garcia",
  description: "Take our free CRM assessment to evaluate your current setup and identify opportunities for improvement.",
};

const assessmentAreas = [
  {
    title: "CRM Setup",
    description: "Evaluate your contact properties, deal stages, and data hygiene.",
    questions: 5,
  },
  {
    title: "Marketing Automation",
    description: "Review your workflows, email sequences, and lead nurturing.",
    questions: 6,
  },
  {
    title: "Sales Enablement",
    description: "Assess your sales tools, sequences, and pipeline management.",
    questions: 5,
  },
  {
    title: "Reporting & Analytics",
    description: "Check your dashboards, attribution, and data visibility.",
    questions: 4,
  },
];

const benefits = [
  "Personalized recommendations based on your answers",
  "Benchmark against industry best practices",
  "Identify quick wins and high-impact improvements",
  "Get a prioritized action plan",
];

export default function AssessmentPage() {
  return (
    <>
      <PageHeaderWithPreview
        slot="page-assessment"
        defaultImage={getImageForSlot("page-assessment")}
        badge="Assessment"
        title="How well is your CRM performing?"
        description="Take our free 5-minute assessment to evaluate your CRM setup and get personalized recommendations."
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Assessment", href: "/resources/assessment" },
        ]}
      />

      {/* Assessment Info */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Areas */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-8">What we&apos;ll evaluate</h2>
              <div className="space-y-6">
                {assessmentAreas.map((area) => (
                  <div key={area.title} className="bg-gray-50 rounded-2xl p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-black mb-2">{area.title}</h3>
                        <p className="text-black/60">{area.description}</p>
                      </div>
                      <span className="text-sm text-teal-500 font-medium shrink-0 ml-4">
                        {area.questions} questions
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-black/40 mt-6 text-sm">
                Total: 20 questions - Approximately 5 minutes to complete
              </p>
            </div>

            {/* Right - Start Form */}
            <div className="bg-black rounded-3xl p-8 lg:p-12 text-white">
              <h2 className="text-2xl font-bold mb-6">Start your free assessment</h2>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">{benefit}</span>
                  </li>
                ))}
              </ul>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white/60 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Acme Inc."
                  />
                </div>
                <div>
                  <label htmlFor="crm" className="block text-sm font-medium text-white/60 mb-2">
                    Current CRM Platform
                  </label>
                  <select
                    id="crm"
                    name="crm"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="" className="text-black">Select your platform</option>
                    <option value="hubspot-free" className="text-black">HubSpot Free / Starter</option>
                    <option value="hubspot-professional" className="text-black">HubSpot Professional</option>
                    <option value="hubspot-enterprise" className="text-black">HubSpot Enterprise</option>
                    <option value="salesforce" className="text-black">Salesforce</option>
                    <option value="zoho" className="text-black">Zoho CRM</option>
                    <option value="pipedrive" className="text-black">Pipedrive</option>
                    <option value="other" className="text-black">Other / Custom Stack</option>
                    <option value="none" className="text-black">No CRM yet</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-500 text-white py-4 rounded-full font-medium hover:bg-teal-400 transition-colors mt-4"
                >
                  Start Assessment
                </button>
              </form>
              <p className="text-white/40 text-xs mt-4 text-center">
                Your responses are confidential. No spam, ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12 text-center">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Answer Questions</h3>
              <p className="text-black/60">
                Complete our 20-question assessment about your current CRM setup and processes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Get Your Score</h3>
              <p className="text-black/60">
                Receive an instant score across four key areas with benchmarks against best practices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Review Recommendations</h3>
              <p className="text-black/60">
                Get a personalized report with prioritized recommendations to improve your CRM ROI.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
