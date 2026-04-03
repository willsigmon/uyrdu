"use client";

import { useState, useRef, useEffect, useCallback, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Categories the referrer actually thinks in ───────────────
// Mapped to CRM service_keys for backend compatibility
const BUSINESS_CATEGORIES = [
  { key: "therapists", label: "Therapy (OT, PT, Speech, ABA)" },
  { key: "autism_support", label: "Autism Services" },
  { key: "home_care_family_support", label: "Home Care & Family Support" },
  { key: "private_schools", label: "School or Education Program" },
  { key: "medical_equipment", label: "Medical Equipment & Mobility" },
  { key: "job_placement_services", label: "Employment & Job Placement" },
  { key: "transportation_mobility_services", label: "Transportation" },
  { key: "disability_resources", label: "Community Resource / Nonprofit" },
  { key: "music_therapy", label: "Music, Art, or Recreation Therapy" },
  { key: "accessibility_safety_modifications", label: "Home Modifications & Accessibility" },
  { key: "adult_day_support", label: "Adult Day Programs & Respite" },
  { key: "disability_support_services", label: "Other / Not Sure" },
] as const;

const STORY_CATEGORIES = [
  { key: "story_shining_bright", label: "Individual Feature" },
  { key: "story_abilities_in_action", label: "Achievement or Milestone" },
  { key: "story_parent_perspectives", label: "Family Story" },
  { key: "story_caregivers_corner", label: "Caregiver Spotlight" },
  { key: "story_nonprofit_spotlight", label: "Organization Making a Difference" },
  { key: "story_service_animals", label: "Service Animal Story" },
] as const;

// ── Google Form subscription (N2 corporate mailing list) ─────
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSeN2iwnRxln-1J6yIbN3_wlYqg133j2ITOige94Yw24e2bYsA/formResponse";

function submitGoogleForm(fields: {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  relationship: string;
}) {
  const params = new URLSearchParams();
  params.set("entry.1498327928", fields.name);
  params.set("entry.860602744", fields.street);
  params.set("entry.665495839", fields.city);
  params.set("entry.196003983", fields.state);
  params.set("entry.879240242", fields.zip);
  params.set("entry.1914403414", fields.relationship);

  // Fire-and-forget via hidden iframe to avoid CORS issues
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.name = "uy-gform-sub";
  document.body.appendChild(iframe);

  const form = document.createElement("form");
  form.method = "POST";
  form.action = GOOGLE_FORM_ACTION;
  form.target = "uy-gform-sub";

  for (const [key, value] of params.entries()) {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = value;
    form.appendChild(input);
  }

  document.body.appendChild(form);
  form.submit();

  // Cleanup after a beat
  setTimeout(() => {
    form.remove();
    iframe.remove();
  }, 3000);
}

// ── Address autocomplete ─────────────────────────────────────
interface ParsedAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
}

interface Prediction {
  placeId: string;
  text: { text: string };
  structuredFormat?: {
    mainText: { text: string };
    secondaryText: { text: string };
  };
}

