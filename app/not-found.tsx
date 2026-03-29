import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <p className="font-display text-brand-gradient text-6xl">404</p>
        <h1 className="mt-4 text-2xl font-bold text-foreground">Page not found</h1>
        <p className="mt-2 text-muted-foreground">
          This page doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-2xl border-3 border-foreground bg-primary px-8 py-3 font-semibold text-primary-foreground hover-lift"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
