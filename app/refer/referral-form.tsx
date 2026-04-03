"use client";

import { useState, type FormEvent } from "react";

const SERVICE_OPTIONS = [
  { key: "disability_resources", label: "Disability Resources" },
  { key: "therapists", label: "Therapists (OT/PT/Speech/Behavior)" },
  { key: "aba_centers", label: "ABA Centers" },
  { key: "home_care_family_support", label: "Home Care / Family Support" },
  { key: "private_schools", label: "Private Schools (Disability Community)" },
  { key: "job_placement_services", label: "Job Placement Services" },
  { key: "medical_equipment", label: "Medical Equipment" },
  { key: "music_therapy", label: "Music Therapy" },
  { key: "transportation_mobility_services", label: "Transportation & Mobility" },
  { key: "autism_support", label: "Autism Support" },
  { key: "adult_day_support", label: "Adult Day Support" },
  { key: "accessibility_safety_modifications", label: "Accessibility & Safety Modifications" },
] as const;

const STORY_OPTIONS = [
  { key: "story_shining_bright", label: "Shining Bright — Individual Feature" },
  { key: "story_abilities_in_action", label: "Abilities in Action — Achievement" },
  { key: "story_parent_perspectives", label: "Parent Perspectives — Family Story" },
  { key: "story_caregivers_corner", label: "Caregivers Corner — Caregiver Spotlight" },
  { key: "story_nonprofit_spotlight", label: "Nonprofit Spotlight — Organization Feature" },
  { key: "story_service_animals", label: "Service Animal Stories" },
] as const;

interface ReferralEntry {
  type: "business" | "story";
  service_key: string;
  business_name: string;
  contact_name: string;
  contact_number: string;
}

function emptyEntry(type: "business" | "story"): ReferralEntry {
  return {
    type,
    service_key: type === "business" ? "disability_resources" : "story_shining_bright",
    business_name: "",
    contact_name: "",
    contact_number: "",
  };
}

