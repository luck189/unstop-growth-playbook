import { createFileRoute } from "@tanstack/react-router";
import {
  Megaphone,
  Magnet,
  Repeat2,
  FlaskConical,
  Users,
  Sparkles,
  TrendingUp,
  Target,
  Zap,
  ArrowRight,
} from "lucide-react";
import { IdeaBoard } from "@/components/growth/IdeaBoard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Unstop Growth Playbook — Brand, Users, Retention, Experiments" },
      {
        name: "description",
        content:
          "A hands-on growth playbook for Unstop: brand campaigns that stick, acquisition loops, retention journeys, and a live experiment board.",
      },
      { property: "og:title", content: "Unstop Growth Playbook" },
      {
        property: "og:description",
        content:
          "Brand campaigns, acquisition loops, retention journeys, and product experiments — a working growth plan for Unstop.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PILLARS = [
  {
    icon: Megaphone,
    title: "Build the brand",
    color: "text-primary",
    ring: "group-hover:border-primary/50",
    goal: "Make people stop, notice, and remember Unstop.",
    plays: [
      "Own one emotion: ambition. Every campaign shows a student leveling up, not a logo talking.",
      "Run 'Unstop Moments' — real winner stories as 15-second reels, cut for shareability.",
      "Create a signature ritual: a yearly 'Unstoppables List' of the top 100 campus achievers.",
    ],
    metric: "Brand search volume & direct traffic",
  },
  {
    icon: Magnet,
    title: "Acquire users",
    color: "text-cyan-glow",
    ring: "group-hover:border-cyan-glow/50",
    goal: "Turn attention into actual growth.",
    plays: [
      "Campus ambassador program with a public leaderboard — students recruit students.",
      "SEO engine: a landing page for every competition category, skill, and city.",
      "Referral loop: invite 3 friends to a hackathon team, unlock priority shortlisting.",
    ],
    metric: "Signups per channel & cost per activation",
  },
  {
    icon: Repeat2,
    title: "Make users come back",
    color: "text-violet-glow",
    ring: "group-hover:border-violet-glow/50",
    goal: "Give people a reason to return every week.",
    plays: [
      "Weekly personalized digest: '3 opportunities matched to your skills' every Monday.",
      "Streaks and skill badges that decay if you go quiet — progress you don't want to lose.",
      "Post-competition journey: feedback, certificate, and the next 2 recommended challenges.",
    ],
    metric: "Weekly active users & D30 retention",
  },
  {
    icon: FlaskConical,
    title: "Experiment with the product",
    color: "text-primary",
    ring: "group-hover:border-primary/50",
    goal: "Spot opportunities, test fast, keep what works.",
    plays: [
      "One-click re-apply: after a rejection, suggest 3 similar live competitions instantly.",
      "A/B test the opportunity card: deadline-first vs. prize-first framing.",
      "Prototype a 'practice arena' — past competition questions as timed drills.",
    ],
    metric: "Experiment win rate & feature adoption",
  },
];

const JOURNEY = [
  {
    step: "Discover",
    detail: "Lands from a reel, a friend, or a campus poster",
    icon: Sparkles,
  },
  {
    step: "Sign up",
    detail: "30-second profile: skills, interests, college",
    icon: Zap,
  },
  {
    step: "First win",
    detail: "Joins a first competition within 48 hours",
    icon: Target,
  },
  {
    step: "Habit",
    detail: "Monday digest + streaks pull them back weekly",
    icon: Repeat2,
  },
  {
    step: "Advocate",
    detail: "Shares badges, recruits teammates, refers friends",
    icon: Users,
  },
];

const NORTH_STARS = [
  { label: "Weekly active users", value: "+18%", note: "QoQ target" },
  { label: "D30 retention", value: "32%", note: "from 24% baseline" },
  { label: "Referral signups", value: "25%", note: "of all new users" },
  { label: "Experiments shipped", value: "4/mo", note: "with clear readouts" },
];

const TICKER = [
  "Brand that sticks",
  "Acquisition loops",
  "Retention journeys",
  "Product experiments",
  "Learn fast, ship faster",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse, var(--lime), var(--violet-glow), transparent 70%)",
          }}
        />
        <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <span className="text-lg font-bold tracking-tight">
            unstop<span className="text-primary">/growth</span>
          </span>
          <a
            href="#board"
            className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Idea board
          </a>
        </nav>

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-14 text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 animate-pulse-dot rounded-full bg-primary" />
            Growth playbook · working draft
          </p>
          <h1 className="mx-auto mt-8 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            Make students{" "}
            <span className="text-glow-lime text-primary">unstoppable</span>,
            then make growth inevitable.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            A living plan for Unstop — brand campaigns people remember, loops
            that bring the right users in, journeys that bring them back, and
            experiments that keep the product sharp.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#pillars"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              See the plan <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#board"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary"
            >
              Add a growth idea
            </a>
          </div>
        </div>

        {/* Ticker */}
        <div className="relative border-y border-border bg-card/60 py-3">
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap px-6">
            {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((t, i) => (
              <span
                key={i}
                className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground"
              >
                <TrendingUp className="h-3.5 w-3.5 text-primary" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Pillars */}
      <section id="pillars" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          The four growth pillars
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Each pillar has a clear goal, three concrete plays to test first, and
          the one metric that proves it's working.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PILLARS.map((p) => (
            <article
              key={p.title}
              className={`card-glow group rounded-3xl border border-border bg-card p-7 transition-colors ${p.ring}`}
            >
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-secondary p-2.5">
                  <p.icon className={`h-5 w-5 ${p.color}`} />
                </span>
                <h3 className="text-xl font-bold">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm font-medium text-muted-foreground">
                {p.goal}
              </p>
              <ul className="mt-5 space-y-3">
                {p.plays.map((play) => (
                  <li
                    key={play}
                    className="flex gap-3 text-sm leading-relaxed text-foreground/90"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {play}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl bg-secondary px-4 py-2.5 text-xs font-semibold text-muted-foreground">
                North star: <span className="text-foreground">{p.metric}</span>
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* User journey */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The retention journey
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Growth compounds when every new user becomes a returning user — and
            every returning user becomes a recruiter.
          </p>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {JOURNEY.map((j, i) => (
              <li
                key={j.step}
                className="relative rounded-2xl border border-border bg-surface p-5"
              >
                <span className="absolute -top-3 left-5 rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <j.icon className="mt-2 h-5 w-5 text-primary" />
                <h3 className="mt-3 font-bold">{j.step}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {j.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Targets */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          What winning looks like
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {NORTH_STARS.map((n) => (
            <div
              key={n.label}
              className="card-glow rounded-2xl border border-border bg-card p-6 text-center"
            >
              <p className="text-4xl font-bold text-primary">{n.value}</p>
              <p className="mt-2 text-sm font-semibold">{n.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{n.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Idea board */}
      <section id="board" className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The experiment board
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Growth is a team sport. Drop your ideas, upvote the ones worth
            testing, and let the best rise to the top — then ship, measure,
            and learn with the Growth team.
          </p>
          <div className="mt-10">
            <IdeaBoard />
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-xs text-muted-foreground">
        Built as a growth playbook concept for Unstop · brainstorm, execute,
        analyse, learn
      </footer>
    </div>
  );
}
