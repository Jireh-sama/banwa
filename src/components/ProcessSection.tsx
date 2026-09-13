const steps = [
  {
    num: "01",
    icon: "add_photo_alternate",
    title: "Archival Photo Curation",
    desc: "Upload whatever cherished images you possess: old smartphone snaps, sunlit garden portraits, or candid sleeping moments. Blurry or vintage shots are welcomed with care.",
    badgeIcon: "verified_user",
    badgeText: "100% Private & Encrypted",
  },
  {
    num: "02",
    icon: "view_in_ar",
    title: "AI 3D Volumetric Sculpting",
    desc: "Our neural AI analyzes your 2D photos, computing volumetric depth, anatomical muscle curvature, ear drop angles, and facial serenity to create a faithful 3D digital model.",
    badgeIcon: "touch_app",
    badgeText: "Interactive Digital Proof sent",
  },
  {
    num: "03",
    icon: "handyman",
    title: "Artisan Stone Masonry",
    desc: "Master stone artisans with decades of heritage hand-carving and honing the stone with fine diamond pads and organic olive oil balm following precision diamond rough-milling.",
    badgeIcon: "palette",
    badgeText: "Custom Vein Pairing",
  },
  {
    num: "04",
    icon: "home_pin",
    title: "Sacred Homecoming",
    desc: "Enclosed in a velvet-lined cedar keepsake chest with personalized brass wax seal, authenticity scrolls, and care gloves. Safely couriered to your sanctuary doorstep.",
    badgeIcon: "local_shipping",
    badgeText: "Insured Global Delivery",
  },
];

export default function ProcessSection() {
  return (
    <section className="w-full bg-surface py-20 lg:py-28" id="process">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-[30px] lg:text-[40px] font-normal leading-[40px] lg:leading-[52px] tracking-[-0.01em] text-on-surface mb-4">
            From Treasured Photos to Solid Natural Marble
          </h2>
          <p className="font-body text-[18px] font-normal leading-[30px] text-on-surface-variant">
            Technology remains an invisible, gentle hand. Proprietary neural AI
            reconstructs anatomical truth from imperfect personal photographs,
            which our master stonecutters then bring to life in honed marble.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-surface-container-lowest p-7 rounded-3xl shadow-sm flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading text-[56px] font-light leading-[68px] tracking-[-0.02em] text-surface-container-highest">
                    {step.num}
                  </span>
                  <span className="material-symbols-outlined text-secondary text-[28px]">
                    {step.icon}
                  </span>
                </div>
                <h3 className="font-heading text-[22px] font-medium leading-[30px] text-on-surface mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-[13px] font-normal leading-[20px] text-on-surface-variant">
                  {step.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 bg-surface-container-low p-3 rounded-xl flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  {step.badgeIcon}
                </span>
                <span className="font-body text-[11px] font-semibold leading-[14px] tracking-[0.08em] text-on-surface">
                  {step.badgeText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
