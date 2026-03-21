"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    message: "",
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
          type: "advertiser",
          ...formData,
        }),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      setFormData({ name: "", business: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 rounded-2xl border-2 border-accent bg-accent/10 p-4">
        <span className="text-2xl">✅</span>
        <p className="font-semibold text-accent-foreground">
          Message sent! Will will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 rounded-2xl border-2 border-border bg-card p-4 animate-scale-in"
    >
      <div className="flex items-center gap-2">
        <span className="text-2xl" role="img" aria-hidden="true">
          📢
        </span>
        <h3 className="font-semibold text-card-foreground">
          Advertise With Us
        </h3>
      </div>
      <p className="text-sm text-muted-foreground">
        Reach families and advocates across the Triangle. Tell us about your
        business.
      </p>
      <div className="grid gap-2 sm:grid-cols-2">
        <input
          type="text"
          required
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => updateField("name", e.target.value)}
          className="rounded-xl border-2 border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          aria-label="Your name"
        />
        <input
          type="text"
          required
          placeholder="Business name"
          value={formData.business}
          onChange={(e) => updateField("business", e.target.value)}
          className="rounded-xl border-2 border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          aria-label="Business name"
        />
      </div>
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={formData.email}
        onChange={(e) => updateField("email", e.target.value)}
        className="rounded-xl border-2 border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
        aria-label="Email address"
      />
      <textarea
        placeholder="Tell us about your business and how you serve the disability community..."
        value={formData.message}
        onChange={(e) => updateField("message", e.target.value)}
        rows={3}
        className="resize-none rounded-xl border-2 border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
        aria-label="Message"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-xl bg-primary px-6 py-2.5 font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-95 disabled:opacity-60 hover-lift animate-pulse-glow"
      >
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong. Try again?
        </p>
      )}
    </form>
  );
}
