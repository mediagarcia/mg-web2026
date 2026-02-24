import { Metadata } from "next";
import { notFound } from "next/navigation";
import { guides, getGuideBySlug } from "@/data/guides";

import ZendeskToHubSpotGuide from "../_content/zendesk-to-hubspot";
import OperationsHubPlaybook from "../_content/operations-hub-playbook";
import SalesforceToHubSpotGuide from "../_content/salesforce-to-hubspot";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const guideComponents: Record<string, React.ComponentType> = {
  "zendesk-to-hubspot": ZendeskToHubSpotGuide,
  "operations-hub-playbook": OperationsHubPlaybook,
  "salesforce-to-hubspot": SalesforceToHubSpotGuide,
};

export async function generateStaticParams() {
  return guides
    .filter((g) => g.hasDetailPage)
    .map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return { title: "Guide Not Found | Media Garcia" };
  }

  return {
    title: `${guide.title} | Media Garcia`,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      url: `https://mediagarcia.com/resources/guides/${guide.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide || !guide.hasDetailPage) {
    notFound();
  }

  const GuideContent = guideComponents[slug];
  if (!GuideContent) {
    notFound();
  }

  return <GuideContent />;
}
