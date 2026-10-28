import type { Metadata } from "next";
import {
  Apple,
  CalendarCheck,
  CheckCircle2,
  HelpCircle,
  Mail,
  MapPin,
  PawPrint,
  Play,
  Scissors,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
  UserRoundPlus
} from "lucide-react";
import { AppMockup } from "@/components/AppMockup";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { KarootCatPhoto } from "@/components/KarootCatPhoto";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteHeader } from "@/components/SiteHeader";
import { StoreButton } from "@/components/StoreButton";
import { siteConfig } from "@/config/site";

const featureIcons = [MapPin, Store, UserRoundPlus, CalendarCheck, ShieldCheck];

export const metadata: Metadata = {
  title: {
    absolute: "Karoot | Pet Grooming Bookings in Toronto"
  },
  description:
    "Karoot helps pet owners in Toronto find grooming services for dogs, cats, rabbits, and other pets."
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-backdrop border-b border-line">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-2xl border border-line bg-white px-3 py-2 text-sm font-bold text-brand shadow-sm">
                <Sparkles aria-hidden="true" className="h-4 w-4" />
                {siteConfig.badge}
              </div>
              <p className="mt-8 text-base font-bold uppercase tracking-[0.2em] text-brand">
                {siteConfig.appName}
              </p>
              <h1 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl lg:text-6xl">
                {siteConfig.hero.headline}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
                {siteConfig.hero.subtext}
              </p>

              <div id="download" className="mt-8 flex flex-col gap-3 sm:flex-row">
                <StoreButton
                  href={siteConfig.storeLinks.appStore.href}
                  icon={Apple}
                  label={siteConfig.storeLinks.appStore.label}
                  note={siteConfig.storeLinks.appStore.note}
                  isAvailable={siteConfig.storeLinks.appStore.isAvailable}
                />
                <StoreButton
                  href={siteConfig.storeLinks.googlePlay.href}
                  icon={Play}
                  label={siteConfig.storeLinks.googlePlay.label}
                  note={siteConfig.storeLinks.googlePlay.note}
                  isAvailable={siteConfig.storeLinks.googlePlay.isAvailable}
                />
              </div>
            </div>
            <AppMockup />
          </div>
        </section>

        <section id="waitlist" className="bg-white px-5 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl rounded-2xl border border-line bg-warm p-6 shadow-sm sm:p-8">
            <div className="grid gap-7 md:grid-cols-[1.15fr_0.85fr] md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
                  Get started
                </p>
                <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
                  Download Karoot.
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
                  Available on the App Store and Google Play — and rolling out
                  across Toronto in the coming weeks.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                <ButtonLink
                  href={siteConfig.storeLinks.appStore.href}
                  icon={Apple}
                  label="Download on the App Store"
                  className="w-full"
                  target="_blank"
                />
                <ButtonLink
                  href={siteConfig.storeLinks.googlePlay.href}
                  icon={Play}
                  label="Get it on Google Play"
                  className="w-full"
                  target="_blank"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="How it works"
              title="One marketplace for both sides of grooming."
              description="Karoot is designed around the two groups that make every booking happen: pet owners and grooming professionals."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {siteConfig.howItWorks.map((item) => (
                <article
                  className="rounded-2xl border border-line bg-white p-6 shadow-sm"
                  key={item.audience}
                >
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand">
                    {item.audience}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="mx-auto w-full max-w-md">
              <KarootCatPhoto priority />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
                Brand story
              </p>
              <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
                {siteConfig.whoIsKaroot.title}
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                {siteConfig.whoIsKaroot.copy}
              </p>
              <p className="mt-4 text-lg font-semibold leading-8 text-ink">
                {siteConfig.whoIsKaroot.secondary}
              </p>
              <ButtonLink
                href="/about"
                icon={PawPrint}
                label="About Karoot"
                variant="secondary"
                className="mt-7"
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Features"
              title="Built for salon, in-home, and mobile grooming."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {siteConfig.features.map((feature, index) => {
                const Icon = featureIcons[index] ?? CheckCircle2;

                return (
                  <article
                    className="rounded-2xl border border-line bg-warm p-5"
                    key={feature}
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-brand">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-base font-bold leading-6 text-ink">
                      {feature}
                    </h3>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="overflow-hidden px-5 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
                App preview
              </p>
              <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
                Multiple service modes, one simple app experience.
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
              <b>Meet us where you are!</b> <br></br>Karoot is designed to support pet owners and groomers with 3 service modes:<br></br>
              Meet at the client's home, at the grooming studio, or meet at a pet wash location. Each service mode is designed to make the booking process simple and clear for both pet owners and groomers.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {siteConfig.serviceTypes.map((service) => (
                  <span
                    className="inline-flex items-center gap-2 rounded-2xl border border-line bg-white px-3 py-2 text-sm font-semibold text-ink shadow-sm"
                    key={service}
                  >
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand" />
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <AppMockup variant="groomer" />
          </div>
        </section>

        <section className="grid md:grid-cols-2">
          <div id="groomers" className="bg-ink px-5 py-16 text-white sm:py-20">
            <div className="mx-auto max-w-lg md:mr-10">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white">
                <Scissors aria-hidden="true" className="h-6 w-6" />
              </span>
              <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
                Pet groomers can join Karoot to receive bookings.
              </h2>
              <p className="mt-4 leading-7 text-white/74">
                Offer salon, in-home, or mobile grooming, create your service profile,
                and be ready to accept booking requests.
              </p>
            </div>
          </div>

          <div id="pet-owners" className="bg-warm px-5 py-16 sm:py-20">
            <div className="mx-auto max-w-lg md:ml-10">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand">
                <PawPrint aria-hidden="true" className="h-6 w-6" />
              </span>
              <h2 className="mt-6 text-3xl font-bold text-ink sm:text-4xl">
                Pet owners can find grooming services nearby.
              </h2>
              <p className="mt-4 leading-7 text-muted">
                Search across grooming options, compare service listings, and find the
                right care for your pet from a trusted marketplace.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-warm px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl rounded-2xl border border-line bg-white p-8 shadow-sm sm:p-10">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
                  For studios · Coming soon
                </p>
                <h2 className="mt-3 text-3xl font-bold text-ink">
                  Own a studio? One business profile, many groomers.
                </h2>
                <p className="mt-4 leading-7 text-muted">
                  Soon, studio owners will be able to run one Karoot business
                  profile with multiple groomer profiles under it — one place
                  for your team, your services, and your bookings. Want in
                  early? Talk to us and we'll set you up first.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <ButtonLink
                  href={`mailto:${siteConfig.contactEmail}?subject=Karoot%20studio%20business%20profile`}
                  icon={Mail}
                  label="Contact Karoot about studios"
                  className="w-full"
                />
                <ButtonLink
                  href="/studios"
                  label="Learn more"
                  variant="secondary"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="FAQ"
              title="Quick answers."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {siteConfig.faq.slice(0, 4).map((item) => (
                <article
                  className="rounded-2xl border border-line bg-warm p-6"
                  key={item.question}
                >
                  <h3 className="text-lg font-bold text-ink">{item.question}</h3>
                  <p className="mt-3 leading-7 text-muted">{item.answer}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <ButtonLink
                href="/faq"
                icon={HelpCircle}
                label="View all FAQs"
                variant="secondary"
              />
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl rounded-2xl border border-line bg-white p-8 shadow-sm sm:p-10">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
                  Stay in touch
                </p>
                <h2 className="mt-3 text-3xl font-bold text-ink">
                  Have a question about Karoot?
                </h2>
                <p className="mt-4 leading-7 text-muted">
                  Pet owners and groomers can reach out any time. We will respond to inquiries about the app, service areas, and bookings.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <ButtonLink
                  href={`mailto:${siteConfig.contactEmail}`}
                  icon={Truck}
                  label={`Email ${siteConfig.appName}`}
                  className="w-full"
                />
                <ButtonLink
                  href="/privacy"
                  icon={ShieldCheck}
                  label="Privacy Policy"
                  variant="secondary"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
