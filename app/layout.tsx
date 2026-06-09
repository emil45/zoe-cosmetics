import type { Metadata, Viewport } from "next";
import { Heebo } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyActions } from "@/components/StickyActions";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { site } from "@/lib/content";
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
    default: `${site.cosmetician} | קוסמטיקאית מקצועית וטיפולי עור מתקדמים`,
    template: `%s | ${site.cosmetician}`
  },
  description: site.description,
  applicationName: site.name,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: `${site.cosmetician} | טיפולי עור מתקדמים בישראל`,
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
    title: `${site.cosmetician} | קוסמטיקה מתקדמת`,
    description: site.description,
    images: [site.image]
  },
  robots: {
    index: true,
    follow: true
  }
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
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyActions />
      </body>
    </html>
  );
}
