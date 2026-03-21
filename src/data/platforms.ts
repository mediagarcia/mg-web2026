// ── Types ──────────────────────────────────────────────────────────────

export type PlatformCategory =
  | "CRM & Sales"
  | "Sales Engagement"
  | "Automation & iPaaS"
  | "Data & Intelligence"
  | "ERP & Finance"
  | "AI & LLM";

export type PlatformTier = "Primary" | "Supporting" | "Connector";

export type IntegrationApproachId = "native" | "third-party" | "custom";

export interface Platform {
  id: string;
  name: string;
  category: PlatformCategory;
  tier: PlatformTier;
  relationship: string;
  brandColor: string;
  description: string;
}

export interface CategoryMeta {
  label: PlatformCategory;
  icon: string; // icon identifier used in PlatformCategories
  description: string;
}

export interface IntegrationApproach {
  id: IntegrationApproachId;
  title: string;
  description: string;
  example: string;
  color: string; // tailwind-compatible color token
  platformIds: string[];
}

// ── Platform Data ──────────────────────────────────────────────────────

export const platforms: Platform[] = [
  // CRM & Sales — HubSpot always leads
  {
    id: "hubspot",
    name: "HubSpot",
    category: "CRM & Sales",
    tier: "Primary",
    relationship: "Gold Partner",
    brandColor: "#ff7a59",
    description:
      "Our core platform — we build, migrate, and optimize across every Hub.",
  },

  // AI & LLM — complex, cutting-edge
  {
    id: "claude",
    name: "Claude",
    category: "AI & LLM",
    tier: "Primary",
    relationship: "We build with",
    brandColor: "#d97757",
    description:
      "Long-form analysis, complex reasoning, and safety-critical AI tasks.",
  },
  {
    id: "gemini",
    name: "Gemini",
    category: "AI & LLM",
    tier: "Supporting",
    relationship: "We build with",
    brandColor: "#4285f4",
    description:
      "Multi-modal AI for data analysis, structured extraction, and image generation.",
  },
  {
    id: "openai",
    name: "GPT",
    category: "AI & LLM",
    tier: "Supporting",
    relationship: "We build with",
    brandColor: "#10a37f",
    description:
      "Creative content, conversational AI, and code generation.",
  },
  {
    id: "openclaw",
    name: "OpenClaw",
    category: "AI & LLM",
    tier: "Supporting",
    relationship: "We deploy with",
    brandColor: "#e74c3c",
    description:
      "Open-source autonomous AI agent framework for local-first deployments.",
  },
  {
    id: "nemoclaw",
    name: "NemoClaw",
    category: "AI & LLM",
    tier: "Supporting",
    relationship: "We secure with",
    brandColor: "#76b900",
    description:
      "NVIDIA enterprise security and sandboxing layer for AI agents.",
  },

  // CRM & Sales
  {
    id: "salesforce",
    name: "Salesforce",
    category: "CRM & Sales",
    tier: "Supporting",
    relationship: "We integrate & migrate",
    brandColor: "#00a1e0",
    description:
      "Full migration and bi-directional sync expertise with HubSpot.",
  },

  // Data & Intelligence
  {
    id: "clay",
    name: "Clay",
    category: "Data & Intelligence",
    tier: "Supporting",
    relationship: "We enrich with",
    brandColor: "#2d2d2d",
    description:
      "Waterfall data enrichment to supercharge prospecting lists.",
  },
  {
    id: "zoominfo",
    name: "ZoomInfo",
    category: "Data & Intelligence",
    tier: "Supporting",
    relationship: "We enrich with",
    brandColor: "#21b573",
    description:
      "B2B intent data and contact intelligence piped into your CRM.",
  },
  {
    id: "powerbi",
    name: "Power BI",
    category: "Data & Intelligence",
    tier: "Supporting",
    relationship: "We report with",
    brandColor: "#f2c811",
    description:
      "Advanced dashboards connecting CRM data to business KPIs.",
  },
  {
    id: "databox",
    name: "Databox",
    category: "Data & Intelligence",
    tier: "Supporting",
    relationship: "We report with",
    brandColor: "#29b6f6",
    description:
      "Real-time performance dashboards for marketing and sales.",
  },

  // Sales Engagement
  {
    id: "apollo",
    name: "Apollo.io",
    category: "Sales Engagement",
    tier: "Supporting",
    relationship: "We integrate",
    brandColor: "#6f3cfa",
    description:
      "Prospecting data enrichment and outbound sequence integration.",
  },
  {
    id: "salesloft",
    name: "Salesloft",
    category: "Sales Engagement",
    tier: "Supporting",
    relationship: "We integrate",
    brandColor: "#0075e3",
    description:
      "Enterprise cadence management connected to HubSpot workflows.",
  },
  {
    id: "outreach",
    name: "Outreach",
    category: "Sales Engagement",
    tier: "Supporting",
    relationship: "We integrate",
    brandColor: "#5951ff",
    description:
      "Sales engagement platform synced with CRM for full pipeline visibility.",
  },

  // Automation & iPaaS
  {
    id: "zapier",
    name: "Zapier",
    category: "Automation & iPaaS",
    tier: "Supporting",
    relationship: "We build with",
    brandColor: "#ff4a00",
    description:
      "No-code automations connecting thousands of apps to your CRM.",
  },
  {
    id: "make",
    name: "Make",
    category: "Automation & iPaaS",
    tier: "Supporting",
    relationship: "We build with",
    brandColor: "#6d00cc",
    description:
      "Visual workflow builder for complex multi-step integrations.",
  },
  {
    id: "tray",
    name: "Tray.io",
    category: "Automation & iPaaS",
    tier: "Supporting",
    relationship: "We build with",
    brandColor: "#2196f3",
    description:
      "Enterprise iPaaS for mission-critical process automation.",
  },

  // ERP & Finance
  {
    id: "netsuite",
    name: "NetSuite",
    category: "ERP & Finance",
    tier: "Connector",
    relationship: "We connect to",
    brandColor: "#1a73e8",
    description:
      "CRM-to-ERP sync for quotes, invoices, and revenue reporting.",
  },
  {
    id: "sage",
    name: "Sage",
    category: "ERP & Finance",
    tier: "Connector",
    relationship: "We connect to",
    brandColor: "#00dc00",
    description:
      "Accounting and ERP integration with bi-directional data flow.",
  },
];

