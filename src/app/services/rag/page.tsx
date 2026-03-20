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
  title: "RAG & Knowledge Systems | Media Garcia",
  description: "Retrieval-augmented generation systems that give AI access to your company's knowledge. Turn docs, wikis, and tribal knowledge into instant, accurate answers.",
  alternates: { canonical: "/services/rag" },
};

const stats = [
  { value: "95%", label: "Retrieval Accuracy" },
  { value: "< 2s", label: "Response Time" },
  { value: "100K+", label: "Documents Indexed" },
  { value: "Zero", label: "Hallucination Tolerance" },
];

const capabilities = [
  {
    title: "Knowledge Base Builder",
    description: "We ingest your docs, SOPs, playbooks, and wikis into a searchable AI knowledge base.",
    features: ["Document ingestion", "Auto-categorization", "Version tracking", "Access controls"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Semantic Search",
    description: "Your team asks questions in plain English and gets precise answers with source citations.",
    features: ["Natural language queries", "Source attribution", "Confidence scoring", "Multi-format support"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: "Sales Knowledge Assistant",
    description: "Reps ask about competitors, pricing, case studies — and get instant, accurate answers from your actual materials.",
    features: ["Competitor intel", "Pricing lookups", "Case study matching", "Objection handling"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    title: "Support Knowledge Bot",
    description: "Customer-facing bot that answers questions using your documentation, escalating to humans when confidence is low.",
    features: ["Self-service resolution", "Smart escalation", "Ticket deflection", "Knowledge gaps reporting"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "Onboarding Accelerator",
    description: "New hires query your entire knowledge base to ramp faster. AI surfaces the right training materials based on role and progress.",
    features: ["Role-based learning", "Progress tracking", "Quiz generation", "Mentor matching"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Custom RAG Pipeline",
    description: "We build retrieval-augmented generation pipelines tailored to your data sources, security requirements, and use cases.",
    features: ["Custom embeddings", "Hybrid search", "Re-ranking", "Guardrails"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.1-3.44M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-2.636-3.869A6.003 6.003 0 0012 6c-1.87 0-3.542.856-4.643 2.197M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: "01",
    title: "Knowledge Audit",
    description: "We inventory your data sources: docs, wikis, CRM, tickets, emails. We identify what\u2019s valuable and what\u2019s noise.",
  },
  {
    step: "02",
    title: "Pipeline Architecture",
    description: "We design the ingestion, chunking, embedding, and retrieval strategy for your specific data types and access patterns.",
  },
  {
    step: "03",
    title: "Build & Validate",
    description: "We build the RAG pipeline, test retrieval accuracy, and tune until answers are reliable and sourced.",
  },
  {
    step: "04",
    title: "Deploy & Improve",
    description: "System goes live with monitoring. We track query patterns, failed retrievals, and continuously improve the knowledge base.",
  },
];

const caseStudy = {
  metric: "67% Reduction in Support Tickets",
  industry: "Healthcare SaaS \u2014 200+ Customers",
  challenge: "Support team overwhelmed with repetitive questions. Average response time was 4 hours. Documentation existed but nobody could find answers quickly.",
  solution: "Built a RAG-powered knowledge bot trained on 2,000+ support articles, product docs, and resolved ticket history. Integrated into customer portal and internal Slack.",
  result: "Self-service resolution rate hit 67%. Support response time dropped to 15 minutes for remaining tickets. Customer satisfaction score increased from 3.8 to 4.6.",
};

const faqs = [
  {
    question: "What is RAG?",
    answer: "Retrieval-Augmented Generation (RAG) is a technique where AI retrieves relevant information from your documents before generating a response. Instead of relying on general training data, the AI grounds its answers in your actual knowledge base \u2014 reducing hallucinations and increasing accuracy.",
  },
  {
    question: "Is our data secure?",
    answer: "Yes. Your data stays in your infrastructure or a dedicated cloud environment. We never use client data to train public models. All pipelines include encryption at rest and in transit, role-based access controls, and audit logging.",
  },
  {
    question: "What data sources can you ingest?",
    answer: "Almost anything: PDFs, Google Docs, Confluence, Notion, SharePoint, help center articles, Slack history, email archives, CRM records, and custom databases. If it\u2019s text, we can index it.",
  },
  {
    question: "How accurate are the answers?",
    answer: "With proper tuning, RAG systems typically achieve 90-95% accuracy for factual questions from your knowledge base. We include confidence scoring so the system knows when to say \u201cI\u2019m not sure\u201d rather than guessing.",
  },
  {
    question: "How long does implementation take?",
    answer: "A basic knowledge base (single source, internal use) takes 3-4 weeks. Enterprise deployments with multiple sources, custom security, and customer-facing interfaces take 6-10 weeks.",
  },
  {
    question: "What if the AI gives a wrong answer?",
    answer: "Every response includes source citations so users can verify. We implement confidence thresholds \u2014 low-confidence answers are flagged for human review. The system also logs all interactions for continuous improvement.",
  },
];

const relatedServices = [
  {
    title: "AI Agents",
    description: "Autonomous AI agents that take action on behalf of your team \u2014 from lead routing to customer onboarding.",
    href: "/services/ai-agents",
  },
  {
    title: "AI Automation",
    description: "Predictive scoring, intelligent workflows, and AI chatbots that drive revenue on autopilot.",
    href: "/services/ai-automation",
  },
  {
    title: "Custom Integrations",
    description: "Connect your RAG pipeline to CRMs, support tools, Slack, and every system your team uses.",
    href: "/services/integrations",
  },
];

export default function RAGPage() {
  const serviceImage = getImageForSlot("services/rag");
  const painImage = getImageForSlot("services/rag-pain");
  const caseImage = getImageForSlot("services/rag-case");

  return (
    <>
      <PageHeader
        badge="Service"
        title="RAG & Knowledge Systems"
        description="Retrieval-augmented generation systems that give AI access to your company&apos;s knowledge. Turn docs, wikis, and tribal knowledge into instant, accurate answers."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "RAG & Knowledge", href: "/services/rag" },
        ]}
        backgroundImage={serviceImage ? { src: serviceImage, color: "purple", pattern: "arc" } : undefined}
      />

      {/* Pain Point Section */}
      <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
        <FadingGridPattern type="dots" color="gray" opacity={0.08} spacing={28} fadeDirection="both" />
        <GradientOrb color="purple" size="xl" className="-top-48 -right-48 opacity-30" intensity="subtle" blur="xl" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className={`${painImage ? "grid lg:grid-cols-2 gap-12 items-center" : ""}`}>
            <div className={painImage ? "" : "max-w-3xl"}>
              <h2 className="text-3xl lg:text-4xl font-black text-black mb-6">
                Your team&apos;s knowledge is trapped in silos
              </h2>
              <p className="text-lg text-black/70 mb-6 leading-relaxed">
                Sales can&apos;t find the right case study. Support re-answers the same questions. New hires take months to ramp because tribal knowledge lives in people&apos;s heads, not systems.
              </p>
              <p className="text-lg text-black/70 leading-relaxed">
                We build RAG systems that turn your scattered documents, wikis, and institutional knowledge into an AI-powered knowledge base your entire team can query in plain English &mdash; with source citations and confidence scoring so you can trust every answer.
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

      {/* Capabilities Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Capabilities
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              Turn your knowledge into a competitive advantage
            </h2>
            <p className="text-lg text-black/60">
              From internal knowledge bases to customer-facing support bots, we build RAG systems that make your team&apos;s collective knowledge instantly accessible.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability) => (
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

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Our Process
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              How we build your knowledge system
            </h2>
            <p className="text-lg text-black/60">
              From audit to deployment, we build RAG pipelines that are accurate, secure, and continuously improving.
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
                Common questions about RAG systems
              </h2>
              <p className="text-lg text-black/60 mb-8">
                Everything you need to know about retrieval-augmented generation and knowledge systems.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/80 transition-colors"
              >
                Get a Free Knowledge Audit
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
              Expand your AI capabilities
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
