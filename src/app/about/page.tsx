import type { Metadata } from "next";
import { HeartHandshake, PawPrint, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { KarootCatPhoto } from "@/components/KarootCatPhoto";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    absolute: "About Karoot | Pet Grooming Bookings Across Canada"
  },
  description:
    "Learn about Karoot, a Canada-wide pet grooming and care booking app for pet owners and groomers."
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="px-5 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="mx-auto w-full max-w-md">
              <KarootCatPhoto priority />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
                About
              </p>
              <h1 className="mt-3 text-4xl font-black leading-tight text-ink sm:text-5xl">
                About Karoot
              </h1>
              <p className="mt-5 text-lg leading-8 text-muted">
                Karoot is named after the orange-and-white cat here. The
                brand began with a simple idea: pet care should feel easier,
                warmer, and more trusted for both pet owners and the people who
                care for their pets.
              </p>
              <p className="mt-4 text-lg leading-8 text-muted">
                The app is being built for pet grooming and pet care bookings
                across Canada, including services for dogs, cats, rabbits, and
                other pets depending on what each pet groomer or care provider offers.
              </p>
              <p className="mt-4 text-lg font-semibold leading-8 text-ink">
                Karoot brings calm, friendly energy to a booking experience that
                should feel clear from the first search to the final appointment.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
            <article className="rounded-lg border border-line bg-warm p-6">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-white text-brand">
                <PawPrint aria-hidden="true" className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-xl font-bold text-ink">Pet-first</h2>
              <p className="mt-3 leading-7 text-muted">
                Karoot is for pet owners looking for trusted services for dogs,
                cats, rabbits, and other pets.
              </p>
            </article>

            <article className="rounded-lg border border-line bg-warm p-6">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-white text-brand">
                <HeartHandshake aria-hidden="true" className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-xl font-bold text-ink">Groomer-friendly</h2>
              <p className="mt-3 leading-7 text-muted">
                Pet groomers and pet care providers can present their services clearly
                and receive booking requests when Karoot launches.
              </p>
            </article>

            <article className="rounded-lg border border-line bg-warm p-6">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-white text-brand">
                <Sparkles aria-hidden="true" className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-xl font-bold text-ink">Warm and simple</h2>
              <p className="mt-3 leading-7 text-muted">
                The goal is a clean & transparent booking experience that feels
                professional without feeling cold.
              </p>
            </article>
          </div>
        </section>

        <section className="px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl rounded-lg border border-line bg-white p-8 text-center shadow-sm sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
              Coming soon
            </p>
            <h2 className="mt-3 text-3xl font-bold text-ink">
              Pet grooming bookings across Canada.
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Karoot is still in development. App Store and
              Google Play links will be updated when the app is launched.
            </p>
            <ButtonLink
              href="/contact"
              icon={HeartHandshake}
              label="Contact Karoot"
              className="mt-7"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
