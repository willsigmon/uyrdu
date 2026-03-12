export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-auto border-t-2 border-border/50 px-4 py-8">
      <div className="mx-auto flex max-w-lg flex-col items-center gap-4 text-center">
        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-accent via-primary to-[#5ea8ff]" />

        <div className="flex flex-col gap-1">
          <p className="font-display text-sm tracking-tight text-foreground">
            Uniquely You! Raleigh Metro
          </p>
          <p className="text-xs text-muted-foreground">
            A publication of{" "}
            <a
              href="https://www.n2co.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground/70 underline decoration-border hover:text-foreground"
            >
              N2 Company
            </a>
          </p>
        </div>

        <p className="text-xs text-muted-foreground">
          Serving Wake, Durham, Orange, Johnston &amp; Chatham counties
        </p>

        <p className="text-xs text-muted-foreground/60">
          &copy; {year} Uniquely You! Raleigh Metro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
