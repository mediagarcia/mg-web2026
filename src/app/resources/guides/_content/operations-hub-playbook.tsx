import {
  PillarPageLayout,
  ContentSection,
  CalloutBox,
  ComparisonTable,
  ChecklistSection,
  ProcessSteps,
  StatHighlight,
  BlueprintCard,
  InlineCTA,
  RelatedGuides,
} from "@/components/pillar-page";
import { CTABanner } from "@/components/sections";
import { getGuideBySlug, getRelatedGuides } from "@/data/guides";

export default function OperationsHubPlaybook() {
  const guide = getGuideBySlug("operations-hub-playbook")!;
  const related = getRelatedGuides("operations-hub-playbook");

  return (
    <PillarPageLayout guide={guide}>
      {/* ============================================================
          SECTION 1: What Is Operations Hub
          ============================================================ */}
      <ContentSection
        id="what-is-operations-hub"
        title="What Is Operations Hub"
        badge="Foundation"
        background="white"
      >
        <p className="text-lg text-black/70 leading-relaxed">
          Operations Hub is HubSpot&apos;s purpose-built toolkit for revenue operations
          teams. It eliminates the need for cobbled-together middleware, brittle
          Zapier chains, and expensive third-party iPaaS platforms by giving ops
          teams three capabilities directly inside the HubSpot platform: native
          data sync, automated data quality management, and programmable
          automation through custom code.
        </p>

        <p className="text-black/70 leading-relaxed">
          For RevOps teams running on HubSpot, Operations Hub transforms the CRM
          from a system of record into a system of action. Instead of exporting
          CSVs, writing to staging databases, or paying for middleware
          subscriptions, you can build sophisticated operational logic that
          executes where your data already lives. The result is faster iteration
          cycles, fewer points of failure, and a single source of truth that
          actually stays truthful.
        </p>

        <ProcessSteps
          variant="horizontal"
          steps={[
            {
              number: "01",
              title: "Data Sync",
              description:
                "Native, bidirectional connections between HubSpot and your tech stack. No middleware required. Sync contacts, companies, and custom mappings with built-in conflict resolution.",
            },
            {
              number: "02",
              title: "Data Quality Automation",
              description:
                "Workflow actions that automatically format, standardize, and clean property values. Fix capitalization, trim whitespace, parse phone numbers, and normalize data at scale.",
            },
            {
              number: "03",
              title: "Programmable Automation",
              description:
                "Execute JavaScript directly inside HubSpot workflows. Custom code actions, outbound webhooks, and custom-coded bot actions give you full programmatic control over your processes.",
            },
          ]}
        />

        <StatHighlight
          variant="bar"
          stats={[
            { value: "1,100+", label: "Native app integrations available" },
            { value: "0", label: "Middleware subscriptions needed" },
            { value: "60s", label: "Typical custom code execution time limit" },
            { value: "5", label: "Blueprint categories in this playbook" },
          ]}
        />

        <CalloutBox type="info" title="Who This Playbook Is For">
          This playbook is written for HubSpot admins, RevOps professionals, and
          solutions architects who want to push Operations Hub beyond the basics.
          Every blueprint in this guide has been built and tested in production
          HubSpot portals. You will need Operations Hub Professional or
          Enterprise for most of the patterns described here, particularly those
          involving custom code actions.
        </CalloutBox>

        <ComparisonTable
          headers={["Without Operations Hub", "With Operations Hub"]}
          caption="How Operations Hub changes the ops workflow"
          rows={[
            {
              feature: "App Integrations",
              left: "Zapier/Make chains with per-task billing",
              right: "Native data sync with built-in conflict resolution",
            },
            {
              feature: "Data Cleanup",
              left: "Manual exports, spreadsheet formulas, re-imports",
              right: "Automated formatting actions inside workflows",
            },
            {
              feature: "Custom Logic",
              left: "External scripts on separate servers",
              right: "JavaScript execution directly in HubSpot workflows",
              highlight: true,
            },
            {
              feature: "API Calls",
              left: "Build and host webhook receivers externally",
              right: "Outbound webhooks and custom code actions in workflows",
            },
            {
              feature: "Data Routing",
              left: "Static round-robin or manual assignment",
              right: "Dynamic, capacity-aware, territory-based routing",
              highlight: true,
            },
          ]}
        />
      </ContentSection>

      {/* ============================================================
          SECTION 2: Data Architecture
          ============================================================ */}
      <ContentSection
        id="data-architecture"
        title="Data Architecture"
        badge="Category I"
        background="gray"
      >
        <p className="text-black/70 leading-relaxed">
          Most reporting problems in HubSpot are actually data architecture
          problems. The platform&apos;s reporting engine is powerful, but it works
          best when the data you need lives on a single object. Cross-object
          reporting adds complexity, and associated object reports have
          limitations that frustrate ops teams daily. The blueprints in this
          category solve a fundamental challenge: getting the right data onto the
          right object so your reports just work.
        </p>

        <p className="text-black/70 leading-relaxed">
          Using Operations Hub&apos;s custom code actions, you can query HubSpot&apos;s
          own APIs from within workflows, look up related records, pull values
          from associated objects, and stamp them onto the record where your
          reporting needs them. This &ldquo;single object reporting&rdquo;
          pattern is one of the most impactful things you can do with
          programmable automation.
        </p>

        <CalloutBox type="tip" title="The Single Object Reporting Principle">
          When you need to report on data from multiple objects, don&apos;t fight
          HubSpot&apos;s reporting engine. Instead, use coded actions to copy the
          values you need onto the object you&apos;re reporting on. A deal that
          carries its SDR name, AE name, and marketing touch source in its own
          properties is infinitely easier to report on than one that requires
          three levels of association lookups.
        </CalloutBox>
      </ContentSection>

      {/* SDR Reporting */}
      <ContentSection
        id="sdr-reporting"
        title="SDR Reporting with Single Object Fields"
        background="white"
      >
        <BlueprintCard
          title="SDR Attribution on Deal Records"
          category="Data Architecture"
          difficulty="Advanced"
          problem="Sales development reps book discovery calls, but when the deal is created, there is no reliable way to attribute which SDR sourced it. Standard HubSpot reporting cannot easily connect meeting activities to deal records across object boundaries, making it nearly impossible to build accurate SDR leaderboards or calculate SDR-sourced pipeline."
          solution="Build a custom code action that triggers on deal creation. The code queries the HubSpot Engagements API to find the discovery call meeting associated with the deal's primary contact. It then identifies the meeting organizer (the SDR who booked it), and stamps the SDR's name onto a custom deal property. With the SDR name living directly on the deal, you can build single-object deal reports that slice pipeline by SDR without any cross-object gymnastics."
          tools={[
            "Custom Code Action",
            "Engagements API",
            "Deal Workflows",
            "Custom Deal Properties",
          ]}
        />

        <CalloutBox type="example" title="What This Enables">
          Once the SDR name lives on the deal, you can create reports like
          &ldquo;Pipeline generated by SDR this quarter,&rdquo; &ldquo;SDR-sourced
          deals by close rate,&rdquo; and &ldquo;Average time from discovery call
          to deal creation by SDR&rdquo; -- all as straightforward single-object
          deal reports. No custom report builder gymnastics required.
        </CalloutBox>
      </ContentSection>

      {/* CRM Hygiene */}
      <ContentSection
        id="crm-hygiene"
        title="Automated CRM Hygiene"
        background="gray"
      >
        <BlueprintCard
          title="Cross-System Association Automation"
          category="Data Architecture"
          difficulty="Intermediate"
          problem="When your product or service uses an external application for user management, those user records often arrive in HubSpot as contacts with an account ID but no company association. Your CRM fills up with orphaned contacts that have no connection to their parent company, breaking account-based reporting and making it impossible to see which companies have active users."
          solution="Create a workflow that triggers when a contact is created or updated with an external account ID. A custom code action takes that account ID, queries the HubSpot Companies API to find the company record with a matching account ID property, and then uses the Associations API to link the contact to the correct company. This runs automatically on every new user sync, keeping your CRM associations clean without any manual intervention."
          tools={[
            "Custom Code Action",
            "Companies API",
            "Associations API",
            "Contact Workflows",
          ]}
        />

        <CalloutBox type="tip">
          This pattern works for any scenario where records from external systems
          need to be associated in HubSpot. Common applications include linking
          support tickets from external help desks, connecting billing contacts
          from payment processors, and associating product usage data from SaaS
          platforms. The key is having a shared identifier (account ID, domain,
          external ID) that exists on both the contact and company records.
        </CalloutBox>
      </ContentSection>

      {/* Advanced Attribution */}
      <ContentSection
        id="advanced-attribution"
        title="Advanced Single Object Reporting"
        background="white"
      >
        <BlueprintCard
          title="Multi-Touch Attribution on Deal Records"
          category="Data Architecture"
          difficulty="Advanced"
          problem="Full-funnel attribution requires data from multiple teams and touchpoints: which SDR booked the meeting, which AE closed the deal, what was the first marketing touch, and what was the last marketing touch before deal creation. These data points live across contacts, engagements, campaigns, and deals. Building a report that shows all of this in one view is either impossible or requires exporting to a BI tool."
          solution="Build a multi-step coded action on deal creation that queries across HubSpot's APIs to assemble a complete attribution picture on the deal record itself. The code finds the discovery call organizer (SDR attribution), reads the deal owner (AE attribution), and queries the contact's form submissions and page views to identify first-touch and last-touch marketing sources. It then stamps all four values onto custom deal properties. Add a time-limit filter (for example, only consider marketing touches within 90 days before deal creation) to keep attribution meaningful."
          tools={[
            "Custom Code Action",
            "Engagements API",
            "Contacts API",
            "Form Submissions API",
            "Custom Deal Properties",
          ]}
        />

        <ChecklistSection
          title="Attribution Fields to Stamp on Deal Records"
          items={[
            {
              text: "SDR Name -- the rep who booked the discovery call",
              subItems: [
                "Query engagements for meeting type activities on associated contacts",
                "Match the meeting organizer to your SDR team list",
              ],
            },
            {
              text: "AE Name -- the rep who owns and closes the deal",
              subItems: [
                "Read directly from the deal owner property",
                "Stamp as a separate text field for easier reporting",
              ],
            },
            {
              text: "First Marketing Touch -- the original source that brought the lead in",
              subItems: [
                "Query the primary contact's original source or first form submission",
                "Apply a 90-day lookback window from deal create date",
              ],
            },
            {
              text: "Last Marketing Touch -- the most recent marketing interaction before deal creation",
              subItems: [
                "Query recent form submissions, page views, or email clicks",
                "Filter to only include touches within the attribution window",
              ],
            },
          ]}
        />
      </ContentSection>

      <InlineCTA
        title="Need help building your data architecture?"
        description="Our team has built these exact blueprints for dozens of RevOps teams. We can implement them in your portal or train your team to build them independently."
        primaryAction={{
          label: "Book a strategy call",
          href: "/contact",
        }}
        secondaryAction={{
          label: "View our integration services",
          href: "/services/integrations",
        }}
        variant="subtle"
      />

      {/* ============================================================
          SECTION 3: Integrations Without Middleware
          ============================================================ */}
      <ContentSection
        id="integrations"
        title="Integrations Without Middleware"
        badge="Category II"
        background="gray"
      >
        <p className="text-black/70 leading-relaxed">
          The conventional wisdom is that connecting HubSpot to external systems
          requires middleware -- Zapier, Make, Workato, or a custom-built
          integration server. Operations Hub changes that equation. With custom
          code actions, you can make outbound HTTP requests directly from
          HubSpot workflows. That means you can push data to external APIs, pull
          data back in, and transform payloads -- all without a middleware
          subscription or a server to maintain.
        </p>

        <p className="text-black/70 leading-relaxed">
          This does not replace every integration scenario. High-volume,
          real-time bidirectional syncs still benefit from purpose-built
          connectors or data sync. But for event-driven integrations -- things
          that happen when a deal closes, a form is submitted, or a lifecycle
          stage changes -- custom code actions are often the simplest and most
          reliable approach.
        </p>

        <StatHighlight
          variant="cards"
          stats={[
            { value: "$0", label: "Additional middleware cost" },
            { value: "<1s", label: "Typical API call round-trip" },
            { value: "128KB", label: "Custom code output limit" },
            { value: "20", label: "Secrets available per portal" },
          ]}
        />

        <CalloutBox type="warning" title="Know the Limits">
          Custom code actions have a 20-second execution timeout and can make a
          limited number of HTTP requests per execution. They are ideal for
          event-driven, record-level integrations (one deal closes, one invoice
          gets created). They are not suitable for bulk data migrations or
          high-frequency polling. Plan your architecture accordingly.
        </CalloutBox>
      </ContentSection>

      {/* Finance Integration */}
      <ContentSection
        id="finance-integration"
        title="Finance Tool Integration"
        background="white"
      >
        <BlueprintCard
          title="Closed-Loop Billing from HubSpot"
          category="Integrations"
          difficulty="Advanced"
          problem="When a deal closes in HubSpot, someone has to manually create a customer record in the ERP or accounting system, generate an invoice, and then come back to HubSpot to update the deal with the invoice number. This manual handoff introduces delays, data entry errors, and makes it impossible to see billing status from within HubSpot."
          solution="Build a workflow that triggers on deal stage change to Closed Won. A custom code action calls your ERP or accounting system's API to create a customer record (or find the existing one), then generates an invoice based on the deal's line items and amount. The API response -- including the new customer ID and invoice number -- gets written back to custom deal properties in HubSpot. The result is a closed-loop system where sales closes the deal and finance sees the invoice appear automatically, with full traceability in both directions."
          tools={[
            "Custom Code Action",
            "Deal Workflows",
            "External ERP/Accounting API",
            "Custom Deal Properties",
            "HubSpot Secrets",
          ]}
        />

        <ProcessSteps
          variant="vertical"
          steps={[
            {
              number: "01",
              title: "Deal moves to Closed Won",
              description:
                "The workflow triggers when a deal reaches the Closed Won stage.",
            },
            {
              number: "02",
              title: "Custom code creates or finds customer in ERP",
              description:
                "The coded action queries your accounting system for the company. If no match exists, it creates a new customer record using the company and contact details from HubSpot.",
              details: [
                "Match on company domain or external ID",
                "Create new customer if no match found",
                "Store the ERP customer ID on the HubSpot company record",
              ],
            },
            {
              number: "03",
              title: "Invoice is generated automatically",
              description:
                "The code creates an invoice in the ERP using deal line items, amounts, and payment terms. Currency and tax settings are pulled from deal properties.",
            },
            {
              number: "04",
              title: "Confirmation written back to HubSpot",
              description:
                "The ERP's response (invoice number, payment link, due date) is written to custom deal properties, giving the sales team full visibility without leaving HubSpot.",
            },
          ]}
        />
      </ContentSection>

      {/* Pull Integrations */}
      <ContentSection
        id="pull-integrations"
        title="Pull Integrations for Data Enrichment"
        background="gray"
      >
        <BlueprintCard
          title="On-Demand Record Enrichment"
          category="Integrations"
          difficulty="Intermediate"
          problem="When a prospect fills out a form, you have their name and email but lack firmographic, technographic, or industry-specific data that your sales team needs for qualification. Traditional enrichment tools require separate subscriptions and often sync data on a schedule rather than in real time, meaning reps work with incomplete records during the critical first-touch window."
          solution="Create a workflow that triggers on form submission. A custom code action takes the contact's email domain and queries one or more external data sources -- your ERP for existing customer status, an industry database for company classification, or an enrichment API for firmographic data. The results are written directly to contact and company properties in HubSpot. No full bidirectional sync needed; you pull exactly what you need, exactly when you need it."
          tools={[
            "Custom Code Action",
            "Contact Workflows",
            "External Enrichment APIs",
            "Custom Contact/Company Properties",
          ]}
        />

        <CalloutBox type="tip" title="Selective Pull vs. Full Sync">
          Pull integrations are not replacements for full data sync. They are
          ideal for scenarios where you need specific data points at specific
          moments -- form fills, lifecycle stage changes, deal creation. This
          targeted approach costs less (fewer API calls), runs faster (only
          processes records that matter), and avoids the complexity of
          maintaining bidirectional sync logic.
        </CalloutBox>
      </ContentSection>

      {/* Data Transformation */}
      <ContentSection
        id="data-transformation"
        title="Data Transformation & Migration"
        background="white"
      >
        <BlueprintCard
          title="Flat File to Multi-Object Schema Parser"
          category="Integrations"
          difficulty="Advanced"
          problem="Data from legacy systems, partner feeds, or bulk imports often arrives as flat CSV files where a single row contains information that should be split across multiple HubSpot objects -- contacts, companies, deals, and custom objects. Manually parsing these files and importing them into the correct objects takes hours and introduces errors at every step."
          solution="Import the flat file as a single object (or use a staging custom object). A workflow triggers on record creation in that staging object. A custom code action parses the row's data and uses HubSpot's APIs to create or update the appropriate records: a contact with the person's details, a company with the organization data, a deal with the opportunity information, and any relevant custom objects. The code handles deduplication, association creation, and data formatting in a single execution."
          tools={[
            "Custom Code Action",
            "Import-Triggered Workflows",
            "Contacts API",
            "Companies API",
            "Deals API",
            "Custom Objects API",
            "Associations API",
          ]}
        />

        <CalloutBox type="warning" title="Execution Time Planning">
          When a single coded action needs to create multiple records across
          multiple objects, pay close attention to the 20-second execution limit.
          If your transformation logic is complex, consider breaking it into
          multiple workflow steps: one code action to parse and validate the
          data, and subsequent actions to create each object type. Use workflow
          delays between steps if you need to avoid API rate limits.
        </CalloutBox>
      </ContentSection>

      <InlineCTA
        title="Building integrations without middleware?"
        description="We specialize in Operations Hub implementations that replace expensive middleware stacks. Let us show you what is possible with custom code actions alone."
        primaryAction={{
          label: "Schedule a technical review",
          href: "/contact",
        }}
        secondaryAction={{
          label: "See integration case studies",
          href: "/case-studies",
        }}
        variant="prominent"
      />

      {/* ============================================================
          SECTION 4: Advanced Workflow Automation
          ============================================================ */}
      <ContentSection
        id="advanced-automation"
        title="Advanced Workflow Automation"
        badge="Category III"
        background="gray"
      >
        <p className="text-black/70 leading-relaxed">
          Standard HubSpot workflows are powerful for linear processes: if this
          happens, do that. But real business operations are rarely linear. You
          need workflows that query data, make decisions based on results, create
          records in other systems, and orchestrate multi-step processes that
          span your CRM, website, and external tools. That is where programmable
          automation earns its keep.
        </p>

        <p className="text-black/70 leading-relaxed">
          The blueprints in this category go beyond basic if/then automation.
          They use custom code actions to build operational systems that would
          traditionally require a dedicated application -- referral tracking,
          renewal management, and dynamic website content powered directly by
          CRM data.
        </p>
      </ContentSection>

      {/* CMS from CRM */}
      <ContentSection
        id="cms-automation"
        title="CMS Pages from CRM Data"
        background="white"
      >
        <BlueprintCard
          title="Dynamic Website Content from CRM Records"
          category="Advanced Automation"
          difficulty="Advanced"
          problem="Your website has sections that need to reflect CRM data -- a partner directory, a team roster, a customer showcase -- but keeping these pages manually updated is a constant battle. Someone has to export data from HubSpot, format it for the website, and deploy the changes. The website is always slightly out of date, and the process does not scale."
          solution="Use a workflow that triggers when a company is marked as an active partner (or any relevant status change). A custom code action calls the HubDB API to update or create a row in a HubDB table with the partner's details -- name, logo URL, description, website link. Since HubSpot CMS pages can be built from HubDB tables, the website's partner section updates automatically. For more advanced scenarios, the same pattern can generate individual landing pages for each partner using HubDB-driven templates."
          tools={[
            "Custom Code Action",
            "Company Workflows",
            "HubDB API",
            "HubSpot CMS",
            "Dynamic Page Templates",
          ]}
        />

        <CalloutBox type="example" title="Real-World Application">
          A B2B company with 200 channel partners used this pattern to replace
          a manual partner directory update process that took 3 hours per week.
          When a partner&apos;s status, tier, or details change in the CRM, the
          website reflects those changes within minutes. No developer
          involvement. No deployment pipeline. The CRM is the source of truth,
          and the website follows.
        </CalloutBox>
      </ContentSection>

      {/* Referral Programs */}
      <ContentSection
        id="referral-programs"
        title="Referral Programs in HubSpot"
        background="gray"
      >
        <BlueprintCard
          title="CRM-Native Referral Tracking"
          category="Advanced Automation"
          difficulty="Intermediate"
          problem="Referral programs typically require standalone software with its own database, user management, and reporting. This creates yet another system to maintain, another data silo to reconcile, and another subscription to pay for. Meanwhile, all the customer data you need to run a referral program already exists in your CRM."
          solution="Create a custom contact property for referral codes (auto-generated or manually assigned). When a new contact is created with a referral code, a custom code action uses Operations Hub's CRM search functionality to find the contact whose referral code matches. The workflow then notifies the referrer, increments their referral count, and can trigger credit or reward logic. All referral tracking, notifications, and reporting happen inside HubSpot with zero external dependencies."
          tools={[
            "Custom Code Action",
            "Contact Workflows",
            "CRM Search API",
            "Custom Contact Properties",
            "Internal Notifications",
          ]}
        />

        <ProcessSteps
          variant="vertical"
          steps={[
            {
              number: "01",
              title: "Assign referral codes to existing customers",
              description:
                "Generate unique referral codes and store them as a contact property. Codes can be auto-generated via workflow or assigned manually.",
            },
            {
              number: "02",
              title: "Capture referral code on new lead forms",
              description:
                "Add a referral code field to your signup or contact forms. This links the new lead to their referrer.",
            },
            {
              number: "03",
              title: "Match and attribute via coded action",
              description:
                "When a new contact is created with a referral code, the custom code action searches for the matching referrer and creates the attribution link.",
              details: [
                "Search contacts by referral code property",
                "Validate that the referrer is an active customer",
                "Update referral count and credit properties",
              ],
            },
            {
              number: "04",
              title: "Notify and reward",
              description:
                "Send the referrer an internal notification or email confirming the referral. Trigger reward fulfillment based on referral milestones.",
            },
          ]}
        />
      </ContentSection>

      {/* Renewal Automation */}
      <ContentSection
        id="renewal-automation"
        title="Renewal Deal Automation"
        background="white"
      >
        <BlueprintCard
          title="Automated Renewal Pipeline Management"
          category="Advanced Automation"
          difficulty="Intermediate"
          problem="Subscription and service businesses need to track renewal dates and create renewal opportunities well before contracts expire. Doing this manually means renewals slip through the cracks, customer success managers lose visibility into upcoming expirations, and the renewal pipeline is always incomplete or inaccurate. Pricing from the original deal needs to carry forward, but discounts should be cleared so renewals start from baseline."
          solution="Add subscription or service end date properties to your deal records. Build a workflow that triggers at a defined interval before the end date (60, 90, or 120 days out). The workflow creates a new deal in a dedicated renewal pipeline, copies the relevant line items and products from the original deal, clears any one-time discounts so pricing starts from the standard rate, and assigns the renewal deal to the appropriate customer success manager. The CSM gets a task and notification with full context from the original deal."
          tools={[
            "Deal Workflows",
            "Custom Code Action",
            "Line Items API",
            "Deal Properties",
            "Task Creation",
          ]}
        />

        <ChecklistSection
          title="Renewal Deal Automation Checklist"
          items={[
            {
              text: "Create custom deal date properties for subscription/service end dates",
            },
            {
              text: "Set up a dedicated renewal pipeline with appropriate stages",
              subItems: [
                "Upcoming Renewal, Renewal Sent, Negotiation, Renewed, Churned",
              ],
            },
            {
              text: "Build the trigger workflow with a date-based enrollment",
              subItems: [
                "Trigger 90 days before end date",
                "Add a secondary trigger at 60 days for missed renewals",
              ],
            },
            {
              text: "Configure the coded action to copy products and clear discounts",
            },
            {
              text: "Set up CSM assignment logic (match to original deal owner or account CSM)",
            },
            {
              text: "Create task and notification for the assigned CSM with renewal context",
            },
          ]}
        />
      </ContentSection>

      {/* ============================================================
          SECTION 5: Data Routing & Assignment
          ============================================================ */}
      <ContentSection
        id="data-routing"
        title="Data Routing & Assignment"
        badge="Category IV"
        background="gray"
      >
        <p className="text-black/70 leading-relaxed">
          HubSpot&apos;s built-in assignment options -- round-robin and owner
          matching -- cover the basics, but most growing organizations quickly
          outgrow them. You need routing that considers current workload, sales
          territories, deal size, ticket priority, SLA requirements, and a dozen
          other variables. Operations Hub makes this possible without external
          routing tools.
        </p>

        <p className="text-black/70 leading-relaxed">
          The blueprints in this category use custom code actions to query
          HubSpot&apos;s APIs in real time, evaluate routing criteria
          dynamically, and assign records to the right person based on live data
          rather than static rules. This is the difference between
          &ldquo;assign to the next person in the list&rdquo; and &ldquo;assign
          to the person best positioned to handle this right now.&rdquo;
        </p>
      </ContentSection>

      {/* Capacity-Based Routing */}
      <ContentSection
        id="capacity-routing"
        title="Capacity-Based Ticket Assignment"
        background="white"
      >
        <BlueprintCard
          title="Workload-Aware Ticket Routing"
          category="Data Routing"
          difficulty="Advanced"
          problem="Round-robin ticket assignment treats all agents as equally available, but they are not. One agent might have two open tickets while another has fifteen. Simple rotation leads to unbalanced workloads, longer resolution times for customers unlucky enough to land with an overloaded agent, and burnout for your highest-performing reps who clear their queues fastest (and therefore get assigned more work)."
          solution="Build a custom code action that runs on ticket creation. The code queries the HubSpot Tickets API to count open tickets by assignee, then queries the Users API to get the list of eligible agents. It sorts agents by current open ticket count and assigns the new ticket to the agent with the fewest open tickets. The logic can be extended to factor in ticket priority, SLA tier, agent skill tags, or expected resolution time for truly intelligent routing."
          tools={[
            "Custom Code Action",
            "Ticket Workflows",
            "Tickets Search API",
            "Users API",
            "Owner Assignment",
          ]}
        />

        <CalloutBox type="tip" title="Expanding the Logic">
          Start with simple ticket count balancing, then layer in complexity as
          needed. Practical extensions include weighting tickets by priority
          (a P1 counts as three tickets worth of capacity), excluding agents who
          are out of office (check a custom user property), and capping maximum
          concurrent tickets per agent. Each of these is a few additional lines
          in your custom code action.
        </CalloutBox>
      </ContentSection>

      {/* Deal Assignment */}
      <ContentSection
        id="deal-assignment"
        title="Advanced Deal Assignment"
        background="gray"
      >
        <BlueprintCard
          title="Territory-Based Deal Routing"
          category="Data Routing"
          difficulty="Advanced"
          problem="For companies with territory-based sales teams, deal assignment needs to consider geography. But geography in a CRM is messy -- you might have IP-derived location data on contacts, manually entered addresses on companies, or a mix of both. Territory definitions change quarterly, and hard-coding territory rules into workflow branches creates an unmaintainable web of if/then logic."
          solution="Store your territory definitions as custom object records in HubSpot -- each record has a territory name, assigned rep, and the geographic criteria (state codes, country codes, zip code ranges, or region identifiers). When a deal is created, a custom code action looks up the primary contact's location (from IP geolocation, form data, or company address), queries the territory custom object to find the matching territory, and assigns the deal to that territory's rep. When territories change, you update the custom object records -- no workflow editing required."
          tools={[
            "Custom Code Action",
            "Deal Workflows",
            "Custom Objects API",
            "Contacts API",
            "IP Geolocation Properties",
          ]}
        />

        <ComparisonTable
          headers={["Workflow Branches", "Custom Object Territories"]}
          caption="Static routing rules vs. dynamic territory management"
          rows={[
            {
              feature: "Adding a new territory",
              left: "Edit workflow, add new branch, republish",
              right: "Create a new custom object record",
            },
            {
              feature: "Reassigning a territory",
              left: "Find and edit the correct branch in the workflow",
              right: "Update the owner field on the territory record",
              highlight: true,
            },
            {
              feature: "Handling 50+ territories",
              left: "50+ workflow branches (unmanageable)",
              right: "50 custom object records (searchable, filterable)",
              highlight: true,
            },
            {
              feature: "Territory reporting",
              left: "Not possible without manual tagging",
              right: "Report on the custom object directly",
            },
            {
              feature: "Change management",
              left: "Requires workflow admin access",
              right: "Any user with custom object access can update",
            },
          ]}
        />
      </ContentSection>

      {/* Forecasting */}
      <ContentSection
        id="forecasting"
        title="Advanced Forecasting"
        background="white"
      >
        <BlueprintCard
          title="Data-Driven Close Date and Probability Setting"
          category="Data Routing"
          difficulty="Advanced"
          problem="Reps set close dates based on optimism rather than data. They pick a date 30 days out because that is the default, not because historical data supports it. Forecast accuracy suffers because close dates are aspirational rather than predictive, and probability percentages are either set manually or tied to deal stage with no consideration for deal size, segment, or rep performance."
          solution="Build a custom code action that triggers on deal creation. The code queries the Deals API to pull closed-won deals from the past six months, filtered by the current deal's owner and size segment. It calculates the average time-to-close for similar deals and sets the new deal's close date accordingly. For probability, the code can segment historical win rates by deal stage, size, and owner to set a data-driven probability that updates dynamically as the deal progresses through stages."
          tools={[
            "Custom Code Action",
            "Deal Workflows",
            "Deals Search API",
            "Deal Properties",
            "Historical Data Analysis",
          ]}
        />

        <CalloutBox type="info" title="Forecast Accuracy Feedback Loop">
          The real power of this approach is the feedback loop. As more deals
          close, the historical dataset grows, and the forecasting logic
          automatically becomes more accurate. Consider running the probability
          update not just on deal creation, but on every stage change. A deal
          that has been in negotiation for twice the average duration should
          have its probability adjusted downward automatically.
        </CalloutBox>
      </ContentSection>

      <InlineCTA
        title="Ready to upgrade your routing and forecasting?"
        description="Intelligent deal routing and data-driven forecasting are some of the highest-ROI Operations Hub implementations we build. Let us assess your current setup."
        primaryAction={{
          label: "Get a free operations audit",
          href: "/contact",
        }}
        variant="subtle"
      />

      {/* ============================================================
          SECTION 6: Custom Objects
          ============================================================ */}
      <ContentSection
        id="custom-objects"
        title="Custom Objects"
        badge="Category V"
        background="gray"
      >
        <p className="text-black/70 leading-relaxed">
          Custom objects are where Operations Hub transforms HubSpot from a CRM
          into an operational platform. When your business has data models that
          do not fit neatly into contacts, companies, deals, and tickets, custom
          objects let you extend the schema to match your actual operations.
          Combined with custom code actions, they enable you to build
          functionality inside HubSpot that would traditionally require a
          separate application.
        </p>

        <p className="text-black/70 leading-relaxed">
          The blueprints in this category demonstrate how to use custom objects
          not just as storage, but as the foundation for operational systems.
          Subscription management, commission tracking, partner portals -- these
          are entire application domains that can live inside your CRM when you
          combine custom objects with programmable automation.
        </p>

        <CalloutBox type="warning" title="Custom Object Limits">
          HubSpot Enterprise plans include a limited number of custom object
          definitions (the number varies by plan and subscription). Plan your
          custom object schema carefully. Each object type should represent a
          distinct entity in your business model, not a variation of an existing
          object. If you can model your data with custom properties on standard
          objects, do that first. Reserve custom objects for genuinely new entity
          types.
        </CalloutBox>
      </ContentSection>

      {/* SaaS Extension */}
      <ContentSection
        id="saas-extension"
        title="Extending HubSpot into SaaS Apps"
        background="white"
      >
        <BlueprintCard
          title="Subscription Lifecycle Management"
          category="Custom Objects"
          difficulty="Advanced"
          problem="SaaS companies need to manage trial extensions, paid account provisioning, and subscription status changes. These operations typically require a separate billing system or custom application with its own database, user interface, and API layer. The subscription data lives outside the CRM, creating a blind spot for sales and success teams who cannot see account status without switching between systems."
          solution="Model subscriptions as custom objects in HubSpot with properties for plan type, status, start date, end date, and usage metrics. Use quote-based workflows to trigger account provisioning: when a quote is signed, a custom code action calls your application's API to create the paid account, then creates or updates the subscription custom object in HubSpot with the account details. Trial extensions work similarly -- a workflow triggers when a trial end date approaches, and a coded action calls your app's API to extend the trial and update the subscription record."
          tools={[
            "Custom Objects",
            "Custom Code Action",
            "Quote-Based Workflows",
            "External Application API",
            "Associations API",
          ]}
        />

        <ProcessSteps
          variant="vertical"
          steps={[
            {
              number: "01",
              title: "Define the subscription custom object",
              description:
                "Create a custom object with properties for plan tier, subscription status, billing cycle, start date, renewal date, monthly recurring revenue, and usage metrics.",
              details: [
                "Associate with companies and contacts",
                "Set up a custom object pipeline for subscription lifecycle stages",
              ],
            },
            {
              number: "02",
              title: "Build quote-to-provisioning automation",
              description:
                "When a quote is countersigned, trigger a workflow that calls your application API to create the paid account. Write the account ID back to the subscription custom object.",
            },
            {
              number: "03",
              title: "Automate trial management",
              description:
                "Use date-based workflows on the subscription object to trigger trial extension offers, conversion reminders, and automatic expiration handling.",
            },
            {
              number: "04",
              title: "Surface subscription data across the CRM",
              description:
                "With subscriptions modeled as custom objects, any team can see account status, plan details, and renewal dates directly on the company and contact records through associations.",
            },
          ]}
        />
      </ContentSection>

      {/* Native Apps */}
      <ContentSection
        id="native-apps"
        title="Building Native HubSpot Applications"
        background="gray"
      >
        <BlueprintCard
          title="Commission Tracking System"
          category="Custom Objects"
          difficulty="Advanced"
          problem="Sales commission calculations are typically handled in spreadsheets, standalone commission software, or finance systems that have no connection to CRM deal data. Reps cannot see their commission status in real time, finance spends days each month reconciling commission calculations against closed deals, and disputes are common because the data trail is fragmented across multiple systems."
          solution="Build a complete commission system inside HubSpot using two custom objects: Commission Plans (defining the rules -- quota tiers, rate percentages, bonus thresholds, effective dates) and Commission Events (individual commission calculations tied to specific deals). When a deal moves to Closed Won, a custom code action looks up the deal owner's active commission plan, calculates the commission based on the plan's rules and the deal's amount, and creates a Commission Event record associated with both the deal and the rep's contact record. Reps see their commissions in real time, finance has a complete audit trail, and the entire system runs on data that already exists in the CRM."
          tools={[
            "Custom Objects (2 types)",
            "Custom Code Action",
            "Deal Workflows",
            "Deals API",
            "Associations API",
            "Calculated Properties",
          ]}
        />

        <ChecklistSection
          title="Commission System Custom Object Schema"
          items={[
            {
              text: "Commission Plan object",
              subItems: [
                "Plan name and description",
                "Base commission rate (percentage)",
                "Quota amount and period (monthly/quarterly)",
                "Accelerator tiers (rate increases above quota)",
                "Effective start and end dates",
                "Associated with the rep's contact record",
              ],
            },
            {
              text: "Commission Event object",
              subItems: [
                "Deal amount (copied from the triggering deal)",
                "Commission rate applied",
                "Commission amount calculated",
                "Quota attainment at time of calculation",
                "Associated with the deal and the rep's contact",
                "Timestamp and approval status",
              ],
            },
            {
              text: "Automated calculation triggers",
              subItems: [
                "Closed Won deal triggers commission calculation",
                "Deal amount changes trigger recalculation",
                "Plan changes trigger retroactive adjustment for current period",
              ],
            },
          ]}
        />

        <CalloutBox type="tip" title="Start Simple, Extend Later">
          You do not need to build the complete commission system on day one.
          Start with a flat commission rate and a single custom object for
          commission events. Once that is working reliably, add the commission
          plan object for tiered rates, then layer in quota tracking and
          accelerators. Each step builds on the previous one, and you get value
          at every stage.
        </CalloutBox>
      </ContentSection>

      {/* ============================================================
          CLOSING SECTIONS
          ============================================================ */}
      <RelatedGuides guides={related} />
      <CTABanner />
    </PillarPageLayout>
  );
}
