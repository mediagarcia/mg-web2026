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
  title: "Multi-LLM Orchestration | Media Garcia",
  description: "Use Claude, Gemini, and GPT together to get the best results for each task. Intelligent routing, automatic failover, and cost optimization across multiple AI providers.",
  alternates: { canonical: "/services/multi-llm" },
};

const stats = [
  { value: "3+", label: "LLM Providers" },
  { value: "99.9%", label: "Uptime via Failover" },
  { value: "60%", label: "Cost Reduction" },
  { value: "Best", label: "Model Per Task" },
];

const llmStack = [
  {
    name: "Claude (Anthropic)",
    bestFor: "Long-form analysis, complex reasoning, document understanding, safety-critical tasks.",
    usedFor: "Meeting summaries, proposal drafting, compliance reviews.",
    iconBg: "bg-orange-500/10",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    name: "Gemini (Google)",
    bestFor: "Data analysis, structured extraction, multi-modal understanding, search-grounded responses.",
    usedFor: "CRM data analysis, market research, competitive intelligence.",
    iconBg: "bg-blue-500/10",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v-3m3 3v-6m3 6v-1.5" />
      </svg>
    ),
  },
  {
    name: "GPT (OpenAI)",
    bestFor: "Creative content, conversational AI, code generation, broad general knowledge.",
    usedFor: "Email drafting, chatbots, content generation.",
    iconBg: "bg-green-500/10",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
];

