import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Terms & Conditions | Media Garcia",
  description: "Media Garcia terms and conditions. Read our terms for using our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        badge="Legal"
        title="Terms & Conditions"
        breadcrumbs={[
          { label: "Terms & Conditions", href: "/terms" },
        ]}
      />

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-black mt-0 mb-4">Agreement between User and mediagarcia.com</h2>
            <p className="text-black/70 mb-6">
              Welcome to http://www.mediagarcia.com/. The Site is comprised of various web pages operated by Loud Website, Inc. D/B/A Media Garcia, Inc. (&quot;Media Garcia&quot;). The site is offered conditioned on acceptance of the terms, conditions, and notices contained herein without modification. Your use constitutes agreement to all Terms. http://www.mediagarcia.com/ is a business consulting website.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">About Us</h2>
            <p className="text-black/70 mb-6">
              Media Garcia is a business consultancy that works with businesses on platform consulting, HubSpot consulting, and HubSpot onboarding.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Privacy</h2>
            <p className="text-black/70 mb-6">
              Your use is subject to Media Garcia&apos;s Privacy Policy. Please review the Privacy Policy, which governs the Site and informs users of data collection practices.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Electronic Communications</h2>
            <p className="text-black/70 mb-6">
              Visiting http://www.mediagarcia.com/ or sending emails constitutes electronic communications. You consent to receive electronic communications and agree that all agreements, notices, disclosures and other communications are satisfied whether provided electronically, via email or on the Site.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Children Under Thirteen</h2>
            <p className="text-black/70 mb-6">
              Media Garcia does not knowingly collect personal information from persons under thirteen, either online or offline. If under 18, you may use the site only with parental or guardian permission.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Links to Third Party Sites/Third Party Services</h2>
            <p className="text-black/70 mb-6">
              The site may contain links to other websites (&quot;Linked Sites&quot;). Linked Sites are not under Media Garcia&apos;s control, and Media Garcia is not responsible for contents, links, changes or updates. These links are provided as a convenience only, and inclusion does not imply endorsement.
            </p>
            <p className="text-black/70 mb-6">
              Services delivered via third party sites and organizations may result in Media Garcia sharing information and data with contractors to provide requested functionality on behalf of users and customers.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">No Unlawful or Prohibited Use/Intellectual Property</h2>
            <p className="text-black/70 mb-6">
              You are granted a non-exclusive, non-transferable, revocable license to access and use the site strictly per these terms. You warrant you will not use the site for unlawful or prohibited purposes. You may not damage, disable, overburden, or impair the site or interfere with others&apos; use and enjoyment. You may not obtain or attempt to obtain materials or information through means not intentionally made available.
            </p>
            <p className="text-black/70 mb-6">
              All content including text, graphics, logos, images, compilation, and software is property of Media Garcia or suppliers, protected by copyright and intellectual property laws. You agree to observe and abide by all copyright and proprietary notices, legends or restrictions. You will not modify, publish, transmit, reverse engineer, participate in transfer or sale, create derivative works, or exploit content in whole or part. Media Garcia content is not for resale. Your use does not entitle unauthorized use of protected content; you will not delete or alter proprietary rights or attribution notices. You agree you do not acquire ownership rights in protected content. Media Garcia grants no licenses, express or implied, to intellectual property except as expressly authorized by these Terms.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Use of Communication Services</h2>
            <p className="text-black/70 mb-6">
              The site may contain bulletin board services, chat areas, news groups, forums, communities, personal web pages, calendars, and/or other message or communication facilities designed to enable communication with the public or groups (collectively, &quot;Communication Services&quot;). You agree to use Communication Services only to post, send and receive proper and related messages and material.
            </p>
            <p className="text-black/70 mb-6">
              By way of example and not limitation, when using Communication Services, you will not: defame, abuse, harass, stalk, threaten or violate legal rights (such as privacy and publicity) of others; publish, post, upload, distribute or disseminate inappropriate, profane, defamatory, infringing, obscene, indecent or unlawful topic, name, material or information; upload files containing software or material protected by intellectual property laws or privacy/publicity rights unless you own or control rights or received necessary consents; upload files containing viruses, corrupted files, or similar software or programs that may damage another&apos;s computer; advertise or offer to sell or buy goods or services for business purposes unless the Communication Service specifically allows; conduct or forward surveys, contests, pyramid schemes or chain letters; download files you know or reasonably should know cannot be legally distributed in such manner; falsify or delete author attributions, legal or proper notices, proprietary designations or labels of origin or source of software or material in uploaded files; restrict or inhibit other users from using and enjoying Communication Services; violate any code of conduct or guidelines applicable to any Communication Service; harvest or otherwise collect information about others, including e-mail addresses, without consent; violate any applicable laws or regulations.
            </p>
            <p className="text-black/70 mb-6">
              Media Garcia has no obligation to monitor Communication Services but reserves the right to review materials posted and remove any in its sole discretion. Media Garcia reserves the right to terminate your access to any or all Communication Services at any time without notice for any reason.
            </p>
            <p className="text-black/70 mb-6">
              Media Garcia reserves the right at all times to disclose any information necessary to satisfy applicable law, regulation, legal process or governmental request, or to edit, refuse to post or remove any information or materials, in whole or part, in Media Garcia&apos;s sole discretion.
            </p>
            <p className="text-black/70 mb-6">
              Always use caution when giving personally identifying information about yourself or children in any Communication Service. Media Garcia does not control or endorse content, messages or information in any Communication Service and specifically disclaims liability regarding Communication Services and actions resulting from your participation. Managers and hosts are not authorized Media Garcia spokespersons, and their views do not necessarily reflect Media Garcia&apos;s.
            </p>
            <p className="text-black/70 mb-6">
              Materials uploaded to Communication Services may be subject to posted limitations on usage, reproduction and/or dissemination. You are responsible for adhering to such limitations if you upload materials.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Materials Provided to mediagarcia.com or Posted on Any Media Garcia Web Page</h2>
            <p className="text-black/70 mb-6">
              Media Garcia does not claim ownership of materials you provide (including feedback and suggestions) or post, upload, input or submit to any Media Garcia Site or associated services (collectively &quot;Submissions&quot;). However, by posting, uploading, inputting, providing or submitting your Submission, you grant Media Garcia, affiliated companies and necessary sublicensees permission to use your Submission in connection with Internet business operations, including without limitation the rights to: copy, distribute, transmit, publicly display, publicly perform, reproduce, edit, translate and reformat your Submission; and publish your name in connection with your Submission.
            </p>
            <p className="text-black/70 mb-6">
              No compensation will be paid for use of your Submission as provided herein.
            </p>
            <p className="text-black/70 mb-6">
              Media Garcia is under no obligation to post or use any Submission you may provide and may remove any Submission at any time in its sole discretion.
            </p>
            <p className="text-black/70 mb-6">
              By posting, uploading, inputting, providing or submitting your Submission, you warrant and represent that you own or otherwise control all rights to your Submission as described in this section, including all rights necessary to provide, post, upload, input or submit the Submissions.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Third Party Accounts</h2>
            <p className="text-black/70 mb-6">
              You will be able to connect your Media Garcia account to third party accounts. By connecting your Media Garcia account to your third party account, you acknowledge and agree that you are consenting to the continuous release of information about you to others (in accordance with your privacy settings on those third party sites). If you do not want information about you to be shared in this manner, do not use this feature.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">International Users</h2>
            <p className="text-black/70 mb-6">
              The Service is controlled, operated and administered by Media Garcia from offices within the USA. If you access the Service from a location outside the USA, you are responsible for compliance with all local laws. You agree that you will not use the Media Garcia Content accessed through http://www.mediagarcia.com/ in any country or in any manner prohibited by any applicable laws, restrictions or regulations.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Indemnification</h2>
            <p className="text-black/70 mb-6">
              You agree to indemnify, defend and hold harmless Media Garcia, its officers, directors, employees, agents and third parties, for any losses, costs, liabilities and expenses (including reasonable attorney&apos;s fees) relating to or arising out of your use of or inability to use the Site or services, any user postings made by you, your violation of any terms of this Agreement or your violation of any rights of a third party, or your violation of any applicable laws, rules or regulations. Media Garcia reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with Media Garcia in asserting any available defenses.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Arbitration</h2>
            <p className="text-black/70 mb-6">
              In the event the parties are not able to resolve any dispute between them arising out of or concerning these Terms and Conditions, or any provisions hereof, whether in contract, tort, or otherwise at law or in equity for damages or any other relief, then such dispute shall be resolved only by final and binding arbitration pursuant to the Federal Arbitration Act, conducted by a single neutral arbitrator and administered by the American Arbitration Association, or a similar arbitration service selected by the parties, in a location mutually agreed upon by the parties. The arbitrator&apos;s award shall be final, and judgment may be entered upon it in any court having jurisdiction. In the event that any legal or equitable action, proceeding or arbitration arises out of or concerns these Terms and Conditions, the prevailing party shall be entitled to recover its costs and reasonable attorney&apos;s fees. The parties agree to arbitrate all disputes and claims in regards to these Terms and Conditions or any disputes arising as a result of these Terms and Conditions, whether directly or indirectly, including Tort claims that are a result of these Terms and Conditions. The parties agree that the Federal Arbitration Act governs the interpretation and enforcement of this provision. The entire dispute, including the scope and enforceability of this arbitration provision shall be determined by the Arbitrator. This arbitration provision shall survive the termination of these Terms and Conditions.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Class Action Waiver</h2>
            <p className="text-black/70 mb-6">
              Any arbitration under these Terms and Conditions will take place on an individual basis; class arbitrations and class/representative/collective actions are not permitted. THE PARTIES AGREE THAT A PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN EACH&apos;S INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PUTATIVE CLASS, COLLECTIVE AND/OR REPRESENTATIVE PROCEEDING, SUCH AS IN THE FORM OF A PRIVATE ATTORNEY GENERAL ACTION AGAINST THE OTHER. Further, unless both you and Media Garcia agree otherwise, the arbitrator may not consolidate more than one person&apos;s claims, and may not otherwise preside over any form of a representative or class proceeding.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Liability Disclaimer</h2>
            <p className="text-black/70 mb-6">
              THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. Changes are periodically added to the information herein. Media Garcia and/or its suppliers may make improvements and/or changes in the Site at any time.
            </p>
            <p className="text-black/70 mb-6">
              Media Garcia and/or its suppliers make no representations about the suitability, reliability, availability, timeliness, and accuracy of the information, software, products, services and related graphics contained on the Site for any purpose. To the maximum extent permitted by applicable law, all such information, software, products, services and related graphics are provided &quot;AS IS&quot; without warranty or condition of any kind. Media Garcia and/or its suppliers hereby disclaim all warranties and conditions with regard to this information, software, products, services and related graphics, including all implied warranties or conditions of merchantability, fitness for a particular purpose, title and non-infringement.
            </p>
            <p className="text-black/70 mb-6">
              To the maximum extent permitted by applicable law, in no event shall Media Garcia and/or its suppliers be liable for any direct, indirect, punitive, incidental, special, consequential damages or any damages whatsoever including, without limitation, damages for loss of use, data or profits, arising out of or in any way connected with the use or performance of the Site, with the delay or inability to use the Site or related services, the provision of or failure to provide services, or for any information, software, products, services and related graphics obtained through the Site, or otherwise arising out of the use of the Site, whether based on contract, tort, negligence, strict liability or otherwise, even if Media Garcia or any of its suppliers has been advised of the possibility of damages. Because some states/jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages, the above limitation may not apply to you. If you are dissatisfied with any portion of the Site, or with any of these Terms of Use, your sole and exclusive remedy is to discontinue using the Site.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Termination/Access Restriction</h2>
            <p className="text-black/70 mb-6">
              Media Garcia reserves the right, in its sole discretion, to terminate your access to the Site and the related services or any portion thereof at any time, without notice. To the maximum extent permitted by law, this agreement is governed by the laws of the State of Minnesota and you hereby consent to the exclusive jurisdiction and venue of courts in Minnesota in all disputes arising out of or relating to the use of the Site. Use of the Site is unauthorized in any jurisdiction that does not give effect to all provisions of these Terms, including, without limitation, this section.
            </p>
            <p className="text-black/70 mb-6">
              You agree that no joint venture, partnership, employment, or agency relationship exists between you and Media Garcia as a result of this agreement or use of the Site. Media Garcia&apos;s performance of this agreement is subject to existing laws and legal process, and nothing contained in this agreement is in derogation of Media Garcia&apos;s right to comply with governmental, court and law enforcement requests or requirements relating to your use of the Site or information provided to or gathered by Media Garcia with respect to such use. If any part of this agreement is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the agreement shall continue in effect.
            </p>
            <p className="text-black/70 mb-6">
              Unless otherwise specified herein, this agreement constitutes the entire agreement between the user and Media Garcia with respect to the Site and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between the user and Media Garcia with respect to the Site. A printed version of this agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. It is the express wish to the parties that this agreement and all related documents be written in English.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Changes to Terms</h2>
            <p className="text-black/70 mb-6">
              Media Garcia reserves the right, in its sole discretion, to change the Terms under which http://www.mediagarcia.com/ is offered. The most current version of the Terms will supersede all previous versions. Media Garcia encourages you to periodically review the Terms to stay informed of our updates.
            </p>

            <h2 className="text-2xl font-bold text-black mt-12 mb-4">Contact Us</h2>
            <div className="bg-gray-50 rounded-xl p-6 text-black/70">
              <p><strong>Loud Website, Inc. D/B/A Media Garcia, Inc.</strong></p>
              <p>PO BOX 4942</p>
              <p>Saint Paul, Minnesota 55101</p>
              <p>Email: hola@mediagarcia.com</p>
              <p>Phone: (651) 691-9123</p>
              <p className="mt-4 text-sm text-black/40">Effective as of November 22, 2020. Updated as of July 5th, 2023.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
