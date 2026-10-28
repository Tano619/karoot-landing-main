import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// AI crawlers are explicitly allowed so Karoot's pages can be picked up
// by AI search and assistants (ChatGPT, Claude, Perplexity, and others).
const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "CCBot",
  "Google-Extended",
  "Applebot-Extended",
  "Meta-ExternalAgent"
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      },
      {
        userAgent: aiCrawlers,
        allow: "/"
      }
    ],
    sitemap: `https://${siteConfig.domain}/sitemap.xml`
  };
}
