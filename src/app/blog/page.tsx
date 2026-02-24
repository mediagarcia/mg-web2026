import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import { BlogNewsletter } from "./BlogNewsletter";

export const metadata: Metadata = {
  title: "Blog | Media Garcia",
  description: "HubSpot tips, marketing automation strategies, and growth insights for technology companies.",
};

const categories = ["All", "HubSpot", "Automation", "Analytics", "Sales", "RevOps", "CRM", "Migration"];

export default function BlogPage() {
  const featuredPost = blogPosts.find((p) => p.featured);
  const posts = blogPosts.filter((p) => !p.featured);

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
      {featuredPost && (
        <section className="py-12 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-8 lg:p-12 text-white hover:from-teal-600 hover:to-teal-700 transition-all">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                  Featured
                </span>
                <h2 className="text-2xl lg:text-4xl font-black mb-4">{featuredPost.title}</h2>
                <p className="text-white/80 mb-6 max-w-2xl">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-white/60">
                  <span>{featuredPost.category}</span>
                  <span>&bull;</span>
                  <span>{featuredPost.date}</span>
                  <span>&bull;</span>
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            </Link>
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

      {/* Posts Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article>
                  <div className={`rounded-2xl aspect-video mb-6 transition-all ${
                    post.category === "HubSpot" ? "bg-gradient-to-br from-[#ff7a59]/20 to-[#ff7a59]/5" :
                    post.category === "Automation" ? "bg-gradient-to-br from-teal-500/20 to-teal-500/5" :
                    post.category === "Analytics" ? "bg-gradient-to-br from-neon-purple-500/20 to-neon-purple-500/5" :
                    post.category === "Sales" ? "bg-gradient-to-br from-orange-red-500/20 to-orange-red-500/5" :
                    post.category === "RevOps" ? "bg-gradient-to-br from-teal-600/20 to-teal-600/5" :
                    post.category === "Migration" ? "bg-gradient-to-br from-blue-500/20 to-blue-500/5" :
                    "bg-gradient-to-br from-gray-200 to-gray-100"
                  } group-hover:shadow-lg`} />
                  <span className="text-xs font-bold text-teal-500 uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-black mt-2 mb-3 group-hover:text-teal-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-black/60 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-black/40">
                    <span>{post.date}</span>
                    <span>&bull;</span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <BlogNewsletter />

      <CTABanner />
    </>
  );
}
