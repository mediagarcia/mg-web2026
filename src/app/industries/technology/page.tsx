import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { GradientOrb, FadingGridPattern } from "@/components/ui/visuals";
import { getImageForSlot } from "@/lib/images/get-image-for-slot";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HubSpot for Technology Companies | Media Garcia",
  description:
    "HubSpot implementations built for scaling tech companies — multi-vertical pipelines, data integrations, enterprise forecasting, and service operations.",
};

const capabilities = [
  {
    title: "Sales Pipeline Architecture",
    description:
      "Vertical-specific pipelines with conditional fields, stage requirements, and team-based permissions that match how your sales org actually operates.",
    client: "Built for Certn",
    detail: "5 vertical-specific pipelines (HR, Property Management, Wholesale, Referral, API)",
  },
  {
    title: "Data Integration & Enrichment",
    description:
      "Connect third-party data sources directly into HubSpot so reps work from enriched records without switching tools.",
    client: "Built for Certn",
    detail: "ZoomInfo data enrichment + ChurnZero customer health signals",
  },
  {
    title: "Forecasting & Analytics",
    description:
      "Enterprise-grade forecasting on HubSpot Professional tier using custom properties for weighted revenue, ramp-up modeling, and geography-based projections.",
    client: "Built for Certn",
    detail: "Pro-tier forecasting with weighted/unweighted revenue and rep ramp-up modeling",
  },
  {
    title: "Service Operations",
    description:
      "Unified service desk implementations that consolidate member inquiries, standardize email marketing, and bridge marketing-sales-service operations.",
    client: "Built for MIPI Alliance",
    detail: "3 departments unified under one consolidated service desk",
  },
];

const certnResults = [
  { value: "5", label: "Sales Pipelines Built" },
  { value: "3", label: "Data Sources Integrated" },
  { value: "10+", label: "Custom Dashboards" },
  { value: "2", label: "Geographic Teams (US + CAN)" },
];

const clientLogos = [
  { name: "Certn", src: "/images/clients/certn.png" },
  { name: "MIPI Alliance", src: "/images/clients/mipi.png" },
  { name: "Cloud Force Gurus", src: "/images/clients/cloudforcegurus.png" },
  { name: "Optix", src: "/images/clients/optix.png" },
];

