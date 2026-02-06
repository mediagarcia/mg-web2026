import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Media Garcia",
  description: "HubSpot tips, marketing automation strategies, and growth insights for technology companies.",
};

const featuredPost = {
  title: "The Complete Guide to HubSpot Implementation in 2026",
  excerpt: "Everything you need to know about implementing HubSpot successfully—from planning and migration to training and optimization.",
  category: "HubSpot",
  date: "January 15, 2026",
  readTime: "12 min read",
  slug: "complete-guide-hubspot-implementation-2026",
};

const posts = [
  {
    title: "5 Marketing Automation Workflows Every SaaS Company Needs",
    excerpt: "Discover the essential automation workflows that drive trial conversions, reduce churn, and increase expansion revenue.",
    category: "Automation",
    date: "January 10, 2026",
    readTime: "8 min read",
  },
  {
    title: "How to Calculate Your True Customer Acquisition Cost",
    excerpt: "Stop guessing at CAC. Learn how to set up proper attribution and calculate the real cost of acquiring customers.",
    category: "Analytics",
    date: "January 5, 2026",
    readTime: "6 min read",
  },
  {
    title: "CRM Migration Checklist: Moving to HubSpot",
    excerpt: "A comprehensive checklist to ensure your CRM migration goes smoothly with zero data loss.",
    category: "Migration",
    date: "December 28, 2025",
    readTime: "10 min read",
  },
  {
    title: "Lead Scoring Best Practices for B2B Tech Companies",
    excerpt: "How to build a lead scoring model that actually predicts which leads will convert to customers.",
    category: "Sales",
    date: "December 20, 2025",
    readTime: "7 min read",
  },
  {
    title: "Building a Revenue Operations Function from Scratch",
    excerpt: "A practical guide to implementing RevOps at your company, including team structure, tools, and metrics.",
    category: "RevOps",
    date: "December 15, 2025",
    readTime: "9 min read",
  },
  {
    title: "HubSpot vs Salesforce: Which CRM is Right for You?",
    excerpt: "An honest comparison of the two leading CRM platforms for growing technology companies.",
    category: "CRM",
    date: "December 10, 2025",
    readTime: "11 min read",
  },
];

const categories = ["All", "HubSpot", "Automation", "Analytics", "Sales", "RevOps", "CRM", "Migration"];

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

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-8 lg:p-12 text-white">
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
              Featured
            </span>
            <h2 className="text-2xl lg:text-4xl font-black mb-4">{featuredPost.title}</h2>
            <p className="text-white/80 mb-6 max-w-2xl">{featuredPost.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-white/60">
              <span>{featuredPost.category}</span>
              <span>•</span>
              <span>{featuredPost.date}</span>
              <span>•</span>
              <span>{featuredPost.readTime}</span>
            </div>
          </div>
        </div>
      </section>

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

      {/* Posts Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.title} className="group">
                <div className="bg-gray-100 rounded-2xl aspect-video mb-6" />
                <span className="text-xs font-bold text-teal-500 uppercase tracking-wider">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-black mt-2 mb-3 group-hover:text-teal-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-black/60 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-black/40">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-black/20 rounded-full font-medium text-black hover:border-teal-500 hover:text-teal-500 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">Subscribe to our newsletter</h2>
            <p className="text-black/60 mb-8">
              Get the latest HubSpot tips and growth strategies delivered to your inbox every week.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-teal-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
