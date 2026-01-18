import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

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
  keywords: ["HubSpot", "HubSpot Partner", "Marketing Automation", "CRM", "Sales Enablement", "Digital Transformation"],
  openGraph: {
    title: "Media Garcia | HubSpot Solutions Partner",
    description: "We build and run digital platforms that keep companies lean, growing, and easy to do business with.",
    type: "website",
    url: "https://mediagarcia.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Garcia | HubSpot Solutions Partner",
    description: "We build and run digital platforms that keep companies lean, growing, and easy to do business with.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://mediagarcia.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Media Garcia",
  url: "https://mediagarcia.com",
  logo: "https://mediagarcia.com/logo.png",
  description: "We build and run digital platforms that keep companies lean, growing, and easy to do business with.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "428 Minnesota Street, Suite 500",
    addressLocality: "Saint Paul",
    addressRegion: "MN",
    postalCode: "55101",
    addressCountry: "US",
  },
  telephone: "+1-888-612-4250",
  sameAs: [
    "https://facebook.com/mediagarcia",
    "https://instagram.com/mediagarcia",
    "https://youtube.com/@mediagarcia",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-888-612-4250",
    contactType: "sales",
    availableLanguage: ["English"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoMono.variable}`}>
      <body className="font-sans antialiased">
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
