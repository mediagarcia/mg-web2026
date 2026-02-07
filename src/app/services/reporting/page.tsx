import { Metadata } from "next";
import { CTABanner } from "@/components/sections";
import Link from "next/link";
import { ServiceFAQ } from "@/components/service-page";
import { GradientOrb, MeshBackground, FadingGridPattern } from "@/components/ui/visuals";
import { getImageForSlot } from "@/lib/images/get-image-for-slot";

import { PageHeaderWithPreview } from "@/components/PageHeaderWithPreview";

export const metadata: Metadata = {
  title: "Reporting & Analytics | Media Garcia",
  description: "Custom dashboards and attribution that connect marketing spend to closed revenue. Know what's working—on HubSpot, Salesforce, or any platform.",
};

const stats = [
  { value: "$2.4M", label: "Avg Attributed Revenue Found" },
  { value: "85%", label: "Faster Report Generation" },
  { value: "40%", label: "Budget Reallocation Impact" },
  { value: "100%", label: "Executive Visibility" },
];

const capabilities = [
  {
    title: "Executive Dashboards",
    description: "Give leadership real-time visibility into the metrics that matter—revenue, pipeline, and performance trends at a glance.",
    features: ["Revenue tracking", "Pipeline health", "Win/loss analysis", "Forecast visibility"],
  },
  {
    title: "Marketing Attribution",
    description: "Know exactly which campaigns drive revenue—not just leads—so you can double down on what works and cut what doesn't.",
    features: ["Multi-touch attribution", "Campaign ROI", "Source tracking", "Revenue influence"],
  },
  {
    title: "Sales Performance Analytics",
    description: "Track rep performance, pipeline velocity, and conversion rates to identify coaching opportunities and best practices.",
    features: ["Rep dashboards", "Activity tracking", "Stage conversion", "Forecast accuracy"],
  },
  {
    title: "Customer Success Metrics",
    description: "Monitor customer health, renewal risk, and expansion opportunities with purpose-built CS dashboards.",
    features: ["Health scoring", "Churn prediction", "Renewal pipeline", "NPS tracking"],
  },
  {
    title: "Funnel Analysis",
    description: "Understand where prospects drop off and which stages need optimization with detailed funnel visualizations.",
    features: ["Stage conversion rates", "Time in stage", "Drop-off analysis", "Velocity tracking"],
  },
  {
    title: "Automated Report Delivery",
    description: "Get the right reports to the right people at the right time with scheduled delivery and alerting.",
    features: ["Scheduled reports", "Email delivery", "Slack integration", "Threshold alerts"],
  },
];

const industryUseCases = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    industry: "Healthcare & Life Sciences",
    description: "Track patient acquisition cost by source, provider referral performance, and marketing attribution across long consideration cycles while maintaining HIPAA compliance.",
    features: ["Patient acquisition cost", "Referral source tracking", "Provider performance", "Compliance-aware reporting"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    industry: "IT Services & Technology",
    description: "Build multi-touch attribution for 6-12 month sales cycles, pipeline velocity tracking by segment, and accurate forecasting for complex enterprise deals.",
    features: ["Long-cycle attribution", "Segment analysis", "Pipeline velocity", "Forecast accuracy tracking"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    industry: "B2B SaaS",
    description: "Track MRR/ARR metrics, expansion revenue attribution, customer health scoring, and churn prediction with purpose-built SaaS dashboards.",
    features: ["MRR/ARR tracking", "Expansion attribution", "Customer health", "Churn prediction"],
  },
];

const process = [
  { step: "01", title: "Requirements Discovery", description: "Understand what decisions you need to make and what data you need to make them." },
  { step: "02", title: "Data Audit", description: "Assess data quality, identify gaps, and plan any cleanup or enrichment needed." },
  { step: "03", title: "Dashboard Design", description: "Design dashboards around your specific questions, not generic templates." },
  { step: "04", title: "Build & Validate", description: "Build reports and dashboards, validate data accuracy, and iterate based on feedback." },
];

