import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import Link from "next/link";
import { GradientOrb, MeshBackground, FadingGridPattern } from "@/components/ui/visuals";

export const metadata: Metadata = {
  title: "HubSpot Scan — Automated CRM Health Audits | Media Garcia",
  description:
    "Automated portal audits with 34 scanner modules that find issues before they become problems. Contact health, deal pipelines, workflows, integrations, reporting, and security — scanned in under 5 minutes.",
  alternates: { canonical: "/hubspot-scan" },
};

const heroStats = [
  { value: "34", label: "Scanner Modules" },
  { value: "82", label: "Assessment Rules" },
  { value: "< 5min", label: "Full Portal Audit" },
  { value: "100%", label: "Automated" },
];

const scannerCategories = [
  {
    title: "Contact & Company Health",
    description:
      "Duplicate detection, missing required fields, lifecycle stage inconsistencies, data decay scoring.",
    count: "8 scanners",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
  },
  {
    title: "Deal Pipeline Integrity",
    description:
      "Stale deals, missing close dates, stage skip detection, amount inconsistencies, pipeline hygiene.",
    count: "6 scanners",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Workflow & Automation Audit",
    description:
      "Broken workflows, enrollment conflicts, suppression list gaps, execution errors, redundant automations.",
    count: "5 scanners",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Integration Health",
    description:
      "Sync errors, field mapping mismatches, API rate limit warnings, stale connections.",
    count: "4 scanners",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
        />
      </svg>
    ),
  },
  {
    title: "Reporting & Attribution",
    description:
      "Broken dashboards, campaign tracking gaps, UTM inconsistencies, lifecycle funnel leaks.",
    count: "5 scanners",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
  },
  {
    title: "Security & Compliance",
    description:
      "User permission review, sensitive data exposure, GDPR consent gaps, audit trail coverage.",
    count: "6 scanners",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: "01",
    title: "Connect",
    description:
      "Authorize read-only access to your HubSpot portal. We never write or modify your data.",
  },
  {
    step: "02",
    title: "Scan",
    description:
      "34 modules analyze your portal against 82 rules. Contacts, deals, workflows, integrations, security — everything.",
  },
  {
    step: "03",
    title: "Report",
    description:
      "Get a prioritized report with severity ratings, fix instructions, and estimated impact for each finding.",
  },
];

const sampleFindings = [
  {
    severity: "Critical",
    color: "red",
    message:
      "847 contacts with no lifecycle stage assigned — these contacts are invisible to your automation",
  },
  {
    severity: "Warning",
    color: "amber",
    message:
      "12 workflows with enrollment conflicts — contacts may be receiving duplicate or contradictory sequences",
  },
  {
    severity: "Info",
    color: "blue",
    message:
      "38% of deal properties have never been used — consider archiving to reduce clutter",
  },
  {
    severity: "Critical",
    color: "red",
    message:
      "3 integrations showing sync errors in the last 7 days — data is not flowing correctly",
  },
];

const audiences = [
  {
    title: "RevOps Teams",
    description:
      "You inherited a portal with 5 years of tech debt. Scan finds what\u2019s broken so you can prioritize fixes.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.42 15.17l-5.1-3.26a.75.75 0 010-1.28l5.1-3.26a.75.75 0 011.08.67v6.46a.75.75 0 01-1.08.67zM19.42 15.17l-5.1-3.26a.75.75 0 010-1.28l5.1-3.26a.75.75 0 011.08.67v6.46a.75.75 0 01-1.08.67z"
        />
      </svg>
    ),
  },
  {
    title: "Agencies",
    description:
      "Show clients the state of their portal before you start work. Scan creates instant credibility and scopes projects.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
  {
    title: "New HubSpot Customers",
    description:
      "Just migrated? Scan validates that your data landed correctly and your setup follows best practices.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        />
      </svg>
    ),
  },
];

