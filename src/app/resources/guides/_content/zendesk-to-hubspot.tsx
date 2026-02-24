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
} from "@/components/pillar-page";
import { CTABanner } from "@/components/sections";
import { getGuideBySlug, getRelatedGuides } from "@/data/guides";

export default function ZendeskToHubSpotGuide() {
  const guide = getGuideBySlug("zendesk-to-hubspot")!;
  const related = getRelatedGuides("zendesk-to-hubspot");

  return (
    <PillarPageLayout guide={guide}>
      {/* ================================================================
          WHY MIGRATE
          ================================================================ */}
      <ContentSection
        id="why-migrate"
        title="Why Migrate to HubSpot Service Hub"
        badge="The Case for Change"
        background="white"
      >
        <p>
          Zendesk is a capable help desk, but it was built as a standalone
          ticketing system. As your business grows, the cracks start showing:
          your service team operates in a silo, customer context lives in a
          different database than marketing and sales data, and stitching it all
          together requires expensive middleware or clunky workarounds. HubSpot
          Service Hub takes a fundamentally different approach by embedding
          service inside the same CRM your revenue teams already use &mdash;
          giving agents instant access to every interaction a customer has ever
          had with your company.
        </p>
        <p>
          The practical upside is significant. When a customer submits a ticket,
          your agent can see the deals they closed, the marketing emails they
          opened, the pages they visited, and the NPS score they left last
          quarter &mdash; all without switching tabs. That level of context
          doesn&apos;t just improve resolution times; it transforms the quality
          of every conversation.
        </p>

        <StatHighlight
          stats={[
            { value: "1", label: "Unified CRM for marketing, sales & service" },
            { value: "4", label: "Survey types (CSAT, NPS, CES, custom)" },
            { value: "0", label: "Cost for free-tier users" },
            { value: "360\u00B0", label: "Customer visibility across teams" },
          ]}
          variant="cards"
        />

        <ComparisonTable
          headers={["Zendesk", "HubSpot Service Hub"]}
          caption="How the two platforms compare across key service capabilities"
          rows={[
            {
              feature: "CRM Integration",
              left: "Requires Salesforce or third-party CRM sync",
              right: "Native CRM — service, sales & marketing in one database",
              highlight: true,
            },
            {
              feature: "Customer Surveys",
              left: "CSAT only (native)",
              right: "CSAT, NPS, CES, and fully custom surveys",
              highlight: true,
            },
            {
              feature: "Pricing Model",
              left: "Per-agent licensing; costs scale with headcount",
              right: "Unlimited free users; paid tiers for advanced features",
            },
            {
              feature: "Help Desk & Ticketing",
              left: "Mature, full-featured ticketing system",
              right: "Full help desk with shared inbox and conversations",
            },
            {
              feature: "Knowledge Base",
              left: "Included in Suite plans",
              right: "Included in Professional+; multi-language support",
            },
            {
              feature: "Live Chat & Bots",
              left: "Chat widget with AI-powered bots",
              right: "Chat widgets, chatflows, and bot builder with CRM context",
            },
            {
              feature: "Automation",
              left: "Triggers, automations, macros",
              right: "Workflows with cross-object logic, sequences, and playbooks",
            },
            {
              feature: "Reporting",
              left: "Explore analytics (add-on for advanced)",
              right: "Custom report builder, dashboards, and goals — all native",
            },
            {
              feature: "Cross-Team Visibility",
              left: "Limited; requires separate sales/marketing tools",
              right: "Full visibility across marketing, sales, and service",
              highlight: true,
            },
          ]}
        />

        <CalloutBox type="info" title="Beyond the Help Desk">
          The most overlooked advantage of HubSpot Service Hub is what happens
          after the ticket closes. Because service data feeds directly into
          the same CRM used by marketing and sales, you can build automated
          workflows that trigger upsell sequences after successful resolutions,
          loop in account managers when CSAT dips, or flag expansion
          opportunities based on product usage tickets. That kind of
          cross-functional automation simply isn&apos;t possible when your
          service tool sits outside the CRM.
        </CalloutBox>
      </ContentSection>

      {/* ================================================================
          PRE-MIGRATION PLANNING
          ================================================================ */}
      <ContentSection
        id="pre-migration-planning"
        title="Pre-Migration Planning"
        badge="Phase 1"
        background="gray"
      >
        <p>
          A Zendesk-to-HubSpot migration touches every corner of your support
          operation: channels, routing rules, SLAs, automation, self-service
          content, and reporting. Rushing through it is the fastest way to break
          things your team depends on daily. The planning phase is where you
          document what you have, decide what to keep, and map every element to
          its HubSpot equivalent.
        </p>
        <p>
          We recommend dedicating two to four weeks to planning before any data
          moves. During this phase you will audit your current Zendesk
          configuration, align stakeholders on priorities, and build a
          detailed migration checklist that covers every section below. Treat
          this checklist as your project plan &mdash; each item should have an
          owner, a target date, and a clear definition of done.
        </p>

        <ChecklistSection
          title="Pre-Migration Planning Checklist"
          items={[
            {
              text: "Audit and document all active Zendesk intake channels",
              subItems: [
                "Email addresses (support@, billing@, etc.)",
                "Facebook Messenger connections",
                "Web forms and embedded widgets",
                "Live chat deployments",
              ],
            },
            {
              text: "Map Zendesk ticket fields and custom fields to HubSpot properties",
              subItems: [
                "Standard fields: subject, description, priority, status",
                "Custom fields: product line, region, contract type",
                "Drop-down values and their HubSpot equivalents",
              ],
            },
            {
              text: "Document current routing rules and assignment logic",
            },
            {
              text: "Export and review SLA policies, targets, and escalation paths",
            },
            {
              text: "Inventory all macros, triggers, and automations",
            },
            {
              text: "Catalog knowledge base articles and their category structure",
            },
            {
              text: "Identify integrations that depend on Zendesk and plan alternatives",
            },
            {
              text: "Secure stakeholder sign-off on migration timeline and success criteria",
            },
          ]}
        />

        <CalloutBox type="warning" title="Don't Skip the Audit">
          One of the most common migration mistakes is assuming you know
          what&apos;s in Zendesk without actually looking. Over time, teams
          accumulate orphaned triggers, outdated macros, and custom fields no
          one uses. The audit is your chance to clean house. Migrate only what
          you actually need &mdash; not the digital clutter you&apos;ve been
          carrying for years.
        </CalloutBox>
      </ContentSection>

      {/* ================================================================
          INTAKE CHANNELS
          ================================================================ */}
      <ContentSection
        id="intake-channels"
        title="Intake Channels"
        badge="Planning Detail"
        background="white"
      >
        <p>
          Intake channels are the entry points through which customers reach your
          support team. In Zendesk, these typically include email addresses wired
          to your support domain, Facebook Messenger connections, web-based
          contact forms, and the live chat widget. Each of these channels has a
          direct counterpart in HubSpot, but the configuration approach differs
          enough that you need to plan the mapping carefully.
        </p>
        <p>
          Start by listing every active intake channel in Zendesk. For each
          channel, note the email address or integration, the team or group that
          receives tickets from it, and any routing logic that applies. Then map
          each one to its HubSpot equivalent: connected inboxes for email,
          Facebook Messenger integration for social, HubSpot forms for web
          submissions, and chat widgets for live support.
        </p>

        <ComparisonTable
          headers={["Zendesk Channel", "HubSpot Equivalent"]}
          caption="Channel-by-channel migration mapping"
          rows={[
            {
              feature: "Support email addresses",
              left: "Zendesk email channel (forwarding or MX)",
              right: "Connected inbox in Conversations",
            },
            {
              feature: "Facebook Messenger",
              left: "Zendesk social messaging channel",
              right: "Facebook Messenger integration in Conversations",
            },
            {
              feature: "Web contact forms",
              left: "Zendesk web widget or embedded form",
              right: "HubSpot Forms (with automatic ticket creation)",
            },
            {
              feature: "Live chat",
              left: "Zendesk Chat / Messaging widget",
              right: "HubSpot chat widget with chatflows",
            },
          ]}
        />

        <CalloutBox type="tip" title="Consolidate Where You Can">
          Migration is the perfect time to simplify your channel structure.
          If you have six support email addresses but three of them receive
          fewer than five tickets a month, consider consolidating. Fewer
          channels means simpler routing, faster setup, and fewer things to
          maintain long-term.
        </CalloutBox>
      </ContentSection>

      {/* ================================================================
          CHAT WIDGETS & CHATFLOWS
          ================================================================ */}
      <ContentSection
        id="chat-widgets"
        title="Chat Widgets & Chatflows"
        badge="Planning Detail"
        background="gray"
      >
        <p>
          If your team uses Zendesk Chat or Zendesk Messaging, you are already
          familiar with embedding a chat widget on your website and routing
          conversations to agents in real time. HubSpot offers equivalent
          functionality through its chat widget and chatflow builder, but with
          one key advantage: because the chat is native to the CRM, every
          conversation is automatically associated with a contact record and any
          open deals, tickets, or company data.
        </p>
        <p>
          Plan your HubSpot chat configuration by deciding which pages should
          display the widget, what the initial greeting and targeting rules
          should be, and whether you want to deploy a live chat flow, a bot
          flow, or both. HubSpot&apos;s bot builder lets you create branching
          conversational flows that qualify visitors, route to the right team,
          and even create tickets &mdash; all before a human agent gets
          involved.
        </p>

        <ChecklistSection
          title="Chat Migration Planning"
          items={[
            {
              text: "Document current Zendesk Chat widget placement and targeting rules",
            },
            {
              text: "Map Zendesk Chat triggers to HubSpot chatflow targeting criteria",
              subItems: [
                "URL-based targeting (specific pages or URL patterns)",
                "Visitor behavior triggers (time on page, scroll depth)",
                "Returning visitor vs. new visitor logic",
              ],
            },
            {
              text: "Recreate chatbot conversation flows in HubSpot's bot builder",
            },
            {
              text: "Configure chat routing to match your team structure",
            },
            {
              text: "Set operating hours and away-mode behavior for live chat",
            },
          ]}
        />
      </ContentSection>

      {/* ================================================================
          TICKET & CONVERSATION ROUTING
          ================================================================ */}
      <ContentSection
        id="ticket-routing"
        title="Ticket & Conversation Routing"
        badge="Planning Detail"
        background="white"
      >
        <p>
          Routing is one of the areas where Zendesk and HubSpot differ most in
          their approach. Zendesk uses a combination of triggers, automations,
          and group-based assignment to route tickets. HubSpot uses a
          combination of inbox-level routing rules, workflow-based assignment,
          and &mdash; for teams on Service Hub Professional or Enterprise
          &mdash; skill-based and capacity-based routing options.
        </p>
        <p>
          Begin by documenting every routing rule currently active in Zendesk.
          For each rule, note the trigger conditions, the destination group or
          agent, and any priority or escalation logic. Then determine which
          HubSpot mechanism best replicates that behavior. Simple round-robin
          assignment can be configured directly in the inbox settings. More
          complex routing &mdash; such as assigning billing tickets to the
          finance-trained support team, or routing enterprise customers to a
          dedicated pod &mdash; is best handled through HubSpot workflows.
        </p>

        <CalloutBox type="tip" title="Capacity-Based Routing">
          If your team uses Zendesk&apos;s capacity rules to prevent agents from
          being overloaded, look into HubSpot&apos;s capacity-based routing
          (available in Service Hub Professional and Enterprise). You can set
          maximum concurrent assignments per agent and let HubSpot distribute
          work automatically based on current load.
        </CalloutBox>
      </ContentSection>

      {/* ================================================================
          SLAs
          ================================================================ */}
      <ContentSection
        id="slas"
        title="Service Level Agreements"
        badge="Planning Detail"
        background="gray"
      >
        <p>
          Service Level Agreements define the response and resolution times your
          team commits to. In Zendesk, SLA policies are configured with
          conditions that match ticket properties (priority, group, tags) and
          set targets for first-reply time, next-reply time, and resolution time.
          HubSpot Service Hub supports SLAs in a similar fashion, with policies
          tied to ticket priority and configurable targets for both first
          response and time to close.
        </p>
        <p>
          Export your current Zendesk SLA policies and map each one to a HubSpot
          SLA rule. Pay particular attention to business hours versus calendar
          hours, escalation actions when SLAs are breached, and any
          priority-specific targets. HubSpot allows you to define SLAs per
          pipeline and priority level, and you can build workflows that trigger
          notifications or reassignments when an SLA breach is imminent.
        </p>

        <ComparisonTable
          headers={["Zendesk SLA Feature", "HubSpot SLA Feature"]}
          rows={[
            {
              feature: "First reply time targets",
              left: "Configurable per SLA policy",
              right: "Configurable per priority level",
            },
            {
              feature: "Resolution time targets",
              left: "Configurable per SLA policy",
              right: "Time-to-close targets per priority level",
            },
            {
              feature: "Business hours",
              left: "Multiple schedules supported",
              right: "Working hours configuration with timezone support",
            },
            {
              feature: "Breach notifications",
              left: "Built-in escalation actions",
              right: "Workflow-based notifications and reassignment",
              highlight: true,
            },
            {
              feature: "SLA reporting",
              left: "SLA dashboard in Explore",
              right: "SLA performance in service analytics dashboards",
            },
          ]}
        />
      </ContentSection>

      {/* ================================================================
          PIPELINES & STATUSES
          ================================================================ */}
      <ContentSection
        id="pipelines"
        title="Ticket Pipelines & Statuses"
        badge="Planning Detail"
        background="white"
      >
        <p>
          Zendesk uses a flat set of statuses (New, Open, Pending, On-hold,
          Solved, Closed) that apply to all tickets. HubSpot takes a more
          flexible approach by allowing you to create multiple ticket pipelines,
          each with its own sequence of statuses. This is a significant
          advantage if your team handles different types of requests that follow
          different workflows &mdash; for example, a &ldquo;General
          Support&rdquo; pipeline with simple triage statuses and a &ldquo;Bug
          Reports&rdquo; pipeline with stages like Reported, Reproduced, In
          Development, QA, and Resolved.
        </p>
        <p>
          During planning, map your current Zendesk status usage to HubSpot
          pipeline stages. If you have been using tags or custom fields in
          Zendesk to differentiate ticket types, consider whether those
          distinctions would be better served by separate pipelines in HubSpot.
          Each pipeline can have its own automation rules, SLA targets, and
          reporting views, which keeps things clean and focused.
        </p>

        <CalloutBox type="info" title="Pipeline Design Principle">
          A good rule of thumb: if two types of tickets follow genuinely
          different resolution paths with different stages, they belong in
          separate pipelines. If they follow the same path but differ in
          priority or topic, keep them in the same pipeline and use properties
          (like category or priority) to differentiate.
        </CalloutBox>
      </ContentSection>

      {/* ================================================================
          FIRST INLINE CTA
          ================================================================ */}
      <InlineCTA
        title="Need help mapping your Zendesk configuration?"
        description="Our migration specialists can audit your current setup and build a detailed migration plan tailored to your team's workflows."
        primaryAction={{
          label: "Book a Migration Assessment",
          href: "/contact",
        }}
        secondaryAction={{
          label: "View Migration Services",
          href: "/services/crm-migration",
        }}
        variant="subtle"
      />

      {/* ================================================================
          AUTOMATION & WORKFLOWS
          ================================================================ */}
      <ContentSection
        id="automation"
        title="Automation & Workflows"
        badge="Planning Detail"
        background="gray"
      >
        <p>
          Automation is where the real operational value of any service platform
          lives, and it is also where migrations get the most complicated.
          Zendesk distributes automation across triggers (event-based),
          automations (time-based), and macros (agent-initiated). HubSpot
          centralizes most of this into its workflow engine, which supports
          event-based enrollment, time delays, conditional branching, and
          actions that span across CRM objects.
        </p>
        <p>
          The key shift in mindset is that HubSpot workflows can operate across
          contacts, companies, deals, and tickets simultaneously. A single
          workflow can be triggered by a ticket status change and then update the
          associated contact record, notify the account owner on the deal, and
          send a satisfaction survey &mdash; something that would require
          multiple Zendesk triggers plus external integrations to achieve.
        </p>

        <ProcessSteps
          variant="vertical"
          steps={[
            {
              number: "01",
              title: "Export and Catalog",
              description:
                "Export all Zendesk triggers, automations, and macros. Categorize each by function: routing, notifications, status updates, escalation, or customer communication.",
              details: [
                "Use Zendesk Admin > Business Rules to export triggers and automations",
                "Document macro names, actions, and which groups use them",
                "Note any triggers that call external APIs or webhooks",
              ],
            },
            {
              number: "02",
              title: "Assess and Prioritize",
              description:
                "Not every Zendesk automation needs to be migrated. Some may be outdated, redundant, or only necessary because of Zendesk-specific limitations. Identify which automations are business-critical and which can be retired.",
            },
            {
              number: "03",
              title: "Map to HubSpot Mechanisms",
              description:
                "For each automation you are keeping, determine the best HubSpot mechanism: workflow, inbox automation rule, SLA-based action, or manual process via playbook.",
              details: [
                "Event-based triggers → HubSpot workflows with ticket enrollment triggers",
                "Time-based automations → Workflow delays and re-enrollment logic",
                "Agent macros → Snippets, templates, or playbook steps",
              ],
            },
            {
              number: "04",
              title: "Build and Test",
              description:
                "Build each workflow in HubSpot, test with sample tickets, and verify the output matches your expected behavior before enabling for the full team.",
            },
          ]}
        />

        <CalloutBox type="warning" title="Watch for Webhook Dependencies">
          If your Zendesk triggers call external webhooks or APIs (for example,
          posting to Slack, updating an ERP, or syncing with a project
          management tool), make sure you replicate those integrations in
          HubSpot. Check HubSpot&apos;s native integrations marketplace first
          &mdash; there may be a built-in connector that replaces a custom
          webhook entirely.
        </CalloutBox>
      </ContentSection>

      {/* ================================================================
          CANNED RESPONSES & PLAYBOOKS
          ================================================================ */}
      <ContentSection
        id="canned-responses"
        title="Canned Responses & Playbooks"
        badge="Planning Detail"
        background="white"
      >
        <p>
          In Zendesk, macros serve as canned responses &mdash; pre-written
          replies and field updates that agents apply with a single click.
          HubSpot splits this functionality across two features: Snippets and
          Templates for canned text, and Playbooks for guided, multi-step agent
          workflows.
        </p>
        <p>
          Snippets are short, reusable text blocks that agents can insert into
          any email, chat, or note using a simple keyboard shortcut. They are
          ideal for common phrases, standard greetings, troubleshooting steps,
          or policy language. Templates are full email drafts with
          personalization tokens that pull data directly from the CRM &mdash;
          think of them as smart macros that automatically fill in the
          customer&apos;s name, company, ticket number, and other context.
        </p>
        <p>
          Playbooks go beyond what macros can do. They are interactive guides
          that walk agents through a structured process &mdash; for example, a
          churn-risk call script, a troubleshooting decision tree, or an
          onboarding checklist. Agents fill in fields as they go, and the
          responses are saved to the CRM record for future reference.
        </p>

        <ComparisonTable
          headers={["Zendesk Feature", "HubSpot Equivalent"]}
          rows={[
            {
              feature: "Simple canned reply",
              left: "Macro (text insertion)",
              right: "Snippet (reusable text block with shortcut)",
            },
            {
              feature: "Full email template",
              left: "Macro with placeholder variables",
              right: "Email template with CRM personalization tokens",
              highlight: true,
            },
            {
              feature: "Multi-step agent guide",
              left: "No direct equivalent (custom internal notes)",
              right: "Playbook with interactive fields and CRM logging",
              highlight: true,
            },
            {
              feature: "Bulk field updates",
              left: "Macro actions (set status, priority, tags)",
              right: "Workflow actions or manual property updates",
            },
          ]}
        />
      </ContentSection>

      {/* ================================================================
          SELF-SERVICE OFFERINGS
          ================================================================ */}
      <ContentSection
        id="self-service"
        title="Self-Service Offerings"
        badge="Empower Customers"
        background="gray"
      >
        <p>
          Self-service reduces ticket volume, improves customer satisfaction, and
          frees your agents to handle complex issues that genuinely require a
          human touch. Both Zendesk and HubSpot offer self-service capabilities,
          but HubSpot&apos;s approach integrates them tightly with the rest of
          the CRM, which opens up possibilities that a standalone help desk
          cannot match.
        </p>
        <p>
          The two primary self-service tools in HubSpot Service Hub are the
          Customer Portal and the Knowledge Base. Together, they give your
          customers the ability to find answers independently, track the status
          of open tickets, and submit new requests &mdash; all within a branded
          experience that feels like a natural extension of your product or
          website.
        </p>
      </ContentSection>

      {/* ================================================================
          CUSTOMER PORTAL
          ================================================================ */}
      <ContentSection
        id="customer-portal"
        title="Customer Portal"
        badge="Self-Service"
        background="white"
      >
        <p>
          HubSpot&apos;s Customer Portal gives your customers a private,
          login-protected space where they can view their open and historical
          tickets, check resolution status, reply to agents, and submit new
          requests. This is a significant upgrade if you have been relying on
          Zendesk&apos;s Help Center request form or email-only communication,
          because it gives customers visibility and control without adding to
          your team&apos;s workload.
        </p>
        <p>
          The portal is fully customizable to match your brand, and because it
          is tied to the CRM, access is managed through HubSpot contact records.
          You can control which tickets are visible, require authentication, and
          even segment portal access by customer tier or company. For B2B teams,
          this is particularly powerful &mdash; you can give an entire account
          team visibility into all tickets associated with their company.
        </p>

        <CalloutBox type="tip" title="Portal Adoption Strategy">
          Don&apos;t just build the portal and hope customers find it. Include a
          link to the portal in every ticket confirmation email, add it to your
          website navigation, and have agents proactively mention it during
          conversations. The faster you drive adoption, the faster you see
          ticket volume reduction.
        </CalloutBox>
      </ContentSection>

      {/* ================================================================
          KNOWLEDGE BASE
          ================================================================ */}
      <ContentSection
        id="knowledge-base"
        title="Knowledge Base"
        badge="Self-Service"
        background="gray"
      >
        <p>
          A well-structured knowledge base is the single most effective tool for
          reducing ticket volume. HubSpot&apos;s Knowledge Base (available in
          Service Hub Professional and above) supports categorized articles,
          multi-language content, search optimization, and access controls that
          let you publish articles publicly for all visitors or restrict them to
          logged-in customers.
        </p>
        <p>
          When migrating from Zendesk Guide, start by exporting your article
          inventory and categorizing each article by status: keep as-is,
          update and migrate, or retire. This is a natural opportunity to prune
          outdated content and consolidate articles that cover overlapping
          topics. HubSpot&apos;s knowledge base includes built-in analytics that
          show you which articles are most viewed, which have the highest search
          volume, and which are generating the most support tickets &mdash; data
          you can use to continuously improve your self-service content.
        </p>

        <ChecklistSection
          title="Knowledge Base Migration Steps"
          items={[
            {
              text: "Export all articles from Zendesk Guide",
              subItems: [
                "Article titles, bodies, and metadata",
                "Category and section structure",
                "Article visibility settings (public, agents-only, restricted)",
              ],
            },
            {
              text: "Audit articles for accuracy and relevance — retire outdated content",
            },
            {
              text: "Map Zendesk Guide categories to HubSpot knowledge base categories",
            },
            {
              text: "Import or recreate articles in HubSpot, preserving internal links",
            },
            {
              text: "Set up multi-language versions if applicable",
            },
            {
              text: "Configure SEO settings (meta descriptions, slugs, sitemaps)",
            },
            {
              text: "Test search functionality and article rendering across devices",
            },
          ]}
        />
      </ContentSection>

      {/* ================================================================
          SECOND INLINE CTA
          ================================================================ */}
      <InlineCTA
        title="Migrating hundreds of knowledge base articles?"
        description="We handle large-scale content migrations every month. Let us move your knowledge base without losing structure, SEO value, or internal links."
        primaryAction={{
          label: "Talk to a Migration Expert",
          href: "/contact",
        }}
        secondaryAction={{
          label: "See Our Process",
          href: "/services/crm-migration",
        }}
        variant="prominent"
      />

      {/* ================================================================
          FEEDBACK CHANNELS
          ================================================================ */}
      <ContentSection
        id="feedback-channels"
        title="Customer Feedback Channels"
        badge="Voice of the Customer"
        background="white"
      >
        <p>
          Customer feedback is one of the areas where HubSpot Service Hub
          significantly outpaces Zendesk. Zendesk natively supports CSAT surveys
          triggered at ticket resolution, and you can add third-party tools for
          NPS or other survey types. HubSpot, by contrast, includes four survey
          types out of the box: CSAT (Customer Satisfaction), NPS (Net Promoter
          Score), CES (Customer Effort Score), and fully custom surveys with
          unlimited questions and branching logic.
        </p>
        <p>
          What makes this particularly valuable is the automation layer.
          HubSpot surveys are tied to the CRM, which means you can trigger
          workflows based on survey responses: route detractors to a retention
          specialist, send promoters a referral request, or flag low-effort
          scores for process review. This closes the loop between feedback
          collection and action &mdash; something that requires third-party
          integrations in Zendesk.
        </p>

        <ComparisonTable
          headers={["Zendesk", "HubSpot Service Hub"]}
          caption="Customer feedback capabilities comparison"
          rows={[
            {
              feature: "CSAT Surveys",
              left: "Native, triggered at resolution",
              right: "Native, triggered by workflow, email, or link",
            },
            {
              feature: "NPS Surveys",
              left: "Requires third-party integration",
              right: "Native NPS with automated follow-up workflows",
              highlight: true,
            },
            {
              feature: "CES Surveys",
              left: "Requires third-party integration",
              right: "Native CES tied to ticket interactions",
              highlight: true,
            },
            {
              feature: "Custom Surveys",
              left: "Not available natively",
              right: "Custom surveys with branching logic and CRM data",
              highlight: true,
            },
            {
              feature: "Response-Based Automation",
              left: "Limited to CSAT follow-up triggers",
              right: "Full workflow automation on any survey response",
            },
            {
              feature: "Feedback Dashboards",
              left: "CSAT reporting in Explore",
              right: "Unified dashboard for all survey types with trend analysis",
            },
          ]}
        />

        <CalloutBox type="tip" title="Survey Strategy">
          Don&apos;t deploy all four survey types on day one. Start with CSAT at
          ticket resolution (since your team is already accustomed to this from
          Zendesk), then layer in NPS on a quarterly cadence after your team is
          settled. CES and custom surveys can follow once you have baseline data
          to improve against.
        </CalloutBox>
      </ContentSection>

      {/* ================================================================
          REPORTING & ANALYTICS
          ================================================================ */}
      <ContentSection
        id="reporting"
        title="Reporting & Analytics"
        badge="Measure What Matters"
        background="gray"
      >
        <p>
          Reporting is where HubSpot&apos;s unified CRM architecture delivers
          compounding returns. In Zendesk, you have Explore for service
          analytics &mdash; a capable tool, but one that can only report on data
          within the Zendesk ecosystem. HubSpot&apos;s reporting engine draws
          from every object in the CRM: contacts, companies, deals, tickets,
          marketing activities, and custom objects. This means you can build
          reports that answer questions Zendesk simply cannot, like &ldquo;What
          is the average CSAT score for customers whose deal closed in Q4?&rdquo;
          or &ldquo;How many tickets have been submitted by contacts in our
          enterprise segment who also have an active deal in the pipeline?&rdquo;
        </p>
        <p>
          HubSpot includes pre-built service analytics dashboards covering
          ticket volume, response time, resolution time, SLA performance, agent
          productivity, and customer satisfaction trends. Beyond the defaults,
          the custom report builder lets you create any report by combining
          data sources and applying filters, date ranges, and groupings. You
          can also set goals &mdash; measurable targets tied to specific metrics
          &mdash; and track progress against them on shared dashboards.
        </p>

        <StatHighlight
          stats={[
            { value: "Cross-CRM", label: "Reports spanning tickets, deals & contacts" },
            { value: "Goals", label: "Measurable targets with real-time tracking" },
            { value: "Custom", label: "Build any report with the drag-and-drop builder" },
            { value: "Shared", label: "Team dashboards with scheduled email delivery" },
          ]}
          variant="cards"
        />

        <CalloutBox type="info" title="Recreate Before You Replace">
          Before building new reports in HubSpot, start by recreating the
          dashboards your team currently relies on in Zendesk Explore. This
          ensures continuity and makes the transition less jarring for managers
          who depend on those metrics daily. Once the baseline reports are
          running, you can layer in the cross-CRM insights that HubSpot makes
          possible.
        </CalloutBox>
      </ContentSection>

      {/* ================================================================
          DATA MIGRATION
          ================================================================ */}
      <ContentSection
        id="data-migration"
        title="Data Migration"
        badge="Phase 2"
        background="white"
      >
        <p>
          Data migration is the most technically demanding phase of any platform
          switch, and a Zendesk-to-HubSpot migration is no exception. You are
          moving ticket records, customer data, interaction history, and the
          relationships between all of those objects. The goal is not just to
          transfer data, but to transfer it cleanly &mdash; with accurate field
          mappings, preserved associations, and no duplicates.
        </p>
        <p>
          Start with a comprehensive property mapping exercise. Every Zendesk
          ticket field, user field, and organization field needs a corresponding
          property in HubSpot. Some mappings are straightforward (subject maps
          to ticket name, requester maps to contact). Others require
          transformation &mdash; for example, Zendesk tags might map to HubSpot
          multi-select properties, and Zendesk organization fields might map to
          company-level properties in HubSpot.
        </p>

        <ProcessSteps
          variant="vertical"
          steps={[
            {
              number: "01",
              title: "Property Mapping",
              description:
                "Create a spreadsheet mapping every Zendesk field to its HubSpot equivalent. Include data type, required vs. optional, and any value transformations needed.",
              details: [
                "Ticket fields → Ticket properties",
                "User fields → Contact properties",
                "Organization fields → Company properties",
                "Tags → Multi-select properties or custom properties",
                "Custom fields → Custom HubSpot properties (create as needed)",
              ],
            },
            {
              number: "02",
              title: "Custom Object Assessment",
              description:
                "If you use Zendesk's custom objects or relationship records, evaluate whether these map to HubSpot's custom objects or can be represented through existing object types and associations.",
            },
            {
              number: "03",
              title: "Activity Data Planning",
              description:
                "Decide which activity data to migrate: email conversations, internal notes, call logs, and task records. Activity data preserves customer context but can significantly increase migration complexity and timeline.",
              details: [
                "Email threads on tickets → Email activities on contact/ticket records",
                "Internal notes → Notes associated with HubSpot ticket records",
                "Call logs → Call activities on contact records",
                "Tasks → HubSpot tasks with owner assignment",
              ],
            },
            {
              number: "04",
              title: "Choose Migration Method",
              description:
                "Select the migration approach that fits your data volume and complexity. Options range from manual CSV import for small datasets to third-party migration tools for large, complex environments.",
              details: [
                "HubSpot native import (CSV) — Best for <10,000 records with simple mappings",
                "Trujay — Automated migration tool with field mapping UI",
                "Help Desk Migration — Specialized Zendesk-to-HubSpot migration service",
                "Import2 — Mid-market migration tool with data transformation capabilities",
                "Custom API migration — For complex environments with custom objects and heavy automation",
              ],
            },
            {
              number: "05",
              title: "Test Migration",
              description:
                "Run a test migration with a representative sample of your data. Verify field mappings, association integrity, and activity data accuracy before committing to the full migration.",
            },
          ]}
        />

        <CalloutBox type="warning" title="Association Integrity Is Critical">
          The most common data migration failure is broken associations.
          Tickets must be linked to the correct contacts and companies.
          Activities must be associated with the right records. After your test
          migration, spot-check at least 50 records to verify that associations
          are intact. A single broken link between a ticket and its customer
          renders that ticket&apos;s history essentially useless.
        </CalloutBox>
      </ContentSection>

      {/* ================================================================
          CONFIGURATION & SETUP
          ================================================================ */}
      <ContentSection
        id="configuration"
        title="Configuration & Setup"
        badge="Phase 3"
        background="gray"
      >
        <p>
          With your data migrated and verified, it is time to configure the
          operational layer of HubSpot Service Hub. This is where all the
          planning you did in Phase 1 becomes reality: standing up intake
          channels, building routing rules, enabling SLAs, configuring
          pipelines, and deploying automation. The order matters &mdash; some
          configurations depend on others being in place first.
        </p>

        <ProcessSteps
          variant="vertical"
          steps={[
            {
              number: "01",
              title: "Connect Intake Channels",
              description:
                "Set up connected inboxes for each support email address, configure Facebook Messenger integration, deploy HubSpot forms for web-based submissions, and install chat widgets on your site.",
            },
            {
              number: "02",
              title: "Configure Chat Widgets & Chatflows",
              description:
                "Build your chat widgets with targeting rules, create bot flows for common inquiries, and set up live chat routing to the appropriate teams.",
            },
            {
              number: "03",
              title: "Set Up Ticket Routing",
              description:
                "Configure inbox-level assignment rules, build routing workflows for complex scenarios, and enable capacity-based distribution if available on your plan.",
            },
            {
              number: "04",
              title: "Enable SLA Policies",
              description:
                "Define SLA rules per pipeline and priority level, configure business hours, and build workflows for breach notifications and escalation actions.",
            },
            {
              number: "05",
              title: "Build Ticket Pipelines & Properties",
              description:
                "Create your ticket pipelines with the status stages mapped during planning. Configure ticket properties, required fields, and conditional logic.",
            },
            {
              number: "06",
              title: "Deploy Automation & Workflows",
              description:
                "Build the workflows mapped from your Zendesk triggers and automations. Test each workflow with sample records before activating.",
            },
            {
              number: "07",
              title: "Create Templates, Snippets & Playbooks",
              description:
                "Migrate your canned responses into HubSpot snippets and email templates. Build playbooks for guided agent workflows like escalation procedures or churn-prevention calls.",
            },
          ]}
        />

        <CalloutBox type="tip" title="Configuration Order">
          Follow this order: channels first, then routing, then SLAs, then
          pipelines, then automation. Each layer builds on the previous one.
          Trying to configure automation before your pipelines and routing are
          set up will create unnecessary rework.
        </CalloutBox>
      </ContentSection>

      {/* ================================================================
          TESTING & PILOT
          ================================================================ */}
      <ContentSection
        id="testing"
        title="Testing & Pilot"
        badge="Phase 4"
        background="white"
      >
        <p>
          Before rolling out to your entire support team, run a controlled pilot
          with a small group of agents. We recommend selecting three to five
          experienced agents who represent different teams or specializations,
          and having them handle real tickets in HubSpot for a minimum of two
          weeks. This pilot period surfaces configuration issues, workflow gaps,
          and usability concerns that are impossible to catch in a sandbox.
        </p>
        <p>
          During the pilot, run Zendesk and HubSpot in parallel. Route a
          defined subset of tickets to HubSpot (for example, all tickets from a
          specific email address or customer segment) while keeping the bulk of
          your volume in Zendesk. This limits risk while giving you real-world
          data on how the new system performs under actual operating conditions.
        </p>

        <ChecklistSection
          title="Pilot Validation Checklist"
          items={[
            {
              text: "Tickets are created correctly from all configured intake channels",
            },
            {
              text: "Routing rules assign tickets to the correct teams and agents",
            },
            {
              text: "SLA timers start and breach notifications fire as expected",
            },
            {
              text: "Automation workflows trigger on the correct conditions",
            },
            {
              text: "Snippets, templates, and playbooks work within the agent workflow",
            },
            {
              text: "Customer portal displays tickets and allows replies",
            },
            {
              text: "Knowledge base articles are accessible and searchable",
            },
            {
              text: "Reports and dashboards reflect accurate, real-time data",
            },
            {
              text: "Agents can handle end-to-end ticket lifecycle without blockers",
            },
            {
              text: "Pilot agents provide feedback on usability and missing functionality",
            },
          ]}
        />

        <CalloutBox type="example" title="Pilot Success Criteria">
          Define clear pass/fail criteria before the pilot starts. For example:
          95% of tickets routed correctly, SLA breach rate below 5%, zero
          data-loss incidents, and pilot agents rate usability at 7/10 or
          higher. If the pilot does not meet these thresholds, extend it and
          address the gaps before proceeding to go-live.
        </CalloutBox>
      </ContentSection>

      {/* ================================================================
          GO-LIVE
          ================================================================ */}
      <ContentSection
        id="go-live"
        title="Go-Live"
        badge="Phase 5"
        background="gray"
      >
        <p>
          Go-live is the day your entire support team switches from Zendesk to
          HubSpot. A successful cutover depends on thorough preparation in the
          days and weeks leading up to it, particularly around user setup,
          training, and the final data sync. Plan your go-live for a day with
          historically low ticket volume &mdash; typically a Tuesday or
          Wednesday &mdash; and make sure your migration team is available for
          the entire day to handle issues in real time.
        </p>

        <ProcessSteps
          variant="vertical"
          steps={[
            {
              number: "01",
              title: "User Setup",
              description:
                "Create HubSpot user accounts for every agent. Configure roles and permissions, assign teams, and set notification profiles. Each agent should have their inbox, notification preferences, and default pipeline configured before they log in for the first time.",
              details: [
                "Roles: define what each user can view, edit, and delete",
                "Teams: group agents by function, region, or specialization",
                "Notifications: configure email and in-app notification preferences",
                "Signatures: set up email signatures with correct branding",
              ],
            },
            {
              number: "02",
              title: "Training",
              description:
                "Conduct hands-on training sessions for all agents. Cover the daily workflow: navigating the inbox, responding to tickets, using snippets and playbooks, accessing customer context, and escalating issues. Training should be role-specific — tier-1 agents need different depth than team leads.",
              details: [
                "60-minute live walkthrough of the HubSpot service interface",
                "15-minute quick-reference guide for common actions",
                "Office hours during the first week for real-time questions",
              ],
            },
            {
              number: "03",
              title: "Delta Migration",
              description:
                "Run a final data sync to capture any tickets, contacts, or updates created in Zendesk since your initial migration. This delta migration ensures nothing falls through the cracks during the transition window.",
            },
            {
              number: "04",
              title: "Channel Cutover",
              description:
                "Redirect all intake channels to HubSpot: update email forwarding rules, swap chat widget code on your website, reconnect Facebook Messenger to HubSpot, and update form endpoints. Verify each channel with a test message.",
            },
            {
              number: "05",
              title: "Monitor and Support",
              description:
                "Have your migration team actively monitoring the system for the first 48 hours. Watch for routing failures, missed SLAs, automation errors, and agent-reported issues. Fix problems immediately — the first day sets the tone for adoption.",
            },
          ]}
        />

        <CalloutBox type="warning" title="Do Not Skip Delta Migration">
          If there is any gap between your initial data migration and go-live,
          new tickets and updates will have been created in Zendesk during that
          window. A delta migration captures those changes and ensures your
          HubSpot instance is fully current on day one. Skipping this step
          means agents will be missing recent ticket history, which erodes trust
          in the new system immediately.
        </CalloutBox>
      </ContentSection>

      {/* ================================================================
          POST-MIGRATION
          ================================================================ */}
      <ContentSection
        id="post-migration"
        title="Post-Migration Optimization"
        badge="Phase 6"
        background="white"
      >
        <p>
          Migration is not a project with a finish line &mdash; it is the
          beginning of a new operational chapter. The first 30 to 90 days after
          go-live are critical for identifying optimization opportunities,
          addressing adoption challenges, and tuning the system based on
          real-world usage patterns. Set up a structured review cadence and
          designate a HubSpot admin (or team) responsible for ongoing
          configuration and improvement.
        </p>

        <ProcessSteps
          variant="horizontal"
          steps={[
            {
              number: "W1",
              title: "Stabilize",
              description:
                "Monitor daily. Fix routing errors, automation misfires, and usability issues reported by agents. Hold daily standups with the migration team.",
            },
            {
              number: "W2-4",
              title: "Optimize",
              description:
                "Review SLA performance, refine routing rules, and adjust automation based on real ticket data. Start building reports that leverage cross-CRM data.",
            },
            {
              number: "M2-3",
              title: "Expand",
              description:
                "Deploy customer portal and knowledge base improvements. Roll out NPS/CES surveys. Build advanced workflows for escalation and customer health scoring.",
            },
            {
              number: "Q2+",
              title: "Scale",
              description:
                "Document your service processes. Build training materials for new hires. Evaluate additional HubSpot features like custom objects, AI tools, and advanced reporting.",
            },
          ]}
        />

        <ChecklistSection
          title="Post-Migration Review Items"
          items={[
            {
              text: "Review and optimize ticket routing accuracy weekly for the first month",
            },
            {
              text: "Monitor SLA compliance rates and adjust targets if needed",
            },
            {
              text: "Gather agent feedback on the new workflow and address friction points",
            },
            {
              text: "Compare service metrics (resolution time, CSAT, volume) to Zendesk baseline",
            },
            {
              text: "Document all configuration decisions and process changes",
              subItems: [
                "Pipeline and status definitions",
                "Routing rules and assignment logic",
                "Automation workflows and their trigger conditions",
                "SLA policies and escalation procedures",
              ],
            },
            {
              text: "Schedule quarterly reviews to assess and refine your HubSpot Service Hub setup",
            },
          ]}
        />

        <CalloutBox type="tip" title="Track Your Wins">
          As soon as you have two to three months of data in HubSpot, build a
          migration impact report comparing key metrics against your Zendesk
          baseline: average resolution time, first response time, CSAT score,
          tickets per agent, and self-service deflection rate. This report
          justifies the migration investment to leadership and identifies
          areas where you are already outperforming your old platform &mdash;
          as well as areas that still need attention.
        </CalloutBox>
      </ContentSection>

      {/* ================================================================
          FINAL INLINE CTA
          ================================================================ */}
      <InlineCTA
        title="Ready to migrate from Zendesk to HubSpot?"
        description="We've migrated dozens of teams from Zendesk to HubSpot Service Hub. Let's build a migration plan that minimizes disruption and maximizes your team's new capabilities."
        primaryAction={{
          label: "Start Your Migration",
          href: "/contact",
        }}
        secondaryAction={{
          label: "Explore Our Migration Services",
          href: "/services/crm-migration",
        }}
        variant="prominent"
      />

      {/* ================================================================
          RELATED GUIDES & CTA BANNER
          ================================================================ */}
      <RelatedGuides guides={related} />
      <CTABanner />
    </PillarPageLayout>
  );
}
