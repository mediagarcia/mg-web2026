# Media Garcia Homepage Copy & Structure

## Executive Summary

This document provides the complete homepage structure and copy for the Media Garcia website redesign. The copy is designed for **warm prospects**—primarily referrals and directory visitors who are evaluating whether to reach out, not discovering the company for the first time.

**Design Direction**: Dark, minimal, sophisticated (Palantir/Linear/Stripe inspired)

---

## Positioning Constraints (MANDATORY)

### 1. Tech-Agnostic Positioning
- **Lead with outcomes**: RevOps, revenue systems, integrations, automation
- **HubSpot is a capability, not the headline**: Mention HubSpot alongside Salesforce, custom integrations, and other stacks
- **Platform-agnostic CTAs**: "Revenue audit" not "HubSpot audit"

### 2. Industry Emphasis
- **Healthcare is a first-class vertical**: Equal visibility with IT/SaaS
- **Acknowledge industry-specific needs**: Compliance awareness, long sales cycles, regulated environments

### 3. Proof of Capability
- Verify all claims before publishing
- Mark unverified metrics with [VERIFY]
- Avoid fabricated case studies—use placeholders if real ones aren't ready

---

## Page Structure Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        HERO                                 │  ← Critical: 5-second test
│  Pain hook → Headline → Subhead → CTA → Trust badges        │
│  Platform-agnostic, outcome-focused                         │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                   CLIENT LOGOS                              │  ← Quick credibility
│  "Trusted by..." + 6-8 logos (include healthcare clients)   │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                    SERVICES                                 │  ← What we do
│  Lead with RevOps, automation, integrations                 │
│  Platforms listed as capabilities, not the headline         │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                      STATS                                  │  ← Proof at a glance
│  200+ Implementations | 98% Retention | $4M+ | 10+ Countries│
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                   INDUSTRIES                                │  ← Who we serve
│  Healthcare + IT + SaaS (equal weight)                      │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                     WHY US                                  │  ← Differentiation
│  Multi-platform expertise, industry focus, outcomes         │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                    PROCESS                                  │  ← Reduce risk/uncertainty
│  Discovery → Strategy → Build → Launch                      │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                 CERTIFICATIONS                              │  ← Deep expertise signal
│  HubSpot, Salesforce, integration partners                  │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                    VALUES                                   │  ← Human connection
│  How we work                                                │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                  CTA BANNER                                 │  ← Mid-page conversion
│  Platform-agnostic CTA                                      │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                 TESTIMONIALS                                │  ← Social proof deep dive
│  Include healthcare + tech testimonials                     │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                 CASE STUDIES                                │  ← Results proof
│  1 Healthcare + 2 Tech case studies                         │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                      FAQ                                    │  ← Objection handling
│  Platform-agnostic answers                                  │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                     TEAM                                    │  ← Human connection
│  Team grid + Values                                         │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                   CONTACT                                   │  ← Final CTA
│  Form + Contact info + "What happens next"                  │
└─────────────────────────────────────────────────────────────┘
```

---

## Section-by-Section Copy

### 1. Hero Section

**Current Location**: `src/components/sections/Hero.tsx`

#### Positioning Reminder
- NO HubSpot in the headline
- Lead with outcomes and the problem being solved
- Mention platforms only in trust badges or a "Works with" line

---

#### OPTION A: Outcome-Focused (RECOMMENDED)

**Pain Hook**: Tired of CRM investments that gather dust?

**Headline**:
```
Revenue systems your
team actually uses
```

**Subheadline**: We design RevOps and automation platforms for healthcare, IT, and SaaS companies—across HubSpot, Salesforce, and custom stacks.

**Primary CTA**: Get Your Free Audit

**Secondary CTA**: View Our Work

**Trust Badges**:
- ✓ Platinum HubSpot Partner
- ✓ Salesforce Integration Experts
- ★ 50+ Five-Star Reviews
- 🌐 Clients in 10+ Countries

**Platform Line** (optional, below CTAs):
> Works with: HubSpot • Salesforce • Zoho • Custom APIs

**Why This Works**:
- "Revenue systems" is platform-agnostic and outcome-focused
- "Actually uses" addresses the core pain (unused software)
- Subheadline names all three key industries (healthcare, IT, SaaS)
- Platforms appear in supporting context, not the headline
- Trust badges show HubSpot expertise without making it the sole focus

**Potential Weakness**:
- Less specific than a HubSpot-only positioning (trades depth for breadth)
- May need to prove Salesforce/custom stack expertise with case studies

---

#### OPTION B: Problem-Agitate-Solution

**Pain Hook**: Your CRM shouldn't feel like a second job.

**Headline**:
```
Stop configuring.
Start closing.
```

**Subheadline**: We build and integrate revenue platforms that your sales, marketing, and ops teams will actually adopt—no matter what stack you're on.

**Primary CTA**: Book a Strategy Call

**Secondary CTA**: See Case Studies

**Trust Badges**: Same as Option A

**Why This Works**:
- Directly speaks to frustration with CRM busywork
- "No matter what stack you're on" reinforces tech-agnostic positioning
- Active verbs ("Stop/Start") create urgency

**Potential Weakness**:
- More aggressive tone
- Less specific about who it's for (healthcare/IT/SaaS)

---

#### OPTION C: Industry-First

**Pain Hook**: Your industry has unique needs. Your revenue stack should too.

**Headline**:
```
RevOps designed for
healthcare, IT & SaaS
```

**Subheadline**: We architect CRM, automation, and integration solutions tailored to complex sales cycles, compliance requirements, and technical buyers.

**Primary CTA**: Get Your Free Audit

**Secondary CTA**: Explore Industries

**Trust Badges**: Same as Option A

**Why This Works**:
- Industries in the headline makes positioning crystal clear
- "Complex sales cycles, compliance requirements" speaks directly to healthcare
- "Technical buyers" speaks to IT/SaaS

**Potential Weakness**:
- More niche—may feel exclusive to those industries
- "RevOps" term may not resonate with all buyers

---

**Recommended Approach**: **Option A** as the base, with Option C's industry specificity in the subheadline

---

### 2. Social Proof Bar (Client Logos)

**Current Location**: `src/components/sections/ClientLogos.tsx`

**Header**: Trusted by growth-focused teams

**Logo Selection Guidance**:
- Include at least 1-2 healthcare clients
- Include IT/SaaS clients
- Mix of company sizes

**Alternative Copy Options**:
- "Trusted by teams in healthcare, tech, and beyond"
- "Powering revenue teams across industries"
- "Join 200+ companies running smarter"

---

### 3. Services Overview

**Current Location**: `src/components/sections/Services.tsx`

#### Positioning Reminder
- Lead with capabilities and outcomes
- Platforms are delivery vehicles, not the service itself

---

**Section Label**: What We Do

**Headline**: Revenue systems and integrations that actually work

**Subheadline**: From CRM strategy to automation build-out, we deliver end-to-end RevOps solutions that transform how you attract, engage, and close.

#### Service Cards (Revised for Tech-Agnostic Positioning)

| Service | Description | Key Benefit |
|---------|-------------|-------------|
| **RevOps Strategy & Architecture** | Design unified revenue systems that align sales, marketing, and customer success—regardless of your tech stack. | One source of truth across teams |
| **CRM Implementation & Migration** | Seamless deployment on HubSpot, Salesforce, or custom solutions. Zero data loss, minimal disruption. | Get running in weeks, not months |
| **Marketing Automation** | Intelligent workflows, lead scoring, and nurture sequences that move prospects through your pipeline. | Convert more leads, faster |
| **Custom Integrations** | Connect your CRM with EHR systems, ERPs, billing platforms, and any tool your business depends on. | All your data, connected |
| **Reporting & Analytics** | Custom dashboards that connect marketing spend to closed revenue—across any platform. | Prove ROI to leadership |
| **AI & Workflow Automation** | Leverage AI-powered tools for predictive scoring, chatbots, and intelligent routing. | Free your team from busywork |
| **Website & CMS Development** | High-converting websites on HubSpot CMS, WordPress, or custom builds. | Websites that work for you |

**Platform Footnote** (at bottom of section):
> **Platforms we work with**: HubSpot (Platinum Partner) • Salesforce • Zoho • Pipedrive • Custom APIs & middleware

---

### 4. Stats Section

**Current Location**: `src/components/sections/Stats.tsx`

| Stat | Value | Label | Subtext |
|------|-------|-------|---------|
| Implementations | 200+ | CRM & RevOps Implementations | Successfully deployed |
| Retention | 98% | Client Retention | Year over year |
| Revenue | $4M+ | Revenue Attributed | For our clients |
| Countries | 10+ | Countries Served | Global presence |

**Note**: Changed "HubSpot Implementations" to "CRM & RevOps Implementations" for tech-agnostic positioning.

---

### 5. Industries Section

**Current Location**: `src/components/sections/Industries.tsx`

#### Positioning Reminder
- Healthcare is a FIRST-CLASS vertical (not a footnote)
- Show industry-specific understanding

---

**Section Label**: Who We Serve

**Headline**: Built for industries with complex sales

**Subheadline**: We specialize in organizations where sales cycles are long, compliance matters, and your buyers are technical.

#### Three Industry Cards (Equal Weight)

| Industry | Headline | Description | Key Proof Point |
|----------|----------|-------------|-----------------|
| **Healthcare & Life Sciences** | Revenue systems for regulated environments | We understand HIPAA compliance, EHR integrations, and the nuances of selling to healthcare organizations. From providers to health tech, we build systems that work within your constraints. | "Integrated patient intake with CRM, reducing manual data entry by 80%" [VERIFY] |
| **IT & Technology** | CRM for technical buyers | Long sales cycles, multiple stakeholders, and solutions-based selling require specialized RevOps. We build systems that track complex deals and enable your technical sales team. | "340% increase in qualified leads for SaaS company" |
| **SaaS & Software** | Scale your revenue engine | From startup to scale-up, we architect systems that grow with you—product-led growth integrations, usage-based billing connections, and customer success automation. | "Full Salesforce-to-HubSpot migration in 30 days" |

---

### 6. Differentiation Section (Why Us)

**Current Location**: `src/components/sections/WhyUs.tsx`

**Section Label**: Why Media Garcia

**Headline**: Built different. Built for results.

**Subheadline**: We're not another CRM agency. We combine deep technical expertise with strategic thinking to build systems that drive real business growth.

#### Four Differentiators (Revised)

| # | Title | Description |
|---|-------|-------------|
| 01 | **Platform Expertise, Not Platform Lock-in** | HubSpot Platinum Partner. Salesforce integration experts. Custom API builders. We recommend what's right for your business, not what's easiest for us. |
| 02 | **Industry-Specific Focus** | We specialize in healthcare, IT, and SaaS. We understand your compliance requirements, your buyers, and your sales cycles. |
| 03 | **Outcome-Driven Approach** | We don't just configure CRMs—we architect revenue systems. Every workflow ties to measurable business results. |
| 04 | **Global Reach, Local Touch** | Serving clients across 10+ countries while maintaining the responsiveness and care of a boutique partner. |

---

### 7. Process Section

**Current Location**: `src/components/sections/Process.tsx`

**Section Label**: How We Work

**Headline**: A proven process for results

**Subheadline**: Platform-agnostic methodology that ensures every implementation is strategic, efficient, and built to scale.

#### Four Steps (Revised for Platform-Agnostic Language)

| Step | Title | Description |
|------|-------|-------------|
| 01 | **Discovery** | We dive deep into your business goals, current systems, and team workflows to understand exactly what you need—regardless of platform. |
| 02 | **Strategy** | We design a custom implementation plan aligned with your revenue goals, recommending the right platform and architecture for your needs. |
| 03 | **Build** | Our certified team implements your CRM configuration, integrations, and automation workflows across your chosen stack. |
| 04 | **Launch** | We train your team, migrate your data, and go live with ongoing support to ensure adoption and success. |

---

### 8. Case Studies Section

**Current Location**: `src/components/sections/CaseStudies.tsx`

#### Positioning Reminder
- Include at least ONE healthcare case study
- Show platform diversity (not all HubSpot)

---

**Section Label**: Our Work

**Headline**: Results that speak for themselves

#### Case Study Mix

| Lead Metric | Industry | Platform | Description |
|-------------|----------|----------|-------------|
| **80% Reduction in Manual Data Entry** | Healthcare | HubSpot + EHR Integration | Integrated patient intake system with CRM, automating lead capture and eliminating duplicate data entry for a healthcare provider network. [VERIFY - need real case study] |
| **340% Increase in Qualified Leads** | SaaS | HubSpot | Implemented advanced lead scoring and nurturing workflows that transformed their sales pipeline from chaos to predictable growth. |
| **Full CRM Migration in 30 Days** | Professional Services | Salesforce → HubSpot | Migrated 50,000+ contacts with zero data loss, no downtime, and immediate team adoption. |

**Stats Row** (at bottom of section):
- 200+ CRM Implementations
- 98% Client Retention
- $4M+ Revenue Attributed
- 50+ 5-Star Reviews

---

### 9. FAQ Section

**Current Location**: `src/components/sections/FAQ.tsx`

#### Positioning Reminder
- Platform-agnostic language
- Include healthcare/compliance questions

---

**Section Label**: Common Questions

**Headline**: Frequently asked questions

#### Six FAQs (Revised)

| Question | Answer |
|----------|--------|
| **What platforms do you work with?** | We're a Platinum HubSpot Partner and work extensively with Salesforce, Zoho, Pipedrive, and custom-built solutions. We recommend the platform that fits your needs, budget, and existing tech stack—not the one that's easiest for us. |
| **Do you work with healthcare organizations?** | Yes, healthcare is one of our core verticals. We understand HIPAA compliance requirements, EHR integrations, and the unique challenges of healthcare sales and marketing. We've helped providers, health tech companies, and life sciences organizations build compliant, effective revenue systems. |
| **How long does a typical implementation take?** | Implementation timelines vary based on complexity, but most projects complete within 4-12 weeks. We start with a thorough discovery phase, then build and launch in sprints. Simple CRM onboarding can be done in as little as 2-4 weeks. |
| **Can you migrate our data from another CRM?** | Yes, we've migrated data from Salesforce, Pipedrive, Zoho, legacy systems, and spreadsheets—with zero data loss. Our migration process includes data mapping, cleaning, validation, and thorough testing before go-live. |
| **Do you offer ongoing support after implementation?** | Yes, we offer flexible ongoing support packages. Many clients continue working with us for optimization, training, custom integrations, and strategic guidance. Our goal is long-term partnership—98% of our clients stay with us year over year. |
| **What's included in a revenue systems audit?** | Our free audit includes a comprehensive review of your CRM setup, data quality, automation workflows, lead scoring, reporting configuration, and integration architecture. You'll receive a detailed report with specific recommendations and a prioritized roadmap. |

---

### 10. CTA Banner (Mid-Page)

**Current Location**: `src/components/sections/CTABanner.tsx`

#### Positioning Reminder
- Platform-agnostic CTA
- NO "HubSpot audit" language

---

**Headline**: Ready to build a revenue system that works?

**Subheadline**: Let's discuss how we can transform your CRM into a growth engine—on any platform.

**Primary CTA**: Get Your Free Audit →

**Secondary CTA**: 📞 Call Us Now

---

### 11. Final CTA / Contact Section

**Current Location**: `src/components/sections/Contact.tsx`

**Section Label**: Get Started

**Headline**: Ready to transform how you grow?

**Subheadline**: Tell us about your project and we'll get back to you within 24 hours with a customized plan of action.

#### "What Happens Next" (Add This)

**What happens when you reach out?**

1. **We respond within 24 hours** — A real person reviews your inquiry and gets back to you.
2. **Discovery call** — A 30-minute conversation to understand your goals, challenges, and current systems.
3. **Platform-agnostic recommendation** — We'll suggest the right approach, whether that's HubSpot, Salesforce, custom integration, or something else.
4. **Custom proposal** — A detailed plan with timeline, investment, and expected outcomes.

No hard sell. No platform lock-in. Just a conversation about what's possible.

---

## Quality Checklist

### Positioning Compliance
- [x] HubSpot NOT in headline? **Yes**
- [x] Platforms listed as capabilities, not identity? **Yes**
- [x] Healthcare visible as first-class industry? **Yes**
- [x] Outcome-focused language throughout? **Yes**
- [x] CTAs platform-agnostic? **Yes** — "Free Audit" not "HubSpot Audit"

### 5-Second Test
- [x] Can someone understand what we do? **Yes** — "Revenue systems your team actually uses"
- [x] Is there a clear CTA above the fold? **Yes**
- [x] Do we establish credibility quickly? **Yes**

### Differentiation Check
- [x] Why us vs alternatives is clear? **Yes**
- [x] Multi-platform expertise shown? **Yes**
- [x] Industry focus is visible? **Yes** — Healthcare, IT, SaaS

### Copy Quality
- [x] Jargon removed? **Yes**
- [x] Benefits specific? **Yes**
- [x] Claims provable? **Partial** — Need to verify stats
- [x] Reads naturally? **Yes**

---

## Content Gaps / Dependencies

### Critical Content Needed (P0)

| Content | Current State | Action Required |
|---------|---------------|-----------------|
| Healthcare case study | Placeholder | Document 1 real healthcare case study with verified metrics |
| Client logos (include healthcare) | Placeholder | Get logos from healthcare clients |
| Testimonials from healthcare clients | May be missing | Request healthcare testimonials |
| Salesforce/integration proof points | Not shown | Add case study or proof of multi-platform work |

### Stats to Verify

| Stat | Claim | Verification Needed |
|------|-------|---------------------|
| Implementations | 200+ | Count across all platforms |
| Retention | 98% | How calculated? |
| Revenue Attributed | $4M+ | Methodology? |
| Countries | 10+ | List all countries |

---

## Implementation Notes

### Files to Update

1. **Hero.tsx** — Replace headline, subheadline, remove HubSpot focus
2. **Services.tsx** — Replace service cards with RevOps-first language
3. **Industries.tsx** — Add healthcare with equal weight
4. **WhyUs.tsx** — Update differentiators for multi-platform
5. **Process.tsx** — Platform-agnostic language
6. **CaseStudies.tsx** — Add healthcare case study
7. **FAQ.tsx** — Update questions for platform-agnostic + healthcare
8. **CTABanner.tsx** — Platform-agnostic headline
9. **Contact.tsx** — Add "What happens next"

### Content to Create/Gather

1. Healthcare case study with real metrics
2. Healthcare client logos (with permission)
3. Healthcare testimonials
4. Proof of Salesforce/multi-platform work
5. Verify all stats

---

## Summary

This revised homepage copy:

1. **Leads with outcomes** — "Revenue systems your team actually uses"
2. **Is platform-agnostic** — HubSpot appears as one of several platforms
3. **Makes healthcare visible** — Equal weight with IT/SaaS in Industries section
4. **Includes industry-specific proof** — Healthcare case study placeholder
5. **Uses platform-neutral CTAs** — "Free Audit" instead of "HubSpot Audit"

The positioning shift from "HubSpot Partner" to "RevOps Partner who happens to be excellent at HubSpot" opens the door for healthcare clients who may use other systems while still leveraging the Platinum Partner credential as a trust signal.

---

*Last updated: 2026-02-01*
