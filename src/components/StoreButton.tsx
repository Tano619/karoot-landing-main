import type { LucideIcon } from "lucide-react";

type StoreButtonProps = {
  href: string;
  label: string;
  note: string;
  icon: LucideIcon;
  isAvailable?: boolean;
};

export function StoreButton({
  href,
  label,
  note,
  icon: Icon,
  isAvailable = false
}: StoreButtonProps) {
  const content = (
    <>
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-white">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </span>
      <span>
        <span className="block text-xs font-medium uppercase tracking-[0.16em] text-muted">
          {note}
        </span>
        <span className="block text-base font-bold text-ink">{label}</span>
      </span>
    </>
  );

  if (!isAvailable) {
    return (
      <span
        className="inline-flex min-h-14 cursor-not-allowed items-center gap-3 rounded-lg border border-line bg-white/80 px-4 py-3 text-left opacity-70 shadow-sm"
        role="link"
        aria-disabled="true"
        aria-label={`${label} coming soon`}
      >
        {content}
      </span>
    );
  }

  return (
    <a
      className="inline-flex min-h-14 items-center gap-3 rounded-lg border border-line bg-white px-4 py-3 text-left shadow-sm transition hover:border-brand"
      href={href}
      aria-label={`${note} on ${label}`}
    >
      {content}
    </a>
  );
}
