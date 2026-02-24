import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";
import { GradientOrb, FadingGridPattern } from "@/components/ui/visuals";
import { getImageForSlot } from "@/lib/images/get-image-for-slot";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HubSpot for Healthcare Companies | Media Garcia",
  description:
    "HubSpot implementations trusted by ADVI Health, Men\u2019s Pro Health, and healthcare organizations nationwide. Real results: 200+ CRM optimizations, custom patient portals, and multi-year partnerships.",
};

const challenges = [
  {
    title: "Scattered Patient & Provider Data",
    description:
      "Clinical notes in one system, patient records in another, referrals tracked in spreadsheets. When ADVI Health came to us, their CRM had years of accumulated data quality issues that undermined executive decision-making.",
  },
  {
    title: "Legacy Systems That Don\u2019t Talk",
    description:
      "Men\u2019s Pro Health was running patient intake on AdvancedMD while managing operations separately. Disconnected systems meant duplicate data entry, missed follow-ups, and no single source of truth.",
  },
  {
    title: "Long Sales Cycles & Multiple Stakeholders",
    description:
      "Healthcare decisions involve committees, procurement teams, and clinical staff. Tracking engagement across all of them requires CRM workflows built specifically for how healthcare organizations actually buy.",
  },
  {
    title: "Ongoing CRM Maintenance Gets Neglected",
    description:
      "Most healthcare teams don\u2019t have a dedicated CRM admin. Without continuous monitoring, data degrades, automations break, and the platform that was supposed to drive growth becomes a liability.",
  },
];

const solutions = [
  {
    title: "CRM Optimization & Data Quality",
    description:
      "Continuous CRM maintenance that keeps your HubSpot instance clean, accurate, and aligned with revenue goals. Built for ADVI Health and maintained for 2+ years.",
    client: "ADVI Health",
    features: [
      "Data quality monitoring",
      "Executive reporting dashboards",
      "Workflow optimization",
      "Proactive issue detection",
    ],
  },
  {
    title: "Custom Patient Portal & EHR Integration",
    description:
      "A full patient-facing portal with structured clinical notes and self-service care management\u2014all inside HubSpot. Built for Men\u2019s Pro Health to replace their legacy AdvancedMD system entirely.",
    client: "Men\u2019s Pro Health",
    features: [
      "Patient self-service portal",
      "Structured EHR notes system",
      "Multi-location clinic operations",
      "Legacy system replacement",
    ],
  },
  {
    title: "Multi-Stakeholder Deal Tracking",
    description:
      "Pipeline management designed for healthcare\u2019s complex buying process\u2014tracking every decision-maker, committee, and approval stage. Informed by our work across ADVI Health\u2019s advisory engagements.",
    client: "ADVI Health",
    features: [
      "Stakeholder mapping",
      "Buying committee tracking",
      "Engagement scoring",
      "Decision timeline management",
    ],
  },
  {
    title: "Clinic Operations Platform",
    description:
      "End-to-end clinic management from a single platform\u2014patient intake, provider workflows, appointment management, and operational reporting. Built for Men\u2019s Pro Health across 4 locations.",
    client: "Men\u2019s Pro Health",
    features: [
      "Appointment management",
      "Provider workflow automation",
      "Operational reporting",
      "Multi-location support",
    ],
  },
];

const resultsMetrics = [
  {
    value: "200+",
    label: "CRM Optimizations Delivered",
    source: "ADVI Health",
  },
  {
    value: "90%",
    label: "Deliverable Compliance Rate",
    source: "ADVI Health",
  },
  {
    value: "<1hr",
    label: "Critical Issue Response Time",
    source: "ADVI Health",
  },
  {
    value: "2+ Years",
    label: "Continuous Partnership",
    source: "ADVI Health",
  },
  {
    value: "217+",
    label: "Project Tasks Delivered",
    source: "Men\u2019s Pro Health",
  },
  {
    value: "4",
    label: "Clinic Locations Supported",
    source: "Men\u2019s Pro Health",
  },
  {
    value: "100%",
    label: "Portal Pilot Completion",
    source: "Men\u2019s Pro Health",
  },
  {
    value: "0",
    label: "Legacy Systems Needed Post-Launch",
    source: "Men\u2019s Pro Health",
  },
];

