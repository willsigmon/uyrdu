import { Hero } from "@/components/hero";
import { LinkSection } from "@/components/link-section";
import { LinkCard } from "@/components/link-card";
import { SubscribeForm } from "@/components/subscribe-form";
import { ContactForm } from "@/components/contact-form";
import { StorySection } from "@/components/story-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative z-10 mx-auto flex min-h-screen max-w-lg flex-col gap-8 px-4 pb-8">
      <Hero />

      {/* Read the Magazine */}
      <LinkSection icon="📖" title="Read the Magazine">
        <SubscribeForm />
        <LinkCard
          icon="📱"
          label="Read Current Issue"
          description="Digital flipbook"
          comingSoon
        />
        <LinkCard
          icon="📚"
          label="Past Issues"
          description="Archive"
          comingSoon
        />
      </LinkSection>

      {/* Share Your Story */}
      <LinkSection icon="⭐" title="Share Your Story">
        <StorySection />
      </LinkSection>

      {/* For Businesses */}
      <LinkSection icon="📢" title="For Businesses">
        <ContactForm />
        <LinkCard
          icon="📅"
          label="Schedule a Meeting"
          description="Book a time with Will"
          comingSoon
        />
      </LinkSection>

      {/* Connect */}
      <LinkSection icon="🤝" title="Connect">
        <LinkCard
          icon="📘"
          label="Facebook"
          description="Follow us"
          comingSoon
        />
        <LinkCard
          icon="📸"
          label="Instagram"
          description="@uniquelyyou.raleighmetro"
          comingSoon
        />
        <LinkCard
          icon="✉️"
          label="Email Will"
          description="wsigmon@n2co.com"
          href="mailto:wsigmon@n2co.com"
        />
      </LinkSection>

      {/* About */}
      <section className="glass-surface p-6">
        <h2 className="mb-3 font-display text-lg tracking-tight text-foreground">
          About
        </h2>
        <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground">Uniquely You!</strong> is a free
            monthly publication celebrating the disability community across NC&apos;s
            Triangle region.
          </p>
          <p>
            We connect families, advocates, and service providers with the
            businesses that serve them — across Wake, Durham, Orange, Johnston,
            and Chatham counties.
          </p>
          <p>
            Every issue features inspiring stories, community spotlights, and
            local resources. Our advertisers are hand-selected businesses that
            genuinely serve and support this community.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