export default function TechnologyIndustryPage() {
  const heroImage = getImageForSlot("industries/technology-hero");

  return (
    <>
      {/* ── 1. Hero ── */}
      <PageHeader
        badge="Industry"
        title="HubSpot for Technology Companies"
        description="We help scaling tech companies turn HubSpot into the revenue infrastructure they actually need — multi-vertical pipelines, enriched data, enterprise forecasting, and cross-functional operations."
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: "Technology", href: "/industries/technology" },
        ]}
        backgroundImage={
          heroImage
            ? { src: heroImage, color: "purple", pattern: "grid" }
            : undefined
        }
      />

      {/* ── 2. Featured Case Study: Certn ── */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <GradientOrb
          color="purple"
          size="xl"
          className="-top-48 -right-48 opacity-15"
          intensity="subtle"
          blur="xl"
        />
        <FadingGridPattern
          type="dots"
          color="gray"
          opacity={0.05}
          spacing={32}
          fadeDirection="both"
        />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-neon-purple-500" />
            <span className="text-sm font-bold tracking-widest text-neon-purple-500 uppercase">
              Featured Case Study
            </span>
          </div>

          {/* Main card */}
          <div className="bg-gray-50 rounded-3xl overflow-hidden">
            {/* Top: Challenge + Deliverables (two-column) */}
            <div className="grid lg:grid-cols-2">
              {/* Left: The Challenge */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <Image
                      src="/images/clients/certn.png"
                      alt="Certn logo"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-black">Certn</h3>
                    <p className="text-sm text-black/50">
                      AI-Powered Background Screening SaaS
                    </p>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-black mb-4">
                  The Challenge
                </h4>
                <p className="text-black/60 leading-relaxed mb-4">
                  Certn was scaling fast across five verticals — HR, property
                  management, wholesale, referral, and API partners — but their
                  CRM couldn&apos;t keep up. No pipeline structure, no
                  forecasting, no lead scoring, and a US expansion underway with
                  no geographic team splitting.
                </p>
                <p className="text-black/60 leading-relaxed">
                  They needed enterprise-grade sales operations built on HubSpot
                  Professional — before they could hire a full-time ops
                  specialist.
                </p>
              </div>

              {/* Right: What We Built */}
              <div className="p-8 lg:p-12 bg-white/60">
                <h4 className="text-lg font-bold text-black mb-6">
                  What We Built
                </h4>
                <ul className="space-y-4">
                  {[
                    "5 sales pipelines with conditional fields at each stage (HR, Property Mgmt, Wholesale, Referral, API)",
                    "Enterprise-level forecasting with weighted/unweighted revenue and rep ramp-up modeling by geography",
                    "Lead scoring with engagement decay — pricing page visits, video views, email interaction, employee count, freshness weighting",
                    "ZoomInfo data enrichment + ChurnZero customer health signals integrated into HubSpot",
                    "US/Canada geographic team splitting with permissions, round-robin assignment, and team dashboards",
                    "Partner tracking system with referral attribution",
                    "Vertical-specific marketing nurture campaigns and marketing-to-sales handoff documentation",
                    "10+ dashboards: Sales Rep, Team US/CAN, Activities, Pipeline, Forecast, Sequences",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-black/70"
                    >
                      <svg
                        className="w-5 h-5 text-neon-purple-500 mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom: Results + Testimonial */}
            <div className="border-t border-black/5 p-8 lg:p-12">
              {/* Result metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {certnResults.map((result) => (
                  <div key={result.label} className="text-center">
                    <p className="text-4xl lg:text-5xl font-black text-neon-purple-500">
                      {result.value}
                    </p>
                    <p className="text-sm text-black/50 mt-1">
                      {result.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="bg-white rounded-2xl p-6 lg:p-8">
                <svg
                  className="w-8 h-8 text-neon-purple-500/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                </svg>
                <blockquote className="text-lg lg:text-xl text-black/80 leading-relaxed mb-4">
                  &ldquo;Media Garcia was instrumental in scaling us up with
                  HubSpot by stepping into the role of operations before we
                  hired a full-time specialist. They set up our CRM, email
                  workflows, and reporting dashboards, which we greatly
                  appreciate.&rdquo;
                </blockquote>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <p className="text-sm text-black/50">
                    <span className="font-bold text-black">Yvonne Chow</span>,
                    Marketing Manager, Certn
                  </p>
                  <Link
                    href="/work/certn-crm-sales-enablement"
                    className="inline-flex items-center gap-2 text-sm font-bold text-neon-purple-500 hover:text-black transition-colors"
                  >
                    Read the full case study
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. What We Build for Tech Companies ── */}
      <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
        <GradientOrb
          color="teal"
          size="lg"
          className="bottom-0 -left-32 opacity-15"
          intensity="subtle"
          blur="xl"
        />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
            What We Build for Tech Companies
          </h2>
          <p className="text-lg text-black/50 mb-12 max-w-2xl">
            Every capability below was built for a real client engagement — not a
            theoretical offering.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold tracking-wider text-neon-purple-500 uppercase bg-neon-purple-500/10 px-3 py-1 rounded-full">
                    {cap.client}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {cap.title}
                </h3>
                <p className="text-black/60 leading-relaxed mb-4">
                  {cap.description}
                </p>
                <p className="text-sm text-black/40 border-t border-black/5 pt-4">
                  {cap.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Supporting Case Study: MIPI Alliance ── */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <FadingGridPattern
          type="dots"
          color="gray"
          opacity={0.06}
          spacing={28}
          fadeDirection="bottom"
        />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-black/20" />
            <span className="text-sm font-bold tracking-widest text-black/40 uppercase">
              Case Study
            </span>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 lg:flex lg:items-start lg:gap-12">
            {/* Left: Story */}
            <div className="lg:flex-1 mb-8 lg:mb-0">
              <h3 className="text-2xl font-black text-black mb-2">
                MIPI Alliance
              </h3>
              <p className="text-sm text-black/40 mb-6">
                Global Technology Standards Body
              </p>

              <p className="text-black/60 leading-relaxed mb-6">
                MIPI Alliance needed to unify marketing, sales, and service
                operations across three departments. We implemented a
                consolidated service desk, standardized their email marketing,
                and delivered a complete marketing-sales-service operations audit
                with a 6-month strategic roadmap.
              </p>

              {/* Results grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-black">3</p>
                  <p className="text-xs text-black/40 mt-1">
                    Departments Unified
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-black">100%</p>
                  <p className="text-xs text-black/40 mt-1">
                    Member Inquiry Tracking
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-black">1</p>
                  <p className="text-xs text-black/40 mt-1">
                    Consolidated Service Desk
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-black">6-mo</p>
                  <p className="text-xs text-black/40 mt-1">
                    Strategic Roadmap
                  </p>
                </div>
              </div>

              <Link
                href="/work/mipi-alliance-service-hub"
                className="inline-flex items-center gap-2 text-sm font-bold text-neon-purple-500 hover:text-black transition-colors"
              >
                Read the full case study
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
              </Link>
            </div>

            {/* Right: Testimonial */}
            <div className="lg:w-[400px] bg-white rounded-2xl p-6 lg:p-8">
              <svg
                className="w-7 h-7 text-neon-purple-500/30 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
              </svg>
              <blockquote className="text-base text-black/70 leading-relaxed mb-4">
                &ldquo;We&apos;ve been working with Media Garcia for about 6
                months on various projects related to HubSpot and outside email
                and website marketing. So far we feel very comfortable with the
                team&apos;s level of aptitude, speed, focus, and
                professionalism. Looking forward to a continued
                partnership.&rdquo;
              </blockquote>
              <p className="text-sm text-black/50">
                <span className="font-bold text-black">Melanie Cole</span>,
                Special Projects Manager, MIPI Alliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Tech Client Logos ── */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="text-sm font-bold tracking-widest text-black/30 uppercase text-center mb-10">
            Technology companies we&apos;ve worked with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
            {clientLogos.map((logo) => (
              <div
                key={logo.name}
                className="relative h-10 w-28 opacity-80 hover:opacity-100 transition-all"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Purple CTA Banner ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="bg-neon-purple-500 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="text-center lg:text-left relative">
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-2">
                See how we helped Certn build enterprise-grade sales ops on
                HubSpot Professional
              </h3>
              <p className="text-white/80">
                5 pipelines. 3 integrations. 10+ dashboards. Let&apos;s talk
                about what we can build for you.
              </p>
            </div>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-white text-neon-purple-500 px-8 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-all shrink-0 relative"
            >
              Book an Intro Call
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
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
