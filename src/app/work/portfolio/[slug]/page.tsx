import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CTABanner } from "@/components/sections";
import { PortfolioCard } from "@/components/PortfolioCard";
import {
  portfolioItems,
  getPortfolioItemBySlug,
  getRelatedPortfolioItems,
  getCategoryLabel,
} from "@/data/portfolio";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioItemBySlug(slug);

  if (!item) {
    return {
      title: "Portfolio Item Not Found | Media Garcia",
    };
  }

  return {
    title: `${item.title} | Portfolio | Media Garcia`,
    description: item.description,
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getPortfolioItemBySlug(slug);

  if (!item) {
    notFound();
  }

  const relatedItems = getRelatedPortfolioItems(slug, item.category);

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
                <Link
                  href="/"
                  className="text-black/40 hover:text-teal-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-black/20">/</span>
                <Link
                  href="/work"
                  className="text-black/40 hover:text-teal-500 transition-colors"
                >
                  Work
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-black/20">/</span>
                <span className="text-black/60">{item.title}</span>
              </li>
            </ol>
          </nav>

          {/* Tags */}
          <div className="flex gap-2 mb-6">
            <span className="inline-block bg-teal-500/10 text-teal-600 text-xs font-medium px-3 py-1 rounded-full">
              {getCategoryLabel(item.category)}
            </span>
            {item.isLive && (
              <span className="inline-flex items-center gap-1.5 bg-green-500/10 text-green-600 text-xs font-medium px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Live
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-[clamp(2rem,6vw,4rem)] font-black leading-tight text-black mb-4 max-w-4xl">
            {item.title}
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-black/60 max-w-2xl mb-8">
            {item.description}
          </p>

          {/* Live Demo Button */}
          {item.liveUrl && (
            <a
              href={item.liveUrl}
              target={item.liveUrl.startsWith("http") ? "_blank" : undefined}
              rel={item.liveUrl.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 bg-black text-white font-medium px-6 py-3 rounded-full hover:bg-black/80 transition-colors"
            >
              View Live Demo
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 -mt-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src={item.image}
              alt={`${item.title} preview`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* What It Does Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
                Overview
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-black">
                What It Does
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg text-black/70 leading-relaxed">
                {item.whatItDoes}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Built It Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
                Background
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-black">
                Why We Built It
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg text-black/70 leading-relaxed">
                {item.whyWeBuiltIt}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 lg:py-32 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
              Technology
            </span>
            <h2 className="text-3xl lg:text-4xl font-black">Built With</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {item.techStack.map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-white/10 text-white rounded-full text-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {item.tags.map((tag) => (
              <span key={tag} className="text-white/50 text-sm">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Portfolio Items */}
      {relatedItems.length > 0 && (
        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
                  More from this category
                </span>
                <h2 className="text-3xl lg:text-4xl font-black text-black">
                  Related Work
                </h2>
              </div>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-black font-medium hover:text-teal-500 transition-colors group"
              >
                View all work
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relatedItems.map((relatedItem, index) => (
                <PortfolioCard
                  key={relatedItem.id}
                  item={relatedItem}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
