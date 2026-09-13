const milestones = [
  {
    week: "Week 1",
    weekStyle: "bg-secondary-fixed text-on-secondary-fixed",
    title: "Photo Intake & 3D AI Proofing",
    desc: "Our memorial curators review your submissions. Within 5 business days, you receive an interactive 360° digital volumetric proof. You can suggest subtle adjustments to ears, muzzle shape, and stance.",
    footerIcon: "check_circle",
    footerText: "Parent Approval Required",
    footerColor: "text-secondary",
  },
  {
    week: "Week 2",
    weekStyle: "bg-surface-container-high text-on-surface",
    title: "Quarry Selection & Water-Milling",
    desc: "We hand-select an authentic raw stone block whose natural mineral veins and warmth echo your companion's spirit. 5-axis computer waterjets execute the initial rough anatomical block-out.",
    footerIcon: "architecture",
    footerText: "Sub-Millimeter Roughing",
    footerColor: "text-on-surface-variant",
  },
  {
    week: "Weeks 3–4",
    weekStyle: "bg-surface-container-high text-on-surface",
    title: "Hand Detailing & Honed Finish",
    desc: "Master carvers spend over 18 hours refining curves with rifflers, gouges, and wet diamond sandpaper. Textures are softened to a satin, waxy touch that feels comforting and tactile.",
    footerIcon: "front_hand",
    footerText: "18+ Hours Hand Labor",
    footerColor: "text-on-surface-variant",
  },
  {
    week: "Weeks 5–6",
    weekStyle: "bg-surface-container-high text-on-surface",
    title: "Inscription & White-Glove Courier",
    desc: "Personalized dates and tributes are engraved into the base. The piece undergoes rigorous balance checks before being packed in cedar shavings and delivered safely to your door.",
    footerIcon: "sentiment_very_satisfied",
    footerText: "The Sacred Reunion",
    footerColor: "text-primary",
  },
];

export default function TimelineSection() {
  return (
    <section className="w-full bg-surface py-20 lg:py-28" id="timeline">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-heading text-[30px] lg:text-[40px] font-normal leading-[40px] lg:leading-[52px] tracking-[-0.01em] text-on-surface">
            The 4–6 Week Journey Home
          </h2>
          <p className="font-body text-[18px] font-normal leading-[30px] text-on-surface-variant mt-4">
            Why slow craftsmanship matters: true marble takes millions of years
            to form beneath the earth. Sculpting an authentic tribute to your
            soulmate cannot and should not be rushed. Here is every milestone
            along your memorial&apos;s creation.
          </p>
        </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
          {milestones.map((ms) => (
            <div
              key={ms.week}
              className="p-7 rounded-3xl bg-surface-container-lowest shadow-sm flex flex-col justify-between"
            >
              <div>
                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full font-body text-[11px] font-semibold leading-[14px] tracking-[0.08em] mb-4 ${ms.weekStyle}`}
                >
                  {ms.week}
                </div>
                <h3 className="font-heading text-[22px] font-medium leading-[30px] text-on-surface mb-2">
                  {ms.title}
                </h3>
                <p className="font-body text-[13px] font-normal leading-[20px] text-on-surface-variant">
                  {ms.desc}
                </p>
              </div>
              <div className={`mt-6 flex items-center gap-2 ${ms.footerColor}`}>
                <span className="material-symbols-outlined text-[20px]">
                  {ms.footerIcon}
                </span>
                <span className="font-body text-[11px] font-semibold leading-[14px] tracking-[0.08em]">
                  {ms.footerText}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Rush Support Banner */}
        <div className="mt-8 p-6 rounded-2xl bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary text-[24px]">
              event_repeat
            </span>
            <p className="font-body text-[13px] font-normal leading-[20px] text-on-surface">
              <strong>Memorial Milestone or Anniversary?</strong> We offer
              compassionate rush curation (3 weeks) for solemn dates or upcoming
              remembrance services.
            </p>
          </div>
          <a
            href="#simulator"
            className="px-5 py-2 rounded-full bg-surface-container-lowest text-on-surface font-body text-[11px] font-semibold leading-[14px] tracking-[0.08em] hover:bg-surface-container transition-colors shadow-sm shrink-0"
          >
            Inquire About Rush Service
          </a>
        </div>
      </div>
    </section>
  );
}
