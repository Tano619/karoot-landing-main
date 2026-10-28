import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  label: string;
  icon?: LucideIcon;
  variant?: "primary" | "secondary" | "quiet";
  className?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
};

const variantClasses = {
  primary: "bg-brand text-white hover:bg-brandHover",
  secondary:
    "border border-line bg-white text-ink hover:border-brand hover:text-brand",
  quiet: "bg-softOrange text-ink hover:bg-brand hover:text-white"
};

export function ButtonLink({
  href,
  label,
  icon: Icon,
  variant = "primary",
  className = "",
  target
}: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition ${variantClasses[variant]} ${className}`}
      href={href}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      target={target}
    >
      {Icon ? <Icon aria-hidden="true" className="h-4 w-4" /> : null}
      <span>{label}</span>
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </a>
  );
}
