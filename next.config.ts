import type { NextConfig } from "next";

// Content-Security-Policy directives
// Deployed as Report-Only first — switch to enforcing once verified in production.
// To enforce: rename the header key from "Content-Security-Policy-Report-Only"
// to "Content-Security-Policy".
const cspDirectives = [
  "default-src 'self'",
  // Scripts: self + inline (Next.js requires it) + trusted third-party CDNs
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.hsforms.net https://js.hs-scripts.com https://js.hs-analytics.net https://js.hscollectedforms.net https://js.hs-banner.com https://www.googletagmanager.com https://www.google-analytics.com https://static.hsappstatic.net https://www.google.com https://www.gstatic.com",
  // Styles: self + inline (HubSpot forms inject CSS, Tailwind uses inline)
  "style-src 'self' 'unsafe-inline'",
  // Images: self + data URIs + HubSpot ecosystem + Google Analytics + own domains
  "img-src 'self' data: https://*.hubspot.com https://*.hsappstatic.net https://*.hubspot.net https://www.google-analytics.com https://www.googletagmanager.com https://mediagarcia.com https://*.mediagarcia.com https://track.hubspot.com",
  // API connections: self + HubSpot + Google Analytics + reCAPTCHA
  "connect-src 'self' https://*.hubspot.com https://*.hubapi.com https://*.hs-analytics.net https://*.hscollectedforms.net https://*.hs-banner.com https://www.google-analytics.com https://www.googletagmanager.com https://www.google.com",
  // Frames: HubSpot meetings + reCAPTCHA
  "frame-src https://app.hubspot.com https://meetings.hubspot.com https://*.hubspot.com https://www.google.com https://www.gstatic.com",
  // Fonts: self only (next/font bundles at build time)
  "font-src 'self'",
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
            key: "Content-Security-Policy-Report-Only",
            value: cspDirectives,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
