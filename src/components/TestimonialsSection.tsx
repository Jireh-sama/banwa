const testimonials = [
  {
    initials: "EW",
    initialsColor: "bg-secondary-fixed text-on-secondary-fixed",
    name: "Eleanor & Marcus W.",
    product: "Memorial Plinth for Bartley (Golden Retriever)",
    quote:
      "\u201CBartley feels like he never truly left our living room. Running my hand across the cool, smooth stone while having my tea brings an unexpected wave of profound peace.\u201D",
  },
  {
    initials: "SC",
    initialsColor: "bg-secondary-container text-on-secondary-container",
    name: "Dr. Sarah Chen",
    product: "Solace Hearth Vessel for Cleo (Siamese)",
    quote:
      "\u201CI was terrified that the 3D model would feel robotic. But when Banwa\u2019s artisan refined the subtle slope of Cleo\u2019s ears, tears filled my eyes. It is truly her.\u201D",
  },
  {
    initials: "JL",
    initialsColor: "bg-tertiary-fixed text-on-tertiary-fixed",
    name: "Julian & David L.",
    product: "Bespoke Sanctuary Table",
    quote:
      "\u201CThe inlaid coffee table is our home\u2019s sacred centerpiece. Guests compliment its contemporary minimalism before realizing it lovingly depicts our greyhound and cat together.\u201D",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-surface py-20 lg:py-28" id="stories" data-animate="section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-animate="header">
          <h2 className="font-heading text-[30px] lg:text-[40px] font-normal leading-[40px] lg:leading-[52px] tracking-[-0.01em] text-on-surface">
            Welcomed Back to the Living Room
          </h2>
          <p className="font-body text-[15px] font-normal leading-[24px] text-on-surface-variant mt-2">
            Grief is not meant to be hidden in dark corners. Hear from guardians
            who found peace having their companions present once more.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.initials}
              data-animate="card"
              className="p-8 rounded-3xl bg-surface-container-lowest shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-secondary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px]"
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body text-[18px] font-normal leading-[30px] text-on-surface italic mb-6">
                  {t.quote}
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 bg-surface-container-low/40 -mx-8 -mb-8 p-6 rounded-b-3xl">
                <div
                  className={`w-10 h-10 rounded-full ${t.initialsColor} flex items-center justify-center font-body text-[12px] font-medium leading-[16px] tracking-[0.05em] font-bold`}
                >
                  {t.initials}
                </div>
                <div>
                  <span className="font-body text-[12px] font-medium leading-[16px] tracking-[0.05em] text-on-surface font-semibold block">
                    {t.name}
                  </span>
                  <span className="font-body text-[13px] font-normal leading-[20px] text-on-surface-variant">
                    {t.product}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
