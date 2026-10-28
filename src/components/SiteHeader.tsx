import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link className="flex items-center" href="/" aria-label="Karoot home">
          <Image
            src="/images/karoot-wordmark.png"
            alt="Karoot"
            width={432}
            height={130}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 text-sm font-semibold text-muted md:flex">
          <Link className="transition hover:text-brand" href="/">
            Home
          </Link>
          <Link className="transition hover:text-brand" href="/#how-it-works">
            How it works
          </Link>
          <Link className="transition hover:text-brand" href="/studios">
            Studios
          </Link>
          <Link className="transition hover:text-brand" href="/early-access">
            Download
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
