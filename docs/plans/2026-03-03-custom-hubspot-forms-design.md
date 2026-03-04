# Custom HubSpot Forms — Design

**Date:** 2026-03-03
**Branch:** fix/hsform-blank-on-load
**Status:** Approved

## Problem

The HubSpot embed script (`js.hsforms.net/forms/embed/v2.js`) races with the HubSpot tracking script (`js.hs-scripts.com`), causing forms to render blank on initial page load. The embed approach also requires 200+ lines of CSS `!important` overrides.

## Decision

Replace all HubSpotForm embed usages with custom React form components that submit directly to the HubSpot Forms API.

## Architecture

```
src/
  lib/
    hubspot-submit.ts           # Shared POST helper
  components/
    forms/
      ContactForm.tsx           # 7-field contact form (light)
      NewsletterForm.tsx        # Email-only inline (dark)
      WaitlistForm.tsx          # Email-only (light/amber, Poco)
```

### Submission helper — `hubspot-submit.ts`

- `POST https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formId}`
- Reads `hutk` cookie from `document.cookie` for tracking continuity
- Sends `pageUri`, `pageName` in context
- Returns `{ success: boolean; error?: string }`
- No external dependencies — just `fetch`

### Forms

| Form | ID | Fields | Theme | Bot protection |
|---|---|---|---|---|
| Contact | `9889726d-8529-4a21-a79a-3fd746e3fc44` | firstname*, lastname, company*, phone*, email*, inquiry_type (dropdown), message* | light | honeypot |
| Newsletter | `1e17d757-c025-44e9-880f-7c4b012695a7` | email* | dark | honeypot |
| Waitlist | `ea85ebc5-732f-4c64-a26d-c80eb800e790` | email* | light (amber) | honeypot |

Each form:
- Controlled inputs with `useState`
- Client-side validation (required, email format, phone digits)
- States: idle → submitting → success | error
- Tailwind styling (no CSS overrides)
- Hidden honeypot field for bot filtering

### Legal consent

Contact form includes legitimate interest consent text (privacy policy link) sent in `legalConsentOptions.legitimateInterest`.

Newsletter and Waitlist have no consent requirements.

### Files removed

- `src/components/HubSpotForm.tsx` (embed component)
- `src/components/ContactForm.tsx` (old wrapper)

### Files modified

- `src/components/sections/Contact.tsx` → new ContactForm
- `src/components/Footer.tsx` → new NewsletterForm
- `src/app/poco/PocoPageContent.tsx` → new WaitlistForm
- `src/app/resources/assessment/AssessmentForm.tsx` → form doesn't exist in HubSpot, remove or placeholder

### Kept as-is

- `src/components/analytics/HubSpotTracking.tsx` — analytics tracking, unrelated to forms
