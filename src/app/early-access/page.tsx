import type { Metadata } from "next";
import { Bell, PawPrint, Scissors, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    absolute: "Early Access | Karoot"
  },
  description:
    "Join the Karoot waitlist for pet owners and groomers to get launch updates."
};

export default function EarlyAccessPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-backdrop border-b border-line px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 text-sm font-bold text-brand shadow-sm">
                <Bell aria-hidden="true" className="h-4 w-4" />
                Launch updates
              </div>
              <h1 className="mt-6 text-4xl font-black leading-tight text-ink sm:text-5xl">
                Get early access to Karoot
              </h1>
              <p className="mt-5 text-lg leading-8 text-muted">
                Join the waitlist to be notified when Karoot launches in your area.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:py-20">
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
            <article className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-warm text-brand">
                <PawPrint aria-hidden="true" className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-2xl font-bold text-ink">Pet Owners</h2>
              <p className="mt-3 leading-7 text-muted">
                For people who want to book pet grooming and care services through Karoot.
              </p>
            </article>

            <article className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-warm text-brand">
                <Scissors aria-hidden="true" className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-2xl font-bold text-ink">Pet Groomers</h2>
              <p className="mt-3 leading-7 text-muted">
                For service providers who want to offer grooming services through Karoot.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl rounded-lg border border-line bg-warm p-6 shadow-sm sm:p-8">
            <div className="grid gap-7 md:grid-cols-[1fr_0.9fr] md:items-center">
              <div>
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-white text-brand">
                  <ShieldCheck aria-hidden="true" className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-3xl font-bold text-ink">
                  No spam. Launch updates only.
                </h2>
                <p className="mt-3 leading-7 text-muted">
                  Choose the list that fits you and Karoot will share relevant launch
                  updates when early access opens.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                <ButtonLink
                  href={siteConfig.waitlist.petOwnerUrl}
                  icon={PawPrint}
                  label="Join Pet Owner Waitlist"
                  className="w-full"
                  target="_blank"
                />
                <ButtonLink
                  href={siteConfig.waitlist.groomerUrl}
                  icon={Scissors}
                  label="Join Pet Groomer Waitlist"
                  variant="secondary"
                  className="w-full"
                  target="_blank"
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
