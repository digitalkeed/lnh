import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { images } from "@/lib/images";

const values = [
  {
    title: "Partnership Over Transactions",
    desc: "We don't see our clients as accounts. Every brand we work with is a long-term partner. Your goals become our goals, and we measure our success by the growth you achieve — not just the hours we bill.",
  },
  {
    title: "Data-Driven Decisions",
    desc: "Every recommendation we make is grounded in real data — marketplace analytics, competitor intelligence, consumer behavior, and platform metrics. We don't guess; we analyze and act with precision.",
  },
  {
    title: "Transparent Communication",
    desc: "We believe in clear, honest communication at every stage. You'll always know what we're doing, why we're doing it, and what results we're seeing. No jargon, no spin — just straight talk.",
  },
  {
    title: "Relentless Execution",
    desc: "Strategy without execution is just theory. We pride ourselves on follow-through — implementing plans thoroughly, meeting deadlines, and holding ourselves accountable for outcomes.",
  },
  {
    title: "Category Expertise",
    desc: "Amazon is not a generic marketplace. We bring deep category-specific knowledge to every engagement, understanding the nuances of search behavior, competitive dynamics, and customer expectations in your space.",
  },
  {
    title: "Continuous Improvement",
    desc: "The Amazon landscape evolves constantly. So do we. Our team stays ahead of algorithm changes, policy updates, and new advertising tools — ensuring your strategy is always current and competitive.",
  },
];

export default function MissionPage() {
  return (
    <>
      <div className="pt-32 md:pt-56 pb-16 md:pb-24 px-6 md:px-16 bg-ink text-cream relative overflow-hidden min-h-[50vh] flex flex-col justify-end">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(135deg, transparent 40%, rgba(201,168,76,0.06))" }}
        />
        <div className="font-serif text-[clamp(6rem,16vw,14rem)] font-light text-white/[0.04] leading-none absolute right-16 bottom-[-2rem] tracking-tight pointer-events-none">
          Mission
        </div>
        <div className="section-label text-gold-light mb-6 relative z-10">
          <span className="w-8 h-px bg-gold-light" />
          Who We Are
        </div>
        <h1 className="font-serif text-[clamp(3rem,6vw,6rem)] font-light leading-[1.05] max-w-[14ch] relative z-10">
          Our <em className="italic text-gold">Mission</em>
        </h1>
        <p className="text-[1.05rem] leading-[1.75] text-cream/60 max-w-[50ch] mt-6 relative z-10">
          LNH Enterprise was built on a simple belief: when brands succeed on Amazon, real people and real businesses
          thrive. We exist to make that success more achievable — and more sustainable.
        </p>
      </div>

      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 py-20 md:py-32 px-6 md:px-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src={images.missionPage} alt="Our Mission" fill className="object-cover grayscale-[15%]" sizes="50vw" />
          </div>
          <div>
            <div className="section-label gap-3 mb-6">
              <span className="w-8 h-px bg-gold" />
              Our Story
            </div>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3.5rem)] font-light leading-tight mb-8">
              Built in Boston,
              <br />
              focused on your <em className="italic text-gold">growth</em>
            </h2>
            <p className="text-[0.95rem] leading-[1.85] text-muted mb-5">
              LNH Enterprise was founded in Boston, MA by a team with deep expertise in Amazon marketplace strategy,
              e-commerce operations, and supply chain management. We saw too many great brands struggling to navigate a
              complex and ever-changing marketplace without the right support.
            </p>
            <p className="text-[0.95rem] leading-[1.85] text-muted mb-5">
              So we built the firm we wished existed — one that combines strategic thinking with genuine partnership.
              We&apos;re not a faceless agency. We&apos;re a dedicated team that invests in your success as if it were
              our own.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <section className="py-20 md:py-32 px-6 md:px-16">
          <div className="section-label gap-3 mb-12">
            <span className="w-8 h-px bg-gold" />
            Core Values
          </div>
          <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-light leading-tight max-w-[20ch] mb-12">
            What we stand for — and how we <em className="italic text-gold">operate</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            {values.map((v) => (
              <div key={v.title} className="p-10 bg-white border-t-[3px] border-gold">
                <h3 className="font-serif text-[1.5rem] font-normal mb-3">{v.title}</h3>
                <p className="text-[0.85rem] leading-[1.75] text-muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="bg-ink text-cream grid grid-cols-1 md:grid-cols-2 min-h-[60vh]">
          <div className="relative overflow-hidden md:min-h-[300px]">
            <Image
              src={images.missionOffice}
              alt="LNH Enterprise Team"
              fill
              className="object-cover opacity-60"
              sizes="50vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(90deg, transparent 60%, #0d0d0d)" }}
            />
          </div>
          <div className="py-16 md:py-24 px-6 md:pl-16 md:pr-20 flex flex-col justify-center">
            <div className="section-label text-gold-light mb-12">
              <span className="w-8 h-px bg-gold-light" />
              Boston, MA
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-light leading-tight text-cream max-w-full mb-6">
              Rooted in New England, <em className="italic text-gold">reaching</em> every market
            </h2>
            <p className="text-[0.95rem] leading-[1.85] text-cream/65 max-w-[50ch] mt-6">
              Our headquarters in Boston puts us at the center of one of the most dynamic business ecosystems in the
              country. We leverage that environment — the talent, the innovation culture, the entrepreneurial energy —
              to serve brands across the United States.
            </p>
            <p className="text-[0.95rem] leading-[1.85] text-cream/65 max-w-[50ch] mt-4">
              Boston is a city built on hard work and resilience. So is LNH Enterprise.
            </p>
            <Link
              href="/contact"
              className="btn-primary bg-gold border-gold text-ink w-fit mt-10 hover:bg-cream hover:border-cream"
            >
              Work With Us
            </Link>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <div className="mx-6 md:mx-16 mb-16 py-16 md:py-24 px-8 md:px-16 bg-ink text-cream flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          <div>
            <div className="section-label text-gold-light mb-4">
              <span className="w-8 h-px bg-gold-light" />
              Join Us
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-light leading-tight">
              Ready to find a <em className="italic text-gold">true partner</em> for your brand?
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
