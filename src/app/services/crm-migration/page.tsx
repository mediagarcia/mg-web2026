import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CRM Migration | Media Garcia",
  description: "Seamless CRM migration to HubSpot with zero data loss. We migrate from Salesforce, Pipedrive, Zoho, and more with full data integrity.",
};

const platforms = [
  "Salesforce",
  "Pipedrive",
  "Zoho CRM",
  "Microsoft Dynamics",
  "Freshsales",
  "Copper",
  "Insightly",
  "ActiveCampaign",
];

const process = [
  {
    step: "01",
    title: "Data Audit",
    description: "We analyze your current CRM to understand data structure, quality, and migration requirements.",
  },
  {
    step: "02",
    title: "Mapping & Planning",
    description: "Create detailed field mappings and migration plan with timeline and testing approach.",
  },
  {
    step: "03",
    title: "Data Cleaning",
    description: "Clean and deduplicate data before migration to ensure HubSpot starts fresh.",
  },
  {
    step: "04",
    title: "Test Migration",
    description: "Run test migrations to validate data integrity and catch issues early.",
  },
  {
    step: "05",
    title: "Full Migration",
    description: "Execute the complete migration with real-time monitoring and validation.",
  },
  {
    step: "06",
    title: "Verification",
    description: "Thorough QA testing to ensure all data migrated correctly and relationships intact.",
  },
];

export default function CRMMigrationPage() {
  return (
    <>
      <PageHeader
        badge="Service"
        title="CRM Migration"
        description="Seamless data transfer from your current CRM to HubSpot with zero data loss. We handle the complexity so you can focus on selling."
        breadcrumbs={[
          { label: "Services", href: "/services/crm-migration" },
          { label: "CRM Migration", href: "/services/crm-migration" },
        ]}
      />

      {/* Stats */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl lg:text-5xl font-black text-teal-500">50+</p>
              <p className="text-white/60 mt-2">Migrations Completed</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-black text-teal-500">0</p>
              <p className="text-white/60 mt-2">Data Loss Incidents</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-black text-teal-500">99.9%</p>
              <p className="text-white/60 mt-2">Data Accuracy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12">Platforms We Migrate From</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform) => (
              <div key={platform} className="bg-gray-50 rounded-2xl p-6 text-center">
                <p className="font-bold text-black">{platform}</p>
              </div>
            ))}
          </div>
          <p className="text-black/60 mt-8 text-center">
            Don&apos;t see your CRM? We can migrate from virtually any platform. <Link href="/contact" className="text-teal-500 hover:underline">Contact us</Link> to discuss your specific needs.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12">Our Migration Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-8">
                <span className="text-4xl font-black text-teal-500/20">{item.step}</span>
                <h3 className="text-xl font-bold text-black mt-4 mb-2">{item.title}</h3>
                <p className="text-black/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Migrates */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-12">What We Migrate</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Contacts", items: ["Contact records", "Custom properties", "List memberships", "Activity history"] },
              { title: "Companies", items: ["Company records", "Associations", "Custom fields", "Account hierarchies"] },
              { title: "Deals", items: ["Deal records", "Pipeline stages", "Deal properties", "Associated contacts"] },
              { title: "Activities", items: ["Emails", "Calls", "Meetings", "Notes & tasks"] },
            ].map((category) => (
              <div key={category.title} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-black mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-black/60">
                      <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
