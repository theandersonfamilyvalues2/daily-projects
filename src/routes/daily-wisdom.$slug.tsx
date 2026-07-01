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

      {entry.slug === "marie-curie" ? <MarieCurieView entry={entry} /> : ready ? <ReadyView entry={entry} /> : <PlaceholderView entry={entry} />}
    </SiteShell>
  );
}

function MarieCurieView({ entry }: { entry: ReturnType<typeof getWisdomBySlug> & {} }) {
  const highlights = [
    { title: "Curious Mind", body: "Asked big questions and kept looking for answers." },
    { title: "Groundbreaking Work", body: "Discovered radium and polonium with careful research." },
    { title: "Brave & Determined", body: "Kept studying even when the world made it difficult." },
    { title: "Legacy of Light", body: "Her discoveries helped science, medicine, and millions of lives." },
  ];

  const timeline = [
    { year: "1867", title: "Born in Warsaw", body: "Marie was born Maria Skłodowska in Poland and loved learning from a young age." },
    { year: "1891", title: "Moved to Paris", body: "She studied physics and mathematics at the Sorbonne." },
    { year: "1898", title: "New elements", body: "Marie and Pierre Curie announced polonium and radium." },
    { year: "1903 + 1911", title: "Two Nobel Prizes", body: "She won Nobel Prizes in Physics and Chemistry." },
  ];

  return (
    <article className="mt-6 overflow-hidden rounded-[2rem] border border-violet-300/20 bg-[#120f24] shadow-2xl shadow-violet-950/40">
      <section className="relative min-h-[520px] overflow-hidden px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(196,132,252,0.42),transparent_24%),radial-gradient(circle_at_18%_30%,rgba(245,176,66,0.18),transparent_28%),linear-gradient(135deg,#160f34_0%,#0f172a_52%,#050816_100%)]" />
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full border border-violet-300/30" />
        <div className="absolute right-8 top-20 h-44 w-44 rounded-full border border-violet-300/20" />
        <div className="absolute right-28 top-32 h-28 w-28 rounded-full border border-warm-gold/30" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#120f24] to-transparent" />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-300/30 bg-violet-400/20 px-4 py-2 label-mono text-violet-100">
              Day {entry!.order} of 91 · {entry!.category}
            </div>
            <h1 className="font-display text-6xl leading-[0.9] text-cream sm:text-8xl lg:text-9xl">
              Marie
              <br />
              <span className="text-gold-gradient">Curie</span>
            </h1>
            <p className="mt-5 text-2xl font-semibold text-warm-gold">{entry!.lesson}</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/85">
              A scientist who changed the world through curiosity, courage, and relentless discovery.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Scientist Pioneer",
                "First Woman Nobel Laureate",
                "Double Nobel Prize Winner",
              ].map((badge) => (
                <span key={badge} className="rounded-full border border-violet-300/25 bg-white/10 px-4 py-2 text-sm font-semibold text-cream">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[320px] rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
            <div className="absolute inset-6 rounded-[1.5rem] border border-violet-200/15" />
            <div className="relative flex h-full min-h-[300px] items-center justify-center">
              <div className="grid h-56 w-56 place-items-center rounded-full border border-violet-200/30 bg-gradient-to-br from-violet-300/25 to-warm-gold/10 shadow-2xl shadow-violet-500/20">
                <div className="text-center">
                  <div className="text-7xl">⚛</div>
                  <div className="mt-4 label-mono text-warm-gold">Curiosity</div>
                  <div className="mt-2 text-sm text-cream/70">Questions become discoveries.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-10 px-5 pb-12 sm:px-8 lg:px-12">
        <div className="grid gap-4 rounded-[1.5rem] border border-warm-gold/25 bg-cream p-5 text-slate-900 shadow-2xl shadow-black/20 md:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white/70 p-5">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-violet-700 text-xl text-white">✦</div>
              <h2 className="font-semibold text-slate-950">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <div className="label-mono text-warm-gold">Who she was</div>
            <h2 className="mt-3 font-display text-4xl text-cream">A life built from questions</h2>
            <p className="mt-5 text-lg leading-relaxed text-cream/85">{entry!.summary}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {timeline.map((item) => (
                <div key={item.year} className="rounded-2xl border border-violet-300/20 bg-violet-300/10 p-5">
                  <div className="label-mono text-violet-200">{item.year}</div>
                  <h3 className="mt-2 font-semibold text-cream">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-warm-gold/30 bg-gradient-to-br from-violet-950 to-[#1d143b] p-8 shadow-xl shadow-violet-950/30">
            <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full border border-warm-gold/60 bg-warm-gold/15 font-display text-5xl text-warm-gold">”</div>
            <blockquote className="font-display text-4xl leading-tight text-cream">
              “{entry!.quote}”
            </blockquote>
            <p className="mt-5 text-warm-gold">— Marie Curie</p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <div className="label-mono text-warm-gold">Notebook</div>
            <ul className="mt-5 space-y-4">
              {entry!.bullets?.map((bullet, index) => (
                <li key={bullet} className="flex gap-4 text-cream/85">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-warm-gold text-sm font-bold text-primary-foreground">{index + 1}</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.5rem] border border-warm-gold/30 bg-warm-gold/10 p-6 sm:p-8">
            <div className="label-mono text-warm-gold">Project connection</div>
            <h2 className="mt-3 font-display text-4xl text-cream">Build with science</h2>
            <p className="mt-5 text-lg leading-relaxed text-cream/85">{entry!.connection}</p>
            <div className="mt-6 rounded-2xl bg-black/20 p-5">
              <div className="font-semibold text-cream">Today's 3 bullets</div>
              <ul className="mt-3 space-y-2 text-cream/75">
                <li>· Who was Marie Curie?</li>
                <li>· What did she discover?</li>
                <li>· How can science shape your hero's tool, power, or rule?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </article>
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
