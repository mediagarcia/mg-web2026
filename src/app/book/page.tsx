import { Metadata } from "next";
import { BookLandingContent } from "./BookLandingContent";

export const metadata: Metadata = {
  title: "Book an Intro Call | Media Garcia",
  description:
    "Book a free 15-minute intro call with a senior revenue operations strategist. No commitment — get actionable insights for your CRM, RevOps, and growth systems.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return <BookLandingContent />;
}
