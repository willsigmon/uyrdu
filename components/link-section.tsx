interface LinkSectionProps {
  readonly icon: string;
  readonly title: string;
  readonly children: React.ReactNode;
}

export function LinkSection({ icon, title, children }: LinkSectionProps) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="flex items-center gap-2 font-display text-lg tracking-tight text-foreground">
        <span role="img" aria-hidden="true">
          {icon}
        </span>
        {title}
      </h2>
      <div className="flex flex-col gap-2">{children}</div>
    </section>
  );
}
