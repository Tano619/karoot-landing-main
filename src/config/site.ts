const waitlistUrls = {
  petOwnerUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSeBhVu6RVotynAiK_uPykE8-F0mNUqZz_Ypzqk73yBK0DSWaA/viewform?usp=sharing&ouid=108366432607864710121",
  groomerUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSeuZ1iBbAgykJgVIcNPg6XKUYwFGjaPwZm-pJcwhOpsPzQJPA/viewform?usp=sharing&ouid=108366432607864710121"
};

export const siteConfig = {
  appName: "Karoot",
  domain: "karoot.ca",
  contactEmail: "hello@karoot.ca",
  badge: "Coming Soon",
  tagline: "Pet grooming and care bookings, made easier across Canada.",
  hero: {
    headline: "Book trusted pet grooming across Canada.",
    subtext:
      "Karoot helps pet owners find grooming professionals for dogs, cats, rabbits, and other pets — including salon, in-home, and mobile grooming — while giving pet groomers a simple way to offer their services and manage bookings."
  },
  whoIsKaroot: {
    title: "Who is Karoot?",
    copy:
      "Karoot is the orange-and-white cat behind the name. The app was inspired by the simple idea that pet care should feel easier, warmer, and more trusted — for both pet owners and the people who care for their pets.",
    secondary:
      "Karoot brings that same calm, friendly energy to pet grooming bookings across Canada."
  },
  ctas: {
    petOwners: {
      label: "Join Waitlist as Pet Owner",
      href: "#waitlist"
    },
    groomers: {
      label: "Join Waitlist as Pet Groomer",
      href: "#waitlist"
    }
  },
  waitlist: waitlistUrls,
  storeLinks: {
    appStore: {
      label: "App Store",
      note: "Coming soon",
      href: "/#download",
      isAvailable: false
    },
    googlePlay: {
      label: "Google Play",
      note: "Coming soon",
      href: "/#download",
      isAvailable: false
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
        "Build your profile, list salon, in-home, or mobile pet grooming services, and receive booking requests."
    }
  ],
  serviceTypes: ["Salon grooming", "In-home grooming", "Mobile grooming"],
  features: [
    "Canada-wide pet grooming marketplace",
    "Salon, in-home, and mobile grooming options",
    "Pet groomer profiles and service listings",
    "Simple booking flow",
    "Built for pet owners and groomers"
  ],
  faq: [
    {
      question: "Is Karoot available yet?",
      answer:
        "Karoot is coming soon. The website is live first so pet owners and groomers can learn what is planned before launch."
    },
    {
      question: "Will Karoot be available across Canada?",
      answer:
        "Yes. Karoot is planned as a Canada-wide pet grooming and pet care marketplace."
    },
    {
      question: "Can mobile groomers join?",
      answer:
        "Yes. Mobile groomers will be able to join and list mobile grooming services for dogs, cats, rabbits, and other pets they care for."
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
        "Once Karoot launches, the app will be available on both iOS and Android platforms - The App Store and Google PlayStore. Until then, you can join the waitlist to be notified when the app is available."
    },
    {
      question: "How can pet groomers get early access?",
      answer:
        "Pet groomers can use the contact email on this website to ask about early access."
    },
    {
      question: "Is Karoot only for dogs?",
      answer:
        "No. Karoot is built for pet grooming and pet care bookings for dogs, cats, rabbits, and other pets, depending on the services offered by groomers."
    }
  ]
};

export type SiteConfig = typeof siteConfig;
