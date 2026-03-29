import { Hero } from "@/components/hero";
import { LinkSection } from "@/components/link-section";
import { LinkCard } from "@/components/link-card";
import { ContactForm } from "@/components/contact-form";
import { SubscribeBanner } from "@/components/subscribe-banner";
import { QrSlideout } from "@/components/qr-slideout";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/fade-in";

const SUBSCRIBE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeN2iwnRxln-1J6yIbN3_wlYqg133j2ITOige94Yw24e2bYsA/viewform";

export default function Home() {
  return (
    <div className="relative z-10 mx-auto flex min-h-screen max-w-lg flex-col gap-6 px-4 pb-20 sm:pb-8">
      <Hero />

      {/* Read the Magazine */}
      <FadeIn delay={0.1}>
        <LinkSection icon="📖" title="Read the Magazine">
          <LinkCard
            icon="📬"
            label="Subscribe FREE"
            description="Get every issue delivered — it's free!"
            href={SUBSCRIBE_URL}
          />
          <LinkCard
            icon="📱"
            label="Read Current Issue"
            description="Digital flipbook"
            comingSoon
          />
          <LinkCard
            icon="📚"
            label="Past Issues"
            description="Issue archive"
            comingSoon
          />
        </LinkSection>
      </FadeIn>

      {/* Know Someone? */}
      <FadeIn delay={0.15}>
        <LinkSection icon="⭐" title="Know Someone Amazing?">
          <LinkCard
            icon="✨"
            label="Nominate a Story or Refer a Business"
            description="Shining Bright, Abilities in Action, Nonprofit Spotlight, and more"
            href="https://uyraleighmetro.vercel.app/refer"
          />
        </LinkSection>
      </FadeIn>

      {/* Resources */}
      <FadeIn delay={0.05}>
        <LinkSection icon="📋" title="Resources">
          <LinkCard
            icon="🗺️"
            label="Triangle Disability Resources"
            description="Local services, programs, and organizations across 5 counties"
            href="/resources"
          />
        </LinkSection>
      </FadeIn>

      {/* For Businesses */}
      <FadeIn>
        <LinkSection icon="📢" title="For Businesses">
          <ContactForm />
          <LinkCard
            icon="📅"
            label="Schedule a Meeting"
            description="Book a time with Will"
            href="https://calendar.app.google/oTFXRmKDFUDPcvmj6"
          />
        </LinkSection>
      </FadeIn>

      {/* Connect */}
      <FadeIn>
        <LinkSection icon="🤝" title="Connect">
          <LinkCard
            icon="📘"
            label="Facebook"
            description="Uniquely You! Raleigh Metro"
            comingSoon
          />
          <LinkCard
            icon="📸"
            label="Instagram"
            description="@uniquelyyouraleigh"
            comingSoon
          />
          <LinkCard
            icon="✉️"
            label="Email Will"
            description="will.sigmon@n2co.com"
            href="mailto:will.sigmon@n2co.com"
          />
          <LinkCard
            icon="🌐"
            label="Uniquely You! National"
            description="uniquelyyoumag.com"
            href="https://www.uniquelyyoumag.com"
          />
        </LinkSection>
      </FadeIn>

      {/* About */}
      <FadeIn>
      <section className="glass-surface p-6">
        <h2 className="mb-3 font-display text-lg tracking-tight text-foreground">
          About Uniquely You!
        </h2>
        <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground">Uniquely You!</strong> is a free
            monthly publication celebrating the disability community across NC&apos;s
            Triangle region — Wake, Durham, Orange, Johnston, and Chatham counties.
          </p>
          <p>
            Every issue features inspiring stories through our signature columns:
            {" "}<strong className="text-foreground">Shining Bright</strong> individual features,
            {" "}<strong className="text-foreground">Abilities in Action</strong> achievements,
            {" "}<strong className="text-foreground">Parent Perspectives</strong> family stories,
            and <strong className="text-foreground">Nonprofit Spotlights</strong> highlighting
            organizations making a difference.
          </p>
          <p>
            We connect families, advocates, and service providers with
            hand-selected local businesses that genuinely serve and support this
            community.
          </p>
          <p className="pt-1 text-xs text-muted-foreground/70">
            Uniquely You! is a publication of{" "}
            <a
              href="https://n2co.com/salute-and-uniquely-you/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-border hover:text-foreground"
            >
              The N2 Company
            </a>
            , with editions serving communities across the country.
          </p>
        </div>
      </section>
      </FadeIn>

      <Footer />
      <SubscribeBanner />
      <QrSlideout />
    </div>
  );
}
