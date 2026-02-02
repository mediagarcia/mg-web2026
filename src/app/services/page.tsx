import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Media Garcia",
  description: "Revenue operations, CRM implementation, and growth services for healthcare, IT services, and B2B SaaS. Find the right service for your business.",
};

const serviceCategories = [
  {
    category: "Implementation & Setup",
    description: "Get your revenue systems up and running right",
    services: [
      {
        title: "CRM Onboarding",
        description: "Get your CRM set up around how your team actually works—on HubSpot, Salesforce, or any platform.",
        href: "/services/hubspot-onboarding",
        bestFor: "New CRM implementations",
      },
      {
        title: "CRM Migration",
        description: "Seamless data migration from your current CRM with zero data loss and minimal disruption.",
        href: "/services/crm-migration",
        bestFor: "Switching platforms",
      },
    ],
  },
  {
    category: "Revenue Operations",
    description: "Optimize your marketing and sales engine",
    services: [
      {
        title: "Marketing Automation",
        description: "Build intelligent nurture campaigns, lead scoring, and attribution that proves ROI.",
        href: "/services/marketing-automation",
        bestFor: "Lead generation & nurturing",
      },
      {
        title: "Sales Enablement",
        description: "Turn your CRM into a revenue machine with sequences, playbooks, and pipeline optimization.",
        href: "/services/sales-enablement",
        bestFor: "Sales process improvement",
      },
      {
        title: "Reporting & Analytics",
        description: "Custom dashboards and attribution that connect marketing spend to closed revenue.",
        href: "/services/reporting",
        bestFor: "Data-driven decisions",
      },
    ],
  },
  {
    category: "Advanced Capabilities",
    description: "Extend your systems with AI and integrations",
    services: [
      {
        title: "AI-Powered Automation",
        description: "Unlock AI features you're already paying for—predictive scoring, chatbots, and intelligent workflows.",
        href: "/services/ai-automation",
        bestFor: "Automation at scale",
      },
      {
        title: "Custom Integrations",
        description: "Connect your CRM to EHRs, PSA tools, billing systems, and any other platform your business uses.",
        href: "/services/integrations",
        bestFor: "System connectivity",
      },
    ],
  },
  {
    category: "Growth & Execution",
    description: "Drive traffic and convert visitors",
    services: [
      {
        title: "Website & CMS Development",
        description: "High-converting websites on HubSpot CMS, WordPress, or custom builds—built for marketers.",
        href: "/services/development",
        bestFor: "Website redesign & optimization",
      },
      {
        title: "Growth Marketing",
        description: "Full-service marketing execution—SEO, paid ads, content, and conversion optimization.",
        href: "/services/marketing",
        bestFor: "Traffic & lead generation",
      },
    ],
  },
];

