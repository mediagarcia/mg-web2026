import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "AI Policy | Media Garcia",
  description: "Media Garcia's ethical AI policy. Learn how we use artificial intelligence responsibly, ethically, and transparently.",
};

export default function AIPolicyPage() {
  return (
    <>
      <PageHeader
        badge="Legal"
        title="AI Policy"
        breadcrumbs={[
          { label: "AI Policy", href: "/ai-policy" },
        ]}
      />

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-black/70 mb-6 text-lg">
              At Media Garcia, we believe in using artificial intelligence (AI) to empower businesses, enhance efficiency, and drive meaningful insights. AI is a powerful tool, but it should be used responsibly, ethically, and transparently. This policy outlines our approach to AI, ensuring it aligns with our values and our commitment to serving our clients with integrity.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">1. AI as an Enhancement, Not a Replacement</h2>
            <p className="text-black/70 mb-6">
              We use AI to <strong>augment human expertise, not replace it</strong>. AI helps us analyze data faster, automate repetitive tasks, and generate insights, but critical business decisions and creative strategies are always led by human intelligence.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">2. Ethical AI Implementation</h2>
            <p className="text-black/70 mb-4">
              Our AI-powered services follow these ethical guidelines:
            </p>
            <ul className="list-disc pl-6 text-black/70 mb-6 space-y-2">
              <li><strong>Transparency:</strong> We clearly communicate when and how AI is used in our services.</li>
              <li><strong>Fairness:</strong> Our AI-driven insights are unbiased and designed to help businesses grow equitably.</li>
              <li><strong>Privacy &amp; Security:</strong> Client data is treated with the utmost confidentiality and protected using secure AI tools.</li>
              <li><strong>Accountability:</strong> We take responsibility for the outcomes of AI-driven recommendations and ensure human oversight in all decision-making processes.</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">3. AI in Our Services</h2>
            <p className="text-black/70 mb-4">
              At Media Garcia, we integrate AI into various aspects of our work, including:
            </p>
            <ul className="list-disc pl-6 text-black/70 mb-6 space-y-2">
              <li><strong>CRM Data Optimization &amp; Insights:</strong> Our AI-driven Inside Extraction Service uncovers golden nuggets of insights from CRM data, helping businesses find new opportunities.</li>
              <li><strong>Marketing &amp; Sales Automation:</strong> AI assists in streamlining marketing efforts, personalizing outreach, and optimizing campaigns.</li>
              <li><strong>AI-Powered Business Analysis:</strong> We use AI to extract meaningful patterns from data, but final strategies are crafted by our experienced consultants.</li>
              <li><strong>Content &amp; Communication:</strong> AI supports content generation, but all public-facing materials are reviewed by humans for accuracy and quality.</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">4. Continuous Improvement &amp; Responsible AI Adoption</h2>
            <p className="text-black/70 mb-6">
              AI technology is evolving, and so is our approach. We stay up to date with industry best practices, AI ethics, and regulatory changes to ensure our AI use remains responsible. We also listen to feedback from clients to refine and improve how AI supports their business needs.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">5. Commitment to AI Transparency</h2>
            <p className="text-black/70 mb-6">
              If you ever have questions about how we use AI in our services, we are happy to provide clear and honest answers. Our goal is to ensure AI is a tool that benefits everyone.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 text-black/70">
              <p>
                <strong>Want to learn more?</strong> Contact us at{" "}
                <a href="mailto:hola@mediagarcia.com" className="text-teal-500 hover:text-teal-600">hola@mediagarcia.com</a>{" "}
                to discuss how AI can support your business growth in a responsible and ethical way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
