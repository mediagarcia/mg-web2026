import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { guides, getFeaturedGuides } from "@/data/guides";

export const metadata: Metadata = {
  title: "CRM & RevOps Guides | Media Garcia",
  description:
    "Free in-depth guides on CRM implementation, marketing automation, CRM migration, and revenue operations.",
};

const categories = [
  "All",
  "Migration",
  "Operations",
  "Implementation",
  "CRM",
  "Automation",
  "Sales",
  "Analytics",
  "RevOps",
  "Technical",
];

export default function GuidesPage() {
  const featuredGuides = getFeaturedGuides();
  const otherGuides = guides.filter(
    (g) => !g.featured || !g.hasDetailPage
  );

  return (
    <>
      <PageHeader
        badge="Guides"
        title="CRM & RevOps guides and resources"
        description="In-depth guides to help you get the most out of your CRM, from implementation to advanced automation."
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Guides", href: "/resources/guides" },
        ]}
      />

      {/* Featured Guides */}
      {featuredGuides.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-6">
            {featuredGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/resources/guides/${guide.slug}`}
                className="block group"
              >
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-8 lg:p-12 text-white hover:shadow-xl transition-shadow">
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                    Featured Guide
                  </span>
                  <h2 className="text-2xl lg:text-4xl font-black mb-4">
                    {guide.title}
                  </h2>
                  <p className="text-white/80 mb-6 max-w-2xl">
                    {guide.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-white/60 mb-6">
                    <span>{guide.category}</span>
                    <span>-</span>
                    <span>{guide.readTime}</span>
                  </div>
                  <span className="inline-flex items-center gap-2 bg-white text-teal-600 px-6 py-3 rounded-full font-medium group-hover:bg-gray-100 transition-colors">
                    Read Guide
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-black text-white"
                    : "bg-gray-100 text-black/60 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherGuides.map((guide) => {
              const content = (
                <>
                  <span className="text-xs font-bold text-teal-500 uppercase tracking-wider">
                    {guide.category}
                  </span>
                  <h3 className="text-xl font-bold text-black mt-2 mb-3 group-hover:text-teal-500 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-black/60 mb-4">{guide.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-black/40">
                      {guide.readTime}
                    </span>
                    {guide.hasDetailPage ? (
                      <span className="inline-flex items-center gap-1 text-teal-500 font-medium text-sm">
                        Read guide
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    ) : (
                      <span className="inline-block text-xs font-bold uppercase tracking-wider text-black/30 bg-gray-200 px-2 py-0.5 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </>
              );

              if (guide.hasDetailPage) {
                return (
                  <Link
                    key={guide.slug}
                    href={`/resources/guides/${guide.slug}`}
                    className="group bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 hover:shadow-md transition-all"
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <article
                  key={guide.slug}
                  className="group bg-gray-50 rounded-2xl p-6"
                >
                  {content}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
