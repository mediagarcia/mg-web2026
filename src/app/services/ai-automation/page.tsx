import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "AI-Powered Automation | Media Garcia",
  description: "Unlock the full potential of HubSpot's AI features. From Breeze AI to intelligent workflows, we help you automate smarter—not harder.",
};

const aiCapabilities = [
  {
    title: "HubSpot Breeze AI",
    description: "Leverage HubSpot's native AI to generate content, summarize data, and automate repetitive tasks across your CRM.",
    features: ["Content generation", "Data summarization", "Task automation", "Smart recommendations"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Intelligent Workflows",
    description: "Design automation that learns and adapts. Build workflows that respond to behavior patterns and optimize over time.",
    features: ["Behavioral triggers", "Multi-branch logic", "A/B testing", "Performance optimization"],
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
    title: "Predictive Lead Scoring",
    description: "Use AI to identify your most promising leads. Focus your sales team's energy where it matters most.",
    features: ["Behavioral scoring", "Fit analysis", "Engagement tracking", "Priority ranking"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

const benefits = [
  {
    stat: "80%",
    label: "Less manual data entry",
    description: "Automate repetitive tasks and free your team for high-value work",
  },
  {
    stat: "3x",
    label: "Faster lead response",
    description: "AI chatbots engage prospects instantly, any time of day",
  },
  {
    stat: "40%",
    label: "Better lead conversion",
    description: "Predictive scoring helps sales focus on the right opportunities",
  },
  {
    stat: "24/7",
    label: "Always-on engagement",
    description: "Your automation works around the clock, even when you don't",
  },
];

export default function AIAutomationPage() {
  return (
    <>
      <PageHeader
        badge="Service"
        title="AI-Powered Automation"
        description="We help you actually use the AI features you're paying for. From HubSpot Breeze to intelligent workflows, automate smarter—not harder."
        breadcrumbs={[
          { label: "Services", href: "/services/ai-automation" },
          { label: "AI-Powered Automation", href: "/services/ai-automation" },
        ]}
      />

      {/* Pain Point Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-6">
              Paying for AI features you never touch?
            </h2>
            <p className="text-lg text-black/60 leading-relaxed mb-8">
              Most HubSpot users only scratch the surface of what&apos;s possible. The AI tools are there—content generation, predictive scoring, intelligent automation—but they sit unused while teams stick to manual processes.
            </p>
            <p className="text-lg text-black/80 font-medium">
              We change that. We implement AI features that your team will actually use, because we design them around how you work—not the other way around.
            </p>
          </div>
        </div>
      </section>

      {/* AI Capabilities Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12">AI Capabilities We Implement</h2>
          <div className="grid md:grid-cols-2 gap-8">
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

      {/* Benefits/Results */}
      <section className="py-20 lg:py-32 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black mb-12">What AI automation delivers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.label}>
                <span className="text-5xl lg:text-6xl font-black text-teal-500">{benefit.stat}</span>
                <h3 className="text-xl font-bold mt-4 mb-2">{benefit.label}</h3>
                <p className="text-white/60">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12">Our AI Implementation Approach</h2>
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Audit", description: "Identify which AI features will actually move the needle for your business" },
              { step: "02", title: "Design", description: "Map out automation that fits your team's workflow, not the other way around" },
              { step: "03", title: "Implement", description: "Build, test, and refine until the automation runs flawlessly" },
              { step: "04", title: "Train", description: "Ensure your team knows how to use and maintain the automation" },
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

      {/* HubSpot Breeze Spotlight */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
                HubSpot Breeze AI
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-black mb-6">
                Get more from HubSpot&apos;s native AI
              </h2>
              <p className="text-lg text-black/60 leading-relaxed mb-6">
                HubSpot Breeze is a powerful AI assistant built right into your CRM. But like any tool, it only works if you use it right. We help you unlock its full potential:
              </p>
              <ul className="space-y-4">
                {[
                  "Generate blog posts, emails, and social content in your brand voice",
                  "Summarize call recordings and meeting notes automatically",
                  "Get AI-powered recommendations for next best actions",
                  "Automate data enrichment and contact research",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-teal-500/10 to-neon-purple-500/10 rounded-2xl p-8 lg:p-12">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#ff7a59] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.984 2.21 2.21 0 00-4.42 0c0 .873.51 1.625 1.245 1.982v2.848a5.276 5.276 0 00-2.407 1.227l-6.39-4.972a2.474 2.474 0 00.093-.655 2.472 2.472 0 10-2.471 2.471c.426 0 .824-.11 1.17-.299l6.271 4.876a5.3 5.3 0 00-.203 1.422 5.3 5.3 0 00.203 1.422l-6.271 4.876c-.346-.19-.744-.299-1.17-.299a2.472 2.472 0 102.471 2.471c0-.228-.034-.447-.093-.655l6.39-4.972a5.276 5.276 0 002.407 1.227v2.848a2.198 2.198 0 00-1.245 1.982 2.21 2.21 0 004.42 0 2.198 2.198 0 00-1.267-1.984V16.07a5.287 5.287 0 10-5.096-9.14 5.287 5.287 0 005.096-9.14z"/>
                    </svg>
                  </div>
                  <span className="font-bold text-black">Breeze AI</span>
                </div>
                <p className="text-sm text-black/60 italic">
                  &ldquo;Based on this contact&apos;s engagement history, I recommend scheduling a product demo. They&apos;ve viewed your pricing page 3 times and downloaded the ROI calculator.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
