import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Media Garcia",
  description: "See how we've helped healthcare, technology, and B2B companies transform their revenue operations with HubSpot and CRM implementations.",
  openGraph: {
    title: "Our Work | Media Garcia",
    description: "See how we've helped healthcare, technology, and B2B companies transform their revenue operations.",
  },
  alternates: { canonical: "/work" },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
