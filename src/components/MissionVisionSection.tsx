export default function MissionVisionSection() {
  return (
    <section className="w-full bg-surface py-20 lg:py-28 border-y border-outline-variant/30" id="mission">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container mb-4">
            <span className="font-body text-[11px] font-semibold leading-[14px] tracking-[0.08em] text-secondary uppercase">
              Guiding Ethos
            </span>
          </div>
          <h2 className="font-heading text-[32px] lg:text-[44px] font-normal leading-[42px] lg:leading-[54px] tracking-[-0.01em] text-on-surface mb-4">
            Our Mission &amp; Vision
          </h2>
          <p className="font-body text-[16px] lg:text-[18px] font-normal leading-[28px] lg:leading-[30px] text-on-surface-variant">
            Rooted in empathy and carved into natural stone, we exist to honor the bonds that define our lives while sustaining the timeless heritage of Filipino stone masonry.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Column / Card */}
          <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-surface-container-low border border-outline-variant/50 flex flex-col justify-between relative overflow-hidden group hover:border-primary/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest shadow-sm flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[28px]">
                    flag
                  </span>
                </div>
                <span className="font-body text-[12px] font-semibold tracking-[0.08em] uppercase text-primary px-3.5 py-1.5 rounded-full bg-primary/10">
                  01 / Our Mission
                </span>
              </div>

              <h3 className="font-heading text-[24px] lg:text-[28px] font-normal leading-[34px] lg:leading-[38px] text-on-surface mb-5">
                To craft timeless, tactile sanctuaries for enduring love.
              </h3>

              <p className="font-body text-[15px] lg:text-[16px] font-normal leading-[26px] lg:leading-[28px] text-on-surface-variant mb-8">
                We transform the transient into the eternal. By pairing respectful 3D volumetric design with patient, hand-carved Philippine marble, our mission is to provide grieving families and pet guardians with a physical, comforting presence that honors devotion for generations.
              </p>
            </div>

            <div className="pt-6 border-t border-outline-variant/40 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-[12px] font-medium text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
                Authentic Romblon Marble
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-[12px] font-medium text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[16px]">favorite</span>
                Compassionate Care
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-[12px] font-medium text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[16px]">all_inclusive</span>
                Lasts for Generations
              </span>
            </div>
          </div>

          {/* Vision Column / Card */}
          <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-surface-container-low border border-outline-variant/50 flex flex-col justify-between relative overflow-hidden group hover:border-secondary/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest shadow-sm flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-[28px]">
                    visibility
                  </span>
                </div>
                <span className="font-body text-[12px] font-semibold tracking-[0.08em] uppercase text-secondary px-3.5 py-1.5 rounded-full bg-secondary/10">
                  02 / Our Vision
                </span>
              </div>

              <h3 className="font-heading text-[24px] lg:text-[28px] font-normal leading-[34px] lg:leading-[38px] text-on-surface mb-5">
                A world where no cherished legacy fades into silence.
              </h3>

              <p className="font-body text-[15px] lg:text-[16px] font-normal leading-[26px] lg:leading-[28px] text-on-surface-variant mb-8">
                To become the premier memorial sanctuary studio in Southeast Asia and beyond—elevating remembrance into fine art, normalizing gentle conversations around loss, and sustaining centuries-old Filipino artisan stonecraft with dignified livelihoods.
              </p>
            </div>

            <div className="pt-6 border-t border-outline-variant/40 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-[12px] font-medium text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[16px]">handshake</span>
                Artisan Empowerment
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-[12px] font-medium text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[16px]">palette</span>
                Fine Art Heritage
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-[12px] font-medium text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[16px]">public</span>
                Southeast Asian Legacy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
