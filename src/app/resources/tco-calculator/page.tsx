import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { HubSpotWidget } from "@/components/HubSpotWidget";

export const metadata: Metadata = {
  title: "CRM Total Cost of Ownership Calculator | Media Garcia",
  description: "Compare the total cost of ownership between HubSpot, Salesforce, and other CRM platforms.",
};

export default function TCOCalculatorPage() {
  return (
    <>
      <PageHeader
        badge="Calculator"
        title="CRM Total Cost of Ownership"
        description="Compare the true cost of different CRM platforms over time, including hidden costs most vendors don't mention."
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "TCO Calculator", href: "/resources/tco-calculator" },
        ]}
      />

      {/* HubSpot TCO Calculator Widget */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <HubSpotWidget
            formId="34ae1891-50c2-48fb-9ed2-926a1e59a861"
            containerId="hubspot-tco-calculator"
            minHeight="2400px"
          />
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="text-sm text-black/40 text-center max-w-3xl mx-auto">
            This calculator is best viewed on a desktop browser. Cost estimates are based on
            publicly available pricing and typical implementation costs. Contact us for a
            customized TCO analysis based on your specific requirements.
          </p>
        </div>
      </section>
    </>
  );
}
