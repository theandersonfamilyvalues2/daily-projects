import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Star, ArrowLeft, ArrowRight } from "lucide-react";
import { SiteShell, PageHeader } from "@/components/SiteShell";
import { schedule, electiveRotation } from "@/lib/academy";

export const Route = createFileRoute("/schedule")({
  head: () => ({ meta: [{ title: "Schedule — Anderson Creator Academy" }] }),
  component: Schedule,
});

function Schedule() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Every Day · No Exceptions"
        title="Daily Schedule"
        subtitle="12:00 PM start · Wisdom before any screen · One project at a time"
        icon={Clock}
      />

      <div className="panel divide-y divide-panel-border overflow-hidden mb-8">
        {schedule.map((row) => (
          <div
            key={row.time + row.block}
            className={`grid grid-cols-[110px_minmax(0,1fr)] sm:grid-cols-[150px_180px_minmax(0,1fr)] gap-4 p-5 items-start relative ${
              row.highlight ? "bg-gradient-to-r from-warm-gold/15 to-transparent" : ""
            }`}
          >
            {row.highlight && (
              <span className="absolute left-0 top-0 bottom-0 w-1 bg-warm-gold" />
            )}
            <div className={`label-mono ${row.highlight ? "text-warm-gold" : "text-muted-foreground"}`}>
              {row.time}
            </div>
            <div className={`font-display text-lg sm:text-xl flex items-center gap-2 ${row.highlight ? "text-warm-gold" : "text-cream"}`}>
              {row.highlight && <Star className="h-4 w-4 fill-warm-gold" />}
              {row.block}
            </div>
            <div className="text-sm text-muted-foreground col-span-2 sm:col-span-1 sm:mt-1">
              {row.note}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-3 flex items-center gap-2">
        <div className="label-mono text-warm-gold">IXL Elective Rotation</div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
        {electiveRotation.map((r) => (
          <div key={r.day} className="panel p-4 text-center">
            <div className="label-mono text-muted-foreground mb-2">{r.day}</div>
            <div className="font-display text-xl text-cream">{r.subject}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-panel-border">
        <Link to="/" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-cream">
          <ArrowLeft className="h-3.5 w-3.5" /> Home
        </Link>
        <Link to="/logins" className="flex items-center gap-1.5 text-sm text-warm-gold hover:text-cream">
          Logins <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </SiteShell>
  );
}
