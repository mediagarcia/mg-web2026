# Custom HubSpot Forms Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the HubSpot embed script with custom React form components that submit directly to the HubSpot Forms API, eliminating the race condition that causes blank forms on initial page load.

**Architecture:** Three purpose-built form components (ContactForm, NewsletterForm, WaitlistForm) share a `hubspot-submit.ts` utility that POSTs to the public HubSpot Forms API. Each form owns its own fields, validation, and styling via Tailwind. No external scripts loaded.

**Tech Stack:** React (use client), Next.js App Router, Tailwind CSS, HubSpot Forms Submissions API v3

**Portal ID:** `556151`

---

### Task 1: Create the HubSpot submission helper

**Files:**
- Create: `src/lib/hubspot-submit.ts`

**Step 1: Create the submission utility**

```typescript
const PORTAL_ID = "556151";

interface HubSpotField {
  objectTypeId: string;
  name: string;
  value: string;
}

interface LegitimateInterestConsent {
  value: boolean;
  subscriptionTypeId: number;
  legalBasis: string;
  text: string;
}

interface SubmitOptions {
  formId: string;
  fields: HubSpotField[];
  legitimateInterest?: LegitimateInterestConsent;
  pageName?: string;
}

interface SubmitResult {
  success: boolean;
  error?: string;
}

function getHubSpotCookie(): string {
  const match = document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : "";
}

export async function submitHubSpotForm({ formId, fields, legitimateInterest, pageName }: SubmitOptions): Promise<SubmitResult> {
  const hutk = getHubSpotCookie();

  const body: Record<string, unknown> = {
    fields,
    context: {
      hutk: hutk || undefined,
      pageUri: window.location.href,
      pageName: pageName || document.title,
    },
  };

  if (legitimateInterest) {
    body.legalConsentOptions = {
      legitimateInterest: {
        value: legitimateInterest.value,
        subscriptionTypeId: legitimateInterest.subscriptionTypeId,
        legalBasis: legitimateInterest.legalBasis,
        text: legitimateInterest.text,
      },
    };
  }

  try {
    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${formId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      return {
        success: false,
        error: data?.message || `Submission failed (${res.status})`,
      };
    }

    return { success: true };
  } catch {
    return { success: false, error: "Network error. Please try again." };
  }
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add src/lib/hubspot-submit.ts
git commit -m "feat: add HubSpot Forms API submission helper"
```

---

### Task 2: Create ContactForm component

**Files:**
- Create: `src/components/forms/ContactForm.tsx`

**Context:** This replaces the HubSpotForm embed in:
- `src/components/sections/Contact.tsx` (home page, line 150)
- `src/components/ContactForm.tsx` (standalone wrapper, will be deleted)

The form sits inside a white `rounded-3xl` card with `p-8 lg:p-12` padding. The parent already provides the heading "Start the conversation" and subtext.

**Step 1: Create the ContactForm component**

The form has these fields from the HubSpot API response:
- `firstname` (required, single_line_text)
- `lastname` (optional, single_line_text)
- `company` (required, single_line_text, labeled "Company Domain Name")
- `phone` (required, phone, 7-20 digits)
- `email` (required, email)
- `inquiry_type` (optional, dropdown: "Service Request", "Business Partnership", "Other (specify in message)")
- `message` (required, multi_line_text)

Submit button text: "LET'S TALK"

Legal consent: legitimate interest, subscriptionTypeId `1315317`, with privacy policy link.

Style: Light theme — `bg-gray-50` input backgrounds, `border-gray-200` borders, `rounded-xl` inputs, teal accent for focus rings and submit button.

Privacy text uses JSX with a Link component (no dangerouslySetInnerHTML).

