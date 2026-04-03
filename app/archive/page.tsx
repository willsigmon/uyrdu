import type { Metadata } from "next";
import Link from "next/link";
import { URLS } from "@/lib/constants";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Past Issues — Uniquely You! Raleigh Metro",
  description:
    "Browse past issues of Uniquely You! Raleigh Metro — celebrating the disability community in NC's Triangle region.",
};

export default function ArchivePage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-4 pb-8 pt-12">
      <div className="flex flex-1 flex-col items-center justify-center text-center py-16">
        <div className="animate-float-medium text-6xl mb-6">📚</div>
        <h1 className="font-display text-3xl tracking-tight text-foreground">
          Archive Coming Soon
        </h1>
        <p className="mt-3 max-w-md text-muted-foreground leading-relaxed">
          Past issues will live here once we launch. Subscribe to get the first
          issue delivered free to your door.
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
      </div>

      <Footer />
    </div>
  );
}
