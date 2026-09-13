import Image from "next/image";

const addOns = [
  {
    icon: "spa",
    title: "Botanical Relief & Flora",
    desc: "Carved wild lavender, olive boughs, or backyard flora where your companion loved to rest, etched directly into the marble.",
    price: "From +$140",
  },
  {
    icon: "auto_awesome",
    title: "24k Kintsugi & Gold Leaf Inlay",
    desc: "Celebrating the imperfect journey of healing with genuine gold leaf veins hand-applied along stone fissures or silhouette borders.",
    price: "From +$190",
  },
  {
    icon: "history_edu",
    title: "Calligraphy & Poetic Inscription",
    desc: "Bespoke handwritten typography, affectionate nicknames, or paw print pressed contours by local master penmen.",
    price: "From +$95",
  },
  {
    icon: "interests",
    title: "Ceramic & Enamel Medallions",
    desc: "Miniature glazed hearth medallions inset flush into the base of the plinth or vase.",
    price: "From +$120",
  },
];

export default function CollaborationsSection() {
  return (
    <section className="w-full bg-surface py-20 lg:py-28" id="collaborations">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <h2 className="font-heading text-[30px] lg:text-[40px] font-normal leading-[40px] lg:leading-[52px] tracking-[-0.01em] text-on-surface">
              Local Artist Collaborations
            </h2>
            <p className="font-body text-[18px] font-normal leading-[30px] text-on-surface-variant mt-3">
              Infuse hand-hewn intimacy into your memorial. Choose to
              collaborate with our resident local artisans and illustrators to
              adorn your stone with bespoke, tactile sentimental details.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container text-on-surface font-body text-[12px] font-medium leading-[16px] tracking-[0.05em] shrink-0">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            Hand-touched by Local Artisans
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Artisan Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-surface-container shadow-md group">
              <Image
                src="/images/artist-image.png"
                alt="Resident stone artist hand-carving custom botanical and gold leaf accents onto a honed travertine tribute"
                width={600}
                height={520}
                className="w-full h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-surface/90 backdrop-blur-md shadow-md">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    brush
                  </span>
                  <span className="font-body text-[11px] font-semibold leading-[14px] tracking-[0.08em] text-secondary uppercase">
                    Resident Atelier Master
                  </span>
                </div>
                <p className="font-body text-[13px] font-normal leading-[20px] text-on-surface">
                  Resident stone artist hand-carving custom botanical and gold
                  leaf accents onto a honed travertine tribute.
                </p>
              </div>
            </div>
          </div>

          {/* Add-on Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {addOns.map((addon) => (
              <div
                key={addon.title}
                className="bg-surface-container-lowest p-7 rounded-3xl shadow-sm flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-2xl bg-surface-container flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-[22px]">
                        {addon.icon}
                      </span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-body text-[11px] font-semibold leading-[14px] tracking-[0.08em]">
                      Selectable Add-on
                    </span>
                  </div>
                  <h3 className="font-heading text-[22px] font-medium leading-[30px] text-on-surface mb-2">
                    {addon.title}
                  </h3>
                  <p className="font-body text-[13px] font-normal leading-[20px] text-on-surface-variant mb-4">
                    {addon.desc}
                  </p>
                </div>
                <div className="pt-4 bg-surface-container-low p-3 rounded-xl flex items-center justify-between">
                  <span className="font-body text-[11px] font-semibold leading-[14px] tracking-[0.08em] text-on-surface font-medium">
                    {addon.price}
                  </span>
                  <span className="font-body text-[11px] font-semibold leading-[14px] tracking-[0.08em] text-secondary">
                    Inquire With Curator
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
