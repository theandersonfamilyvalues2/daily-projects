import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, RotateCcw, ArrowLeft, ArrowRight, Users, Star } from "lucide-react";
import { SiteShell, PageHeader } from "@/components/SiteShell";
import { students, studentChecklist, currentWeek, todayName } from "@/lib/academy";

export const Route = createFileRoute("/students")({
  head: () => ({ meta: [{ title: "Zoe & Macie — Anderson Creator Academy" }] }),
  component: StudentsPage,
});

function StudentsPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Student Dashboards"
        title="Zoe & Macie"
        subtitle="Two creators · Same academy · Today's checklist for each"
        icon={Users}
      />
      <div className="grid lg:grid-cols-2 gap-6">
        {students.map((s) => (
          <StudentCard key={s.name} student={s} />
        ))}
      </div>

      <div className="flex justify-between items-center pt-6 mt-10 border-t border-panel-border">
        <Link to="/phases" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-cream">
          <ArrowLeft className="h-3.5 w-3.5" /> Phases
        </Link>
        <Link to="/" className="flex items-center gap-1.5 text-sm text-warm-gold hover:text-cream">
          Home <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </SiteShell>
  );
}

function StudentCard({ student }: { student: (typeof students)[number] }) {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const completed = studentChecklist.filter((c) => done[c.text]).length;
  const pct = Math.round((completed / studentChecklist.length) * 100);

  return (
    <div className="panel p-6 sm:p-7">
      <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 mb-6">
        <div
          className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl font-display text-3xl text-primary-foreground"
          style={{ backgroundColor: student.accent, boxShadow: `0 10px 30px -10px ${student.accent}` }}
        >
          {student.avatar}
        </div>
        <div className="min-w-0">
          <h2 className="font-display text-3xl text-cream truncate">{student.name}</h2>
          <div className="label-mono text-muted-foreground" suppressHydrationWarning>Week {currentWeek} · {todayName} · Comic Universe: Hero</div>
        </div>
        <button
          onClick={() => setDone({})}
          className="shrink-0 inline-flex items-center gap-1.5 label-mono px-3 py-1.5 rounded-md border border-panel-border text-muted-foreground hover:text-cream hover:border-cream/40"
        >
          <RotateCcw className="h-3 w-3" /> Reset
        </button>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-xs text-muted-foreground mb-2">
          <span className="label-mono">Today's Progress</span>
          <span className="font-mono" style={{ color: student.accent }}>{pct}%</span>
        </div>
        <div className="h-2 rounded-full bg-white/5 overflow-hidden">
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${pct}%`, backgroundColor: student.accent }}
          />
        </div>
      </div>

      <div className="label-mono text-warm-gold mb-3">Today's Checklist</div>
      <div className="space-y-1.5">
        {studentChecklist.map((item) => {
          const checked = !!done[item.text];
          return (
            <label
              key={item.text}
              className={`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                checked
                  ? "bg-white/[0.04] border-panel-border opacity-60"
                  : item.featured
                  ? "border-warm-gold/30 bg-warm-gold/5 hover:bg-warm-gold/10"
                  : "border-panel-border hover:bg-white/[0.04]"
              }`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setDone((d) => ({ ...d, [item.text]: e.target.checked }))}
                className="sr-only"
              />
              <span
                className="grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 transition-colors"
                style={{
                  borderColor: checked ? student.accent : "rgba(255,255,255,0.22)",
                  backgroundColor: checked ? student.accent : "transparent",
                }}
              >
                {checked && <Check className="h-3 w-3 text-primary-foreground" strokeWidth={3} />}
              </span>
              <span className={`text-sm ${checked ? "text-muted-foreground line-through" : item.featured ? "text-warm-gold" : "text-cream"}`}>
                {item.featured && <Star className="inline h-3 w-3 mr-1 fill-warm-gold" />}
                {item.text}
              </span>
              <span className="label-mono text-muted-foreground">{item.time}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
