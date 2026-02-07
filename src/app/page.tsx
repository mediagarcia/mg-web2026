import { HeroWithPreview, ClientLogos, Services, Stats, IndustriesWithPreview, WhyUsWithPreview, Process, Certifications, Values, CTABanner, Testimonials, CaseStudiesWithPreview, FAQ, Team, Contact } from "@/components/sections";
import { HomePageWrapper } from "@/components/HomePageWrapper";
import { getImageForSlot, getVersionedImageForSlot } from "@/lib/images/get-image-for-slot";
export default function Home() {
  const heroImage = getImageForSlot("hero", "/images/hero/hero-bg.jpg");

  // Industry images - auto-discovers highest version (v3 > v2 > base)
  const industryImages = {
    healthcare: getVersionedImageForSlot("industries-healthcare"),
    it: getVersionedImageForSlot("industries-it"),
    saas: getVersionedImageForSlot("industries-saas"),
  };

  // Case study images - auto-discovers highest version
  const caseStudyImages = {
    generic: getImageForSlot("case-studies-generic"),
    "healthcare-integration": getVersionedImageForSlot("case-study-healthcare"),
    "lead-generation-saas": getVersionedImageForSlot("case-study-saas"),
    "crm-migration": getVersionedImageForSlot("case-study-crm"),
  };

  // Why Us background image
  const whyUsImage = getImageForSlot("why-us");

  return (
    <HomePageWrapper>
      <HeroWithPreview defaultImage={heroImage} slot="hero" />
      <ClientLogos />
      <Services />
      <Stats />
      <IndustriesWithPreview defaultImages={industryImages} />
      <WhyUsWithPreview defaultImage={whyUsImage} slot="why-us" />
      <Process />
      <Certifications />
      <Values />
      <CTABanner />
      <Testimonials />
      <CaseStudiesWithPreview defaultImages={caseStudyImages} />
      <FAQ />
      <Team />
      <Contact />
    </HomePageWrapper>
  );
}
