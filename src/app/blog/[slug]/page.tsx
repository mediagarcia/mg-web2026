import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CTABanner } from "@/components/sections";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/data/blog-posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Media Garcia",
    };
  }

  return {
    title: `${post.title} | Blog | Media Garcia`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug);

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
                <Link href="/blog" className="text-black/40 hover:text-teal-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-black/20">/</span>
                <span className="text-black/60 truncate max-w-[200px]">{post.title}</span>
              </li>
            </ol>
          </nav>

          {/* Category & Meta */}
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-block bg-teal-500/10 text-teal-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-black/40">{post.date}</span>
            <span className="text-sm text-black/40">{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight text-black mb-6 max-w-4xl">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-black/60 max-w-2xl">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12">
          <div className="prose prose-lg max-w-none">
            {post.content.map((block, index) => {
              if (block.startsWith("## ")) {
                return (
                  <h2
                    key={index}
                    className="text-2xl lg:text-3xl font-black text-black mt-12 mb-6 first:mt-0"
                  >
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p key={index} className="text-black/70 leading-relaxed mb-6">
                  {block}
                </p>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 lg:py-32 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
                  Keep Reading
                </span>
                <h2 className="text-3xl lg:text-4xl font-black text-black">
                  Related articles
                </h2>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-black font-medium hover:text-teal-500 transition-colors group"
              >
                View all articles
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="bg-gray-100 rounded-2xl aspect-video mb-6 group-hover:bg-gray-200 transition-colors" />
                  <span className="text-xs font-bold text-teal-500 uppercase tracking-wider">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-xl font-bold text-black mt-2 mb-3 group-hover:text-teal-500 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-black/60">{relatedPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-black/40 mt-4">
                    <span>{relatedPost.date}</span>
                    <span>-</span>
                    <span>{relatedPost.readTime}</span>
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
