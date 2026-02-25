import { Metadata } from "next";
import { PocoPageContent } from "./PocoPageContent";

export const metadata: Metadata = {
  title: "Poco — Tracks the Little Things | Media Garcia",
  description: "An AI-powered platform that tracks promises, monitors project health, and surfaces what matters. Born from 200+ CRM implementations.",
};

export default function PocoPage() {
  return <PocoPageContent />;
}
