"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question:
      "What if I only have a few low-quality or blurry phone photos?",
    answer:
      "Our AI depth-synthesis models are specially trained on skeletal structures of domestic canine and feline breeds. Even if you only possess 2 or 3 casual photos taken from odd angles or under dim lighting, the system reconstructs the missing planes. Our human artisans cross-reference the output to guarantee breed accuracy and soulfulness.",
  },
  {
    question:
      "Can the sculptures safely hold ashes, whiskers, or memorial soil?",
    answer:
      "Yes. Both 'The Memorial Silhouette Plinth' and 'The Hearth Solace Vase' can be ordered with a hermetically sealed under-cavity milled directly into the marble base. We provide a brass threaded cap and sealant to ensure your pet's physical essence remains protected indefinitely.",
  },
  {
    question:
      "How do I care for natural honed marble over the years?",
    answer:
      "Every Banwa piece is sealed with an organic, non-toxic micro-crystalline wax that repels moisture and dust. Simply dust with the soft microfiber cloth included in your cedar homecoming box. Avoid harsh chemical sprays or acidic detergents—natural stone thrives with gentle touch and dry dusting.",
  },
  {
    question:
      "Do you accept commissions honoring departed human family members?",
    answer:
      "Yes, wholeheartedly. The meaning of Banwa encompasses all ancestral reunions. Our team crafts minimalist portrait reliefs, tactile urn vessels, and inlaid furniture pieces for parents, grandparents, and loved ones with bespoke private concierge guidance.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-surface-container-low py-20 lg:py-28" id="faq">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-body text-[12px] font-medium leading-[16px] tracking-[0.05em] text-secondary uppercase mb-2 block">
            Guidance &amp; Reassurance
          </span>
          <h2 className="font-heading text-[30px] lg:text-[40px] font-normal leading-[40px] lg:leading-[52px] tracking-[-0.01em] text-on-surface">
            Frequently Contemplated Questions
          </h2>
          <p className="font-body text-[15px] font-normal leading-[24px] text-on-surface-variant mt-2">
            We approach every correspondence with dignity, gentle patience, and
            complete transparency.
          </p>
        </div>

        {/* FAQ Accordion — base-ui uses defaultValue array, no type/collapsible */}
        <Accordion defaultValue={[]} className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={i}
              className="bg-surface-container-lowest rounded-2xl px-6 py-2 shadow-sm border-none"
            >
              <AccordionTrigger className="font-heading text-[20px] lg:text-[22px] font-medium leading-[30px] text-on-surface text-left hover:no-underline py-4 [&[data-state=open]>svg]:text-secondary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-[15px] font-normal leading-[24px] text-on-surface-variant pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
