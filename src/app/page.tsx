import { HeroWithPreview, ClientLogos, Services, Platforms, Stats, IndustriesWithPreview, WhyUsWithPreview, Process, Values, CTABanner, Testimonials, PocoComingSoon, FAQ, Team, Contact } from "@/components/sections";
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
      <PocoComingSoon />
      <FAQ />
      <Team />
      <Contact />
    </HomePageWrapper>
  );
}