function AddressInput({
  value,
  onChange,
  onSelect,
}: {
  value: string;
  onChange: (v: string) => void;
  onSelect: (addr: ParsedAddress) => void;
}) {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [showDrop, setShowDrop] = useState(false);
  const [selIdx, setSelIdx] = useState(-1);
  const [loading, setLoading] = useState(false);
  const debounce = useRef<NodeJS.Timeout | null>(null);
  const session = useRef(crypto.randomUUID());
  const wrapRef = useRef<HTMLDivElement>(null);

  const fetchPredictions = useCallback(async (input: string) => {
    if (input.length < 3) { setPredictions([]); setShowDrop(false); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/places/autocomplete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input, sessionToken: session.current }),
      });
      const data = await res.json();
      const items = (data.suggestions ?? []).map((s: { placePrediction: Prediction }) => s.placePrediction);
      setPredictions(items);
      setShowDrop(items.length > 0);
      setSelIdx(-1);
    } catch { setPredictions([]); setShowDrop(false); }
    setLoading(false);
  }, []);

  function handleChange(v: string) {
    onChange(v);
    if (debounce.current) clearTimeout(debounce.current);
    debounce.current = setTimeout(() => fetchPredictions(v), 300);
  }

  async function handlePick(pred: Prediction) {
    setLoading(true);
    try {
      const res = await fetch(`/api/places/details?placeId=${pred.placeId}&sessionToken=${session.current}`);
      const data = await res.json();
      const parsed: ParsedAddress = { street: "", city: "", state: "NC", zip: "" };
      for (const c of data.addressComponents ?? []) {
        if (c.types.includes("street_number")) parsed.street = c.longText;
        else if (c.types.includes("route")) parsed.street += (parsed.street ? " " : "") + c.longText;
        else if (c.types.includes("locality") || c.types.includes("sublocality_level_1")) parsed.city = c.longText;
        else if (c.types.includes("administrative_area_level_1")) parsed.state = c.shortText;
        else if (c.types.includes("postal_code")) parsed.zip = c.longText;
      }
      onChange(parsed.street);
      onSelect(parsed);
    } catch {
      onChange(pred.text.text);
    }
    setPredictions([]);
    setShowDrop(false);
    setLoading(false);
    session.current = crypto.randomUUID();
  }

  useEffect(() => {
    function outside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setShowDrop(false);
    }
    document.addEventListener("mousedown", outside);
    return () => document.removeEventListener("mousedown", outside);
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      <div className="relative">
        <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <input
          type="text"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => predictions.length > 0 && setShowDrop(true)}
          onKeyDown={(e) => {
            if (!showDrop) return;
            if (e.key === "ArrowDown") { e.preventDefault(); setSelIdx((i) => (i < predictions.length - 1 ? i + 1 : 0)); }
            else if (e.key === "ArrowUp") { e.preventDefault(); setSelIdx((i) => (i > 0 ? i - 1 : predictions.length - 1)); }
            else if (e.key === "Enter" && selIdx >= 0) { e.preventDefault(); handlePick(predictions[selIdx]); }
            else if (e.key === "Escape") setShowDrop(false);
          }}
          placeholder="Start typing your address..."
          autoComplete="off"
          className="w-full rounded-xl border-2 border-border bg-background pl-10 pr-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
        />
        {loading && (
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
          </div>
        )}
      </div>
      <AnimatePresence>
        {showDrop && predictions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-1 w-full rounded-xl border-2 border-border bg-card shadow-lg overflow-hidden"
          >
            {predictions.map((p, i) => (
              <button
                key={p.placeId}
                type="button"
                onClick={() => handlePick(p)}
                onMouseEnter={() => setSelIdx(i)}
                className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                  i === selIdx ? "bg-primary/10" : "hover:bg-muted/50"
                } ${i !== predictions.length - 1 ? "border-b border-border/60" : ""}`}
              >
                <p className="font-medium text-foreground truncate">
                  {p.structuredFormat?.mainText.text ?? p.text.text}
                </p>
                {p.structuredFormat?.secondaryText && (
                  <p className="text-xs text-muted-foreground truncate">{p.structuredFormat.secondaryText.text}</p>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Animated section wrapper ─────────────────────────────────
const sectionVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -10 },
};

// ── Main form ────────────────────────────────────────────────
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
    service_key: type === "business" ? "disability_support_services" : "story_shining_bright",
    business_name: "",
    contact_name: "",
    contact_number: "",
  };
}

export function ReferralForm() {
  const [submitterName, setSubmitterName] = useState("");
  const [entries, setEntries] = useState<ReferralEntry[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Subscribe opt-in
  const [wantsMagazine, setWantsMagazine] = useState(false);
  const [subStreet, setSubStreet] = useState("");
  const [subCity, setSubCity] = useState("");
  const [subState, setSubState] = useState("NC");
  const [subZip, setSubZip] = useState("");
  const [subRelationship, setSubRelationship] = useState("");

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
          submitter_email: null,
          submitter_phone: null,
          relationship_to_community: null,
          notes: null,
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
        throw new Error((payload as { error?: string } | null)?.error || "Something went wrong.");
      }

      // Silently submit Google Form subscription if opted in
      if (wantsMagazine && subStreet.trim() && subCity.trim() && subZip.trim()) {
        submitGoogleForm({
          name: submitterName.trim(),
          street: subStreet.trim(),
          city: subCity.trim(),
          state: subState.trim() || "NC",
          zip: subZip.trim(),
          relationship: subRelationship || "A member of my family is part of the disability community.",
        });
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Please try again.");
    }
  }

  // ── Success state ──────────────────────────────────────────
  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="space-y-5 py-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 15 }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100"
        >
          <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <h2 className="text-2xl font-semibold text-foreground">Thank you, {submitterName.split(" ")[0]}!</h2>
        <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
          Your referral has been sent to Will. He&apos;ll review it and reach out to the business you recommended.
        </p>
        {wantsMagazine && (
          <p className="text-sm text-primary font-medium">
            You&apos;re also signed up to receive Uniquely You! magazine.
          </p>
        )}
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setEntries([]);
            setSubmitterName("");
            setWantsMagazine(false);
            setSubStreet(""); setSubCity(""); setSubState("NC"); setSubZip("");
          }}
          className="rounded-xl border-2 border-border px-6 py-2.5 font-medium text-foreground transition-all hover:border-foreground/30 active:scale-95"
        >
          Submit another referral
        </button>
      </motion.div>
    );
  }

  // ── Form ───────────────────────────────────────────────────
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="space-y-3 text-center"
      >
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
          Share a quick referral below — takes about 30 seconds.
        </p>
      </motion.div>

      {/* Step 1: Your name */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-2"
      >
        <label htmlFor="your-name" className="block text-base font-medium text-foreground">
          Your name
        </label>
        <input
          id="your-name"
          type="text"
          required
          value={submitterName}
          onChange={(e) => setSubmitterName(e.target.value)}
          placeholder="First and last name"
          autoComplete="name"
          className="w-full rounded-xl border-2 border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
        />
      </motion.div>

      {/* Step 2: What to share — appears after name has content */}
      <AnimatePresence>
        {submitterName.trim().length > 0 && entries.length === 0 && (
          <motion.div
            key="type-picker"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sectionVariants}
            transition={{ duration: 0.4 }}
            className="space-y-3"
          >
            <p className="text-sm font-medium text-muted-foreground">What would you like to share?</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { type: "business" as const, title: "A business or provider", desc: "Therapy, home care, school, nonprofit, etc." },
                { type: "story" as const, title: "Someone for a story", desc: "A person, family, or org doing amazing things" },
              ].map((opt) => (
                <motion.button
                  key={opt.type}
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => addEntry(opt.type)}
                  className="flex items-start gap-3 rounded-2xl border-2 border-border bg-card p-4 text-left transition-shadow hover:shadow-md hover:border-foreground/20"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600 text-lg font-bold">+</span>
                  <div>
                    <p className="font-semibold text-card-foreground">{opt.title}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{opt.desc}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step 3: Entry cards */}
      <AnimatePresence mode="popLayout">
        {entries.map((entry, index) => (
          <motion.div
            key={`entry-${index}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sectionVariants}
            transition={{ duration: 0.35 }}
            layout
            className="rounded-2xl border-2 border-border bg-card p-5 space-y-4"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">
                {entry.type === "story" ? "Story nomination" : "Business referral"}
                {entries.length > 1 ? ` #${index + 1}` : ""}
              </p>
              <motion.button
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => removeEntry(index)}
                className="rounded-lg p-1.5 text-muted-foreground hover:text-red-500 transition-colors"
                aria-label="Remove"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </motion.button>
            </div>

            {/* Name — always first, always prominent */}
            <div className="space-y-1.5">
              <label className="block text-base font-medium text-foreground">
                {entry.type === "story" ? "Who should we feature?" : "Business name"}
              </label>
              <input
                type="text"
                required
                value={entry.business_name}
                onChange={(e) => updateEntry(index, "business_name", e.target.value)}
                placeholder={entry.type === "story" ? "Person or organization name" : "e.g. Triangle Therapy Group"}
                autoComplete="organization"
                className="w-full rounded-xl border-2 border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            {/* Contact + phone — revealed after name has content */}
            <AnimatePresence>
              {entry.business_name.trim().length > 0 && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={sectionVariants}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <p className="text-xs text-muted-foreground">
                    Optional but helpful — who should Will ask for?
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      type="text"
                      value={entry.contact_name}
                      onChange={(e) => updateEntry(index, "contact_name", e.target.value)}
                      placeholder="Contact name"
                      autoComplete="off"
                      className="w-full rounded-xl border-2 border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                    <input
                      type="tel"
                      value={entry.contact_number}
                      onChange={(e) => updateEntry(index, "contact_number", e.target.value)}
                      placeholder="Phone number"
                      autoComplete="tel"
                      className="w-full rounded-xl border-2 border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Category — simple select, not overwhelming */}
                  <select
                    value={entry.service_key}
                    onChange={(e) => updateEntry(index, "service_key", e.target.value)}
                    className="w-full rounded-xl border-2 border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="" disabled>What type of service?</option>
                    {(entry.type === "business" ? BUSINESS_CATEGORIES : STORY_CATEGORIES).map((opt) => (
                      <option key={opt.key} value={opt.key}>{opt.label}</option>
                    ))}
                  </select>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Add another */}
      <AnimatePresence>
        {entries.length > 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap gap-2"
          >
            <button
              type="button"
              onClick={() => addEntry("business")}
              className="rounded-xl border-2 border-border px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-foreground/30 active:scale-95"
            >
              + Another business
            </button>
            <button
              type="button"
              onClick={() => addEntry("story")}
              className="rounded-xl border-2 border-border px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-foreground/30 active:scale-95"
            >
              + Story nomination
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Magazine subscription opt-in */}
      <AnimatePresence>
        {entries.length > 0 && entries.some((e) => e.business_name.trim()) && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ duration: 0.4 }}
            className="space-y-3"
          >
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={wantsMagazine}
                onChange={(e) => setWantsMagazine(e.target.checked)}
                className="mt-1 h-5 w-5 rounded-md border-2 border-border accent-primary"
              />
              <div>
                <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                  Send me Uniquely You! magazine (free)
                </p>
                <p className="text-sm text-muted-foreground">
                  Monthly magazine delivered to your door — celebrating the disability community in the Triangle.
                </p>
              </div>
            </label>

            <AnimatePresence>
              {wantsMagazine && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={sectionVariants}
                  transition={{ duration: 0.3 }}
                  className="space-y-3 rounded-2xl border-2 border-primary/20 bg-primary/5 p-4"
                >
                  <p className="text-sm font-medium text-foreground">
                    Where should we send it?
                  </p>
                  <AddressInput
                    value={subStreet}
                    onChange={setSubStreet}
                    onSelect={(addr) => {
                      setSubCity(addr.city);
                      setSubState(addr.state);
                      setSubZip(addr.zip);
                    }}
                  />
                  <div className="grid gap-3 grid-cols-[1fr_auto_auto]">
                    <input
                      type="text"
                      value={subCity}
                      onChange={(e) => setSubCity(e.target.value)}
                      placeholder="City"
                      autoComplete="address-level2"
                      className="w-full rounded-xl border-2 border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                    <input
                      type="text"
                      value={subState}
                      onChange={(e) => setSubState(e.target.value)}
                      placeholder="NC"
                      autoComplete="address-level1"
                      className="w-20 rounded-xl border-2 border-border bg-background px-3 py-2.5 text-center text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                    <input
                      type="text"
                      value={subZip}
                      onChange={(e) => setSubZip(e.target.value)}
                      placeholder="Zip"
                      autoComplete="postal-code"
                      className="w-24 rounded-xl border-2 border-border bg-background px-3 py-2.5 text-center text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <select
                    value={subRelationship}
                    onChange={(e) => setSubRelationship(e.target.value)}
                    className="w-full rounded-xl border-2 border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">What best describes you?</option>
                    <option value="I am part of the disability community.">I am part of the disability community</option>
                    <option value="A member of my family is part of the disability community.">Family member is part of the disability community</option>
                    <option value="My business has a product or service that impacts the disability community.">My business serves the disability community</option>
                    <option value="My non-profit organization has a product or service that impacts the disability community.">My nonprofit serves the disability community</option>
                  </select>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit */}
      <AnimatePresence>
        {entries.length > 0 && entries.some((e) => e.business_name.trim()) && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ duration: 0.4 }}
            className="space-y-3"
          >
            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:brightness-110 disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send to Will"}
            </motion.button>
            {status === "error" && (
              <p className="text-sm text-center text-red-500">{errorMessage}</p>
            )}
            <p className="text-xs text-center text-muted-foreground">
              No account needed. Takes about 30 seconds.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
