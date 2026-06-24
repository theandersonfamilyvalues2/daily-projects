import { createFileRoute, Link } from "@tanstack/react-router";
import { Map as MapIcon, ArrowLeft, ArrowRight } from "lucide-react";
import { SiteShell, PageHeader } from "@/components/SiteShell";
import { projectPhases, currentWeek } from "@/lib/academy";

export const Route = createFileRoute("/phases")({
  head: () => ({ meta: [{ title: "Project Phases — Anderson Creator Academy" }] }),
  component: Phases,
});

function Phases() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="13 Weeks · 91 Days"
        title="Project Phases"
        subtitle="One project at a time · Finish before moving on · Ongoing"
        icon={MapIcon}
      />

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {projectPhases.map((p) => {
          const isCurrent = p.week === currentWeek;
          return (
            <div
              key={p.week}
              className={`panel p-5 flex flex-col min-h-[280px] relative overflow-hidden ${
                isCurrent ? "border-warm-gold/50" : ""
              }`}
            >
              <span className="watermark-number">{p.week}</span>
              <div className="relative flex flex-col h-full">
                <div className="label-mono text-warm-gold">
                  Week {String(p.week).padStart(2, "0")} · {p.dayRange}
                </div>
                <h3 className="font-display text-2xl text-cream leading-tight mt-3">{p.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{p.output}</p>

                {isCurrent && (
                  <span className="mt-3 inline-block self-start label-mono px-2 py-1 rounded-md bg-ready/15 text-ready border border-ready/30">
                    Current
                  </span>
                )}

                <div className="mt-4 pt-4 border-t border-panel-border">
                  <div className="label-mono text-warm-gold mb-2">Deliverables</div>
                  <ul className="space-y-1.5 text-sm text-cream/90">
                    {p.deliverables.map((d) => (
                      <li key={d} className="flex gap-2"><span className="text-warm-gold">·</span> {d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-panel-border">
        <Link to="/logins" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-cream">
          <ArrowLeft className="h-3.5 w-3.5" /> Logins
        </Link>
        <Link to="/students" className="flex items-center gap-1.5 text-sm text-warm-gold hover:text-cream">
          Zoe & Macie <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </SiteShell>
  );
}