export default function HubSpotScanPage() {
  return (
    <>
      <PageHeader
        badge="Product"
        title="HubSpot Scan"
        description="Automated CRM health audits that find what's broken, what's unused, and what's costing you money — across 34 scanner modules."
        breadcrumbs={[{ label: "HubSpot Scan", href: "/hubspot-scan" }]}
      />

      {/* Hero Stats Bar */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-black text-teal-500">{stat.value}</p>
                <p className="text-white/60 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What It Scans */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <FadingGridPattern type="dots" color="gray" opacity={0.08} spacing={28} fadeDirection="both" />
        <GradientOrb color="teal" size="xl" className="-top-48 -right-48 opacity-30" intensity="subtle" blur="xl" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              What It Scans
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              Six categories. 34 modules. Every corner of your portal.
            </h2>
            <p className="text-lg text-black/60 leading-relaxed">
              Each scanner module checks specific aspects of your HubSpot portal against best-practice rules
              and surfaces findings with severity ratings and fix instructions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scannerCategories.map((category) => (
              <div
                key={category.title}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-500 mb-6">
                  {category.icon}
                </div>
                <h3 className="text-xl font-black text-black mb-3">{category.title}</h3>
                <p className="text-black/60 leading-relaxed mb-4">{category.description}</p>
                <span className="text-sm font-bold text-teal-500">{category.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
        <MeshBackground />
        <GradientOrb color="purple" size="lg" className="bottom-0 left-1/4 opacity-20" intensity="subtle" blur="xl" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              How It Works
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              Three steps. Under five minutes.
            </h2>
            <p className="text-lg text-black/60 leading-relaxed">
              No configuration, no onboarding calls, no waiting. Connect your portal and get results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <span className="text-6xl lg:text-7xl font-black text-teal-500/10 absolute -top-4 -left-2">
                  {step.step}
                </span>
                <div className="relative pt-12">
                  <h3 className="text-2xl font-black text-black mb-3">{step.title}</h3>
                  <p className="text-black/60 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Findings */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <FadingGridPattern type="dots" color="gray" opacity={0.06} spacing={32} fadeDirection="both" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Sample Findings
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              What a real scan looks like
            </h2>
            <p className="text-lg text-black/60 leading-relaxed">
              These are anonymized findings from an actual HubSpot Scan. Every finding includes a severity
              rating, a plain-language explanation, and instructions to fix it.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl">
            {sampleFindings.map((finding, index) => {
              const severityColors: Record<string, { bg: string; border: string; badge: string; text: string }> = {
                red: {
                  bg: "bg-red-50",
                  border: "border-red-200",
                  badge: "bg-red-500",
                  text: "text-red-800",
                },
                amber: {
                  bg: "bg-amber-50",
                  border: "border-amber-200",
                  badge: "bg-amber-500",
                  text: "text-amber-800",
                },
                blue: {
                  bg: "bg-blue-50",
                  border: "border-blue-200",
                  badge: "bg-blue-500",
                  text: "text-blue-800",
                },
              };
              const colors = severityColors[finding.color];
              return (
                <div
                  key={index}
                  className={`${colors.bg} border ${colors.border} rounded-2xl p-6 flex items-start gap-4`}
                >
                  <span
                    className={`${colors.badge} text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shrink-0`}
                  >
                    {finding.severity}
                  </span>
                  <p className={`${colors.text} leading-relaxed`}>{finding.message}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
        <GradientOrb color="teal" size="xl" className="-bottom-32 -left-32 opacity-30" intensity="subtle" blur="xl" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Who It&apos;s For
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              Built for people who own the CRM
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-500 mb-6">
                  {audience.icon}
                </div>
                <h3 className="text-xl font-black text-black mb-3">{audience.title}</h3>
                <p className="text-black/60 leading-relaxed">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
        <MeshBackground />
        <GradientOrb color="teal" size="xl" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" intensity="subtle" blur="xl" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative text-center">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
            Ready to scan your portal?
          </h2>
          <p className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-10">
            Get a complete CRM health audit in under 5 minutes. No code, no consultants, no guesswork.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-teal-500 text-white font-bold rounded-xl hover:bg-teal-600 transition-colors text-lg"
            >
              Request a Scan
            </Link>
            <Link
              href="/contact?subject=sample-report"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-bold rounded-xl hover:border-white/40 transition-colors text-lg"
            >
              See Sample Report
            </Link>
          </div>
          <p className="text-white/40 text-sm">
            Read-only access. We never modify your data.
          </p>
        </div>
      </section>
    </>
  );
}