```typescript
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { submitHubSpotForm } from "@/lib/hubspot-submit";

const FORM_ID = "9889726d-8529-4a21-a79a-3fd746e3fc44";
const SUBSCRIPTION_TYPE_ID = 1315317;
const PRIVACY_TEXT_PLAIN =
  "Media Garcia needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at anytime. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, check out our Privacy Policy.";

const INQUIRY_OPTIONS = [
  { label: "Select inquiry type", value: "" },
  { label: "Service Request", value: "Service Request" },
  { label: "Business Partnership", value: "Business Partnership" },
  { label: "Other (specify in message)", value: "Other (specify in message)" },
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (honeypot) return;

    setStatus("submitting");
    setErrorMsg("");

    const result = await submitHubSpotForm({
      formId: FORM_ID,
      pageName: "Contact",
      fields: [
        { objectTypeId: "0-1", name: "firstname", value: firstname },
        { objectTypeId: "0-1", name: "lastname", value: lastname },
        { objectTypeId: "0-1", name: "company", value: company },
        { objectTypeId: "0-1", name: "phone", value: phone },
        { objectTypeId: "0-1", name: "email", value: email },
        { objectTypeId: "0-1", name: "inquiry_type", value: inquiryType },
        { objectTypeId: "0-1", name: "message", value: message },
      ],
      legitimateInterest: {
        value: true,
        subscriptionTypeId: SUBSCRIPTION_TYPE_ID,
        legalBasis: "LEGITIMATE_INTEREST_PQL",
        text: PRIVACY_TEXT_PLAIN,
      },
    });

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMsg(result.error || "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div className="py-8 text-center">
        <p className="text-teal-600 text-lg font-semibold">Thanks for reaching out!</p>
        <p className="text-sm text-black/50 mt-2">We&apos;ll be in touch within 24 hours.</p>
      </div>
    );
  }

  const inputBase =
    "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {/* Honeypot */}
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
        <input type="text" name="website_url" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <input type="text" placeholder="First Name *" required value={firstname} onChange={(e) => setFirstname(e.target.value)} className={inputBase} />
        <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} className={inputBase} />
      </div>

      <input type="text" placeholder="Company *" required value={company} onChange={(e) => setCompany(e.target.value)} className={inputBase} />
      <input type="tel" placeholder="Phone Number *" required value={phone} onChange={(e) => setPhone(e.target.value)} className={inputBase} />
      <input type="email" placeholder="Email *" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputBase} />

      <select value={inquiryType} onChange={(e) => setInquiryType(e.target.value)} className={inputBase}>
        {INQUIRY_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>

      <textarea placeholder="Message *" required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className={`${inputBase} resize-vertical min-h-[120px]`} />

      <p className="text-[10px] text-black/30 leading-snug">
        Media Garcia needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at anytime. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, check out our{" "}
        <Link href="/privacy" className="underline">Privacy Policy</Link>.
      </p>

      {status === "error" && <p className="text-sm text-red-500">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-auto bg-teal-500 hover:bg-teal-600 text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow-lg shadow-teal-500/35 hover:shadow-teal-500/45 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "SENDING..." : "LET'S TALK"}
      </button>
    </form>
  );
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add src/components/forms/ContactForm.tsx
git commit -m "feat: add custom ContactForm with HubSpot API submission"
```

---

### Task 3: Create NewsletterForm component

**Files:**
- Create: `src/components/forms/NewsletterForm.tsx`

**Context:** Replaces the HubSpotForm embed in `src/components/Footer.tsx` (line 134). Lives inside a `w-full md:w-[340px]` container. Dark theme (footer has `bg-gray-900` background). Single email field + "Sign Up" button, inline on one row.

**Step 1: Create the NewsletterForm component**

```typescript
"use client";

import { useState, type FormEvent } from "react";
import { submitHubSpotForm } from "@/lib/hubspot-submit";

const FORM_ID = "1e17d757-c025-44e9-880f-7c4b012695a7";

type Status = "idle" | "submitting" | "success" | "error";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (honeypot) return;

    setStatus("submitting");

    const result = await submitHubSpotForm({
      formId: FORM_ID,
      pageName: "Newsletter Signup",
      fields: [{ objectTypeId: "0-1", name: "email", value: email }],
    });

    setStatus(result.success ? "success" : "error");
  };

  if (status === "success") {
    return (
      <p className="text-teal-400 text-sm font-medium py-2">
        Thanks for subscribing!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Honeypot */}
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
        <input type="text" name="website_url" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>

      <div className="flex gap-2">
        <input
          type="email"
          placeholder="you@company.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-white/[0.08] border border-white/15 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-teal-500 transition-colors"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors disabled:opacity-50"
        >
          {status === "submitting" ? "..." : "Sign Up"}
        </button>
      </div>

      {status === "error" && (
        <p className="text-xs text-red-400 mt-2">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add src/components/forms/NewsletterForm.tsx
git commit -m "feat: add custom NewsletterForm with HubSpot API submission"
```

---

### Task 4: Create WaitlistForm component

**Files:**
- Create: `src/components/forms/WaitlistForm.tsx`

**Context:** Replaces the HubSpotForm in `src/app/poco/PocoPageContent.tsx` (line 233). Amber/Poco themed. Email-only + submit button.

**Step 1: Create the WaitlistForm component**

