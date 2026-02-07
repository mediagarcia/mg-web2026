import { Metadata } from "next";
import { CTABanner } from "@/components/sections";
import { ServiceFAQ } from "@/components/service-page";
import Link from "next/link";
import { GradientOrb, MeshBackground, FadingGridPattern } from "@/components/ui/visuals";
import { getImageForSlot } from "@/lib/images/get-image-for-slot";

import { PageHeaderWithPreview } from "@/components/PageHeaderWithPreview";

export const metadata: Metadata = {
  title: "Custom Integrations | Media Garcia",
  description: "Connect your CRM, EHR, PSA tools, and business systems with custom integrations. HIPAA-compliant, reliable, and built for healthcare, IT, and SaaS.",
};

const stats = [
  { value: "150+", label: "Integrations Built" },
  { value: "99.9%", label: "Uptime Reliability" },
  { value: "80%", label: "Avg. Manual Work Eliminated" },
  { value: "Zero", label: "HIPAA Violations" },
];

const capabilities = [
  {
    title: "CRM Integrations",
    description: "Connect HubSpot, Salesforce, or any CRM to your business systems. Bi-directional sync that keeps data accurate across platforms.",
    features: ["Real-time sync", "Field mapping", "Deduplication", "Change tracking"],
  },
  {
    title: "EHR & Healthcare Systems",
    description: "HIPAA-compliant integrations with Epic, Cerner, athenahealth, and other healthcare platforms. Patient data flows securely.",
    features: ["HL7/FHIR support", "HIPAA compliance", "Audit logging", "PHI protection"],
  },
  {
    title: "PSA & IT Tools",
    description: "Connect ConnectWise, Autotask, Datto, and other professional services automation tools to your CRM and billing systems.",
    features: ["Ticket sync", "Time tracking", "Contract management", "SLA monitoring"],
  },
  {
    title: "Billing & Finance",
    description: "Integrate Stripe, QuickBooks, Xero, and other financial systems. Revenue data flows automatically to your CRM.",
    features: ["Payment sync", "Invoice automation", "Revenue attribution", "Subscription tracking"],
  },
  {
    title: "Marketing Platforms",
    description: "Connect advertising platforms, analytics tools, and marketing automation. Attribution data flows to closed revenue.",
    features: ["Ad platform sync", "Lead source tracking", "Conversion data", "ROI attribution"],
  },
  {
    title: "Custom API Development",
    description: "When off-the-shelf solutions don't exist, we build custom APIs and middleware to connect proprietary or legacy systems.",
    features: ["REST/GraphQL APIs", "Webhook handlers", "Data transformation", "Error handling"],
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
      "EHR integration (Epic, Cerner, athenahealth) with HIPAA-compliant data sync",
      "Patient scheduling system connections for appointment automation",
      "Lab results and medical records flowing to provider CRMs",
      "Referral tracking between provider networks and systems",
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
      "ConnectWise/Autotask PSA integration for ticket and time sync",
      "RMM tool connections (Datto, NinjaRMM) for automated alerting",
      "Billing system integration for contract and invoice automation",
      "Project management sync across service delivery platforms",
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
      "Product analytics (Mixpanel, Amplitude, Segment) feeding CRM for usage-based scoring",
      "Stripe/Chargebee billing integration for subscription lifecycle tracking",
      "Intercom/Zendesk support sync for customer health visibility",
      "Product event webhooks triggering sales and success workflows",
    ],
    linkHref: "/industries/saas",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Tech Stack Audit",
    description: "We map every system in your stack—what data lives where, how it flows today, and where the gaps are. You get a visual diagram of your current state.",
  },
  {
    step: "02",
    title: "Integration Architecture",
    description: "We design the data flow, sync frequency, field mapping, and error handling. You approve the blueprint before any development begins.",
  },
  {
    step: "03",
    title: "Build & Test",
    description: "We build in a sandbox, test with real data patterns, and validate every edge case. Integrations are stress-tested before touching production.",
  },
  {
    step: "04",
    title: "Deploy & Monitor",
    description: "We deploy during off-hours, monitor for 72 hours post-launch, and set up ongoing alerting. You get a runbook for common issues.",
  },
];

const caseStudy = {
  metric: "80% Reduction in Manual Work",
  industry: "Healthcare Provider Network",
  challenge: "Staff at 50+ locations manually entered patient data into both EHR and CRM systems. Each location spent 15+ hours per week on duplicate data entry, leading to errors and delays.",
  solution: "Built a HIPAA-compliant integration between athenahealth and HubSpot. New patient records sync automatically with proper PHI handling. Appointment data flows to CRM for follow-up automation.",
  result: "Eliminated 750+ hours of manual work per month across the network. Data accuracy improved from 87% to 99.6%. Staff now focuses on patient care instead of data entry.",
};

