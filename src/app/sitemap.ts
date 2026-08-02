import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const baseUrl = `https://${siteConfig.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/early-access`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date()
    }
  ];
}
