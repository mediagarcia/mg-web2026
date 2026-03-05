import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";
import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { guides } from "@/data/guides";
import { getImageForSlot } from "@/lib/images/get-image-for-slot";
import { DuotoneImage } from "@/components/ui/DuotoneImage";
import { GeometricOverlay } from "@/components/ui/GeometricOverlay";
import type { GeometricPattern } from "@/components/ui/GeometricOverlay";

export const metadata: Metadata = {
  title: "CRM & RevOps Guides | Media Garcia",
  description:
    "Free in-depth guides on CRM implementation, marketing automation, CRM migration, and revenue operations.",
  alternates: { canonical: "/resources/guides" },
};

const guideStyles: Record<string, { color: "teal" | "purple" | "orange"; pattern: GeometricPattern; gradientFrom: string; gradientTo: string }> = {
  "zendesk-to-hubspot": { color: "teal", pattern: "spiral", gradientFrom: "from-teal-500", gradientTo: "to-teal-600" },
  "operations-hub-playbook": { color: "purple", pattern: "grid", gradientFrom: "from-purple-500", gradientTo: "to-purple-600" },
  "salesforce-to-hubspot": { color: "orange", pattern: "arc", gradientFrom: "from-orange-500", gradientTo: "to-orange-600" },
};

export default function GuidesPage() {
  const heroGuide = guides[0];
  const secondaryGuides = guides.slice(1);

  const heroImage = heroGuide.imageSlot ? getImageForSlot(heroGuide.imageSlot) : null;
  const heroStyle = guideStyles[heroGuide.slug];

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

      {/* Hero Guide — Full Width */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Link
            href={`/resources/guides/${heroGuide.slug}`}
            className="block group"
          >
            <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-gray-50 hover:shadow-xl transition-shadow">
              {/* Image */}
              <div className="relative aspect-video lg:aspect-auto lg:min-h-[400px]">
                {heroImage ? (
                  <>
                    <DuotoneImage
                      src={heroImage}
                      alt={heroGuide.title}
                      color={heroStyle.color}
                      intensity="medium"
                      className="absolute inset-0"
                    />
                    <GeometricOverlay
                      pattern={heroStyle.pattern}
                      position="bottom-right"
                      color="white"
                      opacity={0.2}
                      size={150}
                    />
                  </>
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${heroStyle.gradientFrom} ${heroStyle.gradientTo}`}>
                    <GeometricOverlay
                      pattern={heroStyle.pattern}
                      position="bottom-right"
                      color="white"
                      opacity={0.2}
                      size={150}
                    />
                  </div>
                )}
              </div>
              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-3 py-1 bg-teal-500/10 text-teal-600 rounded-full text-xs font-bold uppercase tracking-wider">
                    {heroGuide.category}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-black text-black mb-4 group-hover:text-teal-500 transition-colors">
                  {heroGuide.title}
                </h2>
                <p className="text-black/60 mb-6 text-lg leading-relaxed">
                  {heroGuide.description}
                </p>
                <div className="flex items-center gap-6 text-sm text-black/40 mb-8">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {heroGuide.readTime}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" />
                    {heroGuide.tableOfContents.filter(t => t.level === 1).length} chapters
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium w-fit group-hover:bg-teal-500 transition-colors">
                  Read Guide
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Secondary Guides — Two-Up */}
      <section className="pb-20 lg:pb-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {secondaryGuides.map((guide) => {
              const image = guide.imageSlot ? getImageForSlot(guide.imageSlot) : null;
              const style = guideStyles[guide.slug];

              return (
                <Link
                  key={guide.slug}
                  href={`/resources/guides/${guide.slug}`}
                  className="group block"
                >
                  <div className="rounded-3xl overflow-hidden bg-gray-50 hover:shadow-xl transition-shadow h-full flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-[4/3]">
                      {image ? (
                        <>
                          <DuotoneImage
                            src={image}
                            alt={guide.title}
                            color={style.color}
                            intensity="medium"
                            className="absolute inset-0"
                          />
                          <GeometricOverlay
                            pattern={style.pattern}
                            position="bottom-right"
                            color="white"
                            opacity={0.2}
                            size={120}
                          />
                        </>
                      ) : (
                        <div className={`absolute inset-0 bg-gradient-to-br ${style.gradientFrom} ${style.gradientTo}`}>
                          <GeometricOverlay
                            pattern={style.pattern}
                            position="bottom-right"
                            color="white"
                            opacity={0.2}
                            size={120}
                          />
                        </div>
                      )}
                    </div>
                    {/* Content */}
                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-block px-3 py-1 bg-teal-500/10 text-teal-600 rounded-full text-xs font-bold uppercase tracking-wider">
                          {guide.category}
                        </span>
                      </div>
                      <h3 className="text-xl lg:text-2xl font-black text-black mb-3 group-hover:text-teal-500 transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-black/60 mb-6 flex-1">
                        {guide.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-black/40">
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {guide.readTime}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5" />
                            {guide.tableOfContents.filter(t => t.level === 1).length} chapters
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-teal-500 font-medium text-sm">
                          Read guide
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
