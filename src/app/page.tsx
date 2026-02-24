import { HeroWithPreview, ClientLogos, Services, Platforms, Stats, IndustriesWithPreview, WhyUsWithPreview, Process, Values, CTABanner, Testimonials, CaseStudiesWithPreview, FAQ, Team, Contact } from "@/components/sections";
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
    "advi-health-crm-optimization": getVersionedImageForSlot("case-study-advi"),
    "current-energy-integrations": getVersionedImageForSlot("case-study-current-energy"),
    "mens-pro-crm-enablement": getVersionedImageForSlot("case-study-menspro"),
    "mipi-alliance-service-hub": getVersionedImageForSlot("case-study-mipi"),
    "eag-crm-data-analytics": getVersionedImageForSlot("case-study-eag"),
    "xl-feet-ecommerce-growth": getVersionedImageForSlot("case-study-xlfeet"),
  };

  // Why Us background image
  const whyUsImage = getImageForSlot("why-us");

  return (
    <HomePageWrapper>
      <HeroWithPreview defaultImage={heroImage} slot="hero" />
      <ClientLogos />
      <Services />
      <Platforms />
      <Stats />
      <IndustriesWithPreview defaultImages={industryImages} />
      <WhyUsWithPreview defaultImage={whyUsImage} slot="why-us" />
      <Process />
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
