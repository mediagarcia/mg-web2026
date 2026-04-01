import * as Sentry from "@sentry/nextjs";

const environment =
  process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT ||
  process.env.NODE_ENV ||
  "development";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment,

  // Performance Monitoring
  tracesSampleRate: environment === "production" ? 0.1 : 1.0,

  // Session Replay
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 1.0,

  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],

  // Filter noisy errors
  ignoreErrors: [
    // Browser resize observer noise
    "ResizeObserver loop limit exceeded",
    "ResizeObserver loop completed with undelivered notifications",

    // Network errors (not actionable)
    "Failed to fetch",
    "NetworkError",
    "Network request failed",

    // Non-Error promise rejections (usually third-party)
    /^Non-Error promise rejection captured/,
  ],

  // Deny URLs from browser extensions
  denyUrls: [
    /extensions\//i,
    /^chrome:\/\//i,
    /^chrome-extension:\/\//i,
    /^moz-extension:\/\//i,
  ],

  // Only enable debug in development
  debug: environment === "development",
});
