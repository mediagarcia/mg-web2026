import { Metadata } from "next";
import { HeroWithPreview, ClientLogos, ResultsHighlightWithPreview, ServicesWithPreview, Platforms, IndustriesWithPreview, WhyUsWithPreview, Process, CTABanner, Testimonials, FAQ, Team, Contact } from "@/components/sections";
import { HomePageWrapper } from "@/components/HomePageWrapper";
import { getImageForSlot, getVersionedImageForSlot } from "@/lib/images/get-image-for-slot";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const heroImage = getImageForSlot("hero", "/images/hero/hero-bg.jpg");

  // Industry images - auto-discovers highest version (v3 > v2 > base)
  const industryImages = {
    healthcare: getVersionedImageForSlot("industries-healthcare"),
    technology: getVersionedImageForSlot("industries-technology"),
    b2b: getVersionedImageForSlot("industries-b2b"),
  };

  // Services banner image
  const servicesBannerImage = getImageForSlot("services-banner");

  // Results background image
  const resultsBgImage = getImageForSlot("results-bg");

  // Why Us background image
  const whyUsImage = getImageForSlot("why-us");

  return (
    <HomePageWrapper>
      <HeroWithPreview defaultImage={heroImage} slot="hero" />
      <ClientLogos />
      <ResultsHighlightWithPreview defaultImage={resultsBgImage} slot="results-bg" />
      <ServicesWithPreview defaultImage={servicesBannerImage} slot="services-banner" />
      <Platforms />
      <IndustriesWithPreview defaultImages={industryImages} />
      <WhyUsWithPreview defaultImage={whyUsImage} slot="why-us" />
      <Process />
      <CTABanner />
      <Testimonials />
      <FAQ />
      <Team />
      <Contact />
    </HomePageWrapper>
  );
}
