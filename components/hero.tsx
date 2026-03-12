const SUBSCRIBE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeN2iwnRxln-1J6yIbN3_wlYqg133j2ITOige94Yw24e2bYsA/viewform";

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
        Celebrating the disability community in the Triangle
      </p>

      <a
        href={SUBSCRIBE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-2xl border-3 border-foreground bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:brightness-110 active:scale-95"
      >
        <span className="text-2xl">📬</span>
        <span className="text-lg">Subscribe FREE</span>
        <svg
          className="h-5 w-5 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>

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
