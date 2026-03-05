import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { GradientOrb } from "@/components/ui/visuals";
import { ReviewTrustStrip } from "@/components/ReviewTrustStrip";
import { BookingHero } from "./BookingHero";
import { SocialProofStrip } from "./SocialProofStrip";
import { ProcessSteps } from "./ProcessSteps";
import { ContactInfoFooter } from "./ContactInfoFooter";

export const metadata: Metadata = {
  title: "Book an Intro Call | Media Garcia",
  description:
    "Book a free 15-minute intro call with a senior revenue operations strategist. No commitment \u2014 get actionable insights for your CRM, RevOps, and growth systems.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* 1. Page Header */}
      <PageHeader
        badge="Book an Intro Call"
        title="15 minutes that could change your trajectory"
        description="A free, no-commitment conversation with a senior strategist about your revenue goals."
        breadcrumbs={[
          { label: "Book an Intro Call", href: "/contact" },
        ]}
      />

      {/* 2. Primary Booking Hero — calendar CTA above the fold */}
      <BookingHero />

      {/* 2b. Review Trust Strip — verified review links */}
      <div className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <ReviewTrustStrip />
        </div>
      </div>

      {/* 3. Social Proof — 3 inline testimonials */}
      <SocialProofStrip />

      {/* 4. Secondary Form Section */}
      <section id="contact-form" className="py-20 lg:py-32 bg-white relative overflow-hidden scroll-mt-24">
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
          <p className="text-sm text-gray-500 text-center mt-6">
            You&apos;ll hear back from Louis or Andrew within 24 hours. We&apos;ll
            ask about your current stack, challenges, and timeline to make the
            most of our first conversation.
          </p>
        </div>
      </section>

      {/* 5. What Happens Next — universal 4-step process */}
      <ProcessSteps />

      {/* 6. Contact Info Footer — compact */}
      <ContactInfoFooter />
    </>
  );
}
