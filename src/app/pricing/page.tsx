import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Stats } from "@/components/sections/Stats";
import { GradientOrb, FadingGridPattern } from "@/components/ui/visuals";
import { caseStudies } from "@/data/case-studies";
import Link from "next/link";
import { PricingFAQ } from "./pricing-faq";

export const metadata: Metadata = {
  title: "Pricing | Media Garcia",
  description:
    "Custom pricing for CRM, RevOps, and revenue operations services. Projects, retainers, and fractional RevOps — scoped to your goals. Book a free strategy call.",
};

const MEETINGS_URL =
  "https://meetings.hubspot.com/louis3/discovery-meeting-with-louis";

const engagementModels = [
  {
    title: "Strategic Projects",
    description:
      "A defined engagement to solve a specific problem. CRM migrations, integration builds, process redesigns — scoped with clear deliverables and timeline.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Ongoing Partnerships",
    description:
      "A dedicated strategist embedded in your operations. Monthly retainer, flexible priorities, regular check-ins. This is how most of our long-term relationships work.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    title: "Fractional RevOps",
    description:
      "We step in as your RevOps team until you're ready to hire. Strategy, execution, and hiring support — all under one roof.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Advisory & Training",
    description:
      "Workshops, audits, and team enablement. We teach your team to own the system and make it stick.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
];

const processSteps = [
  {
    number: "01",
    title: "Book a Call",
    description:
      "15 minutes with Louis. We'll talk about your goals, current systems, and what success looks like. Free, no commitment.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Get a Proposal",
    description:
      "Within 48 hours, you'll receive a custom proposal with scope, timeline, and investment. No surprises.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Kick Off",
    description:
      "Once aligned, we start immediately. Most engagements are underway within 1-2 weeks.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

// Pick 3 diverse case studies for teasers
const featuredCaseStudySlugs = [
  "advi-health-crm-optimization",
  "xl-feet-ecommerce-growth",
  "current-energy-integrations",
];
const caseStudyTeasers = caseStudies.filter((cs) =>
  featuredCaseStudySlugs.includes(cs.slug)
);

export default function PricingPage() {
  return (
    <>
      {/* Section 1: PageHeader */}
      <PageHeader
        badge="How We Engage"
        title="Every business is different. Your investment should be too."
        description="We don't do packages. We build custom partnerships around your goals, timeline, and budget — then grow with you."
        breadcrumbs={[{ label: "Pricing", href: "/pricing" }]}
        backgroundImage={{ src: "/images/about/team-collaboration.jpg", color: "teal", pattern: "arc" }}
      />

      {/* Section 2: Philosophy */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <GradientOrb
          color="teal"
          size="xl"
          className="-top-48 -right-48 opacity-20"
          intensity="subtle"
          blur="xl"
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Narrative */}
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
                Our Philosophy
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-black mb-8">
                Built around you, not a template
              </h2>
              <div className="space-y-6 text-lg text-black/70 leading-relaxed">
                <p>
                  After 200+ implementations, we&apos;ve learned that the best
                  outcomes come from engagements built around what each business
                  actually needs — not what fits into a template.
                </p>
                <p>
                  Some clients need a two-week CRM fix. Others need us as their
                  fractional RevOps team for a year. One price for both would be
                  dishonest.
                </p>
                <p>
                  We&apos;ll always be straight about what things cost,
                  we&apos;ll work within your budget, and we won&apos;t recommend
                  work you don&apos;t need. That&apos;s why 98% of our clients
                  stay with us year over year.
                </p>
              </div>
            </div>

            {/* Right - Principle Cards */}
            <div className="space-y-4 lg:mt-16">
              {[
                {
                  title: "Outcomes over hours",
                  text: "We measure success by your results, not our timesheets.",
                },
                {
                  title: "Scoped to your goals",
                  text: "Every proposal is custom-built for what you need right now.",
                },
                {
                  title: "No wasted spend",
                  text: "We don't recommend work that won't move the needle.",
                },
              ].map((principle) => (
                <div
                  key={principle.title}
                  className="bg-gray-50 rounded-2xl p-6"
                >
                  <h3 className="text-lg font-bold text-black mb-1">
                    {principle.title}
                  </h3>
                  <p className="text-black/60">{principle.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Engagement Models */}
      <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
        <FadingGridPattern
          type="dots"
          color="gray"
          opacity={0.15}
          spacing={32}
          fadeDirection="both"
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Engagement Models
            </span>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight text-black mb-6">
              Flexible ways to work together
            </h2>
            <p className="text-lg text-black/60 leading-relaxed">
              Whether you need a focused project, a long-term partner, or
              something in between — we&apos;ll find the right fit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {engagementModels.map((model) => (
              <div
                key={model.title}
                className="bg-white rounded-2xl p-8 group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-500 mb-6">
                  {model.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {model.title}
                </h3>
                <p className="text-black/60 leading-relaxed mb-6">
                  {model.description}
                </p>
                <a
                  href={MEETINGS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-500 font-medium hover:text-teal-600 transition-colors group/link"
                >
                  Talk to us about this
                  <svg
                    className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Inline Testimonial */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-16">
            {/* Rating Stars */}
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-teal-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-2xl lg:text-4xl font-medium leading-relaxed text-black mb-10">
              &ldquo;Media Garcia was instrumental in scaling us up with HubSpot
              by stepping into the role of operations before we hired a
              full-time specialist. They set up our CRM, email workflows, and
              reporting dashboards, which we greatly appreciate.&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden ring-4 ring-teal-500/20">
                <div className="w-full h-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">YC</span>
                </div>
              </div>
              <div>
                <p className="font-bold text-black">Yvonne Chow</p>
                <p className="text-sm text-black/60">
                  Marketing Manager, Certn
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Pricing FAQ */}
      <PricingFAQ />

      {/* Section 6: Stats Bar */}
      <Stats />

      {/* Section 7: Getting Started Process */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <FadingGridPattern
          type="dots"
          color="gray"
          opacity={0.15}
          spacing={32}
          fadeDirection="both"
        />
        <GradientOrb
          color="teal"
          size="xl"
          className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"
          intensity="subtle"
          blur="xl"
        />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Getting Started
            </span>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight text-black mb-6">
              From first call to first win
            </h2>
            <p className="text-lg text-black/60 leading-relaxed">
              Three simple steps to go from conversation to momentum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 mb-16">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative group">
                <div className="bg-gray-50 rounded-2xl p-8 h-full relative z-10 group-hover:bg-black group-hover:text-white transition-all duration-500">
                  <span className="text-6xl font-black text-black/5 group-hover:text-white/10 absolute top-4 right-4 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-16 h-16 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-500 mb-6 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-teal-500 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-black/60 group-hover:text-white/70 leading-relaxed transition-colors">
                    {step.description}
                  </p>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                    <svg
                      className="w-6 h-6 text-teal-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={MEETINGS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-teal-500 transition-colors"
            >
              Start with a free strategy call
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Section 8: Case Study Teasers */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Results
            </span>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight text-black mb-6">
              See what custom partnerships deliver
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudyTeasers.map((cs) => (
              <Link
                key={cs.slug}
                href={`/work/${cs.slug}`}
                className="bg-white rounded-2xl p-8 group hover:shadow-lg transition-shadow duration-300 block"
              >
                <span className="inline-block px-3 py-1 bg-teal-500/10 text-teal-500 text-xs font-bold rounded-full mb-4">
                  {cs.industry}
                </span>
                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-teal-500 transition-colors">
                  {cs.client}
                </h3>
                <p className="text-sm text-black/60 mb-4 line-clamp-2">
                  {cs.description}
                </p>
                {cs.results[0] && (
                  <p className="text-3xl font-black text-teal-500 mb-1">
                    {cs.results[0].metric}
                  </p>
                )}
                {cs.results[0] && (
                  <p className="text-sm text-black/60 mb-6">
                    {cs.results[0].label}
                  </p>
                )}
                <span className="inline-flex items-center gap-2 text-teal-500 font-medium group-hover:gap-3 transition-all">
                  Read the full story
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Final CTA */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="bg-black rounded-3xl p-8 lg:p-16 text-white text-center">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              Let&apos;s figure out what you need.
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto text-lg">
              Book a 15-minute strategy call with Louis. No commitment, no sales
              pitch — just a conversation about where you are and where you want
              to be.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={MEETINGS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-full font-medium hover:bg-teal-400 transition-colors"
              >
                Book a Strategy Call
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <Link
                href="tel:+16516919123"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call 651-691-9123
              </Link>
            </div>
            <span className="text-white/40 text-sm mt-4 block">
              We&apos;ll send a custom proposal within 48 hours.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
