import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Calendar,
  BookOpen,
  Clock,
  KeyRound,
  Map as MapIcon,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { currentWeek, todayTask } from "@/lib/academy";

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anderson Creator Academy — Home" },
      { name: "description", content: "13 weeks. 91 days. One project at a time. Build something real." },
    ],
  }),
  component: Home,
});

const badges = ["12 PM Start", "Wisdom Before Screens", "One Project", "Sunday Demo Night"];

const cards = [
  { to: "/today", title: "Today", body: "Current day, current phase, daily proof.", num: "01", icon: Calendar },
  { to: "/daily-wisdom", title: "Daily Wisdom", body: "60 people. 60 lessons. Open finished pages or see what's next.", num: "02", icon: BookOpen },
  { to: "/schedule", title: "Schedule", body: "12:00 start. Wisdom before any screen. One project at a time.", num: "03", icon: Clock },
  { to: "/logins", title: "Logins", body: "Tynker, Sparketh, IXL — every login in one place.", num: "04", icon: KeyRound },
  { to: "/phases", title: "Project Phases", body: "13 weeks from hero idea to launch + portfolio.", num: "05", icon: MapIcon },
  { to: "/students", title: "Zoe & Macie", body: "Each creator's daily checklist and progress.", num: "06", icon: Users },
] as const;

function Home() {
  const [todayName, setTodayName] = useState<string>("");
  useEffect(() => {
    setTodayName(WEEKDAYS[new Date().getDay()]);
  }, []);
  return (
    <SiteShell>
      <section className="mb-14">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-3.5 w-3.5 text-warm-gold" />
          <div className="label-mono text-warm-gold">Family Learning Academy</div>
        </div>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-cream">
          Anderson
          <br />
          <span className="text-gold-gradient">Creator Academy</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-muted-foreground">
          13 weeks. 91 days. One project at a time. Build something real.
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          {badges.map((b) => (
            <span key={b} className="label-mono px-3 py-1.5 rounded-full border border-panel-border bg-panel text-cream">
              {b}
            </span>
          ))}
        </div>

        <Link
          to="/today"
          className="mt-8 panel panel-hover p-5 sm:p-6 flex items-center gap-5 max-w-2xl group"
        >
          <div className="grid h-16 w-20 sm:h-20 sm:w-24 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-warm-gold to-gold text-primary-foreground px-2">
            <div className="text-center leading-none">
              <div className="font-display text-xl sm:text-2xl min-h-[1.25em]">{todayName ? todayName.slice(0, 3).toUpperCase() : ""}</div>
              <div className="label-mono text-[0.55rem] mt-0.5">TODAY</div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="label-mono text-warm-gold mb-1">Week {currentWeek} · {todayTask.phase}</div>
            <div className="font-display text-xl text-cream truncate">Today's focus</div>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-0.5">{todayTask.task}</p>
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-warm-gold transition-colors shrink-0" />
        </Link>
      </section>

      <section className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <Link
            key={c.to}
            to={c.to}
            className="panel panel-hover p-6 group flex flex-col min-h-[180px] relative overflow-hidden"
          >
            <span className="watermark-number">{c.num}</span>
            <div className="flex items-start justify-between mb-6 relative">
              <c.icon className="h-5 w-5 text-warm-gold" />
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-warm-gold transition-colors" />
            </div>
            <h2 className="font-display text-3xl text-cream mb-2 relative">{c.title}</h2>
            <p className="text-sm text-muted-foreground relative">{c.body}</p>
          </Link>
        ))}
      </section>
    </SiteShell>
  );
}
