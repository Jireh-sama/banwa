export default function CtaSection() {
  return (
    <section id="cta" data-animate="section" className="w-full bg-surface py-20 lg:py-28 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-secondary-fixed/15 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">

        {/* Headline & Description */}
        <div data-animate="header">
          <h2 className="font-heading text-[38px] lg:text-[56px] font-normal leading-[48px] lg:leading-[68px] tracking-[-0.02em] text-on-surface mb-6">
            Give your companion a place
            <br />
            <span className="italic text-secondary">that lasts forever.</span>
          </h2>

          <p className="font-body text-[18px] font-normal leading-[30px] text-on-surface-variant mb-10 max-w-2xl mx-auto">
            Receive an AI 3D Memorial Digital Preview Kit at no obligation, or
            speak quietly with one of our compassionate memorial curators today.
          </p>
        </div>

        {/* Email Form */}
        <div data-animate="card" className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow px-5 py-4 rounded-full bg-surface-container-low text-on-surface font-body text-[15px] leading-[24px] focus:outline-none focus:ring-2 focus:ring-secondary/60 placeholder:text-on-surface-variant/60 shadow-inner"
          />
          <button
            type="button"
            className="px-8 py-4 rounded-full bg-primary text-on-primary font-body text-[14px] font-semibold leading-[20px] tracking-[0.04em] hover:bg-primary-container transition-all shadow-md shrink-0"
          >
            Request Preview Kit
          </button>
        </div>

        <p className="font-body text-[13px] font-normal leading-[20px] text-on-surface-variant mt-4">
          No sales pressure. No automated marketing spam. Only gentle care.
        </p>
      </div>
    </section>
  );
}
