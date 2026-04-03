import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Past Issues — Uniquely You! Raleigh Metro",
  description:
    "Browse past issues of Uniquely You! Raleigh Metro — celebrating the disability community in NC's Triangle region.",
};

interface Issue {
  readonly title: string;
  readonly date: string;
  readonly href: string;
  readonly cover?: string;
}

const ISSUES: readonly Issue[] = [
  {
    title: "Issue 1",
    date: "Coming Soon",
    href: "/read",
  },
];

export default function ArchivePage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-4 pb-8 pt-12">
      <header className="mb-8 text-center">
        <h1 className="font-display text-2xl tracking-tight text-foreground">
          Past Issues
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Browse the archive of Uniquely You! Raleigh Metro
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {ISSUES.map((issue) => (
          <Link
            key={issue.title}
            href={issue.href}
            className="group flex flex-col overflow-hidden rounded-2xl border-2 border-border bg-card transition-all hover:border-primary hover:shadow-lg"
          >
            <div className="flex aspect-[3/4] items-center justify-center bg-secondary/50">
              {issue.cover ? (
                <Image
                  src={issue.cover}
                  alt={`${issue.title} cover`}
                  width={300}
                  height={400}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-4xl text-muted-foreground/40">📖</span>
              )}
            </div>
            <div className="p-4">
              <h2 className="font-display text-sm tracking-tight text-foreground group-hover:text-primary">
                {issue.title}
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">{issue.date}</p>
            </div>
          </Link>
        ))}
      </div>

      <nav className="mt-8 flex justify-center">
        <Link
          href="/"
          className="rounded-xl border-2 border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          Back to Home
        </Link>
      </nav>

      <Footer />
    </div>
  );
}
