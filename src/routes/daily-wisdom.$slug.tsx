import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { getWisdomBySlug } from "@/lib/wisdom";

export const Route = createFileRoute("/daily-wisdom/$slug")({
  loader: ({ params }) => {
    const entry = getWisdomBySlug(params.slug);
    if (!entry) throw notFound();
    return { entry };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.entry.title} — Daily Wisdom` },
          { name: "description", content: loaderData.entry.summary ?? `${loaderData.entry.title} — ${loaderData.entry.lesson}` },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <SiteShell>
      <h1 className="font-display text-4xl text-cream">Lesson not found</h1>
      <Link to="/daily-wisdom" className="text-warm-gold mt-4 inline-block">← Back to Daily Wisdom</Link>
    </SiteShell>
  ),
  component: Detail,
});

function Detail() {
  const { entry } = Route.useLoaderData();
  const ready = entry.status === "ready";

  return (
    <SiteShell>
      <Link to="/daily-wisdom" className="text-sm text-muted-foreground hover:text-cream">← Daily Wisdom</Link>

      {ready ? <ReadyView entry={entry} /> : <PlaceholderView entry={entry} />}
    </SiteShell>
  );
}

function ReadyView({ entry }: { entry: ReturnType<typeof getWisdomBySlug> & {} }) {
  return (
    <article className="mt-6 max-w-3xl">
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="label-mono px-2 py-1 rounded-md bg-ready/15 text-ready border border-ready/30">★ Ready</span>
        <span className="label-mono text-muted-foreground">#{String(entry!.order).padStart(2, "0")}</span>
        <span className="label-mono text-warm-gold">{entry!.category}</span>
      </div>

      <h1 className="font-display text-5xl sm:text-7xl text-cream leading-[0.95]">{entry!.title}</h1>
      <div className="mt-3 inline-block label-mono px-3 py-1.5 rounded-full border border-warm-gold/40 text-warm-gold">
        Lesson · {entry!.lesson}
      </div>

      {entry!.quote && (
        <blockquote className="mt-10 panel p-8 relative">
          <span className="absolute top-2 left-4 font-display text-7xl text-warm-gold/30 leading-none">"</span>
          <p className="relative font-display text-2xl sm:text-3xl text-cream italic leading-snug">
            {entry!.quote}
          </p>
        </blockquote>
      )}

      {entry!.summary && (
        <p className="mt-8 text-lg text-cream/90 leading-relaxed">{entry!.summary}</p>
      )}

      {entry!.bullets && (
        <div className="mt-8 panel p-6">
          <div className="label-mono text-warm-gold mb-4">From the notebook</div>
          <ul className="space-y-3">
            {entry!.bullets.map((b, i) => (
              <li key={b} className="flex items-start gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-warm-gold/15 text-warm-gold text-xs font-mono">{i + 1}</span>
                <span className="text-cream">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {entry!.connection && (
        <div className="mt-6 panel p-6 border-warm-gold/40 bg-gradient-to-br from-warm-gold/10 to-transparent">
          <div className="label-mono text-warm-gold mb-2">Project connection</div>
          <p className="text-cream text-lg">{entry!.connection}</p>
        </div>
      )}

      <div className="mt-6 panel p-6">
        <div className="label-mono text-warm-gold mb-3">Your turn</div>
        <ul className="space-y-2 text-cream/90">
          <li>· What did this person believe?</li>
          <li>· What did they do?</li>
          <li>· How does this connect to your project today?</li>
        </ul>
      </div>
    </article>
  );
}

function PlaceholderView({ entry }: { entry: ReturnType<typeof getWisdomBySlug> & {} }) {
  return (
    <div className="mt-6 max-w-2xl">
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="label-mono px-2 py-1 rounded-md text-placeholder-state border border-dashed border-placeholder-state/40">○ Placeholder</span>
        <span className="label-mono text-muted-foreground">#{String(entry!.order).padStart(2, "0")}</span>
        <span className="label-mono text-warm-gold">{entry!.category}</span>
      </div>

      <h1 className="font-display text-5xl sm:text-6xl text-cream/80 leading-[0.95]">{entry!.title}</h1>
      <div className="mt-3 inline-block label-mono px-3 py-1.5 rounded-full border border-panel-border text-muted-foreground">
        Lesson · {entry!.lesson}
      </div>

      <div className="mt-10 panel p-8 border-dashed">
        <p className="text-cream text-lg">This Daily Wisdom page has not been created yet.</p>
        <p className="mt-3 text-muted-foreground">
          When the kids are ready, ask Codex or ChatGPT to create this lesson page and connect it
          back into the Daily Wisdom library.
        </p>
        <Link
          to="/daily-wisdom"
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-warm-gold text-primary-foreground font-semibold text-sm"
        >
          ← Back to Daily Wisdom
        </Link>
      </div>
    </div>
  );
}
