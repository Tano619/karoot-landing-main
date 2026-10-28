import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | Karoot"
  },
  description:
    "Read the privacy policy for Karoot, the coming-soon pet grooming and care booking website."
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-5 py-16 sm:py-20">
        <article className="mx-auto max-w-3xl rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
            Privacy Policy
          </p>
          <h1 className="mt-3 text-4xl font-black text-ink">
            Karoot Privacy Policy
          </h1>
          <p className="mt-4 leading-7 text-muted">
            This privacy policy explains how Karoot collects, uses, discloses, and
            protects personal information in connection with our website at {siteConfig.domain}.
            We are committed to handling personal information responsibly and in
            accordance with applicable Canadian privacy laws.
          </p>

          <div className="mt-8 grid gap-7 text-muted">
            <section>
              <h2 className="text-xl font-bold text-ink">What information we collect</h2>
              <p className="mt-2 leading-7">
                We may collect personal information you provide directly to us, such as your
                name, email address, and any details you include in a message or early access
                request. We may also collect technical information about your visit to the
                website, such as your IP address, browser type, device information, and
                usage data, through our hosting and analytics providers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink">How we use your information</h2>
              <p className="mt-2 leading-7">
                We use personal information to respond to inquiries, manage early access
                sign-ups, send updates or announcements where you have consented to receive
                them, understand website performance, and protect the security and integrity
                of our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink">How we share information</h2>
              <p className="mt-2 leading-7">
                We do not sell personal information. We may share information with trusted
                service providers that help us operate the website, such as hosting, email,
                analytics, or customer support providers, where necessary to provide those
                services. We may also disclose information where required by law or to
                protect our legal rights, safety, or property.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink">Cookies and analytics</h2>
              <p className="mt-2 leading-7">
                Our website may use cookies or similar technologies to understand site usage
                and improve performance. You may be able to change your browser settings to
                refuse cookies, although some features of the site may not function properly
                if cookies are disabled.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink">Your choices and rights</h2>
              <p className="mt-2 leading-7">
                Where applicable, you may have the right to request access to, correction of,
                or deletion of your personal information, and to withdraw consent for certain
                communications. To exercise these rights, please contact us using the details
                below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink">Retention and security</h2>
              <p className="mt-2 leading-7">
                We retain personal information only for as long as necessary to fulfill the
                purposes described in this policy, comply with legal obligations, resolve
                disputes, and enforce our agreements. We take reasonable administrative,
                technical, and physical safeguards to protect personal information against
                unauthorized access, loss, or misuse.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink">Minor use policy</h2>
              <p className="mt-2 leading-7">
                This website is not intended for children under the age of 13, and we do not
                knowingly collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ink">Contact us</h2>
              <p className="mt-2 leading-7">
                If you have questions about this privacy policy, your personal information,
                or a privacy concern, please contact us at{" "}
                <a className="font-semibold text-brand" href={`mailto:${siteConfig.contactEmail}`}>
                  {siteConfig.contactEmail}
                </a>
                . We will make reasonable efforts to address your concerns.
              </p>
            </section>
          </div>

          <Link
            className="mt-9 inline-flex min-h-12 items-center rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brandHover"
            href="/"
          >
            Back to home
          </Link>
        </article>
      </main>
      <Footer />
    </>
  );
}
