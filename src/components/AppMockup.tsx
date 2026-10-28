import type { LucideIcon } from "lucide-react";
import {
  Bell,
  CalendarDays,
  DollarSign,
  Home,
  MessageCircle,
  PawPrint,
  Scissors,
  UserRound
} from "lucide-react";

type AppMockupProps = {
  variant?: "welcome" | "groomer";
};

export function AppMockup({ variant = "welcome" }: AppMockupProps) {
  return (
    <div className="mx-auto w-full max-w-[19rem]">
      <div className="rounded-[2.75rem] border border-ink/12 bg-ink p-2 shadow-phone">
        <div className="flex aspect-[9/19.5] flex-col overflow-hidden rounded-[2.1rem] bg-gradient-to-b from-peach via-white to-white">
          {variant === "groomer" ? <GroomerScreen /> : <WelcomeScreen />}
        </div>
      </div>
    </div>
  );
}

function WelcomeScreen() {
  return (
    <>
      <div className="flex items-center justify-between px-4 pt-3 text-[10px] font-bold text-ink">
        <span>9:41</span>
        <span className="tracking-[0.18em]">LTE</span>
      </div>

      <div className="flex flex-1 flex-col justify-center px-4 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white shadow-soft">
          <PawPrint aria-hidden="true" className="h-7 w-7" />
        </span>
        <p className="mt-3 text-xl font-black text-ink">Karoot</p>
        <p className="mt-0.5 text-xs font-medium text-muted">Welcome!</p>

        <div className="mt-5 grid gap-2.5 text-left">
          <div className="rounded-2xl border border-line bg-white p-3 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-blush text-brand">
                <PawPrint aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-ink">Pet Owner</p>
                <p className="mt-0.5 text-[11px] leading-4 text-muted">
                  Find and book professional groomers for your pets
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-white p-3 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-blush text-brand">
                <Scissors aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-ink">Pet Groomer</p>
                <p className="mt-0.5 text-[11px] leading-4 text-muted">
                  Offer your grooming services and manage bookings
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-xs font-bold text-brand">Continue as Guest</p>
      </div>

      <div className="mx-auto mb-2 h-1 w-20 rounded-full bg-ink/80" />
    </>
  );
}

function GroomerScreen() {
  return (
    <>
      <div className="flex items-center justify-between px-4 pt-3 text-[10px] font-bold text-ink">
        <span>9:41</span>
        <span className="tracking-[0.18em]">LTE</span>
      </div>

      <div className="flex-1 px-3.5 pt-3">
        <div className="rounded-2xl bg-peach/70 p-3">
          <div className="flex items-center gap-2.5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-brand bg-blush text-brand">
              <UserRound aria-hidden="true" className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-black text-ink">Hello, Groomer</p>
              <p className="text-[11px] text-muted">Welcome Back</p>
            </div>
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-ink shadow-sm">
              <Bell aria-hidden="true" className="h-4 w-4" />
            </span>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2.5">
            <div className="rounded-2xl bg-brand p-3 text-white">
              <p className="text-[10px] font-bold uppercase tracking-wide text-white/80">
                This Week
              </p>
              <p className="mt-1 text-lg font-black">$0</p>
            </div>
            <div className="rounded-2xl border border-brand/60 bg-white p-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-muted">
                Today
              </p>
              <p className="mt-1 text-lg font-black text-ink">
                0{" "}
                <span className="text-[11px] font-semibold text-muted">
                  Bookings
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 rounded-2xl bg-white p-3 shadow-sm">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-500" />
          <p className="flex-1 text-xs font-bold text-ink">
            Available for bookings
          </p>
          <span className="flex h-5 w-9 shrink-0 items-center rounded-full bg-brand px-0.5">
            <span className="ml-auto h-4 w-4 rounded-full bg-white" />
          </span>
        </div>

        <div className="mt-5 flex items-baseline justify-between">
          <p className="text-sm font-black text-ink">Today's Schedule</p>
          <p className="text-[11px] font-bold text-brand">View All</p>
        </div>
        <div className="mt-2 flex items-center gap-2.5 rounded-2xl border border-line bg-white p-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blush text-brand">
            <CalendarDays aria-hidden="true" className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-bold text-ink">No bookings for today</p>
            <p className="text-[11px] text-muted">
              Accepted appointments will appear here.
            </p>
          </div>
        </div>

        <p className="mt-5 text-sm font-black text-ink">Set up your services</p>
        <div className="mt-2 grid grid-cols-2 gap-2.5">
          <div className="rounded-2xl bg-white p-3 text-center shadow-sm">
            <span className="mx-auto grid h-9 w-9 place-items-center rounded-xl bg-blush text-brand">
              <CalendarDays aria-hidden="true" className="h-4 w-4" />
            </span>
            <p className="mt-1.5 text-xs font-bold text-ink">Availability</p>
          </div>
          <div className="rounded-2xl bg-white p-3 text-center shadow-sm">
            <span className="mx-auto grid h-9 w-9 place-items-center rounded-xl bg-blush text-brand">
              <Scissors aria-hidden="true" className="h-4 w-4" />
            </span>
            <p className="mt-1.5 text-xs font-bold text-ink">Services</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 border-t border-line bg-white px-1 py-2 text-[9px] font-semibold text-muted">
        <NavItem active icon={Home} label="Home" />
        <NavItem icon={DollarSign} label="Earnings" />
        <NavItem icon={CalendarDays} label="Bookings" />
        <NavItem icon={MessageCircle} label="Messages" />
        <NavItem icon={UserRound} label="Profile" />
      </div>
    </>
  );
}

type NavItemProps = {
  active?: boolean;
  icon: LucideIcon;
  label: string;
};

function NavItem({ active = false, icon: Icon, label }: NavItemProps) {
  return (
    <span
      className={`grid place-items-center gap-1 ${active ? "text-brand" : "text-muted"}`}
    >
      <Icon aria-hidden="true" className="h-4 w-4" />
      {label}
    </span>
  );
}