export function ReferralForm() {
  const [submitterName, setSubmitterName] = useState("");
  const [submitterEmail, setSubmitterEmail] = useState("");
  const [submitterPhone, setSubmitterPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [entries, setEntries] = useState<ReferralEntry[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showContact, setShowContact] = useState(false);

  function addEntry(type: "business" | "story") {
    setEntries((prev) => [...prev, emptyEntry(type)]);
    setStatus("idle");
  }

  function removeEntry(index: number) {
    setEntries((prev) => prev.filter((_, i) => i !== index));
  }

  function updateEntry(index: number, field: keyof ReferralEntry, value: string) {
    setEntries((prev) =>
      prev.map((entry, i) => (i === index ? { ...entry, [field]: value } : entry))
    );
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!submitterName.trim()) return;

    const filledEntries = entries.filter((entry) => entry.business_name.trim());
    if (filledEntries.length === 0) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/recommendation-sheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submitter_name: submitterName.trim(),
          submitter_email: submitterEmail.trim() || null,
          submitter_phone: submitterPhone.trim() || null,
          relationship_to_community: null,
          notes: notes.trim() || null,
          entries: filledEntries.map((entry) => ({
            service_key: entry.service_key,
            business_name: entry.business_name.trim(),
            contact_name: entry.contact_name.trim() || null,
            contact_number: entry.contact_number.trim() || null,
          })),
        }),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        throw new Error(
          (payload as { error?: string } | null)?.error || "Something went wrong."
        );
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="space-y-5 py-12 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-foreground">Thank you!</h2>
        <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
          Your referral has been sent to Will. He&apos;ll review it and reach out to the business you recommended.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setEntries([]);
            setSubmitterName("");
            setSubmitterEmail("");
            setSubmitterPhone("");
            setNotes("");
          }}
          className="rounded-xl border-2 border-border px-6 py-2.5 font-medium text-foreground transition-all hover:border-foreground/30 active:scale-95"
        >
          Submit another referral
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Header */}
      <div className="space-y-3 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-100">
          <svg className="h-7 w-7 text-violet-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Know a great business or someone with an amazing story?
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          Uniquely You! is a free monthly magazine celebrating the disability community in the Triangle.
          If you know a business that serves our community or someone with a story worth sharing, let us know below.
        </p>
      </div>

      {/* Your name */}
      <div className="space-y-2">
        <label htmlFor="your-name" className="block text-base font-medium text-foreground">
          Your name
        </label>
        <input
          id="your-name"
          type="text"
          required
          value={submitterName}
          onChange={(e) => setSubmitterName(e.target.value)}
          placeholder="Your first and last name"
          className="w-full rounded-xl border-2 border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
        />
      </div>

      {/* Entries */}
      {entries.length === 0 ? (
        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground">What would you like to share?</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => addEntry("business")}
              className="flex items-start gap-3 rounded-2xl border-2 border-border bg-card p-4 text-left transition-all hover:border-foreground/30 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600 text-lg font-bold">+</span>
              <div>
                <p className="font-semibold text-card-foreground">A business or provider</p>
                <p className="text-sm text-muted-foreground mt-0.5">Therapy, medical, home care, education, etc.</p>
              </div>
            </button>
            <button
              type="button"
              onClick={() => addEntry("story")}
              className="flex items-start gap-3 rounded-2xl border-2 border-border bg-card p-4 text-left transition-all hover:border-foreground/30 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600 text-lg font-bold">+</span>
              <div>
                <p className="font-semibold text-card-foreground">Someone for a story feature</p>
                <p className="text-sm text-muted-foreground mt-0.5">A person, family, or org doing amazing things</p>
              </div>
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {entries.map((entry, index) => (
            <div
              key={index}
              className="rounded-2xl border-2 border-border bg-card p-5 space-y-4"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">
                  {entry.type === "story" ? "Story nomination" : "Business referral"}
                  {entries.length > 1 ? ` #${index + 1}` : ""}
                </p>
                <button
                  type="button"
                  onClick={() => removeEntry(index)}
                  className="rounded-lg p-1.5 text-muted-foreground hover:text-red-500 transition-colors"
                  aria-label="Remove"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>

              <div className="space-y-2">
                <label className="block text-base font-medium text-foreground">
                  {entry.type === "story" ? "Who should we feature?" : "Business name"}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={entry.business_name}
                  onChange={(e) => updateEntry(index, "business_name", e.target.value)}
                  placeholder={entry.type === "story" ? "Person's name or organization" : "e.g. Triangle Therapy Group"}
                  className="w-full rounded-xl border-2 border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-muted-foreground">
                    Best person to contact
                  </label>
                  <input
                    type="text"
                    value={entry.contact_name}
                    onChange={(e) => updateEntry(index, "contact_name", e.target.value)}
                    placeholder="Name (optional)"
                    className="w-full rounded-xl border-2 border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-muted-foreground">
                    Their phone number
                  </label>
                  <input
                    type="tel"
                    value={entry.contact_number}
                    onChange={(e) => updateEntry(index, "contact_number", e.target.value)}
                    placeholder="(919) 555-0123"
                    className="w-full rounded-xl border-2 border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              {/* Category picker */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-muted-foreground">Category</label>
                <select
                  value={entry.service_key}
                  onChange={(e) => updateEntry(index, "service_key", e.target.value)}
                  className="w-full rounded-xl border-2 border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none"
                >
                  {entry.type === "business" ? (
                    SERVICE_OPTIONS.map((opt) => (
                      <option key={opt.key} value={opt.key}>{opt.label}</option>
                    ))
                  ) : (
                    STORY_OPTIONS.map((opt) => (
                      <option key={opt.key} value={opt.key}>{opt.label}</option>
                    ))
                  )}
                </select>
              </div>
            </div>
          ))}

          {/* Add another */}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => addEntry("business")}
              className="rounded-xl border-2 border-border px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-foreground/30 active:scale-95"
            >
              + Add another business
            </button>
            <button
              type="button"
              onClick={() => addEntry("story")}
              className="rounded-xl border-2 border-border px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-foreground/30 active:scale-95"
            >
              + Add a story nomination
            </button>
          </div>
        </div>
      )}

      {/* Optional contact info */}
      {entries.length > 0 && (
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => setShowContact(!showContact)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {showContact ? "Hide" : "Add"} your contact info (optional)
          </button>

          {showContact && (
            <div className="space-y-3 rounded-2xl border-2 border-border/60 bg-muted/20 p-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="email"
                  value={submitterEmail}
                  onChange={(e) => setSubmitterEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full rounded-xl border-2 border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
                <input
                  type="tel"
                  value={submitterPhone}
                  onChange={(e) => setSubmitterPhone(e.target.value)}
                  placeholder="Your phone"
                  className="w-full rounded-xl border-2 border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any extra context about the referral — totally optional."
                rows={2}
                className="w-full resize-none rounded-xl border-2 border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
            </div>
          )}
        </div>
      )}

      {/* Submit */}
      {entries.length > 0 && (
        <div className="space-y-3">
          <button
            type="submit"
            disabled={status === "loading" || !entries.some((e) => e.business_name.trim())}
            className="w-full rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Send to Will"}
          </button>
          {status === "error" && (
            <p className="text-sm text-center text-red-500">{errorMessage}</p>
          )}
          <p className="text-xs text-center text-muted-foreground">
            No account needed. We&apos;ll review your referral and reach out.
          </p>
        </div>
      )}
    </form>
  );
}