const caseStudy = {
  metric: "Proved $2.4M in Marketing Attribution",
  industry: "Healthcare Tech Company",
  challenge: "CMO couldn't prove marketing's revenue impact to the board. Budget was at risk. Marketing was generating leads, but the connection to closed deals was invisible.",
  solution: "Built multi-touch attribution model connecting marketing activities to closed-won deals across their 6-month average sales cycle. Created executive dashboard showing marketing-sourced vs. marketing-influenced revenue with full transparency.",
  result: "Proved $2.4M in marketing-sourced revenue that was previously unattributed. Marketing budget increased 40% the following quarter. CMO now presents attribution data at every board meeting.",
};

const faqs = [
  {
    question: "What platforms can you build dashboards on?",
    answer: "We build reporting and analytics on HubSpot (our specialty), Salesforce, and we can integrate data from multiple sources into tools like Databox, Google Looker Studio, or custom solutions. The platform depends on your needs and existing tech stack.",
  },
  {
    question: "How do you handle multi-touch attribution?",
    answer: "We implement attribution models that match your sales cycle—whether that's first-touch, last-touch, linear, time-decay, or custom models. For longer B2B cycles, we typically recommend models that give appropriate credit to both awareness and closing activities.",
  },
  {
    question: "Can you connect data from multiple systems?",
    answer: "Yes. Most of our clients have data spread across multiple systems. We can pull data from CRMs, marketing automation, product analytics, billing systems, and more into unified dashboards that give you the complete picture.",
  },
  {
    question: "How accurate is the attribution data?",
    answer: "Attribution accuracy depends on data quality and tracking setup. We audit your current tracking, identify gaps, and implement proper attribution before building dashboards. We'll be honest about what can and can't be accurately attributed.",
  },
  {
    question: "Who gets access to the dashboards?",
    answer: "We design dashboards for different audiences—executive summaries for leadership, detailed performance dashboards for managers, and operational dashboards for individual contributors. Access is configured based on your team structure and data sensitivity.",
  },
  {
    question: "How long does a reporting project take?",
    answer: "Most reporting projects take 3-6 weeks depending on complexity. Simple dashboard builds can be done in 2-3 weeks. Complex multi-system attribution with data cleanup typically takes 6-8 weeks. We'll scope it based on your specific requirements.",
  },
];

const relatedServices = [
  {
    title: "Marketing Automation",
    description: "Get proper tracking in place so your attribution data is accurate and actionable.",
    href: "/services/marketing-automation",
  },
  {
    title: "Sales Enablement",
    description: "Build the sales systems that generate the data your dashboards need.",
    href: "/services/sales-enablement",
  },
  {
    title: "Custom Integrations",
    description: "Connect data from multiple systems into unified dashboards.",
    href: "/services/integrations",
  },
];

