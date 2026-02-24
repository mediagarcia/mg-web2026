import Link from "next/link";
import { Clock, Calendar } from "lucide-react";
import { TableOfContents } from "./TableOfContents";
import type { Guide } from "@/data/guides";

interface PillarPageLayoutProps {
  guide: Guide;
  children: React.ReactNode;
}

export function PillarPageLayout({ guide, children }: PillarPageLayoutProps) {
  return (
    <>
      {/* Hero / Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gray-50 relative overflow-hidden">
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
                  href="/resources"
                  className="text-black/40 hover:text-teal-500 transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-black/20">/</span>
                <Link
                  href="/resources/guides"
                  className="text-black/40 hover:text-teal-500 transition-colors"
                >
                  Guides
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-black/20">/</span>
                <span className="text-black/60 truncate max-w-[250px]">
                  {guide.title}
                </span>
              </li>
            </ol>
          </nav>

          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-block bg-teal-500/10 text-teal-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              {guide.category}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-black/40">
              <Clock className="w-3.5 h-3.5" />
              {guide.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-black/40">
              <Calendar className="w-3.5 h-3.5" />
              Updated {guide.lastUpdated}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight text-black mb-6 max-w-4xl">
            {guide.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-black/60 max-w-2xl">{guide.description}</p>
        </div>
      </section>

      {/* Two-column layout: ToC + Content */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12">
          {/* Sidebar */}
          <TableOfContents items={guide.tableOfContents} />

          {/* Main content */}
          <div className="max-w-[800px]">{children}</div>
        </div>
      </div>
    </>
  );
}
