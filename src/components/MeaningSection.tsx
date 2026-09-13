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
      </div>
    </section>
  );
}
