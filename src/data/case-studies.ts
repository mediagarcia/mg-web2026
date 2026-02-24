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
  "Energy",
] as const;

export const services = [
  "All Services",
  "HubSpot Implementation",
  "CRM Migration",
  "Marketing Automation",
  "EHR Integration",
  "Sales Enablement",
  "Salesforce to HubSpot",
  "CRM Optimization",
] as const;

export type Industry = (typeof industries)[number];
export type Service = (typeof services)[number];

export const caseStudies: CaseStudy[] = [
  {
    slug: "advi-health-crm-optimization",
    title: "200+ CRM Optimizations Powering Healthcare Growth",
    client: "ADVI Health",
    industry: "Healthcare",
    service: "CRM Optimization",
    description: "Ongoing HubSpot CRM maintenance, data quality monitoring, and executive reporting that keeps ADVI Health's revenue operations running at peak performance.",
    image: "/images/case-studies/case-study-1.jpg",
    gradient: "from-teal-500 to-teal-700",
    timeline: "Ongoing (2+ years)",
    tags: ["Healthcare", "CRM Optimization", "Data Quality", "Reporting"],
    featured: true,
    clientLogo: "/images/clients/advi.svg",
    clientSize: "Growth-stage advisory firm",
    clientLocation: "United States",
    publishDate: "2025-04-01",
    challenge: `ADVI Health, a healthcare advisory firm, had invested in HubSpot but their portal had grown organically without governance. Data quality was deteriorating—duplicate records, incomplete deal information, and inconsistent property usage made it impossible to trust the numbers in reports.

Their revenue team was making decisions based on dashboards they couldn't fully rely on. Deal amounts weren't syncing correctly, booking reports required manual reconciliation, and there was no systematic way to audit portal health. When leadership asked for pipeline reports, the team spent hours manually verifying data before presenting.

ADVI needed more than a one-time cleanup. They needed an ongoing partner who could maintain CRM excellence as their business scaled—someone who understood both the technical platform and the healthcare advisory business well enough to proactively identify issues before they impacted revenue decisions.`,
    solution: `We established a comprehensive CRM maintenance and optimization program built around three pillars: data quality, executive reporting, and continuous improvement.

First, we conducted a deep portal audit and built a custom data quality dashboard to monitor duplicates, incomplete records, and invalid data in real time. We implemented deal amount sync validation, solution industry properties, and deal split tracking to ensure revenue attribution was accurate down to the individual rep level.

From there, we provide ongoing ad hoc HubSpot administration—everything from workflow automation and form tracking to weekly booking reports and custom dashboards for executive decision-making. When ADVI's needs evolved in 2026, we restructured the engagement to focus on what mattered most: executive reporting, special initiatives, and responsive CRM support with a one-hour SLA for critical issues.

The relationship runs on weekly meetings, a dedicated project manager, and a shared task system with over 200 tracked items—ensuring nothing falls through the cracks.`,
    results: [
      { metric: "200+", label: "CRM optimizations delivered" },
      { metric: "90%", label: "Deliverable compliance rate" },
      { metric: "< 1 hr", label: "Critical issue response time" },
      { metric: "2+ yrs", label: "Continuous partnership" },
    ],
    testimonial: {
      quote: "Media Garcia isn't just a vendor—they're an extension of our team. They understand our business well enough to proactively identify issues before they become problems, and their reporting gives us the confidence to make real revenue decisions.",
      author: "Juli Denny",
      title: "Chief Growth Officer",
      company: "ADVI Health",
    },
  },
  {
    slug: "current-energy-integrations",
    title: "5 System Integrations Unifying Energy Operations",
    client: "Current Energy",
    industry: "Energy",
    service: "HubSpot Implementation",
    description: "Connected HubSpot to NetSuite, Aurora, Paycom, Company Cam, and a custom customer portal—turning disconnected tools into one unified operations platform for a growing energy company.",
    image: "/images/case-studies/case-study-2.jpg",
    gradient: "from-neon-purple-500 to-neon-purple-700",
    timeline: "Ongoing",
    tags: ["Energy", "Integrations", "Automation", "Customer Portal"],
    featured: false,
    clientLogo: "/images/clients/currentenergy.png",
    clientSize: "Growing energy company",
    clientLocation: "United States",
    publishDate: "2025-01-15",
    challenge: `Current Energy, a residential and commercial energy company, was scaling fast—but their technology stack wasn't keeping up. Their teams relied on five disconnected systems: HubSpot for CRM, NetSuite for billing, Aurora for solar design, Paycom for HR, and Company Cam for on-site project photos.

Every project required manual data entry across multiple platforms. Deal stage updates in HubSpot didn't trigger tasks in the right queues. Inspection scheduling, proposal generation, and project handoffs all required someone to manually move information between systems. The residential team had pipeline data trapped in a legacy system that needed migrating. And when leadership wanted a single view of project status, no one could provide it without hours of manual reconciliation.

On top of the integration challenges, Current Energy needed a customer-facing portal where homeowners and commercial clients could track their project status—something that required HubSpot's ticket pipelines to be repurposed as project phases, with tailored views for different customer types.`,
    solution: `We took a systems-first approach, mapping Current Energy's entire operational workflow before touching any code. This revealed the critical integration points where manual handoffs were costing the most time.

We built the HubSpot-to-NetSuite integration with field mapping and control fields ("Ready for NetSuite" and "Billable" flags) so deals only sync when they're truly ready—preventing the billing team from chasing incomplete records. For Aurora, we set up Zapier automations to create deals in HubSpot automatically from solar designs, with safeguards to prevent duplicate records and data sync errors.

Deal stage-based task automation ensures that when a project moves from design to permitting to inspection, the right team gets the right tasks automatically. We rebuilt stage notes with readable titles and auto-association to deals, so every team member can see project history at a glance.

For the customer portal, we prototyped and designed a solution using HubSpot's native capabilities—validating that ticket pipelines could serve as project phases, building Figma mockups for management review, and ensuring the portal could support multiple customer types with tailored views. We also executed a full residential data migration, moving both open and closed-won deals from the legacy system with zero data loss.`,
    results: [
      { metric: "5+", label: "Systems integrated with HubSpot" },
      { metric: "200+", label: "Tasks delivered and tracked" },
      { metric: "100%", label: "Data migration accuracy" },
      { metric: "0", label: "Manual deal stage handoffs" },
    ],
    testimonial: {
      quote: "Before Media Garcia, our teams were copying data between five different systems. Now everything flows automatically—when a deal moves stages, tasks get created, the right people get notified, and our customers can see their project status in real time.",
      author: "Maria Woo",
      title: "Operations Lead",
      company: "Current Energy",
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
