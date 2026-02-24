export interface GuideToC {
  id: string;
  title: string;
  level: 1 | 2;
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  featured: boolean;
  hasDetailPage: boolean;
  tableOfContents: GuideToC[];
  relatedServiceHref?: string;
  publishDate: string;
  lastUpdated: string;
}

export const guides: Guide[] = [
  {
    slug: "zendesk-to-hubspot",
    title: "The Complete Guide to Migrating from Zendesk to HubSpot Service Hub",
    description:
      "Everything you need to plan and execute a seamless Zendesk to HubSpot Service Hub migration — from intake channels and SLAs to data migration and go-live.",
    category: "Migration",
    readTime: "45 min read",
    featured: true,
    hasDetailPage: true,
    tableOfContents: [
      { id: "why-migrate", title: "Why Migrate to HubSpot Service Hub", level: 1 },
      { id: "pre-migration-planning", title: "Pre-Migration Planning", level: 1 },
      { id: "intake-channels", title: "Intake Channels", level: 2 },
      { id: "chat-widgets", title: "Chat Widgets & Chatflows", level: 2 },
      { id: "ticket-routing", title: "Ticket & Conversation Routing", level: 2 },
      { id: "slas", title: "Service Level Agreements", level: 2 },
      { id: "pipelines", title: "Ticket Pipelines & Statuses", level: 2 },
      { id: "automation", title: "Automation & Workflows", level: 2 },
      { id: "canned-responses", title: "Canned Responses & Playbooks", level: 2 },
      { id: "self-service", title: "Self-Service Offerings", level: 1 },
      { id: "customer-portal", title: "Customer Portal", level: 2 },
      { id: "knowledge-base", title: "Knowledge Base", level: 2 },
      { id: "feedback-channels", title: "Customer Feedback Channels", level: 1 },
      { id: "reporting", title: "Reporting & Analytics", level: 1 },
      { id: "data-migration", title: "Data Migration", level: 1 },
      { id: "configuration", title: "Configuration & Setup", level: 1 },
      { id: "testing", title: "Testing & Pilot", level: 1 },
      { id: "go-live", title: "Go-Live", level: 1 },
      { id: "post-migration", title: "Post-Migration Optimization", level: 1 },
    ],
    relatedServiceHref: "/services/crm-migration",
    publishDate: "2026-02-01",
    lastUpdated: "2026-02-23",
  },
  {
    slug: "operations-hub-playbook",
    title: "The Operations Hub Playbook: Blueprints for RevOps Teams",
    description:
      "Practical blueprints for HubSpot Operations Hub — data architecture, integrations without middleware, advanced automation, smart routing, and custom objects.",
    category: "Operations",
    readTime: "30 min read",
    featured: true,
    hasDetailPage: true,
    tableOfContents: [
      { id: "what-is-operations-hub", title: "What Is Operations Hub", level: 1 },
      { id: "data-architecture", title: "Data Architecture", level: 1 },
      { id: "sdr-reporting", title: "SDR Reporting with Single Object Fields", level: 2 },
      { id: "crm-hygiene", title: "Automated CRM Hygiene", level: 2 },
      { id: "advanced-attribution", title: "Advanced Single Object Reporting", level: 2 },
      { id: "integrations", title: "Integrations Without Middleware", level: 1 },
      { id: "finance-integration", title: "Finance Tool Integration", level: 2 },
      { id: "pull-integrations", title: "Pull Integrations for Data Enrichment", level: 2 },
      { id: "data-transformation", title: "Data Transformation & Migration", level: 2 },
      { id: "advanced-automation", title: "Advanced Workflow Automation", level: 1 },
      { id: "cms-automation", title: "CMS Pages from CRM Data", level: 2 },
      { id: "referral-programs", title: "Referral Programs in HubSpot", level: 2 },
      { id: "renewal-automation", title: "Renewal Deal Automation", level: 2 },
      { id: "data-routing", title: "Data Routing & Assignment", level: 1 },
      { id: "capacity-routing", title: "Capacity-Based Ticket Assignment", level: 2 },
      { id: "deal-assignment", title: "Advanced Deal Assignment", level: 2 },
      { id: "forecasting", title: "Advanced Forecasting", level: 2 },
      { id: "custom-objects", title: "Custom Objects", level: 1 },
      { id: "saas-extension", title: "Extending HubSpot into SaaS Apps", level: 2 },
      { id: "native-apps", title: "Building Native HubSpot Applications", level: 2 },
    ],
    relatedServiceHref: "/services/integrations",
    publishDate: "2026-02-01",
    lastUpdated: "2026-02-23",
  },
  {
    slug: "salesforce-to-hubspot",
    title: "The Ultimate Salesforce to HubSpot Migration Guide",
    description:
      "A complete roadmap for migrating from Salesforce to HubSpot — covering evaluation, data cleanup, field mapping, migration methods, QA, training, and post-migration management.",
    category: "Migration",
    readTime: "40 min read",
    featured: true,
    hasDetailPage: true,
    tableOfContents: [
      { id: "why-hubspot", title: "Why Migrate to HubSpot", level: 1 },
      { id: "conversion-table", title: "Salesforce to HubSpot Conversion Table", level: 1 },
      { id: "pre-migration", title: "Pre-Migration", level: 1 },
      { id: "evaluate-needs", title: "Evaluate Migration & Translation Needs", level: 2 },
      { id: "data-cleanup", title: "Clean Up Your Salesforce Data", level: 2 },
      { id: "backup", title: "Back Up Your Data", level: 2 },
      { id: "migration-plan", title: "Create a Migration Plan", level: 2 },
      { id: "migration", title: "Migration", level: 1 },
      { id: "configure-hubspot", title: "Configure Your HubSpot Instance", level: 2 },
      { id: "data-import", title: "Migrate Your Data", level: 2 },
      { id: "custom-objects-api", title: "Custom Objects & APIs", level: 2 },
      { id: "qa-testing", title: "QA & Testing", level: 2 },
      { id: "go-live", title: "Go Live", level: 2 },
      { id: "post-migration", title: "Post-Migration", level: 1 },
      { id: "team-training", title: "Get Your Teams Up to Speed", level: 2 },
      { id: "data-management", title: "Prioritize Data Management", level: 2 },
    ],
    relatedServiceHref: "/services/crm-migration",
    publishDate: "2026-02-01",
    lastUpdated: "2026-02-23",
  },
  // Existing placeholder guides (no detail pages yet)
  {
    slug: "complete-crm-implementation",
    title: "The Complete CRM Implementation Guide",
    description: "Everything you need to know about implementing your CRM successfully, from planning to go-live.",
    category: "Implementation",
    readTime: "25 min read",
    featured: false,
    hasDetailPage: false,
    tableOfContents: [],
    publishDate: "2026-01-15",
    lastUpdated: "2026-01-15",
  },
  {
    slug: "hubspot-vs-salesforce",
    title: "HubSpot vs Salesforce: A Detailed Comparison",
    description: "An honest comparison of features, pricing, and use cases to help you choose the right CRM.",
    category: "CRM",
    readTime: "15 min read",
    featured: false,
    hasDetailPage: false,
    tableOfContents: [],
    publishDate: "2026-01-15",
    lastUpdated: "2026-01-15",
  },
  {
    slug: "marketing-automation-best-practices",
    title: "Marketing Automation Best Practices",
    description: "Learn how to build effective marketing automation workflows that convert leads to customers.",
    category: "Automation",
    readTime: "12 min read",
    featured: false,
    hasDetailPage: false,
    tableOfContents: [],
    publishDate: "2026-01-15",
    lastUpdated: "2026-01-15",
  },
  {
    slug: "lead-scoring-b2b",
    title: "Lead Scoring for B2B Companies",
    description: "How to build a lead scoring model that actually predicts which leads will convert.",
    category: "Sales",
    readTime: "8 min read",
    featured: false,
    hasDetailPage: false,
    tableOfContents: [],
    publishDate: "2026-01-15",
    lastUpdated: "2026-01-15",
  },
  {
    slug: "hubspot-reporting-attribution",
    title: "HubSpot Reporting & Attribution",
    description: "Set up reporting dashboards that give you real visibility into marketing and sales performance.",
    category: "Analytics",
    readTime: "14 min read",
    featured: false,
    hasDetailPage: false,
    tableOfContents: [],
    publishDate: "2026-01-15",
    lastUpdated: "2026-01-15",
  },
  {
    slug: "revops-fundamentals",
    title: "Revenue Operations Fundamentals",
    description: "A practical guide to implementing RevOps at your company, including team structure and metrics.",
    category: "RevOps",
    readTime: "18 min read",
    featured: false,
    hasDetailPage: false,
    tableOfContents: [],
    publishDate: "2026-01-15",
    lastUpdated: "2026-01-15",
  },
  {
    slug: "hubspot-api-integrations",
    title: "HubSpot API & Custom Integrations",
    description: "Technical guide to building custom integrations with HubSpot using their APIs.",
    category: "Technical",
    readTime: "20 min read",
    featured: false,
    hasDetailPage: false,
    tableOfContents: [],
    publishDate: "2026-01-15",
    lastUpdated: "2026-01-15",
  },
  {
    slug: "email-deliverability",
    title: "Email Deliverability Best Practices",
    description: "Ensure your emails reach the inbox with these proven deliverability strategies.",
    category: "Email",
    readTime: "11 min read",
    featured: false,
    hasDetailPage: false,
    tableOfContents: [],
    publishDate: "2026-01-15",
    lastUpdated: "2026-01-15",
  },
  {
    slug: "sales-enablement-hubspot",
    title: "Sales Enablement with HubSpot",
    description: "Equip your sales team with the tools and content they need to close more deals.",
    category: "Sales",
    readTime: "13 min read",
    featured: false,
    hasDetailPage: false,
    tableOfContents: [],
    publishDate: "2026-01-15",
    lastUpdated: "2026-01-15",
  },
  {
    slug: "hubspot-for-saas",
    title: "HubSpot for SaaS Companies",
    description: "Industry-specific guide for implementing HubSpot to drive subscription growth.",
    category: "Industry",
    readTime: "16 min read",
    featured: false,
    hasDetailPage: false,
    tableOfContents: [],
    publishDate: "2026-01-15",
    lastUpdated: "2026-01-15",
  },
  {
    slug: "customer-success-automation",
    title: "Customer Success Automation",
    description: "Build automated workflows that improve customer retention and expansion revenue.",
    category: "Success",
    readTime: "9 min read",
    featured: false,
    hasDetailPage: false,
    tableOfContents: [],
    publishDate: "2026-01-15",
    lastUpdated: "2026-01-15",
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getFeaturedGuides(): Guide[] {
  return guides.filter((g) => g.featured && g.hasDetailPage);
}

export function getGuidesByCategory(category: string): Guide[] {
  if (category === "All") return guides;
  return guides.filter((g) => g.category === category);
}

export function getRelatedGuides(currentSlug: string, limit = 3): Guide[] {
  const current = getGuideBySlug(currentSlug);
  if (!current) return [];

  return guides
    .filter((g) => g.slug !== currentSlug && g.hasDetailPage)
    .sort((a, b) => (a.category === current.category ? -1 : b.category === current.category ? 1 : 0))
    .slice(0, limit);
}
