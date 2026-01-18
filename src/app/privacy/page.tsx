import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | Media Garcia",
  description: "Media Garcia privacy policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        badge="Legal"
        title="Privacy Policy"
        description="Last updated: January 15, 2026"
        breadcrumbs={[
          { label: "Privacy Policy", href: "/privacy" },
        ]}
      />

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-black mt-0 mb-4">Introduction</h2>
            <p className="text-black/70 mb-6">
              Media Garcia (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Information We Collect</h2>
            <h3 className="text-xl font-bold text-black mt-8 mb-3">Personal Information</h3>
            <p className="text-black/70 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-black/70 mb-6 space-y-2">
              <li>Fill out a contact form or request a consultation</li>
              <li>Subscribe to our newsletter</li>
              <li>Use our calculators or assessment tools</li>
              <li>Engage with our services as a client</li>
            </ul>
            <p className="text-black/70 mb-6">
              This information may include your name, email address, phone number, company name, job title, and any other information you choose to provide.
            </p>

            <h3 className="text-xl font-bold text-black mt-8 mb-3">Automatically Collected Information</h3>
            <p className="text-black/70 mb-4">
              When you visit our website, we automatically collect certain information, including:
            </p>
            <ul className="list-disc pl-6 text-black/70 mb-6 space-y-2">
              <li>Device information (browser type, operating system)</li>
              <li>IP address and general location</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring website or source</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">How We Use Your Information</h2>
            <p className="text-black/70 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-black/70 mb-6 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Analyze website usage and trends</li>
              <li>Protect against fraud and unauthorized access</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Information Sharing</h2>
            <p className="text-black/70 mb-6">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-black/70 mb-6 space-y-2">
              <li><strong>Service providers:</strong> Third-party vendors who help us operate our business (e.g., email service providers, analytics tools)</li>
              <li><strong>Business partners:</strong> When necessary to provide services you have requested</li>
              <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Cookies and Tracking</h2>
            <p className="text-black/70 mb-6">
              We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings. Disabling cookies may limit your ability to use certain features of our website.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Data Security</h2>
            <p className="text-black/70 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Your Rights</h2>
            <p className="text-black/70 mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 text-black/70 mb-6 space-y-2">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability</li>
            </ul>
            <p className="text-black/70 mb-6">
              To exercise these rights, please contact us at privacy@mediagarcia.com.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Third-Party Links</h2>
            <p className="text-black/70 mb-6">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Children&apos;s Privacy</h2>
            <p className="text-black/70 mb-6">
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Changes to This Policy</h2>
            <p className="text-black/70 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Contact Us</h2>
            <p className="text-black/70 mb-4">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 text-black/70">
              <p><strong>Media Garcia</strong></p>
              <p>428 Minnesota Street, Suite 500</p>
              <p>Saint Paul, MN 55101</p>
              <p>Email: privacy@mediagarcia.com</p>
              <p>Phone: +1 888-612-4250</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
