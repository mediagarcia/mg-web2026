export type PortfolioCategory =
  | "tools"
  | "experiments"
  | "email"
  | "websites"
  | "integrations"
  | "reports";

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  image: string;
  video?: string;
  liveUrl?: string;
  isLive: boolean;
  tags: string[];
  techStack: string[];
  featured?: boolean;
  whatItDoes: string;
  whyWeBuiltIt: string;
  screenshots?: string[];
}

export const categories = [
  { id: "all", label: "All Work" },
  { id: "tools", label: "Tools & Apps" },
  { id: "experiments", label: "AI Experiments" },
  { id: "email", label: "Email Templates" },
  { id: "websites", label: "Website Templates" },
  { id: "integrations", label: "Integrations" },
  { id: "reports", label: "Reports & Analytics" },
] as const;

export const portfolioItems: PortfolioItem[] = [
  {
    id: "arcade",
    slug: "arcade",
    title: "Media Garcia Arcade",
    category: "experiments",
    description:
      "HTML5 games showcasing our 'Have Fun' value and technical capabilities.",
    image: "/images/selected/case-study-saas-v3.png",
    liveUrl: "/play",
    isLive: true,
    tags: ["games", "interactive", "vibe-coded"],
    techStack: ["React", "Canvas", "TypeScript"],
    whatItDoes:
      "A collection of browser-based games that run entirely in your browser. No downloads, no installs—just click and play. Features classic arcade-style gameplay with modern web technologies.",
    whyWeBuiltIt:
      "To demonstrate our 'Have Fun' value and show that technical excellence doesn't have to be boring. Plus, we wanted to prove that the web platform can deliver engaging interactive experiences.",
  },
  {
    id: "hubspot-deal-automator",
    slug: "hubspot-deal-automator",
    title: "HubSpot Deal Automator",
    category: "tools",
    description:
      "Automated deal stage progression based on custom business rules and triggers.",
    image: "/images/selected/case-study-crm-v3.png",
    isLive: false,
    tags: ["hubspot", "automation", "deals"],
    techStack: ["HubSpot", "Node.js", "Webhooks"],
    whatItDoes:
      "Automatically moves deals through your pipeline based on custom conditions—email opens, meeting completions, document signatures, or any combination of triggers you define.",
    whyWeBuiltIt:
      "Sales teams waste hours manually updating deal stages. This tool ensures your pipeline always reflects reality, so forecasting is accurate and nothing falls through the cracks.",
  },
  {
    id: "email-signature-generator",
    slug: "email-signature-generator",
    title: "Email Signature Generator",
    category: "email",
    description:
      "Brand-consistent email signatures for your entire team in minutes.",
    image: "/images/selected/case-study-healthcare-v3.png",
    liveUrl: "https://signatures.mediagarcia.com",
    isLive: true,
    tags: ["email", "branding", "productivity"],
    techStack: ["React", "Tailwind CSS", "HTML Email"],
    whatItDoes:
      "Generate professional, on-brand email signatures for your entire organization. Input your brand colors, logo, and team details—get copy-paste-ready signatures that work in every email client.",
    whyWeBuiltIt:
      "Inconsistent email signatures make companies look unprofessional. This tool ensures brand consistency across every email your team sends, without requiring IT involvement.",
  },
  {
    id: "proposal-template-system",
    slug: "proposal-template-system",
    title: "Proposal Template System",
    category: "reports",
    description:
      "Dynamic proposal generator that pulls data directly from your CRM.",
    image: "/images/selected/industries-it-v2.png",
    isLive: false,
    tags: ["proposals", "crm", "documents"],
    techStack: ["HubSpot", "Google Docs API", "Node.js"],
    whatItDoes:
      "Creates personalized proposals in seconds by pulling deal data, contact info, and pricing directly from HubSpot. No more copy-pasting or outdated templates.",
    whyWeBuiltIt:
      "Creating proposals manually is slow and error-prone. This system eliminates the grunt work so sales teams can focus on selling, not formatting documents.",
  },
  {
    id: "ai-content-analyzer",
    slug: "ai-content-analyzer",
    title: "AI Content Analyzer",
    category: "experiments",
    description:
      "Analyzes landing pages and suggests conversion optimization improvements.",
    image: "/images/selected/industries-saas-v2.png",
    isLive: false,
    tags: ["ai", "conversion", "optimization"],
    techStack: ["OpenAI", "Python", "Next.js"],
    whatItDoes:
      "Paste any landing page URL and get AI-powered suggestions for improving conversion rates. Analyzes copy, CTAs, social proof, and page structure against best practices.",
    whyWeBuiltIt:
      "We wanted to explore how AI could augment (not replace) conversion rate optimization expertise. The tool handles the analysis grunt work so humans can focus on strategy.",
  },
];

export function getPortfolioItemBySlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.slug === slug);
}

export function getRelatedPortfolioItems(
  currentSlug: string,
  category: PortfolioCategory,
  limit = 3
): PortfolioItem[] {
  return portfolioItems
    .filter((item) => item.slug !== currentSlug && item.category === category)
    .slice(0, limit);
}

export function getCategoryLabel(categoryId: string): string {
  const category = categories.find((c) => c.id === categoryId);
  return category?.label || categoryId;
}
