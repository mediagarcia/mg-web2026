# Accessibility Features

This document describes the accessibility features built into the Media Garcia website.

## Skip to Content Link

The skip-to-content link is implemented in `src/app/layout.tsx` (lines 200-205). It uses Tailwind's `sr-only` utility class to hide the link visually until it receives focus, at which point it becomes visible as a focusable element at the top-left of the page.

```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-teal-500 focus:text-white focus:rounded-lg focus:outline-none"
>
  Skip to main content
</a>
```

The main content landmark is implemented with a `<main>` element that has `id="main-content"` and `tabIndex={-1}` (line 208), allowing it to receive programmatic focus after navigation.

## Contact Form Labels

The contact form in `src/components/forms/ContactForm.tsx` uses `aria-label` attributes on all input fields for screen reader accessibility:

- First Name input (line 96)
- Last Name input (line 97)
- Company input (line 100)
- Phone Number input (line 101)
- Email input (line 102)
- Inquiry type select (line 104)
- Message textarea (line 110)

The form also includes a visually-hidden honeypot field (lines 91-93) with `aria-hidden="true"` to prevent spam while keeping it accessible to screen readers if needed.

## Footer Social Links

The social media links in `src/components/Footer.tsx` (lines 158-191) use `aria-label` attributes to provide context for the icon-only links. The labels are:

- Facebook
- Instagram
- YouTube
- LinkedIn

Each link uses `target="_blank"` with `rel="noopener noreferrer"` for security.
