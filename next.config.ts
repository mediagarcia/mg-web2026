import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

// Content-Security-Policy directives
// Enforced — verified zero violations on production (homepage, /contact, /pricing).
const cspDirectives = [
  "default-src 'self'",
  // Scripts: self + inline (Next.js requires it) + trusted third-party CDNs
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.hsforms.net https://js.hs-scripts.com https://js.hs-analytics.net https://js.hscollectedforms.net https://js.hs-banner.com https://www.googletagmanager.com https://www.google-analytics.com https://static.hsappstatic.net https://www.google.com https://www.gstatic.com",
  // Styles: self + inline (HubSpot forms inject CSS, Tailwind uses inline)
  "style-src 'self' 'unsafe-inline'",
  // Images: self + data URIs + HubSpot ecosystem + Google Analytics + own domains
  "img-src 'self' data: https://*.hubspot.com https://*.hsappstatic.net https://*.hubspot.net https://www.google-analytics.com https://www.googletagmanager.com https://mediagarcia.com https://*.mediagarcia.com https://track.hubspot.com",
  // API connections: self + HubSpot + Google Analytics + reCAPTCHA + Sentry
  "connect-src 'self' https://*.hubspot.com https://*.hubapi.com https://*.hsforms.com https://*.hs-analytics.net https://*.hscollectedforms.net https://*.hs-banner.com https://hubspot-forms-static-embed.s3.amazonaws.com https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://www.google.com https://*.ingest.us.sentry.io",
  // Frames: HubSpot meetings + reCAPTCHA + own subdomains (hub.mediagarcia.com)
  "frame-src https://app.hubspot.com https://meetings.hubspot.com https://*.hubspot.com https://*.mediagarcia.com https://www.google.com https://www.gstatic.com",
  // Fonts: self only (next/font bundles at build time)
  "font-src 'self'",
  // Workers: Sentry session replay
  "worker-src 'self' blob:",
  // Block all object/embed
  "object-src 'none'",
  // Restrict base URI
  "base-uri 'self'",
  // Restrict form targets
  "form-action 'self' https://*.hubspot.com https://forms.hubspot.com",
].join("; ");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mediagarcia.com",
      },
      {
        protocol: "https",
        hostname: "*.mediagarcia.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/terms-conditions",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "https://hub.mediagarcia.com/blog",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "https://hub.mediagarcia.com/blog",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "https://hub.mediagarcia.com/blog",
        permanent: true,
      },
      // Old site pages → new equivalents (indexed by Google pre-migration)
      {
        source: "/contact-media-garcia",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/our-approach",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/get-started",
        destination: "/book",
        permanent: true,
      },
      {
        source: "/hubspot",
        destination: "/services/hubspot-onboarding",
        permanent: true,
      },
      {
        source: "/marketing",
        destination: "/services/marketing",
        permanent: true,
      },
      {
        source: "/development",
        destination: "/services/development",
        permanent: true,
      },
      {
        source: "/technology",
        destination: "/services/integrations",
        permanent: true,
      },
      {
        source: "/information-technology",
        destination: "/industries/technology",
        permanent: true,
      },
      {
        source: "/roi",
        destination: "/resources/roi-calculator",
        permanent: true,
      },
      {
        source: "/7-steps",
        destination: "/resources/guides",
        permanent: true,
      },
      {
        source: "/data-driven-pillar",
        destination: "/resources/guides",
        permanent: true,
      },
      // Block dev staging pages in production
      ...(process.env.NODE_ENV === "production"
        ? [
            {
              source: "/image-staging",
              destination: "/",
              permanent: false as const,
            },
            {
              source: "/video-staging",
              destination: "/",
              permanent: false as const,
            },
          ]
        : []),
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: cspDirectives,
          },
        ],
      },
    ];
  },
};

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG || "media-garcia",
  project: process.env.SENTRY_PROJECT || "mg-website",
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: true,
  sourcemaps: {
    deleteSourcemapsAfterUpload: true,
  },
});
