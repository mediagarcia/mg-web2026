"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { GradientOrb, FadingGridPattern, MeshBackground, PreviewBackgroundVideo } from "@/components/ui/visuals";

const stats = [
  {
    value: 14,
    suffix: "+",
    label: "Years In Business",
    context: "Since 2010, before most agencies existed",
  },
  {
    value: 200,
    suffix: "+",
    label: "CRM & RevOps Implementations",
    context: "Successfully deployed",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Retention Rate",
    context: "They stay because it works",
  },
  {
    value: 26,
    suffix: "+",
    label: "HubSpot Certifications",
    context: "Across all hubs",
  },
  {
    value: 10,
    suffix: "+",
    label: "Countries Served",
    context: "From our Saint Paul HQ",
  },
];

const expectations = [
  {
    title: "Founder Involvement",
    description:
      "Louis is personally involved in every engagement. You get senior-level expertise from day one, not junior staff learning on your dime.",
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
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    title: "Outcomes Over Hours",
    description:
      "We measure success by your results: adoption rates, pipeline velocity, time-to-value. Not by how many hours we can invoice.",
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
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "Platform-Agnostic Advice",
    description:
      "We recommend the tools that fit your needs, not the ones that pay us the highest commissions. HubSpot, Salesforce, custom—we've done them all.",
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
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
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
    title: "Built to Last",
    description:
      "We design systems your team will actually use, with training that ensures adoption sticks. 98% of our clients stay year over year.",
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
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Louis Garcia",
    role: "CEO & Founder",
    bio: "Louis founded Media Garcia in 2010 with a simple premise: clients deserve senior-level expertise, not junior staff learning on their dime. With 15+ years in digital marketing and sales operations, he's personally led 200+ CRM implementations across healthcare, IT, and SaaS companies. He's involved in every engagement—not just overseeing from afar. When he's not building revenue systems, he's probably talking about revenue systems.",
    image: "/images/team/team-member-1.jpg",
    linkedin: "https://www.linkedin.com/in/louisgarcia/",
  },
  {
    name: "Rochelle Schmidt",
    role: "Account Manager",
    bio: "Rochelle ensures every client project delivers exceptional results. With deep expertise in project management and client success, she keeps implementations running smoothly and ensures nothing falls through the cracks.",
    image: "/images/team/team-member-2.jpg",
  },
  {
    name: "Team Member",
    role: "Solutions Architect",
    bio: "Bio coming soon.",
    image: "/images/team/placeholder.jpg",
    placeholder: true,
  },
  {
    name: "Team Member",
    role: "RevOps Specialist",
    bio: "Bio coming soon.",
    image: "/images/team/placeholder.jpg",
    placeholder: true,
  },
  {
    name: "Team Member",
    role: "Integration Specialist",
    bio: "Bio coming soon.",
    image: "/images/team/placeholder.jpg",
    placeholder: true,
  },
  {
    name: "Team Member",
    role: "Marketing Automation Expert",
    bio: "Bio coming soon.",
    image: "/images/team/placeholder.jpg",
    placeholder: true,
  },
];

const certifications = [
  { name: "HubSpot Solutions Partner", tier: "Platinum" },
  { name: "Marketing Hub", certified: true },
  { name: "Sales Hub", certified: true },
  { name: "Service Hub", certified: true },
  { name: "CMS Hub", certified: true },
  { name: "Operations Hub", certified: true },
];

