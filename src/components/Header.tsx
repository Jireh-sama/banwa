"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Our Meaning", href: "#meaning" },
  { label: "The AI & Craft Process", href: "#process" },
  { label: "Marble Keepsakes", href: "#collection" },
  { label: "Timeline & Care", href: "#timeline" },
  { label: "Stories", href: "#stories" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_12px_rgba(125,107,93,0.06)]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-4 shrink-0">
          <Image
            src="/images/banwa_brand_logo.png"
            alt="Banwa Brand Logo"
            width={32}
            height={32}
            className="h-8 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="font-heading text-[22px] font-medium leading-tight text-on-surface tracking-tight">
              Banwa
            </span>
            <span className="font-body text-[11px] font-semibold leading-[14px] tracking-[0.08em] text-on-surface-variant uppercase">
              Homecoming Memorials
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[14px] font-semibold leading-[20px] tracking-[0.04em] text-on-surface-variant hover:text-on-surface transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href="#simulator"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg font-body text-[14px] font-semibold leading-[20px] tracking-[0.04em] text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Consult an Artisan
          </a>
          <a
            href="#simulator"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary text-on-primary font-body text-[14px] font-semibold leading-[20px] tracking-[0.04em] hover:bg-primary-container transition-colors shadow-[0_4px_14px_rgba(99,83,70,0.18)]"
          >
            Begin a Remembrance
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden w-10 h-10 rounded-full bg-surface-container flex items-center justify-center"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-on-surface text-[22px]">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="xl:hidden bg-surface/95 backdrop-blur-xl border-t border-outline-variant/30 px-6 py-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-body text-[14px] font-semibold leading-[20px] tracking-[0.04em] text-on-surface-variant hover:text-on-surface transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#simulator"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full bg-primary text-on-primary font-body text-[14px] font-semibold leading-[20px] tracking-[0.04em] hover:bg-primary-container transition-colors shadow-md"
            >
              Begin a Remembrance
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
