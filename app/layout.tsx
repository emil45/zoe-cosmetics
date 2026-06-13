import type { Metadata, Viewport } from "next";
import { Heebo } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyActions } from "@/components/StickyActions";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/lib/content";
import { isIndexable } from "@/lib/site-url";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heebo",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.cosmetician} | קוסמטיקאית באשדוד וטיפולי עור מתקדמים`,
    template: `%s | ${site.cosmetician}`
  },
  description: site.description,
  applicationName: site.name,
  // NOTE: no default `alternates.canonical` here on purpose — Next.js inherits
  // it into every child route, which would collapse all pages to the homepage.
  // Each page sets its own self-referencing canonical via buildMetadata().
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: `${site.cosmetician} | קוסמטיקאית באשדוד וטיפולי עור מתקדמים`,
    description: site.description,
    url: site.url,
    images: [
      {
        url: site.image,
        width: 1200,
        height: 800,
        alt: "קליניקה קוסמטית מקצועית ונקייה"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.cosmetician} | קוסמטיקאית באשדוד`,
    description: site.description,
    images: [site.image]
  },
  // Indexable only once the real domain is configured (NEXT_PUBLIC_SITE_URL).
  // Until then the temporary *.vercel.app deployment is kept out of the index.
  robots: isIndexable()
    ? { index: true, follow: true }
    : { index: false, follow: false }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbfaf7"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="he" className={heebo.variable}>
      <body className="font-sans">
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyActions />
      </body>
      {/* GA4 — loaded only on deployed builds, never in local dev. */}
      {process.env.NODE_ENV === "production" && site.gaId ? (
        <GoogleAnalytics gaId={site.gaId} />
      ) : null}
    </html>
  );
}
