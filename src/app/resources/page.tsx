import { Metadata } from "next";
import { PageHeaderWithPreview } from "@/components/PageHeaderWithPreview";
import { getImageForSlot } from "@/lib/images/get-image-for-slot";
import { CTABanner } from "@/components/sections";
import Link from "next/link";
import { GradientOrb, FadingGridPattern } from "@/components/ui/visuals";

export const metadata: Metadata = {
  title: "Resources | Media Garcia",
  description: "Free CRM guides, ROI calculators, assessments, and tools to help you make better decisions about your tech stack.",
};

const resources = [
  {
    title: "CRM & RevOps Guides",
    description: "In-depth guides on CRM implementation, best practices, and optimization strategies.",
    href: "/resources/guides",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    count: "12 guides",
  },
  {
    title: "CRM Assessment",
    description: "Take our free assessment to evaluate your current CRM setup and identify improvement opportunities.",
    href: "/resources/assessment",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    count: "5 min assessment",
  },
  {
    title: "ROI Calculator",
    description: "Calculate the potential return on investment from a CRM implementation with our team.",
    href: "/resources/roi-calculator",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    count: "Interactive tool",
  },
  {
    title: "TCO Calculator",
    description: "Compare the total cost of ownership between different CRM platforms including HubSpot and Salesforce.",
    href: "/resources/tco-calculator",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    count: "Interactive tool",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeaderWithPreview
        slot="page-resources"
        defaultImage={getImageForSlot("page-resources")}
        badge="Resources"
        title="Tools and guides to help you grow"
        description="Free resources to help you make better decisions about CRM strategy, RevOps, and marketing automation."
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
        ]}
      />

      {/* Resources Grid */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <GradientOrb color="teal" size="xl" className="-top-48 -right-48 opacity-20" intensity="subtle" blur="xl" />
        <GradientOrb color="purple" size="lg" className="bottom-1/4 -left-32 opacity-15" intensity="subtle" blur="xl" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors"
              >
                <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center text-teal-500 mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                  {resource.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-teal-500 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-black/60 mb-4">{resource.description}</p>
                <span className="text-sm font-medium text-teal-500">{resource.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
