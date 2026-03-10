"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

const footerLinks = [
  { href: "/contact", label: "Contact" },
  { href: "/mission", label: "Our Mission" },
  { href: "/grow", label: "Grow" },
  { href: "/distribute", label: "Distribute" },
  { href: "/protect", label: "Brand Protection" },
  { href: "/optimization", label: "Listing Optimization" },
];

export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return (
      <footer className="border-t border-[var(--line)] px-6 py-16 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div>
          <div className="opacity-60">
            <Logo className="h-6 w-auto" />
          </div>
          <div className="text-[0.82rem] leading-relaxed text-muted mt-6">
            Boston, MA
            <br />
            <a href="mailto:info@lnhenterprise.com" className="text-muted no-underline hover:text-gold transition-colors">
              info@lnhenterprise.com
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {footerLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-muted text-[0.78rem] tracking-[0.06em] uppercase no-underline hover:text-ink transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="text-[0.72rem] text-muted opacity-60 text-right md:self-end">
          © 2025 LNH Enterprise.
          <br />
          All rights reserved.
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-[var(--line)] px-6 py-16 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
      <div className="text-[0.82rem] leading-relaxed text-muted">
        Boston, MA &nbsp;|&nbsp;{" "}
        <a href="mailto:info@lnhenterprise.com" className="text-muted no-underline hover:text-gold">
          info@lnhenterprise.com
        </a>
      </div>
      <div className="flex flex-col gap-3">
        <Link href="/" className="text-muted text-[0.78rem] tracking-[0.06em] uppercase no-underline hover:text-ink">
          Home
        </Link>
        {footerLinks.filter((l) => l.href !== "/contact").map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-muted text-[0.78rem] tracking-[0.06em] uppercase no-underline hover:text-ink"
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="text-[0.72rem] text-muted opacity-60 text-right md:self-end">© 2025 LNH Enterprise.</div>
    </footer>
  );
}
