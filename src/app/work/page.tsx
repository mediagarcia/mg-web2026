import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Work | Media Garcia",
  description: "Client success stories from Media Garcia. See how we've helped businesses transform their operations with strategic CRM implementation and automation.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        badge="Our Work"
        title="Client Success Stories"
        description="Real outcomes from real partnerships. See how we've helped businesses transform their operations with strategic CRM implementation and automation."
        breadcrumbs={[{ label: "Work", href: "/work" }]}
      />

      {/* Coming Soon */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 text-center">
          <span className="inline-block text-sm bg-teal-500/10 text-teal-600 px-4 py-1.5 rounded-full font-semibold mb-6">Coming Soon</span>
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-6">
            Detailed case studies are on the way
          </h2>
          <p className="text-lg text-black/60 leading-relaxed mb-8 max-w-2xl mx-auto">
            We&apos;re documenting the results from our 200+ CRM implementations, marketing automation projects, and custom integrations. Check back soon for in-depth stories with real metrics.
          </p>

          {/* Preview Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-12 border-t border-b border-black/10 mb-12">
            <div className="text-center">
              <p className="text-3xl lg:text-4xl font-black text-black">200+</p>
              <p className="text-sm text-black/50 mt-1">CRM Implementations</p>
            </div>
            <div className="text-center">
              <p className="text-3xl lg:text-4xl font-black text-black">98%</p>
              <p className="text-sm text-black/50 mt-1">Client Retention</p>
            </div>
            <div className="text-center">
              <p className="text-3xl lg:text-4xl font-black text-black">$4M+</p>
              <p className="text-sm text-black/50 mt-1">Revenue Attributed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl lg:text-4xl font-black text-black">50+</p>
              <p className="text-sm text-black/50 mt-1">5-Star Reviews</p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-black hover:bg-teal-500 text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            Talk to Us About Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
