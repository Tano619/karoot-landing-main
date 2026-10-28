import type { Metadata } from "next";
import { Mail, PawPrint, Scissors, Store } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    absolute: "For Studios | Karoot"
  },
  description:
    "Studio owners: one Karoot business profile with multiple groomer profiles — coming soon. Contact Karoot to get set up first."
};

export default function StudiosPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-backdrop border-b border-line px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
                For studios · Coming soon
              </p>
              <h1 className="mt-6 text-4xl font-black leading-tight text-ink sm:text-5xl">
                One studio. Every groomer. One profile.
              </h1>
              <p className="mt-5 text-lg leading-8 text-muted">
                Run your whole studio on Karoot — one business profile with
                each groomer's services and bookings under it. It's coming
                soon, and we're setting early studios up first.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:py-20">
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-warm text-brand">
                <Store aria-hidden="true" className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-xl font-bold text-ink">
                One business profile
              </h2>
              <p className="mt-3 leading-7 text-muted">
                Your studio's name, services, and story in one place, so pet
                parents find the studio and the groomer in a single search.
              </p>
            </article>

            <article className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-warm text-brand">
                <Scissors aria-hidden="true" className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-xl font-bold text-ink">
                Multiple groomer profiles
              </h2>
              <p className="mt-3 leading-7 text-muted">
                Each groomer on your team keeps their own profile, services,
                and bookings — all under your studio's roof.
              </p>
            </article>

            <article className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-warm text-brand">
                <PawPrint aria-hidden="true" className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-xl font-bold text-ink">
                Get set up first
              </h2>
              <p className="mt-3 leading-7 text-muted">
                Studio profiles are coming soon. Talk to us now and we'll
                get your studio ready before they open to everyone.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl rounded-2xl border border-line bg-warm p-6 shadow-sm sm:p-8">
            <div className="grid gap-7 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <h2 className="text-3xl font-bold text-ink">
                  Want your studio on Karoot?
                </h2>
                <p className="mt-3 leading-7 text-muted">
                  Tell us about your studio — where you are, how many
                  groomers are on your team, and what you offer — and we'll
                  reach out about early setup.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <ButtonLink
                  href={`mailto:${siteConfig.contactEmail}?subject=Karoot%20studio%20business%20profile`}
                  icon={Mail}
                  label="Email Karoot about studios"
                  className="w-full"
                />
                <ButtonLink
                  href="/"
                  label="Back to home"
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
