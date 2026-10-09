import { useEffect, useState } from "react";
import { ArrowUp, Plus, Trash2, Beaker } from "lucide-react";

type Idea = {
  id: string;
  text: string;
  pillar: string;
  votes: number;
};

const PILLARS = ["Brand", "Acquisition", "Retention", "Product"] as const;

const SEED_IDEAS: Idea[] = [
  {
    id: "seed-1",
    text: "Campus ambassador leaderboard with monthly rewards",
    pillar: "Acquisition",
    votes: 12,
  },
  {
    id: "seed-2",
    text: "Weekly 'Opportunity Digest' email personalized by skills",
    pillar: "Retention",
    votes: 9,
  },
  {
    id: "seed-3",
    text: "Shareable 'I got shortlisted' badge for LinkedIn",
    pillar: "Brand",
    votes: 15,
  },
  {
    id: "seed-4",
    text: "One-click re-apply to similar competitions",
    pillar: "Product",
    votes: 7,
  },
];

const STORAGE_KEY = "unstop-growth-ideas";

function loadIdeas(): Idea[] {
  if (typeof window === "undefined") return SEED_IDEAS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return SEED_IDEAS;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : SEED_IDEAS;
  } catch {
    return SEED_IDEAS;
  }
}

export function IdeaBoard() {
  const [ideas, setIdeas] = useState<Idea[]>(SEED_IDEAS);
  const [text, setText] = useState("");
  const [pillar, setPillar] = useState<string>(PILLARS[0]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setIdeas(loadIdeas());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ideas));
  }, [ideas, hydrated]);

  const addIdea = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setIdeas((prev) => [
      { id: crypto.randomUUID(), text: trimmed, pillar, votes: 1 },
      ...prev,
    ]);
    setText("");
  };

  const vote = (id: string) =>
    setIdeas((prev) =>
      prev.map((i) => (i.id === id ? { ...i, votes: i.votes + 1 } : i)),
    );

  const remove = (id: string) =>
    setIdeas((prev) => prev.filter((i) => i.id !== id));

  const sorted = [...ideas].sort((a, b) => b.votes - a.votes);

  return (
    <div className="card-glow rounded-3xl border border-border bg-card p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addIdea()}
          placeholder="Drop a growth idea... e.g. referral streaks for hackathon teams"
          className="flex-1 rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <div className="flex gap-2">
          <select
            value={pillar}
            onChange={(e) => setPillar(e.target.value)}
            className="rounded-xl border border-input bg-background px-3 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {PILLARS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          <button
            onClick={addIdea}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <Plus className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>

      <ul className="mt-6 space-y-3">
        {sorted.map((idea, idx) => (
          <li
            key={idea.id}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-surface px-4 py-3 transition-colors hover:border-primary/40"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-xs font-bold text-muted-foreground">
              {idx + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-foreground">
                {idea.text}
              </p>
              <p className="text-xs text-muted-foreground">{idea.pillar}</p>
            </div>
            <button
              onClick={() => vote(idea.id)}
              className="inline-flex items-center gap-1 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label={`Upvote: ${idea.text}`}
            >
              <ArrowUp className="h-3.5 w-3.5" />
              {idea.votes}
            </button>
            <button
              onClick={() => remove(idea.id)}
              className="rounded-lg p-1.5 text-muted-foreground opacity-0 transition-opacity hover:text-destructive group-hover:opacity-100"
              aria-label={`Remove: ${idea.text}`}
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <Beaker className="h-3.5 w-3.5" />
        Ideas are saved in your browser. Upvote to prioritize what to test first.
      </p>
    </div>
  );
}
