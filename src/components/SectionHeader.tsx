type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
