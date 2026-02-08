import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import Link from "next/link";

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
        breadcrumbs={[
          { label: "Privacy Policy", href: "/privacy" },
        ]}
      />

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-black/70 mb-6">
              Your privacy is critically important to us.
            </p>
            <p className="text-black/70 mb-6">
              Loud Website, Inc. DBA Media Garcia, Inc.<br />
              PO BOX 4942<br />
              Minnesota, USA<br />
              6516919123
            </p>
            <p className="text-black/70 mb-6">
              It is Loud Website, Inc. DBA Media Garcia, Inc.&apos;s policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to <Link href="/" className="text-teal-500 hover:text-teal-600">https://www.mediagarcia.com</Link> (hereinafter, &quot;us&quot;, &quot;we&quot;, or &quot;https://www.mediagarcia.com&quot;). We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy (&quot;Privacy Policy&quot;) to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources.
            </p>
            <p className="text-black/70 mb-6">
              This Privacy Policy, together with the Terms and Conditions posted on our Website, set forth the general rules and policies governing your use of our Website. Depending on your activities when visiting our Website, you may be required to agree to additional terms and conditions.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Website Visitors</h2>
            <p className="text-black/70 mb-6">
              Like most website operators, Loud Website, Inc. DBA Media Garcia, Inc. collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Loud Website, Inc. DBA Media Garcia, Inc.&apos;s purpose in collecting non-personally identifying information is to better understand how Loud Website, Inc. DBA Media Garcia, Inc.&apos;s visitors use its website. From time to time, Loud Website, Inc. DBA Media Garcia, Inc. may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.
            </p>
            <p className="text-black/70 mb-6">
              Loud Website, Inc. DBA Media Garcia, Inc. also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users leaving comments on https://www.mediagarcia.com blog posts. Loud Website, Inc. DBA Media Garcia, Inc. only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Gathering of Personally-Identifying Information</h2>
            <p className="text-black/70 mb-6">
              Certain visitors to Loud Website, Inc. DBA Media Garcia, Inc.&apos;s websites choose to interact with Loud Website, Inc. DBA Media Garcia, Inc. in ways that require Loud Website, Inc. DBA Media Garcia, Inc. to gather personally-identifying information. The amount and type of information that Loud Website, Inc. DBA Media Garcia, Inc. gathers depends on the nature of the interaction. For example, we ask visitors who sign up for a blog at https://www.mediagarcia.com to provide a username and email address.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Security</h2>
            <p className="text-black/70 mb-6">
              The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Advertisements</h2>
            <p className="text-black/70 mb-6">
              Ads appearing on our website may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by Loud Website, Inc. DBA Media Garcia, Inc. and does not cover the use of cookies by any advertisers.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Links To External Sites</h2>
            <p className="text-black/70 mb-6">
              Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party&apos;s site. We strongly advise you to review the Privacy Policy and terms and conditions of every site you visit.
            </p>
            <p className="text-black/70 mb-6">
              We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Google AdWords for Remarketing</h2>
            <p className="text-black/70 mb-6">
              Https://www.mediagarcia.com uses the remarketing services to advertise on third party websites (including Google) to previous visitors to our site. It could mean that we advertise to previous visitors who haven&apos;t completed a task on our site, for example using the contact form to make an inquiry. This could be in the form of an advertisement on the Google search results page, or a site in the Google Display Network. Third-party vendors, including Google, use cookies to serve ads based on someone&apos;s past visits. Of course, any data collected will be used in accordance with our own privacy policy and Google&apos;s privacy policy.
            </p>
            <p className="text-black/70 mb-6">
              You can set preferences for how Google advertises to you using the Google Ad Preferences page, and if you want to you can opt out of interest-based advertising entirely by cookie settings or permanently using a browser plugin.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Cookies</h2>
            <p className="text-black/70 mb-6">
              To enrich and perfect your online experience, Loud Website, Inc. DBA Media Garcia, Inc. uses &quot;Cookies&quot;, similar technologies and services provided by others to display personalized content, appropriate advertising and store your preferences on your computer.
            </p>
            <p className="text-black/70 mb-6">
              A cookie is a string of information that a website stores on a visitor&apos;s computer, and that the visitor&apos;s browser provides to the website each time the visitor returns. Loud Website, Inc. DBA Media Garcia, Inc. uses cookies to help Loud Website, Inc. DBA Media Garcia, Inc. identify and track visitors, their usage of https://www.mediagarcia.com, and their website access preferences. Loud Website, Inc. DBA Media Garcia, Inc. visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Loud Website, Inc. DBA Media Garcia, Inc.&apos;s websites, with the drawback that certain features of Loud Website, Inc. DBA Media Garcia, Inc.&apos;s websites may not function properly without the aid of cookies.
            </p>
            <p className="text-black/70 mb-6">
              By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree to Loud Website, Inc. DBA Media Garcia, Inc.&apos;s use of cookies.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Privacy Policy Changes</h2>
            <p className="text-black/70 mb-6">
              Although most changes are likely to be minor, Loud Website, Inc. DBA Media Garcia, Inc. may change its Privacy Policy from time to time, and in Loud Website, Inc. DBA Media Garcia, Inc.&apos;s sole discretion. Loud Website, Inc. DBA Media Garcia, Inc. encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
