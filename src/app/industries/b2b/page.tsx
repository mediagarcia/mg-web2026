import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { GradientOrb, FadingGridPattern } from "@/components/ui/visuals";
import { getImageForSlot } from "@/lib/images/get-image-for-slot";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HubSpot for B2B Companies | Media Garcia",
  description:
    "Complex operations across industries — from multi-system integrations to marketing automation to CRM analytics. We build revenue systems for companies with unique challenges.",
};

const caseStudies = [
  {
    client: "Current Energy",
    industry: "Energy",
    description:
      "Connected HubSpot to NetSuite, Aurora, Paycom, Company Cam, and a custom customer portal with full deal stage automation.",
    metrics: [
      { value: "5+", label: "Systems Integrated" },
      { value: "0", label: "Manual Deal Handoffs" },
    ],
    href: "/work/current-energy-integrations",
  },
  {
    client: "EAG Advertising & Marketing",
    industry: "Marketing Agency",
    description:
      "Validated marketing assumptions with CRM data analytics, uncovering deal velocity insights and building attribution dashboards.",
    metrics: [
      { value: "100%", label: "Attribution Visibility" },
      { value: "Weeks to Days", label: "Hypothesis Validation" },
    ],
    href: "/work/eag-crm-data-analytics",
  },
  {
    client: "XL Feet",
    industry: "E-Commerce",
    description:
      "Built marketing strategy from scratch including email marketing, process documentation, and a growth stack with a conversational shoe fitting bot.",
    metrics: [
      { value: "$111K+", label: "Email Revenue in Year One" },
      { value: "3+", label: "Growth Stack Tools Integrated" },
    ],
    href: "/work/xl-feet-ecommerce-growth",
  },
];

const capabilities = [
  {
    title: "System Integration",
    subtitle: "Current Energy",
    description:
      "When your teams are copying data between five different systems, everything slows down. We connected HubSpot to NetSuite, Aurora, Paycom, Company Cam, and a custom customer portal — so when a deal moves stages, tasks get created, the right people get notified, and customers see their project status in real time.",
    highlights: [
      "5+ systems integrated",
      "200+ tasks delivered",
      "100% data migration accuracy",
      "0 manual deal stage handoffs",
    ],
  },
  {
    title: "CRM Analytics & Attribution",
    subtitle: "EAG Advertising & Marketing",
    description:
      "Marketing assumptions are expensive when they\u2019re wrong. We dug into CRM data to uncover what actually drives deals \u2014 discovering it takes 40 interactions to win vs 26 to lose, and that days-to-close had stretched from 36 to 298 days. Weeks of analysis condensed into days.",
    highlights: [
      "40 vs 26 interactions (win vs lose)",
      "36 to 298 days-to-close trend uncovered",
      "100% marketing attribution visibility",
      "Weeks to days hypothesis validation",
    ],
  },
  {
    title: "Marketing Automation & Growth",
    subtitle: "XL Feet",
    description:
      "Starting from zero, we documented every key process, built a marketing strategy from scratch, and deployed a growth stack — including a returns system, reviews platform, and a conversational shoe fitting bot that helps customers find the right fit.",
    highlights: [
      "$111K+ email revenue in year one",
      "100% key processes documented",
      "New conversational shoe fitting bot",
      "3+ growth stack tools integrated",
    ],
  },
];

const testimonials = [
  {
    quote:
      "We partnered with Media Garcia on creating a dashboard for a client. What they delivered for us, I have the happiest team right now because they did it this fast. We had gotten through maybe a quarter of the same material over the course of weeks if not months. Thank you, Media Garcia!",
    name: "Michele Markham",
    title: "President & CEO, EAG Advertising & Marketing",
  },
  {
    quote:
      "Media Garcia worked with us to turn our ideas and tight timeline into a reality, making it the easiest website project I\u2019ve ever managed.",
    name: "Ashley Sims",
    title: "VP of Marketing, American Hole \u2019n One",
  },
];

