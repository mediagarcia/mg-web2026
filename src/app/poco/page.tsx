import { Metadata } from "next";
import { PocoPageContent } from "./PocoPageContent";

export const metadata: Metadata = {
  title: "Poco — How We Deliver to Outcomes | Media Garcia",
  description: "Poco is our AI-powered operations platform. It tracks commitments, monitors project health, and ensures we deliver to outcomes — not hours.",
};

export default function PocoPage() {
  return <PocoPageContent />;
}
