import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";
import { ServiceFAQ } from "@/components/service-page";
import Link from "next/link";
import { GradientOrb, MeshBackground, FadingGridPattern } from "@/components/ui/visuals";

export const metadata: Metadata = {
  title: "Growth Marketing Services | Media Garcia",
  description: "Full-service growth marketing for healthcare, IT, and SaaS. SEO, paid ads, content marketing, and conversion optimization—all tied to revenue.",
};

const stats = [
  { value: "150%", label: "Avg. Traffic Increase" },
  { value: "3.2x", label: "Lead Generation Growth" },
  { value: "45%", label: "Lower Cost Per Lead" },
  { value: "100%", label: "Revenue Attribution" },
];

const capabilities = [
  {
    title: "Search Engine Optimization",
    description: "Technical SEO, content optimization, and link building that drives qualified organic traffic and improves rankings.",
    features: ["Technical audits", "Content optimization", "Link building", "Local SEO"],
  },
  {
    title: "Paid Advertising",
    description: "Google Ads, LinkedIn Ads, and paid social campaigns managed for ROI, not just clicks. Full attribution to closed revenue.",
    features: ["Google Ads", "LinkedIn Ads", "Paid social", "Retargeting"],
  },
  {
    title: "Content Marketing",
    description: "Strategic content that attracts your ideal customers, builds trust, and supports the sales process. Not just blog posts—conversion-focused assets.",
    features: ["Blog strategy", "Lead magnets", "Case studies", "Video content"],
  },
  {
    title: "Conversion Optimization",
    description: "A/B testing, landing page optimization, and UX improvements that turn more visitors into leads and leads into customers.",
    features: ["A/B testing", "Landing pages", "Form optimization", "User research"],
  },
  {
    title: "Email Marketing",
    description: "Strategic campaigns beyond automation—newsletters, product updates, and promotional campaigns that drive engagement and revenue.",
    features: ["Newsletter strategy", "Campaign execution", "List management", "Deliverability"],
  },
  {
    title: "Analytics & Attribution",
    description: "Know exactly which campaigns drive revenue. Multi-touch attribution, custom dashboards, and regular reporting.",
    features: ["Multi-touch attribution", "Custom dashboards", "ROI reporting", "Pipeline tracking"],
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
      "Patient acquisition campaigns targeting specific conditions and demographics",
      "Provider referral programs with co-marketing and lead sharing",
      "Medical content marketing that builds trust and educates patients",
      "Local SEO for multi-location practices and provider networks",
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
      "Technical content marketing that establishes thought leadership",
      "LinkedIn advertising targeting technical decision-makers",
      "Demand generation for long sales cycles with nurturing sequences",
      "Event marketing and webinar programs for lead generation",
    ],
    linkHref: "/industries/information-technology",
  },
  {
    industry: "B2B SaaS",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    useCases: [
      "Product-led content that drives trial signups and feature adoption",
      "Expansion revenue campaigns targeting existing customers",
      "Customer advocacy programs turning users into champions",
      "Competitive content and comparison pages for bottom-funnel search",
    ],
    linkHref: "/industries/saas",
  },
];

const whatWeDoVsDont = {
  included: [
    "Full campaign strategy and execution",
    "Content creation (blogs, landing pages, ads)",
    "Paid media management across platforms",
    "SEO implementation and monitoring",
    "Monthly reporting with revenue attribution",
    "Quarterly business reviews",
  ],
  notIncluded: [
    "CRM setup (see CRM Onboarding)",
    "Website redesigns (see Website Development)",
    "Automation workflow builds (see Marketing Automation)",
    "One-time projects without ongoing retainer",
  ],
};

const processSteps = [
  {
    step: "01",
    title: "Audit & Strategy",
    description: "We analyze your current marketing, competitors, and opportunities. You get a clear roadmap with prioritized initiatives.",
  },
  {
    step: "02",
    title: "Foundation Setup",
    description: "We set up tracking, attribution, and reporting so we can measure what matters—revenue, not vanity metrics.",
  },
  {
    step: "03",
    title: "Execute & Optimize",
    description: "We run campaigns, create content, and continuously optimize based on performance data and pipeline impact.",
  },
  {
    step: "04",
    title: "Scale What Works",
    description: "We identify winning channels and tactics, then scale investment where ROI is proven.",
  },
];

const caseStudy = {
  metric: "340% Increase in Qualified Leads",
  industry: "IT Services Company",
  challenge: "Marketing generated traffic but few qualified leads. Sales complained about lead quality. No way to prove marketing ROI to leadership.",
  solution: "Built integrated content + paid strategy targeting technical decision-makers. Created comparison pages, technical guides, and LinkedIn campaigns. Full attribution tracking from first touch to closed deal.",
  result: "Qualified leads increased 340% in 9 months. Cost per qualified lead dropped 52%. Marketing now proves $1.2M in influenced pipeline quarterly.",
};