export default function ReportingPage() {
  const heroImage = getImageForSlot("service-reporting");

  return (
    <>
      <PageHeaderWithPreview
        badge="Service"
        title="Reporting & Analytics"
        description="Custom dashboards and attribution that connect marketing spend to closed revenue. Know what's working—on HubSpot, Salesforce, or any platform."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Reporting & Analytics", href: "/services/reporting" },
        ]}
        defaultImage={heroImage}
        slot="service-reporting"
        imageAlt="Data analytics dashboard with charts and metrics"
        duotoneColor="teal"
      />

      {/* Pain Point Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-6">
              Your CEO asks &quot;Which campaigns drive revenue?&quot; You open a spreadsheet and start guessing.
            </h2>
            <p className="text-lg text-black/60 leading-relaxed mb-6">
              You know marketing is working. Leads come in, some become customers. But when leadership asks for the connection between marketing spend and revenue, the best you can offer is educated guesses and activity metrics that don&apos;t prove impact.
            </p>
            <p className="text-lg text-black/80 font-medium">
              We build reporting that closes that gap. Attribution that connects campaigns to closed deals. Dashboards that show what&apos;s working. Analytics that prove marketing&apos;s value in dollars—not just leads.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl lg:text-5xl font-black text-teal-500">{stat.value}</p>
                <p className="text-white/60 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
        <FadingGridPattern type="dots" color="gray" opacity={0.08} spacing={28} fadeDirection="both" />
        <GradientOrb color="teal" size="xl" className="-top-48 -right-48 opacity-30" intensity="subtle" blur="xl" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              What We Build
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              Reporting that drives decisions
            </h2>
            <p className="text-lg text-black/60 max-w-2xl">
              We build reporting on HubSpot, Salesforce, or your platform of choice—designed around the decisions you need to make, not generic templates.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability) => (
              <div key={capability.title} className="bg-white rounded-2xl p-8 group hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-black mb-3">{capability.title}</h3>
                <p className="text-black/60 mb-6 leading-relaxed">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-black/70">
                      <svg className="w-4 h-4 text-teal-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Industry Use Cases */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Industry Expertise
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              Analytics built for your business model
            </h2>
            <p className="text-lg text-black/60 max-w-2xl">
              Different industries have different metrics that matter. We build reporting around your specific KPIs and business model.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {industryUseCases.map((useCase) => (
              <div key={useCase.industry} className="bg-gray-50 rounded-2xl p-8 group hover:bg-teal-500/5 transition-colors">
                <div className="w-16 h-16 rounded-xl bg-teal-500/10 text-teal-500 flex items-center justify-center mb-6 group-hover:bg-teal-500 group-hover:text-white transition-all">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{useCase.industry}</h3>
                <p className="text-black/60 mb-6 leading-relaxed">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-black/70">
                      <svg className="w-4 h-4 text-teal-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Our Process
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              How we build your analytics
            </h2>
            <p className="text-lg text-black/60 max-w-2xl">
              A structured approach that starts with understanding your questions—not jumping straight into dashboards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-teal-500/20 -translate-x-4" />
                )}
                <span className="text-6xl font-black text-teal-500/20">{item.step}</span>
                <h3 className="text-xl font-bold text-black mt-4 mb-2">{item.title}</h3>
                <p className="text-black/60 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Case Study */}
      <section className="py-20 lg:py-32 bg-black text-white relative overflow-hidden">
        <MeshBackground />
        <GradientOrb color="teal" size="xl" className="-top-32 -left-32 opacity-30" intensity="medium" blur="xl" />
        <GradientOrb color="purple" size="lg" className="bottom-0 right-1/4 opacity-20" intensity="subtle" blur="xl" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
                Case Study
              </span>
              <h2 className="text-3xl lg:text-4xl font-black mb-4">
                {caseStudy.metric}
              </h2>
              <p className="text-sm text-white/40 uppercase tracking-wider mb-8">
                {caseStudy.industry}
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-teal-500 mb-2">Challenge</h4>
                  <p className="text-white/70">{caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="font-bold text-teal-500 mb-2">Solution</h4>
                  <p className="text-white/70">{caseStudy.solution}</p>
                </div>
                <div>
                  <h4 className="font-bold text-teal-500 mb-2">Result</h4>
                  <p className="text-white/70">{caseStudy.result}</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-4xl font-black text-teal-500">$2.4M</p>
                  <p className="text-white/60 text-sm mt-2">Revenue Attributed</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-teal-500">40%</p>
                  <p className="text-white/60 text-sm mt-2">Budget Increase</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-teal-500">6 mo</p>
                  <p className="text-white/60 text-sm mt-2">Attribution Window</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-teal-500">100%</p>
                  <p className="text-white/60 text-sm mt-2">Board Visibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
                Common Questions
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-black mb-6">
                Reporting & analytics FAQ
              </h2>
              <p className="text-lg text-black/60 leading-relaxed mb-8">
                Everything you need to know about building reporting that proves value. Have a question we didn&apos;t answer?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-teal-500 font-medium hover:text-teal-600 transition-colors group"
              >
                Get in touch
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <ServiceFAQ faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Related Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              Better data starts upstream
            </h2>
            <p className="text-lg text-black/60 max-w-2xl">
              Great reporting requires good data. These services ensure you&apos;re collecting the right data to begin with.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {relatedServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white rounded-2xl p-8 group hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-teal-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-black/60 mb-6">{service.description}</p>
                <span className="inline-flex items-center gap-2 text-teal-500 font-medium">
                  Learn more
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
