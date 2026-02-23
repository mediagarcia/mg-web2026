import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Media Garcia",
  description: "See how we've helped healthcare, IT, and SaaS companies transform their revenue operations with HubSpot and CRM implementations.",
  openGraph: {
    title: "Our Work | Media Garcia",
    description: "See how we've helped healthcare, IT, and SaaS companies transform their revenue operations.",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
