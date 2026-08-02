import type { LucideIcon } from "lucide-react";
import {
  CalendarDays,
  ChevronRight,
  Filter,
  Home,
  MapPin,
  MessageCircle,
  PawPrint,
  Scissors,
  Search,
  Sparkles,
  Star,
  UserRound
} from "lucide-react";

const services = [
  { label: "Bath & Wash", icon: Sparkles },
  { label: "Haircut", icon: Scissors },
  { label: "Nail Trim", icon: PawPrint },
  { label: "Full Groom", icon: Star }
];

export function AppMockup() {
  return (
    <div className="mx-auto w-full max-w-[23rem]">
      <div className="rounded-[2rem] border border-ink/12 bg-ink p-2.5 shadow-phone">
        <div className="overflow-hidden rounded-[1.6rem] bg-white">
          <div className="bg-brand px-4 pb-5 pt-3 text-white">
            <div className="mb-4 flex items-center justify-between text-[10px] font-bold">
              <span>9:41</span>
              <span className="tracking-[0.18em]">LTE</span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand">
                  <PawPrint aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-base font-bold leading-tight">
                    Hello, pet parent
                  </p>
                  <p className="text-[11px] font-medium text-white/78">
                    Find trusted care nearby
                  </p>
                </div>
              </div>
              <span className="rounded-full border border-white/30 px-3 py-1 text-[11px] font-bold">
                Soon
              </span>
            </div>

            <div className="mt-4 flex min-h-11 items-center gap-2 rounded-lg bg-white px-3 text-muted shadow-sm">
              <Search aria-hidden="true" className="h-4 w-4" />
              <span className="min-w-0 flex-1 text-xs">
                Search by name or service...
              </span>
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-white">
                <Filter aria-hidden="true" className="h-4 w-4" />
              </span>
            </div>
          </div>

          <div className="px-4 py-4">
            <p className="text-xs font-bold text-ink">Browse by service</p>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {services.map((service) => (
                <ServiceTile
                  icon={service.icon}
                  key={service.label}
                  label={service.label}
                />
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between">
              <p className="text-xs font-bold text-ink">Featured groomer</p>
              <span className="text-[11px] font-bold text-brand">Coming soon</span>
            </div>

            <article className="mt-3 rounded-lg border border-line bg-white p-3 shadow-sm">
              <div className="flex gap-3">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-blush text-brand">
                  <PawPrint aria-hidden="true" className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-bold text-ink">Maple Paw Care</p>
                      <p className="mt-0.5 text-[11px] text-muted">
                        Grooming for dogs, cats, rabbits
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-blush px-2 py-1 text-[11px] font-bold text-brand">
                      <Star aria-hidden="true" className="h-3 w-3 fill-current" />
                      4.9
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-2 text-[11px] font-semibold text-muted">
                    <span className="inline-flex items-center gap-1">
                      <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-brand" />
                      Nearby
                    </span>
                    <span className="inline-flex items-center gap-1 text-brand">
                      View profile
                      <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="grid grid-cols-4 border-t border-line bg-white px-2 py-2 text-[10px] font-semibold text-muted">
            <TabItem active icon={Home} label="Home" />
            <TabItem icon={CalendarDays} label="Bookings" />
            <TabItem icon={MessageCircle} label="Messages" />
            <TabItem icon={UserRound} label="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

type ServiceTileProps = {
  icon: LucideIcon;
  label: string;
};

function ServiceTile({ icon: Icon, label }: ServiceTileProps) {
  return (
    <div className="rounded-lg bg-warm p-3 text-center">
      <span className="mx-auto grid h-10 w-10 place-items-center rounded-lg bg-white text-brand">
        <Icon aria-hidden="true" className="h-4 w-4" />
      </span>
      <p className="mt-2 text-[11px] font-bold text-ink">{label}</p>
    </div>
  );
}

type TabItemProps = {
  active?: boolean;
  icon: LucideIcon;
  label: string;
};

function TabItem({ active = false, icon: Icon, label }: TabItemProps) {
  return (
    <span
      className={`grid place-items-center gap-1 ${active ? "text-brand" : "text-muted"}`}
    >
      <Icon aria-hidden="true" className="h-4 w-4" />
      {label}
    </span>
  );
}
