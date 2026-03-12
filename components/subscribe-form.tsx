"use client";

import { useState, type FormEvent } from "react";

export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "subscribe",
          email,
        }),
      });

      if (!res.ok) throw new Error("Failed to subscribe");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 rounded-2xl border-2 border-accent bg-accent/10 p-4">
        <span className="text-2xl">🎉</span>
        <p className="font-semibold text-accent-foreground">
          You&apos;re subscribed! We&apos;ll let you know when the first issue drops.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 rounded-2xl border-2 border-border bg-card p-4 sm:flex-row sm:items-center"
    >
      <span className="text-2xl" role="img" aria-hidden="true">
        📬
      </span>
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-xl border-2 border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
        aria-label="Email address"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-xl bg-primary px-6 py-2.5 font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-95 disabled:opacity-60"
      >
        {status === "loading" ? "Subscribing..." : "Subscribe FREE"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-500">Something went wrong. Try again?</p>
      )}
    </form>
  );
}
