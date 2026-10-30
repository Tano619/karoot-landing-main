import type { Metadata } from "next";
import Link from "next/link";
import { Apple, ArrowRight, PawPrint, Play, Scissors, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    absolute: "Download | Karoot"
  },
  description:
    "Download Karoot on the App Store or Google Play."
};

export default function EarlyAccessPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-backdrop border-b border-line px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-2xl border border-line bg-white px-3 py-2 text-sm font-bold text-brand shadow-sm">
                <PawPrint aria-hidden="true" className="h-4 w-4" />
                Available to download
              </div>
              <h1 className="mt-6 text-4xl font-black leading-tight text-ink sm:text-5xl">
                Download Karoot
              </h1>
              <p className="mt-5 text-lg leading-8 text-muted">
                Available on the App Store and Google Play.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:py-20">
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-warm text-brand">
                <PawPrint aria-hidden="true" className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-2xl font-bold text-ink">Pet Owners</h2>
              <p className="mt-3 leading-7 text-muted">
                For people who want to book pet grooming and care services through Karoot.
              </p>
            </article>

            <article className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-warm text-brand">
                <Scissors aria-hidden="true" className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-2xl font-bold text-ink">Pet Groomers</h2>
              <p className="mt-3 leading-7 text-muted">
                For service providers who want to offer grooming services through Karoot.
              </p>
              <Link
                className="mt-4 inline-flex items-center gap-1 font-semibold text-brand hover:underline"
                href="/groomer-onboarding"
              >
                See the signup steps
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </article>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl rounded-2xl border border-line bg-warm p-6 shadow-sm sm:p-8">
            <div className="grid gap-7 md:grid-cols-[1fr_0.9fr] md:items-center">
              <div>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand">
                  <ShieldCheck aria-hidden="true" className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-3xl font-bold text-ink">
                  Download the app.
                </h2>
                <p className="mt-3 leading-7 text-muted">
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
          <p className="mx-auto mt-6 max-w-5xl text-center text-sm leading-6 text-muted">
            Groomers — already signed up in the app?{" "}
            <a
              className="font-semibold text-brand underline-offset-2 hover:underline"
              href="https://forms.gle/6Z7LQ47U9uKHwvh96"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply for Founding 50 status
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
