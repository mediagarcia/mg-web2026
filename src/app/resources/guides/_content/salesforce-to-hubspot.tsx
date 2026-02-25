import {
  PillarPageLayout,
  ContentSection,
  CalloutBox,
  ComparisonTable,
  ChecklistSection,
  ProcessSteps,
  StatHighlight,
  InlineCTA,
  RelatedGuides,
  SectionImage,
} from "@/components/pillar-page";
import { CTABanner } from "@/components/sections";
import { getGuideBySlug, getRelatedGuides } from "@/data/guides";
import { getImageForSlot } from "@/lib/images/get-image-for-slot";

export default function SalesforceToHubSpotGuide() {
  const guide = getGuideBySlug("salesforce-to-hubspot")!;
  const related = getRelatedGuides("salesforce-to-hubspot");

  const whyHubspotImg = getImageForSlot("guides/sfdc/why-hubspot");
  const preMigrationImg = getImageForSlot("guides/sfdc/pre-migration");
  const dataCleanupImg = getImageForSlot("guides/sfdc/data-cleanup");
  const migrationImg = getImageForSlot("guides/sfdc/migration");
  const qaTestingImg = getImageForSlot("guides/sfdc/qa-testing");
  const postMigrationImg = getImageForSlot("guides/sfdc/post-migration");

  return (
    <PillarPageLayout guide={guide}>
      {/* ------------------------------------------------------------------ */}
      {/* WHY MIGRATE TO HUBSPOT */}
      {/* ------------------------------------------------------------------ */}
      <ContentSection
        id="why-hubspot"
        title="Why Migrate to HubSpot"
        badge="The Case for Change"
        background="white"
      >
        <p className="text-lg text-black/70 leading-relaxed">
          More than half of B2B buyers report a meaningful gap between the
          buying experience they expect and the one they actually get. That gap
          is not a sales problem or a marketing problem — it is a systems
          problem. When your CRM, marketing automation, ticketing, and reporting
          live in separate platforms, critical information falls through the
          cracks. Reps spend hours hunting down data that should be at their
          fingertips. Marketing campaigns launch without visibility into what
          happens after the handoff. And leadership waits days for reports that
          should be available on demand.
        </p>

        {whyHubspotImg && (
          <SectionImage
            src={whyHubspotImg}
            alt="Simplification — from complexity to clarity"
            color="orange"
            pattern="arc"
          />
        )}

        <StatHighlight
          stats={[
            { value: "56%", label: "of B2B buyers feel a gap between their buying experience and their needs" },
            { value: "3+", label: "tools the average sales team juggles daily" },
            { value: "68%", label: "of companies cite data silos as their biggest CRM challenge" },
          ]}
        />

        <p className="text-lg text-black/70 leading-relaxed">
          Salesforce is a powerful platform, but power without alignment creates
          friction. Organizations outgrow Salesforce for different reasons, but
          the underlying theme is almost always the same: the cost of
          maintaining disconnected systems — in dollars, in time, and in missed
          opportunities — has exceeded the value they deliver.
        </p>

        <p className="text-lg text-black/70 leading-relaxed">
          HubSpot bridges that divide by consolidating marketing, sales, service,
          content, and operations onto a single platform with a shared data model.
          Instead of stitching tools together with middleware, your teams operate
          from one source of truth. The result is faster execution, cleaner data,
          and a customer experience that does not degrade at every handoff point.
        </p>

        <h3 className="text-xl font-bold text-black mt-8 mb-4">
          Common Scenarios That Trigger a Migration
        </h3>

        <ChecklistSection
          items={[
            {
              text: "You already use HubSpot for marketing but Salesforce for sales, creating a sync tax and duplicate records",
              subItems: [
                "The native HubSpot-Salesforce connector is a bridge, not a solution — most teams hit its limits within a year",
                "Consolidating on HubSpot eliminates the integration layer entirely",
              ],
            },
            {
              text: "Salesforce has become too complex for your team to manage without dedicated administrators",
              subItems: [
                "Customizations have compounded over the years, creating a system only a few people understand",
                "Every small change requires a consultant engagement or an internal admin ticket",
              ],
            },
            {
              text: "Your Salesforce admin left and no one knows how the system works",
              subItems: [
                "Tribal knowledge evaporated overnight",
                "You are paying enterprise pricing for a system your team is afraid to touch",
              ],
            },
            {
              text: "You need a central platform that your whole revenue team can actually use day-to-day",
              subItems: [
                "Adoption is the real ROI metric — a CRM nobody uses is a CRM that delivers nothing",
                "HubSpot's UX is purpose-built for end-user adoption, not just administrator flexibility",
              ],
            },
          ]}
        />

        <CalloutBox type="info" title="A Note on Complexity">
          <p>
            Salesforce is not a bad platform. It is an extraordinarily capable
            one. But capability without usability creates a different kind of
            risk — the risk that your team builds processes around the tool
            instead of the tool supporting your processes. If your CRM requires
            a full-time administrator just to keep the lights on, it is worth
            asking whether that complexity is serving your business or the other
            way around.
          </p>
        </CalloutBox>
      </ContentSection>

      {/* ------------------------------------------------------------------ */}
      {/* SALESFORCE TO HUBSPOT CONVERSION TABLE */}
      {/* ------------------------------------------------------------------ */}
      <ContentSection
        id="conversion-table"
        title="Salesforce to HubSpot Conversion Table"
        badge="Terminology Mapping"
        background="gray"
      >
        <p className="text-lg text-black/70 leading-relaxed">
          One of the first hurdles in any Salesforce-to-HubSpot migration is
          vocabulary. The two platforms use different terminology for concepts
          that often — but not always — map one-to-one. Understanding these
          translations early prevents confusion during planning and execution.
        </p>

        <ComparisonTable
          headers={["Salesforce", "HubSpot"]}
          rows={[
            {
              feature: "People Records",
              left: "Lead + Contact (separate objects)",
              right: "Contact (single unified object)",
              highlight: true,
            },
            {
              feature: "Revenue Records",
              left: "Opportunity",
              right: "Deal",
            },
            {
              feature: "Organization Records",
              left: "Account",
              right: "Company",
            },
            {
              feature: "Data Fields",
              left: "Field",
              right: "Property",
            },
            {
              feature: "Marketing Initiatives",
              left: "Campaign (single activity)",
              right: "Campaign (group of related activities)",
              highlight: true,
            },
            {
              feature: "Service Records",
              left: "Case",
              right: "Ticket",
            },
            {
              feature: "Automation",
              left: "Process Builder / Flow",
              right: "Workflow",
            },
            {
              feature: "Record Types",
              left: "Record Type",
              right: "Pipeline or Custom Property",
            },
            {
              feature: "Custom Data",
              left: "Custom Object",
              right: "Custom Object",
            },
            {
              feature: "Reporting",
              left: "Report + Dashboard",
              right: "Report + Dashboard",
            },
          ]}
          caption="Not all mappings are one-to-one. Campaign structure, in particular, differs significantly between platforms."
        />

        <CalloutBox type="warning" title="Leads vs. Contacts: The Big Structural Difference">
          <p>
            Salesforce separates Leads and Contacts into distinct objects with a
            formal conversion process. HubSpot uses a single Contact object with
            lifecycle stages to track progression from lead to customer. This is
            not just a naming difference — it fundamentally changes how you
            structure your data model, and it is one of the most consequential
            decisions in the migration. Plan for it early.
          </p>
        </CalloutBox>
      </ContentSection>

      {/* ------------------------------------------------------------------ */}
      {/* PRE-MIGRATION (Parent Section) */}
      {/* ------------------------------------------------------------------ */}
      <ContentSection
        id="pre-migration"
        title="Pre-Migration"
        badge="Phase 1"
        background="white"
      >
        <p className="text-lg text-black/70 leading-relaxed">
          The pre-migration phase is where the real work happens. Every hour you
          invest here saves three or four during the migration itself. Rushing
          past evaluation, cleanup, and planning is the single most common
          reason CRM migrations fail — not because the technology is hard, but
          because the preparation was incomplete.
        </p>

        {preMigrationImg && (
          <SectionImage
            src={preMigrationImg}
            alt="Careful preparation before migration"
            color="orange"
          />
        )}

        <ProcessSteps
          variant="horizontal"
          steps={[
            {
              number: "01",
              title: "Evaluate Needs",
              description: "Audit what exists and classify every asset as migrate or translate.",
            },
            {
              number: "02",
              title: "Clean Data",
              description: "Purge duplicates, incomplete records, and non-compliant data.",
            },
            {
              number: "03",
              title: "Back Up",
              description: "Export a complete snapshot of your Salesforce instance before any changes.",
            },
            {
              number: "04",
              title: "Build the Plan",
              description: "Assign owners, set milestones, and communicate timelines across the org.",
            },
          ]}
        />
      </ContentSection>

      {/* ------------------------------------------------------------------ */}
      {/* EVALUATE MIGRATION & TRANSLATION NEEDS */}
      {/* ------------------------------------------------------------------ */}
      <ContentSection
        id="evaluate-needs"
        title="Evaluate Migration & Translation Needs"
        background="gray"
      >
        <p className="text-lg text-black/70 leading-relaxed">
          Not everything in your Salesforce instance can be copied over as-is.
          Before you move a single record, you need to classify every asset into
          one of two categories: <strong>migration</strong> (direct transfer) or{" "}
          <strong>translation</strong> (requires adaptation).
        </p>

        <h3 className="text-xl font-bold text-black mt-6 mb-4">
          Migration vs. Translation
        </h3>

        <ComparisonTable
          headers={["Migration (1:1 Copy)", "Translation (Needs Adaptation)"]}
          rows={[
            {
              feature: "Examples",
              left: "Emails, forms, landing pages, static lists",
              right: "Active lists, workflows, reports, dashboards",
            },
            {
              feature: "Effort Level",
              left: "Low — export and import with minor formatting",
              right: "Medium to High — logic must be rebuilt natively",
            },
            {
              feature: "Risk",
              left: "Minimal — data is copied, not recreated",
              right: "Higher — business logic may need to be rethought",
            },
            {
              feature: "Timeline Impact",
              left: "Days",
              right: "Weeks",
            },
          ]}
        />

        <p className="text-lg text-black/70 leading-relaxed">
          Workflows are the most common translation challenge. Salesforce Process
          Builder and Flow logic does not map directly to HubSpot workflows. You
          will need to deconstruct each automation into its intent, then rebuild
          it using HubSpot-native tools. This is not a shortcoming — it is an
          opportunity to simplify automations that have accumulated unnecessary
          complexity over the years.
        </p>

        <ChecklistSection
          title="Field Mapping Checklist"
          items={[
            {
              text: "Create a master spreadsheet of every custom field in Salesforce",
              subItems: [
                "Include field name, data type, picklist values, and which objects use it",
                "Flag fields that are no longer used or contain stale data",
              ],
            },
            {
              text: "Map each Salesforce field to its HubSpot property equivalent",
              subItems: [
                "Identify fields that exist out-of-the-box in HubSpot",
                "Flag fields that will require new custom properties",
              ],
            },
            {
              text: "Document formula fields and their logic",
              subItems: [
                "Salesforce formula fields do not transfer — you will need to recreate them as calculated properties or workflow-driven fields",
              ],
            },
            {
              text: "Identify fields used in automation, reports, or integrations",
              subItems: [
                "These are high-priority — if a field feeds a workflow or dashboard, it must exist before those assets are rebuilt",
              ],
            },
          ]}
        />

        <CalloutBox type="tip" title="Start With the End State">
          <p>
            Instead of migrating your entire Salesforce field library, start by
            defining the properties your teams actually need in HubSpot. You
            will almost certainly discover that 30-40% of your custom fields are
            orphaned — they were created for a one-time project, a former
            employee, or a process that no longer exists. The migration is your
            chance to shed that dead weight.
          </p>
        </CalloutBox>
      </ContentSection>

      {/* ------------------------------------------------------------------ */}
      {/* CLEAN UP YOUR SALESFORCE DATA */}
      {/* ------------------------------------------------------------------ */}
      <ContentSection
        id="data-cleanup"
        title="Clean Up Your Salesforce Data"
        background="white"
      >
        <p className="text-lg text-black/70 leading-relaxed">
          Migrating dirty data into a clean system is like packing garbage into
          a new house. The platform changes, but the problems stay. Data cleanup
          is not glamorous, but it is the single highest-ROI activity in the
          entire migration process.
        </p>

        {dataCleanupImg && (
          <SectionImage
            src={dataCleanupImg}
            alt="Data quality filtering and cleanup"
            color="teal"
            pattern="grid"
          />
        )}

        <ChecklistSection
          title="Data Cleanup Priorities"
          items={[
            {
              text: "Remove inactive and incomplete contacts",
              subItems: [
                "Contacts without an email address or company association provide no value",
                "Contacts who have not engaged in 12+ months should be evaluated for removal or archival",
              ],
            },
            {
              text: "Identify and merge duplicate records",
              subItems: [
                "Salesforce-to-HubSpot migrations are a common source of duplicate inflation if not addressed beforehand",
                "Tools like Cloudingo, InfoCleanse, or DemandTools can automate large-scale deduplication",
              ],
            },
            {
              text: "Audit compliance exposure",
              subItems: [
                "GDPR requires legitimate interest or consent for processing — records older than 2 years without engagement may need to be purged",
                "CAN-SPAM and CCPA have their own retention implications",
              ],
            },
            {
              text: "Standardize formatting",
              subItems: [
                "Phone numbers, addresses, country codes, and currency fields should follow a consistent format before import",
                "Picklist values should be reconciled — Salesforce 'Closed Won' and 'Closed-Won' are different values",
              ],
            },
            {
              text: "Remove outdated records",
              subItems: [
                "Companies that have been acquired, closed, or are no longer in your ICP",
                "Deals that have been stuck in a stage for years with no activity",
              ],
            },
          ]}
        />

        <CalloutBox type="warning" title="GDPR and Data Retention">
          <p>
            If you operate in or sell to the EU, GDPR imposes strict rules on
            data retention. The general guidance is that personal data should
            not be stored longer than necessary for its original purpose. Many
            organizations use a 2-year engagement window as their threshold —
            if a contact has not interacted with your brand in over two years
            and you have no active contractual relationship, you likely need to
            delete or anonymize that record. Consult your legal team before
            making bulk deletion decisions.
          </p>
        </CalloutBox>

        <StatHighlight
          variant="cards"
          stats={[
            { value: "25-40%", label: "of CRM records are typically duplicates or incomplete" },
            { value: "30%+", label: "of data degrades annually without active management" },
            { value: "2x", label: "faster migration when data is cleaned beforehand" },
          ]}
        />
      </ContentSection>

      {/* ------------------------------------------------------------------ */}
      {/* BACK UP YOUR DATA */}
      {/* ------------------------------------------------------------------ */}
      <ContentSection
        id="backup"
        title="Back Up Your Data"
        background="gray"
      >
        <p className="text-lg text-black/70 leading-relaxed">
          Before you touch a single record in the migration, create a
          comprehensive backup of your Salesforce instance. This is your safety
          net. If something goes wrong — a field mapping error, a botched
          import, an unexpected data transformation — you need to be able to
          restore from a known-good state.
        </p>

        <h3 className="text-xl font-bold text-black mt-6 mb-4">
          Backup Methods
        </h3>

        <ProcessSteps
          variant="vertical"
          steps={[
            {
              number: "01",
              title: "CSV Export (Recommended Baseline)",
              description:
                "Export each Salesforce object as a CSV file using Data Loader or the built-in export tool. This gives you portable, human-readable files that can be re-imported into any system.",
              details: [
                "Export all standard objects: Leads, Contacts, Accounts, Opportunities, Cases",
                "Export all custom objects and their records",
                "Include all fields, even ones you plan to deprecate — better to have it and not need it",
                "Store exports in a secure, version-controlled location with date stamps",
              ],
            },
            {
              number: "02",
              title: "API-Based Backup (For Complex Instances)",
              description:
                "Use the Salesforce API to pull a programmatic snapshot of your data, including relationships and metadata. This is particularly useful for preserving record ownership, timestamps, and audit trails.",
              details: [
                "Captures record relationships that CSV exports can lose",
                "Preserves created/modified timestamps",
                "Requires developer resources but provides the most complete backup",
              ],
            },
            {
              number: "03",
              title: "Third-Party Backup Tools",
              description:
                "Services like OwnBackup, Gearset, or Spanning provide automated, scheduled backups with restore capabilities. If your Salesforce instance is large or mission-critical, a third-party tool is worth the investment.",
            },
          ]}
        />

        <CalloutBox type="tip" title="Do Not Forget Activity Data">
          <p>
            Timestamps, manually logged notes, call records, and task
            histories are some of the hardest data to migrate and the easiest
            to lose. Standard CSV exports often strip timestamps or flatten
            activity relationships. If preserving your activity history matters
            — and for most sales organizations, it does — plan a dedicated
            backup and migration path for activities.
          </p>
        </CalloutBox>
      </ContentSection>

      {/* ------------------------------------------------------------------ */}
      {/* CREATE A MIGRATION PLAN */}
      {/* ------------------------------------------------------------------ */}
      <ContentSection
        id="migration-plan"
        title="Create a Migration Plan"
        background="white"
      >
        <p className="text-lg text-black/70 leading-relaxed">
          A migration plan is not a Gantt chart. It is a living document that
          defines who is responsible for what, when each milestone must be hit,
          and how the organization will communicate throughout the transition.
          Without one, migrations devolve into a series of ad-hoc decisions made
          under pressure.
        </p>

        <h3 className="text-xl font-bold text-black mt-6 mb-4">
          Assign Ownership with the DARCI Framework
        </h3>

        <p className="text-lg text-black/70 leading-relaxed">
          Every workstream in the migration needs clear ownership. The DARCI
          framework prevents the diffusion of responsibility that causes
          migrations to stall. For each major deliverable, define who is the
          Decision-maker, who is Accountable, who is Responsible for execution,
          who needs to be Consulted, and who should be Informed.
        </p>

        <h3 className="text-xl font-bold text-black mt-8 mb-4">
          Key Milestones
        </h3>

        <ProcessSteps
          variant="vertical"
          steps={[
            {
              number: "M1",
              title: "Asset Mapping Complete",
              description:
                "Every Salesforce asset has been classified as migrate, translate, or deprecate. Field mapping spreadsheet is finalized and reviewed.",
            },
            {
              number: "M2",
              title: "First Test Import",
              description:
                "A small batch of records (100-500) has been successfully imported into a HubSpot sandbox. Field mappings are validated and issues are logged.",
            },
            {
              number: "M3",
              title: "Data Migration Finalized",
              description:
                "All records have been imported and validated. Association mappings (Contact-to-Company, Deal-to-Contact) are confirmed accurate.",
            },
            {
              number: "M4",
              title: "QA & Testing Complete",
              description:
                "End-user testing group has validated workflows, reports, and day-to-day processes. Issues have been triaged and resolved.",
            },
            {
              number: "M5",
              title: "Training Complete",
              description:
                "All impacted teams have completed role-specific HubSpot training. Certification requirements (if any) are met.",
            },
            {
              number: "M6",
              title: "Go Live & Salesforce Sunset",
              description:
                "HubSpot is the system of record. Salesforce access is restricted to read-only, then decommissioned per the sunset timeline.",
            },
          ]}
        />

        <CalloutBox type="info" title="Communicate Early and Often">
          <p>
            A CRM migration affects every revenue-facing team. Do not treat it
            as an IT project. Announce the migration timeline to the broader
            organization early, explain why the change is happening, and provide
            regular status updates. People resist change they do not understand.
            They support change they helped shape.
          </p>
        </CalloutBox>

        <InlineCTA
          title="Need Help Building Your Migration Plan?"
          description="Our team has planned and executed Salesforce-to-HubSpot migrations for organizations ranging from 50 to 50,000 contacts. We can help you build a realistic plan that accounts for your specific complexity."
          primaryAction={{
            label: "Book a Migration Assessment",
            href: "/contact",
          }}
          secondaryAction={{
            label: "View CRM Migration Services",
            href: "/services/crm-migration",
          }}
          variant="subtle"
        />
      </ContentSection>

      {/* ------------------------------------------------------------------ */}
      {/* MIGRATION (Parent Section) */}
      {/* ------------------------------------------------------------------ */}
      <ContentSection
        id="migration"
        title="Migration"
        badge="Phase 2"
        background="gray"
      >
        <p className="text-lg text-black/70 leading-relaxed">
          With evaluation, cleanup, and planning behind you, the migration phase
          is where preparation meets execution. This phase covers configuring
          your HubSpot instance, moving your data, handling custom objects, and
          validating everything before your team ever touches the new system.
        </p>

        {migrationImg && (
          <SectionImage
            src={migrationImg}
            alt="Precision data migration"
            color="teal"
          />
        )}

        <ProcessSteps
          variant="horizontal"
          steps={[
            {
              number: "01",
              title: "Configure",
              description: "Set up HubSpot properties, pipelines, and integrations before importing data.",
            },
            {
              number: "02",
              title: "Import Data",
              description: "Move records in phased batches, validating each import before proceeding.",
            },
            {
              number: "03",
              title: "QA & Test",
              description: "Validate data quality, workflow behavior, and end-user experience.",
            },
            {
              number: "04",
              title: "Go Live",
              description: "Cut over to HubSpot as the system of record and sunset Salesforce.",
            },
          ]}
        />
      </ContentSection>

      {/* ------------------------------------------------------------------ */}
      {/* CONFIGURE YOUR HUBSPOT INSTANCE */}
      {/* ------------------------------------------------------------------ */}
      <ContentSection
        id="configure-hubspot"
        title="Configure Your HubSpot Instance"
        background="white"
      >
        <p className="text-lg text-black/70 leading-relaxed">
          Do not import data into an unconfigured HubSpot portal. Before a
          single record arrives, your instance should have the right properties,
          pipelines, permissions, and structural foundations in place. Importing
          data into an empty portal and then trying to organize it afterwards
          is a recipe for rework.
        </p>

        <ChecklistSection
          title="HubSpot Configuration Checklist"
          items={[
            {
              text: "Create custom properties to match your Salesforce field map",
              subItems: [
                "Use your field mapping spreadsheet as the source of truth",
                "Set correct field types — single-line text, dropdown, number, date, etc.",
                "Group properties logically so your team can find them in the UI",
              ],
            },
            {
              text: "Set up deal pipelines and stages",
              subItems: [
                "Map Salesforce opportunity stages to HubSpot deal stages",
                "Define win probabilities for each stage if you use forecasting",
                "Create separate pipelines for distinct sales motions (new business vs. renewals)",
              ],
            },
            {
              text: "Configure lifecycle stages and lead statuses",
              subItems: [
                "Define how contacts progress from subscriber to customer",
                "Map Salesforce lead statuses to HubSpot equivalents",
                "Decide how converted Salesforce Leads will be handled in the unified Contact model",
              ],
            },
            {
              text: "Recreate or adapt key assets",
              subItems: [
                "Email templates — rebuild using HubSpot's drag-and-drop editor",
                "Forms — recreate with HubSpot forms and embed on your site",
                "Landing pages — migrate content to HubSpot CMS or connect external pages",
                "Reports and dashboards — rebuild using HubSpot's native reporting tools",
              ],
            },
            {
              text: "Build operational workflows",
              subItems: [
                "Lead assignment and routing rules",
                "Deal stage automation and task creation",
                "Internal notification workflows for SLA adherence",
                "Data formatting and cleanup automations",
              ],
            },
            {
              text: "Set up teams, roles, and permissions",
              subItems: [
                "Mirror your Salesforce role hierarchy in HubSpot teams",
                "Configure record-level permissions (own, team, all)",
                "Set up user partitioning for multi-division organizations",
              ],
            },
          ]}
        />

        <CalloutBox type="tip" title="Use the Salesforce-HubSpot Integration Strategically">
          <p>
            If you are running both platforms in parallel during the transition,
            HubSpot&apos;s native Salesforce integration can sync data between
            them in real time. This is useful as a bridge during migration, but
            do not treat it as a permanent solution. The goal is consolidation,
            not indefinite synchronization. Set a firm sunset date for the
            integration.
          </p>
        </CalloutBox>
      </ContentSection>

      {/* ------------------------------------------------------------------ */}
      {/* MIGRATE YOUR DATA */}
      {/* ------------------------------------------------------------------ */}
      <ContentSection
        id="data-import"
        title="Migrate Your Data"
        background="gray"
      >
        <p className="text-lg text-black/70 leading-relaxed">
          Data migration is the moment of truth. You have planned, cleaned, and
          configured — now it is time to move records from Salesforce into
          HubSpot. There are three primary methods, and the right choice depends
          on your data volume, complexity, and customization requirements.
        </p>

        <h3 className="text-xl font-bold text-black mt-6 mb-4">
          Method 1: CSV Import
        </h3>

        <p className="text-lg text-black/70 leading-relaxed">
          The CSV import method gives you the most control. You export data from
          Salesforce as CSV files, transform and clean them as needed, then
          import them into HubSpot using the built-in import tool. This method
          is ideal when you need to apply custom field mappings, filter specific
          record subsets, or transform data formats during the import.
        </p>

        <h3 className="text-xl font-bold text-black mt-8 mb-4">
          Method 2: Salesforce-HubSpot Native Integration
        </h3>

        <p className="text-lg text-black/70 leading-relaxed">
          HubSpot&apos;s native Salesforce connector can sync all records for
          supported object types (Contacts, Companies, Deals) with minimal
          configuration. This is the fastest path for straightforward migrations,
          but it offers less control over which records are included and how
          fields are mapped. It syncs everything for the selected object types,
          so make sure your data cleanup is thorough before using this method.
        </p>

        <h3 className="text-xl font-bold text-black mt-8 mb-4">
          Method 3: API-Based Migration
        </h3>

        <p className="text-lg text-black/70 leading-relaxed">
          For organizations with custom objects, complex record relationships, or
          data volumes exceeding what the UI import tool handles comfortably, the
          HubSpot API provides the most flexibility. This approach requires
          developer resources but enables granular control over record creation,
          association mapping, and error handling.
        </p>

        <ComparisonTable
          headers={["CSV Import", "Native Integration"]}
          rows={[
            {
              feature: "Setup Complexity",
              left: "Low — export, map, import",
              right: "Low — connect and configure sync rules",
            },
            {
              feature: "Customization",
              left: "High — full control over field mapping and filtering",
              right: "Limited — syncs all records for selected object types",
              highlight: true,
            },
            {
              feature: "Data Subsets",
              left: "Yes — import exactly the records you want",
              right: "No — syncs all records of each type",
              highlight: true,
            },
            {
              feature: "Speed",
              left: "Moderate — depends on file size and cleanup",
              right: "Fast — automated sync handles the heavy lifting",
            },
            {
              feature: "Best For",
              left: "Complex migrations with custom mappings",
              right: "Simple migrations with standard data models",
            },
          ]}
          caption="Most migrations use a combination — native integration for standard objects and CSV/API for custom data."
        />

        <CalloutBox type="tip" title="Phase Your Import">
          <p>
            Never import everything at once. Start with a small batch of 100-500
            records, validate that field mappings are correct, check that
            associations are intact, and confirm that workflows trigger as
            expected. Fix any issues on the small batch. Then run the next batch
            — 1,000 to 5,000 records. Validate again. Only after two successful
            rounds should you run the full import. This phased approach catches
            problems early, when they are cheap to fix.
          </p>
        </CalloutBox>

        <h3 className="text-xl font-bold text-black mt-8 mb-4">
          Recommended Import Order
        </h3>

        <ProcessSteps
          variant="vertical"
          steps={[
            {
              number: "01",
              title: "Companies",
              description:
                "Import company records first. These serve as the parent records that contacts and deals will associate with.",
              details: [
                "Map the Salesforce Account ID to a custom HubSpot property for cross-referencing",
                "Validate domain matching — HubSpot uses domain as a unique identifier for companies",
              ],
            },
            {
              number: "02",
              title: "Contacts",
              description:
                "Import contacts second and associate them with the companies you just imported. Remember: Salesforce Leads and Contacts both become HubSpot Contacts.",
              details: [
                "Set lifecycle stage based on the original Salesforce record type",
                "Converted Leads should retain their conversion date if possible",
                "Use email as the unique identifier to prevent duplicates",
              ],
            },
            {
              number: "03",
              title: "Deals",
              description:
                "Import deals third and associate them with both contacts and companies. Map opportunity stages to your HubSpot deal pipeline stages.",
              details: [
                "Preserve close dates and amounts for historical reporting accuracy",
                "Closed deals should be imported with their final stage, not re-processed through the pipeline",
              ],
            },
            {
              number: "04",
              title: "Activities & Notes",
              description:
                "Import activity history last. Tasks, notes, calls, and emails provide context for the records you have already imported.",
              details: [
                "Activity timestamps should be preserved — not set to the import date",
                "API-based import is often required to maintain correct timestamps",
              ],
            },
          ]}
        />

        <InlineCTA
          title="Migrating More Than 100,000 Records?"
          description="Large-scale migrations introduce complexities around API rate limits, association mapping, and data validation that benefit from experienced hands. Our migration team handles the technical heavy lifting so your team can focus on adoption."
          primaryAction={{
            label: "Get a Migration Quote",
            href: "/contact",
          }}
          variant="prominent"
        />
      </ContentSection>

      {/* ------------------------------------------------------------------ */}
      {/* CUSTOM OBJECTS & APIs */}
      {/* ------------------------------------------------------------------ */}
      <ContentSection
        id="custom-objects-api"
        title="Custom Objects & APIs"
        background="white"
      >
        <p className="text-lg text-black/70 leading-relaxed">
          If your Salesforce instance includes custom objects — and most mature
          instances do — you will need the HubSpot API to migrate them. Custom
          objects in HubSpot are available on Enterprise plans and support the
          same association, property, and workflow capabilities as standard
          objects.
        </p>

        <p className="text-lg text-black/70 leading-relaxed">
          The migration path for custom objects involves three steps: define the
          custom object schema in HubSpot, map the Salesforce custom object
          fields to HubSpot custom object properties, and use the API to create
          records and associations. For ecommerce-specific objects like products,
          line items, and orders, HubSpot provides dedicated APIs that integrate
          with the native commerce tools.
        </p>

        <ChecklistSection
          title="Custom Object Migration Checklist"
          items={[
            {
              text: "Inventory all custom objects in Salesforce and their record counts",
            },
            {
              text: "Determine which custom objects need to exist in HubSpot",
              subItems: [
                "Some Salesforce custom objects may be replaced by HubSpot-native functionality",
                "Others may be candidates for custom properties on standard objects rather than standalone custom objects",
              ],
            },
            {
              text: "Define the custom object schema in HubSpot",
              subItems: [
                "Primary display property, searchable properties, and required properties",
                "Association types with standard objects (contacts, companies, deals)",
              ],
            },
            {
              text: "Build the API migration script with error handling and logging",
              subItems: [
                "Respect HubSpot API rate limits (100 requests per 10 seconds for most endpoints)",
                "Implement retry logic for transient failures",
                "Log every record creation for audit and rollback capability",
              ],
            },
            {
              text: "Validate the migration in a sandbox environment before running it against production",
            },
          ]}
        />

        <CalloutBox type="info" title="API Rate Limits">
          <p>
            HubSpot enforces API rate limits that vary by subscription tier. For
            large custom object migrations, you may need to batch API calls and
            implement rate-limiting logic in your migration scripts. The
            HubSpot batch API endpoints let you create up to 100 records per
            request, which significantly reduces the total number of API calls
            required. Plan your migration windows around these constraints.
          </p>
        </CalloutBox>
      </ContentSection>

      {/* ------------------------------------------------------------------ */}
      {/* QA & TESTING */}
      {/* ------------------------------------------------------------------ */}
      <ContentSection
        id="qa-testing"
        title="QA & Testing"
        background="gray"
      >
        <p className="text-lg text-black/70 leading-relaxed">
          Quality assurance is not a single checkpoint — it is a continuous
          discipline that runs throughout the migration. But the formal QA phase,
          after data import is complete, is where you validate that the new
          system meets three criteria: quality, consistency, and accessibility.
        </p>

        {qaTestingImg && (
          <SectionImage
            src={qaTestingImg}
            alt="Thorough quality validation and testing"
            color="teal"
            pattern="spiral"
          />
        )}

        <h3 className="text-xl font-bold text-black mt-6 mb-4">
          Data Quality Validation
        </h3>

        <ChecklistSection
          items={[
            {
              text: "Record count reconciliation — do the numbers in HubSpot match your Salesforce exports?",
              subItems: [
                "Compare total records per object type",
                "Spot-check 20-30 individual records across each object type",
                "Verify that associations (Contact-to-Company, Deal-to-Contact) are intact",
              ],
            },
            {
              text: "Field completeness — are all mapped properties populated correctly?",
              subItems: [
                "Check for blank fields that should have values",
                "Verify that picklist values mapped correctly (no 'undefined' or 'other' catch-alls)",
                "Confirm date fields imported in the correct format and timezone",
              ],
            },
            {
              text: "Data consistency — are formats correct and uniform?",
              subItems: [
                "Phone numbers, currencies, and addresses follow a consistent format",
                "Lifecycle stages and deal stages reflect the correct mappings",
                "Owner assignments transferred correctly",
              ],
            },
            {
              text: "Accessibility — can your team find what they need?",
              subItems: [
                "Saved views and filters work as expected",
                "Dashboards display accurate data",
                "Search returns relevant results for common queries",
              ],
            },
          ]}
        />

        <h3 className="text-xl font-bold text-black mt-8 mb-4">
          End-User Testing
        </h3>

        <p className="text-lg text-black/70 leading-relaxed">
          Recruit a diverse group of end users — not just power users or
          managers — to test the system against their actual daily workflows.
          Give them specific scenarios to complete: log a call, create a deal,
          run a report, send a sequence email. Document every issue, no matter
          how minor, and categorize them as blockers, high priority, or
          nice-to-have.
        </p>

        <CalloutBox type="tip" title="Build a 30-Day Buffer">
          <p>
            Plan for a minimum 30-day buffer between completing QA and your
            go-live date. This buffer accounts for the issues that inevitably
            surface during testing, the time needed to fix them, and the
            re-testing cycle. Migrations that skip this buffer almost always end
            up with a rocky go-live and frustrated users. Thirty days of buffer
            is not luxury — it is risk management.
          </p>
        </CalloutBox>
      </ContentSection>

      {/* ------------------------------------------------------------------ */}
      {/* GO LIVE */}
      {/* ------------------------------------------------------------------ */}
      <ContentSection
        id="go-live"
        title="Go Live"
        background="white"
      >
        <p className="text-lg text-black/70 leading-relaxed">
          Go-live is not a single moment — it is a coordinated transition that
          should feel anticlimactic if the preparation was thorough. By the time
          you flip the switch, your team should already be familiar with HubSpot
          from the testing phase, and the data should be validated and
          production-ready.
        </p>

        <ProcessSteps
          variant="vertical"
          steps={[
            {
              number: "01",
              title: "Final Data Sync",
              description:
                "Run a final delta import to capture any records created or modified in Salesforce since your last migration batch. This ensures no data falls through the cracks during the transition window.",
            },
            {
              number: "02",
              title: "Activate Workflows and Automations",
              description:
                "Turn on the HubSpot workflows you built and tested. Monitor them closely for the first 24-48 hours to catch any unexpected behavior with production data.",
            },
            {
              number: "03",
              title: "Communicate the Cutover",
              description:
                "Send a clear, organization-wide communication that HubSpot is now the system of record. Include quick-reference guides, login instructions, and a link to the support channel for migration-related questions.",
            },
            {
              number: "04",
              title: "Restrict Salesforce Access",
              description:
                "Switch Salesforce to read-only for all users. Do not delete it immediately — keep it available as a reference for 60-90 days, then decommission it per your sunset plan.",
            },
            {
              number: "05",
              title: "Monitor and Respond",
              description:
                "Designate a migration support team for the first two weeks post-go-live. This team should have a dedicated Slack channel or email alias for rapid issue resolution.",
              details: [
                "Track the volume and category of support requests daily",
                "Prioritize blockers — anything preventing a user from doing their job",
                "Document common questions and add them to your internal knowledge base",
              ],
            },
          ]}
        />

        <CalloutBox type="warning" title="The Biggest Go-Live Mistake">
          <p>
            The most common go-live failure is not technical — it is behavioral.
            If your team continues using Salesforce &quot;just for a few more
            weeks&quot; while also entering data in HubSpot, you end up with
            split data and no single source of truth. Set a hard cutover date.
            Communicate it repeatedly. And when the date arrives, enforce it.
            Parallel systems during transition create more problems than they
            solve.
          </p>
        </CalloutBox>
      </ContentSection>

      {/* ------------------------------------------------------------------ */}
      {/* POST-MIGRATION (Parent Section) */}
      {/* ------------------------------------------------------------------ */}
      <ContentSection
        id="post-migration"
        title="Post-Migration"
        badge="Phase 3"
        background="gray"
      >
        <p className="text-lg text-black/70 leading-relaxed">
          The migration is complete, but the work is not over. The post-migration
          phase is where you turn a successful data transfer into a successful
          platform adoption. This means investing in training, establishing data
          governance practices, and building the operational habits that will
          prevent your new HubSpot instance from accumulating the same technical
          debt you just left behind.
        </p>

        {postMigrationImg && (
          <SectionImage
            src={postMigrationImg}
            alt="Nurturing growth after launch"
            color="orange"
            pattern="arc"
          />
        )}

        <StatHighlight
          stats={[
            { value: "90 Days", label: "to establish new CRM habits across your team" },
            { value: "3-5x", label: "ROI improvement when training is formalized" },
            { value: "40%", label: "of migrations fail post-launch due to poor adoption" },
          ]}
        />
      </ContentSection>

      {/* ------------------------------------------------------------------ */}
      {/* GET YOUR TEAMS UP TO SPEED */}
      {/* ------------------------------------------------------------------ */}
      <ContentSection
        id="team-training"
        title="Get Your Teams Up to Speed"
        background="white"
      >
        <p className="text-lg text-black/70 leading-relaxed">
          Training is not a one-time event. It is a phased program that starts
          before go-live and continues for at least 90 days afterwards. The
          mistake most organizations make is treating training as a single
          all-hands session where someone screen-shares the new tool for an hour.
          That approach produces familiarity, not proficiency. Proficiency
          requires practice, repetition, and role-specific guidance.
        </p>

        <ProcessSteps
          variant="vertical"
          steps={[
            {
              number: "01",
              title: "Small Group Sessions by Role",
              description:
                "Sales reps need to learn how to manage deals and sequences. Marketers need to understand campaigns and workflows. Service teams need ticket pipelines and knowledge base tools. Train each group on their specific workflows, not the entire platform.",
              details: [
                "Limit sessions to 8-12 people for hands-on practice",
                "Use real data from the migrated system, not demo environments",
                "Record every session for teammates who cannot attend live",
              ],
            },
            {
              number: "02",
              title: "HubSpot Academy Certifications",
              description:
                "Assign relevant HubSpot Academy certifications as required learning. These courses are free, self-paced, and comprehensive. They provide a structured foundation that your team-specific training can build upon.",
              details: [
                "Inbound Sales certification for sales teams",
                "HubSpot Marketing Software certification for marketing teams",
                "Service Hub Software certification for service teams",
                "Revenue Operations certification for ops and admin teams",
              ],
            },
            {
              number: "03",
              title: "Homework and Check-Ins",
              description:
                "Assign practical exercises between training sessions. Ask reps to create 5 deals, send 3 sequence emails, and build a personal dashboard. Then schedule a 30-minute check-in one week later to review questions and reinforce learnings.",
            },
            {
              number: "04",
              title: "Department-Specific Office Hours",
              description:
                "For the first 60 days post-go-live, host weekly 30-minute office hours for each department. These drop-in sessions give people a safe space to ask questions without feeling like they are slowing down the team.",
            },
          ]}
        />

        <CalloutBox type="example" title="Training Timeline Example">
          <p>
            <strong>Week -2 to Go-Live:</strong> HubSpot Academy certifications
            assigned. Small-group training sessions for each department.
            <br /><br />
            <strong>Week 1-2 Post-Go-Live:</strong> Daily office hours. Migration
            support team active. First homework assignments due.
            <br /><br />
            <strong>Week 3-4:</strong> Check-in sessions. Office hours move to
            twice weekly. Advanced feature training for power users.
            <br /><br />
            <strong>Week 5-8:</strong> Office hours move to weekly. Focus shifts
            from &quot;how to use&quot; to &quot;how to optimize.&quot;
            <br /><br />
            <strong>Week 9-12:</strong> Final check-ins. Identify remaining
            knowledge gaps. Transition to ongoing enablement.
          </p>
        </CalloutBox>
      </ContentSection>

      {/* ------------------------------------------------------------------ */}
      {/* PRIORITIZE DATA MANAGEMENT */}
      {/* ------------------------------------------------------------------ */}
      <ContentSection
        id="data-management"
        title="Prioritize Data Management"
        background="gray"
      >
        <p className="text-lg text-black/70 leading-relaxed">
          You just spent significant time and resources cleaning your data for
          migration. The worst thing you can do now is let it degrade back to
          its previous state. Data management is an ongoing discipline, not a
          migration activity. Build the systems and habits that keep your HubSpot
          instance clean from day one.
        </p>

        <ChecklistSection
          title="Post-Migration Data Governance"
          items={[
            {
              text: "Establish compliance-driven data clarity",
              subItems: [
                "Define data retention policies by object type and region",
                "Set up automated deletion or anonymization for records that exceed retention windows",
                "Document what personal data you store, where, and why — your GDPR Article 30 record",
              ],
            },
            {
              text: "Validate data quality at the point of entry",
              subItems: [
                "Use HubSpot form validation to enforce formatting rules (phone, email, country)",
                "Implement required fields on record creation to prevent incomplete records",
                "Use Operations Hub data quality tools to normalize data in real time",
              ],
            },
            {
              text: "Schedule routine data audits",
              subItems: [
                "Monthly: Review new records for completeness and accuracy",
                "Quarterly: Identify and merge duplicates, flag stale records",
                "Annually: Full data audit against compliance requirements and ICP criteria",
              ],
            },
            {
              text: "Automate data entry where possible",
              subItems: [
                "Use HubSpot workflows to set default values, format fields, and copy data between objects",
                "Integrate enrichment tools (Clearbit, ZoomInfo) to auto-fill company and contact data",
                "Build calculated properties to reduce manual data entry for sales teams",
              ],
            },
          ]}
        />

        <CalloutBox type="tip" title="The 90-Day Rule">
          <p>
            The first 90 days after migration define the long-term health of
            your CRM data. If your team builds good habits in the first three
            months — consistent data entry, regular cleanup, adherence to
            naming conventions — those habits tend to stick. If you allow sloppy
            data practices to take root early, they become exponentially harder
            to fix later. Invest in governance now. Your future self will thank
            you.
          </p>
        </CalloutBox>

        <InlineCTA
          title="Keep Your HubSpot Instance Running at Peak Performance"
          description="Our managed CRM services include ongoing data governance, workflow optimization, and quarterly health audits. We keep your system clean so your team can focus on selling."
          primaryAction={{
            label: "Book an Intro Call",
            href: "/book",
          }}
          variant="prominent"
        />
      </ContentSection>

      {/* ------------------------------------------------------------------ */}
      {/* RELATED GUIDES + CTA BANNER */}
      {/* ------------------------------------------------------------------ */}
      <RelatedGuides guides={related} />
      <CTABanner />
    </PillarPageLayout>
  );
}
