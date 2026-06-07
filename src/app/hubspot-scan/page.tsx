import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { GradientOrb, FadingGridPattern } from "@/components/ui/visuals";
import { getImageForSlot } from "@/lib/images/get-image-for-slot";
import { ScanReportPreview } from "./ScanReportPreview";
import { ScanCTASection } from "./ScanCTASection";

export const metadata: Metadata = {
  title: "Portal Pulse: A RevOps Agent That Earns Its Access | Media Garcia",
  description:
    "Portal Pulse is the RevOps agent Media Garcia built in-house. It reads a HubSpot portal end to end, proposes fixes in plain language, and runs them only inside the lanes you approve. The tooling that sets us apart from other agencies.",
  alternates: { canonical: "/hubspot-scan" },
};

const heroStats = [
  { value: "34", label: "Scanner Modules" },
  { value: "0", label: "Writes Without Your Sign-off" },
  { value: "3", label: "Plays, Scoped and Reversible" },
  { value: "< 5min", label: "To Your First Pulse" },
];

const moments = [
  {
    step: "01",
    title: "We show you what we see.",
    description:
      "A full read of your portal before anything is touched. Pipelines, properties, workflows, reports. You read the room before we enter it.",
  },
  {
    step: "02",
    title: "We propose. You approve.",
    description:
      "Every action is drafted, scoped, and explained in language your team already uses. Nothing ships without your sign-off.",
  },
  {
    step: "03",
    title: "We do the work. You review the summary.",
    description:
      "The agent executes inside the lanes you approved, then hands you a clean record of what changed and why.",
  },
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

const plays = [
  {
    idx: "PLAY 01",
    name: "The Clean Slate Play",
    outcome:
      "Retire the automations, properties, and reports nobody uses, with a paper trail your admin can defend in a meeting.",
    runtime: "Runs in ~48 hours",
    risk: "LOW RISK",
  },
  {
    idx: "PLAY 02",
    name: "The Pipeline Integrity Play",
    outcome:
      "Deal stages that mean the same thing across every team, so your CRO can put a number behind the forecast without a caveat.",
    runtime: "Runs over 1 to 2 weeks",
    risk: "SUPERVISED",
  },
  {
    idx: "PLAY 03",
    name: "The Lead Source Play",
    outcome:
      "One attribution taxonomy. Every lead, every channel, every campaign stitched to a source you can actually measure.",
    runtime: "Runs over 2 to 3 weeks",
    risk: "SUPERVISED",
  },
];

const audiences = [
  {
    title: "We build, we don't just configure",
    description:
      "Other shops resell HubSpot's native tools and call it strategy. We engineer our own agents on top of them. Portal Pulse is one of several we run in-house.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 21h18"
        />
      </svg>
    ),
  },
  {
    title: "Findings you can actually trust",
    description:
      "Every issue we raise is backed by an agent that read your real portal against 82 rules, not a junior working from a generic checklist.",
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
    title: "Senior work, at machine speed",
    description:
      "Plays that take other agencies weeks of manual effort run in hours here, with a dry run you approve and an undo path you can use.",
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

const faqs = [
  {
    question: "What access does Portal Pulse start with?",
    answer:
      "It starts with read-only OAuth to your HubSpot portal. The first pulse never writes, modifies, or deletes anything. Access is scoped to the specific APIs each module needs, and you can audit every scope inside HubSpot.",
  },
  {
    question: "Does it ever change my data?",
    answer:
      "Only after you approve a specific play, and only inside the lanes you signed off on. Every action type is one you have approved before, every action has an undo path, and the agent stops the moment it reaches something outside its authority.",
  },
  {
    question: "How is my data protected?",
    answer:
      "Scan data is processed in memory and is not stored on our servers beyond the report window. The agent works against your portal through the API. It does not copy your database somewhere else.",
  },
  {
    question: "Can I revoke access?",
    answer:
      "Any time, from HubSpot Settings, Integrations, Connected Apps. The first pulse is non-invasive, so you can run it, read the report, and revoke it if the read is all you came for.",
  },
  {
    question: "What is a play?",
    answer:
      "A scoped piece of work with a dry run you approve and an undo path you can use. Clean Slate, Pipeline Integrity, and Lead Source are the first three. You check the scope, not the line items.",
  },
  {
    question: "Does it work with my HubSpot plan?",
    answer:
      "Yes. It works across Free, Starter, Professional, and Enterprise. Some modules and plays surface more on Professional and Enterprise, where workflows and custom reporting live.",
  },
];

export default function HubSpotScanPage() {
  const heroImage = getImageForSlot("hubspot-scan-hero");

  return (
    <>
      <PageHeader
        badge="Our Edge"
        title="Portal Pulse"
        description="Most agencies audit your HubSpot with a junior and a spreadsheet. We built an agent for it. Portal Pulse reads a portal end to end, proposes every fix in plain language, and changes nothing without sign-off. It is the tooling behind how Media Garcia works, and part of why our work holds up where other shops guess."
        breadcrumbs={[{ label: "Portal Pulse", href: "/hubspot-scan" }]}
        backgroundImage={heroImage ? { src: heroImage, color: "teal", pattern: "arc" } : undefined}
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

      {/* How It Works */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <FadingGridPattern type="dots" color="gray" opacity={0.08} spacing={28} fadeDirection="both" />
        <GradientOrb color="teal" size="xl" className="-top-48 -right-48 opacity-30" intensity="subtle" blur="xl" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              How It Works
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              Scan. Plan. Fix. In that order.
            </h2>
            <p className="text-lg text-black/60 leading-relaxed">
              Portal Pulse never runs ahead of you. It earns the next step by showing its work on the last one.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {moments.map((moment) => (
              <div key={moment.step} className="relative">
                <span className="text-6xl lg:text-7xl font-black text-teal-500/10 absolute -top-4 -left-2">
                  {moment.step}
                </span>
                <div className="relative pt-12">
                  <h3 className="text-2xl font-black text-black mb-3">{moment.title}</h3>
                  <p className="text-black/60 leading-relaxed">{moment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What the first pulse sees */}
      <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
        <FadingGridPattern type="dots" color="gray" opacity={0.08} spacing={28} fadeDirection="both" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              The First Pulse
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              Your first pulse reads every corner of the portal
            </h2>
            <p className="text-lg text-black/60 leading-relaxed">
              Before Portal Pulse proposes a single change, it reads the whole portal against best-practice
              rules and surfaces what matters, each finding with a severity and a recommended fix.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scannerCategories.map((category) => (
              <div
                key={category.title}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow"
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

      {/* The Plays */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <FadingGridPattern type="dots" color="gray" opacity={0.06} spacing={32} fadeDirection="both" />
        <GradientOrb color="teal" size="xl" className="-bottom-32 -right-32 opacity-30" intensity="subtle" blur="xl" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              The Plays
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              Then it runs plays, not scripts
            </h2>
            <p className="text-lg text-black/60 leading-relaxed">
              Each play is a scoped piece of work with a dry run you approve and an undo path you can use.
              You check the scope, not the line items.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plays.map((play) => (
              <div
                key={play.idx}
                className="bg-gray-50 rounded-2xl p-8 flex flex-col hover:shadow-lg transition-shadow"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
                  {play.idx}
                </span>
                <h3 className="text-xl font-black text-black mb-3">{play.name}</h3>
                <p className="text-black/60 leading-relaxed mb-8 flex-1">{play.outcome}</p>
                <div className="flex items-center justify-between border-t border-black/10 pt-4">
                  <span className="text-sm text-black/50">{play.runtime}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-500">
                    {play.risk}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Report Preview */}
      <section id="report-preview" className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
        <FadingGridPattern type="dots" color="gray" opacity={0.06} spacing={32} fadeDirection="both" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Sample Pulse
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              What your first pulse looks like
            </h2>
            <p className="text-lg text-black/60 leading-relaxed">
              An anonymized preview of a real Portal Pulse read. Every finding has a severity, a
              plain-language explanation, and a recommended fix.
            </p>
          </div>

          <ScanReportPreview />
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <GradientOrb color="teal" size="xl" className="-bottom-32 -left-32 opacity-30" intensity="subtle" blur="xl" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Our Edge
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              Why working with Media Garcia is different
            </h2>
            <p className="text-lg text-black/60 leading-relaxed">
              Portal Pulse is one of several agents we run in-house. Most agencies in our space cannot say that.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
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

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              FAQ
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              Common questions about Portal Pulse
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-bold text-black mb-2">{faq.question}</h3>
                <p className="text-black/60 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with embedded form */}
      <ScanCTASection />
    </>
  );
}
