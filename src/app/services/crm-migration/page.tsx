import { Metadata } from "next";
import { CTABanner } from "@/components/sections";
import Link from "next/link";
import { ServiceFAQ } from "@/components/service-page";
import { GradientOrb, MeshBackground, FadingGridPattern } from "@/components/ui/visuals";
import { getImageForSlot } from "@/lib/images/get-image-for-slot";
import { ServicePageWrapper } from "@/components/ServicePageWrapper";
import { PageHeaderWithPreview } from "@/components/PageHeaderWithPreview";

export const metadata: Metadata = {
  title: "CRM Migration | Media Garcia",
  description: "Seamless CRM migration with zero data loss. We migrate from Salesforce, Pipedrive, Zoho, and more to HubSpot or any platform you choose.",
};

const stats = [
  { value: "50+", label: "Successful Migrations" },
  { value: "0", label: "Data Loss Incidents" },
  { value: "99.9%", label: "Data Accuracy" },
  { value: "2-4 hrs", label: "Typical Cutover Time" },
];

const platforms = [
  "Salesforce",
  "Pipedrive",
  "Zoho CRM",
  "Microsoft Dynamics",
  "Freshsales",
  "Copper",
  "Insightly",
  "ActiveCampaign",
  "Spreadsheets",
  "Custom Databases",
];

