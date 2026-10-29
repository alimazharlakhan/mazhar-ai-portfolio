import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import portrait from "@/assets/portrait.jpg.asset.json";
import studio from "@/assets/studio.jpg.asset.json";
import commercial from "@/assets/thumb-commercial.jpg";
import cinematic from "@/assets/thumb-cinematic.jpg";
import animation from "@/assets/thumb-animation.jpg";
import social from "@/assets/thumb-social.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mazhar Ali Lakhan — AI Video Creator & Freelancer" },
      { name: "description", content: "AI-generated commercials, cinematic films, 3D animation and social videos crafted for brands and creators." },
      { property: "og:title", content: "Mazhar Ali Lakhan — AI Video Creator" },
      { property: "og:description", content: "Explore AI video work across commercials, cinematic, animation and social content." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/** Add your videos here. `video` can be a YouTube embed URL (https://www.youtube.com/embed/ID) or an .mp4 link. */
type Work = { title: string; category: Category; thumb: string; video?: string };
const CATEGORIES = ["All", "Commercials", "Cinematic", "Animation", "Social Media"] as const;
type Category = Exclude<(typeof CATEGORIES)[number], "All">;

const WORKS: Work[] = [
  { title: "Rouge — Perfume Commercial", category: "Commercials", thumb: commercial },
  { title: "Beyond the Twin Moons", category: "Cinematic", thumb: cinematic },
  { title: "The Little Explorer", category: "Animation", thumb: animation },
  { title: "Neon Nights — Reel", category: "Social Media", thumb: social },
];

const SERVICES = [
  ["Product Commercials", "Scroll-stopping ads that make products look premium."],
  ["Cinematic Storytelling", "Short films and trailers with a big-screen feel."],
  ["3D Animation", "Characters and worlds for kids, brands and explainers."],
  ["Social Reels", "Vertical videos built for TikTok, Reels and Shorts."],
];

function Index() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [open, setOpen] = useState<Work | null>(null);
  const list = filter === "All" ? WORKS : WORKS.filter((w) => w.category === filter);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg font-bold">Mazhar<span className="text-primary">.</span></a>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#work" className="hover:text-foreground">Work</a>
            <a href="#services" className="hover:text-foreground">Services</a>
            <a href="#about" className="hover:text-foreground">About</a>
          </div>
          <a href="#contact" className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90">Hire me</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-32 md:grid-cols-[1.2fr_1fr] md:pt-40">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Available for freelance
          </p>
          <h1 className="font-display text-5xl font-bold leading-[1.05] text-balance-tight md:text-7xl">
            AI videos that <span className="text-primary">move</span> people.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            I'm Mazhar Ali Lakhan — I turn ideas into cinematic, brand-ready AI videos, fast.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#work" className="rounded-full bg-primary px-7 py-3 font-medium text-primary-foreground shadow-glow transition hover:opacity-90">View my work</a>
            <a href="#contact" className="rounded-full border border-border px-7 py-3 font-medium transition hover:bg-secondary">Let's talk</a>
          </div>
        </div>
        <div className="relative">
          <img src={portrait.url} alt="Mazhar Ali Lakhan in his AI video studio" className="aspect-[4/5] w-full rounded-3xl object-cover object-top shadow-glow" />
          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-card px-5 py-4">
            <p className="font-display text-2xl font-bold">4</p>
            <p className="text-xs text-muted-foreground">Video specialties</p>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary">Portfolio</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-balance-tight md:text-5xl">Selected work</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-4 py-2 text-sm transition ${filter === c ? "bg-foreground text-background" : "border border-border text-muted-foreground hover:text-foreground"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {list.map((w) => (
            <button key={w.title} onClick={() => setOpen(w)} className="group relative overflow-hidden rounded-2xl text-left">
              <img src={w.thumb} alt={w.title} loading="lazy" width={1280} height={720} className="aspect-video w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-fade" />
              <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition group-hover:opacity-100">▶</span>
              <div className="absolute bottom-0 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-accent">{w.category}</p>
                <h3 className="mt-1 font-display text-xl font-bold">{w.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Services</p>
        <h2 className="mt-3 font-display text-4xl font-bold text-balance-tight md:text-5xl">What I create</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {SERVICES.map(([t, d], i) => (
            <div key={t} className="bg-background p-8 transition hover:bg-card">
              <span className="font-display text-sm text-primary">0{i + 1}</span>
              <h3 className="mt-3 font-display text-2xl font-bold">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <img src={studio.url} alt="Mazhar presenting an AI video edit" loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover" />
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-primary">About</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-balance-tight md:text-5xl">Creative direction, powered by AI.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            I combine storytelling with the latest AI video tools to deliver polished visuals for brands, agencies and creators — without the cost of a full production crew.
          </p>
          <ul className="mt-8 space-y-3">
            {["Concept & script to final cut", "Fast turnaround, unlimited ideas", "Optimised for every platform"].map((x) => (
              <li key={x} className="flex items-center gap-3"><span className="h-px w-6 bg-primary" />{x}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl border border-border bg-card px-8 py-20 text-center">
          <h2 className="font-display text-4xl font-bold text-balance-tight md:text-6xl">Have a video in mind?</h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">Tell me about your project and I'll reply within 24 hours.</p>
          <a href="mailto:hello@example.com" className="mt-10 inline-block rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground shadow-glow transition hover:opacity-90">Start a project</a>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Mazhar Ali Lakhan · AI Video Creator
      </footer>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-6 backdrop-blur" onClick={() => setOpen(null)}>
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video overflow-hidden rounded-2xl bg-card">
              {open.video ? (
                open.video.endsWith(".mp4") ? (
                  <video src={open.video} controls autoPlay className="h-full w-full" />
                ) : (
                  <iframe src={open.video} title={open.title} allow="autoplay; fullscreen" allowFullScreen className="h-full w-full" />
                )
              ) : (
                <img src={open.thumb} alt={open.title} className="h-full w-full object-cover" />
              )}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <h3 className="font-display text-xl font-bold">{open.title}</h3>
              <button onClick={() => setOpen(null)} className="rounded-full border border-border px-4 py-2 text-sm">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