const clientLogos = [
  { src: "/images/clients/currentenergy.png", alt: "Current Energy" },
  { src: "/images/clients/vertexeducation.png", alt: "Vertex Education" },
];

export default function B2BIndustryPage() {
  const heroImage = getImageForSlot("industries/b2b-hero");

  return (
    <>
      <PageHeader
        badge="Industry"
        title="HubSpot for B2B Companies"
        description="Complex operations across industries — from multi-system integrations to marketing automation to CRM analytics. We build revenue systems for companies with unique challenges."
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: "B2B Services", href: "/industries/b2b" },
        ]}
        backgroundImage={
          heroImage
            ? { src: heroImage, color: "orange", pattern: "arc" }
            : undefined
        }
      />

      {/* Case Study Showcase */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <GradientOrb
          color="orange"
          size="xl"
          className="-top-48 -right-48 opacity-20"
          intensity="subtle"
          blur="xl"
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
            Real Results Across Industries
          </h2>
          <p className="text-lg text-black/60 mb-12 max-w-2xl">
            Every business is different, but the need for systems that actually
            work is universal. Here&apos;s what we&apos;ve built.
          </p>
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Link
                key={study.client}
                href={study.href}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-orange-red-50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-black">
                    {study.client}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-orange-red-500 bg-orange-red-500/10 px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>
                <p className="text-black/60 leading-relaxed mb-6">
                  {study.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-2xl font-black text-orange-red-500">
                        {metric.value}
                      </p>
                      <p className="text-sm text-black/50">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-orange-red-500 group-hover:gap-3 transition-all">
                  View Case Study
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

      {/* What We Do Across Industries */}
      <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
        <FadingGridPattern
          type="dots"
          color="gray"
          opacity={0.08}
          spacing={28}
          fadeDirection="both"
        />
        <GradientOrb
          color="purple"
          size="lg"
          className="bottom-0 -left-32 opacity-20"
          intensity="subtle"
          blur="xl"
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
            What We Do Across Industries
          </h2>
          <p className="text-lg text-black/60 mb-12 max-w-2xl">
            Three capability pillars, each proven with real client work and
            measurable outcomes.
          </p>
          <div className="space-y-8">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-white rounded-3xl p-8 lg:p-12"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
                  <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <span className="text-sm font-semibold uppercase tracking-wider text-orange-red-500 mb-2 block">
                      {cap.subtitle}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-black text-black mb-4">
                      {cap.title}
                    </h3>
                    <p className="text-black/60 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="grid grid-cols-2 gap-4">
                      {cap.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="bg-gray-50 rounded-2xl p-4 flex items-start gap-3"
                        >
                          <svg
                            className="w-5 h-5 text-orange-red-500 mt-0.5 shrink-0"
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
                          <span className="text-sm font-medium text-black/70">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <GradientOrb
          color="orange"
          size="lg"
          className="top-0 -right-32 opacity-15"
          intensity="subtle"
          blur="xl"
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12 text-center">
            What Our Clients Say
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-gray-50 rounded-2xl p-8 flex flex-col"
              >
                <svg
                  className="w-10 h-10 text-orange-red-500/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
                </svg>
                <p className="text-black/70 leading-relaxed mb-6 flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-black">{testimonial.name}</p>
                  <p className="text-sm text-black/50">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-black/40 mb-8">
            Trusted by B2B companies across industries
          </p>
          <div className="flex items-center justify-center gap-12 lg:gap-20">
            {clientLogos.map((logo) => (
              <div
                key={logo.alt}
                className="relative h-10 w-32 opacity-80 hover:opacity-100 transition-all"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="bg-orange-red-500 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-2">
                Every business is different. Let&apos;s talk about yours.
              </h3>
              <p className="text-white/80">
                No templated solutions. We&apos;ll build a system that fits how
                your company actually works.
              </p>
            </div>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-white text-orange-red-600 px-8 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-all shrink-0"
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
