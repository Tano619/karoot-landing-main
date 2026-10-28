import Image from "next/image";

type KarootCatPhotoProps = {
  priority?: boolean;
};

export function KarootCatPhoto({ priority = false }: KarootCatPhotoProps) {
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-warm shadow-soft">
      <Image
        src="/images/karoot-cat.jpg"
        alt="Karoot, the orange-and-white cat behind the brand name"
        fill
        priority={priority}
        sizes="(min-width: 1024px) 420px, 90vw"
        className="object-cover object-[52%_30%]"
      />
    </div>
  );
}
