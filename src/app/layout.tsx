import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ScrollToTopOnNavigation } from "@/components/ScrollToTopOnNavigation";

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
  title: "Media Garcia | HubSpot Solutions Partner",
  description: "We build and run digital platforms that keep companies lean, growing, and easy to do business with. Elite HubSpot implementation, automation, and growth solutions.",
  keywords: ["HubSpot", "HubSpot Partner", "Marketing Automation", "CRM", "Sales Enablement", "Digital Transformation", "HubSpot Agency", "HubSpot Implementation"],
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Media Garcia | HubSpot Solutions Partner",
    description: "We build and run digital platforms that keep companies lean, growing, and easy to do business with.",
    type: "website",
    url: "https://mediagarcia.com",
    siteName: "Media Garcia",
    locale: "en_US",
    images: [
      {
        url: "https://mediagarcia.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Media Garcia - Platinum HubSpot Solutions Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Garcia | HubSpot Solutions Partner",
    description: "We build and run digital platforms that keep companies lean, growing, and easy to do business with.",
    images: ["https://mediagarcia.com/og-image.jpg"],
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
  verification: {
    // Add these when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
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
    url: "https://mediagarcia.com/logo.png",
    width: 200,
    height: 60,
  },
  description: "We build and run digital platforms that keep companies lean, growing, and easy to do business with.",
  foundingDate: "2011",
  address: {
    "@type": "PostalAddress",
    streetAddress: "428 Minnesota Street, Suite 500",
    addressLocality: "Saint Paul",
    addressRegion: "MN",
    postalCode: "55101",
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
  image: "https://mediagarcia.com/og-image.jpg",
  url: "https://mediagarcia.com",
  telephone: "+1-888-612-4250",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "428 Minnesota Street, Suite 500",
    addressLocality: "Saint Paul",
    addressRegion: "MN",
    postalCode: "55101",
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
    ratingValue: "5",
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
      <body className="font-sans antialiased">
        <ScrollToTopOnNavigation />
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-teal-500 focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
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