const decisionGuide = [
  {
    question: "New to CRM or switching platforms?",
    recommendation: "Start with CRM Onboarding or CRM Migration",
    services: ["/services/hubspot-onboarding", "/services/crm-migration"],
  },
  {
    question: "Need to grow revenue with your current CRM?",
    recommendation: "Focus on Marketing Automation, Sales Enablement, or Reporting",
    services: ["/services/marketing-automation", "/services/sales-enablement", "/services/reporting"],
  },
  {
    question: "Ready for advanced capabilities?",
    recommendation: "Explore AI Automation and Custom Integrations",
    services: ["/services/ai-automation", "/services/integrations"],
  },
  {
    question: "Need more traffic and conversions?",
    recommendation: "Consider Website Development or Growth Marketing",
    services: ["/services/development", "/services/marketing"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        badge="Services"
        title="Find the right service for your business"
        description="Revenue operations, CRM implementation, and growth services built for healthcare, IT services, and B2B SaaS companies. We work on HubSpot, Salesforce, and any platform."
        breadcrumbs={[
          { label: "Services", href: "/services" },
        ]}
      />

      {/* Service Categories */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={category.category} className={categoryIndex > 0 ? "mt-20" : ""}>
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-black text-black mb-2">{category.category}</h2>
                <p className="text-black/60">{category.description}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="bg-gray-50 rounded-2xl p-8 group hover:bg-teal-500/5 hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-2 block">
                      {service.bestFor}
                    </span>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-teal-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-black/60 mb-6 leading-relaxed">{service.description}</p>
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
          ))}
        </div>
      </section>

      {/* Decision Guide */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Not Sure Where to Start?
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              Which service is right for you?
            </h2>
            <p className="text-lg text-black/60">
              Most clients combine multiple services. Here&apos;s a quick guide to help you decide where to focus first.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {decisionGuide.map((guide) => (
              <div key={guide.question} className="bg-white rounded-2xl p-8">
                <h3 className="text-lg font-bold text-black mb-2">{guide.question}</h3>
                <p className="text-teal-500 font-medium">{guide.recommendation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Agnostic Message */}
      <section className="py-20 lg:py-32 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
                Platform Flexibility
              </span>
              <h2 className="text-3xl lg:text-4xl font-black mb-6">
                We work on any platform—but we specialize in HubSpot
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                As a Platinum HubSpot Partner, we have deep expertise in HubSpot&apos;s ecosystem. But we also implement on Salesforce, Zoho, Pipedrive, and custom solutions. We recommend the platform that fits your needs and budget—not the one that&apos;s easiest for us.
              </p>
              <p className="text-white/70 leading-relaxed">
                During discovery, we&apos;ll assess your requirements and suggest the best fit. Already have a platform? We&apos;ll make it work better for your team.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-2xl p-6 text-center">
                <p className="text-3xl font-black text-teal-500">200+</p>
                <p className="text-white/60 text-sm mt-2">CRM Implementations</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 text-center">
                <p className="text-3xl font-black text-teal-500">Platinum</p>
                <p className="text-white/60 text-sm mt-2">HubSpot Partner</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 text-center">
                <p className="text-3xl font-black text-teal-500">98%</p>
                <p className="text-white/60 text-sm mt-2">Client Retention</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 text-center">
                <p className="text-3xl font-black text-teal-500">3</p>
                <p className="text-white/60 text-sm mt-2">Core Industries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Industry Expertise
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              Built for your industry
            </h2>
            <p className="text-lg text-black/60 max-w-2xl mx-auto">
              We don&apos;t do generic implementations. Every service includes industry-specific workflows, compliance considerations, and best practices.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 rounded-xl bg-teal-500/10 text-teal-500 flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Healthcare & Life Sciences</h3>
              <p className="text-black/60 mb-4">HIPAA-compliant workflows, EHR integrations, provider referral tracking, and patient acquisition systems.</p>
              <Link href="/industries/healthcare" className="text-teal-500 font-medium hover:text-teal-600 transition-colors">
                Learn more →
              </Link>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 rounded-xl bg-teal-500/10 text-teal-500 flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">IT Services & Technology</h3>
              <p className="text-black/60 mb-4">Long sales cycles, multi-stakeholder deals, technical evaluation stages, and PSA integrations.</p>
              <Link href="/industries/it-services" className="text-teal-500 font-medium hover:text-teal-600 transition-colors">
                Learn more →
              </Link>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 rounded-xl bg-teal-500/10 text-teal-500 flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">B2B SaaS</h3>
              <p className="text-black/60 mb-4">Product usage tracking, trial conversion flows, expansion revenue, and customer health scoring.</p>
              <Link href="/industries/saas" className="text-teal-500 font-medium hover:text-teal-600 transition-colors">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="bg-black rounded-3xl p-8 lg:p-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Still not sure which service you need?
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Book a free strategy call and we&apos;ll help you identify the right approach for your business. No sales pitch—just an honest assessment of where you are and where you could be.
            </p>
            <div className="flex flex-col items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-full font-medium hover:bg-teal-400 transition-colors"
              >
                Book a Strategy Call
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <span className="text-white/40 text-sm mt-3">30 minutes. Platform-agnostic advice.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
