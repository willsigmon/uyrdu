import type { Metadata } from "next";
import { ReferralForm } from "./referral-form";

export const metadata: Metadata = {
  title: "Refer a Business or Nominate a Story — Uniquely You!",
  description:
    "Know a great business that serves the disability community or someone with an amazing story? Let us know and we'll follow up.",
};

export default function ReferPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-xl px-4 py-10 md:py-16">
      <ReferralForm />
    </main>
  );
}
