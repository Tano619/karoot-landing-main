import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    absolute: "Karoot FAQ | Pet Grooming and Care Bookings"
  },
  description:
    "Find answers about Karoot, the coming-soon pet grooming and pet care booking app for Canada."
};

export default function FaqPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-5 py-16 sm:py-20">
        <section className="mx-auto max-w-4xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
              FAQ
            </p>
            <h1 className="mt-3 text-4xl font-black text-ink sm:text-5xl">
              Answers about Karoot.
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              If you have a different question that isn't here, please reach out to us through the contact page.
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            {siteConfig.faq.map((item) => (
              <article
                className="rounded-2xl border border-line bg-white p-6 shadow-sm"
                key={item.question}
              >
                <div className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-warm text-brand">
                    <HelpCircle aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-ink">{item.question}</h2>
                    <p className="mt-3 leading-7 text-muted">{item.answer}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
