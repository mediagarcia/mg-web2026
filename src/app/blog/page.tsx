import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Blog | Media Garcia",
  description: "HubSpot tips, marketing automation strategies, and growth insights for technology companies.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        badge="Blog"
        title="Insights for growth-focused teams"
        description="HubSpot strategies, marketing automation tips, and practical advice for technology companies looking to scale."
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
        ]}
      />

      {/* Coming Soon */}
      <section className="py-32 lg:py-48 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
            Coming Soon
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-black mb-6">
            We&apos;re working on something great
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto mb-12">
            Our blog is being rebuilt with fresh content on HubSpot strategies, marketing automation, and growth tactics for technology companies. In the meantime, let&apos;s talk about what you need.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-teal-500 transition-colors"
          >
            Get in Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
