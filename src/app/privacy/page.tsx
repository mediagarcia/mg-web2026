import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Media Garcia",
  description: "Media Garcia privacy policy. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        badge="Legal"
        title="Privacy Policy"
        breadcrumbs={[
          { label: "Privacy Policy", href: "/privacy" },
        ]}
      />

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-black/70 mb-6">
              Your privacy is important to us. This Privacy Policy explains how Media Garcia, Inc. (&quot;Media Garcia,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects your personal information when you visit <Link href="/" className="text-teal-500 hover:text-teal-600">https://www.mediagarcia.com</Link> or use our services.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 text-black/70 mb-8">
              <p><strong>Media Garcia, Inc.</strong></p>
              <p>Saint Paul, Minnesota, USA</p>
              <p>Email: hello@mediagarcia.com</p>
              <p>Phone: +1 888-612-4250</p>
            </div>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Information We Collect</h2>
            <p className="text-black/70 mb-6">
              We collect information you voluntarily provide when you fill out forms, request a consultation, or communicate with us. This may include your name, email address, phone number, company name, and any other information you choose to share.
            </p>
            <p className="text-black/70 mb-6">
              Like most websites, we also automatically collect certain technical information when you visit our site, including your IP address, browser type, device information, pages visited, and referring URL. We use this information to understand how visitors use our website and to improve our services.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">How We Use Your Information</h2>
            <p className="text-black/70 mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-8 text-black/70 mb-6 space-y-2">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Send relevant communications about our services (with your consent)</li>
              <li>Improve our website, content, and service offerings</li>
              <li>Analyze website usage and trends</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Cookies and Tracking</h2>
            <p className="text-black/70 mb-6">
              We use cookies and similar technologies to enhance your experience on our website. These include:
            </p>
            <ul className="list-disc pl-8 text-black/70 mb-6 space-y-2">
              <li><strong>Essential cookies</strong> that enable core website functionality</li>
              <li><strong>Analytics cookies</strong> (Google Analytics) to understand how visitors interact with our site</li>
              <li><strong>Marketing cookies</strong> (HubSpot) to deliver relevant content and track the effectiveness of our outreach</li>
            </ul>
            <p className="text-black/70 mb-6">
              You can control cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Third-Party Services</h2>
            <p className="text-black/70 mb-6">
              We use third-party services to operate our business, including HubSpot (CRM and marketing), Google Analytics (website analytics), and Google Ads (advertising). These services may collect information about your interactions with our website in accordance with their own privacy policies.
            </p>
            <p className="text-black/70 mb-6">
              We may use remarketing services to advertise to previous visitors on third-party platforms. You can opt out of interest-based advertising through your Google Ad Preferences or browser settings.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Data Sharing</h2>
            <p className="text-black/70 mb-6">
              We do not sell your personal information. We may share your information with trusted service providers who assist in operating our website and delivering our services, but only to the extent necessary for those purposes. We may also disclose information when required by law or to protect our rights.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Data Security</h2>
            <p className="text-black/70 mb-6">
              We implement commercially reasonable security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Your Rights</h2>
            <p className="text-black/70 mb-6">
              Depending on your location, you may have rights regarding your personal information, including the right to access, correct, delete, or restrict processing of your data. To exercise these rights, contact us at hello@mediagarcia.com.
            </p>
            <p className="text-black/70 mb-6">
              <strong>California residents (CCPA):</strong> You have the right to know what personal information we collect, request deletion of your data, and opt out of the sale of personal information. We do not sell personal information.
            </p>
            <p className="text-black/70 mb-6">
              <strong>EEA/UK residents (GDPR):</strong> We process personal data based on legitimate interest (website analytics, service delivery) and consent (marketing communications). You may withdraw consent at any time.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Links to External Sites</h2>
            <p className="text-black/70 mb-6">
              Our website may contain links to external sites not operated by us. We are not responsible for the privacy practices of third-party websites and encourage you to review their privacy policies.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Children&apos;s Privacy</h2>
            <p className="text-black/70 mb-6">
              Our services are not directed to individuals under 13. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child under 13, we will delete it promptly.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Changes to This Policy</h2>
            <p className="text-black/70 mb-6">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Your continued use of our website after changes constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Contact Us</h2>
            <p className="text-black/70 mb-6">
              If you have questions about this Privacy Policy or our data practices, contact us at:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 text-black/70">
              <p><strong>Media Garcia, Inc.</strong></p>
              <p>Email: hello@mediagarcia.com</p>
              <p>Phone: +1 888-612-4250</p>
              <p className="mt-4 text-sm text-black/40">Effective as of February 26, 2026.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
