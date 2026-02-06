export interface CaseStudyResult {
  metric: string;
  label: string;
}

export interface CaseStudyTestimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  service: string;
  description: string;
  image: string;
  gradient: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  testimonial?: CaseStudyTestimonial;
  timeline?: string;
  tags?: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "healthcare-integration",
    title: "80% Reduction in Manual Data Entry",
    client: "Healthcare Provider Network",
    industry: "Healthcare",
    service: "EHR Integration",
    description: "Integrated patient intake system with CRM, automating lead capture and eliminating duplicate data entry across multiple clinic locations.",
    image: "/images/case-studies/case-study-1.jpg",
    gradient: "from-teal-500 to-teal-700",
    timeline: "6 weeks",
    tags: ["Healthcare", "Integration", "Automation"],
    challenge: `A 50-location healthcare provider network was drowning in manual data entry. Every new patient inquiry required staff to enter information into three separate systems: their EHR, their marketing platform, and their internal tracking spreadsheets.

The result? Staff spent 15+ hours per week per location on duplicate data entry. Leads fell through the cracks. Patient information was inconsistent across systems. And the revenue team had no visibility into which marketing channels were actually driving new patients.

They'd tried solving this with "better processes" and training—but the fundamental problem was disconnected systems that weren't designed to work together.`,
    solution: `We built a unified integration layer that connected their patient intake forms directly to HubSpot, their EHR system, and their scheduling platform.

When a potential patient fills out an inquiry form, their information automatically flows to all three systems—with proper field mapping, duplicate detection, and validation at every step. We also implemented lead source tracking so their marketing team finally knows which campaigns drive actual appointments, not just form fills.

The integration includes bi-directional sync, so when patient status updates in the EHR, their CRM record reflects it automatically. Staff no longer need to manually update records or check multiple systems.`,
    results: [
      { metric: "80%", label: "Reduction in data entry time" },
      { metric: "15 hrs", label: "Saved per location weekly" },
      { metric: "0", label: "Data entry errors" },
      { metric: "< 90 days", label: "Full ROI achieved" },
    ],
    testimonial: {
      quote: "We went from spending half our day on data entry to focusing on what matters—patient care. The integration just works, and we finally have accurate data across all our systems.",
      author: "Operations Director",
      title: "Operations Director",
      company: "Regional Healthcare Network",
    },
  },
  {
    slug: "lead-generation-saas",
    title: "340% Increase in Qualified Leads",
    client: "SaaS Technology Company",
    industry: "SaaS",
    service: "Marketing Automation",
    description: "Implemented advanced lead scoring and nurturing workflows that transformed their sales pipeline from chaos to predictable growth.",
    image: "/images/case-studies/case-study-2.jpg",
    gradient: "from-neon-purple-500 to-neon-purple-700",
    timeline: "8 weeks",
    tags: ["SaaS", "Lead Generation", "Marketing Automation"],
    challenge: `A B2B SaaS company was generating plenty of leads, but their sales team was overwhelmed. Every form fill went directly to sales, regardless of fit or intent. Reps wasted hours chasing unqualified prospects while high-intent buyers waited days for follow-up.

Their existing "lead scoring" was based on a single form field asking budget range—which prospects routinely inflated or left blank. Marketing and sales were at odds: marketing claimed they were delivering leads, sales claimed the leads were garbage.

The real problem? No system to identify which leads were actually ready to buy versus which needed more nurturing.`,
    solution: `We implemented a comprehensive lead scoring and nurturing system in HubSpot that tracks behavioral signals across their entire buyer journey.

The scoring model weighs engagement depth (not just email opens, but specific page visits, content downloads, and feature page engagement), firmographic fit, and explicit intent signals. Leads aren't handed to sales until they hit a qualified threshold—and when they do, sales gets full context on what the prospect has engaged with.

For leads that aren't ready, we built automated nurture sequences tailored to their specific interests and stage. A prospect exploring pricing gets different content than one still researching solutions.`,
    results: [
      { metric: "340%", label: "Increase in qualified leads" },
      { metric: "52%", label: "Faster sales cycle" },
      { metric: "3x", label: "Email engagement rate" },
      { metric: "$1.2M", label: "Pipeline added in 90 days" },
    ],
    testimonial: {
      quote: "Our sales team finally trusts the leads they get. Every qualified lead comes with context on what they care about, so conversations start in the right place. Pipeline has never been healthier.",
      author: "VP of Marketing",
      title: "VP of Marketing",
      company: "B2B SaaS Platform",
    },
  },
  {
    slug: "crm-migration",
    title: "Full CRM Migration in 30 Days",
    client: "Professional Services Firm",
    industry: "IT Services",
    service: "Salesforce to HubSpot",
    description: "Migrated 50,000+ contacts from Salesforce to HubSpot with zero data loss, no downtime, and immediate team adoption.",
    image: "/images/case-studies/case-study-3.jpg",
    gradient: "from-orange-red-500 to-orange-red-700",
    timeline: "30 days",
    tags: ["IT Services", "CRM Migration", "Data Migration"],
    challenge: `A professional services firm had outgrown their Salesforce implementation. What started as a simple CRM had become a tangled mess of custom objects, outdated workflows, and integrations that no one fully understood. Their Salesforce admin had left, and the monthly bill kept climbing for features they didn't use.

They needed to migrate to HubSpot—but they had 50,000+ contacts, 5 years of deal history, and critical integrations with their billing and project management systems. Previous migration attempts had stalled due to data complexity and fear of losing historical information.

The stakes were high: their entire sales operation depended on CRM access, and they couldn't afford extended downtime.`,
    solution: `We developed a phased migration plan that moved data in stages while keeping both systems operational during the transition.

First, we mapped every Salesforce field, custom object, and workflow to HubSpot equivalents—identifying what to migrate directly, what to restructure, and what to leave behind. We built custom import scripts that preserved relationships between contacts, companies, and deals while cleaning duplicate and outdated records.

The actual migration happened over a weekend, with parallel systems running for one week to catch any issues. We trained teams by role before go-live, so they knew exactly where to find what they needed in the new system.`,
    results: [
      { metric: "50,000+", label: "Contacts migrated" },
      { metric: "0", label: "Data loss incidents" },
      { metric: "30 days", label: "Total project time" },
      { metric: "40%", label: "Reduction in CRM costs" },
    ],
    testimonial: {
      quote: "We were terrified of losing five years of client history. Instead, we got a cleaner, faster CRM with all our data intact. The migration was smoother than any software transition we've ever done.",
      author: "Managing Partner",
      title: "Managing Partner",
      company: "Professional Services Firm",
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getRelatedCaseStudies(currentSlug: string, limit = 2): CaseStudy[] {
  return caseStudies.filter((study) => study.slug !== currentSlug).slice(0, limit);
}
