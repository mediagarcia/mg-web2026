import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABanner } from "@/components/sections";
import { WorkPageContent } from "./WorkPageContent";

export const metadata: Metadata = {
  title: "Our Work | Media Garcia",
  description: "Client success stories from Media Garcia. See how we've helped businesses transform their operations with strategic CRM implementation and automation.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        badge="Our Work"
        title="Client Success Stories"
        description="Real outcomes from real partnerships. See how we've helped businesses transform their operations with strategic CRM implementation and automation."
        breadcrumbs={[{ label: "Work", href: "/work" }]}
      />

      <WorkPageContent />

      <CTABanner />
    </>
  );
}
