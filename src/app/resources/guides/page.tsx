import { Metadata } from "next";
import { PageHeaderWithPreview } from "@/components/PageHeaderWithPreview";
import { getImageForSlot } from "@/lib/images/get-image-for-slot";
import { CTABanner } from "@/components/sections";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CRM & RevOps Guides | Media Garcia",
  description: "Free in-depth guides on CRM implementation, marketing automation, CRM migration, and revenue operations.",
};

const guides = [
  {
    title: "The Complete CRM Implementation Guide",
    description: "Everything you need to know about implementing your CRM successfully, from planning to go-live.",
    category: "Implementation",
    readTime: "25 min read",
    featured: true,
  },
  {
    title: "HubSpot vs Salesforce: A Detailed Comparison",
    description: "An honest comparison of features, pricing, and use cases to help you choose the right CRM.",
    category: "CRM",
    readTime: "15 min read",
    featured: false,
  },
  {
    title: "Marketing Automation Best Practices",
    description: "Learn how to build effective marketing automation workflows that convert leads to customers.",
    category: "Automation",
    readTime: "12 min read",
    featured: false,
  },
  {
    title: "CRM Migration Checklist",
    description: "A comprehensive checklist to ensure your CRM migration goes smoothly with zero data loss.",
    category: "Migration",
    readTime: "10 min read",
    featured: false,
  },
  {
    title: "Lead Scoring for B2B Companies",
    description: "How to build a lead scoring model that actually predicts which leads will convert.",
    category: "Sales",
    readTime: "8 min read",
    featured: false,
  },
  {
    title: "HubSpot Reporting & Attribution",
    description: "Set up reporting dashboards that give you real visibility into marketing and sales performance.",
    category: "Analytics",
    readTime: "14 min read",
    featured: false,
  },
  {
    title: "Revenue Operations Fundamentals",
    description: "A practical guide to implementing RevOps at your company, including team structure and metrics.",
    category: "RevOps",
    readTime: "18 min read",
    featured: false,
  },
  {
    title: "HubSpot API & Custom Integrations",
    description: "Technical guide to building custom integrations with HubSpot using their APIs.",
    category: "Technical",
    readTime: "20 min read",
    featured: false,
  },
  {
    title: "Email Deliverability Best Practices",
    description: "Ensure your emails reach the inbox with these proven deliverability strategies.",
    category: "Email",
    readTime: "11 min read",
    featured: false,
  },
  {
    title: "Sales Enablement with HubSpot",
    description: "Equip your sales team with the tools and content they need to close more deals.",
    category: "Sales",
    readTime: "13 min read",
    featured: false,
  },
  {
    title: "HubSpot for SaaS Companies",
    description: "Industry-specific guide for implementing HubSpot to drive subscription growth.",
    category: "Industry",
    readTime: "16 min read",
    featured: false,
  },
  {
    title: "Customer Success Automation",
    description: "Build automated workflows that improve customer retention and expansion revenue.",
    category: "Success",
    readTime: "9 min read",
    featured: false,
  },
];

const categories = ["All", "Implementation", "CRM", "Automation", "Migration", "Sales", "Analytics", "RevOps", "Technical"];

export default function GuidesPage() {
  const featuredGuide = guides.find((g) => g.featured);
  const otherGuides = guides.filter((g) => !g.featured);

  return (
    <>
      <PageHeaderWithPreview
        slot="page-guides"
        defaultImage={getImageForSlot("page-guides")}
        badge="Guides"
        title="CRM & RevOps guides and resources"
        description="In-depth guides to help you get the most out of your CRM, from implementation to advanced automation."
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Guides", href: "/resources/guides" },
        ]}
      />

      {/* Featured Guide */}
      {featuredGuide && (
        <section className="py-12 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-8 lg:p-12 text-white">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                Featured Guide
              </span>
              <h2 className="text-2xl lg:text-4xl font-black mb-4">{featuredGuide.title}</h2>
              <p className="text-white/80 mb-6 max-w-2xl">{featuredGuide.description}</p>
              <div className="flex items-center gap-4 text-sm text-white/60 mb-6">
                <span>{featuredGuide.category}</span>
                <span>-</span>
                <span>{featuredGuide.readTime}</span>
              </div>
              <button className="bg-white text-teal-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Read Guide
              </button>
            </div>
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
            {otherGuides.map((guide) => (
              <article key={guide.title} className="group bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors cursor-pointer">
                <span className="text-xs font-bold text-teal-500 uppercase tracking-wider">
                  {guide.category}
                </span>
                <h3 className="text-xl font-bold text-black mt-2 mb-3 group-hover:text-teal-500 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-black/60 mb-4">{guide.description}</p>
                <span className="text-sm text-black/40">{guide.readTime}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
