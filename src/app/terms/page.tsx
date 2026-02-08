import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Terms of Service | Media Garcia",
  description: "Media Garcia terms of service. Read our terms and conditions for using our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        badge="Legal"
        title="Terms of Service"
        description="Last updated: January 15, 2026"
        breadcrumbs={[
          { label: "Terms of Service", href: "/terms" },
        ]}
      />

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-black mt-0 mb-4">Agreement to Terms</h2>
            <p className="text-black/70 mb-6">
              By accessing or using the Media Garcia website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Services Description</h2>
            <p className="text-black/70 mb-6">
              Media Garcia provides HubSpot implementation, consulting, and related digital marketing services. Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 text-black/70 mb-6 space-y-2">
              <li>HubSpot CRM implementation and configuration</li>
              <li>Marketing automation setup and optimization</li>
              <li>Sales enablement and training</li>
              <li>CRM migration services</li>
              <li>Custom integrations and development</li>
              <li>Reporting and analytics setup</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Client Responsibilities</h2>
            <p className="text-black/70 mb-4">
              As a client, you agree to:
            </p>
            <ul className="list-disc pl-6 text-black/70 mb-6 space-y-2">
              <li>Provide accurate and complete information necessary for service delivery</li>
              <li>Grant appropriate access to systems and platforms as needed</li>
              <li>Respond to requests for information in a timely manner</li>
              <li>Review and approve deliverables within agreed timeframes</li>
              <li>Make payments according to the agreed payment terms</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Intellectual Property</h2>
            <h3 className="text-xl font-bold text-black mt-8 mb-3">Our Property</h3>
            <p className="text-black/70 mb-6">
              The Media Garcia website, including its design, content, logos, and other materials, are owned by Media Garcia and protected by intellectual property laws. You may not copy, reproduce, or distribute our materials without prior written consent.
            </p>
            <h3 className="text-xl font-bold text-black mt-8 mb-3">Client Property</h3>
            <p className="text-black/70 mb-6">
              You retain ownership of all content, data, and materials you provide to us. By providing such materials, you grant us a license to use them solely for the purpose of delivering our services.
            </p>
            <h3 className="text-xl font-bold text-black mt-8 mb-3">Work Product</h3>
            <p className="text-black/70 mb-6">
              Upon full payment, you will own the custom work product we create specifically for you. We retain ownership of our pre-existing tools, templates, and methodologies.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Payment Terms</h2>
            <p className="text-black/70 mb-4">
              Unless otherwise agreed in writing:
            </p>
            <ul className="list-disc pl-6 text-black/70 mb-6 space-y-2">
              <li>Project-based services require 50% deposit before work begins</li>
              <li>Remaining balance is due upon project completion</li>
              <li>Monthly retainer services are billed at the beginning of each month</li>
              <li>Invoices are due within 30 days of receipt</li>
              <li>Late payments may incur a 1.5% monthly interest charge</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Confidentiality</h2>
            <p className="text-black/70 mb-6">
              We treat all client information as confidential and will not disclose it to third parties without your consent, except as required by law or as necessary to provide our services. This obligation survives the termination of our engagement.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Limitation of Liability</h2>
            <p className="text-black/70 mb-6">
              To the maximum extent permitted by law, Media Garcia shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities. Our total liability shall not exceed the fees paid by you for the services giving rise to the claim.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Disclaimer of Warranties</h2>
            <p className="text-black/70 mb-6">
              Our services are provided &quot;as is&quot; without warranties of any kind, either express or implied. We do not guarantee specific results from our services. The success of marketing and sales initiatives depends on many factors beyond our control.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Termination</h2>
            <p className="text-black/70 mb-6">
              Either party may terminate the engagement with 30 days written notice. Upon termination, you are responsible for payment for all services rendered up to the termination date. We will provide reasonable assistance in transitioning your systems to another provider.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Indemnification</h2>
            <p className="text-black/70 mb-6">
              You agree to indemnify and hold harmless Media Garcia from any claims, damages, or expenses arising from your use of our services, your violation of these terms, or your violation of any rights of a third party.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Governing Law</h2>
            <p className="text-black/70 mb-6">
              These Terms shall be governed by the laws of the State of Minnesota, without regard to conflict of law principles. Any disputes shall be resolved in the courts located in Ramsey County, Minnesota.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Changes to Terms</h2>
            <p className="text-black/70 mb-6">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of the modified terms.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Severability</h2>
            <p className="text-black/70 mb-6">
              If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Contact Information</h2>
            <p className="text-black/70 mb-4">
              For questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 text-black/70">
              <p><strong>Media Garcia</strong></p>
              <p>428 Minnesota Street, Suite 500</p>
              <p>Saint Paul, MN 55101</p>
              <p>Email: legal@mediagarcia.com</p>
              <p>Phone: +1 888-612-4250</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
