export interface CaseStudyResult {
  metric: string;
  label: string;
}

export interface CaseStudyTestimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  photo?: string;
}

export interface CaseStudyScreenshot {
  src: string;
  caption: string;
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
  // Enhanced fields
  featured?: boolean;
  clientLogo?: string;
  clientSize?: string;
  clientLocation?: string;
  screenshots?: CaseStudyScreenshot[];
  videoTestimonial?: string;
  publishDate?: string;
}

// Filter options
export const industries = [
  "All Industries",
  "Healthcare",
  "SaaS",
  "IT Services",
  "Professional Services",
  "Manufacturing",
  "Education",
] as const;

export const services = [
  "All Services",
  "HubSpot Implementation",
  "CRM Migration",
  "Marketing Automation",
  "EHR Integration",
  "Sales Enablement",
  "Salesforce to HubSpot",
] as const;

export type Industry = (typeof industries)[number];
export type Service = (typeof services)[number];

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
    featured: true,
    clientLogo: "/images/case-studies/logos/healthcare-network.svg",
    clientSize: "50+ locations",
    clientLocation: "Midwest Region",
    publishDate: "2024-10-15",
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
    featured: false,
    clientLogo: "/images/case-studies/logos/saas-tech.svg",
    clientSize: "100-200 employees",
    clientLocation: "San Francisco, CA",
    publishDate: "2024-09-20",
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
    featured: false,
    clientLogo: "/images/case-studies/logos/prof-services.svg",
    clientSize: "200-500 employees",
    clientLocation: "Minneapolis, MN",
    publishDate: "2024-08-10",
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
  {
    slug: "manufacturing-hubspot",
    title: "2x Sales Team Productivity",
    client: "Industrial Equipment Manufacturer",
    industry: "Manufacturing",
    service: "HubSpot Implementation",
    description: "Deployed HubSpot Sales Hub to a traditional manufacturing company, replacing spreadsheets and sticky notes with a modern sales process.",
    image: "/images/case-studies/case-study-1.jpg",
    gradient: "from-teal-500 to-teal-700",
    timeline: "10 weeks",
    tags: ["Manufacturing", "HubSpot", "Sales Process"],
    featured: false,
    clientLogo: "/images/case-studies/logos/manufacturing.svg",
    clientSize: "100-250 employees",
    clientLocation: "Detroit, MI",
    publishDate: "2024-07-05",
    challenge: `A third-generation industrial equipment manufacturer had grown to $50M in revenue using the same sales process they'd used for decades: spreadsheets, sticky notes, and institutional knowledge locked in the heads of veteran salespeople.

When two senior sales reps retired, the company realized they had no documentation of customer relationships, deal history, or follow-up processes. New hires were floundering. Quotes were falling through the cracks. And leadership had no visibility into the pipeline.

They needed to modernize—but their sales team was skeptical of technology and resistant to change. Previous software rollouts had failed due to low adoption.`,
    solution: `We implemented HubSpot Sales Hub with a focus on adoption over features. Rather than deploying everything at once, we started with the basics: contact management, deal tracking, and email logging.

We worked with the sales team to map their existing process into HubSpot—respecting what worked while eliminating the manual overhead. Custom properties captured the manufacturing-specific data they needed: equipment types, maintenance schedules, and purchase cycles.

Training happened on the floor, not in a conference room. We showed reps how HubSpot would save them time, not create more work. By week three, even the skeptics were logging activities.`,
    results: [
      { metric: "2x", label: "Sales team productivity" },
      { metric: "100%", label: "User adoption rate" },
      { metric: "45%", label: "Faster quote turnaround" },
      { metric: "$800K", label: "Recovered pipeline" },
    ],
    testimonial: {
      quote: "I've been selling for 30 years and never thought I'd use a CRM. Now I can't imagine working without it. I actually know where all my deals stand.",
      author: "Senior Sales Representative",
      title: "Senior Sales Representative",
      company: "Industrial Equipment Manufacturer",
    },
  },
  {
    slug: "law-firm-sales-enablement",
    title: "65% Increase in New Client Intake",
    client: "Regional Law Firm",
    industry: "Professional Services",
    service: "Sales Enablement",
    description: "Built an automated intake and follow-up system that transformed how a growing law firm captures and converts prospective clients.",
    image: "/images/case-studies/case-study-2.jpg",
    gradient: "from-neon-purple-500 to-neon-purple-700",
    timeline: "6 weeks",
    tags: ["Legal", "Sales Enablement", "Lead Capture"],
    featured: false,
    clientLogo: "/images/case-studies/logos/law-firm.svg",
    clientSize: "50-100 employees",
    clientLocation: "Chicago, IL",
    publishDate: "2024-06-20",
    challenge: `A regional law firm with 40 attorneys was losing prospective clients to slower response times. Their intake process relied on a receptionist manually routing calls and emails to the right practice area—often with delays of 24-48 hours.

In legal services, speed matters. Prospective clients contact multiple firms and typically go with whoever responds first. The firm was spending significantly on marketing but watching leads go cold before attorneys could follow up.

They needed a system that could instantly route inquiries to the right attorney while maintaining the personal touch clients expect from a law firm.`,
    solution: `We implemented an intelligent intake system in HubSpot that routes inquiries based on practice area, urgency, and attorney availability.

Web forms capture case type and key details upfront, then automatically assign to the appropriate attorney with full context. Attorneys receive mobile notifications for urgent matters. Automated sequences handle initial follow-up for non-urgent inquiries, keeping prospects engaged until an attorney is available.

We also built a dashboard showing intake metrics by practice area, so marketing knows which channels drive actual clients—not just form fills.`,
    results: [
      { metric: "65%", label: "Increase in new clients" },
      { metric: "< 5 min", label: "Average response time" },
      { metric: "3x", label: "Consultation bookings" },
      { metric: "28%", label: "Higher close rate" },
    ],
    testimonial: {
      quote: "We used to lose clients because we couldn't respond fast enough. Now prospective clients hear from us within minutes, and our attorneys have all the context they need before the first call.",
      author: "Director of Business Development",
      title: "Director of Business Development",
      company: "Regional Law Firm",
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getRelatedCaseStudies(currentSlug: string, limit = 2): CaseStudy[] {
  return caseStudies.filter((study) => study.slug !== currentSlug).slice(0, limit);
}

export function getFeaturedCaseStudy(): CaseStudy | undefined {
  return caseStudies.find((study) => study.featured);
}

export function filterCaseStudies(
  industry: Industry,
  service: Service
): CaseStudy[] {
  return caseStudies.filter((study) => {
    const matchesIndustry =
      industry === "All Industries" || study.industry === industry;
    const matchesService =
      service === "All Services" || study.service === service;
    return matchesIndustry && matchesService;
  });
}

export function getNonFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((study) => !study.featured);
}
