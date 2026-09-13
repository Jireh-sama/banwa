import Image from "next/image";

const footerLinks = {
  Sanctuaries: [
    { label: "Pet Memorials", href: "#collection" },
    { label: "Bespoke Tables", href: "#collection" },
    { label: "Sculptural Vases", href: "#collection" },
    { label: "Human Remembrance", href: "#meaning" },
  ],
  Provenance: [
    { label: "Our Sustainability & Sourcing", href: "#process" },
    { label: "Craftsmanship", href: "#process" },
    { label: "Stone Care & Longevity", href: "#faq" },
  ],
  Guidance: [
    { label: "FAQ", href: "#faq" },
    { label: "Contact Us", href: "#simulator" },
    { label: "Compassionate Support", href: "#simulator" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low shadow-[0_-1px_16px_rgba(125,107,93,0.03)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-space-xl pb-space-lg">
        <div className="flex flex-col lg:flex-row justify-between gap-12 pb-space-xl">
          {/* Brand */}
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-space-sm">
              <Image
                src="/images/banwa_brand_logo.png"
                alt="Banwa Brand Logo"
                width={28}
                height={28}
                className="h-7 w-auto object-contain"
              />
              <span className="font-heading text-[28px] font-medium leading-[38px] text-on-surface">
                Banwa
              </span>
              <span className="font-body text-[11px] font-semibold leading-[14px] tracking-[0.08em] text-secondary uppercase px-2.5 py-0.5 rounded-full bg-secondary-fixed/50">
                Hometown
              </span>
            </div>
            <p className="font-body text-[15px] font-normal leading-[24px] text-on-surface-variant">
              Banwa (Hometown) — bringing your beloved companions home to rest
              in timeless, hand-finished natural stone.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col gap-3">
                <span className="font-body text-[12px] font-medium leading-[16px] tracking-[0.05em] text-on-surface font-semibold uppercase">
                  {category}
                </span>
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-body text-[13px] font-normal leading-[20px] text-on-surface-variant hover:text-on-surface transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-space-md flex flex-col md:flex-row items-center justify-between gap-4 text-on-surface-variant border-t border-outline-variant/30">
          <p className="font-body text-[13px] font-normal leading-[20px] pt-4">
            © 2025 Banwa Sanctuary Co. Honoring cherished companions in
            timeless, hand-finished natural stone.
          </p>
          <div className="flex items-center gap-6 pt-4">
            <a
              href="#"
              className="font-body text-[13px] font-normal leading-[20px] hover:text-on-surface transition-colors"
            >
              Privacy &amp; Dignity
            </a>
            <a
              href="#"
              className="font-body text-[13px] font-normal leading-[20px] hover:text-on-surface transition-colors"
            >
              Terms of Craft
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
