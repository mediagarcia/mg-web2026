import * as Sentry from "@sentry/nextjs";

const environment =
  process.env.SENTRY_ENVIRONMENT || process.env.NODE_ENV || "development";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment,

  // Performance Monitoring
  tracesSampleRate: environment === "production" ? 0.1 : 1.0,

  // Only enable debug in development
  debug: environment === "development",
});
