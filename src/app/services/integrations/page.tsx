import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Custom Integrations | Media Garcia",
  description: "Connect HubSpot with your existing tech stack through custom APIs and middleware solutions. Seamless data flow across all your tools.",
};

const integrationTypes = [
  {
    title: "Native Integrations",
    description: "Leverage HubSpot's 1,000+ app marketplace integrations for common tools.",
    examples: ["Slack", "Zoom", "Google Workspace", "Microsoft 365"],
  },
  {
    title: "Custom API Integrations",
    description: "Build custom connections for proprietary systems or unique requirements.",
    examples: ["ERP systems", "Custom databases", "Legacy software", "Industry tools"],
  },
  {
    title: "Middleware Solutions",
    description: "Connect multiple systems with intelligent data routing and transformation.",
    examples: ["Zapier automation", "Make workflows", "Custom middleware", "iPaaS solutions"],
  },
  {
    title: "Data Sync",
    description: "Real-time or scheduled data synchronization between HubSpot and other platforms.",
    examples: ["Bi-directional sync", "Real-time updates", "Scheduled batches", "Conflict resolution"],
  },
];

const commonIntegrations = [
  { category: "Sales Tools", tools: ["Salesforce", "LinkedIn Sales Nav", "ZoomInfo", "Gong"] },
  { category: "Marketing", tools: ["Google Ads", "Facebook Ads", "Mailchimp", "Unbounce"] },
  { category: "Communication", tools: ["Slack", "Microsoft Teams", "Zoom", "Calendly"] },
  { category: "Finance", tools: ["QuickBooks", "Stripe", "PayPal", "Xero"] },
  { category: "Support", tools: ["Zendesk", "Intercom", "Freshdesk", "Jira"] },
  { category: "Analytics", tools: ["Google Analytics", "Mixpanel", "Amplitude", "Datadog"] },
];

export default function IntegrationsPage() {
  return (
    <>
      <PageHeader
        badge="Service"
        title="Custom Integrations"
        description="Connect your tech stack to HubSpot with custom integrations that ensure seamless data flow across all your business tools."
        breadcrumbs={[
          { label: "Services", href: "/services/integrations" },
          { label: "Custom Integrations", href: "/services/integrations" },
        ]}
      />

      {/* Integration Types */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12">Integration Approaches</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {integrationTypes.map((type) => (
              <div key={type.title} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-black mb-3">{type.title}</h3>
                <p className="text-black/60 mb-6">{type.description}</p>
                <div className="flex flex-wrap gap-2">
                  {type.examples.map((example) => (
                    <span key={example} className="px-3 py-1 bg-white rounded-full text-sm text-black/70">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Integrations */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12">Popular Integrations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commonIntegrations.map((category) => (
              <div key={category.category} className="bg-white rounded-2xl p-6">
                <h3 className="text-lg font-bold text-black mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.tools.map((tool) => (
                    <li key={tool} className="flex items-center gap-2 text-sm text-black/60">
                      <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12">Our Integration Process</h2>
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Audit", description: "Map your current tech stack and identify integration needs" },
              { step: "02", title: "Design", description: "Architect the data flow and integration approach" },
              { step: "03", title: "Build", description: "Develop and test the integration thoroughly" },
              { step: "04", title: "Monitor", description: "Ongoing monitoring and maintenance to ensure reliability" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="text-6xl font-black text-teal-500/20">{item.step}</span>
                <h3 className="text-xl font-bold text-black mt-4 mb-2">{item.title}</h3>
                <p className="text-black/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
