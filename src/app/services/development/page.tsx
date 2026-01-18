import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Website Development | Media Garcia",
  description: "HubSpot CMS websites that convert visitors into customers. Custom development, themes, and landing pages built for growth.",
};

const services = [
  {
    title: "HubSpot CMS Websites",
    description: "Fully custom websites built on HubSpot CMS with drag-and-drop editing for your team.",
  },
  {
    title: "Landing Pages",
    description: "High-converting landing pages optimized for lead generation and campaign performance.",
  },
  {
    title: "Custom Modules",
    description: "Reusable content modules that make it easy for marketers to create new pages.",
  },
  {
    title: "Blog Templates",
    description: "Professionally designed blog templates that showcase your content beautifully.",
  },
  {
    title: "Theme Development",
    description: "Custom HubSpot themes that match your brand and scale with your needs.",
  },
  {
    title: "Performance Optimization",
    description: "Speed optimization to ensure fast load times and better SEO rankings.",
  },
];

const techStack = [
  "HubSpot CMS",
  "HubL templating",
  "JavaScript/React",
  "CSS/Tailwind",
  "GraphQL",
  "Serverless Functions",
];

export default function DevelopmentPage() {
  return (
    <>
      <PageHeader
        badge="Service"
        title="Website Development"
        description="HubSpot CMS websites and custom development that convert visitors into customers. Built for marketers, optimized for growth."
        breadcrumbs={[
          { label: "Services", href: "/services/development" },
          { label: "Website Development", href: "/services/development" },
        ]}
      />

      {/* Services */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12">Development Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                <p className="text-black/60 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why HubSpot CMS */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-black mb-6">Why HubSpot CMS?</h2>
              <p className="text-black/60 mb-8 leading-relaxed">
                HubSpot CMS combines the power of a world-class CMS with built-in CRM integration, giving you unprecedented insight into how your website drives business results.
              </p>
              <ul className="space-y-4">
                {[
                  "Built-in CRM integration",
                  "Smart content personalization",
                  "A/B testing for pages",
                  "SEO recommendations",
                  "Security & hosting included",
                  "Drag-and-drop editing",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-teal-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
              <h3 className="text-2xl font-bold text-black mb-6">Our Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-gray-50 rounded-full text-black/70 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <hr className="my-8 border-gray-100" />
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-teal-500" />
                  <span className="text-black/70">HubSpot CMS certified developers</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-teal-500" />
                  <span className="text-black/70">Accessibility compliant (WCAG 2.1)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-teal-500" />
                  <span className="text-black/70">Mobile-first responsive design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
