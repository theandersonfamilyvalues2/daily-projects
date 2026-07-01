import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";

export const Route = createFileRoute("/daily-wisdom/van-gogh")({
  head: () => ({
    meta: [
      { title: "Van Gogh — Daily Wisdom" },
      { name: "description", content: "Day 3 Daily Wisdom: Van Gogh, emotion, color, and hero silhouettes." },
    ],
  }),
  component: VanGoghPage,
});

function VanGoghPage() {
  const art = [
    ["Starry Night", "1889"],
    ["Sunflowers", "1888"],
    ["The Bedroom", "1889"],
    ["Wheatfield with Crows", "1890"],
    ["Almond Blossoms", "1890"],
    ["Cafe Terrace at Night", "1888"],
  ];

  const lessons = [
    ["Feel Deeply", "Strong feelings can become powerful art."],
    ["Use Color Boldly", "Color can show emotion when words are not enough."],
    ["Keep Going", "Create even when the work feels hard."],
    ["Be Unique", "Your style does not need to match everyone else's."],
    ["Inspire Others", "A finished piece can reach people you may never meet."],
  ];

  return (
    <SiteShell>
      <Link to="/daily-wisdom" className="text-sm text-muted-foreground hover:text-cream">← Daily Wisdom</Link>

      <article className="mt-6 overflow-hidden rounded-[2rem] border border-warm-gold/25 bg-[#071225] shadow-2xl shadow-black/40">
        <section className="relative overflow-hidden px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgba(245,176,66,0.32),transparent_20%),radial-gradient(circle_at_55%_35%,rgba(59,130,246,0.28),transparent_26%),linear-gradient(135deg,#071225_0%,#0b1c38_50%,#050816_100%)]" />
          <div className="absolute right-8 top-8 font-display text-[11rem] text-warm-gold/10">03</div>

          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-violet-300/30 bg-violet-500/20 px-4 py-2 label-mono text-violet-100">
                Day 3 of 91 · Visual Art
              </div>
              <h1 className="font-display text-6xl leading-[0.9] text-cream sm:text-8xl lg:text-9xl">
                Vincent<br /><span className="text-gold-gradient">van Gogh</span>
              </h1>
              <p className="mt-5 text-2xl font-semibold text-warm-gold">Emotion & Color</p>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/85">
                A visionary artist who turned feeling into color, movement, and unforgettable paintings.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Post-Impressionist", "Emotional Storyteller", "Color Innovator", "Creative Courage"].map((badge) => (
                  <span key={badge} className="rounded-full border border-warm-gold/30 bg-white/10 px-4 py-2 text-sm font-semibold text-cream">{badge}</span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur">
              <div className="grid min-h-[280px] place-items-center rounded-[1.5rem] border border-warm-gold/20 bg-gradient-to-br from-blue-950 to-yellow-900/40">
                <div className="text-center">
                  <div className="font-display text-8xl text-cream">V</div>
                  <div className="mt-3 label-mono text-warm-gold">Top Hat Edition</div>
                  <div className="mt-5 h-10 w-28 rounded-t-full bg-black mx-auto border border-warm-gold/30" />
                  <div className="h-3 w-40 rounded-full bg-black mx-auto border border-warm-gold/30" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-12 sm:px-8 lg:px-12">
          <div className="rounded-[1.5rem] border border-violet-300/20 bg-[#11164a] p-8 shadow-2xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div className="font-display text-3xl leading-tight text-cream sm:text-4xl">
                Dream it. Paint it. Make the feeling visible.
                <div className="mt-4 text-base font-sans text-warm-gold">— Daily Wisdom</div>
              </div>
              <div>
                <div className="label-mono text-warm-gold">Today's big lesson</div>
                <p className="mt-3 text-cream/85">Van Gogh teaches that emotions can guide creative choices. Color, shape, and movement can show a story before any words appear.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="font-display text-4xl text-cream">His Art</h2>
              <p className="mt-5 leading-relaxed text-cream/80">Van Gogh used bold colors, thick brushstrokes, and movement to express what he felt inside. His paintings still inspire creators everywhere.</p>
              <Link to="/today" className="mt-6 inline-flex rounded-full bg-warm-gold px-5 py-3 font-semibold text-primary-foreground">Back to Today's Plan →</Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {art.map(([title, year], index) => (
                <div key={title} className="overflow-hidden rounded-2xl border border-white/10 bg-cream text-slate-950 shadow-xl">
                  <div className="grid h-32 place-items-center bg-gradient-to-br from-blue-950 via-blue-800 to-yellow-600 font-display text-5xl text-cream">{index + 1}</div>
                  <div className="p-4"><div className="font-semibold">{title}</div><div className="text-sm text-slate-600">{year}</div></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-warm-gold/25 bg-[#071225] p-8">
            <h2 className="font-display text-4xl text-cream">What You Can Learn From Van Gogh</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-5">
              {lessons.map(([title, body]) => (
                <div key={title} className="rounded-2xl bg-cream p-5 text-slate-950">
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-[#071225] text-warm-gold">★</div>
                  <div className="font-semibold">{title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-warm-gold/25 bg-gradient-to-r from-[#11164a] to-[#2a155a] p-8">
            <div className="label-mono text-warm-gold">Today's challenge for you</div>
            <p className="mt-3 text-xl text-cream">Draw 3 hero silhouettes. Use bold shape and emotion. Pick the one that feels the most powerful.</p>
          </div>
        </section>
      </article>
    </SiteShell>
  );
}
