import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { HubSpotWidget } from "@/components/HubSpotWidget";

export const metadata: Metadata = {
  title: "HubSpot ROI Calculator | Media Garcia",
  description: "Calculate the potential return on investment from implementing HubSpot with Media Garcia.",
};

export default function ROICalculatorPage() {
  return (
    <>
      <PageHeader
        badge="Calculator"
        title="Calculate your HubSpot ROI"
        description="See the potential return on investment from implementing HubSpot with our team."
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "ROI Calculator", href: "/resources/roi-calculator" },
        ]}
      />

      {/* HubSpot ROI Calculator Widget */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <HubSpotWidget
            formId="8805ad95-bc96-4edf-bb46-1e13f069dfbe"
            containerId="hubspot-roi-calculator"
            minHeight="3300px"
          />
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="text-sm text-black/40 text-center max-w-3xl mx-auto">
            This calculator is best viewed on a desktop browser. Results are estimates based on
            typical improvements seen by our clients. Contact us for a detailed analysis tailored
            to your business.
          </p>
        </div>
      </section>
    </>
  );
}
