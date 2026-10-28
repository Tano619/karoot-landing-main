import type { Metadata } from "next";
import { Mail, PawPrint, Scissors } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Karoot | Pet Grooming Bookings"
  },
  description:
    "Contact Karoot about pet grooming bookings, early access, and service provider interest."
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-5 py-16 sm:py-20">
        <section className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
              Contact
            </p>
            <h1 className="mt-3 text-4xl font-black text-ink sm:text-5xl">
              Questions from pet owners and groomers are welcome.
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              You can reach out to us with questions about the app, service areas, or store links.
              Pet groomers can also ask about getting started.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-warm text-brand">
                <PawPrint aria-hidden="true" className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-2xl font-bold text-ink">Pet owners</h2>
              <p className="mt-3 leading-7 text-muted">
                Ask about the app, service areas, or store links.
              </p>
            </article>

            <article className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-warm text-brand">
                <Scissors aria-hidden="true" className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-2xl font-bold text-ink">Pet groomers</h2>
              <p className="mt-3 leading-7 text-muted">
                Ask how to get started as a salon, in-home, mobile grooming,
                or pet care provider.
              </p>
            </article>
          </div>

          <div className="mt-10 rounded-2xl bg-ink p-6 text-white sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/55">
              Email
            </p>
            <a
              className="mt-3 inline-flex items-center gap-3 text-2xl font-bold transition hover:text-softOrange"
              href={`mailto:${siteConfig.contactEmail}`}
            >
              <Mail aria-hidden="true" className="h-6 w-6" />
              {siteConfig.contactEmail}
            </a>
            <div className="mt-6">
              <ButtonLink
                href="/"
                icon={PawPrint}
                label="Back to home"
                variant="quiet"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
