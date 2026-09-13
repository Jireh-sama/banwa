import Image from "next/image";

const products = [
  {
    image: "/images/dog-marble-image.png",
    imageAlt: "The Memorial Silhouette Plinth featuring sleeping golden retriever carved in marble",
    badge: "Signature Memorial",
    price: "From $680",
    title: "The Memorial Silhouette Plinth",
    desc: "A custom carved marble sculpture replicating your companion's exact sleeping or watchful pose. Rests upon an integrated plinth with crisp diamond-etched name and memorial years.",
    tags: ["Honed Crema", "Custom Inscription", "Life-Size & Scale"],
    cta: "Commission Plinth",
  },
  {
    image: "/images/vase-image.png",
    imageAlt: "The Hearth Solace Vase in cream marble on travertine block",
    badge: "Living Tribute",
    price: "From $490",
    title: "The Hearth Solace Vase",
    desc: "Sculptural soft-curved vessel with subtle Roman fluting. Features an invisible hermetic inner core designed for ashes, collar tags, or soil, topped with dried olive botanicals.",
    tags: ["Earthy Travertine", "Hermetic Inner Capsule", "Botanical Top"],
    cta: "Commission Solace Vessel",
  },
  {
    image: "/images/table-image.png",
    imageAlt: "The Inlaid Sanctuary Table with dog and cat marble silhouette inlay",
    badge: "Architectural Piece",
    price: "Commission from $1,850",
    title: "The Inlaid Sanctuary Table",
    desc: "Centerpiece round coffee table in solid honed white marble with contrasting warm travertine inlay replicating the gentle outline of your pets together in eternal peace.",
    tags: ["Dual Stone Marquetry", "Solid Oak Base", "Multi-Pet Companions"],
    cta: "Inquire Bespoke Table",
  },
];

export default function KeepsakeSection() {
  return (
    <section className="w-full bg-surface-container-low py-20 lg:py-28" id="collection" data-animate="section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" data-animate="header">
          <div className="max-w-2xl">
            <h2 className="font-heading text-[30px] lg:text-[40px] font-normal leading-[40px] lg:leading-[52px] tracking-[-0.01em] text-on-surface">
              The Banwa Sanctuary Keepsakes
            </h2>
            <p className="font-body text-[15px] font-normal leading-[24px] text-on-surface-variant mt-3">
              Carved exclusively from responsibly sourced natural limestone,
              earthy travertine, and honed sculptural marble. Each edition is
              singular, immortalizing the distinct posture and spirit of your
              companion.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container text-on-surface font-body text-[12px] font-medium leading-[16px] tracking-[0.05em]">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            Natural veining matches coat undertones
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              data-animate="card"
              className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group"
            >
              <div className="relative overflow-hidden h-72">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  width={500}
                  height={288}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface/90 backdrop-blur-md">
                  <span className="font-body text-[11px] font-semibold leading-[14px] tracking-[0.08em] text-on-surface">
                    {product.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-surface/90 backdrop-blur-md">
                  <span className="font-body text-[11px] font-medium leading-[14px] tracking-[0.08em] text-secondary">
                    {product.price}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-heading text-[22px] font-medium leading-[30px] text-on-surface mb-2">
                    {product.title}
                  </h3>
                  <p className="font-body text-[13px] font-normal leading-[20px] text-on-surface-variant mb-4">
                    {product.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface-variant font-body text-[11px] font-semibold leading-[14px] tracking-[0.08em]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="#simulator"
                  className="w-full py-3 rounded-xl bg-primary text-on-primary text-center font-body text-[14px] font-semibold leading-[20px] tracking-[0.04em] hover:bg-primary-container transition-colors shadow-sm block"
                >
                  {product.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
