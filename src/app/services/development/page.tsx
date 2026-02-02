import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";
import { ServiceFAQ } from "@/components/service-page";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website & CMS Development | Media Garcia",
  description: "High-converting websites on HubSpot CMS, WordPress, or custom builds. Built for marketers in healthcare, IT, and SaaS.",
};

const stats = [
  { value: "100+", label: "Websites Launched" },
  { value: "3x", label: "Avg. Conversion Lift" },
  { value: "<2s", label: "Load Time Target" },
  { value: "WCAG", label: "2.1 Compliant" },
];

const capabilities = [
  {
    title: "HubSpot CMS Websites",
    description: "Fully custom websites with drag-and-drop editing, built-in CRM integration, and smart content personalization.",
    features: ["Drag-drop editing", "CRM integration", "Smart content", "A/B testing"],
  },
  {
    title: "WordPress Development",
    description: "Custom WordPress sites with modern themes, page builders, and optimized performance for content-heavy sites.",
    features: ["Custom themes", "Gutenberg blocks", "WooCommerce", "Plugin development"],
  },
  {
    title: "Custom Web Applications",
    description: "React/Next.js applications for complex requirements—portals, calculators, configurators, and interactive experiences.",
    features: ["React/Next.js", "API integrations", "Dynamic apps", "Headless CMS"],
  },
  {
    title: "Landing Page Systems",
    description: "High-converting landing pages optimized for lead generation with built-in A/B testing and form optimization.",
    features: ["Conversion focused", "A/B testing", "Form optimization", "Fast load times"],
  },
  {
    title: "CMS Migration",
    description: "Seamless migration from legacy platforms to modern CMS with SEO preservation and zero downtime.",
    features: ["SEO preservation", "301 redirects", "Content transfer", "Zero downtime"],
  },
  {
    title: "Performance Optimization",
    description: "Speed optimization, Core Web Vitals improvement, and technical SEO to boost rankings and conversions.",
    features: ["Core Web Vitals", "Image optimization", "Caching strategy", "CDN setup"],
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
      "HIPAA-compliant contact forms and patient intake portals",
      "Provider directories with location search and filtering",
      "Patient education content hubs with gated resources",
      "Appointment scheduling integrations with EHR systems",
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
      "Technical documentation portals with search and versioning",
      "Interactive product demos and guided tours",
      "Security-focused design with trust signals and certifications",
      "Partner portals with protected resource libraries",
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
      "Product-led landing pages with interactive feature tours",
      "ROI calculators and pricing configurators",
      "Trial signup flows optimized for conversion",
      "Customer success portals with product documentation",
    ],
    linkHref: "/industries/saas",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We audit your current site, analyze competitors, and define success metrics. You get a detailed brief before any design begins.",
  },
  {
    step: "02",
    title: "Design & Prototype",
    description: "Wireframes, visual designs, and interactive prototypes. You see exactly what you're getting before development starts.",
  },
  {
    step: "03",
    title: "Development & QA",
    description: "We build, test, and optimize. Every page is tested across devices and browsers. Performance is verified before launch.",
  },
  {
    step: "04",
    title: "Launch & Training",
    description: "We handle the launch, train your team on the CMS, and provide documentation. Post-launch support included.",
  },
];

const caseStudy = {
  metric: "215% Increase in Conversions",
  industry: "Healthcare Technology",
  challenge: "Marketing site was visually outdated, slow to load, and impossible for marketing to update without developer help. Contact form conversion rate was 0.8%.",
  solution: "Rebuilt on HubSpot CMS with custom modules, optimized forms, and smart content personalization. Marketing can now publish new pages without engineering.",
  result: "Page load time dropped from 6.2s to 1.4s. Form conversion rate increased to 2.5%. Marketing publishes 3x more content without waiting for dev resources.",
};

