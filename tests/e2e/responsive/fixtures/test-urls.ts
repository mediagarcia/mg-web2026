/**
 * All page URLs for responsive testing
 * 29 total pages: 27 static + 2 dynamic templates
 */

export interface TestPage {
  url: string;
  name: string;
  priority: 'critical' | 'high' | 'medium';
  category: string;
  hasHeroSection?: boolean;
  hasGridLayout?: boolean;
  hasAnimations?: boolean;
}

/**
 * Critical pages (14) - Core user journeys
 */
export const criticalPages: TestPage[] = [
  {
    url: '/',
    name: 'Homepage',
    priority: 'critical',
    category: 'core',
    hasHeroSection: true,
    hasGridLayout: true,
    hasAnimations: true,
  },
  {
    url: '/services',
    name: 'Services',
    priority: 'critical',
    category: 'services',
    hasHeroSection: true,
    hasGridLayout: true,
    hasAnimations: true,
  },
  {
    url: '/services/hubspot-onboarding',
    name: 'HubSpot Onboarding',
    priority: 'critical',
    category: 'services',
    hasHeroSection: true,
    hasAnimations: true,
  },
  {
    url: '/services/crm-migration',
    name: 'CRM Migration',
    priority: 'critical',
    category: 'services',
    hasHeroSection: true,
    hasAnimations: true,
  },
  {
    url: '/services/marketing-automation',
    name: 'Marketing Automation',
    priority: 'critical',
    category: 'services',
    hasHeroSection: true,
    hasAnimations: true,
  },
  {
    url: '/services/sales-enablement',
    name: 'Sales Enablement',
    priority: 'critical',
    category: 'services',
    hasHeroSection: true,
    hasAnimations: true,
  },
  {
    url: '/services/integrations',
    name: 'Integrations',
    priority: 'critical',
    category: 'services',
    hasHeroSection: true,
    hasAnimations: true,
  },
  {
    url: '/services/reporting',
    name: 'Reporting',
    priority: 'critical',
    category: 'services',
    hasHeroSection: true,
    hasAnimations: true,
  },
  {
    url: '/services/development',
    name: 'Development',
    priority: 'critical',
    category: 'services',
    hasHeroSection: true,
    hasAnimations: true,
  },
  {
    url: '/services/ai-automation',
    name: 'AI Automation',
    priority: 'critical',
    category: 'services',
    hasHeroSection: true,
    hasAnimations: true,
  },
  {
    url: '/services/marketing',
    name: 'Marketing Services',
    priority: 'critical',
    category: 'services',
    hasHeroSection: true,
    hasAnimations: true,
  },
  {
    url: '/contact',
    name: 'Contact',
    priority: 'critical',
    category: 'core',
    hasHeroSection: true,
    hasAnimations: true,
  },
  {
    url: '/pricing',
    name: 'Pricing',
    priority: 'critical',
    category: 'core',
    hasHeroSection: true,
    hasGridLayout: true,
    hasAnimations: true,
  },
  {
    url: '/about',
    name: 'About',
    priority: 'critical',
    category: 'core',
    hasHeroSection: true,
    hasGridLayout: true,
    hasAnimations: true,
  },
];

/**
 * High priority pages (10) - Secondary user journeys
 */
export const highPriorityPages: TestPage[] = [
  {
    url: '/industries',
    name: 'Industries',
    priority: 'high',
    category: 'industries',
    hasHeroSection: true,
    hasGridLayout: true,
    hasAnimations: true,
  },
  {
    url: '/industries/healthcare',
    name: 'Healthcare Industry',
    priority: 'high',
    category: 'industries',
    hasHeroSection: true,
    hasAnimations: true,
  },
  {
    url: '/industries/saas',
    name: 'SaaS Industry',
    priority: 'high',
    category: 'industries',
    hasHeroSection: true,
    hasAnimations: true,
  },
  {
    url: '/industries/information-technology',
    name: 'IT Industry',
    priority: 'high',
    category: 'industries',
    hasHeroSection: true,
    hasAnimations: true,
  },
  {
    url: '/work',
    name: 'Work',
    priority: 'high',
    category: 'work',
    hasHeroSection: true,
    hasGridLayout: true,
    hasAnimations: true,
  },
  {
    url: '/resources',
    name: 'Resources',
    priority: 'high',
    category: 'resources',
    hasHeroSection: true,
    hasGridLayout: true,
    hasAnimations: true,
  },
  {
    url: '/resources/guides',
    name: 'Guides',
    priority: 'high',
    category: 'resources',
    hasHeroSection: true,
    hasAnimations: true,
  },
  {
    url: '/resources/assessment',
    name: 'Assessment',
    priority: 'high',
    category: 'resources',
    hasHeroSection: true,
    hasAnimations: true,
  },
  {
    url: '/resources/roi-calculator',
    name: 'ROI Calculator',
    priority: 'high',
    category: 'resources',
    hasHeroSection: true,
    hasAnimations: true,
  },
  {
    url: '/resources/tco-calculator',
    name: 'TCO Calculator',
    priority: 'high',
    category: 'resources',
    hasHeroSection: true,
    hasAnimations: true,
  },
];

/**
 * Medium priority pages (5) - Content and legal
 */
export const mediumPriorityPages: TestPage[] = [
  {
    url: '/blog',
    name: 'Blog',
    priority: 'medium',
    category: 'content',
    hasHeroSection: true,
    hasGridLayout: true,
    hasAnimations: true,
  },
  {
    url: '/privacy',
    name: 'Privacy Policy',
    priority: 'medium',
    category: 'legal',
    hasHeroSection: false,
    hasAnimations: false,
  },
  {
    url: '/terms',
    name: 'Terms of Service',
    priority: 'medium',
    category: 'legal',
    hasHeroSection: false,
    hasAnimations: false,
  },
  {
    url: '/image-staging',
    name: 'Image Staging',
    priority: 'medium',
    category: 'internal',
    hasHeroSection: false,
    hasGridLayout: true,
    hasAnimations: false,
  },
];

/**
 * Dynamic page templates - require specific slugs
 */
export const dynamicPages: TestPage[] = [
  {
    url: '/work/enterprise-migration',
    name: 'Case Study (Enterprise)',
    priority: 'high',
    category: 'work',
    hasHeroSection: true,
    hasAnimations: true,
  },
];

/**
 * All pages combined
 */
export const allPages: TestPage[] = [
  ...criticalPages,
  ...highPriorityPages,
  ...mediumPriorityPages,
  ...dynamicPages,
];

/**
 * Get pages by priority
 */
export function getPagesByPriority(priority: TestPage['priority']): TestPage[] {
  return allPages.filter((page) => page.priority === priority);
}

/**
 * Get pages by category
 */
export function getPagesByCategory(category: string): TestPage[] {
  return allPages.filter((page) => page.category === category);
}

/**
 * Get pages with specific features
 */
export function getPagesWithFeature(
  feature: 'hasHeroSection' | 'hasGridLayout' | 'hasAnimations'
): TestPage[] {
  return allPages.filter((page) => page[feature]);
}

/**
 * URLs only for simple iteration
 */
export const allUrls = allPages.map((page) => page.url);
export const criticalUrls = criticalPages.map((page) => page.url);
export const highPriorityUrls = highPriorityPages.map((page) => page.url);