const faqs = [
  {
    question: "Which systems can you integrate?",
    answer: "We integrate virtually any system with an API—CRMs (HubSpot, Salesforce, Zoho), EHRs (Epic, Cerner, athenahealth), PSA tools (ConnectWise, Autotask), billing (Stripe, QuickBooks), marketing platforms, and custom databases. If it has an API or can export data, we can connect it.",
  },
  {
    question: "Are your healthcare integrations HIPAA compliant?",
    answer: "Yes. All healthcare integrations follow HIPAA requirements including encryption in transit and at rest, access controls, audit logging, and BAA coverage. We've built 50+ healthcare integrations with zero compliance incidents.",
  },
  {
    question: "What happens if an integration breaks?",
    answer: "Every integration includes error handling, retry logic, and alerting. If something fails, you're notified immediately with actionable details. We also include a runbook for common issues and offer ongoing support packages for critical integrations.",
  },
  {
    question: "How long does a typical integration take?",
    answer: "Simple integrations (native connectors, basic field mapping) take 1-2 weeks. Custom API integrations typically take 3-4 weeks. Complex healthcare or enterprise integrations may take 6-8 weeks depending on compliance requirements and system complexity.",
  },
  {
    question: "Do you only work with HubSpot?",
    answer: "No. While we're HubSpot specialists, we integrate any CRM including Salesforce, Zoho, Pipedrive, and custom platforms. We also build system-to-system integrations that don't involve a CRM at all.",
  },
  {
    question: "What about legacy systems without modern APIs?",
    answer: "We handle legacy systems through database connections, file-based integrations (SFTP, CSV), screen scraping when necessary, or custom middleware. If data can be extracted, we can integrate it.",
  },
];

const relatedServices = [
  {
    title: "AI-Powered Automation",
    description: "Add intelligence to your integrations with AI-powered data enrichment, routing, and predictions.",
    href: "/services/ai-automation",
  },
  {
    title: "Reporting & Analytics",
    description: "Build dashboards that pull from all your integrated systems for unified visibility.",
    href: "/services/reporting",
  },
  {
    title: "CRM Migration",
    description: "Moving to a new CRM? We migrate your data and rebuild integrations on the new platform.",
    href: "/services/crm-migration",
  },
];

export default function IntegrationsPage() {
  const heroImage = getImageForSlot("service-integrations");

  return (
    <>
      <PageHeaderWithPreview
        badge="Service"
        title="Custom Integrations"
        description="Connect your CRM to EHRs, PSA tools, billing systems, and any platform your business uses. Reliable, secure, and built for your industry."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Custom Integrations", href: "/services/integrations" },
        ]}
        defaultImage={heroImage}
        slot="service-integrations"
        imageAlt="Connected systems and API integrations"
        duotoneColor="teal"
      />

      {/* Pain Point Section */}
      <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
        <FadingGridPattern type="dots" color="gray" opacity={0.08} spacing={28} fadeDirection="both" />
        <GradientOrb color="teal" size="xl" className="-top-48 -right-48 opacity-30" intensity="subtle" blur="xl" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-6">
              Your tools don&apos;t talk to each other
            </h2>
            <p className="text-lg text-black/70 mb-6 leading-relaxed">
              Your team copies data between systems. Patient records get entered twice. Deals close in your CRM but finance doesn&apos;t know for days. Support tickets exist in a vacuum, invisible to sales.
            </p>
            <p className="text-lg text-black/70 leading-relaxed">
              You&apos;re paying for powerful tools—but they&apos;re operating as islands. We connect your systems so data flows automatically, accurately, and securely. No more copy-paste. No more &quot;which system is right?&quot;
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

      {/* Capabilities Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Integration Capabilities
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              Connect any system to any system
            </h2>
            <p className="text-lg text-black/60">
              From native CRM connectors to custom API development, we build integrations that are reliable, secure, and maintainable.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability) => (
              <div key={capability.title} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-black mb-3">{capability.title}</h3>
                <p className="text-black/60 mb-6">{capability.description}</p>
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
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Industry Expertise
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              Integrations built for your industry
            </h2>
            <p className="text-lg text-black/60 max-w-2xl mx-auto">
              We understand the specific systems, compliance requirements, and data flows in healthcare, IT services, and SaaS.
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
              How we build reliable integrations
            </h2>
            <p className="text-lg text-black/60">
              Every integration follows a proven process—from architecture to monitoring—so you get solutions that work on day one and keep working.
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
        <GradientOrb color="teal" size="xl" className="-top-32 -left-32 opacity-30" intensity="medium" blur="xl" />
        <GradientOrb color="purple" size="lg" className="bottom-0 right-1/4 opacity-20" intensity="subtle" blur="xl" />
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
                Common questions about integrations
              </h2>
              <p className="text-lg text-black/60 mb-8">
                Everything you need to know about connecting your systems.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/80 transition-colors"
              >
                Get a Free Integration Audit
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
              Extend your integrations
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
