import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const HERO_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/63db310dcab0df7e90555e67/iStock-1350229534.jpg";

const protectItems = [
  {
    num: "01",
    title: "Unauthorized Seller Removal",
    desc: "We identify and report unauthorized third-party sellers listing on your product pages, working directly with Amazon and your legal team to have them removed quickly and permanently.",
  },
  {
    num: "02",
    title: "Counterfeit Monitoring",
    desc: "Counterfeit products damage customer trust and erode your brand value. We monitor for infringing listings and initiate removal through Amazon's brand protection tools and IP enforcement processes.",
  },
  {
    num: "03",
    title: "MAP Enforcement",
    desc: "Price integrity matters. We monitor your Minimum Advertised Price across the marketplace and identify violators who are undercutting your authorized distribution channels.",
  },
  {
    num: "04",
    title: "Brand Registry Support",
    desc: "We help you leverage Amazon Brand Registry to its fullest — enrolling your brand, activating enhanced protection tools, and building the evidentiary record needed to defend your intellectual property.",
  },
];

export default function ProtectPage() {
  return (
    <>
      <div className="pt-32 md:pt-56 pb-16 md:pb-24 px-6 md:px-16 bg-ink text-cream relative overflow-hidden min-h-[50vh] flex flex-col justify-end">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(135deg, transparent 40%, rgba(201,168,76,0.06))" }}
        />
        <div className="font-serif text-[clamp(8rem,20vw,18rem)] font-light text-white/[0.04] leading-none absolute right-16 bottom-[-2rem] tracking-tight pointer-events-none">
          03
        </div>
        <div className="section-label text-gold-light mb-6 relative z-10">
          <span className="w-8 h-px bg-gold-light" />
          Our Services
        </div>
        <h1 className="font-serif text-[clamp(3rem,6vw,6rem)] font-light leading-[1.05] max-w-[14ch] relative z-10">
          Protect What
          <br />
          You&apos;ve <em className="italic text-gold">Built</em>
        </h1>
        <p className="text-[1.05rem] leading-[1.75] text-cream/60 max-w-[50ch] mt-6 relative z-10">
          Unauthorized sellers, counterfeit products, and brand hijackers can destroy years of hard work overnight. LNH
          Enterprise safeguards your brand integrity on Amazon — so your reputation stays intact and your revenue stays
          yours.
        </p>
      </div>

      <Reveal>
        <section className="py-20 md:py-32 px-6 md:px-16">
          <div className="section-label gap-3 mb-12">
            <span className="w-8 h-px bg-gold" />
            The Threat Is Real
          </div>
          <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-light leading-tight max-w-[20ch] mb-6">
            Brand integrity is
            <br />
            everything on <em className="italic text-gold">Amazon</em>
          </h2>
          <p className="max-w-[60ch] text-muted text-[0.95rem] leading-[1.85] mb-4">
            The Amazon marketplace is open by design — which means unauthorized sellers can list on your pages,
            counterfeiters can copy your products, and MAP violators can undercut your pricing. Without an active
            protection strategy, these threats go unchecked.
          </p>
          <p className="max-w-[60ch] text-muted text-[0.95rem] leading-[1.85] mb-12">
            LNH Enterprise proactively monitors your brand presence on Amazon, identifies threats early, and takes
            decisive action to eliminate them before they cause lasting damage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 mt-20">
            {protectItems.map((item, i) => (
              <div
                key={item.num}
                className={`bg-ink text-cream p-12 relative overflow-hidden transition-transform duration-300 hover:scale-[1.01] ${
                  i % 2 === 1 ? "bg-[#1a1a1a]" : ""
                }`}
              >
                <div className="font-serif text-[5rem] font-light text-gold/15 leading-none absolute right-8 top-4 pointer-events-none">
                  {item.num}
                </div>
                <div className="w-10 h-0.5 bg-gold mb-6" />
                <h3 className="font-serif text-[1.7rem] font-normal text-cream mb-4 relative z-10">{item.title}</h3>
                <p className="text-[0.88rem] leading-[1.75] text-cream/55 relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="bg-ink text-cream grid grid-cols-1 md:grid-cols-2 min-h-[60vh]">
          <div className="relative overflow-hidden md:min-h-[300px]">
            <Image src={HERO_IMAGE} alt="Brand Protection" fill className="object-cover opacity-60" sizes="50vw" />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(90deg, transparent 60%, #0d0d0d)" }}
            />
          </div>
          <div className="py-16 md:py-24 px-6 md:pl-16 md:pr-20 flex flex-col justify-center">
            <div className="section-label text-gold-light mb-12">
              <span className="w-8 h-px bg-gold-light" />
              Our Commitment
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-light leading-tight text-cream max-w-full mb-6">
              Your brand is your <em className="italic text-gold">most valuable asset</em>
            </h2>
            <p className="text-[0.95rem] leading-[1.85] text-cream/65 max-w-[50ch] mt-6">
              At LNH Enterprise, we treat brand protection as a continuous, proactive discipline — not a one-time fix. We
              maintain vigilant oversight of your marketplace presence and act swiftly when violations are detected.
            </p>
            <p className="text-[0.95rem] leading-[1.85] text-cream/65 max-w-[50ch] mt-4">
              Our Boston-based team stays current with Amazon&apos;s evolving policies and tools, ensuring your brand
              benefits from every enforcement mechanism available.
            </p>
            <Link
              href="/contact"
              className="btn-primary bg-gold border-gold text-ink w-fit mt-10 hover:bg-cream hover:border-cream"
            >
              Protect Your Brand
            </Link>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <div className="mx-6 md:mx-16 mb-16 py-16 md:py-24 px-8 md:px-16 bg-ink text-cream flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          <div>
            <div className="section-label text-gold-light mb-4">
              <span className="w-8 h-px bg-gold-light" />
              Act Now
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-light leading-tight">
              Don&apos;t let others
              <br />
              profit from your <em className="italic text-gold">work</em>.
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
