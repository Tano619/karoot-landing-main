export const siteConfig = {
  appName: "Karoot",
  domain: "karoot.ca",
  contactEmail: "hello@karoot.ca",
  badge: "Available to download",
  tagline: "Your one stop for pet grooming.",
  hero: {
    headline: "Your one stop for pet grooming in Toronto.",
    subtext:
      "Find a groomer you trust, see real prices, and book in minutes — all in one place. Built by pet parents, for pet parents."
  },
  whoIsKaroot: {
    title: "Who is Karoot?",
    copy:
      "Karoot is the orange-and-white cat behind the name. The app was inspired by the simple idea that pet care should feel easier, warmer, and more trusted — for both pet owners and the people who care for their pets.",
    secondary:
      "Karoot brings that same calm, friendly energy to pet grooming bookings in Toronto."
  },
  storeLinks: {
    appStore: {
      label: "App Store",
      note: "Download on the",
      href: "https://apps.apple.com/ca/app/karoot/id6782400685",
      isAvailable: true
    },
    googlePlay: {
      label: "Google Play",
      note: "Get it on",
      href: "https://play.google.com/store/apps/details?id=com.karoot.android.app",
      isAvailable: true
    }
  },
  howItWorks: [
    {
      audience: "Pet owners",
      title: "Search, compare, book",
      description:
        "Find pet grooming options near you, compare service details, and book from one simple mobile app."
    },
    {
      audience: "Pet Groomers",
      title: "Create, list, receive",
      description:
        "Build your profile, list salon, in-home, or mobile pet grooming services, and receive booking requests. Your chair, your prices, your schedule."
    }
  ],
  serviceTypes: ["Salon grooming", "In-home grooming", "Mobile grooming"],
  features: [
    "Toronto pet grooming marketplace",
    "Salon, in-home, and mobile grooming options",
    "Pet groomer profiles and service listings",
    "Simple booking flow",
    "Built for pet owners and groomers"
  ],
  faq: [
    {
      question: "Is Karoot available yet?",
      answer:
        "Yes — the app is available to download, and we're rolling out across Toronto in the coming weeks."
    },
    {
      question: "Will Karoot be available across Canada?",
      answer:
        "That's the plan. Karoot is a Canada-wide marketplace, starting in Toronto."
    },
    {
      question: "Can mobile groomers join?",
      answer:
        "Yes. Mobile groomers can join and list mobile grooming services for dogs, cats, rabbits, and other pets they care for."
    },
    {
      question: "Can salon-based groomers join?",
      answer:
        "Yes. Salon-based groomers can join Karoot and list their pet grooming services."
    },
    {
      question: "Can in-home groomers join?",
      answer:
        "Yes. In-home groomers can join Karoot and offer grooming services at a pet owner's home."
    },
    {
      question: "Where can I download the app?",
      answer:
        "On the App Store and Google Play — download links are at the top of the homepage."
    },
    {
      question: "How can pet groomers get early access?",
      answer:
        "Pet groomers can download the app to get started, or use the contact email on this website to ask about early access."
    },
    {
      question: "Is Karoot only for dogs?",
      answer:
        "No. Karoot is built for pet grooming and pet care bookings for dogs, cats, rabbits, and other pets, depending on the services offered by groomers."
    }
  ]
};

export type SiteConfig = typeof siteConfig;
