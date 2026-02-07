# Case Studies Competitive Analysis

## Executive Summary

Analyzed 8 competitor sites (4 direct HubSpot partners, 4 aspirational tech companies) to identify best practices for case study presentation. Key findings: **metrics-first headlines**, **robust filtering by industry/service**, and **prominent CTAs** are table stakes for conversion-focused case study pages.

---

## Competitor Analysis Matrix

| Aspect | Aptitude8 | SmartBug | New Breed | Remotish | Webflow | Stripe | Vercel |
|--------|-----------|----------|-----------|----------|---------|--------|--------|
| **URL Structure** | /case_studies | /case-studies | /case-studies/[company] | Redirects to MediaJunction | /customers/[company] | /customers | /customers |
| **Index Layout** | 3-col grid | 3-col grid | Multi-col cards | N/A (empty) | Grid + pagination | Card grid | Hero + grid |
| **Filtering** | Tags on cards | Industry, Platform, Type | Marketing/Sales/Service/Ops | Industry dropdown | Role, Size, Industry | None visible | Industry tabs |
| **Card Content** | Image, title, date, tags | Image, headline, CTA | Logo, description | N/A | Logo, tags, narrative, metric | Logo, image, title | Logo, quote, metric |
| **Metrics Display** | In titles only | In headlines | Buried in text | N/A | Bold in narrative | Not prominent | Lead with metrics |
| **Testimonials** | Individual pages | Individual pages | Individual pages | N/A | Not on index | Not visible | Exec quotes on cards |
| **CTAs** | Card links | "Read Case Study" buttons | "Request Assessment" (3x) | "Get started" | "Read story" links | Hover-reveal | "Get Demo" + "Read story" |
| **Visual Treatment** | High-quality graphics | Client photos, videos | Minimal, logos only | N/A | Hero images, dark logos | Parallax, gradients | Logo grids, clean |
| **Effectiveness** | Strong metrics in titles | Comprehensive filtering | Multiple conversion CTAs | Incomplete | Multi-dimension filtering | Premium feel, visual-first | Metric-forward, executive quotes |

---

## Key Patterns by Category

### 1. URL Structure
- **Best Practice**: `/case-studies/[client-slug]` or `/customers/[client-slug]`
- **Recommendation**: Keep current `/work/[slug]` OR consider `/case-studies/[slug]` for SEO clarity

### 2. Index Page Layout
| Pattern | Who Uses It | Effectiveness |
|---------|-------------|---------------|
| 3-column grid | Aptitude8, SmartBug | Good for scanning, industry standard |
| Hero + grid | Vercel, New Breed | Featured story draws attention |
| Paginated grid | Webflow | Scales well with many case studies |

**Recommendation**: Add featured case study hero, then grid below with filtering

### 3. Filtering Options
| Filter Type | Frequency | Recommendation |
|-------------|-----------|----------------|
| Industry | 5/7 sites | Must have |
| Service/Product | 4/7 sites | Must have |
| Company Size | 2/7 sites | Nice to have |
| Role (Engineering/Marketing) | 1/7 sites | Consider for future |

### 4. Card Content (Pre-Click)
**Must Show:**
- Client name/logo
- Result-focused headline (metric in title)
- Industry tag
- Service tag
- Primary metric highlighted

**Optional:**
- Hero image
- Brief description
- CTA button

### 5. Metrics Display
| Approach | Example | Who Uses It |
|----------|---------|-------------|
| Metric-first headlines | "45% Increase in Qualified Leads" | Aptitude8, SmartBug, New Breed |
| Bold stats in narrative | "47% Increase in demo bookings" | Webflow |
| Separate metrics row | Show 2-3 metrics prominently | Vercel |
| Visual storytelling | Minimal metrics, focus on narrative | Stripe |

**Recommendation**: Metric-first headlines + separate metrics display on cards

### 6. Testimonials
- Most sites save testimonials for individual case study pages
- Vercel shows executive quotes directly on cards (effective differentiator)
- Video testimonials mentioned as valuable but rarely seen on index pages

### 7. CTAs and Conversion
| CTA Type | Placement | Example |
|----------|-----------|---------|
| Card-level | On each card | "Read Case Study" button |
| Page-level | Hero/footer | "Request Assessment", "Get Demo" |
| Hover-reveal | On card hover | Stripe pattern |

**Key Finding**: New Breed shows "Request Assessment" 3 times on one page - aggressive but effective

### 8. Visual Treatment
| Element | Best Practice |
|---------|---------------|
| Client logos | Show on cards (trust signal) |
| Hero images | Use for featured stories |
| Gradients/overlays | Add visual interest without clutter |
| Videos | Include where available (on individual pages) |

---

## Recommendations for Media Garcia

### Immediate Enhancements

1. **Add Filtering**
   - Industry filter (Healthcare, SaaS, IT Services, etc.)
   - Service filter (HubSpot Implementation, CRM Migration, Marketing Automation, etc.)

2. **Enhance Card Design**
   - Add client logo to cards
   - Show primary metric more prominently
   - Add subtle hover CTA like "View Case Study"

3. **Add Featured Case Study**
   - Hero section at top for best case study
   - Larger format with more detail

4. **Strengthen CTAs**
   - Add "Get Similar Results" CTA in footer
   - Consider inline CTA after every 3-4 case studies

### Data Structure Additions

```typescript
interface CaseStudy {
  // Existing fields...

  // New fields
  featured?: boolean;
  clientLogo?: string;
  clientSize?: string;
  clientLocation?: string;
  videoTestimonial?: string;
  screenshots?: { src: string; caption: string }[];
  publishDate?: string;
}
```

### Page Structure Enhancements

```
Index Page:
├── Hero section (keep existing)
├── Featured Case Study (new)
├── Filters (new)
├── Case Study Grid (enhance cards)
├── Stats Row (keep)
└── CTA Banner (keep)

Individual Page:
├── Hero with metrics (enhance)
├── Hero image (keep)
├── Challenge section (keep)
├── Solution section (keep)
├── Screenshots gallery (new)
├── Results section (keep)
├── Testimonial section (keep)
├── Related case studies (keep)
└── CTA Banner (keep)
```

---

## Competitive Advantages to Build

1. **Speed/Timeline Focus**: Emphasize quick implementations (e.g., "30 days", "6 weeks") - differentiator from slower agencies

2. **ROI Transparency**: Show specific ROI numbers (e.g., "< 90 days to full ROI") - builds trust

3. **Before/After Comparisons**: Visual data transformations - not commonly seen but highly effective

4. **Tech Stack Details**: For technical buyers, show specific integrations and tools used

---

## Implementation Priority

| Priority | Enhancement | Effort | Impact |
|----------|-------------|--------|--------|
| P0 | Add filtering (industry + service) | Medium | High |
| P0 | Enhance card with metrics display | Low | High |
| P1 | Add featured case study section | Medium | Medium |
| P1 | Add client logos | Low | Medium |
| P2 | Add screenshots gallery to detail pages | Medium | Medium |
| P2 | Add video testimonial support | Low | Low |
| P3 | Add company size/location filters | Low | Low |

---

## Sources

- aptitude8.com/case_studies
- smartbugmedia.com/case-studies
- newbreedrevenue.com/case-studies
- remotish.agency (redirects to mediajunction.com)
- webflow.com/customers
- stripe.com/customers
- vercel.com/customers
