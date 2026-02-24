import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Guide } from "@/data/guides";

interface RelatedGuidesProps {
  guides: Guide[];
}

export function RelatedGuides({ guides }: RelatedGuidesProps) {
  if (guides.length === 0) return null;

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 block">
            Keep Reading
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-black">
            Related guides
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/resources/guides/${guide.slug}`}
              className="group bg-white rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <span className="text-xs font-bold text-teal-500 uppercase tracking-wider">
                {guide.category}
              </span>
              <h3 className="text-xl font-bold text-black mt-2 mb-3 group-hover:text-teal-500 transition-colors">
                {guide.title}
              </h3>
              <p className="text-black/60 mb-4 line-clamp-3">{guide.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-black/40">{guide.readTime}</span>
                <span className="inline-flex items-center gap-1 text-teal-500 font-medium text-sm">
                  Read guide
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