const faqs = [
  {
    question: "How is this different from Marketing Automation?",
    answer: "Marketing Automation is about building the systems—workflows, scoring, nurture sequences. Growth Marketing is ongoing execution—running campaigns, creating content, managing ads, and optimizing performance. Most clients need both: we build the automation systems, then run marketing programs that feed into them.",
  },
  {
    question: "What's the minimum engagement?",
    answer: "We work on quarterly retainers minimum. Marketing results take time to compound—SEO needs 3-6 months, paid campaigns need optimization cycles, content builds over time. One-off projects rarely deliver sustainable growth.",
  },
  {
    question: "Do you work with in-house marketing teams?",
    answer: "Yes. We can supplement your team (handling SEO while they focus on content), provide strategic direction (quarterly planning, performance reviews), or fully manage execution. We adapt to your team's capabilities and bandwidth.",
  },
  {
    question: "How do you handle industry regulations (healthcare, finance)?",
    answer: "We're experienced with regulated industries. For healthcare, this means HIPAA-compliant forms, appropriate disclaimers, and compliant advertising. We work with your legal/compliance team on review processes and maintain documentation.",
  },
  {
    question: "What platforms do you manage ads on?",
    answer: "Google Ads (Search, Display, YouTube), LinkedIn Ads, Meta (Facebook/Instagram), and programmatic display. We recommend channels based on your audience and goals—not all platforms make sense for every business.",
  },
  {
    question: "How do you report on results?",
    answer: "Monthly reports with full revenue attribution. We connect marketing activities to pipeline and closed revenue, not just clicks and impressions. Quarterly business reviews dive deeper into strategy and planning.",
  },
];

const relatedServices = [
  {
    title: "Marketing Automation",
    description: "Build the systems that turn your marketing leads into customers—nurture sequences, scoring, and workflows.",
    href: "/services/marketing-automation",
  },
  {
    title: "Website & CMS Development",
    description: "Ensure your website converts the traffic we drive with optimized landing pages and user experience.",
    href: "/services/development",
  },
  {
    title: "Reporting & Analytics",
    description: "Go deeper on attribution with custom dashboards that connect every marketing dollar to revenue.",
    href: "/services/reporting",
  },
];

export default function MarketingPage() {
  return (
    <>
      <PageHeader
        badge="Service"
        title="Growth Marketing Services"
        description="Full-service marketing execution—SEO, paid ads, content, and conversion optimization—all tied to revenue. For healthcare, IT, and SaaS."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Growth Marketing", href: "/services/marketing" },
        ]}
      />

      {/* Pain Point Section */}
      <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
        <FadingGridPattern type="dots" color="gray" opacity={0.08} spacing={28} fadeDirection="both" />
        <GradientOrb color="orange" size="xl" className="-top-48 -right-48 opacity-30" intensity="subtle" blur="xl" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-6">
              You&apos;re running campaigns but can&apos;t prove what&apos;s working
            </h2>
            <p className="text-lg text-black/70 mb-6 leading-relaxed">
              Traffic is up. Leads are coming in. But you can&apos;t tell your CEO which campaigns actually drive revenue. Sales says lead quality is bad. You&apos;re not sure whether to double down on content or spend more on ads.
            </p>
            <p className="text-lg text-black/70 leading-relaxed">
              We run growth marketing programs that connect to revenue. Every campaign is tracked from first touch to closed deal. You&apos;ll know exactly what&apos;s working, what&apos;s not, and where to invest for maximum growth.
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
              Marketing Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              Full-funnel growth marketing
            </h2>
            <p className="text-lg text-black/60">
              From top-of-funnel awareness to bottom-funnel conversion, we manage the entire marketing engine.
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

      {/* What's Included vs Not */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Scope
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              What&apos;s included (and what&apos;s not)
            </h2>
            <p className="text-lg text-black/60">
              Growth Marketing is ongoing execution. Here&apos;s where it fits with our other services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                What&apos;s Included
              </h3>
              <ul className="space-y-3">
                {whatWeDoVsDont.included.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-black/70">
                    <svg className="w-4 h-4 text-teal-500 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-black/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Not Included (Separate Services)
              </h3>
              <ul className="space-y-3">
                {whatWeDoVsDont.notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-black/70">
                    <svg className="w-4 h-4 text-black/40 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Industry Expertise
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              Marketing built for your industry
            </h2>
            <p className="text-lg text-black/60 max-w-2xl mx-auto">
              Healthcare compliance, IT buyer journeys, SaaS metrics—we understand your market.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {industryUseCases.map((industry) => (
              <div key={industry.industry} className="bg-gray-50 rounded-2xl p-8">
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
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Our Process
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              How we drive growth
            </h2>
            <p className="text-lg text-black/60">
              Data-driven from day one. We measure, optimize, and scale what works.
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
        <GradientOrb color="orange" size="xl" className="-top-32 -left-32 opacity-30" intensity="medium" blur="xl" />
        <GradientOrb color="teal" size="lg" className="bottom-0 right-1/4 opacity-20" intensity="subtle" blur="xl" />
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
                Common questions about growth marketing
              </h2>
              <p className="text-lg text-black/60 mb-8">
                Everything you need to know about working with us on growth.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/80 transition-colors"
              >
                Get a Free Marketing Audit
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
              Build your complete growth stack
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
