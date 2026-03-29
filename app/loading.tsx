export default function Loading() {
  return (
    <div className="relative z-10 mx-auto flex min-h-screen max-w-lg flex-col gap-6 px-4 pt-14 animate-pulse">
      {/* Hero skeleton */}
      <div className="flex flex-col items-center gap-4 pt-6 pb-8 text-center">
        <div className="h-14 w-64 rounded-2xl bg-muted/30" />
        <div className="h-5 w-48 rounded-lg bg-muted/20" />
        <div className="h-12 w-52 rounded-2xl bg-primary/20" />
      </div>

      {/* Section skeletons */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="glass-surface p-5">
          <div className="mb-3 h-5 w-40 rounded bg-muted/20" />
          <div className="space-y-2">
            <div className="h-16 rounded-2xl bg-muted/10" />
            <div className="h-16 rounded-2xl bg-muted/10" />
          </div>
        </div>
      ))}
    </div>
  );
}
