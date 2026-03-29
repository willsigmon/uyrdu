"use client";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <p className="font-display text-brand-gradient text-5xl">Oops</p>
        <h1 className="mt-4 text-xl font-bold text-foreground">Something went wrong</h1>
        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          {error.message || "An unexpected error occurred."}
        </p>
        <button
          onClick={reset}
          className="mt-6 rounded-2xl border-3 border-foreground bg-primary px-8 py-3 font-semibold text-primary-foreground hover-lift"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
