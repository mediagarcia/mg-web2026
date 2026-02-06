import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { GradientOrb, FadingGridPattern } from "@/components/ui/visuals";

export const metadata: Metadata = {
  title: "Contact Us | Media Garcia",
  description: "Get in touch with Media Garcia for HubSpot implementation, marketing automation, and growth services. Schedule a free consultation today.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="Contact"
        title="Let's talk about your growth"
        description="Tell us about your goals and we'll show you what's possible."
        breadcrumbs={[
          { label: "Contact", href: "/contact" },
        ]}
      />

      {/* Contact Form Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <GradientOrb color="teal" size="xl" className="-top-48 -right-48 opacity-20" intensity="subtle" blur="xl" />
        <GradientOrb color="purple" size="lg" className="bottom-1/4 -left-32 opacity-15" intensity="subtle" blur="xl" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-black mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-black mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-black mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-black mb-2">
                    What can we help with?
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="hubspot-onboarding">HubSpot Onboarding</option>
                    <option value="sales-enablement">Sales Enablement</option>
                    <option value="marketing-automation">Marketing Automation</option>
                    <option value="crm-migration">CRM Migration</option>
                    <option value="integrations">Custom Integrations</option>
                    <option value="reporting">Reporting & Analytics</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                    placeholder="What are your goals? What challenges are you facing?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-teal-500 transition-colors"
                >
                  Send My Request
                </button>
                <p className="text-xs text-black/40 text-center mt-4">
                  We&apos;ll respond within 24 hours with next steps.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-black mb-6">Other ways to reach us</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-black">Phone</p>
                      <p className="text-black/60">+1 888-612-4250</p>
                      <p className="text-sm text-black/40">US & Canada toll-free</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-black">Email</p>
                      <p className="text-black/60">hello@mediagarcia.com</p>
                      <p className="text-sm text-black/40">We respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-black">Office</p>
                      <p className="text-black/60">428 Minnesota Street, Suite 500</p>
                      <p className="text-black/60">Saint Paul, MN 55101</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendar Booking */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-black mb-4">Schedule a call</h3>
                <p className="text-black/60 mb-6">
                  Prefer to talk? Book a free 30-minute discovery call to discuss your HubSpot needs.
                </p>
                <a
                  href="https://meetings.hubspot.com/louis3/discovery-meeting-with-louis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-teal-500 transition-colors"
                >
                  Book a Meeting with Louis
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>

              {/* Response Time */}
              <div className="border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-black mb-4">What happens next?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
                    <p className="text-black/60">We&apos;ll review your message and respond within 24 hours</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
                    <p className="text-black/60">Schedule a discovery call to understand your needs</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
                    <p className="text-black/60">Receive a customized proposal and implementation plan</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
