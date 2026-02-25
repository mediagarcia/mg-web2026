import { HeroWithPreview, ClientLogos, ResultsHighlight, Services, Platforms, IndustriesWithPreview, WhyUsWithPreview, Process, CTABanner, Testimonials, FAQ, Team, Contact } from "@/components/sections";
import { HomePageWrapper } from "@/components/HomePageWrapper";
import { getImageForSlot, getVersionedImageForSlot } from "@/lib/images/get-image-for-slot";
export default function Home() {
  const heroImage = getImageForSlot("hero", "/images/hero/hero-bg.jpg");

  // Industry images - auto-discovers highest version (v3 > v2 > base)
  const industryImages = {
    healthcare: getVersionedImageForSlot("industries-healthcare"),
    technology: getVersionedImageForSlot("industries-technology"),
    b2b: getVersionedImageForSlot("industries-b2b"),
  };

  // Why Us background image
  const whyUsImage = getImageForSlot("why-us");

  return (
    <HomePageWrapper>
      <HeroWithPreview defaultImage={heroImage} slot="hero" />
      <ClientLogos />
      <ResultsHighlight />
      <Services />
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
