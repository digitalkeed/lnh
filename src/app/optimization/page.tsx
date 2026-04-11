import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { images } from "@/lib/images";

const steps = [
  {
    num: "01",
    title: "Keyword Research & Strategy",
    desc: "Deep research into the high-intent keywords your target customers are using — including long-tail opportunities your competitors are missing. We prioritize terms by search volume, competition, and relevance to build a keyword map that drives qualified traffic.",
  },
  {
    num: "02",
    title: "Title & Bullet Point Copywriting",
    desc: "Compelling, keyword-optimized titles and bullet points that communicate your product's key features, benefits, and differentiators clearly and persuasively — within Amazon's style guidelines.",
  },
  {
    num: "03",
    title: "Product Description & A+ Content",
    desc: "Brand-registered sellers get access to A+ Content — enhanced descriptions with images, comparison tables, and brand storytelling. We design and write A+ content that reduces bounce rates and builds brand trust.",
  },
  {
    num: "04",
    title: "Backend Search Terms & Attributes",
    desc: "The hidden backend of your listing matters. We populate all backend keywords, subject matter fields, and item type keywords strategically to maximize your indexing across Amazon's catalog.",
  },
  {
    num: "05",
    title: "Performance Monitoring & Iteration",
    desc: "Optimization is ongoing, not a one-time event. We monitor your listing's performance over time and make data-driven adjustments to maintain and improve your ranking and conversion rate.",
  },
];

export default function OptimizationPage() {
  return (
    <>
      <div className="pt-32 md:pt-56 pb-16 md:pb-24 px-6 md:px-16 bg-ink text-cream relative overflow-hidden min-h-[50vh] flex flex-col justify-end">
        <Image
          src={images.heroOptimization}
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
        <div className="font-serif text-[clamp(8rem,20vw,18rem)] font-light text-white/[0.04] leading-none absolute right-16 bottom-[-2rem] tracking-tight pointer-events-none">
          04
        </div>
        <div className="section-label text-gold-light mb-6 relative z-10">
          <span className="w-8 h-px bg-gold-light" />
          Our Services
        </div>
        <h1 className="font-serif text-[clamp(3rem,6vw,6rem)] font-light leading-[1.05] max-w-[14ch] relative z-10">
          Listing
          <br />
          <em className="italic text-gold">Optimization</em>
        </h1>
        <p className="text-[1.05rem] leading-[1.75] text-cream/60 max-w-[50ch] mt-6 relative z-10">
          Your listing is your storefront. We craft every element — titles, bullets, descriptions, images, and A+
          content — to maximize search visibility and convert curious browsers into confident buyers.
        </p>
      </div>

      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 py-20 md:py-32 px-6 md:px-16 items-center">
          <div>
            <div className="section-label gap-3 mb-6">
              <span className="w-8 h-px bg-gold" />
              The Approach
            </div>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3.5rem)] font-light leading-tight mb-8">
              Every word earns
              <br />
              its <em className="italic text-gold">place</em>
            </h2>
            <p className="text-[0.95rem] leading-[1.85] text-muted mb-5">
              Amazon&apos;s A9 algorithm rewards listings that are both keyword-rich and conversion-focused. Striking
              that balance is a skill — and it&apos;s what we do. We conduct thorough keyword research, competitor
              analysis, and customer behavior studies before writing a single word.
            </p>
            <p className="text-[0.95rem] leading-[1.85] text-muted mb-5">
              The result is a listing that ranks for the terms that matter and speaks directly to the customers most
              likely to buy. Higher visibility. Better conversion. More revenue.
            </p>
            <Link href="/contact" className="btn-primary mt-4">
              Optimize My Listings
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={images.optimizationPage}
              alt="Listing Optimization"
              fill
              className="object-cover grayscale-[15%]"
              sizes="50vw"
            />
          </div>
        </div>
      </Reveal>

      <section className="py-20 md:py-32 px-6 md:px-16 bg-white">
        <div className="section-label gap-3 mb-12">
          <span className="w-8 h-px bg-gold" />
          What&apos;s Included
        </div>
        <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-light leading-tight max-w-[20ch] mb-12">
          A complete listing <em className="italic text-gold">overhaul</em>
        </h2>
        <div className="flex flex-col mt-20">
          {steps.map((step) => (
            <div
              key={step.num}
              className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-8 py-12 border-b border-[var(--line)] first:pt-0"
            >
              <div className="font-serif text-[3.5rem] font-light text-gold-light leading-none">{step.num}</div>
              <div>
                <h3 className="font-serif text-[1.7rem] font-normal mb-3">{step.title}</h3>
                <p className="text-[0.88rem] leading-[1.75] text-muted">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Reveal>
        <div className="mx-6 md:mx-16 mb-16 py-16 md:py-24 px-8 md:px-16 bg-ink text-cream flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          <div>
            <div className="section-label text-gold-light mb-4">
              <span className="w-8 h-px bg-gold-light" />
              Ready?
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-light leading-tight">
              Turn your listings into
              <br />
              your best <em className="italic text-gold">salesperson</em>.
            </h2>
          </div>
          <div>
            <Link
              href="/contact"
              className="btn-primary bg-gold border-gold text-ink hover:bg-cream hover:border-cream"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </Reveal>
    </>
  );
}
