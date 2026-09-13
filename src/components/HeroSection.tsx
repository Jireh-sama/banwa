import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-surface py-16 lg:py-24 overflow-hidden">
      {/* Ambient organic sunlit backdrops */}
      <div className="absolute top-12 -left-20 w-96 h-96 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] rounded-full bg-surface-container-high/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Narrative Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-low shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-body text-[12px] font-medium leading-[16px] tracking-[0.05em] text-on-surface-variant uppercase">
                Banwa (Hometown) • An Everlasting Homecoming
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-[38px] lg:text-[56px] font-normal leading-[48px] lg:leading-[68px] tracking-[-0.02em] text-on-surface mb-6">
              Immortalized in stone,
              <br />
              <span className="italic text-secondary">welcomed back home.</span>
            </h1>

            {/* Subheadline */}
            <p className="font-body text-[18px] font-normal leading-[30px] text-on-surface-variant mb-8 max-w-2xl">
              Transform old memories and cherished photographs of your beloved
              companions into timeless, hand-finished marble heirlooms. Powered
              by gentle AI 3D volumetric reconstruction and sculpted with
              patient reverence by master stone masons.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#simulator"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-on-primary font-body text-[14px] font-semibold leading-[20px] tracking-[0.04em] shadow-md hover:bg-primary-container transition-all"
              >
                <span>Immortalize Your Companion</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-surface-container-low text-on-surface font-body text-[14px] font-semibold leading-[20px] tracking-[0.04em] hover:bg-surface-container transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  architecture
                </span>
                <span>Explore The Craft &amp; Timeline</span>
              </a>
            </div>

            {/* Trust Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-6 bg-surface-container-lowest/70 p-5 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-[22px] shrink-0">
                  diamond
                </span>
                <span className="font-body text-[13px] font-medium leading-[20px] text-on-surface">
                  100% Solid Honed Travertine &amp; Crema Marble
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-[22px] shrink-0">
                  neurology
                </span>
                <span className="font-body text-[13px] font-medium leading-[20px] text-on-surface">
                  Gentle AI 3D Volumetric Sculpting
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-[22px] shrink-0">
                  inventory_2
                </span>
                <span className="font-body text-[13px] font-medium leading-[20px] text-on-surface">
                  Delivered in 4–6 Weeks with Loving Care
                </span>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-surface-container shadow-xl">
              <Image
                src="/images/vase-image.png"
                alt="The Luminary Memorial Vessel in soft morning sun"
                width={600}
                height={520}
                className="w-full h-[520px] object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Floating Detail Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-surface/90 backdrop-blur-md shadow-md flex items-center justify-between">
                <div>
                  <span className="font-body text-[11px] font-semibold leading-[14px] tracking-[0.08em] text-secondary uppercase block mb-1">
                    Hand-Honed Marble Vessel
                  </span>
                  <p className="font-heading text-[22px] font-medium leading-[30px] text-on-surface">
                    The Hearth Solace Keepsake
                  </p>
                  <p className="font-body text-[13px] font-normal leading-[20px] text-on-surface-variant">
                    Honed Crema stone with interior private memory vault
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0">
                  <span className="material-symbols-outlined text-[24px]">
                    favorite
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
