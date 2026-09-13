"use client";

import { useState } from "react";
import Image from "next/image";

const companions = [
  { type: "Dog", icon: "pets", label: "Dog Soulmate" },
  { type: "Cat", icon: "cruelty_free", label: "Cat Soulmate" },
  { type: "Multi-Pet", icon: "group_work", label: "Multiple Companions" },
  { type: "Human Loved One", icon: "person_heart", label: "Family Member" },
];

const marbles = [
  {
    id: "Earthy Travertine",
    label: "Earthy Travertine",
    desc: "Porous, warm, antique beige",
    colorClass: "bg-secondary-fixed-dim/60",
  },
  {
    id: "Crema Marfil",
    label: "Crema Marfil",
    desc: "Silky, warm butter-veined tone",
    colorClass: "bg-surface-container-high",
  },
  {
    id: "Calacatta Viola",
    label: "Calacatta Viola",
    desc: "Deep wine & alabaster drama",
    colorClass: "bg-outline-variant",
  },
];

export default function SimulatorSection() {
  const [companion, setCompanion] = useState("Dog");
  const [stone, setStone] = useState("Earthy Travertine");
  const [artistCollab, setArtistCollab] = useState(false);

  const companionLabel =
    companions.find((c) => c.type === companion)?.label ?? companion;

  return (
    <section
      className="w-full bg-surface-container-low py-20 lg:py-28"
      id="simulator"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-body text-[12px] font-medium leading-[16px] tracking-[0.05em] text-secondary uppercase mb-2 block">
            Interactive Curator
          </span>
          <h2 className="font-heading text-[30px] lg:text-[40px] font-normal leading-[40px] lg:leading-[52px] tracking-[-0.01em] text-on-surface">
            Preview Your Remembrance
          </h2>
          <p className="font-body text-[15px] font-normal leading-[24px] text-on-surface-variant mt-2">
            Select your tribute preferences below to visualize stone textures,
            estimated timeline, and receive a non-binding digital proof
            consultation.
          </p>
        </div>

        {/* Configurator */}
        <div className="bg-surface-container-lowest rounded-3xl p-8 lg:p-12 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Controls */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Step 1: Companion */}
            <div>
              <label className="font-body text-[14px] font-semibold leading-[20px] tracking-[0.04em] text-on-surface block mb-3">
                1. Who are we welcoming home?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {companions.map((c) => (
                  <button
                    key={c.type}
                    type="button"
                    onClick={() => setCompanion(c.type)}
                    className={`p-3.5 rounded-2xl text-left transition-all ${
                      companion === c.type
                        ? "bg-secondary-container/40 text-on-secondary-container"
                        : "bg-surface-container-low hover:bg-surface-container"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[22px] block mb-1">
                      {c.icon}
                    </span>
                    <span className="font-body text-[12px] font-medium leading-[16px] tracking-[0.05em] block">
                      {c.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Marble */}
            <div>
              <label className="font-body text-[14px] font-semibold leading-[20px] tracking-[0.04em] text-on-surface block mb-3">
                2. Choose Natural Marble &amp; Stone Finish
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {marbles.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setStone(m.id)}
                    className={`p-4 rounded-2xl text-left transition-all ${
                      stone === m.id
                        ? "bg-secondary-fixed/50"
                        : "bg-surface-container-low"
                    }`}
                  >
                    <div
                      className={`w-full h-8 rounded-lg ${m.colorClass} mb-2`}
                    />
                    <span className="font-body text-[12px] font-medium leading-[16px] tracking-[0.05em] text-on-surface block">
                      {m.label}
                    </span>
                    <span className="font-body text-[13px] font-normal leading-[20px] text-on-surface-variant">
                      {m.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Photo Upload */}
            <div>
              <label className="font-body text-[14px] font-semibold leading-[20px] tracking-[0.04em] text-on-surface block mb-2">
                3. Upload Cherished Photos (1–6 photos)
              </label>
              <p className="font-body text-[13px] font-normal leading-[20px] text-on-surface-variant mb-3">
                Casual iPhone snaps, sleeping positions, or outdoor portraits
                are completely fine.
              </p>
              <div className="p-8 rounded-2xl bg-surface-container-low flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container transition-all">
                <span className="material-symbols-outlined text-secondary text-[40px] mb-2">
                  cloud_upload
                </span>
                <span className="font-body text-[14px] font-semibold leading-[20px] tracking-[0.04em] text-on-surface">
                  Drop memories here or browse files
                </span>
                <span className="font-body text-[13px] font-normal leading-[20px] text-on-surface-variant mt-1">
                  JPEG, PNG, HEIC up to 50MB
                </span>
              </div>
            </div>

            {/* Step 4: Inscription */}
            <div>
              <label className="font-body text-[14px] font-semibold leading-[20px] tracking-[0.04em] text-on-surface block mb-2">
                4. Memorial Inscription (Optional)
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-body text-[15px] leading-[24px] focus:outline-none focus:ring-2 focus:ring-secondary/50 placeholder:text-on-surface-variant/60"
                placeholder="e.g. BARTLEY • ALWAYS WITH US • 2010–2024"
              />
            </div>

            {/* Step 5: Artist Collaboration */}
            <div>
              <label className="font-body text-[14px] font-semibold leading-[20px] tracking-[0.04em] text-on-surface block mb-2">
                5. Artisanal Touch &amp; Collaborations (Optional)
              </label>
              <label className="flex items-start gap-3.5 p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer border border-transparent hover:border-outline-variant">
                <input
                  type="checkbox"
                  checked={artistCollab}
                  onChange={(e) => setArtistCollab(e.target.checked)}
                  className="mt-1 w-5 h-5 rounded text-secondary focus:ring-secondary/50 accent-secondary shrink-0"
                />
                <div className="flex flex-col">
                  <span className="font-body text-[12px] font-medium leading-[16px] tracking-[0.05em] text-on-surface">
                    Include Local Artist Collaboration (+ Personalized
                    Consultation)
                  </span>
                  <span className="font-body text-[13px] font-normal leading-[20px] text-on-surface-variant mt-0.5">
                    Receive a collaborative direct session with our resident
                    ceramicists and stone calligraphers for hand-carved botanical
                    flora, 24k gold leaf inlay, or custom typography.
                  </span>
                </div>
              </label>
            </div>
          </div>

          {/* Live Summary Sidebar */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-surface-container p-6 lg:p-8 rounded-3xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-body text-[11px] font-semibold leading-[14px] tracking-[0.08em] text-secondary uppercase">
                  Live Craft Estimate
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-body text-[11px] font-semibold leading-[14px] tracking-[0.08em]">
                  Active Queue: Slot Reserved
                </span>
              </div>

              {/* Preview Image */}
              <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-6 shadow-sm">
                <Image
                  src="/images/dog-marble-image.png"
                  alt="Live memorial mockup visualization"
                  width={500}
                  height={224}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-surface/90 backdrop-blur-sm">
                  <span className="font-body text-[11px] font-semibold leading-[14px] tracking-[0.08em] text-on-surface font-medium">
                    {companionLabel} • {stone}
                  </span>
                </div>
              </div>

              {/* Summary Details */}
              <div className="flex flex-col gap-3 py-4 bg-surface-container-lowest/60 p-4 rounded-2xl mb-6">
                <div className="flex justify-between items-center text-on-surface">
                  <span className="font-body text-[13px] font-normal leading-[20px] text-on-surface-variant">
                    Subject:
                  </span>
                  <span className="font-body text-[12px] font-medium leading-[16px] tracking-[0.05em]">
                    {companionLabel}
                  </span>
                </div>
                <div className="flex justify-between items-center text-on-surface">
                  <span className="font-body text-[13px] font-normal leading-[20px] text-on-surface-variant">
                    Stone Selection:
                  </span>
                  <span className="font-body text-[12px] font-medium leading-[16px] tracking-[0.05em]">
                    {stone}
                  </span>
                </div>
                <div className="flex justify-between items-center text-on-surface">
                  <span className="font-body text-[13px] font-normal leading-[20px] text-on-surface-variant">
                    Estimated Hand-Craft Duration:
                  </span>
                  <span className="font-body text-[12px] font-medium leading-[16px] tracking-[0.05em] text-secondary">
                    5 Weeks
                  </span>
                </div>
                <div className="flex justify-between items-center text-on-surface">
                  <span className="font-body text-[13px] font-normal leading-[20px] text-on-surface-variant">
                    Starting Investment:
                  </span>
                  <span className="font-body text-[14px] font-semibold leading-[20px] tracking-[0.04em] text-primary">
                    $680
                  </span>
                </div>
              </div>

              <p className="font-body text-[13px] font-normal leading-[20px] text-on-surface-variant italic mb-6">
                Includes 3D AI Proof with unlimited tweaks prior to stone
                milling, solid natural marble, and complimentary insured
                freight.
              </p>
            </div>

            <button
              type="button"
              className="w-full py-4 rounded-full bg-primary text-on-primary font-body text-[14px] font-semibold leading-[20px] tracking-[0.04em] shadow-md hover:bg-primary-container transition-all flex items-center justify-center gap-2"
            >
              <span>Begin Free AI 3D Proofing</span>
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
