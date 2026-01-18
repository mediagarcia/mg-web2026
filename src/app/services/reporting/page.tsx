import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Reporting & Analytics | Media Garcia",
  description: "Data-driven decision making with custom HubSpot reporting. We build dashboards that connect marketing spend to closed revenue.",
};

const dashboards = [
  {
    title: "Executive Dashboard",
    description: "High-level KPIs for leadership visibility into revenue performance.",
    metrics: ["Revenue pipeline", "Win rate trends", "Customer acquisition cost", "Marketing ROI"],
  },
  {
    title: "Marketing Dashboard",
    description: "Campaign performance and lead generation metrics.",
    metrics: ["Lead sources", "Conversion rates", "Email performance", "Content engagement"],
  },
  {
    title: "Sales Dashboard",
    description: "Pipeline health and rep performance tracking.",
    metrics: ["Deal velocity", "Stage conversion", "Rep activity", "Forecast accuracy"],
  },
  {
    title: "Customer Success Dashboard",
    description: "Customer health and retention metrics.",
    metrics: ["Customer health score", "NPS tracking", "Renewal pipeline", "Expansion revenue"],
  },
];

const features = [
  "Custom report builders",
  "Automated report delivery",
  "Multi-touch attribution",
  "Revenue attribution",
  "Funnel analysis",
  "Cohort reporting",
];

export default function ReportingPage() {
  return (
    <>
      <PageHeader
        badge="Service"
        title="Reporting & Analytics"
        description="Data-driven decision making with custom HubSpot dashboards. We connect marketing spend directly to closed revenue so you know what's working."
        breadcrumbs={[
          { label: "Services", href: "/services/reporting" },
          { label: "Reporting & Analytics", href: "/services/reporting" },
        ]}
      />

      {/* Dashboards */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12">Custom Dashboards We Build</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {dashboards.map((dashboard) => (
              <div key={dashboard.title} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-black mb-3">{dashboard.title}</h3>
                <p className="text-black/60 mb-6">{dashboard.description}</p>
                <ul className="grid grid-cols-2 gap-3">
                  {dashboard.metrics.map((metric) => (
                    <li key={metric} className="flex items-center gap-2 text-sm text-black/70">
                      <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-black mb-6">Advanced Reporting Features</h2>
              <p className="text-black/60 mb-8 leading-relaxed">
                Go beyond basic metrics with advanced reporting capabilities that reveal the true impact of your marketing and sales efforts.
              </p>
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-teal-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
              <h3 className="text-2xl font-bold text-black mb-6">What You&apos;ll Know</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-teal-500 pl-4">
                  <p className="font-bold text-black">Which campaigns drive revenue</p>
                  <p className="text-sm text-black/60">Not just leads—actual closed-won deals</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <p className="font-bold text-black">True customer acquisition cost</p>
                  <p className="text-sm text-black/60">Including sales time and marketing spend</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <p className="font-bold text-black">Pipeline health in real-time</p>
                  <p className="text-sm text-black/60">Predictive forecasting you can trust</p>
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
