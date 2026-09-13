export default function MeaningSection() {
  return (
    <section className="w-full bg-surface-container-low py-20 lg:py-28" id="meaning">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative Column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container mb-4">
              <span className="font-body text-[11px] font-semibold leading-[14px] tracking-[0.08em] text-secondary uppercase">
                Provenance &amp; Soul
              </span>
            </div>

            <h2 className="font-heading text-[30px] lg:text-[40px] font-normal leading-[40px] lg:leading-[52px] tracking-[-0.01em] text-on-surface mb-6">
              In ancient roots,
              <br />
              <span className="italic text-primary">Banwa</span> signifies
              hometown.
            </h2>

            <div className="w-16 h-0.5 bg-secondary mb-6" />

            <p className="font-body text-[18px] font-normal leading-[30px] text-on-surface-variant mb-6">
              The hometown is where you are known, embraced, and truly safe.
              When our pets depart, our grief is often a search for where their
              endless devotion can live.
            </p>

            <p className="font-body text-[15px] font-normal leading-[24px] text-on-surface-variant mb-8">
              Capturing the curl of a sleeping tail, the tilt of an eager ear,
              or the warm resting weight of their paws in tactile natural stone.
            </p>

            {/* Fellowship Card */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-2">
              <span className="font-body text-[14px] font-semibold leading-[20px] tracking-[0.04em] text-secondary">
                Human &amp; Pet Sanctuary Fellowship
              </span>
              <p className="font-body text-[13px] font-normal leading-[20px] text-on-surface-variant">
                While our daily calling centers on faithful dogs, cats, and
                rescue souls, Banwa also hand-crafts bespoke memorial artifacts
                for departed parents, partners, and children upon compassionate
                request.
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-[24px]">
                    pets
                  </span>
                </div>
                <h3 className="font-heading text-[22px] font-medium leading-[30px] text-on-surface mb-3">
                  Our Faithful Companions
                </h3>
                <p className="font-body text-[15px] font-normal leading-[24px] text-on-surface-variant">
                  Capturing the curl of a sleeping tail, the tilt of an eager
                  ear, or the warm resting weight of their paws in tactile
                  natural stone.
                </p>
              </div>
              <div className="mt-6 pt-6 bg-surface-container-low/50 -mx-8 -mb-8 p-6 rounded-b-3xl">
                <span className="font-body text-[11px] font-semibold leading-[14px] tracking-[0.08em] text-secondary uppercase">
                  Over 1,200 souls guided home
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-secondary text-[24px]">
                    diversity_1
                  </span>
                </div>
                <h3 className="font-heading text-[22px] font-medium leading-[30px] text-on-surface mb-3">
                  Family Remembrance
                </h3>
                <p className="font-body text-[15px] font-normal leading-[24px] text-on-surface-variant">
                  Subtle architectural vessels and inlaid tables commemorating
                  human legacies through timeless organic geometry and noble
                  materials.
                </p>
              </div>
              <div className="mt-6 pt-6 bg-surface-container-low/50 -mx-8 -mb-8 p-6 rounded-b-3xl">
                <span className="font-body text-[11px] font-semibold leading-[14px] tracking-[0.08em] text-primary uppercase">
                  Private artisanal commissions
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Showcase */}
        <div className="mt-16 pt-16 border-t border-outline-variant/30">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container mb-3">
              <span className="font-body text-[11px] font-semibold leading-[14px] tracking-[0.08em] text-secondary uppercase">
                Guiding Principles
              </span>
            </div>
            <h3 className="font-heading text-[28px] lg:text-[36px] font-normal leading-[36px] lg:leading-[46px] text-on-surface">
              Our Mission &amp; Vision
            </h3>
            <p className="font-body text-[15px] font-normal leading-[24px] text-on-surface-variant mt-2">
              Rooted in empathy, grounded in stone, and dedicated to honoring every bond we commemorate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="p-8 lg:p-10 rounded-3xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-primary/40 hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[26px]">
                      flag
                    </span>
                  </div>
                  <span className="font-body text-[11px] font-semibold tracking-[0.08em] uppercase text-primary px-3 py-1 rounded-full bg-primary/10">
                    Our Mission
                  </span>
                </div>
                <h4 className="font-heading text-[22px] lg:text-[24px] font-medium leading-[32px] text-on-surface mb-3">
                  To craft timeless, tactile sanctuaries for devotion.
                </h4>
                <p className="font-body text-[15px] font-normal leading-[26px] text-on-surface-variant">
                  We transform the transient into the eternal. By uniting digital precision with traditional hand-carved Philippine marble, our mission is to offer grieving families and pet parents a tangible, comforting presence that honors unconditional love.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-surface-container flex items-center gap-2 text-secondary font-body text-[13px] font-medium">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>Every piece carved with compassion and permanence</span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="p-8 lg:p-10 rounded-3xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-secondary/40 hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-[26px]">
                      visibility
                    </span>
                  </div>
                  <span className="font-body text-[11px] font-semibold tracking-[0.08em] uppercase text-secondary px-3 py-1 rounded-full bg-secondary/10">
                    Our Vision
                  </span>
                </div>
                <h4 className="font-heading text-[22px] lg:text-[24px] font-medium leading-[32px] text-on-surface mb-3">
                  A world where no cherished legacy fades into silence.
                </h4>
                <p className="font-body text-[15px] font-normal leading-[26px] text-on-surface-variant">
                  To become the foremost sanctuary memorial studio in Southeast Asia and beyond—pioneering thoughtful remembrance, celebrating the profound human-companion bond, and sustaining generational artisan stonecraft with dignified livelihoods.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-surface-container flex items-center gap-2 text-primary font-body text-[13px] font-medium">
                <span className="material-symbols-outlined text-[18px]">handshake</span>
                <span>Empowering multi-generational artisan communities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
