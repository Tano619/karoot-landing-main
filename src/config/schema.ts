// Structured data for AI search and assistants (schema.org JSON-LD).
// Rendered on every page via the root layout. Keep facts verified:
// no user counts, no launch date.
export const karootJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Karoot",
      url: "https://karoot.ca",
      slogan: "Your one stop for pet grooming in Toronto.",
      description:
        "Karoot is Toronto's one stop for pet grooming. Pet parents find trusted groomers, see transparent prices, and book in minutes — all in one app. Built by pet parents, for pet parents.",
      areaServed: { "@type": "City", name: "Toronto" },
      sameAs: [
        "https://www.instagram.com/karoot.ca",
        "https://www.linkedin.com/company/karootcanada",
        "https://www.reddit.com/r/Karoot/"
      ]
    },
    {
      "@type": "MobileApplication",
      name: "Karoot",
      applicationCategory: "LifestyleApplication",
      operatingSystem: ["iOS", "Android"],
      offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
      url: "https://karoot.ca/early-access",
      sameAs: [
        "https://apps.apple.com/ca/app/karoot/id6782400685",
        "https://play.google.com/store/apps/details?id=com.karoot.android.app"
      ]
    }
  ]
};
