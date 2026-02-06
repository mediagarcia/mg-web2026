import { Metadata } from "next";
import { CTABanner } from "@/components/sections";
import Link from "next/link";
import { ServiceFAQ } from "@/components/service-page";
import { GradientOrb, MeshBackground, FadingGridPattern } from "@/components/ui/visuals";
import { getImageForSlot } from "@/lib/images/get-image-for-slot";
import { ServicePageWrapper } from "@/components/ServicePageWrapper";
import { PageHeaderWithPreview } from "@/components/PageHeaderWithPreview";

export const metadata: Metadata = {
  title: "Sales Enablement | Media Garcia",
  description: "Build sales systems that turn your CRM into a revenue machine. Sequences, playbooks, and pipeline optimization—on HubSpot, Salesforce, or any CRM.",
};

const stats = [
  { value: "40%", label: "Shorter Sales Cycles" },
  { value: "2.5x", label: "More Qualified Meetings" },
  { value: "35%", label: "Higher Win Rates" },
  { value: "60%", label: "Less Admin Time" },
];

const capabilities = [
  {
    title: "Sales Sequences & Automation",
    description: "Build automated outreach sequences that nurture prospects without your reps manually sending each email.",
    features: ["Multi-touch email sequences", "Task automation", "Follow-up reminders", "Enrollment triggers"],
  },
  {
    title: "Pipeline Optimization",
    description: "Design deal stages and processes that match how you actually sell—not generic templates that don't fit.",
    features: ["Custom deal stages", "Stage requirements", "Pipeline analytics", "Forecast accuracy"],
  },
  {
    title: "Sales Playbooks",
    description: "Document what your best reps do so everyone can replicate their success consistently.",
    features: ["Call scripts & guides", "Objection handling", "Competitive battlecards", "Demo frameworks"],
  },
  {
    title: "Lead Scoring & Routing",
    description: "Route the right leads to the right reps at the right time based on fit, behavior, and capacity.",
    features: ["Behavioral scoring", "Fit scoring", "Round-robin routing", "Territory assignment"],
  },
  {
    title: "Meeting & Demo Optimization",
    description: "Reduce no-shows and improve demo-to-close rates with seamless scheduling and preparation workflows.",
    features: ["Calendar integration", "Meeting reminders", "Pre-meeting automation", "Post-demo follow-up"],
  },
  {
    title: "Sales Analytics & Coaching",
    description: "Give managers the visibility they need to coach effectively and leadership the data to forecast accurately.",
    features: ["Rep performance dashboards", "Activity tracking", "Conversion analytics", "Pipeline velocity"],
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
    description: "Navigate complex healthcare sales with provider-specific messaging, referral tracking, and compliance-aware workflows that respect the unique dynamics of healthcare buying.",
    features: ["Provider-specific sequences", "Referral source tracking", "Compliance documentation", "Multi-location deal management"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    industry: "IT Services & Technology",
    description: "Manage 6-12 month sales cycles with technical evaluation stages, multi-stakeholder engagement tracking, and proof-of-concept workflows built for enterprise deals.",
    features: ["Technical evaluation stages", "Stakeholder mapping", "POC tracking", "RFP response automation"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    industry: "B2B SaaS",
    description: "Build product-led growth + sales-assist hybrid motions with usage-based lead scoring, expansion revenue workflows, and customer health-triggered outreach.",
    features: ["Product usage scoring", "Trial conversion sequences", "Expansion revenue plays", "Customer health alerts"],
  },
];

const process = [
  { step: "01", title: "Sales Audit", description: "We analyze your current sales process, CRM setup, and team performance to identify the biggest opportunities." },
  { step: "02", title: "Process Design", description: "Map your ideal sales process with stages, activities, and automation that match how your best reps work." },
  { step: "03", title: "Build & Configure", description: "Implement sequences, playbooks, scoring, and dashboards in your CRM of choice." },
  { step: "04", title: "Train & Launch", description: "Train your sales team on the new systems and ensure adoption through hands-on enablement." },
];

const caseStudy = {
  metric: "40% Shorter Sales Cycle",
  industry: "IT Services Company",
  challenge: "90-day average sales cycle with deals frequently stalling at technical evaluation. Reps spent too much time on manual follow-up and not enough on high-value selling activities.",
  solution: "Built automated sequences with technical content delivery triggered by deal stage, implemented stakeholder mapping to identify missing decision-makers, and created a POC tracking workflow.",
  result: "Sales cycle reduced from 90 to 54 days. 2.5x more qualified demos booked per rep. Win rate increased from 22% to 31%.",
};

const faqs = [
  {
    question: "What CRM platforms do you work with for sales enablement?",
    answer: "We build sales enablement systems on HubSpot (our specialty as a Platinum Partner), Salesforce, Pipedrive, and other major CRMs. The principles of good sales enablement are platform-agnostic—we'll implement them in whatever system you're using or help you choose the right one.",
  },
  {
    question: "How long does a sales enablement project take?",
    answer: "Most sales enablement projects take 4-8 weeks depending on complexity. A focused project like building sequences and playbooks might take 4 weeks. A full sales transformation with pipeline redesign, scoring, and training typically runs 6-8 weeks. We'll scope it based on your specific needs.",
  },
  {
    question: "Will this work for complex B2B sales with long cycles?",
    answer: "Absolutely—that's where sales enablement provides the most value. Long sales cycles with multiple stakeholders require structured processes, consistent follow-up, and visibility into deal health. We've worked with companies selling 6-12 month enterprise deals and helped them maintain momentum through complex evaluation processes.",
  },
  {
    question: "How do you handle sales teams that resist new processes?",
    answer: "Adoption is built into our methodology, not an afterthought. We design systems that make reps' jobs easier, not harder. We involve top performers in the design process, train by role rather than by feature, and create quick wins that demonstrate value immediately. Our clients typically see 80%+ adoption within 30 days.",
  },
  {
    question: "Can you help if we don't have a defined sales process?",
    answer: "Yes, and that's often where we provide the most value. We'll work with your leadership and top performers to document what's actually working, then build a repeatable process around it. You don't need a perfect process to start—we'll help you create one.",
  },
  {
    question: "Do you provide ongoing support after implementation?",
    answer: "Yes, we offer flexible ongoing support packages. Many clients continue working with us for sequence optimization, new playbook development, training new reps, and continuous improvement based on performance data. We're partners, not just implementers.",
  },
];

const relatedServices = [
  {
    title: "Marketing Automation",
    description: "Align sales and marketing with automated lead nurturing that warms up prospects before they hit your pipeline.",
    href: "/services/marketing-automation",
  },
  {
    title: "AI-Powered Automation",
    description: "Enhance your sales enablement with AI lead scoring, predictive analytics, and intelligent automation.",
    href: "/services/ai-automation",
  },
  {
    title: "Reporting & Analytics",
    description: "Get the dashboards and attribution you need to understand what's working and optimize performance.",
    href: "/services/reporting",
  },
];

export default function SalesEnablementPage() {
  const heroImage = getImageForSlot("service-sales-enablement");

  return (
    <ServicePageWrapper>
      <PageHeaderWithPreview
        badge="Service"
        title="Sales Enablement"
        description="Build sales systems that turn your CRM into a revenue machine. Sequences, playbooks, and pipeline optimization—on HubSpot, Salesforce, or any CRM."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Sales Enablement", href: "/services/sales-enablement" },
        ]}
        defaultImage={heroImage}
        slot="service-sales-enablement"
        imageAlt="Sales pipeline and enablement tools"
        duotoneColor="teal"
      />

      {/* Pain Point Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-6">
              Your sales team has the tools. They still get inconsistent results.
            </h2>
            <p className="text-lg text-black/60 leading-relaxed mb-6">
              Your top reps close deals. Everyone else struggles to keep up. The difference isn&apos;t talent—it&apos;s that your best performers have figured out a system, and nobody else knows what it is.
            </p>
            <p className="text-lg text-black/80 font-medium">
              We document what your best reps do, then build systems that help everyone replicate their success. Sequences that follow up automatically. Playbooks that guide every call. Scoring that prioritizes the right opportunities.
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
              Sales systems that actually get used
            </h2>
            <p className="text-lg text-black/60 max-w-2xl">
              We build sales enablement on HubSpot, Salesforce, or your CRM of choice—designed around how your team sells, not how software companies think you should sell.
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
              Sales enablement built for how you sell
            </h2>
            <p className="text-lg text-black/60 max-w-2xl">
              Generic playbooks create generic results. We build sales systems with industry-specific stages, messaging, and workflows.
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
              How we enable your sales team
            </h2>
            <p className="text-lg text-black/60 max-w-2xl">
              A structured approach that starts with understanding how you sell—not imposing generic best practices.
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
                  <p className="text-4xl font-black text-teal-500">40%</p>
                  <p className="text-white/60 text-sm mt-2">Shorter Sales Cycle</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-teal-500">2.5x</p>
                  <p className="text-white/60 text-sm mt-2">More Qualified Demos</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-teal-500">31%</p>
                  <p className="text-white/60 text-sm mt-2">Win Rate (up from 22%)</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-teal-500">54</p>
                  <p className="text-white/60 text-sm mt-2">Days Avg Sales Cycle</p>
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
                Sales enablement FAQ
              </h2>
              <p className="text-lg text-black/60 leading-relaxed mb-8">
                Everything you need to know about building sales systems that drive revenue. Have a question we didn&apos;t answer?
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
              Extend your sales capabilities
            </h2>
            <p className="text-lg text-black/60 max-w-2xl">
              Sales enablement works best when integrated with marketing and supported by data. These services amplify your results.
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
    </ServicePageWrapper>
  );
}
