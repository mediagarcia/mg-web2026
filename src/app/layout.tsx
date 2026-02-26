import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ScrollToTopOnNavigation } from "@/components/ScrollToTopOnNavigation";
import { HubSpotTracking } from "@/components/analytics/HubSpotTracking";
import { DevPreviewProviders } from "@/components/DevPreviewProviders";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mediagarcia.com"),
  title: "Media Garcia | RevOps & CRM Experts",
  description: "We build and run digital platforms that keep companies lean, growing, and easy to do business with. Platform-agnostic RevOps expertise across HubSpot, Salesforce, and custom stacks.",
  keywords: ["RevOps", "Revenue Operations", "CRM Implementation", "HubSpot", "HubSpot Partner", "Salesforce Integration", "Marketing Automation", "CRM", "Sales Enablement", "Digital Transformation", "Platform-Agnostic"],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Media Garcia | RevOps & CRM Experts",
    description: "We build and run digital platforms that keep companies lean, growing, and easy to do business with.",
    type: "website",
    url: "https://mediagarcia.com",
    siteName: "Media Garcia",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Garcia | RevOps & CRM Experts",
    description: "We build and run digital platforms that keep companies lean, growing, and easy to do business with.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mediagarcia.com",
  },
  verification: {},
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://mediagarcia.com/#organization",
  name: "Media Garcia",
  url: "https://mediagarcia.com",
  logo: {
    "@type": "ImageObject",
    url: "https://mediagarcia.com/images/logos/mg-logo-black.png",
    width: 1328,
    height: 260,
  },
  description: "We build and run digital platforms that keep companies lean, growing, and easy to do business with.",
  foundingDate: "2010",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Saint Paul",
    addressRegion: "MN",
    addressCountry: "US",
  },
  telephone: "+1-888-612-4250",
  email: "hello@mediagarcia.com",
  sameAs: [
    "https://facebook.com/mediagarcia",
    "https://instagram.com/mediagarcia",
    "https://youtube.com/@mediagarcia",
    "https://www.linkedin.com/company/mediagarcia",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-888-612-4250",
      contactType: "sales",
      areaServed: ["US", "CA"],
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+44-330-822-4087",
      contactType: "sales",
      areaServed: "GB",
      availableLanguage: ["English"],
    },
  ],
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 2,
    maxValue: 10,
  },
  slogan: "Your Growth, Our Mission",
};

// LocalBusiness Schema for local SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://mediagarcia.com/#localbusiness",
  name: "Media Garcia",
  image: "https://mediagarcia.com/opengraph-image",
  url: "https://mediagarcia.com",
  telephone: "+1-888-612-4250",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Saint Paul",
    addressRegion: "MN",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.9444,
    longitude: -93.0900,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Australia" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "HubSpot Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "HubSpot Onboarding",
          description: "Complete HubSpot portal setup and team training",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CRM Migration",
          description: "Seamless data migration from legacy CRM systems",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Marketing Automation",
          description: "Automated workflows and lead nurturing campaigns",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
};

// Combined schemas
const jsonLd = [organizationSchema, localBusinessSchema];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoMono.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <HubSpotTracking />
        <ScrollToTopOnNavigation />
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-teal-500 focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <DevPreviewProviders>
          <Navigation />
          <main id="main-content" tabIndex={-1} className="relative z-40 outline-none">
            {children}
          </main>
          <Footer />
        </DevPreviewProviders>
        <ScrollToTop />
        {/* JSON-LD structured data for SEO - content is a static constant, not user input */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
