import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";
import { ServiceFAQ } from "@/components/service-page";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI-Powered Automation | Media Garcia",
  description: "Unlock AI features in HubSpot, Salesforce, and your CRM. Predictive scoring, intelligent workflows, AI chatbots—built for healthcare, IT, and SaaS.",
};

const stats = [
  { value: "80%", label: "Less Manual Work" },
  { value: "3x", label: "Faster Lead Response" },
  { value: "40%", label: "Better Conversion" },
  { value: "24/7", label: "Always-On Engagement" },
];

const aiCapabilities = [
  {
    title: "Predictive Lead Scoring",
    description: "Use AI to identify your most promising leads based on behavior, fit, and engagement patterns. Focus sales energy where it matters.",
    features: ["Behavioral scoring", "Fit analysis", "Engagement tracking", "Priority ranking"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Intelligent Workflows",
    description: "Build automation that responds to behavior patterns, branches based on engagement, and optimizes over time with A/B testing.",
    features: ["Behavioral triggers", "Multi-branch logic", "A/B testing", "Self-optimization"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "AI Chatbots",
    description: "Deploy intelligent chatbots that qualify leads, answer questions, and book meetings—24/7 without human intervention.",
    features: ["Lead qualification", "FAQ automation", "Meeting scheduling", "Seamless handoff"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "AI Content Generation",
    description: "Generate emails, blog posts, and social content in your brand voice. AI drafts, you review—10x faster content creation.",
    features: ["Email copy", "Blog drafts", "Social posts", "Brand voice training"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Data Enrichment",
    description: "Automatically research and enrich contact and company records. AI fills in the gaps so your team has complete profiles.",
    features: ["Contact research", "Company data", "Tech stack detection", "Social profiles"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Customer Health Scoring",
    description: "Predict churn before it happens. AI monitors engagement, usage, and sentiment to flag at-risk accounts early.",
    features: ["Usage tracking", "Engagement scoring", "Churn prediction", "Alert automation"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

const industryUseCases = [
  {
    industry: "Healthcare & Life Sciences",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    useCases: [
      "AI chatbots for HIPAA-compliant patient intake and triage",
      "Automated appointment reminders with intelligent rescheduling",
      "Provider matching based on specialty, availability, and patient needs",
      "Predictive patient no-show modeling to optimize scheduling",
    ],
    linkHref: "/industries/healthcare",
  },
  {
    industry: "IT Services & Technology",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    useCases: [
      "AI lead scoring for technical buyers based on content engagement",
      "Automated RFP response drafting with AI-assisted proposals",
      "Intelligent lead routing based on deal size and technical requirements",
      "Predictive deal scoring for complex, multi-stakeholder sales",
    ],
    linkHref: "/industries/it-services",
  },
  {
    industry: "B2B SaaS",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    useCases: [
      "Product usage-based lead scoring for trial-to-paid conversion",
      "Churn prediction models that flag at-risk accounts early",
      "Automated customer health alerts triggering success outreach",
      "Expansion revenue identification based on feature adoption",
    ],
    linkHref: "/industries/saas",
  },
];

const processSteps = [
  {
    step: "01",
    title: "AI Audit",
    description: "We assess your current CRM and identify which AI features will actually move the needle. No generic recommendations—specific opportunities for your business.",
  },
  {
    step: "02",
    title: "Use Case Design",
    description: "We design AI automation around your team's workflow. You approve the approach before we build anything, ensuring adoption from day one.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "We build, test, and refine until the automation runs flawlessly. Every AI feature is tuned to your data patterns and business rules.",
  },
  {
    step: "04",
    title: "Training & Handoff",
    description: "Your team learns how to use and maintain the AI features. We provide runbooks and ongoing support so you're never stuck.",
  },
];

const caseStudy = {
  metric: "45% Increase in Qualified Leads",
  industry: "B2B SaaS Platform",
  challenge: "Sales team spent 60% of time on leads that never converted. No way to distinguish tire-kickers from serious buyers until deep in the sales process.",
  solution: "Implemented predictive lead scoring using product usage data, website behavior, and firmographic fit. AI model trained on 2 years of historical win/loss data.",
  result: "Sales now focuses on top-scored leads first. Qualified lead conversion increased 45%, sales cycle shortened by 12 days, and reps handle 30% more pipeline.",
};

const faqs = [
  {
    question: "Is AI safe for healthcare and regulated industries?",
    answer: "Yes. We implement AI features with full compliance consideration. For healthcare, this means HIPAA-compliant chatbots, audit logging, and PHI handling protocols. All AI interactions are logged and reviewable. We also implement guardrails to prevent AI from making decisions that require human oversight.",
  },
  {
    question: "Will AI replace our sales or marketing team?",
    answer: "No. AI handles repetitive tasks—data entry, initial qualification, content drafting—so your team focuses on high-value work like relationship building and strategic decisions. Think of AI as a force multiplier, not a replacement. The best results come from AI + human collaboration.",
  },
  {
    question: "Do you only work with HubSpot AI features?",
    answer: "No. While we have deep expertise in HubSpot Breeze AI, we implement AI automation on Salesforce Einstein, custom platforms, and third-party AI tools. We recommend the right AI approach for your stack, not just what's easiest for us.",
  },
  {
    question: "How accurate is AI lead scoring?",
    answer: "Accuracy depends on your data quality and volume. With good historical data (1000+ leads, 100+ conversions), AI scoring typically outperforms manual scoring by 30-50%. We validate accuracy during implementation and continuously refine based on outcomes.",
  },
  {
    question: "What if the AI makes mistakes?",
    answer: "All AI implementations include human oversight for critical decisions. AI makes recommendations, but final actions (especially customer-facing) can require human approval. We also build feedback loops so the AI improves over time based on corrections.",
  },
  {
    question: "How long until we see results?",
    answer: "Quick wins (chatbots, content generation) show results within 2-4 weeks. Predictive scoring and intelligent workflows typically need 4-8 weeks to implement and another 4-6 weeks to accumulate enough data to demonstrate impact. We set realistic expectations upfront.",
  },
];

const relatedServices = [
  {
    title: "Marketing Automation",
    description: "Combine AI with marketing automation for intelligent nurturing that adapts to prospect behavior.",
    href: "/services/marketing-automation",
  },
  {
    title: "Sales Enablement",
    description: "Pair AI scoring with sales sequences and playbooks for maximum pipeline efficiency.",
    href: "/services/sales-enablement",
  },
  {
    title: "Custom Integrations",
    description: "Connect AI features to your entire tech stack—product data, support tools, billing systems.",
    href: "/services/integrations",
  },
];

export default function AIAutomationPage() {
  return (
    <>
      <PageHeader
        badge="Service"
        title="AI-Powered Automation"
        description="Unlock AI features you're already paying for—predictive scoring, intelligent workflows, chatbots—on HubSpot, Salesforce, or any CRM."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "AI-Powered Automation", href: "/services/ai-automation" },
        ]}
      />

      {/* Pain Point Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-6">
              Paying for AI features you never touch?
            </h2>
            <p className="text-lg text-black/70 mb-6 leading-relaxed">
              Your CRM has AI built in—predictive scoring, content generation, intelligent automation. But it sits unused while your team sticks to manual processes. You&apos;re paying for capabilities that gather dust.
            </p>
            <p className="text-lg text-black/70 leading-relaxed">
              We change that. We implement AI features that your team will actually use, because we design them around how you work—not the other way around. No generic AI. No &quot;cool but useless&quot; demos. Just automation that moves revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-black text-teal-500">{stat.value}</p>
                <p className="text-white/60 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              AI Capabilities
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              AI features that actually get used
            </h2>
            <p className="text-lg text-black/60">
              From predictive scoring to content generation, we implement AI that fits your workflow and drives measurable results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((capability) => (
              <div key={capability.title} className="bg-gray-50 rounded-2xl p-8 group hover:bg-teal-500/5 transition-colors">
                <div className="w-16 h-16 rounded-xl bg-teal-500/10 text-teal-500 flex items-center justify-center mb-6 group-hover:bg-teal-500 group-hover:text-white transition-all">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{capability.title}</h3>
                <p className="text-black/60 mb-6">{capability.description}</p>
                <div className="flex flex-wrap gap-2">
                  {capability.features.map((feature) => (
                    <span key={feature} className="px-3 py-1 bg-white rounded-full text-sm text-black/70 border border-black/5">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Industry Expertise
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              AI built for your industry
            </h2>
            <p className="text-lg text-black/60 max-w-2xl mx-auto">
              Generic AI doesn&apos;t work. We implement AI features designed for the specific challenges of healthcare, IT services, and SaaS.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {industryUseCases.map((industry) => (
              <div key={industry.industry} className="bg-white rounded-2xl p-8">
                <div className="w-16 h-16 rounded-xl bg-teal-500/10 text-teal-500 flex items-center justify-center mb-6">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{industry.industry}</h3>
                <ul className="space-y-3 mb-6">
                  {industry.useCases.map((useCase, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-black/60">
                      <svg className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {useCase}
                    </li>
                  ))}
                </ul>
                <Link href={industry.linkHref} className="text-teal-500 font-medium hover:text-teal-600 transition-colors">
                  See industry solutions →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Our Process
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              How we implement AI that sticks
            </h2>
            <p className="text-lg text-black/60">
              AI adoption fails when it&apos;s forced on teams. We design AI around your workflow so adoption is natural.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step}>
                <span className="text-6xl font-black text-teal-500/20">{step.step}</span>
                <h3 className="text-xl font-bold text-black mt-4 mb-2">{step.title}</h3>
                <p className="text-black/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Case Study */}
      <section className="py-20 lg:py-32 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
                Case Study
              </span>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl lg:text-5xl font-black text-teal-500">{caseStudy.metric}</span>
              </div>
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 mb-6">
                {caseStudy.industry}
              </span>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-2">Challenge</h4>
                <p className="text-white/70">{caseStudy.challenge}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-2">Solution</h4>
                <p className="text-white/70">{caseStudy.solution}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-2">Result</h4>
                <p className="text-white/70">{caseStudy.result}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
                FAQ
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
                Common questions about AI automation
              </h2>
              <p className="text-lg text-black/60 mb-8">
                Everything you need to know about implementing AI in your revenue operations.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/80 transition-colors"
              >
                Get a Free AI Audit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Related Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black">
              Amplify your AI investment
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white rounded-2xl p-8 group hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-teal-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-black/60 mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-2 text-teal-500 font-medium">
                  Learn more
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