const capabilities = [
  {
    title: "Intelligent Routing",
    description: "Each task is automatically sent to the best model based on type, complexity, and cost. Your team doesn\u2019t need to know which model is working.",
    features: ["Task classification", "Model matching", "Cost optimization", "Latency routing"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: "Automatic Failover",
    description: "If one provider goes down, requests automatically route to the next best model. Zero downtime, zero intervention.",
    features: ["Health monitoring", "Instant failover", "Provider diversity", "SLA protection"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Cost Optimization",
    description: "Simple tasks use cheaper models. Complex tasks use powerful ones. You stop overpaying for AI by matching cost to complexity.",
    features: ["Task complexity scoring", "Model cost tracking", "Budget controls", "Usage analytics"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Unified API Layer",
    description: "One API, multiple models. Your applications don\u2019t care which model responds \u2014 they get consistent, structured output every time.",
    features: ["Schema normalization", "Response formatting", "Error handling", "Rate limiting"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Evaluation & Testing",
    description: "We continuously benchmark models against your specific use cases to ensure you\u2019re using the best option as models improve.",
    features: ["A/B testing", "Quality scoring", "Drift detection", "Model comparison"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Compliance & Logging",
    description: "Every request and response is logged with model, latency, cost, and quality metrics. Full audit trail for regulated industries.",
    features: ["Audit logging", "Data residency", "PII detection", "Retention policies"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: "01",
    title: "AI Inventory",
    description: "We catalog your current AI usage and planned use cases. What models are you using? What tasks do they handle?",
  },
  {
    step: "02",
    title: "Architecture Design",
    description: "We design the routing layer, failover strategy, and cost model. You approve the approach before we build.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "We build the orchestration layer, integrate with your systems, and validate with real traffic.",
  },
  {
    step: "04",
    title: "Optimize & Scale",
    description: "We monitor model performance, adjust routing rules, and add new models as the landscape evolves.",
  },
];

const caseStudy = {
  metric: "60% Reduction in AI Costs",
  industry: "B2B SaaS \u2014 AI-Powered Product Features",
  challenge: "Company was routing all AI tasks through GPT-4, paying premium pricing for tasks that didn\u2019t need premium capability. No fallback when OpenAI had outages.",
  solution: "Implemented multi-LLM orchestration: simple classification tasks routed to Haiku, analysis to Claude Sonnet, creative content to GPT-4. Added Gemini as failover for all routes.",
  result: "AI costs dropped 60% without quality loss. System maintained 99.9% uptime during two major provider outages. Response latency improved 40% by using faster models for simple tasks.",
};

const faqs = [
  {
    question: "Why not just use the best model for everything?",
    answer: "The \u201Cbest\u201D model depends on the task. Claude excels at reasoning and safety. GPT excels at creative content. Gemini excels at structured data. Using one model for everything means you\u2019re paying premium prices for tasks that don\u2019t need premium capability, and you\u2019re getting worse results for tasks that don\u2019t match that model\u2019s strengths.",
  },
  {
    question: "Is multi-LLM more complex to maintain?",
    answer: "Not with proper orchestration. We build a unified API layer that abstracts the complexity. Your team interacts with one endpoint. Routing, failover, and model selection happen automatically behind the scenes.",
  },
  {
    question: "What about data privacy across providers?",
    answer: "Each provider has different data policies. We design routing rules that respect your compliance requirements \u2014 sensitive data can be restricted to specific providers, and PII can be stripped before reaching any model.",
  },
  {
    question: "How do you decide which model to use for each task?",
    answer: "We classify tasks by type (analysis, generation, extraction, conversation), complexity (simple, moderate, complex), and requirements (speed, accuracy, cost). Each classification maps to optimal model routing.",
  },
  {
    question: "What if a new model comes out that\u2019s better?",
    answer: "That\u2019s the point. Multi-LLM architecture makes it easy to add new models and re-route tasks. When Claude 4, GPT-5, or Gemini 2.5 launches, we benchmark it against your tasks and add it to the routing table if it wins.",
  },
  {
    question: "Do we need to change our existing AI integrations?",
    answer: "Usually minimal changes. We insert the orchestration layer between your application and the model APIs. Existing integrations continue to work \u2014 they just gain routing intelligence, failover, and cost optimization.",
  },
];

const relatedServices = [
  {
    title: "AI Agents",
    description: "Pair multi-LLM orchestration with autonomous agents that work inside HubSpot to automate complex tasks.",
    href: "/services/ai-agents",
  },
  {
    title: "RAG & Knowledge",
    description: "Ground your multi-LLM setup with retrieval-augmented generation for answers based on your actual data.",
    href: "/services/rag",
  },
  {
    title: "AI Automation",
    description: "Combine intelligent model routing with workflow automation for end-to-end AI-powered operations.",
    href: "/services/ai-automation",
  },
];

export default function MultiLLMPage() {
  const serviceImage = getImageForSlot("services/multi-llm");
  const painImage = getImageForSlot("services/multi-llm-pain");
  const caseImage = getImageForSlot("services/multi-llm-case");

  return (
    <>
      <PageHeader
        badge="Service"
        title="Multi-LLM Orchestration"
        description="Use Claude, Gemini, and GPT together — intelligent routing sends each task to the best model, with automatic failover and cost optimization built in."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Multi-LLM", href: "/services/multi-llm" },
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

      {/* Pain Point Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <FadingGridPattern type="dots" color="gray" opacity={0.08} spacing={28} fadeDirection="both" />
        <GradientOrb color="purple" size="xl" className="-top-48 -right-48 opacity-30" intensity="subtle" blur="xl" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className={`${painImage ? "grid lg:grid-cols-2 gap-12 items-center" : ""}`}>
            <div className={painImage ? "" : "max-w-3xl"}>
              <h2 className="text-3xl lg:text-4xl font-black text-black mb-6">
                Locked into one AI provider is a liability
              </h2>
              <p className="text-lg text-black/70 mb-6 leading-relaxed">
                Single-vendor AI means you&apos;re stuck with one model&apos;s strengths and weaknesses. When that model degrades, hallucinates, or increases pricing, you have no fallback.
              </p>
              <p className="text-lg text-black/70 leading-relaxed">
                Multi-LLM gives you options. The right model for the right task, automatic failover when providers have issues, and the leverage to negotiate pricing because you&apos;re never locked in.
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

      {/* LLM Stack Visualization */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              The Stack
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              Three models, one orchestration layer
            </h2>
            <p className="text-lg text-black/60">
              Each model has distinct strengths. We route tasks to the model that handles them best — so you get better results at lower cost.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {llmStack.map((llm) => (
              <div key={llm.name} className="bg-white rounded-2xl p-8 group hover:shadow-lg transition-all hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-xl ${llm.iconBg} text-black flex items-center justify-center mb-6`}>
                  {llm.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{llm.name}</h3>
                <div className="mb-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-black/40 mb-1">Best for</h4>
                  <p className="text-black/60">{llm.bestFor}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-black/40 mb-1">Used for</h4>
                  <p className="text-black/60">{llm.usedFor}</p>
                </div>
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
              Everything you need to run multiple models in production
            </h2>
            <p className="text-lg text-black/60">
              From intelligent routing to compliance logging, the orchestration layer handles the complexity so your team doesn&apos;t have to.
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

      {/* Process Steps */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Our Process
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              How we implement multi-LLM orchestration
            </h2>
            <p className="text-lg text-black/60">
              From inventory to optimization, we build the routing layer that makes multiple models work as one.
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
                Common questions about multi-LLM
              </h2>
              <p className="text-lg text-black/60 mb-8">
                Everything you need to know about running multiple AI models in production.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/80 transition-colors"
              >
                Talk to Us About Multi-LLM
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
              Pair multi-LLM with these services
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