const clientLogos = [
  { name: "Healthcare Company", placeholder: true },
  { name: "IT Services Firm", placeholder: true },
  { name: "SaaS Platform", placeholder: true },
  { name: "Medical Device Co", placeholder: true },
  { name: "Tech Consultancy", placeholder: true },
  { name: "B2B Software", placeholder: true },
];

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(easeOut * value);

        setDisplayValue(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

interface AboutPageContentProps {
  aboutVideo?: string | null;
}

export function AboutPageContent({ aboutVideo }: AboutPageContentProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gray-50 relative overflow-hidden">
        <FadingGridPattern type="dots" color="gray" opacity={0.1} spacing={32} fadeDirection="both" />
        <GradientOrb color="teal" size="xl" className="-top-32 -right-32 opacity-40" intensity="subtle" blur="xl" />
        <GradientOrb color="purple" size="lg" className="bottom-0 left-1/4 opacity-20" intensity="subtle" blur="xl" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-black/40 hover:text-teal-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-black/20">/</span>
                <span className="text-black/60">About</span>
              </li>
            </ol>
          </motion.nav>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block"
          >
            Our Story
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,6vw,4rem)] font-black leading-tight text-black mb-6 max-w-4xl"
          >
            14+ Years Building Revenue Systems That Actually Work
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl text-black/60 leading-relaxed max-w-2xl"
          >
            We&apos;re obsessed with your outcomes, not our billable hours.
            That&apos;s why healthcare, IT, and SaaS companies choose us—and
            stay for years.
          </motion.p>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-black text-black mb-8">
                Who We Are
              </h2>

              <div className="space-y-6 text-black/60 leading-relaxed">
                <p className="text-lg">
                  We build and optimize revenue systems for companies with
                  complex sales cycles and high stakes. Healthcare
                  organizations, IT services firms, and B2B SaaS companies trust
                  us to configure their CRM, marketing automation, and sales
                  operations—whether that&apos;s HubSpot, Salesforce, or a
                  custom platform.
                </p>

                <p>
                  For 14+ years, we&apos;ve stayed deliberately small. No junior
                  staff learning on your dime. No account managers who disappear
                  after the sale. Our founder is involved in every engagement,
                  and our team brings senior-level expertise from day one.
                </p>

                <p>
                  We measure success by your outcomes—pipeline velocity,
                  adoption rates, time-to-value—not by how many hours we can
                  bill. It&apos;s a different model, and it&apos;s why our
                  clients stay an average of 3+ years.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src="/images/about/team-collaboration.jpg"
                  alt="Media Garcia team collaborating"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* By The Numbers Section */}
      <section className="py-20 lg:py-32 bg-black text-white relative overflow-hidden">
        {/* Background Video - subtle minimal animation */}
        <PreviewBackgroundVideo
          slot="about-video"
          defaultSrc={aboutVideo ?? "/videos/about-minimal.mp4"}
          poster="/videos/about-minimal-poster.jpg"
          overlay={false}
          defaultOpacity={30}
        />
        <MeshBackground />
        <GradientOrb color="teal" size="xl" className="-top-32 -left-32 opacity-30" intensity="medium" blur="xl" />
        <GradientOrb color="purple" size="lg" className="bottom-0 right-1/4 opacity-20" intensity="subtle" blur="xl" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              By The Numbers
            </span>
            <h2 className="text-3xl lg:text-4xl font-black">
              The track record speaks for itself
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-black text-teal-500 mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm font-bold text-white mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-white/50">{stat.context}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Our Approach
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              What to Expect Working With Us
            </h2>
            <p className="text-black/60">
              These aren&apos;t platitudes on a poster. They&apos;re commitments
              we make to every client.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {expectations.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 flex gap-6"
              >
                <div className="w-16 h-16 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-500 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-black/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              The Team
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black">
              A team you&apos;ll actually work with
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={`${member.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gray-50 rounded-2xl p-6 text-center ${
                  member.placeholder ? "opacity-60" : ""
                }`}
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-white shadow-lg mx-auto mb-4">
                  {member.placeholder ? (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  ) : (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <h3 className="text-lg font-bold text-black">
                  {member.name}
                </h3>
                <p className="text-teal-500 font-medium text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-black/60 leading-relaxed text-sm line-clamp-4">
                  {member.bio}
                </p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-black/40 hover:text-teal-500 transition-colors mt-4"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition & Partners Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Recognition
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
              26+ certifications across every HubSpot hub
            </h2>
            <p className="text-black/60">
              Third-party validation from the platforms we implement
            </p>
          </motion.div>

          {/* HubSpot Partner Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-16"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm inline-flex flex-col items-center">
              <svg
                className="w-20 h-20 text-[#ff7a59] mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.984 2.21 2.21 0 00-4.42 0c0 .873.51 1.625 1.245 1.982v2.848a5.276 5.276 0 00-2.407 1.227l-6.39-4.972a2.474 2.474 0 00.093-.655 2.472 2.472 0 10-2.471 2.471c.426 0 .824-.11 1.17-.299l6.271 4.876a5.3 5.3 0 00-.203 1.422 5.3 5.3 0 00.203 1.422l-6.271 4.876c-.346-.19-.744-.299-1.17-.299a2.472 2.472 0 102.471 2.471c0-.228-.034-.447-.093-.655l6.39-4.972a5.276 5.276 0 002.407 1.227v2.848a2.198 2.198 0 00-1.245 1.982 2.21 2.21 0 004.42 0 2.198 2.198 0 00-1.267-1.984V16.07a5.287 5.287 0 10-5.096-9.14 5.287 5.287 0 005.096-9.14z" />
              </svg>
              <p className="text-xl font-bold text-black">
                HubSpot Platinum Partner
              </p>
              <p className="text-sm text-black/50">Solutions Partner Program</p>
            </div>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-4 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-[#ff7a59]/10 flex items-center justify-center mx-auto mb-2">
                  <svg
                    className="w-5 h-5 text-[#ff7a59]"
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
                </div>
                <p className="text-sm font-medium text-black">{cert.name}</p>
              </motion.div>
            ))}
          </div>

          {/* Client Logos (Placeholder) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-center text-sm text-black/40 mb-8">
              Trusted by companies in healthcare, IT, and SaaS
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
              {clientLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="aspect-[3/2] bg-white rounded-xl flex items-center justify-center"
                >
                  <span className="text-xs text-black/20 text-center px-2">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location + CTA Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
                Location
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-black mb-6">
                Right-Sized Partner, Global Reach
              </h2>
              <p className="text-black/60 leading-relaxed mb-8">
                Headquartered in Saint Paul, Minnesota, we serve clients across
                10+ countries. We&apos;re small enough that our founder is
                involved in every engagement, but experienced enough to handle
                enterprise complexity and regulated industries.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-teal-500 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-bold text-black">
                      428 Minnesota Street, Suite 500
                    </p>
                    <p className="text-black/60">Saint Paul, MN 55101</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-teal-500 mt-1"
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
                  <div>
                    <p className="font-bold text-black">+1 888-612-4250</p>
                    <p className="text-black/60">US & Canada toll-free</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "United States",
                  "Canada",
                  "United Kingdom",
                  "Australia",
                  "New Zealand",
                  "India",
                  "Sweden",
                  "Spain",
                  "Colombia",
                  "Mexico",
                ].map((country) => (
                  <span
                    key={country}
                    className="px-3 py-1 bg-gray-100 rounded-full text-xs text-black/70"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src="/images/about/office.jpg"
                  alt="Media Garcia office in Saint Paul"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-teal-500 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-white blur-3xl" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-2xl lg:text-4xl font-black text-white mb-4">
                Now that you know us, let&apos;s talk about you
              </h2>
              <p className="text-white/80 text-lg max-w-xl">
                Whether you&apos;re evaluating partners for a new implementation
                or looking to optimize what you already have—we&apos;d love to
                hear what you&apos;re working on.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-4 items-center"
            >
              <div className="flex flex-col items-center sm:items-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-black hover:text-white transition-all duration-300 group"
                >
                  Book a Strategy Call
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
                <span className="text-white/60 text-sm mt-2">30 minutes. No commitment.</span>
              </div>
              <Link
                href="tel:+18886124250"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-teal-600 transition-all duration-300"
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
                Call Us Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
