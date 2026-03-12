"use client";

interface LinkCardProps {
  readonly icon: string;
  readonly label: string;
  readonly description?: string;
  readonly href?: string;
  readonly onClick?: () => void;
  readonly comingSoon?: boolean;
}

export function LinkCard({
  icon,
  label,
  description,
  href,
  onClick,
  comingSoon = false,
}: LinkCardProps) {
  const content = (
    <>
      <span className="text-2xl" role="img" aria-hidden="true">
        {icon}
      </span>
      <div className="flex flex-1 flex-col gap-0.5 text-left">
        <span className="font-semibold leading-tight text-card-foreground">
          {label}
        </span>
        {description && (
          <span className="text-sm text-muted-foreground">{description}</span>
        )}
      </div>
      {comingSoon ? (
        <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground">
          Soon
        </span>
      ) : (
        <svg
          className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      )}
    </>
  );

  const className =
    "group flex items-center gap-4 rounded-2xl border-2 border-border bg-card p-4 transition-all hover:border-foreground/30 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0";

  if (comingSoon) {
    return (
      <div className={`${className} cursor-default opacity-70`}>{content}</div>
    );
  }

  if (onClick) {
    return (
      <button type="button" className={className} onClick={onClick}>
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  );
}
