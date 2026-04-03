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
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 pb-8 pt-12">
      <header className="mb-6 text-center">
        <h1 className="font-display text-2xl tracking-tight text-foreground">
          Read the Current Issue
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Uniquely You! Raleigh Metro — free monthly magazine
        </p>
      </header>

      <div className="relative flex-1 overflow-hidden rounded-2xl border-2 border-border bg-card shadow-lg">
        <iframe
          src={URLS.issuuEmbed}
          title="Uniquely You! Raleigh Metro — Current Issue"
          className="h-[70vh] w-full min-h-[500px]"
          allowFullScreen
        />
      </div>

      <nav className="mt-6 flex items-center justify-center gap-4 text-sm">
        <Link
          href="/"
          className="rounded-xl border-2 border-border px-4 py-2 font-medium text-foreground transition-colors hover:bg-secondary"
        >
          Back to Home
        </Link>
        <Link
          href="/archive"
          className="rounded-xl bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:brightness-110"
        >
          Past Issues
        </Link>
      </nav>

      <Footer />
    </div>
  );
}
