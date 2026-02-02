import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CTABanner } from "@/components/sections";
import { caseStudies, getCaseStudyBySlug, getRelatedCaseStudies } from "@/data/case-studies";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: "Case Study Not Found | Media Garcia",
    };
  }

  return {
    title: `${study.title} | ${study.client} Case Study | Media Garcia`,
    description: study.description,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const relatedStudies = getRelatedCaseStudies(slug);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          {/* Breadcrumbs */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-black/40 hover:text-teal-500 transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-black/20">/</span>
                <Link href="/work" className="text-black/40 hover:text-teal-500 transition-colors">
                  Work
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-black/20">/</span>
                <span className="text-black/60">{study.client}</span>
              </li>
            </ol>
          </nav>

          {/* Tags */}
          <div className="flex gap-2 mb-6">
            <span className="inline-block bg-teal-500/10 text-teal-600 text-xs font-medium px-3 py-1 rounded-full">
              {study.industry}
            </span>
            <span className="inline-block bg-black/5 text-black/60 text-xs font-medium px-3 py-1 rounded-full">
              {study.service}
            </span>
            {study.timeline && (
              <span className="inline-block bg-black/5 text-black/60 text-xs font-medium px-3 py-1 rounded-full">
                {study.timeline}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-[clamp(2rem,6vw,4rem)] font-black leading-tight text-black mb-4 max-w-4xl">
            {study.title}
          </h1>

          {/* Client */}
          <p className="text-lg text-black/60 mb-8">{study.client}</p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-t border-black/10">
            {study.results.slice(0, 4).map((result) => (
              <div key={result.label}>
                <p className="text-3xl lg:text-4xl font-black text-teal-500">{result.metric}</p>
                <p className="text-sm text-black/60 mt-1">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 -mt-8">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
            <Image
              src={study.image}
              alt={`${study.client} case study`}
              fill
              className="object-cover"
              priority
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-40`} />
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
                The Challenge
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-black">
                What they faced
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none text-black/70 leading-relaxed">
                {study.challenge.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-6 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
                The Solution
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-black">
                How we solved it
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none text-black/70 leading-relaxed">
                {study.solution.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-6 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 lg:py-32 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              The Results
            </span>
            <h2 className="text-3xl lg:text-4xl font-black">
              What we delivered
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {study.results.map((result) => (
              <div key={result.label} className="text-center">
                <p className="text-4xl lg:text-6xl font-black text-teal-500">{result.metric}</p>
                <p className="text-white/60 mt-3">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {study.testimonial && (
        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <svg
                className="w-12 h-12 text-teal-500 mx-auto mb-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-2xl lg:text-3xl font-medium text-black leading-relaxed mb-8">
                &ldquo;{study.testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-bold text-black">{study.testimonial.author}</p>
                <p className="text-black/60">
                  {study.testimonial.title}, {study.testimonial.company}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section className="py-20 lg:py-32 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
                  More Case Studies
                </span>
                <h2 className="text-3xl lg:text-4xl font-black text-black">
                  See more results
                </h2>
              </div>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-black font-medium hover:text-teal-500 transition-colors group"
              >
                View all case studies
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

            <div className="grid lg:grid-cols-2 gap-8">
              {relatedStudies.map((relatedStudy) => (
                <Link
                  key={relatedStudy.slug}
                  href={`/work/${relatedStudy.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={relatedStudy.image}
                      alt={`${relatedStudy.client} case study`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${relatedStudy.gradient} opacity-50`} />
                  </div>
                  <div className="p-8">
                    <p className="text-sm text-black/50 font-medium mb-2">{relatedStudy.client}</p>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-teal-500 transition-colors">
                      {relatedStudy.title}
                    </h3>
                    <p className="text-black/60">{relatedStudy.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
