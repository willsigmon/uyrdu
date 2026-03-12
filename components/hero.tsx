const COUNTIES = ["Wake", "Durham", "Orange", "Johnston", "Chatham"];

export function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center gap-6 px-4 pt-16 pb-10 text-center sm:pt-24 sm:pb-14">
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-display text-brand-gradient text-5xl leading-tight sm:text-7xl">
          Uniquely You!
        </h1>
        <p className="font-display text-xl tracking-tight text-foreground/80 sm:text-2xl">
          Raleigh Metro
        </p>
      </div>

      <p className="max-w-md text-lg leading-relaxed text-muted-foreground sm:text-xl">
        Celebrating the disability community in NC&apos;s Triangle
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        {COUNTIES.map((county) => (
          <span key={county} className="app-chip">
            {county}
          </span>
        ))}
      </div>

      <p className="mt-2 text-sm text-muted-foreground">
        A free monthly magazine by{" "}
        <span className="font-semibold text-foreground">N2 Company</span>
      </p>
    </section>
  );
}
