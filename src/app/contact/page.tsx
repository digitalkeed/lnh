import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { images } from "@/lib/images";

export default function ContactPage() {
  return (
    <>
      <div className="pt-32 md:pt-56 pb-16 md:pb-24 px-6 md:px-16 bg-ink text-cream relative overflow-hidden min-h-[40vh] flex flex-col justify-end">
        <Image
          src={images.heroContact}
          alt=""
          fill
          className="object-cover opacity-25"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 pointer-events-none bg-ink/60" aria-hidden />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(135deg, transparent 40%, rgba(201,168,76,0.06))" }}
          aria-hidden
        />
        <div className="section-label text-gold-light mb-6 relative z-10">
          <span className="w-8 h-px bg-gold-light" />
          Get In Touch
        </div>
        <h1 className="font-serif text-[clamp(3rem,6vw,6rem)] font-light leading-[1.05] max-w-[14ch] relative z-10">
          Let&apos;s <em className="italic text-gold">Take Action</em>
          <br />
          Together
        </h1>
        <p className="text-[1.05rem] leading-[1.75] text-cream/60 max-w-[50ch] mt-6 relative z-10">
          Whether you&apos;re ready to get started or just exploring your options, we&apos;d love to hear from you. The
          first conversation is always free.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 py-20 md:py-32 px-6 md:px-16">
        <Reveal>
          <div>
            <div className="section-label gap-3 mb-6">
              <span className="w-8 h-px bg-gold" />
              Contact Details
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-light leading-tight mb-8">
              Reach out and let&apos;s
              <br />
              talk <em className="italic text-gold">growth</em>.
            </h2>
            <div className="mb-8">
              <div className="text-[0.68rem] tracking-[0.2em] uppercase text-gold font-medium mb-1.5">Location</div>
              <div className="text-base text-ink">Boston, MA</div>
            </div>
            <div className="mb-8">
              <div className="text-[0.68rem] tracking-[0.2em] uppercase text-gold font-medium mb-1.5">Email</div>
              <div className="text-base text-ink">
                <a href="mailto:info@lnh-enterprise.com" className="text-ink no-underline hover:text-gold">
                  info@lnh-enterprise.com
                </a>
              </div>
            </div>
            <div className="mb-8">
              <div className="text-[0.68rem] tracking-[0.2em] uppercase text-gold font-medium mb-1.5">Services</div>
              <div className="text-[0.9rem] text-muted leading-relaxed">
                Amazon Growth Strategy
                <br />
                Product Listing Optimization
                <br />
                Advertising Management
                <br />
                Distribution & Supply Chain
                <br />
                Brand Protection
              </div>
            </div>
            <div className="mt-12 pt-10 border-t border-[var(--line)]">
              <div className="section-label gap-3 mb-4">Other Pages</div>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/grow"
                  className="text-[0.75rem] tracking-[0.1em] uppercase text-muted no-underline px-4 py-2 border border-[var(--line)] transition-colors hover:border-gold hover:text-gold"
                >
                  Grow
                </Link>
                <Link
                  href="/distribute"
                  className="text-[0.75rem] tracking-[0.1em] uppercase text-muted no-underline px-4 py-2 border border-[var(--line)] transition-colors hover:border-gold hover:text-gold"
                >
                  Distribute
                </Link>
                <Link
                  href="/protect"
                  className="text-[0.75rem] tracking-[0.1em] uppercase text-muted no-underline px-4 py-2 border border-[var(--line)] transition-colors hover:border-gold hover:text-gold"
                >
                  Brand Protection
                </Link>
                <Link
                  href="/mission"
                  className="text-[0.75rem] tracking-[0.1em] uppercase text-muted no-underline px-4 py-2 border border-[var(--line)] transition-colors hover:border-gold hover:text-gold"
                >
                  Our Mission
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </>
  );
}
