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

// Filter options — only categories with actual case studies
export const industries = [
  "All Industries",
  "Healthcare",
  "Technology",
  "Professional Services",
  "Energy",
  "E-Commerce",
] as const;

export const services = [
  "All Services",
  "HubSpot Implementation",
  "Marketing Automation",
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
    image: "/images/selected/services-reporting.png",
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
      quote: "Media Garcia came in and really reimplemented our HubSpot CRM such that now we get meaningful results. It's part of our workflow from lead generation through to closing business, and it automatically flows into our accounting system. I wish we'd started with them from the very beginning—we would have gotten to a functional CRM so much faster.",
      author: "Ben Shand",
      title: "Head of Business Development",
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
    image: "/images/selected/services-integrations.png",
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
    testimonial: undefined,
  },
  {
    slug: "mens-pro-crm-enablement",
    title: "Custom Patient Portal and EHR Built Inside HubSpot",
    client: "Men's Pro Health",
    industry: "Healthcare",
    service: "HubSpot Implementation",
    description: "Built a complete patient portal, custom EHR notes system, and clinic operations platform inside HubSpot—replacing a legacy medical system for a multi-location men's health clinic.",
    image: "/images/selected/industries-healthcare-hero.png",
    gradient: "from-orange-red-500 to-orange-red-700",
    timeline: "8 months",
    tags: ["Healthcare", "Patient Portal", "EHR", "Custom Objects"],
    featured: false,
    clientLogo: "/images/clients/menspro.png",
    clientSize: "Multi-location clinic",
    clientLocation: "United States",
    publishDate: "2025-08-01",
    challenge: `Men's Pro Health, a growing men's health clinic with multiple locations, was running their entire patient operation on AdvancedMD (AMD)—a legacy EHR system that couldn't keep up with how they wanted to grow. Patient onboarding was manual, medication reorder tracking was done by memory, and there was no way for patients to self-serve or check their order status online.

The clinic needed a patient-facing portal where men could log in, view their treatment plans, reorder medications, and message their care team directly. They also needed their clinical staff to have structured EHR notes inside the same system their sales and operations teams used—eliminating the constant toggling between AMD and HubSpot.

The complexity was significant: the solution needed to support multiple clinic locations with location-specific branding, handle secure patient data, integrate with lab APIs (Quest, AEL), automate medication reorder notifications via email and SMS, and migrate years of patient data from AMD—all while keeping the clinics running without disruption.`,
    solution: `We designed and built a complete CRM enablement platform inside HubSpot, organized into phased milestones: discovery, MVP buildout, internal pilot, refinement, and full rollout.

The patient portal was built from scratch using HubSpot's native capabilities—membership login, patient profile management, medication order forms, a chatbot for patient-to-staff messaging, and automated order status notifications via email and SMS. Each clinic location gets its own branded experience through smart content, with location-specific contact info, landing pages, and support routing.

For the clinical team, we built a custom EHR notes system using HubSpot custom objects. Providers can create structured clinical notes (SOAP format), with draft-vs-signed workflows, PDF export, and separated views for sales notes versus medical notes. We also automated patient plan tracking using custom objects tied to invoice data, so treatment plans update automatically as patients reorder.

The data migration from AdvancedMD is being executed in stages—current patients first, with historical records following—using FTP exports and custom mapping scripts. Lab API integration connects Quest and AEL results directly to patient records in HubSpot.

We piloted with a select group of patients, collected structured feedback, created training documentation and onboarding guides, and are rolling out to all locations with a full communication and adoption plan.`,
    results: [
      { metric: "217+", label: "Project tasks delivered" },
      { metric: "10+", label: "Clinic locations supported" },
      { metric: "100%", label: "Portal pilot completion" },
      { metric: "0", label: "Legacy systems needed post-launch" },
    ],
    testimonial: {
      quote: "We asked Media Garcia to build us a patient portal and ended up with an entire operating system for our clinics. Our patients can manage their own care online, our providers have structured clinical notes, and we're finally running everything from one platform.",
      author: "Dan Green",
      title: "President & CEO",
      company: "Men's Pro Health",
    },
  },
  {
    slug: "mipi-alliance-service-hub",
    title: "Unified Service Desk for a Global Standards Organization",
    client: "MIPI Alliance",
    industry: "Technology",
    service: "HubSpot Implementation",
    description: "Implemented a HubSpot service desk, standardized email marketing, and audited marketing-sales-service operations for a global technology standards body serving the mobile industry.",
    image: "/images/selected/industries-it-hero.png",
    gradient: "from-teal-500 to-neon-purple-700",
    timeline: "6 months",
    tags: ["Technology", "Service Hub", "Email Marketing", "Operations Audit"],
    featured: false,
    clientSize: "Global standards organization",
    clientLocation: "United States",
    publishDate: "2020-03-01",
    challenge: `MIPI Alliance develops the world's most comprehensive set of interface specifications for mobile and mobile-influenced products. As a membership-based standards organization, their success depends on serving hundreds of member companies effectively—from onboarding new members to nurturing prospects and supporting existing ones.

When Media Garcia began working with MIPI, the organization faced three interconnected challenges. Their member onboarding workflow was inconsistent—new members had different experiences depending on who handled their intake, with no standardized process to ensure every organization received the same level of attention and information.

Prospect and at-risk member nurturing was essentially nonexistent. There was no systematic way to engage prospective members through the decision process, and no early-warning system to identify members who might not renew. Marketing, sales, and service operations ran on disjointed systems, making it difficult for any team to see the full picture of a member's relationship with the organization.`,
    solution: `Media Garcia dedicated time to understanding the frontline teams' day-to-day roles and developed a comprehensive list of capabilities and infrastructure they needed to build great relationships with prospects and members.

We started by onboarding MIPI to a ticketing platform inside HubSpot Service Hub, building structured processes for managing issues and inquiries from various intake channels. This gave every team member a consistent way to track, prioritize, and resolve member requests—replacing the ad hoc approach that had been in place.

Next, we brought consistency to email marketing by standardizing templates across both HubSpot and Mailchimp, creating structures that made it easy for the team to launch campaigns without starting from scratch each time. We then conducted a full audit of MIPI's marketing, sales, and service processes—evaluating the technology in use across all three functions and providing a strategic recommendation for future growth.

The result was a prioritized roadmap of projects spanning membership prospecting, member engagement, and technology integration—giving MIPI a clear path forward rather than a list of disconnected improvements.`,
    results: [
      { metric: "3", label: "Departments unified on one platform" },
      { metric: "100%", label: "Member inquiry tracking coverage" },
      { metric: "1", label: "Consolidated service desk" },
      { metric: "6 mo", label: "Strategic roadmap delivered" },
    ],
    testimonial: {
      quote: "We've been working with Media Garcia for about 6 months on various projects related to HubSpot and outside email and website marketing. So far we feel very comfortable with the team's level of aptitude, speed, focus, and professionalism. Looking forward to a continued partnership.",
      author: "Melanie Cole",
      title: "Special Projects Manager",
      company: "MIPI Alliance",
    },
  },
  {
    slug: "eag-crm-data-analytics",
    title: "CRM Data Analytics That Proved Marketing ROI",
    client: "EAG Advertising & Marketing",
    industry: "Professional Services",
    service: "CRM Optimization",
    description: "Validated marketing and sales assumptions through CRM data analysis, uncovering deal velocity insights and attribution data that empowered an agency and their client with actionable growth intelligence.",
    image: "/images/selected/case-study-crm-v3.png",
    gradient: "from-orange-red-500 to-orange-red-700",
    timeline: "Rapid engagement",
    tags: ["Marketing Agency", "Data Analytics", "Attribution", "Reporting"],
    featured: false,
    clientSize: "Marketing agency",
    clientLocation: "United States",
    publishDate: "2022-03-01",
    challenge: `EAG Advertising & Marketing was working with a client who used HubSpot CRM for their marketing and sales activities. The client had a sales team running outbound calling while EAG created marketing campaigns. Both efforts were generating leads—but it was nearly impossible to quickly discern and attribute where leads came from and what influenced their conversion.

The client didn't have insights into what was actually driving deals and revenue growth. Sales had become stagnant as they tried different tactics without being able to measure what was working. There wasn't enough consistency in actions or data to see what was making a difference, which led to gut-feel decision-making and reactive responses to shifting performance.

EAG needed a data partner who could dig into the CRM, validate assumptions, and deliver attribution insights that would demonstrate the ROI of their marketing efforts—giving both EAG and their client the clarity they needed to make smarter decisions.`,
    solution: `Media Garcia met with EAG to articulate multiple hypotheses and determine which needed validation, along with what insights would be most valuable for both the agency and their end client.

We performed a comprehensive analysis of CRM data focused on three objectives: discovering how marketing activities were influencing the sales pipeline, uncovering selling velocity characteristics, and recommending actions to better attribute and increase opportunities going forward.

The analysis revealed critical insights. The client was taking significantly longer to close deals—average time to close had grown from 36 days in early 2021 to deals staying open for 298 days by Q4 2021. This pattern had been worsening since 2020, indicating a clear need to close deals faster and move on to fresh opportunities rather than nursing stale pipeline.

We also discovered that on average it took 40 interactions to close-win a deal versus only 26 interactions for deals that were closed-lost—revealing that the deals they were winning required substantially more touches, and the ones they were losing were being identified faster. Media Garcia built a suite of HubSpot CRM dashboards and reports to visualize these findings and make the insights actionable for ongoing decision-making.`,
    results: [
      { metric: "40 vs 26", label: "Interactions to win vs. lose a deal" },
      { metric: "36 → 298", label: "Days to close: early vs. late 2021" },
      { metric: "100%", label: "Marketing attribution visibility" },
      { metric: "Weeks → Days", label: "Time to validate hypotheses" },
    ],
    testimonial: {
      quote: "We partnered with Media Garcia on creating a dashboard for a client. What they delivered for us, I have the happiest team right now because they did it this fast. We had gotten through maybe a quarter of the same material over the course of weeks if not months. Thank you, Media Garcia!",
      author: "Michele Markham",
      title: "President & CEO",
      company: "EAG Advertising & Marketing",
    },
  },
  {
    slug: "certn-crm-sales-enablement",
    title: "Enterprise-Grade Sales Ops Built on HubSpot Professional",
    client: "Certn",
    industry: "Technology",
    service: "HubSpot Implementation",
    description: "Transformed a scaling background-check SaaS company from an underutilized HubSpot CRM into a fully structured sales and marketing machine — with enterprise-level forecasting built on a Professional tier.",
    image: "/images/selected/services-sales-enablement.png",
    gradient: "from-neon-purple-500 to-teal-700",
    timeline: "6 months",
    tags: ["Technology", "CRM Optimization", "Sales Enablement", "Lead Scoring"],
    featured: false,
    clientLogo: "/images/clients/certn.png",
    clientSize: "Scaling B2B SaaS",
    clientLocation: "Canada (with US expansion)",
    publishDate: "2021-03-01",
    challenge: `Certn, a background screening technology company disrupting the background check industry with AI-powered solutions, had a HubSpot Professional account and a growing sales team across the US and Canada — but their CRM wasn't keeping up with the business.

Data wasn't clean, reporting was limited, forecasting was entirely manual, and the sales process lacked structure. The team was selling into multiple verticals — HR, property management, wholesale, gig economy, and API partnerships — but the CRM treated every deal the same way. There was no way to track pipeline by vertical, forecast by geography, or score leads based on actual engagement.

On the marketing side, there was no structured handoff between marketing and sales. Nurture campaigns weren't segmented by vertical, and attribution was essentially nonexistent. Certn needed a partner who could architect a CRM and marketing operations foundation that would scale with their rapid growth — without requiring an expensive Enterprise upgrade.`,
    solution: `We restructured Certn's entire HubSpot environment across two phases: CRM and sales operations first, then marketing operations.

For the CRM, we overhauled the sales pipeline architecture — building five separate pipelines (HR, Property Management, Wholesale, Referral, and API) with standardized stage percentages and conditional fields that trigger at each stage progression. When a deal moves to closed-won, the system automatically captures annual ordering volume, ATS platform, integration requirements, and contract details.

We built a lead scoring system with engagement decay — scoring based on pricing page visits, solution page views, API page engagement, video views, email interactions, and employee count, with freshness weighting so stale leads don't clog the pipeline. We also integrated ZoomInfo data enrichment and ChurnZero customer health signals directly into HubSpot.

The forecasting challenge was the most creative solve: we built enterprise-level forecasting capabilities entirely on HubSpot Professional using custom properties — weighted and unweighted revenue calculations, ramp-up modeling by rep and geography (US/Canada/International), and pipeline analysis by ATS provider, industry, and campaign type. This saved Certn the cost of upgrading to Enterprise while delivering the same analytical capabilities.

We split the sales team into US and Canada divisions with proper permissions, round-robin lead assignment by geography, and team-specific dashboards. For marketing, we built vertical-specific nurture campaigns, a partner tracking system with referral attribution, and marketing-to-sales handoff documentation with lead scoring integration.`,
    results: [
      { metric: "5", label: "Sales pipelines architected by vertical" },
      { metric: "3", label: "Data sources integrated (ZoomInfo, ChurnZero, Paycom)" },
      { metric: "Pro → Enterprise", label: "Forecasting capability without the upgrade cost" },
      { metric: "US + CAN", label: "Geographic team structure with separate reporting" },
    ],
    testimonial: {
      quote: "Media Garcia was instrumental in scaling us up with HubSpot by stepping into the role of operations before we hired a full-time specialist. They set up our CRM, email workflows, and reporting dashboards, which we greatly appreciate.",
      author: "Yvonne Chow",
      title: "Marketing Manager",
      company: "Certn",
    },
  },
  {
    slug: "xl-feet-ecommerce-growth",
    title: "$111K in Email Revenue in Year One",
    client: "XL Feet",
    industry: "E-Commerce",
    service: "Marketing Automation",
    description: "Documented operations, built a marketing strategy from scratch, and implemented a growth stack that generated over $111K in email-driven sales in the first year for a niche footwear retailer.",
    image: "/images/selected/services-marketing-automation.png",
    gradient: "from-neon-purple-500 to-teal-700",
    timeline: "12 months",
    tags: ["E-Commerce", "Email Marketing", "Operations", "Growth Stack"],
    featured: false,
    clientSize: "Niche e-commerce retailer",
    clientLocation: "United States",
    publishDate: "2023-06-01",
    challenge: `XL Feet is a niche e-commerce business serving adults with wide and long feet—a specialized market with a loyal but underserved customer base. The business was growing, but the owner, Adrian, was doing everything himself with no documented processes, no marketing strategy, and no way to measure what was working.

Internal operations ran on institutional knowledge locked in the owner's head. There was no documentation that would allow tasks to be delegated, meaning Adrian was the bottleneck for every decision and every process. Marketing efforts were scattered and undefined—money was being spent without a clear understanding of ROI or what channels were actually driving sales.

On top of that, the systems for marketing, sales, and customer service were completely disjointed. Returns and warranty requests were handled manually, product reviews weren't being collected systematically, and there was no way for customers to get personalized help finding shoes that fit their specific needs. XL Feet needed a partner who could bring structure, strategy, and the right technology to unlock the next stage of growth.`,
    solution: `Media Garcia took a holistic approach, tackling operations, marketing, and technology in parallel to create compounding impact.

We started with process documentation—mapping out XL Feet's key workflows and creating clear documentation that would enable Adrian to delegate logistical roles to team members. This alone was transformational, freeing up the owner's time to focus on strategic growth rather than day-to-day operations.

For marketing, we developed a cohesive strategy from the ground up and implemented digital marketing tactics with email marketing as the centerpiece. We built automated email sequences for customer lifecycle stages—welcome series, post-purchase follow-ups, win-back campaigns, and product recommendations based on purchase history.

On the technology side, we curated a growth stack of integrated tools: a returns and warranty management system to streamline customer service, a product review collection platform to build social proof, and a conversational bot that guided customers through custom shoe fittings. This last piece was especially valuable for XL Feet's niche—customers with hard-to-fit feet could get personalized recommendations without needing to call or email, creating a self-service experience that felt like working with an in-store specialist.`,
    results: [
      { metric: "$111K+", label: "Email revenue in year one" },
      { metric: "100%", label: "Key processes documented" },
      { metric: "New", label: "Conversational shoe fitting bot" },
      { metric: "3+", label: "Growth stack tools integrated" },
    ],
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
