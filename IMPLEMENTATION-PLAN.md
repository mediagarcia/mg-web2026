# Implementation Plan: WIP Site vs. Audit Findings

## Executive Summary

The WIP redesign addresses **approximately 70% of the audit's critical findings**. The remaining 30% consists primarily of **content gaps** (real testimonials, case studies, client logos) rather than design/development work.

**WIP Score: ~78/100** (up from live site's 52/100)
**Target Score: 90+/100** (requires content completion below)

---

## Gap Analysis: What the WIP Gets Right

### Already Addressed in WIP

| Audit Finding | WIP Solution | Status |
|--------------|--------------|--------|
| Generic hero headline | Pain-point hook + rotating value props | Done |
| No trust signals above fold | HubSpot badge, 50+ reviews, 10+ countries | Done |
| Service pages are text walls | Visual cards with icons, clear structure | Done |
| No FAQ | Comprehensive FAQ component with 6 questions | Done |
| No stats/proof section | Stats section with animated counters | Done |
| No clear differentiation | "Why Media Garcia" section with 4 differentiators | Done |
| Generic CTAs | Specific CTAs like "Start Your Project" | Done |
| Contact form lacks context | "What happens next?" section with process preview | Done |
| Pricing not justified | Improved pricing page with feature comparison | Done |
| No process visibility | Process section showing 4-step methodology | Done |

---

## Gap Analysis: What Still Needs Work

### Critical Content Gaps (Blocks Launch)

| Gap | Current WIP State | Required Action | Priority |
|-----|-------------------|-----------------|----------|
| **Client logos** | Placeholder SVGs (`techcorp.svg`, etc.) | Replace with real client logos | P0 |
| **Testimonials** | Placeholder names ("Sarah Chen", etc.) | Replace with real testimonials from current site | P0 |
| **Case studies** | Placeholder content (TechFlow, Elevate) | Create 3 real case studies with metrics | P0 |
| **Team photos** | Placeholder images | Add real team photos | P0 |
| **Case study images** | Missing actual images | Create or source case study visuals | P1 |

### Functional Gaps

| Gap | Current WIP State | Required Action | Priority |
|-----|-------------------|-----------------|----------|
| **Form submission** | `console.log` only | Integrate with HubSpot forms API | P0 |
| **Meeting booking** | Placeholder `href="#"` | Integrate HubSpot meetings link | P0 |
| **Analytics** | Not implemented | Add GA4 + HubSpot tracking | P1 |
| **SEO meta tags** | Basic implementation | Complete Open Graph + structured data | P1 |

### Minor Improvements

| Gap | Current WIP State | Required Action | Priority |
|-----|-------------------|-----------------|----------|
| LinkedIn links for team | Missing | Add to team section | P2 |
| Louis bio | Brief mention | Expand CEO bio on About page | P2 |
| Blog integration | Page exists but minimal | Connect to HubSpot blog or add posts | P2 |
| 404 page | Basic | Enhance with helpful links | P3 |

---

## Implementation Plan by Phase

### Phase 1: Content Collection (Before Launch)
**Estimated effort: 4-8 hours of coordination + content creation**

#### 1.1 Client Logos
- [ ] Identify 6-8 clients willing to be featured
- [ ] Request permission and obtain high-res logos
- [ ] Create consistent SVG versions for the site
- [ ] Update `ClientLogos.tsx` with real data

**Files to modify:**
- `src/components/sections/ClientLogos.tsx` (replace placeholder array)
- Add logo files to `public/images/clients/`

#### 1.2 Testimonials
- [ ] Extract real testimonials from current live site
- [ ] Contact clients for permission to use full names + photos
- [ ] Prioritize testimonials with specific outcomes/metrics
- [ ] Update `Testimonials.tsx` with real data

**Current live site has these usable testimonials:**
```
- Victoria Naef, Agency Marketing Manager (HubSpot Sales config)
- Joe Tosti, Agency Marketing Manager (CRM implementation)
- Sims, A., VP Marketing at American Hole 'n One (website project)
- Higgins, R., Marketing Manager at Enel X North America (templates)
```

**Files to modify:**
- `src/components/sections/Testimonials.tsx` (replace placeholder array)
- Add author photos to `public/images/testimonials/`

#### 1.3 Case Studies (Critical)
- [ ] Select 3 best client outcomes
- [ ] Document: Challenge → Solution → Results with metrics
- [ ] Get client approval for metrics/naming
- [ ] Write case study content
- [ ] Create individual case study pages

**Suggested structure per case study:**
1. **Lead with the result** (e.g., "340% increase in qualified leads")
2. **The Challenge** (2-3 paragraphs)
3. **Our Approach** (what we actually did)
4. **The Results** (specific metrics)
5. **Client Quote** (with photo and name)

**Files to create:**
- `src/app/work/page.tsx` (case studies index)
- `src/app/work/[slug]/page.tsx` (individual case study template)
- Update `src/components/sections/CaseStudies.tsx` with real data

#### 1.4 Team Photos
- [ ] Obtain professional headshots for Louis and Rochelle
- [ ] Decide on "Specialist Team" presentation
- [ ] Update About page and homepage Team section

**Files to modify:**
- `src/app/about/page.tsx` (update team array)
- `src/components/sections/Team.tsx` (if exists)
- Add photos to `public/images/team/`

---

### Phase 2: Integration Work (Required for Launch)
**Estimated effort: 4-6 hours development**

#### 2.1 HubSpot Form Integration
- [ ] Create HubSpot form for contact submissions
- [ ] Integrate form embed or API submission
- [ ] Test lead routing and notifications

**Files to modify:**
- `src/components/sections/Contact.tsx`
- `src/app/contact/page.tsx`

**Option A: HubSpot Embedded Form**
```tsx
// Add HubSpot form embed script
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
```

**Option B: API Submission**
```tsx
// POST to HubSpot Forms API
const response = await fetch(
  `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
  { method: 'POST', body: JSON.stringify(formData) }
);
```

#### 2.2 HubSpot Meetings Integration
- [ ] Get meetings link from HubSpot
- [ ] Replace placeholder `href="#"` with real link
- [ ] Consider embedding meetings widget vs. link

**Files to modify:**
- `src/app/contact/page.tsx` (line 170-178)
- Any other "Book a Meeting" CTAs

#### 2.3 Analytics Setup
- [ ] Add Google Analytics 4
- [ ] Add HubSpot tracking code
- [ ] Set up conversion events (form submission, meeting booked)

**Files to modify:**
- `src/app/layout.tsx` (add script tags)
- Or create `src/components/Analytics.tsx`

---

### Phase 3: Polish & Enhancement (Post-Launch)
**Estimated effort: 2-4 hours**

#### 3.1 SEO Enhancements
- [ ] Add Open Graph images for social sharing
- [ ] Add structured data (Organization, LocalBusiness)
- [ ] Verify meta descriptions on all pages
- [ ] Add canonical URLs

**Files to modify:**
- `src/app/layout.tsx` (global metadata)
- Individual page `metadata` exports

#### 3.2 Team Section Enhancement
- [ ] Add LinkedIn links for Louis
- [ ] Expand Louis's bio
- [ ] Decide on specialist team presentation (individual vs. team photo)

#### 3.3 Minor Fixes
- [ ] Enhance 404 page
- [ ] Add breadcrumb structured data
- [ ] Test all responsive breakpoints
- [ ] Performance audit (Core Web Vitals)

---

## Content Templates

### Testimonial Template
```typescript
{
  quote: "[Specific outcome statement] + [how they felt about working with us]",
  author: "Full Name",
  title: "Job Title",
  company: "Company Name",
  image: "/images/testimonials/[name].jpg",
  rating: 5,
}
```

### Case Study Template
```typescript
{
  title: "[X% Improvement] in [Metric]",  // Lead with result
  client: "Company Name",
  industry: "SaaS | IT | Professional Services",
  service: "HubSpot Onboarding | Marketing Automation | etc.",
  challenge: "...",
  solution: "...",
  results: [
    { metric: "340%", label: "Increase in MQLs" },
    { metric: "30 days", label: "Implementation time" },
    { metric: "$500K", label: "Pipeline generated" },
  ],
  testimonial: { quote, author, title },
  image: "/images/case-studies/[slug].jpg",
}
```

### Client Logo Requirements
- Format: SVG preferred (PNG fallback)
- Size: ~120x40px display size
- Style: Grayscale on load, color on hover
- Quantity: 6-8 logos minimum

---

## Launch Checklist

### Before Launch (P0)
- [ ] Real client logos in place
- [ ] Real testimonials with full names
- [ ] At least 2 case studies with real metrics
- [ ] Real team photos
- [ ] HubSpot form integration working
- [ ] HubSpot meetings link working
- [ ] All placeholder content replaced
- [ ] Mobile responsive verified
- [ ] Forms tested end-to-end

### Launch Day
- [ ] DNS cutover
- [ ] SSL certificate active
- [ ] Analytics tracking verified
- [ ] HubSpot tracking verified
- [ ] Redirects configured (if URL structure changed)
- [ ] Old site archived

### Post-Launch (P1-P2)
- [ ] Third case study added
- [ ] SEO meta optimized
- [ ] Blog content strategy
- [ ] Performance optimization
- [ ] A/B testing setup

---

## Effort Estimates

| Phase | Effort | Dependencies |
|-------|--------|--------------|
| Phase 1: Content | 4-8 hrs coordination | Client permissions |
| Phase 2: Integration | 4-6 hrs dev | HubSpot portal access |
| Phase 3: Polish | 2-4 hrs dev | None |
| **Total** | **10-18 hours** | |

---

## Risk Assessment

### High Risk
- **Client permissions for testimonials/logos** - May delay launch if clients are slow to respond
- **Case study metrics** - Need real numbers, can't fabricate

### Medium Risk
- **HubSpot form/meetings integration** - May require troubleshooting
- **Team photos** - If not available, consider illustrated avatars temporarily

### Low Risk
- **SEO/Analytics** - Can be added incrementally post-launch
- **Minor polish items** - Don't block launch

---

## Recommended Launch Strategy

### Option A: Staged Launch (Recommended)
1. **Week 1**: Launch with current testimonials/logos from live site (even with initials)
2. **Week 2-3**: Collect new testimonials with full permissions
3. **Week 4**: Add case studies as completed

**Rationale**: The WIP is already significantly better than live. Don't let perfect be the enemy of good.

### Option B: Full Launch
Wait until all content is complete before switching.

**Risk**: Extended timeline, continued conversion loss on live site.

---

## Files Changed Summary

### Must Modify Before Launch
- `src/components/sections/ClientLogos.tsx`
- `src/components/sections/Testimonials.tsx`
- `src/components/sections/CaseStudies.tsx`
- `src/components/sections/Contact.tsx`
- `src/app/contact/page.tsx`
- `src/app/about/page.tsx`

### Images Needed
- `/public/images/clients/` - 6-8 client logos
- `/public/images/testimonials/` - 4+ author photos
- `/public/images/team/` - Team headshots
- `/public/images/case-studies/` - Case study imagery

### Pages to Create
- `src/app/work/page.tsx` - Case studies index
- `src/app/work/[slug]/page.tsx` - Case study detail template

---

## SEO Implementation Status & Recommendations

### Current SEO Foundation (Already in WIP)

| Element | Status | Location |
|---------|--------|----------|
| Meta title/description | Done | `layout.tsx` + page-level |
| Open Graph tags | Done | `layout.tsx` metadata |
| Twitter cards | Done | `layout.tsx` metadata |
| Canonical URLs | Done | `layout.tsx` alternates |
| robots.txt | Done | `public/robots.txt` |
| XML Sitemap | Done | `src/app/sitemap.ts` |
| Organization Schema | Done | `layout.tsx` JSON-LD |
| Semantic HTML | Done | Proper heading hierarchy |
| Skip to content | Done | Accessibility link in layout |

### SEO Gaps to Address

#### P1 - Before/At Launch

| Gap | Current State | Fix | Files |
|-----|---------------|-----|-------|
| **OG Images missing** | No `og:image` defined | Create 1200x630 OG image | `layout.tsx`, `public/og-image.jpg` |
| **Sitemap incomplete** | Missing About, Pricing, Contact, AI-Automation | Add all pages | `src/app/sitemap.ts` |
| **Page-specific canonicals** | Only global canonical | Add per-page canonicals | Each page's metadata |
| **LocalBusiness schema** | Only Organization | Add LocalBusiness for local SEO | `layout.tsx` |
| **Service schema** | Missing | Add Service schema per service page | Service pages |

#### P2 - Post-Launch

| Gap | Recommendation |
|-----|----------------|
| **FAQ Schema** | Add FAQPage schema to FAQ section |
| **Breadcrumb Schema** | Add BreadcrumbList schema |
| **Review/Rating Schema** | Add AggregateRating from testimonials |
| **HowTo Schema** | Add to process sections |
| **Blog Article Schema** | Add when blog is active |

### SEO Quick Wins to Implement Now

#### 1. Complete the Sitemap
```typescript
// Add to sitemap.ts
{ url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
{ url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
{ url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
{ url: `${baseUrl}/services/ai-automation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
{ url: `${baseUrl}/services/development`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
{ url: `${baseUrl}/services/marketing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
```

#### 2. Add OG Image to Layout
```typescript
openGraph: {
  // ... existing
  images: [
    {
      url: 'https://mediagarcia.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Media Garcia - HubSpot Solutions Partner',
    },
  ],
},
```

#### 3. Add LocalBusiness Schema
```typescript
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://mediagarcia.com/#localbusiness",
  name: "Media Garcia",
  image: "https://mediagarcia.com/logo.png",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "428 Minnesota Street, Suite 500",
    addressLocality: "Saint Paul",
    addressRegion: "MN",
    postalCode: "55101",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.9444,
    longitude: -93.0900,
  },
  telephone: "+1-888-612-4250",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
};
```

#### 4. Add FAQPage Schema (for FAQ section)
```typescript
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};
```

### Target Keywords by Page

| Page | Primary Keyword | Secondary Keywords |
|------|-----------------|-------------------|
| Homepage | HubSpot partner | HubSpot implementation, HubSpot agency |
| HubSpot Onboarding | HubSpot onboarding | HubSpot setup, HubSpot CRM setup |
| Sales Enablement | HubSpot sales enablement | sales automation, HubSpot workflows |
| Marketing Automation | HubSpot marketing automation | email automation, lead nurturing |
| CRM Migration | HubSpot migration | Salesforce to HubSpot, CRM migration |
| Reporting | HubSpot reporting | HubSpot dashboards, HubSpot analytics |
| IT Industry | HubSpot for IT companies | HubSpot for tech companies |
| SaaS Industry | HubSpot for SaaS | SaaS CRM, SaaS marketing automation |

### Technical SEO Checklist

- [x] HTTPS enabled
- [x] Mobile responsive
- [x] Proper heading hierarchy (h1 → h2 → h3)
- [x] Alt text on images (check all)
- [x] Clean URL structure
- [ ] Core Web Vitals audit (run after launch)
- [ ] Image optimization (WebP, lazy loading)
- [ ] Internal linking strategy
- [ ] 301 redirects from old URLs (if structure changed)
