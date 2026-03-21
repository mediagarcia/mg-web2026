import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";
import { ServiceFAQ } from "@/components/service-page";
import Link from "next/link";
import { GradientOrb, MeshBackground, FadingGridPattern } from "@/components/ui/visuals";
import { getImageForSlot } from "@/lib/images/get-image-for-slot";
import { DuotoneImage } from "@/components/ui/DuotoneImage";
import { GeometricOverlay } from "@/components/ui/GeometricOverlay";

export const metadata: Metadata = {
  title: "AI Agents for HubSpot | Media Garcia",
  description: "Custom AI agents that work inside HubSpot to automate complex tasks — deal assistance, data enrichment, email triage, meeting prep, and more.",
  alternates: { canonical: "/services/ai-agents" },
};

const stats = [
  { value: "30+", label: "Edge Functions" },
  { value: "24/7", label: "Always Working" },
  { value: "5min", label: "Avg Response" },
  { value: "Zero", label: "Manual Steps" },
];

const agentCapabilities = [
  {
    title: "Deal Assistance Agent",
    description: "Monitors deal stages, suggests next actions, and alerts on stale pipeline so nothing falls through the cracks.",
    features: ["Stage monitoring", "Next-best-action", "Stale deal alerts", "Win probability"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Data Enrichment Agent",
    description: "Researches contacts and companies using multiple sources, fills in missing fields automatically.",
    features: ["Contact research", "Company intel", "Field population", "Source verification"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Email Triage Agent",
    description: "Reads inbound emails, categorizes intent, routes to the right team, and drafts responses automatically.",
    features: ["Intent classification", "Smart routing", "Draft replies", "Priority scoring"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: "Meeting Prep Agent",
    description: "Before every call, compiles recent activity, open deals, recent tickets, and talking points for your team.",
    features: ["Activity summary", "Deal context", "Ticket alerts", "Talking points"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>
    ),
  },
  {
    title: "Lifecycle Agent",
    description: "Monitors contact behavior to automatically advance or regress lifecycle stages based on real engagement.",
    features: ["Engagement scoring", "Stage progression", "Re-engagement triggers", "Dormancy detection"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M21.015 4.356v4.992" />
      </svg>
    ),
  },
  {
    title: "Custom Agent Builder",
    description: "We build agents for your specific workflows — from proposal generation to compliance checks.",
    features: ["Custom logic", "API integrations", "HubSpot native", "Workflow triggers"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 21h18" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We map your team's repetitive tasks and identify where agents can save the most time.",
  },
  {
    step: "02",
    title: "Agent Design",
    description: "We architect the agent's logic, data sources, and decision trees for your specific workflows.",
  },
  {
    step: "03",
    title: "Build & Test",
    description: "Agents are built, tested against real data, and refined until they perform reliably.",
  },
  {
    step: "04",
    title: "Deploy & Monitor",
    description: "Agents go live with full logging. We monitor performance and tune over time.",
  },
];

const caseStudy = {
  metric: "11.5 Hours Saved Per Rep Per Week",
  industry: "B2B SaaS — 14-Person Sales Team",
  challenge: "Reps spent 2+ hours daily on manual CRM updates, meeting prep, and lead research.",
  solution: "Deployed 3 agents: Meeting Prep, Data Enrichment, and Deal Assistance. Agents run on every contact update and deal stage change.",
  result: "Reps reclaimed 11.5 hours/week. CRM data completeness went from 48% to 91%. Pipeline velocity increased 23%.",
};

const faqs = [
  {
    question: "What exactly is an AI agent?",
    answer: "An AI agent is an autonomous program that watches your HubSpot data, makes decisions based on rules you define, and takes actions — like updating records, sending alerts, or drafting content. Think of it as a team member that never sleeps and never forgets.",
  },
  {
    question: "Will agents make mistakes?",
    answer: "Agents operate within guardrails you approve. Critical actions (like sending customer emails) require human approval. Non-critical actions (like enriching data) run autonomously with full logging so you can audit everything.",
  },
  {
    question: "Do agents work with our existing HubSpot setup?",
    answer: "Yes. Agents plug into your existing HubSpot instance via APIs and workflows. No migration, no platform switch. They work alongside your current automation.",
  },
  {
    question: "How long does it take to build a custom agent?",
    answer: "A standard agent (like Meeting Prep or Data Enrichment) takes 2-3 weeks. Complex agents with multiple data sources and decision trees take 4-6 weeks. We scope everything upfront so there are no surprises.",
  },
  {
    question: "What happens if an agent breaks?",
    answer: "All agents include error handling, retry logic, and alerting. If an agent encounters something unexpected, it pauses and notifies your team. We also provide ongoing monitoring and support.",
  },
  {
    question: "Can agents work across multiple HubSpot portals?",
    answer: "Yes. For agencies and multi-brand companies, we build agents that operate across portals with proper data isolation and access controls.",
  },
];

const relatedServices = [
  {
    title: "AI Automation",
    description: "Combine agents with AI-powered automation for predictive scoring, intelligent workflows, and content generation.",
    href: "/services/ai-automation",
  },
  {
    title: "Custom Integrations",
    description: "Connect your agents to external data sources, APIs, and third-party tools for richer context and actions.",
    href: "/services/integrations",
  },
  {
    title: "Sales Enablement",
    description: "Pair AI agents with sales sequences and playbooks for a fully automated pipeline.",
    href: "/services/sales-enablement",
  },
];

export default function AIAgentsPage() {
  const serviceImage = getImageForSlot("services/ai-agents");
  const painImage = getImageForSlot("services/ai-agents-pain");
  const caseImage = getImageForSlot("services/ai-agents-case");

  return (
    <>
      <PageHeader
        badge="Service"
        title="AI Agents for HubSpot"
        description="Custom AI agents that work inside HubSpot — automating deal assistance, data enrichment, email triage, meeting prep, and more. 24/7, zero manual steps."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "AI Agents", href: "/services/ai-agents" },
        ]}
        backgroundImage={serviceImage ? { src: serviceImage, color: "purple", pattern: "arc" } : undefined}
      />

      {/* Stats Bar */}
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

      {/* Agent Capabilities Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Agent Capabilities
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              Agents that handle your team&apos;s busywork
            </h2>
            <p className="text-lg text-black/60">
              Each agent is built for a specific job — monitoring, researching, routing, or preparing — so your team can focus on selling and serving.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agentCapabilities.map((capability) => (
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

      {/* How Agents Work */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Our Process
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              How we build your agents
            </h2>
            <p className="text-lg text-black/60">
              From discovery to deployment, we build agents that fit your workflows and earn your team&apos;s trust.
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

      {/* Pain Point Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <FadingGridPattern type="dots" color="gray" opacity={0.08} spacing={28} fadeDirection="both" />
        <GradientOrb color="purple" size="xl" className="-top-48 -right-48 opacity-30" intensity="subtle" blur="xl" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className={`${painImage ? "grid lg:grid-cols-2 gap-12 items-center" : ""}`}>
            <div className={painImage ? "" : "max-w-3xl"}>
              <h2 className="text-3xl lg:text-4xl font-black text-black mb-6">
                Your team is doing work that software should do
              </h2>
              <p className="text-lg text-black/70 mb-6 leading-relaxed">
                Reps manually researching before calls. Updating fields after meetings. Routing leads by gut feel. These are tasks that eat hours every week and add zero strategic value.
              </p>
              <p className="text-lg text-black/70 leading-relaxed">
                AI agents handle this 24/7 — researching, updating, routing, and preparing — so your team spends time on conversations that close deals, not data entry that slows them down.
              </p>
            </div>
            {painImage && (
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <DuotoneImage src={painImage} alt="" color="purple" intensity="medium" className="absolute inset-0" />
                <GeometricOverlay pattern="arc" position="bottom-right" color="white" opacity={0.15} size={120} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mini Case Study */}
      <section className="py-20 lg:py-32 bg-black text-white relative overflow-hidden">
        <MeshBackground />
        <GradientOrb color="purple" size="xl" className="-top-32 -left-32 opacity-40" intensity="medium" blur="xl" />
        <GradientOrb color="teal" size="lg" className="bottom-0 right-1/4 opacity-20" intensity="subtle" blur="xl" />
        {caseImage && (
          <div className="absolute inset-0 z-0 opacity-[0.15]">
            <DuotoneImage src={caseImage} alt="" color="purple" intensity="light" className="absolute inset-0" />
          </div>
        )}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
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
                Common questions about AI agents
              </h2>
              <p className="text-lg text-black/60 mb-8">
                Everything you need to know about deploying AI agents in your HubSpot instance.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/80 transition-colors"
              >
                Talk to Us About Agents
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
              Extend your agents even further
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
