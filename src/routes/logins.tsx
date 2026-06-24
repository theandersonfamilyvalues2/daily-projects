import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { KeyRound, ExternalLink, ArrowLeft, ArrowRight, Info, Link2, Youtube, Eye, EyeOff } from "lucide-react";
import { SiteShell, PageHeader } from "@/components/SiteShell";
import { logins, youtubeLinks } from "@/lib/academy";

function SecretValue({ value }: { value: string }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="flex items-center gap-2 min-w-0">
      <span
        className={`font-mono text-sm text-cream truncate flex-1 transition-all ${
          shown ? "" : "blur-sm select-none"
        }`}
      >
        {shown ? value : "••••••••••"}
      </span>
      <button
        type="button"
        onClick={() => setShown((s) => !s)}
        aria-label={shown ? "Hide password" : "Show password"}
        className="shrink-0 grid place-items-center h-7 w-7 rounded-md border border-panel-border text-muted-foreground hover:text-warm-gold hover:border-warm-gold/50 transition-colors"
      >
        {shown ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
      </button>
    </div>
  );
}

function isSecret(label: string) {
  const l = label.toLowerCase();
  return l.includes("password") || l.includes("pass");
}


export const Route = createFileRoute("/logins")({
  head: () => ({ meta: [{ title: "Logins — Anderson Creator Academy" }] }),
  component: Logins,
});

function Logins() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Platform Access"
        title="Logins"
        subtitle="All usernames, passwords, and instructions in one place"
        icon={KeyRound}
      />

      <div className="grid sm:grid-cols-2 gap-5 mb-8">
        {logins.map((p) => (
          <div key={p.name} className="panel p-6 relative overflow-hidden">
            <span className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-warm-gold to-transparent" />
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="font-display text-3xl text-warm-gold tracking-wide">{p.name}</h3>
            </div>
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-cream"
            >
              {p.domain} <ExternalLink className="h-3 w-3" />
            </a>

            <div className="mt-5 space-y-2">
              {p.accounts.map((a) => (
                <div
                  key={a.label}
                  className="grid grid-cols-[110px_minmax(0,1fr)] items-center gap-3 px-3 py-2 rounded-md bg-white/[0.04] border border-panel-border"
                >
                  <span className="label-mono text-muted-foreground">{a.label}</span>
                  {isSecret(a.label) ? (
                    <SecretValue value={a.value} />
                  ) : (
                    <span className="font-mono text-sm text-cream truncate">{a.value}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-start gap-2 p-3 rounded-md border-l-2 border-warm-gold bg-warm-gold/5">
              <Info className="h-3.5 w-3.5 mt-0.5 shrink-0 text-warm-gold" />
              <p className="text-sm text-cream/90">{p.note}</p>
            </div>

            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-md border border-warm-gold/60 text-warm-gold hover:bg-warm-gold hover:text-primary-foreground transition-colors label-mono"
            >
              Open {p.name} <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        ))}
      </div>

      <div className="panel p-6 mb-8 relative overflow-hidden">
        <span className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-warm-gold to-transparent" />
        <div className="flex items-center gap-2 mb-1">
          <Link2 className="h-4 w-4 text-warm-gold" />
          <h3 className="font-display text-3xl text-warm-gold tracking-wide">Links</h3>
        </div>
        <p className="text-xs font-mono text-muted-foreground mb-5">Reference videos · open in a new tab</p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {youtubeLinks.map((l) => (
            <li key={l.url}>
              <a
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 p-3 rounded-md bg-white/[0.04] border border-panel-border hover:border-warm-gold/50 hover:bg-warm-gold/5 transition-colors group"
              >
                <Youtube className="h-4 w-4 mt-0.5 shrink-0 text-warm-gold" />
                <div className="min-w-0 flex-1">
                  <div className="text-sm text-cream group-hover:text-warm-gold transition-colors">{l.title}</div>
                  <div className="label-mono text-muted-foreground truncate">{l.source}</div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground group-hover:text-warm-gold" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="panel p-6 mb-8 border-dashed">
        <div className="flex items-center gap-2 mb-2">
          <Info className="h-4 w-4 text-muted-foreground" />
          <div className="label-mono text-muted-foreground">Note</div>
        </div>
        <p className="text-cream/90">Family login details live here. If a password ever changes, update <span className="font-mono text-warm-gold">academy.ts</span>. Don't share passwords in chat.</p>
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-panel-border">
        <Link to="/schedule" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-cream">
          <ArrowLeft className="h-3.5 w-3.5" /> Schedule
        </Link>
        <Link to="/phases" className="flex items-center gap-1.5 text-sm text-warm-gold hover:text-cream">
          Project Phases <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </SiteShell>
  );
}