// ── Category Metadata ──────────────────────────────────────────────────

export const categories: CategoryMeta[] = [
  {
    label: "CRM & Sales",
    icon: "crm",
    description: "Core CRM platforms we implement, migrate, and optimize",
  },
  {
    label: "Sales Engagement",
    icon: "engagement",
    description: "Outbound and sequencing tools we integrate with your CRM",
  },
  {
    label: "Automation & iPaaS",
    icon: "automation",
    description: "Workflow and integration platforms we build automations on",
  },
  {
    label: "Data & Intelligence",
    icon: "data",
    description: "Enrichment, intent, and reporting tools we connect",
  },
  {
    label: "ERP & Finance",
    icon: "erp",
    description: "Back-office systems we bridge to your revenue stack",
  },
  {
    label: "AI & LLM",
    icon: "ai",
    description: "AI models and agent frameworks we build intelligent systems with",
  },
];

// ── Integration Approaches ─────────────────────────────────────────────

export const integrationApproaches: IntegrationApproach[] = [
  {
    id: "native",
    title: "Native Integrations",
    description:
      "Built-in marketplace connectors maintained by platform vendors. Zero middleware, real-time sync, minimal maintenance.",
    example: "HubSpot ↔ Salesforce native sync",
    color: "teal",
    platformIds: ["hubspot", "salesforce", "salesloft", "zoominfo", "databox"],
  },
  {
    id: "third-party",
    title: "Third-Party iPaaS",
    description:
      "Managed integration platforms that connect apps without custom code. Ideal for multi-step workflows across 3+ tools.",
    example: "Zapier / Make connecting CRM → ERP → Slack",
    color: "purple",
    platformIds: ["zapier", "make", "tray", "clay", "apollo"],
  },
  {
    id: "custom",
    title: "Custom-Built",
    description:
      "API-level integrations built to spec when off-the-shelf won't cut it. Full control, tailored logic, enterprise-grade.",
    example: "HubSpot ↔ NetSuite quote-to-cash pipeline",
    color: "orange",
    platformIds: ["hubspot", "netsuite", "sage", "outreach"],
  },
];

// ── Helpers ────────────────────────────────────────────────────────────

export function getPlatformsByCategory(category: PlatformCategory): Platform[] {
  return platforms.filter((p) => p.category === category);
}

export function getPlatformById(id: string): Platform | undefined {
  return platforms.find((p) => p.id === id);
}

export const hubSpotHubs = [
  { name: "Marketing Hub", icon: "marketing" },
  { name: "Sales Hub", icon: "sales" },
  { name: "Service Hub", icon: "service" },
  { name: "CMS Hub", icon: "cms" },
  { name: "Operations Hub", icon: "operations" },
] as const;
