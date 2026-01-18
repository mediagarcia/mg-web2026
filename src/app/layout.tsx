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
        <Navigation />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
