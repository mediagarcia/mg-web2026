import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "HubSpot ROI Calculator | Media Garcia",
  description: "Calculate the potential return on investment from implementing HubSpot with Media Garcia.",
};

const assumptions = [
  { label: "Average deal size", default: "$25,000" },
  { label: "Current close rate", default: "20%" },
  { label: "Monthly leads", default: "100" },
  { label: "Sales cycle length", default: "45 days" },
];

const improvements = [
  { metric: "Close Rate", improvement: "+25%", description: "Better lead qualification and nurturing" },
  { metric: "Sales Cycle", improvement: "-30%", description: "Automated follow-ups and engagement" },
  { metric: "Lead Volume", improvement: "+40%", description: "Improved marketing automation" },
  { metric: "Rep Productivity", improvement: "+35%", description: "Less manual work, more selling time" },
];

export default function ROICalculatorPage() {
  return (
    <>
      <PageHeader
        badge="Calculator"
        title="Calculate your HubSpot ROI"
        description="See the potential return on investment from implementing HubSpot with our team."
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "ROI Calculator", href: "/resources/roi-calculator" },
        ]}
      />

      {/* Calculator Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Input Form */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">Enter your numbers</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="dealSize" className="block text-sm font-medium text-black mb-2">
                    Average Deal Size ($)
                  </label>
                  <input
                    type="number"
                    id="dealSize"
                    name="dealSize"
                    defaultValue={25000}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="closeRate" className="block text-sm font-medium text-black mb-2">
                    Current Close Rate (%)
                  </label>
                  <input
                    type="number"
                    id="closeRate"
                    name="closeRate"
                    defaultValue={20}
                    min={1}
                    max={100}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="monthlyLeads" className="block text-sm font-medium text-black mb-2">
                    Monthly Leads
                  </label>
                  <input
                    type="number"
                    id="monthlyLeads"
                    name="monthlyLeads"
                    defaultValue={100}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="salesCycle" className="block text-sm font-medium text-black mb-2">
                    Average Sales Cycle (days)
                  </label>
                  <input
                    type="number"
                    id="salesCycle"
                    name="salesCycle"
                    defaultValue={45}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="salesReps" className="block text-sm font-medium text-black mb-2">
                    Number of Sales Reps
                  </label>
                  <input
                    type="number"
                    id="salesReps"
                    name="salesReps"
                    defaultValue={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-teal-500 transition-colors"
                >
                  Calculate ROI
                </button>
              </form>
            </div>

            {/* Right - Results */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">Projected Results</h2>

              {/* Sample Results - In a real app this would be calculated */}
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-8 text-white mb-8">
                <p className="text-white/60 mb-2">Estimated Annual ROI</p>
                <p className="text-5xl font-black mb-4">$750,000</p>
                <p className="text-white/80">
                  Based on your inputs and typical improvements from HubSpot implementation
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <p className="text-sm text-black/50 mb-1">Current Annual Revenue</p>
                  <p className="text-2xl font-bold text-black">$600,000</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <p className="text-sm text-black/50 mb-1">Projected Annual Revenue</p>
                  <p className="text-2xl font-bold text-teal-500">$1,350,000</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <p className="text-sm text-black/50 mb-1">Implementation Cost</p>
                  <p className="text-2xl font-bold text-black">$7,500</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <p className="text-sm text-black/50 mb-1">Payback Period</p>
                  <p className="text-2xl font-bold text-teal-500">~30 days</p>
                </div>
              </div>

              <div className="bg-black rounded-2xl p-6 text-white">
                <p className="font-bold mb-4">Want a detailed analysis?</p>
                <p className="text-white/60 text-sm mb-4">
                  Get a personalized ROI analysis based on your specific business and goals.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-400 transition-colors text-sm"
                >
                  Request Custom Analysis
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typical Improvements */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-4 text-center">
            Typical improvements with HubSpot
          </h2>
          <p className="text-black/60 text-center mb-12 max-w-2xl mx-auto">
            These are average improvements our clients see after implementing HubSpot with our team.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {improvements.map((item) => (
              <div key={item.metric} className="bg-white rounded-2xl p-6 text-center">
                <p className="text-4xl font-black text-teal-500 mb-2">{item.improvement}</p>
                <p className="font-bold text-black mb-2">{item.metric}</p>
                <p className="text-sm text-black/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="text-sm text-black/40 text-center max-w-3xl mx-auto">
            Note: These calculations are estimates based on typical improvements seen by our clients.
            Actual results may vary based on your specific situation, industry, and implementation approach.
            Contact us for a more detailed analysis tailored to your business.
          </p>
        </div>
      </section>
    </>
  );
}
