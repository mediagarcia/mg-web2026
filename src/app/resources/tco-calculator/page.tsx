import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "CRM Total Cost of Ownership Calculator | Media Garcia",
  description: "Compare the total cost of ownership between HubSpot, Salesforce, and other CRM platforms.",
};

const platforms = [
  { name: "HubSpot", color: "#FF7A59" },
  { name: "Salesforce", color: "#00A1E0" },
  { name: "Microsoft Dynamics", color: "#002050" },
  { name: "Pipedrive", color: "#1A1A1A" },
];

const costFactors = [
  {
    category: "Software Costs",
    items: [
      { name: "Base subscription", description: "Monthly platform fees" },
      { name: "User licenses", description: "Per-seat licensing costs" },
      { name: "Add-on features", description: "Premium features and modules" },
      { name: "API & integrations", description: "Connection and sync costs" },
    ],
  },
  {
    category: "Implementation Costs",
    items: [
      { name: "Setup & configuration", description: "Initial platform setup" },
      { name: "Data migration", description: "Moving data from existing systems" },
      { name: "Custom development", description: "Customizations and integrations" },
      { name: "Training", description: "Team onboarding and education" },
    ],
  },
  {
    category: "Ongoing Costs",
    items: [
      { name: "Admin time", description: "Internal management overhead" },
      { name: "Maintenance", description: "Updates and ongoing optimization" },
      { name: "Support", description: "Vendor and partner support" },
      { name: "Consulting", description: "Expert assistance as needed" },
    ],
  },
];

const comparison = [
  {
    category: "Year 1 Total",
    hubspot: "$45,000",
    salesforce: "$78,000",
    description: "Including implementation",
  },
  {
    category: "Year 2 Total",
    hubspot: "$24,000",
    salesforce: "$52,000",
    description: "Ongoing costs only",
  },
  {
    category: "Year 3 Total",
    hubspot: "$26,000",
    salesforce: "$58,000",
    description: "With typical growth",
  },
  {
    category: "3-Year TCO",
    hubspot: "$95,000",
    salesforce: "$188,000",
    description: "Total investment",
  },
];

export default function TCOCalculatorPage() {
  return (
    <>
      <PageHeader
        badge="Calculator"
        title="CRM Total Cost of Ownership"
        description="Compare the true cost of different CRM platforms over time, including hidden costs most vendors don't mention."
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "TCO Calculator", href: "/resources/tco-calculator" },
        ]}
      />

      {/* Calculator Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Input Form */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">Your requirements</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="users" className="block text-sm font-medium text-black mb-2">
                    Number of Users
                  </label>
                  <input
                    type="number"
                    id="users"
                    name="users"
                    defaultValue={25}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="contacts" className="block text-sm font-medium text-black mb-2">
                    Database Size (contacts)
                  </label>
                  <input
                    type="number"
                    id="contacts"
                    name="contacts"
                    defaultValue={50000}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="platform" className="block text-sm font-medium text-black mb-2">
                    Compare Against
                  </label>
                  <select
                    id="platform"
                    name="platform"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="salesforce">Salesforce</option>
                    <option value="dynamics">Microsoft Dynamics</option>
                    <option value="pipedrive">Pipedrive</option>
                    <option value="zoho">Zoho CRM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Features Needed
                  </label>
                  <div className="space-y-2">
                    {["Marketing Hub", "Sales Hub", "Service Hub", "CMS Hub", "Operations Hub"].map((hub) => (
                      <label key={hub} className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          name="features"
                          value={hub.toLowerCase().replace(" ", "-")}
                          defaultChecked={hub === "Sales Hub" || hub === "Marketing Hub"}
                          className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
                        />
                        <span className="text-black/70">{hub}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-black mb-2">
                    Comparison Period
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="1">1 Year</option>
                    <option value="3" selected>3 Years</option>
                    <option value="5">5 Years</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-teal-500 transition-colors"
                >
                  Calculate TCO
                </button>
              </form>
            </div>

            {/* Right - Comparison Results */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">3-Year Cost Comparison</h2>

              {/* Summary Cards */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-[#FF7A59] to-[#FF5C35] rounded-2xl p-6 text-white">
                  <p className="text-white/80 text-sm mb-1">HubSpot</p>
                  <p className="text-3xl font-black">$95,000</p>
                  <p className="text-white/60 text-sm mt-2">3-Year TCO</p>
                </div>
                <div className="bg-gradient-to-br from-[#00A1E0] to-[#0070D2] rounded-2xl p-6 text-white">
                  <p className="text-white/80 text-sm mb-1">Salesforce</p>
                  <p className="text-3xl font-black">$188,000</p>
                  <p className="text-white/60 text-sm mt-2">3-Year TCO</p>
                </div>
              </div>

              {/* Savings Highlight */}
              <div className="bg-teal-500 rounded-2xl p-6 text-white text-center mb-8">
                <p className="text-white/80 mb-1">Potential Savings with HubSpot</p>
                <p className="text-4xl font-black">$93,000</p>
                <p className="text-white/60 text-sm mt-2">49% lower total cost of ownership</p>
              </div>

              {/* Detailed Breakdown */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-black mb-4">Cost Breakdown</h3>
                <table className="w-full">
                  <thead>
                    <tr className="text-sm text-black/50">
                      <th className="text-left pb-3">Category</th>
                      <th className="text-right pb-3">HubSpot</th>
                      <th className="text-right pb-3">Salesforce</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {comparison.map((row) => (
                      <tr key={row.category} className="border-t border-gray-200">
                        <td className="py-3">
                          <p className="font-medium text-black">{row.category}</p>
                          <p className="text-black/40 text-xs">{row.description}</p>
                        </td>
                        <td className="text-right py-3 font-medium text-black">{row.hubspot}</td>
                        <td className="text-right py-3 font-medium text-black">{row.salesforce}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-4 text-center">
            What goes into TCO?
          </h2>
          <p className="text-black/60 text-center mb-12 max-w-2xl mx-auto">
            True CRM costs go far beyond the subscription price. Here&apos;s what we factor in.
          </p>
          <div className="grid lg:grid-cols-3 gap-8">
            {costFactors.map((factor) => (
              <div key={factor.category} className="bg-white rounded-2xl p-8">
                <h3 className="text-xl font-bold text-black mb-6">{factor.category}</h3>
                <ul className="space-y-4">
                  {factor.items.map((item) => (
                    <li key={item.name} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="font-medium text-black">{item.name}</p>
                        <p className="text-sm text-black/50">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">Want a detailed TCO analysis?</h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Get a customized total cost of ownership comparison based on your specific requirements and current tech stack.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-full font-medium hover:bg-teal-400 transition-colors"
          >
            Request Custom Analysis
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
