import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  Home as HomeIcon,
  Calendar,
  BookOpen,
  Clock,
  KeyRound,
  Map,
  Users,
} from "lucide-react";

const nav = [
  { to: "/", label: "Home", icon: HomeIcon },
  { to: "/today", label: "Today", icon: Calendar },
  { to: "/daily-wisdom", label: "Wisdom", icon: BookOpen },
  { to: "/schedule", label: "Schedule", icon: Clock },
  { to: "/logins", label: "Logins", icon: KeyRound },
  { to: "/phases", label: "Phases", icon: Map },
  { to: "/students", label: "Zoe & Macie", icon: Users },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 backdrop-blur-md bg-background/75 border-b border-panel-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-warm-gold to-gold text-primary-foreground font-display text-lg shadow-lg shadow-warm-gold/20">A</span>
            <span className="truncate font-display text-lg tracking-wider text-cream">Anderson Creator Academy</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1 text-sm">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-muted-foreground hover:text-cream hover:bg-white/5 transition-colors"
                activeProps={{ className: "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-warm-gold bg-warm-gold/10" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                <n.icon className="h-3.5 w-3.5" />
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="md:hidden border-t border-panel-border overflow-x-auto">
          <nav className="flex gap-1 px-4 py-2 text-xs whitespace-nowrap">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="flex items-center gap-1 px-2.5 py-1 rounded-md text-muted-foreground"
                activeProps={{ className: "flex items-center gap-1 px-2.5 py-1 rounded-md text-warm-gold bg-warm-gold/10" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                <n.icon className="h-3 w-3" />
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">{children}</main>
      <footer className="mx-auto max-w-7xl px-4 sm:px-6 py-10 text-xs text-muted-foreground">
        Anderson Creator Academy · 13 weeks · 91 days · One project at a time.
      </footer>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  icon: Icon,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          {Icon && <Icon className="h-3.5 w-3.5 text-warm-gold" />}
          <div className="label-mono text-warm-gold">{eyebrow}</div>
        </div>
      )}
      <h1 className="font-display text-4xl sm:text-6xl tracking-tight text-cream leading-[0.95]">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
