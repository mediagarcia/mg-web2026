import { Metadata } from "next";
import { getVideoForSlot } from "@/lib/videos/get-video-for-slot";
import { AboutPageContent } from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About | Media Garcia",
  description: "15+ years building revenue systems that actually work. Learn about our team, approach, and why healthcare, technology, and B2B companies trust us.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const aboutVideo = getVideoForSlot("about-video", "/videos/about-minimal.mp4");

  return <AboutPageContent aboutVideo={aboutVideo} />;
}
