import { URLS } from "@/lib/constants";

export function SubscribeBanner() {
  return (
    <a
      href={URLS.subscribe}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 border-t-2 border-foreground bg-primary px-4 py-3.5 font-semibold text-primary-foreground shadow-[0_-4px_20px_rgba(0,0,0,0.15)] transition-all hover:brightness-110 sm:hidden"
    >
      <span>📬</span>
      <span>Subscribe FREE — Get Every Issue</span>
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </a>
  );
}
