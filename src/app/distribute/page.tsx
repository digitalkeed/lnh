import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const DISTRIBUTE_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/63db310dcab0df7e90555e67/dce9937c-42cd-4b6d-bcbe-32f613e09c3e/iStock-1302438914.jpg";

const capabilities = [
  {
    num: "01",
    title: "Wide Product Range",
    desc: "We handle distribution across a diverse range of product categories. Whether you're shipping consumer goods, specialty products, or bulk inventory, our network is built to accommodate your needs efficiently.",
  },
  {
    num: "02",
    title: "Advanced Technology",
    desc: "Cutting-edge inventory management and tracking systems give you full visibility into your supply chain. Real-time data means fewer surprises and faster resolution when issues arise.",
  },
  {
    num: "03",
    title: "Skilled & Dedicated Team",
    desc: "Our highly-skilled team is committed to getting your products where they need to be — on time, in perfect condition, and at the service level your customers expect.",
  },
  {
    num: "04",
    title: "Scalable Solutions",
    desc: "Whether you're a small startup with modest volume or a growing brand with thousands of SKUs, our distribution model scales with you — no minimum too small, no volume too large.",
  },
];

export default function DistributePage() {
  return (
    <>
      <div className="pt-32 md:pt-56 pb-16 md:pb-24 px-6 md:px-16 bg-ink text-cream relative overflow-hidden min-h-[50vh] flex flex-col justify-end">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(135deg, transparent 40%, rgba(201,168,76,0.06))" }}
        />
        <div className="font-serif text-[clamp(8rem,20vw,18rem)] font-light text-white/[0.04] leading-none absolute right-16 bottom-[-2rem] tracking-tight pointer-events-none">
          02
        </div>
        <div className="section-label text-gold-light mb-6 relative z-10">
          <span className="w-8 h-px bg-gold-light" />
          Our Services
        </div>
        <h1 className="font-serif text-[clamp(3rem,6vw,6rem)] font-light leading-[1.05] max-w-[14ch] relative z-10">
          Distribution
          <br />
          Done <em className="italic text-gold">Right</em>
        </h1>
        <p className="text-[1.05rem] leading-[1.75] text-cream/60 max-w-[50ch] mt-6 relative z-10">
          LNH Enterprise is a dynamic, customer-focused organization specializing in the efficient and reliable
          distribution of a wide range of products — serving businesses of all sizes across the country.
        </p>
      </div>

      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 py-20 md:py-32 px-6 md:px-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={DISTRIBUTE_IMAGE}
              alt="Distribution"
              fill
              className="object-cover grayscale-[15%]"
              sizes="50vw"
            />
          </div>
          <div>
            <div className="section-label gap-3 mb-6">
              <span className="w-8 h-px bg-gold" />
              Our Network
            </div>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3.5rem)] font-light leading-tight mb-8">
              Robust supply chain, <em className="italic text-gold">reliable</em> delivery
            </h2>
            <p className="text-[0.95rem] leading-[1.85] text-muted mb-5">
              With a robust supply chain network, cutting-edge technology, and a highly-skilled team, we deliver
              exceptional service to businesses of all sizes. From sourcing to fulfillment, we manage every step of the
              distribution process with precision and care.
            </p>
            <p className="text-[0.95rem] leading-[1.85] text-muted mb-5">
              Operating out of Boston, MA and servicing clients nationally, LNH Enterprise brings a level of dedication
              and operational excellence that sets us apart from standard distributors.
            </p>
            <Link href="/contact" className="btn-primary mt-4">
              Partner With Us
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <section className="py-20 md:py-32 px-6 md:px-16">
          <div className="section-label gap-3 mb-12">
            <span className="w-8 h-px bg-gold" />
            Capabilities
          </div>
          <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-light leading-tight max-w-[20ch] mb-12">
            Built for <em className="italic text-gold">scale</em>, designed for precision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 mt-20">
            {capabilities.map((c) => (
              <div
                key={c.num}
                className="bg-white p-12 border-l-[3px] border-transparent hover:border-gold hover:translate-x-1.5 transition-all duration-300"
              >
                <div className="font-serif text-[3rem] font-light text-gold-light leading-none mb-4">{c.num}</div>
                <h3 className="font-serif text-[1.6rem] font-normal mb-3">{c.title}</h3>
                <p className="text-[0.85rem] leading-[1.75] text-muted">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <div className="mx-6 md:mx-16 mb-16 py-16 md:py-24 px-8 md:px-16 bg-ink text-cream flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          <div>
            <div className="section-label text-gold-light mb-4">
              <span className="w-8 h-px bg-gold-light" />
              Let&apos;s Connect
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-light leading-tight">
              Start <em className="italic text-gold">streamlining</em> your supply chain today.
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
