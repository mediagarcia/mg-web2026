import { Hero, ClientLogos, Services, Stats, Industries, WhyUs, Process, Certifications, Values, CTABanner, Testimonials, CaseStudies, FAQ, Team, Contact } from "@/components/sections";
import { getImageForSlot } from "@/lib/images/get-image-for-slot";

export default function Home() {
  const heroImage = getImageForSlot("hero", "/images/hero/hero-bg.jpg");

  return (
    <>
      <Hero heroImage={heroImage} />
      <ClientLogos />
      <Services />
      <Stats />
      <Industries />
      <WhyUs />
      <Process />
      <Certifications />
      <Values />
      <CTABanner />
      <Testimonials />
      <CaseStudies />
      <FAQ />
      <Team />
      <Contact />
    </>
  );
}