const testimonials = [
  {
    quote:
      "Media Garcia isn\u2019t just a vendor\u2014they\u2019re an extension of our team. They understand our business well enough to proactively identify issues before they become problems, and their reporting gives us the confidence to make real revenue decisions.",
    author: "Juli Denny",
    title: "Chief Growth Officer",
    company: "ADVI Health",
  },
  {
    quote:
      "We asked Media Garcia to build us a patient portal and ended up with an entire operating system for our clinics. Our patients can manage their own care online, our providers have structured clinical notes, and we\u2019re finally running everything from one platform.",
    author: "Dan Green",
    title: "President & CEO",
    company: "Men\u2019s Pro Health",
  },
  {
    quote:
      "Media Garcia is professional, responsive, and offers great value for the cost. Their fair pricing and exceptional work make them a game-changer for your website and CRM.",
    author: "Dr. Brandon Allen",
    title: "CEO",
    company: "Health and Wellness",
  },
];

const clientLogos = [
  { name: "ADVI Health", src: "/images/clients/advi.svg" },
  { name: "Men\u2019s Pro Health", src: "/images/clients/menspro.png" },
  { name: "Delve Health", src: "/images/clients/delvehealth.svg" },
];

export default function HealthcareIndustryPage() {
  const heroImage = getImageForSlot("industries/healthcare-hero");

  return (
    <>
      <PageHeader
        badge="Industry"
        title="HubSpot for Healthcare"
        description="Trusted by ADVI Health, Men&apos;s Pro Health, and healthcare organizations nationwide. We build and maintain the HubSpot systems that power patient portals, clinic operations, and revenue-driving CRM workflows."
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: "Healthcare", href: "/industries/healthcare" },
        ]}
        backgroundImage={
          heroImage
            ? { src: heroImage, color: "teal", pattern: "spiral" }
            : undefined
        }
      />

      {/* Client Proof Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <GradientOrb
          color="teal"
          size="xl"
          className="-top-48 -right-48 opacity-20"
          intensity="subtle"
          blur="xl"
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-teal-500 uppercase tracking-wider mb-3">
              Proven Results
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-black">
              Don&apos;t Take Our Word For It
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* ADVI Health */}
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-10 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/clients/advi.svg"
                  alt="ADVI Health logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2">
                Ongoing CRM Optimization
              </p>
              <p className="text-black/60 leading-relaxed mb-6">
                Continuous CRM maintenance, data quality monitoring, and
                executive reporting for a healthcare advisory firm.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-2xl p-5 text-center">
                  <p className="text-3xl font-black text-teal-500">200+</p>
                  <p className="text-sm text-black/50 mt-1">
                    CRM Optimizations
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-5 text-center">
                  <p className="text-3xl font-black text-teal-500">2+ Yrs</p>
                  <p className="text-sm text-black/50 mt-1">
                    Continuous Partnership
                  </p>
                </div>
              </div>
              <blockquote className="border-l-4 border-teal-500 pl-5 mb-6 flex-1">
                <p className="text-black/70 leading-relaxed italic">
                  &ldquo;Media Garcia isn&apos;t just a vendor&mdash;they&apos;re
                  an extension of our team. They understand our business well
                  enough to proactively identify issues before they become
                  problems.&rdquo;
                </p>
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-black text-sm">Juli Denny</p>
                  <p className="text-sm text-black/50">
                    Chief Growth Officer, ADVI Health
                  </p>
                </div>
                <Link
                  href="/work/advi-health-crm-optimization"
                  className="text-sm font-bold text-teal-600 hover:text-teal-700 transition-colors flex items-center gap-1"
                >
                  Read case study
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

            {/* Men's Pro Health */}
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-10 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/clients/menspro.png"
                  alt="Men&apos;s Pro Health logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2">
                Custom Patient Portal & Clinic Platform
              </p>
              <p className="text-black/60 leading-relaxed mb-6">
                Full patient portal, EHR notes system, and clinic operations
                platform inside HubSpot&mdash;replacing a legacy AdvancedMD
                system.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-2xl p-5 text-center">
                  <p className="text-3xl font-black text-teal-500">217+</p>
                  <p className="text-sm text-black/50 mt-1">
                    Project Tasks Delivered
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-5 text-center">
                  <p className="text-3xl font-black text-teal-500">4</p>
                  <p className="text-sm text-black/50 mt-1">
                    Clinic Locations
                  </p>
                </div>
              </div>
              <blockquote className="border-l-4 border-teal-500 pl-5 mb-6 flex-1">
                <p className="text-black/70 leading-relaxed italic">
                  &ldquo;We asked Media Garcia to build us a patient portal and
                  ended up with an entire operating system for our
                  clinics.&rdquo;
                </p>
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-black text-sm">Dan Green</p>
                  <p className="text-sm text-black/50">
                    President & CEO, Men&apos;s Pro Health
                  </p>
                </div>
                <Link
                  href="/work/mens-pro-crm-enablement"
                  className="text-sm font-bold text-teal-600 hover:text-teal-700 transition-colors flex items-center gap-1"
                >
                  Read case study
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
      </section>

      {/* Challenges We Solve */}
      <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
        <FadingGridPattern
          type="dots"
          color="gray"
          opacity={0.08}
          spacing={28}
          fadeDirection="both"
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12">
            Healthcare Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge) => (
              <div
                key={challenge.title}
                className="bg-white rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-black mb-3">
                  {challenge.title}
                </h3>
                <p className="text-black/60 leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <GradientOrb
          color="purple"
          size="lg"
          className="bottom-0 -left-32 opacity-20"
          intensity="subtle"
          blur="xl"
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12">
            Healthcare-Specific Solutions
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-black">
                    {solution.title}
                  </h3>
                  <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full whitespace-nowrap">
                    {solution.client}
                  </span>
                </div>
                <p className="text-black/60 mb-6">{solution.description}</p>
                <ul className="grid grid-cols-2 gap-3">
                  {solution.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-black/70"
                    >
                      <svg
                        className="w-4 h-4 text-teal-500 shrink-0"
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
        <FadingGridPattern
          type="dots"
          color="gray"
          opacity={0.06}
          spacing={32}
          fadeDirection="both"
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-teal-500 uppercase tracking-wider mb-3">
              Real Numbers From Real Clients
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-black">
              Results That Speak For Themselves
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resultsMetrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-white rounded-2xl p-6 text-center"
              >
                <p className="text-4xl font-black text-teal-500 mb-2">
                  {metric.value}
                </p>
                <p className="text-sm font-semibold text-black mb-1">
                  {metric.label}
                </p>
                <p className="text-xs text-black/40">{metric.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <GradientOrb
          color="teal"
          size="lg"
          className="-bottom-32 -right-32 opacity-15"
          intensity="subtle"
          blur="xl"
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-black">
              What Healthcare Leaders Say
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-gray-50 rounded-2xl p-8 flex flex-col"
              >
                <svg
                  className="w-8 h-8 text-teal-500/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                </svg>
                <p className="text-black/70 leading-relaxed mb-6 flex-1">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-bold text-black">{testimonial.author}</p>
                  <p className="text-sm text-black/50">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Client Logos */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="text-center text-sm font-bold text-black/40 uppercase tracking-wider mb-10">
            Healthcare Organizations We&apos;ve Partnered With
          </p>
          <div className="flex items-center justify-center gap-12 lg:gap-20 flex-wrap">
            {clientLogos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={`${logo.name} logo`}
                width={140}
                height={48}
                className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="bg-teal-500 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-2">
                See how we helped ADVI Health maintain CRM excellence for 2+
                years
              </h3>
              <p className="text-white/80">
                Book a strategy call to discuss how we can bring the same
                results to your healthcare organization.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-all shrink-0"
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
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
