import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";

const HERO_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/63db310dcab0df7e90555e67/iStock-1350229534.jpg";
const GROW_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/63db310dcab0df7e90555e67/cf265b76-13f8-4ca6-8d48-9aa7ee258a26/iStock-1225609127.jpg";
const DISTRIBUTE_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/63db310dcab0df7e90555e67/dce9937c-42cd-4b6d-bcbe-32f613e09c3e/iStock-1302438914.jpg";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-20 overflow-hidden">
        <div className="flex flex-col justify-center px-6 py-16 md:px-16 md:py-24">
          <span className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.2em] uppercase text-gold font-medium mb-8 opacity-0 animate-[fadeUp_0.8s_0.2s_forwards]">
            <span className="w-8 h-px bg-gold" />
            Amazon Growth Partners · Boston, MA
          </span>
          <h1 className="font-serif text-[clamp(3.5rem,6vw,6rem)] font-light leading-[1.05] tracking-tight opacity-0 animate-[fadeUp_0.8s_0.35s_forwards]">
            Sell <em className="italic text-gold">Smarter</em>
            <br />
            & Grow Faster
          </h1>
          <p className="mt-8 text-base leading-[1.7] text-muted max-w-[40ch] opacity-0 animate-[fadeUp_0.8s_0.5s_forwards]">
            LNH Enterprise partners with brands to maximize their Amazon potential — from listing optimization and
            advertising to distribution and brand protection.
          </p>
          <div className="flex gap-4 mt-12 flex-wrap opacity-0 animate-[fadeUp_0.8s_0.65s_forwards]">
            <Link href="/contact" className="btn-primary">
              Take Action
            </Link>
            <Link href="/grow" className="btn-outline">
              Our Services
            </Link>
          </div>
          <div className="flex gap-12 mt-16 pt-12 border-t border-[var(--line)] opacity-0 animate-[fadeUp_0.8s_0.8s_forwards]">
            <div>
              <div className="font-serif text-[2.8rem] font-light text-ink leading-none">
                3<span className="text-gold">+</span>
              </div>
              <div className="text-[0.7rem] tracking-[0.12em] uppercase text-muted mt-1.5">Core Services</div>
            </div>
            <div>
              <div className="font-serif text-[2.8rem] font-light text-ink leading-none">
                100<span className="text-gold">%</span>
              </div>
              <div className="text-[0.7rem] tracking-[0.12em] uppercase text-muted mt-1.5">Dedicated to Your Growth</div>
            </div>
            <div>
              <div className="font-serif text-[2.8rem] font-light text-ink leading-none">
                1<span className="text-gold">st</span>
              </div>
              <div className="text-[0.7rem] tracking-[0.12em] uppercase text-muted mt-1.5">Call Free, No Commitment</div>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden opacity-0 animate-[fadeIn_1.2s_0.3s_forwards] md:min-h-[50vw]">
          <Image
            src={HERO_IMAGE}
            alt="LNH Enterprise — Boston Amazon Consultants"
            fill
            className="object-cover scale-105 hover:scale-100 transition-transform duration-[8s] ease grayscale-[20%]"
            sizes="50vw"
            priority
          />
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(245,242,236,0.3) 0%, transparent 60%)",
            }}
          />
        </div>
      </section>

      <Marquee />

      {/* Services */}
      <section id="services" className="py-20 md:py-32 px-6 md:px-16">
        <Reveal>
          <div className="section-label gap-3 mb-12">
            <span className="w-8 h-px bg-gold" />
            What We Do
          </div>
          <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-light leading-tight max-w-[20ch] mb-6">
            Services built around your <em className="italic text-gold">success</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-20">
            <ServiceCard
              num="01"
              title="Grow"
              desc="We develop a customized strategy around your unique business goals — product listing optimization, advertising campaigns, sales analytics, quality customer service, and more. Our mission is to maximize your Amazon sales and build a strong, recognizable brand."
              img={GROW_IMAGE}
              alt="Grow on Amazon"
              href="/grow"
            />
            <ServiceCard
              num="02"
              title="Distribute"
              desc="A dynamic, customer-focused organization specializing in efficient and reliable distribution across a wide range of products. With a robust supply chain network, cutting-edge technology, and a highly-skilled team, we deliver exceptional service to businesses of all sizes."
              img={DISTRIBUTE_IMAGE}
              alt="Distribution"
              href="/distribute"
            />
            <ServiceCard
              num="03"
              title="Brand Protection"
              desc="Safeguard your brand integrity on Amazon. We monitor and enforce your brand standards, ensuring unauthorized sellers and counterfeit products don't erode the reputation you've worked hard to build."
              dark
              href="/protect"
            />
          </div>
        </Reveal>
      </section>

      {/* About strip */}
      <Reveal>
        <section className="bg-ink text-cream grid grid-cols-1 md:grid-cols-2 min-h-[60vh]">
          <div className="relative overflow-hidden md:min-h-[300px]">
            <Image
              src={HERO_IMAGE}
              alt="About LNH Enterprise"
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
              Our Mission
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-light leading-tight text-cream max-w-full mb-6">
              Empowering brands to reach their <em className="italic text-gold">full potential</em>
            </h2>
            <p className="text-[0.95rem] leading-[1.85] text-cream/65 max-w-[50ch] mt-6">
              LNH Enterprise is a full-service Amazon growth partner based in Boston, MA. We combine deep marketplace
              expertise with a genuine investment in your success — treating every brand we work with as a long-term
              partner, not just a client.
            </p>
            <p className="text-[0.95rem] leading-[1.85] text-cream/65 max-w-[50ch] mt-4">
              From emerging brands to established businesses looking to scale, we tailor every strategy to your specific
              goals, category, and competitive landscape.
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

      {/* Features */}
      <Reveal>
        <section className="py-20 md:py-32 px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 items-center">
          <div>
            <div className="section-label gap-3 mb-12">
              <span className="w-8 h-px bg-gold" />
              Our Approach
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-light leading-tight max-w-[20ch] mb-12">
              Everything your brand needs to <em className="italic text-gold">win</em>
            </h2>
            <div className="flex flex-col">
              {[
                {
                  icon: "①",
                  name: "Listing Optimization",
                  desc: "Titles, bullets, descriptions, and A+ content crafted for both search relevance and conversion.",
                },
                {
                  icon: "②",
                  name: "Advertising Campaigns",
                  desc: "Sponsored Products, Sponsored Brands, and DSP campaigns managed to drive profitable growth.",
                },
                {
                  icon: "③",
                  name: "Sales Analytics",
                  desc: "Data-driven decisions using real-time reporting and deep category intelligence.",
                },
                {
                  icon: "④",
                  name: "Customer Service",
                  desc: "Quality customer support that builds brand loyalty and protects your seller metrics.",
                },
                {
                  icon: "⑤",
                  name: "Supply Chain & Distribution",
                  desc: "Efficient, reliable logistics through a robust network built for businesses of all sizes.",
                },
              ].map((f) => (
                <div
                  key={f.name}
                  className="flex items-start gap-6 py-8 border-b border-[var(--line)] first:pt-0"
                >
                  <span className="font-serif text-xl font-light text-gold shrink-0">{f.icon}</span>
                  <div>
                    <div className="text-[0.9rem] font-medium tracking-wide mb-1">{f.name}</div>
                    <p className="text-[0.85rem] leading-[1.7] text-muted">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Image
              src={GROW_IMAGE}
              alt="LNH Enterprise Solutions"
              width={600}
              height={750}
              className="w-full aspect-[4/5] object-cover grayscale-[20%]"
            />
            <div className="absolute -bottom-8 -left-8 bg-ink text-cream py-6 px-8 text-[0.75rem] tracking-[0.08em] uppercase">
              <strong>Boston</strong> Based, Nationally Reaching
            </div>
          </div>
        </section>
      </Reveal>

      {/* CTA */}
      <Reveal>
        <div className="mx-6 md:mx-16 mb-16 md:mb-24 py-16 md:py-24 px-8 md:px-16 bg-ink text-cream flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          <div>
            <div className="section-label text-gold-light mb-4">
              <span className="w-8 h-px bg-gold-light" />
              Get In Touch
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-light leading-tight">
              Ready to <em className="italic text-gold">take action</em>?
              <br />
              Let&apos;s talk.
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-[0.7rem] tracking-[0.2em] uppercase text-cream/40 mb-1">Location</p>
            <Link href="/contact" className="block text-cream no-underline text-base hover:text-gold transition-colors">
              Boston, MA
            </Link>
            <p className="mt-5 text-[0.7rem] tracking-[0.2em] uppercase text-cream/40 mb-1">Email</p>
            <a
              href="mailto:info@lnhenterprise.com"
              className="block text-cream no-underline text-base hover:text-gold transition-colors"
            >
              info@lnhenterprise.com
            </a>
            <div className="mt-8">
              <Link
                href="/contact"
                className="btn-primary bg-gold border-gold text-ink hover:bg-cream hover:border-cream"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}

function ServiceCard({
  num,
  title,
  desc,
  img,
  alt,
  href,
  dark,
}: {
  num: string;
  title: string;
  desc: string;
  img?: string;
  alt?: string;
  href: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:shadow-2xl ${
        dark ? "bg-ink text-cream" : "bg-white"
      }`}
    >
      {img ? (
        <div className="h-[280px] overflow-hidden">
          <Image
            src={img}
            alt={alt ?? title}
            width={400}
            height={280}
            className="w-full h-full object-cover transition-transform duration-500 grayscale-[30%] hover:scale-105 hover:grayscale-0"
          />
        </div>
      ) : (
        <div className="h-[280px] bg-[#1a1a1a] flex items-center justify-center">
          <span className="font-serif text-6xl font-light text-gold opacity-40">{num}</span>
        </div>
      )}
      <div className="p-10">
        <div
          className={`font-serif text-4xl font-light leading-none mb-4 ${
            dark ? "text-gold/30" : "text-gold-light"
          }`}
        >
          {num}
        </div>
        <h3 className={`font-serif text-[1.8rem] font-normal mb-4 ${dark ? "text-cream" : ""}`}>{title}</h3>
        <p className={`text-[0.88rem] leading-[1.75] ${dark ? "text-cream/55" : "text-muted"}`}>{desc}</p>
        <Link
          href={href}
          className={`inline-flex items-center gap-2 mt-6 text-[0.72rem] tracking-[0.12em] uppercase font-medium no-underline hover:gap-4 hover:text-gold transition-all ${dark ? "text-gold" : "text-ink"}`}
        >
          Learn More
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
