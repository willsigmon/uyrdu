"use client";

import { useState, type FormEvent } from "react";

const CATEGORIES = [
  { value: "shining-bright", label: "Shining Bright", description: "Individual feature" },
  { value: "abilities-in-action", label: "Abilities in Action", description: "Achievement story" },
  { value: "parent-perspectives", label: "Parent Perspectives", description: "Family story" },
  { value: "making-a-difference", label: "Making a Difference", description: "Nonprofit/org spotlight" },
];

export function NominationForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    nominator: "",
    email: "",
    category: "",
    nominee: "",
    story: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function updateField(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "nomination",
          ...formData,
        }),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      setFormData({ nominator: "", email: "", category: "", nominee: "", story: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 rounded-2xl border-2 border-accent bg-accent/10 p-4">
        <span className="text-2xl">🌟</span>
        <div>
          <p className="font-semibold text-accent-foreground">
            Nomination received!
          </p>
          <p className="text-sm text-muted-foreground">
            Thank you for sharing this story. We&apos;ll review it for an upcoming issue.
          </p>
        </div>
      </div>
    );
  }

  if (!isOpen) {
    return null;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 rounded-2xl border-2 border-border bg-card p-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl" role="img" aria-hidden="true">
            ✨
          </span>
          <h3 className="font-semibold text-card-foreground">
            Share a Story
          </h3>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="rounded-lg p-1 text-muted-foreground hover:text-foreground"
          aria-label="Close form"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        <input
          type="text"
          required
          placeholder="Your name"
          value={formData.nominator}
          onChange={(e) => updateField("nominator", e.target.value)}
          className="rounded-xl border-2 border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          aria-label="Your name"
        />
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          className="rounded-xl border-2 border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          aria-label="Email address"
        />
      </div>

      <select
        required
        value={formData.category}
        onChange={(e) => updateField("category", e.target.value)}
        className="rounded-xl border-2 border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none"
        aria-label="Story category"
      >
        <option value="">Select a story category...</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.value} value={cat.value}>
            {cat.label} — {cat.description}
          </option>
        ))}
      </select>

      <input
        type="text"
        required
        placeholder="Who are you nominating?"
        value={formData.nominee}
        onChange={(e) => updateField("nominee", e.target.value)}
        className="rounded-xl border-2 border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
        aria-label="Nominee name"
      />

      <textarea
        required
        placeholder="Tell us their story... Why should they be featured?"
        value={formData.story}
        onChange={(e) => updateField("story", e.target.value)}
        rows={4}
        className="resize-none rounded-xl border-2 border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
        aria-label="Story details"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-xl bg-primary px-6 py-2.5 font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-95 disabled:opacity-60"
      >
        {status === "loading" ? "Submitting..." : "Submit Nomination"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-500">Something went wrong. Try again?</p>
      )}
    </form>
  );
}

export function NominationTrigger({
  onOpen,
}: {
  readonly onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex w-full items-center gap-4 rounded-2xl border-2 border-border bg-card p-4 text-left transition-all hover:border-foreground/30 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
    >
      <span className="text-2xl" role="img" aria-hidden="true">
        ✨
      </span>
      <div className="flex flex-1 flex-col gap-0.5">
        <span className="font-semibold leading-tight text-card-foreground">
          Share a Story
        </span>
        <span className="text-sm text-muted-foreground">
          Nominate someone for Shining Bright, Abilities in Action, and more
        </span>
      </div>
      <svg
        className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}
