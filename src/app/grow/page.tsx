import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { images } from "@/lib/images";

const steps = [
  {
    num: "01",
    title: "Product Listing Optimization",
    desc: "We craft compelling titles, bullet points, descriptions, and A+ content that rank higher in Amazon search and convert browsers into buyers. Every word is intentional — optimized for both the algorithm and the human reading it.",
  },
  {
    num: "02",
    title: "Advertising Campaigns",
    desc: "From Sponsored Products to Sponsored Brands and DSP campaigns, we manage your full advertising funnel. We continuously test, analyze, and refine to drive profitable growth and keep your ACoS in check.",
  },
  {
    num: "03",
    title: "Sales Analytics & Reporting",
    desc: "Decisions backed by data. We provide real-time reporting and deep category intelligence so you always know what's working, what needs improvement, and where the next opportunity lies.",
  },
  {
    num: "04",
    title: "Quality Customer Service",
    desc: "Your seller metrics matter. We provide responsive, professional customer support that resolves issues quickly, maintains high seller ratings, and builds the brand loyalty that turns first-time buyers into repeat customers.",
  },
  {
    num: "05",
    title: "Account Management",
    desc: "We manage your Amazon account holistically — monitoring account health, handling policy compliance, managing inventory levels, and staying ahead of platform changes so you don't have to.",
  },
];

export default function GrowPage() {
  return (
    <>
      <div className="pt-32 md:pt-56 pb-16 md:pb-24 px-6 md:px-16 bg-ink text-cream relative overflow-hidden min-h-[50vh] flex flex-col justify-end">
        <Image
          src={images.heroGrow}
          alt=""
          fill
          className="object-cover opacity-25"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0 pointer-events-none bg-ink/60"
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(135deg, transparent 40%, rgba(201,168,76,0.06))" }}
          aria-hidden
        />
        <div className="font-serif text-[clamp(8rem,20vw,18rem)] font-light text-white/[0.04] leading-none absolute right-16 bottom-[-2rem] tracking-tight pointer-events-none">
          01
        </div>
        <div className="section-label text-gold-light mb-6 relative z-10">
          <span className="w-8 h-px bg-gold-light" />
          Our Services
        </div>
        <h1 className="font-serif text-[clamp(3rem,6vw,6rem)] font-light leading-[1.05] max-w-[14ch] relative z-10">
          Grow Your <em className="italic text-gold">Amazon</em>
          <br />
          Business
        </h1>
        <p className="text-[1.05rem] leading-[1.75] text-cream/60 max-w-[50ch] mt-6 relative z-10">
          We work closely with you to develop a customized strategy that takes into account your unique business goals
          and needs — maximizing sales, building brand equity, and driving lasting profitability.
        </p>
      </div>

      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 py-20 md:py-32 px-6 md:px-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={images.growPage}
              alt="Amazon Growth"
              fill
              className="object-cover grayscale-[15%]"
              sizes="50vw"
            />
          </div>
          <div>
            <div className="section-label gap-3 mb-6">
              <span className="w-8 h-px bg-gold" />
              What We Offer
            </div>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3.5rem)] font-light leading-tight mb-8">
              A full-service approach to <em className="italic text-gold">Amazon success</em>
            </h2>
            <p className="text-[0.95rem] leading-[1.85] text-muted mb-5">
              Whether you&apos;re a new brand just entering the Amazon marketplace or an established seller looking to
              scale, LNH Enterprise provides everything you need under one roof. We take a hands-on, data-driven approach
              from day one.
            </p>
            <p className="text-[0.95rem] leading-[1.85] text-muted mb-5">
              Our team digs deep into your category, your competitors, and your customers to build a strategy that&apos;s
              uniquely yours. No cookie-cutter playbooks — only tailored, effective solutions.
            </p>
            <Link href="/contact" className="btn-primary mt-4">
              Start Growing Today
            </Link>
          </div>
        </div>
      </Reveal>

      <section className="py-20 md:py-32 px-6 md:px-16 bg-white">
        <div className="section-label gap-3 mb-12">
          <span className="w-8 h-px bg-gold" />
          The Process
        </div>
        <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-light leading-tight max-w-[20ch] mb-12">
          How we help your brand <em className="italic text-gold">thrive</em>
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
              Let&apos;s build your <em className="italic text-gold">growth</em> strategy.
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
