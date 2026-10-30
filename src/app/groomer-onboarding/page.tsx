import type { Metadata } from "next";
import Image from "next/image";
import { Apple, Mail, Play } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    absolute: "Groomer onboarding | Karoot"
  },
  description:
    "How to sign up as a groomer on Karoot, step by step: download the app, create your account, complete identity and business details, upload your ID, and get ready for bookings."
};

const steps = [
  {
    title: "Download Karoot",
    body: "Karoot is live on the App Store and Google Play.",
    image: "/images/onboarding/step-1-download.jpg",
    alt: "Karoot app welcome screen"
  },
  {
    title: "Open the app and tap Sign up",
    body: "On the sign-in screen, tap “Sign up” under “Don’t have an account?”",
    image: "/images/onboarding/step-2-sign-up.jpg",
    alt: "Karoot sign-in screen with the Sign up link"
  },
  {
    title: "Choose Pet Groomer",
    body: "You’ll see two options: Pet Owner and Pet Groomer. Tap Pet Groomer — “Offer your grooming services and manage bookings.”",
    image: "/images/onboarding/step-3-role.jpg",
    alt: "Role selection screen: Pet Owner or Pet Groomer"
  },
  {
    title: "Create your account",
    body: "Enter your full name and email — both are required. Phone number, street address, unit/suite, and city are all optional.",
    image: "/images/onboarding/step-4-account.jpg",
    alt: "Create account form with full name and email fields"
  },
  {
    title: "Identity Details (1 of 3)",
    body: "Enter your legal full name exactly as it appears on your ID, your ID number, and your ID type — Passport or Driving License. All three are required, and the name and number need to match the ID you’ll upload at the end. Then tap “Continue to setup.”",
    image: "/images/onboarding/step-5-identity.jpg",
    alt: "Identity Details form with legal name, ID number, and ID type"
  },
  {
    title: "Business Info (2 of 3)",
    body: "Say whether you’re a registered business, add your legal business name (or the name you trade under), your service area, and your years of experience. For service modes, choose how you work: At-Home Grooming, Drop at Studio, or Meet at Pet Wash. Studio Service Address is only needed if you offer Drop at Studio. Then tap “Accept and Continue.”",
    image: "/images/onboarding/step-6-business.jpg",
    alt: "Business Info form with business name, service area, and service modes"
  },
  {
    title: "Upload Documents (3 of 3)",
    body: "Take clear photos of the front and back of the same ID you entered earlier, and upload one in each box. Make sure the text is clearly visible and not blurry. Then tap “Submit Document.”",
    image: "/images/onboarding/step-7-documents.jpg",
    alt: "Upload Documents screen with front and back ID upload boxes"
  },
  {
    title: "Application Submitted!",
    body: "You’ll see a confirmation that your application has been submitted. Review takes 3–5 business days, and you’ll be notified via email once it’s done.",
    image: "/images/onboarding/step-8-submitted.jpg",
    alt: "Application Submitted confirmation screen"
  }
];

export default function GroomerOnboardingPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-5 py-16 sm:py-20">
        <section className="mx-auto max-w-4xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
              For groomers
            </p>
            <h1 className="mt-3 text-4xl font-black text-ink sm:text-5xl">
              Signing up as a groomer, step by step.
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Karoot is built to give you more control over how you work:
              your services, your prices, your availability, and the
              bookings you accept. Here’s the signup, in order.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink
                href={siteConfig.storeLinks.appStore.href}
                icon={Apple}
                label="Download on the App Store"
                target="_blank"
              />
              <ButtonLink
                href={siteConfig.storeLinks.googlePlay.href}
                icon={Play}
                label="Get it on Google Play"
                target="_blank"
                variant="secondary"
              />
            </div>
          </div>

          <ol className="mt-10 grid gap-5">
            {steps.map((step, index) => (
              <li key={step.title}>
                <article className="flex flex-col gap-6 rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8 md:flex-row md:items-start">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-3">
                      <span className="text-2xl font-black text-brand">
                        {index + 1}.
                      </span>
                      <h2 className="text-2xl font-bold text-ink">
                        {step.title}
                      </h2>
                    </div>
                    <p className="mt-3 leading-7 text-muted">{step.body}</p>
                  </div>
                  <Image
                    src={step.image}
                    alt={step.alt}
                    width={540}
                    height={1168}
                    className="w-40 shrink-0 self-center rounded-xl border border-line shadow-sm md:self-start lg:w-48"
                  />
                </article>
              </li>
            ))}
          </ol>

          <article className="mt-5 rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-ink">After you submit</h2>
            <p className="mt-3 leading-7 text-muted">
              Once you’re approved, you can log in. Then, in order:
            </p>
            <ol className="mt-4 grid gap-3 leading-7 text-muted">
              <li>
                <strong className="text-ink">
                  1. Set up your Stripe account in the Karoot app
                </strong>{" "}
                — this is required so you can receive payments.
              </li>
              <li>
                <strong className="text-ink">
                  2. Add your services and availability.
                </strong>
              </li>
            </ol>
            <p className="mt-4 leading-7 text-muted">
              Once that’s done, you’re completely ready to accept bookings.
              One thing to keep up: update your availability every week so
              it stays current.
            </p>
          </article>

          <p className="mt-10 leading-7 text-muted">
            If anything gets stuck, write to{" "}
            <a
              className="font-semibold text-brand hover:underline"
              href={`mailto:${siteConfig.contactEmail}`}
            >
              {siteConfig.contactEmail}
            </a>
            .
          </p>
          <div className="mt-5">
            <ButtonLink
              href={`mailto:${siteConfig.contactEmail}`}
              icon={Mail}
              label="Contact Karoot"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
