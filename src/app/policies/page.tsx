import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    absolute: "Policies | Karoot"
  },
  description:
    "Karoot policies: preparing for your appointment, Stripe Connect payments, disputes, refunds for pet parents, and cancellations for groomers."
};

export default function PoliciesPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-5 py-16 sm:py-20">
        <section className="mx-auto max-w-4xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
              Policies
            </p>
            <h1 className="mt-3 text-4xl font-black text-ink sm:text-5xl">
              How Karoot works, plainly.
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              The rules for appointments, payments, disputes, and
              cancellations — for pet parents and groomers.
            </p>
          </div>

          <div className="mt-10 grid gap-5">
            <article className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-ink">
                Preparing for your appointment
              </h2>
              <div className="mt-4 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-bold text-ink">For pet parents</h3>
                  <p className="mt-2 leading-7 text-muted">
                    Share anything about your pet that matters — coat, skin,
                    temperament, or anything your groomer should know — when
                    you book. Have your pet ready at the appointment time,
                    and double-check the service and location before you
                    confirm.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-ink">For groomers</h3>
                  <p className="mt-2 leading-7 text-muted">
                    Review the booking details before the appointment and
                    confirm the service and location. Take before photos
                    when you start — those photos are part of how we handle
                    any dispute.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-ink">
                How Stripe Connect works with Karoot
              </h2>
              <p className="mt-4 leading-7 text-muted">
                Karoot uses Stripe Connect for payments. Groomers connect
                their own Stripe account to Karoot, pet parents pay securely
                in the app, and funds are held securely until the appointment
                is complete — then released to the groomer.
              </p>
            </article>

            <article className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-ink">
                How disputes are handled
              </h2>
              <p className="mt-4 leading-7 text-muted">
                If something isn't right after an appointment, raise a
                dispute from the appointment itself in the app, or contact
                Karoot directly. We review the before and after photos from
                the appointment, along with both sides' accounts, and decide
                from there.
              </p>
              <div className="mt-5">
                <ButtonLink
                  href={`mailto:${siteConfig.contactEmail}`}
                  icon={Mail}
                  label="Contact Karoot about a dispute"
                />
              </div>
            </article>

            <article className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-ink">
                Refunds for pet parents
              </h2>
              <p className="mt-4 leading-7 text-muted">
                Refunds depend on when you cancel, measured against the
                appointment start time. The percentage applies to the
                appointment total, and refunds go back to your original
                payment method. To cancel, open the appointment in the app
                and cancel it there.
              </p>
              <ul className="mt-4 grid gap-3 leading-7 text-muted">
                <li>
                  <strong className="text-ink">
                    Cancel more than 24 hours before your appointment:
                  </strong>{" "}
                  full refund.
                </li>
                <li>
                  <strong className="text-ink">
                    Cancel between 4 and 24 hours before your appointment:
                  </strong>{" "}
                  75% refund.
                </li>
                <li>
                  <strong className="text-ink">
                    Cancel less than 4 hours before your appointment:
                  </strong>{" "}
                  50% refund.
                </li>
              </ul>
            </article>

            <article className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-ink">
                Cancellations for groomers
              </h2>
              <p className="mt-4 leading-7 text-muted">
                If you need to cancel, do it from the appointment in the app
                — the earlier, the better. Cancelling more than 24 hours
                ahead carries no fee. If a restriction is placed on your
                profile and you want to discuss it, contact Karoot.
              </p>
              <ul className="mt-4 grid gap-3 leading-7 text-muted">
                <li>
                  <strong className="text-ink">
                    Cancel more than 24 hours before an appointment:
                  </strong>{" "}
                  no fee.
                </li>
                <li>
                  <strong className="text-ink">
                    Cancel less than 24 hours before an appointment:
                  </strong>{" "}
                  counted as a no-show. 3 no-shows lead to a profile
                  restriction.
                </li>
              </ul>
            </article>
          </div>

          <p className="mt-10 leading-7 text-muted">
            Questions about any of these policies? Reach us at{" "}
            <a
              className="font-semibold text-brand hover:underline"
              href={`mailto:${siteConfig.contactEmail}`}
            >
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
