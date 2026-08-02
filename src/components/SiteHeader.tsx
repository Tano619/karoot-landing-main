import Link from "next/link";
import { PawPrint } from "lucide-react";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link className="flex items-center gap-2 font-bold text-ink" href="/">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-white">
            <PawPrint aria-hidden="true" className="h-5 w-5" />
          </span>
          <span>{siteConfig.appName}</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 text-sm font-semibold text-muted md:flex">
          <Link className="transition hover:text-brand" href="/">
            Home
          </Link>
          <Link className="transition hover:text-brand" href="/#how-it-works">
            How it works
          </Link>
          <Link className="transition hover:text-brand" href="/early-access">
            Early Access
          </Link>
          <Link className="transition hover:text-brand" href="/about">
            About
          </Link>
          <Link className="transition hover:text-brand" href="/faq">
            FAQ
          </Link>
          <Link className="transition hover:text-brand" href="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
