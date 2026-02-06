import { Metadata } from "next";
import { CTABanner } from "@/components/sections";
import Link from "next/link";
import { ServiceFAQ } from "@/components/service-page";
import { GradientOrb, MeshBackground, FadingGridPattern } from "@/components/ui/visuals";
import { getImageForSlot } from "@/lib/images/get-image-for-slot";
import { ServicePageWrapper } from "@/components/ServicePageWrapper";
import { PageHeaderWithPreview } from "@/components/PageHeaderWithPreview";

export const metadata: Metadata = {
  title: "CRM Onboarding | Media Garcia",
  description: "Get your CRM set up right—whether you choose HubSpot, Salesforce, or a custom platform. Expert onboarding that your team will actually use.",
};

const stats = [
  { value: "200+", label: "CRMs Onboarded" },
  { value: "94%", label: "User Adoption Rate" },
  { value: "3 weeks", label: "Average Time to Value" },
  { value: "4.9/5", label: "Client Satisfaction" },
];

const capabilities = [
  {
    title: "CRM Architecture & Setup",
    description: "We design your CRM around how your team actually works—not how the software thinks you should work.",
    features: ["Custom properties & fields", "Pipeline configuration", "User roles & permissions", "Workspace organization"],
  },
  {
    title: "Data Migration & Cleanup",
    description: "Import your existing data without the mess. We clean, deduplicate, and structure data so your CRM starts fresh.",
    features: ["Data mapping & validation", "Duplicate detection", "Historical data import", "Data quality scoring"],
  },
  {
    title: "Workflow Automation",
    description: "Set up the automations that save your team hours from day one—without overwhelming them with complexity.",
    features: ["Lead assignment rules", "Task automation", "Email notifications", "Deal stage triggers"],
  },
  {
    title: "Integration Setup",
    description: "Connect your CRM to the tools your team already uses so data flows seamlessly across your tech stack.",
    features: ["Email & calendar sync", "Marketing tools", "Communication apps", "Custom integrations"],
  },
  {
    title: "Reporting Dashboards",
    description: "Give leadership visibility into the metrics that matter—from day one, not months later.",
    features: ["Executive dashboards", "Sales performance", "Pipeline visibility", "Custom reports"],
  },
  {
    title: "Team Training & Adoption",
    description: "Your CRM only works if your team uses it. We train by role, not by feature, so adoption sticks.",
    features: ["Role-based training", "Video documentation", "Quick reference guides", "Ongoing support"],
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
    description: "Build HIPAA-compliant CRM workflows that protect patient data while streamlining provider communications, referral tracking, and patient acquisition.",
    features: ["HIPAA-compliant data handling", "EHR integration readiness", "Provider referral workflows", "Patient communication tracking"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    industry: "IT Services & Technology",
    description: "Handle complex B2B sales cycles with multi-stakeholder deal tracking, technical evaluation stages, and account hierarchies that match how enterprise deals actually close.",
    features: ["Multi-stakeholder deal tracking", "Technical evaluation stages", "Account hierarchy management", "Long sales cycle optimization"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    industry: "B2B SaaS",
    description: "Connect product usage data to your CRM for expansion revenue tracking, customer health scoring, and product-led growth workflows that convert trials to paid.",
    features: ["Product usage integration", "Trial-to-paid tracking", "Expansion revenue workflows", "Customer health scoring"],
  },
];

const process = [
  { step: "01", title: "Discovery", description: "We learn how your team works, what's broken, and what success looks like—before touching any settings." },
  { step: "02", title: "Architecture", description: "Design your CRM structure around your processes, not generic best practices that don't fit." },
  { step: "03", title: "Build & Configure", description: "Set up your CRM with custom properties, pipelines, automations, and integrations." },
  { step: "04", title: "Data Migration", description: "Import and clean your existing data with validation at every step." },
  { step: "05", title: "Training & Launch", description: "Train your team by role, go live with support, and ensure adoption sticks." },
];

const caseStudy = {
  metric: "80% Adoption in 30 Days",
  industry: "Healthcare Provider Network",
  challenge: "50-location provider network had tried CRM implementation twice before—both failed due to poor user adoption and workflows that didn't match clinical operations.",
  solution: "Designed CRM workflows around their actual referral process, integrated with their scheduling system, and trained staff in role-specific sessions focused on their daily tasks.",
  result: "80% team adoption within 30 days, 15 hours saved per location per week, and full ROI achieved in under 90 days.",
};

const faqs = [
  {
    question: "Do you only work with HubSpot?",
    answer: "No. While we're a Platinum HubSpot Partner and HubSpot is our most-requested platform, we also onboard teams to Salesforce, Zoho, Pipedrive, and custom CRM solutions. We recommend the platform that fits your needs and budget—not the one that's easiest for us. During discovery, we'll assess your requirements and suggest the best fit.",
  },
  {
    question: "How long does CRM onboarding take?",
    answer: "Most onboarding projects complete in 2-4 weeks for standard implementations, and 6-8 weeks for complex setups with multiple integrations or large data migrations. We'll give you a specific timeline during discovery based on your actual requirements—no generic estimates.",
  },
  {
    question: "What if our team doesn't adopt the CRM?",
    answer: "This is the most common reason CRM implementations fail—and why we focus heavily on adoption. We train by role (not by feature), create quick-reference guides, and design workflows that make the CRM easier to use than the old way. Our 94% adoption rate isn't luck—it's methodology.",
  },
  {
    question: "Can you work with our existing data?",
    answer: "Yes. We migrate data from spreadsheets, legacy CRMs, and other systems with full validation and cleanup. Your CRM will start with clean, deduplicated data—not a mess of duplicates and outdated records that undermines trust in the system.",
  },
  {
    question: "Does this work for healthcare organizations with HIPAA requirements?",
    answer: "Absolutely. We have extensive experience with healthcare organizations and understand HIPAA compliance requirements. We configure CRMs to handle PHI appropriately, set up proper access controls, and ensure your workflows meet compliance standards.",
  },
  {
    question: "What ongoing support do you provide?",
    answer: "We offer flexible ongoing support packages after launch—from ad-hoc help to dedicated monthly retainers. Many clients continue working with us for optimization, training new team members, building new automations, and strategic guidance. 98% of our clients stay with us year over year.",
  },
];

const relatedServices = [
  {
    title: "Sales Enablement",
    description: "Turn your newly onboarded CRM into a sales acceleration engine with sequences, playbooks, and pipeline optimization.",
    href: "/services/sales-enablement",
  },
  {
    title: "Marketing Automation",
    description: "Build on your CRM foundation with automated nurture campaigns, lead scoring, and attribution reporting.",
    href: "/services/marketing-automation",
  },
  {
    title: "Reporting & Analytics",
    description: "Get executive dashboards and custom reports that connect your CRM data to business outcomes.",
    href: "/services/reporting",
  },
];

export default function CRMOnboardingPage() {
  const heroImage = getImageForSlot("service-crm-onboarding");

  return (
    <ServicePageWrapper>
      <PageHeaderWithPreview
        badge="Service"
        title="CRM Onboarding"
        description="Get your CRM set up right—whether you choose HubSpot, Salesforce, or a custom platform. We configure it around how your team actually works, so they'll use it."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "CRM Onboarding", href: "/services/hubspot-onboarding" },
        ]}
        defaultImage={heroImage}
        slot="service-crm-onboarding"
        imageAlt="CRM onboarding and implementation"
        duotoneColor="teal"
      />

      {/* Pain Point Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-6">
              You bought a CRM six months ago. Your team still uses spreadsheets.
            </h2>
            <p className="text-lg text-black/60 leading-relaxed mb-6">
              It&apos;s not their fault. Most CRM implementations fail because they&apos;re built around software features instead of how teams actually work. Your sales reps don&apos;t need a training manual—they need a system that makes their job easier, not harder.
            </p>
            <p className="text-lg text-black/80 font-medium">
              We change that. We set up your CRM the way your team actually works—so they&apos;ll use it without being forced to.
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
        {/* Background pattern */}
        <FadingGridPattern
          type="dots"
          color="gray"
          opacity={0.08}
          spacing={28}
          fadeDirection="both"
        />
        <GradientOrb
          color="teal"
          size="xl"
          className="-top-48 -right-48 opacity-30"
          intensity="subtle"
          blur="xl"
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              What&apos;s Included
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              Everything you need for a CRM that actually works
            </h2>
            <p className="text-lg text-black/60 max-w-2xl">
              We configure HubSpot, Salesforce, or your CRM of choice with everything your team needs—without the bloat they don&apos;t.
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
              CRM onboarding built for your industry
            </h2>
            <p className="text-lg text-black/60 max-w-2xl">
              Generic CRM setups create generic results. We configure your CRM with industry-specific workflows, compliance requirements, and best practices.
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

      {/* Inline CTA */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="bg-black rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-2">
                See CRM onboarding in action
              </h3>
              <p className="text-white/70">
                Read how we&apos;ve implemented CRM systems for companies like yours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-teal-500 hover:text-white transition-all"
              >
                View Case Studies
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-400 transition-all"
              >
                Book a Strategy Call
              </Link>
            </div>
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
              How we onboard your CRM
            </h2>
            <p className="text-lg text-black/60 max-w-2xl">
              A structured process that puts understanding your business first—not rushing to configure features you won&apos;t use.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
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
        <GradientOrb
          color="teal"
          size="xl"
          className="-top-32 -left-32 opacity-30"
          intensity="medium"
          blur="xl"
        />
        <GradientOrb
          color="purple"
          size="lg"
          className="bottom-0 right-1/4 opacity-20"
          intensity="subtle"
          blur="xl"
        />
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
                  <p className="text-4xl font-black text-teal-500">80%</p>
                  <p className="text-white/60 text-sm mt-2">Team Adoption</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-teal-500">30</p>
                  <p className="text-white/60 text-sm mt-2">Days to Full Use</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-teal-500">15 hrs</p>
                  <p className="text-white/60 text-sm mt-2">Saved per Location/Week</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-teal-500">&lt;90</p>
                  <p className="text-white/60 text-sm mt-2">Days to Full ROI</p>
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
                CRM onboarding FAQ
              </h2>
              <p className="text-lg text-black/60 leading-relaxed mb-8">
                Everything you need to know about our CRM onboarding process. Have a question we didn&apos;t answer?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-600 transition-colors group"
              >
                Book a Quick Call
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
              Build on your CRM foundation
            </h2>
            <p className="text-lg text-black/60 max-w-2xl">
              Once your CRM is set up right, these services help you get even more value from your investment.
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
