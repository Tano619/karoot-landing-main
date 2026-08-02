import Link from "next/link";
import { Apple, Mail, PawPrint, Play } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-white">
              <PawPrint aria-hidden="true" className="h-5 w-5" />
            </span>
            {siteConfig.appName}
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
            {siteConfig.tagline}
          </p>
          <p className="mt-5 text-sm text-white/55">
            &copy; 2026 {siteConfig.appName}. Built for pet care across Canada.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white/50">
            Links
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-white/78">
            <Link className="transition hover:text-softOrange" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="transition hover:text-softOrange" href="/contact">
              Contact
            </Link>
            <Link className="transition hover:text-softOrange" href="/early-access">
              Early Access
            </Link>
            <Link className="transition hover:text-softOrange" href="/faq">
              FAQ
            </Link>
            <a className="transition hover:text-softOrange" href={siteConfig.storeLinks.appStore.href}>
              App Store
            </a>
            <a className="transition hover:text-softOrange" href={siteConfig.storeLinks.googlePlay.href}>
              Google Play
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white/50">
            Contact
          </h2>
          <a
            className="mt-4 inline-flex items-center gap-2 text-sm text-white/78 transition hover:text-softOrange"
            href={`mailto:${siteConfig.contactEmail}`}
          >
            <Mail aria-hidden="true" className="h-4 w-4" />
            {siteConfig.contactEmail}
          </a>
          <div className="mt-5 flex gap-3 text-white/78">
            <a
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 transition hover:border-softOrange hover:text-softOrange"
              href={siteConfig.storeLinks.appStore.href}
              aria-label="App Store coming soon"
            >
              <Apple aria-hidden="true" className="h-5 w-5" />
            </a>
            <a
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 transition hover:border-softOrange hover:text-softOrange"
              href={siteConfig.storeLinks.googlePlay.href}
              aria-label="Google Play coming soon"
            >
              <Play aria-hidden="true" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
