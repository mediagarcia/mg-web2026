# Image Preview System Improvements

## Current Progress

### ✅ Completed
- **Services pages (9)**: All have hero images + preview mode
  - hubspot-onboarding, crm-migration, marketing-automation, sales-enablement
  - reporting, ai-automation, integrations, development, marketing
- **Industries pages (3)**: healthcare, information-technology, saas have images + preview mode

### 🔄 In Progress
- Main industries landing page wrapper added (no image yet)
- Industries main page closing tag needs updating

---

## New Feature Request: Auto-Navigate on Slot Change

### Problem
When cycling through image slots (up/down arrows), if a slot is on a **different page**, the user must manually navigate there. This slows down review workflow.

### Solution
Add a **slot-to-page URL mapping** so that when switching to a slot on a different page:
1. Detect the page URL for the new slot
2. Navigate to that page with `?preview=1` param
3. After navigation, scroll to the image section

### Implementation Plan

#### Step 1: Create Slot-to-Page Mapping
Add to `ImagePreviewBar.tsx` or a separate config file:

```typescript
const slotToPageUrl: Record<string, string> = {
  // Homepage slots
  "hero": "/",
  "industries-healthcare": "/",
  "industries-it": "/",
  "industries-saas": "/",
  "why-us": "/",
  "case-studies-generic": "/",

  // Service page slots
  "service-crm-onboarding": "/services/hubspot-onboarding",
  "service-crm-migration": "/services/crm-migration",
  "service-marketing-automation": "/services/marketing-automation",
  "service-sales-enablement": "/services/sales-enablement",
  "service-reporting": "/services/reporting",
  "service-ai-automation": "/services/ai-automation",
  "service-integrations": "/services/integrations",
  "service-development": "/services/development",
  "service-marketing": "/services/marketing",

  // Industry page slots (reuse homepage images on dedicated pages)
  // These need new dedicated slots OR use versioned slots
};
```

#### Step 2: Update `cycleSlot` Function
Modify the slot cycling logic to:
1. Check if new slot's page URL differs from current page
2. If different, use `router.push(pageUrl + "?preview=1")` to navigate
3. Store the target slot in sessionStorage so it's selected after navigation

#### Step 3: Update `useEffect` on Mount
On page load (when preview mode is enabled):
1. Check sessionStorage for a pending slot selection
2. If found, set that slot as current and clear sessionStorage

### Files to Modify
- `src/components/ImagePreviewBar.tsx` - Add mapping, update cycleSlot
- Add `useRouter` from `next/navigation` for navigation

---

## Remix Feature Clarification

### Current Behavior
The "Remix" feature:
1. Opens a text input pre-filled with the slot's current prompt
2. User can modify the prompt
3. Clicking "Generate" creates **3 NEW images** with the modified prompt
4. These are added to the existing variants (not replacing them)

### Why Results Look "Different"
- AI image generation is **non-deterministic** - same prompt produces different results
- Slight prompt changes can cause significant visual differences
- The AI doesn't use the existing image as a reference (fresh generation)

### Potential Improvements (Optional)
1. **Add tooltip/explanation** on Remix button explaining it generates fresh images
2. **Consider image-to-image** if available in Gemini API (not currently supported in basic API)

---

## Pending Tasks

1. **Finish industries page**: Update closing tag for `/industries/page.tsx`
2. **Generate About page images**
3. **Implement auto-navigate feature** as described above
4. **Test and deploy**

---

## Verification

After implementation:
1. Start dev server: `npm run dev`
2. Go to homepage: `http://localhost:3500/?preview=1`
3. Press ↓ to cycle to a service page slot
4. Verify auto-navigation to that service page
5. Verify preview bar shows correct slot selected
6. Verify image displays correctly

---

## Files Modified This Session

### Service Pages (added hero images + preview mode):
- `src/app/services/hubspot-onboarding/page.tsx`
- `src/app/services/crm-migration/page.tsx`
- `src/app/services/marketing-automation/page.tsx`
- `src/app/services/sales-enablement/page.tsx`
- `src/app/services/reporting/page.tsx`
- `src/app/services/ai-automation/page.tsx`
- `src/app/services/integrations/page.tsx`
- `src/app/services/development/page.tsx`
- `src/app/services/marketing/page.tsx`

### Industry Pages (added hero images + preview mode):
- `src/app/industries/healthcare/page.tsx`
- `src/app/industries/information-technology/page.tsx`
- `src/app/industries/saas/page.tsx`
- `src/app/industries/page.tsx` (wrapper added, closing tag pending)

### New Components:
- `src/components/ServicePageWrapper.tsx` - Generic wrapper for preview mode
- `src/components/PageHeaderWithPreview.tsx` - PageHeader with preview context support

### Updated Components:
- `src/components/PageHeader.tsx` - Exported types
