import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Media Garcia | 14+ Years Building Revenue Systems",
  description:
    "We build CRM and RevOps systems for healthcare, IT, and SaaS companies. Senior-level expertise from day one, outcomes-focused approach, 98% client retention.",
  openGraph: {
    title: "About Media Garcia | 14+ Years Building Revenue Systems",
    description:
      "We build CRM and RevOps systems for healthcare, IT, and SaaS companies. Senior-level expertise from day one, outcomes-focused approach, 98% client retention.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
