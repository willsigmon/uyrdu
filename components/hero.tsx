const SUBSCRIBE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeN2iwnRxln-1J6yIbN3_wlYqg133j2ITOige94Yw24e2bYsA/viewform";

const COUNTIES = ["Wake", "Durham", "Orange", "Johnston", "Chatham"];

export function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center gap-4 px-4 pt-14 pb-8 text-center sm:pt-20 sm:pb-10">
      <div className="flex flex-col items-center gap-1 animate-fade-in-up stagger-1">
        <h1
          className="font-display text-shimmer text-5xl leading-tight sm:text-7xl"
          style={{ textShadow: '4px 4px 0 #2c0b5a' }}
        >
          Uniquely You!
        </h1>
        <p className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">
          Raleigh Metro
        </p>
      </div>

      <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg animate-fade-in-up stagger-2">
        Celebrating the disability community in the Triangle and surrounding areas
      </p>

      <a
        href={SUBSCRIBE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-2xl border-3 border-foreground bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:brightness-110 active:scale-95 animate-fade-in-up stagger-3 animate-pulse-glow"
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

      <div className="flex flex-col items-center gap-2 animate-fade-in-up stagger-4">
        <div className="flex justify-center gap-2">
          {COUNTIES.slice(0, 3).map((county) => (
            <span key={county} className="app-chip hover-lift">
              {county}
            </span>
          ))}
        </div>
        <div className="flex justify-center gap-2">
          {COUNTIES.slice(3).map((county) => (
            <span key={county} className="app-chip hover-lift">
              {county}
            </span>
          ))}
        </div>
      </div>

      <p className="text-sm text-muted-foreground animate-fade-in-up stagger-5">
        A free monthly magazine by{" "}
        <span className="font-semibold text-foreground">N2 Company</span>
      </p>
    </section>
  );
}
