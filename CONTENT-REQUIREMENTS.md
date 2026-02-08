# Content Requirements for Media Garcia Website

This document outlines the real content needed to replace placeholder content and maximize conversion.

## Priority 1: Client Logos (High Impact)

**File to update:** `src/components/sections/ClientLogos.tsx`

Need 6-8 real client logos with permission to display:
- [ ] Logo 1: _______________
- [ ] Logo 2: _______________
- [ ] Logo 3: _______________
- [ ] Logo 4: _______________
- [ ] Logo 5: _______________
- [ ] Logo 6: _______________
- [ ] Logo 7 (optional): _______________
- [ ] Logo 8 (optional): _______________

**Requirements:**
- SVG format preferred (PNG acceptable at 240x80px minimum)
- Written permission from each client
- Save to `public/images/clients/`

---

## Priority 2: Case Studies (High Impact)

**File to update:** `src/components/sections/CaseStudies.tsx`

Need 2-3 real case studies with:

### Case Study 1
- [ ] Client name: _______________
- [ ] Industry: _______________
- [ ] Service provided: _______________
- [ ] Key metric/result: _______________
- [ ] Brief description (2 sentences): _______________
- [ ] Permission to reference: [ ] Yes / [ ] Anonymized only

### Case Study 2
- [ ] Client name: _______________
- [ ] Industry: _______________
- [ ] Service provided: _______________
- [ ] Key metric/result: _______________
- [ ] Brief description (2 sentences): _______________
- [ ] Permission to reference: [ ] Yes / [ ] Anonymized only

### Case Study 3
- [ ] Client name: _______________
- [ ] Industry: _______________
- [ ] Service provided: _______________
- [ ] Key metric/result: _______________
- [ ] Brief description (2 sentences): _______________
- [ ] Permission to reference: [ ] Yes / [ ] Anonymized only

---

## Priority 3: Stats Verification (Medium Impact)

**Files to update:** `src/components/sections/Stats.tsx`, `src/components/sections/CaseStudies.tsx`

Verify these numbers are accurate and defensible:

| Stat | Current Value | Verified Value | How Calculated |
|------|---------------|----------------|----------------|
| HubSpot Implementations | 200+ | _________ | _______________ |
| Client Retention | 98% | _________ | _______________ |
| Revenue Attributed | $4M+ | _________ | _______________ |
| Countries Served | 10+ | _________ | _______________ |
| Five-Star Reviews | 50+ | _________ | _______________ |
| Years Experience | 15+ | _________ | _______________ |

---

## Priority 4: Testimonial Photos (Medium Impact)

**File to update:** `src/components/sections/Testimonials.tsx`

Currently using placeholder images for some testimonials. To add real photos:

| Name | Current Status | Photo Needed |
|------|----------------|--------------|
| Ashley Sims | Has placeholder photo | [ ] Request headshot |
| Victoria Naef | Has placeholder photo | [ ] Request headshot |
| R. Higgins | Has placeholder photo | [ ] Request headshot |
| K. Wade | Has placeholder photo | [ ] Request headshot |
| Dr. Brandon Allen | Using initials fallback | [ ] Request headshot |
| Bert Jones | Using initials fallback | [ ] Request headshot |
| Joe Tosti | Using initials fallback | [ ] Request headshot |
| Y. Chow | Using initials fallback | [ ] Request headshot |

**Alternative:** LinkedIn profile photos (with permission) work well.

---

## Priority 5: Team LinkedIn URLs (Low Impact - Partially Done)

**Files to update:** `src/components/sections/Team.tsx`, `src/app/about/page.tsx`

Current status:
- [x] Louis Garcia: Using placeholder URL (`https://www.linkedin.com/in/louisgarcia/`)
- [ ] Verify Louis's correct LinkedIn URL
- [ ] Rochelle Schmidt: Add LinkedIn URL if available

---

## Quick Reference: File Locations

| Content Type | File Path |
|--------------|-----------|
| Client logos | `src/components/sections/ClientLogos.tsx` |
| Case studies | `src/components/sections/CaseStudies.tsx` |
| Stats | `src/components/sections/Stats.tsx` |
| Testimonials | `src/components/sections/Testimonials.tsx` |
| Team (homepage) | `src/components/sections/Team.tsx` |
| Team (about page) | `src/app/about/page.tsx` |
| Logo assets | `public/images/clients/` |
| Testimonial photos | `public/images/testimonials/` |
| Case study images | `public/images/case-studies/` |

---

## Implementation Notes

When you have content ready:
1. Replace placeholder data in the relevant `.tsx` file
2. Add image assets to the `public/images/` subdirectory
3. Run `npm run build` to verify no errors
4. Test locally with `npm run dev`
5. Deploy via Vercel

---

*Last updated: 2026-02-01*
