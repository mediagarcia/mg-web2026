import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { GradientOrb } from "@/components/ui/visuals";
import { BookingHero } from "./BookingHero";
import { SocialProofStrip } from "./SocialProofStrip";
import { ProcessSteps } from "./ProcessSteps";
import { ContactInfoFooter } from "./ContactInfoFooter";

export const metadata: Metadata = {
  title: "Book a Strategy Call | Media Garcia",
  description:
    "Book a free 15-minute strategy call with a senior revenue operations strategist. No commitment \u2014 get actionable insights for your CRM, RevOps, and growth systems.",
};

export default function ContactPage() {
  return (
    <>
      {/* 1. Page Header */}
      <PageHeader
        badge="Book a Strategy Call"
        title="15 minutes that could change your trajectory"
        description="A free, no-commitment conversation with a senior strategist about your revenue goals."
        breadcrumbs={[
          { label: "Book a Strategy Call", href: "/contact" },
        ]}
      />

      {/* 2. Primary Booking Hero — calendar CTA above the fold */}
      <BookingHero />

      {/* 3. Social Proof — 3 inline testimonials */}
      <SocialProofStrip />

      {/* 4. Secondary Form Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <GradientOrb color="teal" size="xl" className="-top-48 -right-48 opacity-20" intensity="subtle" blur="xl" />
        <GradientOrb color="purple" size="lg" className="bottom-1/4 -left-32 opacity-15" intensity="subtle" blur="xl" />
        <div className="max-w-2xl mx-auto px-6 lg:px-12 relative">
          <p className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4 text-center">
            Or send a message
          </p>
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-black text-black text-center mb-3">
            Prefer to write?
          </h2>
          <p className="text-lg text-black/60 text-center mb-10">
            Tell us about your project and we&apos;ll respond within 24 hours.
          </p>
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-black/10 ring-1 ring-black/[0.04]">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 5. What Happens Next — universal 4-step process */}
      <ProcessSteps />

      {/* 6. Contact Info Footer — compact */}
      <ContactInfoFooter />
    </>
  );
}
