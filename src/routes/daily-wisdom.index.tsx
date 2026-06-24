import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { BookOpen, Star, Circle, ArrowLeft, ArrowRight } from "lucide-react";
import { SiteShell, PageHeader } from "@/components/SiteShell";
import { wisdomLibrary, wisdomCategories, type WisdomCategory } from "@/lib/wisdom";

export const Route = createFileRoute("/daily-wisdom/")({
  head: () => ({
    meta: [
      { title: "Daily Wisdom — Anderson Creator Academy" },
      { name: "description", content: "A workbook library of 60 people and subjects. Open finished lessons or see what's coming next." },
    ],
  }),
  component: WisdomHub,
});

type StatusFilter = "all" | "ready" | "placeholder";

const categoryAccent: Record<WisdomCategory, string> = {
  History: "#f5b042",
  Science: "#7cc4ff",
  "Visual Art": "#f08a8a",
  Philosophy: "#c9a0ff",
  Business: "#6ed18a",
  Literature: "#ffd98a",
  Music: "#ff9eb5",
  Religion: "#a8b8d9",
  Economics: "#ffb673",
  Film: "#8ad8d8",
  "Tech/AI": "#9bd0ff",
  Leadership: "#f5b042",
};

function WisdomHub() {
  const [status, setStatus] = useState<StatusFilter>("all");
  const [category, setCategory] = useState<WisdomCategory | "All">("All");

  const filtered = useMemo(
    () =>
      wisdomLibrary.filter(
        (w) => (status === "all" || w.status === status) && (category === "All" || w.category === category),
      ),
    [status, category],
  );

  const readyCount = wisdomLibrary.filter((w) => w.status === "ready").length;

  return (
    <SiteShell>
      <PageHeader
        eyebrow="60 People · 60 Lessons"
        title="Daily Wisdom"
        subtitle="One person each day before any screen. Finished pages open full lessons. Placeholders show who's next."
        icon={BookOpen}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        <StatCard label="Total" value={wisdomLibrary.length} />
        <StatCard label="Ready" value={readyCount} color="text-ready" />
        <StatCard label="To Build" value={wisdomLibrary.length - readyCount} color="text-placeholder-state" />
      </div>

      <div className="panel p-4 sm:p-5 mb-6 space-y-4">
        <div>
          <div className="label-mono text-muted-foreground mb-2">Status</div>
          <div className="flex flex-wrap gap-2">
            {(["all", "ready", "placeholder"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                className={`label-mono px-3 py-1.5 rounded-full border transition-colors ${
                  status === s
                    ? "bg-warm-gold text-primary-foreground border-warm-gold"
                    : "border-panel-border text-muted-foreground hover:text-cream"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="label-mono text-muted-foreground mb-2">Category</div>
          <div className="flex flex-wrap gap-2">
            {(["All", ...wisdomCategories] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  category === c
                    ? "bg-cream/10 text-cream border-cream/30"
                    : "border-panel-border text-muted-foreground hover:text-cream"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="text-xs text-muted-foreground mb-4">
        Showing {filtered.length} of {wisdomLibrary.length}
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {filtered.map((w) => {
          const ready = w.status === "ready";
          const accent = categoryAccent[w.category];
          return (
            <Link
              key={w.slug}
              to="/daily-wisdom/$slug"
              params={{ slug: w.slug }}
              className={`panel panel-hover p-5 flex flex-col min-h-[200px] group relative overflow-hidden ${
                ready ? "border-warm-gold/50" : ""
              }`}
            >
              <span className="watermark-number">{String(w.order).padStart(2, "0")}</span>
              <div className="relative">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: accent }}
                  />
                  <span className="label-mono text-muted-foreground">
                    Day {String(w.order).padStart(2, "0")} · {w.category}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-cream leading-tight mt-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground mt-1.5">Lesson: {w.lesson}</p>
              </div>
              <div className="mt-auto pt-4 flex items-center justify-between relative">
                <StatusBadge ready={ready} />
                <span className={`text-xs flex items-center gap-1 ${ready ? "text-warm-gold" : "text-muted-foreground"} group-hover:text-warm-gold transition-colors`}>
                  {ready ? "Open" : "Placeholder"} <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-panel-border">
        <Link to="/today" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-cream">
          <ArrowLeft className="h-3.5 w-3.5" /> Today
        </Link>
        <Link to="/schedule" className="flex items-center gap-1.5 text-sm text-warm-gold hover:text-cream">
          Schedule <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </SiteShell>
  );
}

function StatCard({ label, value, color = "text-cream" }: { label: string; value: number; color?: string }) {
  return (
    <div className="panel p-4">
      <div className="label-mono text-muted-foreground mb-1">{label}</div>
      <div className={`font-display text-3xl ${color}`}>{value}</div>
    </div>
  );
}

function StatusBadge({ ready }: { ready: boolean }) {
  if (ready)
    return (
      <span className="label-mono px-2 py-1 rounded-md bg-ready/15 text-ready border border-ready/30 flex items-center gap-1">
        <Star className="h-3 w-3 fill-ready" /> Ready
      </span>
    );
  return (
    <span className="label-mono px-2 py-1 rounded-md text-placeholder-state border border-dashed border-placeholder-state/40 flex items-center gap-1">
      <Circle className="h-3 w-3" /> Placeholder
    </span>
  );
}