const faqs = [
  {
    question: "Which CMS platform should we use?",
    answer: "It depends on your needs. HubSpot CMS is ideal if you're already using HubSpot for marketing/sales and want tight CRM integration. WordPress works well for content-heavy sites and organizations with existing WordPress expertise. Custom React/Next.js is best for complex applications or when you need maximum flexibility. We recommend the right platform for your use case during discovery.",
  },
  {
    question: "Can you work with our existing brand guidelines?",
    answer: "Yes. We work with your brand guidelines, design system, or style guide. If you don't have formalized guidelines, we can help establish them during the design phase. We'll ensure consistency with your existing marketing materials.",
  },
  {
    question: "How do you handle HIPAA compliance for healthcare sites?",
    answer: "Healthcare sites require HIPAA-compliant form handling, secure hosting, and proper data flow. We implement encrypted form submissions, BAA-covered hosting (HubSpot or compliant WordPress hosting), and audit trails. All patient data flows through compliant channels to your CRM or EHR.",
  },
  {
    question: "What about SEO during a redesign?",
    answer: "SEO preservation is critical. We create a comprehensive redirect map, preserve URL structures where possible, migrate meta data, and implement proper canonical tags. Most redesigns maintain or improve organic traffic when handled correctly. We monitor rankings post-launch.",
  },
  {
    question: "Can our marketing team update the site themselves?",
    answer: "Yes—that's a core requirement. We build with marketer-friendly editing in mind. On HubSpot CMS, this means drag-and-drop modules. On WordPress, it's Gutenberg blocks or page builders. You'll have full training and documentation to manage day-to-day updates.",
  },
  {
    question: "What ongoing support do you offer?",
    answer: "Post-launch support is included for 30 days. After that, we offer retainer packages for ongoing development, optimization, and support. Many clients keep us on retainer for continuous improvement and new page builds.",
  },
];

const relatedServices = [
  {
    title: "Marketing Automation",
    description: "Connect your website to nurture campaigns, lead scoring, and personalized follow-up.",
    href: "/services/marketing-automation",
  },
  {
    title: "CRM Onboarding",
    description: "Ensure your website leads flow seamlessly into your CRM with proper tracking and attribution.",
    href: "/services/hubspot-onboarding",
  },
  {
    title: "Custom Integrations",
    description: "Connect your website to EHRs, booking systems, product databases, and more.",
    href: "/services/integrations",
  },
];

export default function DevelopmentPage() {
  return (
    <>
      <PageHeader
        badge="Service"
        title="Website & CMS Development"
        description="High-converting websites on HubSpot CMS, WordPress, or custom builds—designed for marketers, optimized for conversions."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Website Development", href: "/services/development" },
        ]}
      />

      {/* Pain Point Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-6">
              Your website looks good but doesn&apos;t convert
            </h2>
            <p className="text-lg text-black/70 mb-6 leading-relaxed">
              Visitors land on your site, scroll around, and leave. Your conversion rate is stuck at 1-2%. Marketing wants to run campaigns, but they need developer help for every landing page. Your site loads slowly on mobile, and you&apos;re not sure why.
            </p>
            <p className="text-lg text-black/70 leading-relaxed">
              We build websites that convert—fast-loading, conversion-optimized, and easy for your marketing team to manage. Whether you need HubSpot CMS, WordPress, or a custom build, we focus on what matters: turning visitors into leads and leads into customers.
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
              Development Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              Websites built for your platform of choice
            </h2>
            <p className="text-lg text-black/60">
              HubSpot CMS, WordPress, or custom—we build on the platform that fits your needs and your team&apos;s capabilities.
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
              Websites built for your industry
            </h2>
            <p className="text-lg text-black/60 max-w-2xl mx-auto">
              Healthcare compliance, IT security requirements, SaaS conversion patterns—we understand what your industry needs.
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
              How we build conversion-focused websites
            </h2>
            <p className="text-lg text-black/60">
              No surprises, no scope creep. You see designs before we build, and you&apos;re involved at every milestone.
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
                Common questions about website development
              </h2>
              <p className="text-lg text-black/60 mb-8">
                Everything you need to know about building a high-converting website.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/80 transition-colors"
              >
                Get a Free Site Audit
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
              Complete your growth stack
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
