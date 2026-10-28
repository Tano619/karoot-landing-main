import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { karootJsonLd } from "@/config/schema";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: {
    default: `${siteConfig.appName} | Pet grooming bookings in Toronto`,
    template: `%s | ${siteConfig.appName}`
  },
  description:
    "Karoot is a pet grooming and pet care booking app for pet owners and groomers in Toronto.",
  openGraph: {
    title: `${siteConfig.appName} | Pet grooming bookings in Toronto`,
    description:
      "Find salon, in-home, and mobile pet groomers in Toronto with Karoot.",
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.appName,
    images: [
      {
        url: "/images/karoot-cat.jpg",
        width: 3024,
        height: 4032,
        alt: "Karoot, the orange-and-white cat behind the brand"
      }
    ],
    locale: "en_CA",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.appName} | Pet grooming bookings in Toronto`,
    description:
      "A mobile app for pet owners and groomers in Toronto.",
    images: ["/images/karoot-cat.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body className={nunito.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(karootJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
