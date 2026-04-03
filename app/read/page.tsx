import type { Metadata } from "next";
import Link from "next/link";
import { URLS } from "@/lib/constants";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Read Current Issue — Uniquely You! Raleigh Metro",
  description:
    "Read the latest issue of Uniquely You! Raleigh Metro — a free monthly magazine celebrating the disability community in NC's Triangle region.",
};

export default function ReadPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-4 pb-8 pt-12">
      <div className="flex flex-1 flex-col items-center justify-center text-center py-16">
        <div className="animate-float-slow text-6xl mb-6">📖</div>
        <h1 className="font-display text-3xl tracking-tight text-foreground">
          First Issue Coming Soon
        </h1>
        <p className="mt-3 max-w-md text-muted-foreground leading-relaxed">
          We&apos;re putting the finishing touches on the first issue of Uniquely You!
          Raleigh Metro. Subscribe below to be the first to read it.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={URLS.subscribe}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-95 animate-pulse-glow"
          >
            Subscribe FREE
          </a>
          <Link
            href="/"
            className="rounded-xl border-2 border-border px-6 py-3 font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Back to Home
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3 w-full max-w-md">
          <div className="rounded-2xl border-2 border-border bg-card p-4 text-center">
            <p className="text-2xl font-bold text-primary">5</p>
            <p className="text-xs text-muted-foreground mt-1">Counties served</p>
          </div>
          <div className="rounded-2xl border-2 border-border bg-card p-4 text-center">
            <p className="text-2xl font-bold text-accent">FREE</p>
            <p className="text-xs text-muted-foreground mt-1">Always free</p>
          </div>
          <div className="rounded-2xl border-2 border-border bg-card p-4 text-center">
            <p className="text-2xl font-bold text-foreground">Monthly</p>
            <p className="text-xs text-muted-foreground mt-1">Delivered to you</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
