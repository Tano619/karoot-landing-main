import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: {
    default: `${siteConfig.appName} | Pet grooming bookings across Canada`,
    template: `%s | ${siteConfig.appName}`
  },
  description:
    "Karoot is a coming-soon pet grooming and pet care booking app for pet owners and groomers across Canada.",
  openGraph: {
    title: `${siteConfig.appName} | Pet grooming bookings across Canada`,
    description:
      "Find salon, in-home, and mobile pet groomers across Canada with Karoot.",
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
    title: `${siteConfig.appName} | Pet grooming bookings across Canada`,
    description:
      "A coming-soon mobile app for pet owners and groomers across Canada.",
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
      <body>{children}</body>
    </html>
  );
}
