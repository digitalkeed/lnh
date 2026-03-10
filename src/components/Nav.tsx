"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "/grow", label: "Grow" },
  { href: "/distribute", label: "Distribute" },
  { href: "/protect", label: "Brand Protection" },
  { href: "/mission", label: "Our Mission" },
];

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-6 md:px-16 bg-cream/95 border-b border-[var(--line)] backdrop-blur-md transition-[padding]">
        <Logo />
        <ul className="hidden md:flex gap-10 list-none">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-[0.78rem] font-medium tracking-[0.08em] uppercase no-underline text-ink relative after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-[width] after:duration-300 hover:after:w-full ${
                  pathname === href ? "text-gold after:w-full" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="hidden md:inline-block py-2.5 px-7 bg-ink text-cream text-[0.75rem] font-medium tracking-[0.1em] uppercase no-underline border border-ink transition-all duration-250 hover:bg-gold hover:border-gold hover:text-ink"
        >
          Take Action
        </Link>
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-[1.5px] bg-ink" />
          <span className="block w-6 h-[1.5px] bg-ink" />
          <span className="block w-6 h-[1.5px] bg-ink" />
        </button>
      </nav>

      {mobileOpen && (
        <div className="fixed top-[70px] left-0 right-0 z-[99] flex flex-col gap-6 p-8 md:p-16 bg-cream border-b border-[var(--line)] md:hidden">
          <Link href="/" onClick={() => setMobileOpen(false)} className="text-[0.9rem] font-medium tracking-[0.08em] uppercase text-ink no-underline">
            Home
          </Link>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-[0.9rem] font-medium tracking-[0.08em] uppercase text-ink no-underline"
            >
              {label}
            </Link>
          ))}
          <Link href="/optimization" onClick={() => setMobileOpen(false)} className="text-[0.9rem] font-medium tracking-[0.08em] uppercase text-ink no-underline">
            Listing Optimization
          </Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-[0.9rem] font-medium tracking-[0.08em] uppercase text-ink no-underline">
            Contact
          </Link>
        </div>
      )}
    </>
  );
}
