import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, CheckCircle2, ArrowRight, ArrowLeft, Target } from "lucide-react";
import { SiteShell, PageHeader } from "@/components/SiteShell";
import { todayTask } from "@/lib/academy";

export const Route = createFileRoute("/today")({
  head: () => ({ meta: [{ title: "Today — Anderson Creator Academy" }] }),
  component: Today,
});

function Today() {
  return (
    <SiteShell>
      <PageHeader eyebrow="Current Day" title="Today" subtitle="One day. One task. Bring proof." icon={Calendar} />

      <div className="panel p-8 sm:p-12 mb-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-gradient-to-br from-warm-gold/15 via-transparent to-sky/5" />
        <div className="relative">
          <div className="label-mono text-warm-gold mb-3">Week {todayTask.week} · {todayTask.phase}</div>
          <div className="font-display text-6xl sm:text-8xl text-cream leading-none" suppressHydrationWarning>{todayTask.weekday}</div>
          <p className="mt-6 text-lg sm:text-xl text-cream/90 max-w-3xl leading-relaxed">
            Project: {todayTask.task}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {todayTask.tags.map((t, i) => (
          <span
            key={t}
            suppressHydrationWarning
            className={`label-mono px-3 py-1.5 rounded-full border ${
              i === 0
                ? "border-warm-gold/50 text-warm-gold bg-warm-gold/10"
                : i === 1
                ? "border-sky/50 text-sky bg-sky/10"
                : "border-panel-border text-cream bg-white/[0.03]"
            }`}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="panel p-6 sm:p-8 mb-8">
        <div className="flex items-center gap-2 mb-5">
          <Target className="h-4 w-4 text-warm-gold" />
          <div className="label-mono text-warm-gold">Daily Proof Required</div>
        </div>
        <ul className="space-y-3">
          {todayTask.proofs.map((p) => (
            <li key={p} className="flex items-center gap-3 p-4 rounded-lg bg-white/[0.04] border border-panel-border">
              <ArrowRight className="h-4 w-4 shrink-0 text-warm-gold" />
              <span className="text-cream">{p}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-xs text-muted-foreground mb-8 font-mono">
        Ongoing project. Today's weekday updates automatically. Edit <span className="text-warm-gold">todayTask</span> in <span className="text-warm-gold">academy.ts</span> when the phase changes.
      </p>

      {todayTask.demoNight && (
        <div className="panel p-6 mb-8 border-warm-gold/40 bg-gradient-to-br from-warm-gold/15 to-transparent">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-warm-gold" />
            <div className="label-mono text-warm-gold">Sunday Demo Night</div>
          </div>
          <p className="mt-2 text-cream">Tonight you present what you built this week. Bring it.</p>
        </div>
      )}

      <div className="flex justify-between items-center pt-6 border-t border-panel-border">
        <Link to="/" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-cream">
          <ArrowLeft className="h-3.5 w-3.5" /> Home
        </Link>
        <Link to="/daily-wisdom" className="flex items-center gap-1.5 text-sm text-warm-gold hover:text-cream">
          Today's Wisdom <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </SiteShell>
  );
}