```typescript
"use client";

import { useState, type FormEvent } from "react";
import { submitHubSpotForm } from "@/lib/hubspot-submit";

const FORM_ID = "ea85ebc5-732f-4c64-a26d-c80eb800e790";

type Status = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (honeypot) return;

    setStatus("submitting");

    const result = await submitHubSpotForm({
      formId: FORM_ID,
      pageName: "Poco Waitlist",
      fields: [{ objectTypeId: "0-1", name: "email", value: email }],
    });

    setStatus(result.success ? "success" : "error");
  };

  if (status === "success") {
    return (
      <p className="text-amber-500 text-sm font-semibold py-2">
        You&apos;re on the list!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Honeypot */}
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
        <input type="text" name="website_url" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>

      <div className="flex gap-2">
        <input
          type="email"
          placeholder="you@company.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-amber-50 border border-amber-200 rounded-full px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/15 transition-colors"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-md shadow-amber-500/30 hover:shadow-amber-500/40 transition-all disabled:opacity-50"
        >
          {status === "submitting" ? "..." : "Notify Me"}
        </button>
      </div>

      {status === "error" && (
        <p className="text-xs text-red-500 mt-2">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add src/components/forms/WaitlistForm.tsx
git commit -m "feat: add custom WaitlistForm with HubSpot API submission"
```

---

### Task 5: Wire up consumers and remove old HubSpotForm

**Files:**
- Modify: `src/components/sections/Contact.tsx` — swap import to new ContactForm
- Modify: `src/components/Footer.tsx` — swap import to new NewsletterForm
- Modify: `src/app/poco/PocoPageContent.tsx` — swap import to new WaitlistForm
- Modify: `src/app/resources/assessment/AssessmentForm.tsx` — remove broken form reference
- Delete: `src/components/HubSpotForm.tsx`
- Delete: `src/components/ContactForm.tsx`

**Step 1: Update `src/components/sections/Contact.tsx`**

Change import from:
```typescript
import { HubSpotForm } from "@/components/HubSpotForm";
```
To:
```typescript
import { ContactForm } from "@/components/forms/ContactForm";
```

Replace the HubSpotForm usage (line 150):
```typescript
// Old: <HubSpotForm formId="9889726d-8529-4a21-a79a-3fd746e3fc44" />
// New: <ContactForm />
```

**Step 2: Update `src/components/Footer.tsx`**

Change import from:
```typescript
import { HubSpotForm } from "@/components/HubSpotForm";
```
To:
```typescript
import { NewsletterForm } from "@/components/forms/NewsletterForm";
```

Remove the `NEWSLETTER_FORM_ID` constant (line 5).

Replace the HubSpotForm usage (line 134):
```typescript
// Old: <HubSpotForm formId={NEWSLETTER_FORM_ID} theme="dark" />
// New: <NewsletterForm />
```

**Step 3: Update `src/app/poco/PocoPageContent.tsx`**

Change import from:
```typescript
import { HubSpotForm } from "@/components/HubSpotForm";
```
To:
```typescript
import { WaitlistForm } from "@/components/forms/WaitlistForm";
```

Replace the HubSpotForm usage (lines 233-236):
```typescript
// Old:
// <HubSpotForm formId="ea85ebc5-732f-4c64-a26d-c80eb800e790" theme="light" />
// New:
// <WaitlistForm />
```

**Step 4: Update `src/app/resources/assessment/AssessmentForm.tsx`**

The form `2769efb5-7d54-4450-987e-9d1206d43d2d` does not exist in HubSpot. Replace with a CTA linking to contact:

```typescript
"use client";

import Link from "next/link";

export function AssessmentForm() {
  return (
    <div className="text-center py-4">
      <p className="text-white/60 text-sm mb-4">
        Ready to get started? Reach out and we&apos;ll walk you through the assessment process.
      </p>
      <Link
        href="/contact"
        className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors"
      >
        Contact Us
      </Link>
    </div>
  );
}
```

**Step 5: Delete old files**

```bash
rm src/components/HubSpotForm.tsx
rm src/components/ContactForm.tsx
```

**Step 6: Verify no remaining imports of HubSpotForm**

Run: `grep -r "HubSpotForm" src/`
Expected: No results

**Step 7: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 8: Commit**

```bash
git add -A
git commit -m "feat: wire up custom forms, remove HubSpotForm embed component"
```

---

### Task 6: Build, verify, and open PR

**Step 1: Run production build**

Run: `npm run build`
Expected: Build succeeds with no errors

**Step 2: Fix any build issues, commit if needed**

**Step 3: Push and open PR**

```bash
git push origin fix/hsform-blank-on-load
gh pr create --title "feat: replace HubSpot embed with custom forms" --body "..."
```

---

### Task 7: Manual verification (post-deploy)

After deployment, verify in incognito:

1. **Home page** — scroll to contact section, form fields render immediately, submit with test data, check HubSpot for the submission
2. **Footer newsletter** — email input + Sign Up button visible on every page, submit works
3. **Poco page** — waitlist email form renders, submit works
4. **Assessment page** — shows "Contact Us" link instead of broken form
5. **Navigation** — forms render correctly after client-side navigation between pages (no blank screens)