const capabilities = [
  {
    title: "Data Mapping & Planning",
    description: "We analyze your current CRM structure and create a detailed migration plan that preserves data relationships and history.",
    features: ["Field mapping", "Relationship preservation", "Custom property handling", "Timeline planning"],
  },
  {
    title: "Data Cleaning & Deduplication",
    description: "Your new CRM starts clean—not with years of duplicate records, outdated contacts, and data quality issues.",
    features: ["Duplicate detection", "Data standardization", "Invalid data flagging", "Quality scoring"],
  },
  {
    title: "Historical Data Preservation",
    description: "We migrate your complete activity history so you don't lose context on deals, communications, or customer relationships.",
    features: ["Email history", "Call logs", "Meeting records", "Notes & attachments"],
  },
  {
    title: "Integration Migration",
    description: "We ensure your integrations continue working or set up improved alternatives in your new platform.",
    features: ["Integration audit", "Alternative recommendations", "Re-connection support", "Testing & validation"],
  },
  {
    title: "Test & Validation",
    description: "Multiple test migrations and validation passes ensure everything works before the final cutover.",
    features: ["Test migrations", "Data validation", "User acceptance testing", "Rollback planning"],
  },
  {
    title: "Training & Go-Live Support",
    description: "Your team is trained and supported through the transition with dedicated assistance during cutover.",
    features: ["Team training", "Go-live support", "Post-migration assistance", "Documentation"],
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
    description: "HIPAA-compliant migrations that preserve patient data relationships, provider histories, and referral tracking while maintaining strict data security throughout the process.",
    features: ["HIPAA compliance throughout", "PHI handling procedures", "EHR integration continuity", "Audit trail preservation"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    industry: "IT Services & Technology",
    description: "Migrate complex account hierarchies, partner ecosystems, and multi-year deal histories while preserving the relationships between parent companies, subsidiaries, and contacts.",
    features: ["Account hierarchy preservation", "Partner data migration", "Long-cycle deal history", "Custom field mapping"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    industry: "B2B SaaS",
    description: "Preserve product usage history, subscription data, and customer lifecycle stages while ensuring continuity of expansion revenue tracking and customer health metrics.",
    features: ["Product usage history", "Subscription data mapping", "Customer health scores", "Expansion pipeline preservation"],
  },
];

const process = [
  { step: "01", title: "Data Audit", description: "Analyze your current CRM to understand data structure, quality issues, and migration requirements." },
  { step: "02", title: "Mapping & Planning", description: "Create detailed field mappings and a migration plan with timeline and testing approach." },
  { step: "03", title: "Data Cleaning", description: "Clean and deduplicate data before migration to ensure your new CRM starts fresh." },
  { step: "04", title: "Test Migration", description: "Run test migrations to validate data integrity and catch any issues early." },
  { step: "05", title: "Full Migration", description: "Execute the complete migration with real-time monitoring and validation." },
  { step: "06", title: "Verification", description: "Thorough QA testing to ensure all data migrated correctly and relationships intact." },
];

const caseStudy = {
  metric: "Zero Downtime Migration",
  industry: "Multi-Location Healthcare Provider",
  challenge: "50+ locations using Salesforce needed to migrate to HubSpot without disrupting daily operations. Previous migration attempts by other vendors had failed, causing data loss and workflow disruptions.",
  solution: "Built a parallel migration strategy with comprehensive test migrations, maintained both systems during transition, executed final cutover during off-hours with live monitoring, and provided on-site support for critical locations.",
  result: "100% data integrity with zero data loss. 2-hour cutover window. All 50 locations fully operational on Monday morning. Complete activity history preserved, including 5 years of patient communications.",
};

const faqs = [
  {
    question: "How long will the migration take?",
    answer: "Most migrations complete in 4-8 weeks end-to-end. The actual cutover (when you switch systems) is typically just 2-4 hours during off-hours. The majority of the timeline is spent on planning, testing, and validation—the work that ensures your data arrives intact.",
  },
  {
    question: "Will we lose any data during migration?",
    answer: "No. We have a 100% track record of zero data loss across 50+ migrations. Our process includes multiple validation checkpoints, test migrations, and rollback capabilities. We don't execute the final migration until we've proven data integrity in testing.",
  },
  {
    question: "Can we keep using our current CRM during the migration?",
    answer: "Yes. We run parallel systems during migration, so your team continues working normally until we're ready to cut over. We then sync any changes made during the transition period to ensure nothing is lost.",
  },
  {
    question: "What happens to our historical data?",
    answer: "We migrate your complete history—emails, calls, meetings, notes, deals, and activity timelines. Your sales and customer success teams won't lose context on any customer relationships.",
  },
  {
    question: "Do you migrate to platforms other than HubSpot?",
    answer: "Yes. While HubSpot is our most common destination (as a Platinum Partner), we also migrate to Salesforce, Zoho, and other CRM platforms. We'll recommend the platform that fits your needs—or work with your existing choice.",
  },
  {
    question: "What if something goes wrong during cutover?",
    answer: "We maintain a complete rollback plan and keep your original system intact until you've validated the migration. If anything unexpected occurs, we can quickly revert while we resolve the issue. We've never had to use this, but it's always ready.",
  },
];

const relatedServices = [
  {
    title: "CRM Onboarding",
    description: "After migration, get your team trained and your new CRM configured for success.",
    href: "/services/hubspot-onboarding",
  },
  {
    title: "Custom Integrations",
    description: "Reconnect or improve your integrations in the new platform.",
    href: "/services/integrations",
  },
  {
    title: "Reporting & Analytics",
    description: "Build new dashboards that take advantage of your new platform's capabilities.",
    href: "/services/reporting",
  },
];

export default function CRMMigrationPage() {
  const heroImage = getImageForSlot("service-crm-migration");

  return (
    <ServicePageWrapper>
      <PageHeaderWithPreview
        badge="Service"
        title="CRM Migration"
        description="Seamless data migration with zero data loss. We migrate from Salesforce, Pipedrive, Zoho, and more—to HubSpot or any platform you choose."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "CRM Migration", href: "/services/crm-migration" },
        ]}
        defaultImage={heroImage}
        slot="service-crm-migration"
        imageAlt="CRM data migration visualization"
        duotoneColor="purple"
      />

      {/* Pain Point Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-6">
              Your CRM is holding you back. But migrating feels risky.
            </h2>
            <p className="text-lg text-black/60 leading-relaxed mb-6">
              You know you need a better platform, but the thought of migration is terrifying. What if you lose customer data? What if deals fall through the cracks? What if the whole thing disrupts your business for weeks?
            </p>
            <p className="text-lg text-black/80 font-medium">
              Those fears are valid—we&apos;ve seen migrations go wrong. That&apos;s exactly why we built a process that eliminates those risks. Zero data loss. Minimal disruption. Complete peace of mind.
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

      {/* Platforms We Migrate From */}
      <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
        <FadingGridPattern type="dots" color="gray" opacity={0.08} spacing={28} fadeDirection="both" />
        <GradientOrb color="teal" size="xl" className="-top-48 -right-48 opacity-30" intensity="subtle" blur="xl" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Migration Sources
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              Platforms we migrate from
            </h2>
            <p className="text-lg text-black/60 max-w-2xl">
              We&apos;ve migrated data from virtually every CRM on the market. If your platform isn&apos;t listed, contact us—we can likely help.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {platforms.map((platform) => (
              <div key={platform} className="bg-white rounded-2xl p-6 text-center">
                <p className="font-bold text-black">{platform}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              What We Handle
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              Complete migration management
            </h2>
            <p className="text-lg text-black/60 max-w-2xl">
              We handle every aspect of migration—from initial audit to post-migration support—so you can focus on running your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability) => (
              <div key={capability.title} className="bg-gray-50 rounded-2xl p-8 group hover:shadow-lg transition-shadow">
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
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Industry Expertise
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              Migration expertise for your industry
            </h2>
            <p className="text-lg text-black/60 max-w-2xl">
              Different industries have different data structures and compliance requirements. We handle them all.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {industryUseCases.map((useCase) => (
              <div key={useCase.industry} className="bg-white rounded-2xl p-8 group hover:bg-teal-500/5 transition-colors">
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

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Our Process
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              How we migrate your CRM
            </h2>
            <p className="text-lg text-black/60 max-w-2xl">
              A methodical approach that eliminates risk through planning, testing, and validation at every step.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item) => (
              <div key={item.step} className="bg-gray-50 rounded-2xl p-8">
                <span className="text-5xl font-black text-teal-500/20">{item.step}</span>
                <h3 className="text-xl font-bold text-black mt-4 mb-2">{item.title}</h3>
                <p className="text-black/60">{item.description}</p>
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
                  <p className="text-4xl font-black text-teal-500">100%</p>
                  <p className="text-white/60 text-sm mt-2">Data Integrity</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-teal-500">50+</p>
                  <p className="text-white/60 text-sm mt-2">Locations Migrated</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-teal-500">2 hrs</p>
                  <p className="text-white/60 text-sm mt-2">Cutover Time</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-teal-500">5 yrs</p>
                  <p className="text-white/60 text-sm mt-2">History Preserved</p>
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
                CRM migration FAQ
              </h2>
              <p className="text-lg text-black/60 leading-relaxed mb-8">
                Everything you need to know about migrating your CRM safely and successfully. Have a question we didn&apos;t answer?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-teal-500 font-medium hover:text-teal-600 transition-colors group"
              >
                Get in touch
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
              After migration
            </h2>
            <p className="text-lg text-black/60 max-w-2xl">
              Migration is just the first step. These services help you maximize value from your new platform.
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
