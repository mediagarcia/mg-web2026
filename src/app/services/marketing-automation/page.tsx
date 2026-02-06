import { Metadata } from "next";
import { CTABanner } from "@/components/sections";
import Link from "next/link";
import { ServiceFAQ } from "@/components/service-page";
import { GradientOrb, MeshBackground, FadingGridPattern } from "@/components/ui/visuals";
import { getImageForSlot } from "@/lib/images/get-image-for-slot";
import { ServicePageWrapper } from "@/components/ServicePageWrapper";
import { PageHeaderWithPreview } from "@/components/PageHeaderWithPreview";

export const metadata: Metadata = {
  title: "Marketing Automation | Media Garcia",
  description: "Build marketing automation that proves ROI. Intelligent nurture campaigns, lead scoring, and attribution—on HubSpot, Salesforce, or any platform.",
};

const stats = [
  { value: "3x", label: "Lead-to-Customer Conversion" },
  { value: "60%", label: "Less Manual Work" },
  { value: "45%", label: "Higher Email Engagement" },
  { value: "24/7", label: "Always-On Marketing" },
];

const capabilities = [
  {
    title: "Lead Nurturing Workflows",
    description: "Build automated sequences that guide prospects from first touch to sales-ready—without manual follow-up.",
    features: ["Multi-step email campaigns", "Behavioral triggers", "Branch logic", "Drip sequences"],
  },
  {
    title: "Lead Scoring & Qualification",
    description: "Automatically identify your best leads so sales focuses on opportunities most likely to close.",
    features: ["Fit scoring", "Engagement scoring", "Score thresholds", "MQL/SQL automation"],
  },
  {
    title: "Personalization & Segmentation",
    description: "Deliver the right message to the right person at the right time with dynamic content and smart lists.",
    features: ["Dynamic content", "Smart segments", "Lifecycle stages", "Persona targeting"],
  },
  {
    title: "Campaign Attribution",
    description: "Know exactly which campaigns drive revenue—not just clicks—so you can double down on what works.",
    features: ["Multi-touch attribution", "Revenue attribution", "Campaign ROI", "Source tracking"],
  },
  {
    title: "A/B Testing & Optimization",
    description: "Continuously improve performance with systematic testing of subject lines, content, and send times.",
    features: ["Email A/B testing", "Landing page testing", "Send time optimization", "Performance analytics"],
  },
  {
    title: "Marketing-Sales Alignment",
    description: "Create seamless handoffs between marketing and sales with automated notifications and shared visibility.",
    features: ["Lead handoff automation", "Sales alerts", "Shared dashboards", "SLA tracking"],
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
    description: "Build physician nurturing campaigns, patient education sequences, and referral partner automation while maintaining strict compliance with healthcare marketing regulations.",
    features: ["Physician nurture sequences", "Patient education automation", "Referral partner campaigns", "Compliance-aware workflows"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    industry: "IT Services & Technology",
    description: "Nurture technical buyers through 6-12 month buying cycles with educational content sequences, technical resource delivery, and stakeholder-aware messaging.",
    features: ["Long-cycle nurture programs", "Technical content sequences", "Multi-stakeholder campaigns", "Event-triggered automation"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    industry: "B2B SaaS",
    description: "Build trial-to-paid conversion flows, expansion revenue campaigns, and customer health-triggered outreach that maximize LTV across the entire customer journey.",
    features: ["Trial conversion sequences", "Onboarding automation", "Expansion campaigns", "Churn prevention workflows"],
  },
];

const process = [
  { step: "01", title: "Marketing Audit", description: "Analyze your current marketing tech stack, campaigns, and conversion paths to identify the biggest opportunities." },
  { step: "02", title: "Strategy & Design", description: "Map your ideal buyer journey with nurture tracks, scoring models, and automation logic." },
  { step: "03", title: "Build & Implement", description: "Build workflows, segments, scoring, and attribution in your marketing platform." },
  { step: "04", title: "Test & Optimize", description: "Launch with A/B testing, monitor performance, and continuously optimize based on data." },
];

const caseStudy = {
  metric: "3x Lead-to-Customer Conversion",
  industry: "B2B SaaS Platform",
  challenge: "Trial users signed up but only 12% converted to paid. Marketing had no visibility into product usage, and sales couldn't prioritize who to contact.",
  solution: "Built behavioral automation triggered by feature usage, created personalized nurture paths based on use case, and implemented product-qualified lead scoring to prioritize sales outreach.",
  result: "Conversion rate increased from 12% to 37%. Sales involvement in trial conversions reduced by 60%. Marketing proved $1.2M in attributed pipeline in the first quarter.",
};

const faqs = [
  {
    question: "What marketing platforms do you work with?",
    answer: "We build marketing automation on HubSpot (our specialty as a Platinum Partner), Salesforce Marketing Cloud, Pardot, Marketo, and other major platforms. The principles of effective marketing automation are platform-agnostic—we'll implement them in whatever system you're using.",
  },
  {
    question: "How long does a marketing automation project take?",
    answer: "Most marketing automation projects take 4-8 weeks. A focused project like building a lead nurturing sequence might take 4 weeks. A full marketing automation transformation with scoring, attribution, and multiple nurture tracks typically runs 8-12 weeks. We scope based on your specific needs.",
  },
  {
    question: "Can you prove which campaigns drive revenue, not just leads?",
    answer: "Yes—that's exactly what we focus on. We implement multi-touch attribution that connects marketing activities to closed-won deals, not just form fills. You'll know which campaigns actually drive revenue so you can optimize spend accordingly.",
  },
  {
    question: "How do you handle lead scoring if we don't have much historical data?",
    answer: "We start with a hypothesis-based scoring model using industry best practices and your team's qualitative knowledge of what makes a good lead. Then we refine it based on actual conversion data as it accumulates. You don't need perfect data to start—the model improves over time.",
  },
  {
    question: "Will this work with our existing sales process?",
    answer: "Absolutely. We design marketing automation to complement and support your existing sales process, not replace it. We'll work with your sales team to understand what makes a qualified lead, when handoffs should happen, and what information they need to close deals.",
  },
  {
    question: "Do you create the content for nurture campaigns?",
    answer: "We can design the content strategy and workflow logic, and we partner with content specialists if you need help with copywriting. Many clients have existing content we can repurpose, or they prefer to write content themselves with our strategic guidance.",
  },
];

const relatedServices = [
  {
    title: "Sales Enablement",
    description: "Align your marketing automation with sales systems for seamless lead handoff and closed-loop reporting.",
    href: "/services/sales-enablement",
  },
  {
    title: "AI-Powered Automation",
    description: "Enhance your marketing with AI-driven personalization, predictive scoring, and intelligent content recommendations.",
    href: "/services/ai-automation",
  },
  {
    title: "Reporting & Analytics",
    description: "Get deeper attribution insights and executive dashboards that prove marketing's impact on revenue.",
    href: "/services/reporting",
  },
];

export default function MarketingAutomationPage() {
  const heroImage = getImageForSlot("service-marketing-automation");

  return (
    <ServicePageWrapper>
      <PageHeaderWithPreview
        badge="Service"
        title="Marketing Automation"
        description="Build marketing automation that proves ROI. Intelligent nurture campaigns, lead scoring, and attribution—on HubSpot, Salesforce, or any platform."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Marketing Automation", href: "/services/marketing-automation" },
        ]}
        defaultImage={heroImage}
        slot="service-marketing-automation"
        imageAlt="Marketing automation workflows"
        duotoneColor="teal"
      />

      {/* Pain Point Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-6">
              Your marketing team sends emails. But you can&apos;t prove which campaigns actually drive revenue.
            </h2>
            <p className="text-lg text-black/60 leading-relaxed mb-6">
              You know marketing generates leads. But when the CEO asks &quot;which campaigns drove last quarter&apos;s revenue?&quot; you open a spreadsheet and start guessing. Leads come in, some become customers, but the connection between marketing activity and closed deals is murky at best.
            </p>
            <p className="text-lg text-black/80 font-medium">
              We build marketing automation that closes the loop—from first touch to closed deal. Intelligent nurturing that guides prospects through your funnel. Scoring that identifies your best leads. Attribution that proves what&apos;s working.
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
              Marketing automation that drives revenue
            </h2>
            <p className="text-lg text-black/60 max-w-2xl">
              We build intelligent marketing automation on HubSpot, Salesforce, or your platform of choice—designed to convert leads, not just collect them.
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
              Marketing automation for your buyer journey
            </h2>
            <p className="text-lg text-black/60 max-w-2xl">
              Different industries have different buying cycles. We build automation that matches how your buyers actually make decisions.
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
              How we automate your marketing
            </h2>
            <p className="text-lg text-black/60 max-w-2xl">
              A strategic approach that starts with understanding your buyer journey—not jumping straight into workflows.
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
                  <p className="text-4xl font-black text-teal-500">37%</p>
                  <p className="text-white/60 text-sm mt-2">Trial Conversion Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-teal-500">3x</p>
                  <p className="text-white/60 text-sm mt-2">Conversion Improvement</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-teal-500">60%</p>
                  <p className="text-white/60 text-sm mt-2">Less Sales Involvement</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-teal-500">$1.2M</p>
                  <p className="text-white/60 text-sm mt-2">Attributed Pipeline (Q1)</p>
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
                Marketing automation FAQ
              </h2>
              <p className="text-lg text-black/60 leading-relaxed mb-8">
                Everything you need to know about building marketing automation that drives revenue. Have a question we didn&apos;t answer?
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
              Extend your marketing capabilities
            </h2>
            <p className="text-lg text-black/60 max-w-2xl">
              Marketing automation works best when aligned with sales and supported by analytics. These services amplify your results.
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
