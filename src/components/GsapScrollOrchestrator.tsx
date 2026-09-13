"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GsapScrollOrchestrator() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Accessibility check for prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        return;
      }

      // 2. Global Scroll Progress Bar at the top of the page
      if (progressBarRef.current) {
        gsap.to(progressBarRef.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.3,
          },
        });
      }

      // 3. Hero Section Entrance Animation (Immediate on load)
      const heroBadge = document.querySelector("#hero-badge");
      const heroHeading = document.querySelector("#hero-heading");
      const heroSubheading = document.querySelector("#hero-subheading");
      const heroCta = document.querySelector("#hero-cta-group");
      const heroTrust = document.querySelector("#hero-trust-pills");
      const heroVisual = document.querySelector("#hero-visual");

      if (heroHeading) {
        const heroTimeline = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        if (heroBadge) {
          heroTimeline.fromTo(
            heroBadge,
            { opacity: 0, y: -15 },
            { opacity: 1, y: 0, duration: 0.7, delay: 0.1 }
          );
        }

        heroTimeline.fromTo(
          heroHeading,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.4"
        );

        if (heroSubheading) {
          heroTimeline.fromTo(
            heroSubheading,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8 },
            "-=0.6"
          );
        }

        if (heroCta) {
          heroTimeline.fromTo(
            heroCta,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8 },
            "-=0.6"
          );
        }

        if (heroTrust) {
          heroTimeline.fromTo(
            heroTrust,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8 },
            "-=0.5"
          );
        }

        if (heroVisual) {
          heroTimeline.fromTo(
            heroVisual,
            { opacity: 0, scale: 0.95, y: 30 },
            { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: "power2.out" },
            "-=0.9"
          );
        }
      }

      // 4. Hero Parallax Ambient Glow Orbs
      gsap.to(".hero-ambient-orb-1", {
        y: 120,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".hero-ambient-orb-2", {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // 5. Unified Section-by-Section Choreography
      // Every section animates as a complete unit: Header + Cards/Content together
      const sections = document.querySelectorAll<HTMLElement>(
        'section[data-animate="section"]'
      );

      sections.forEach((section) => {
        const header = section.querySelector<HTMLElement>(
          '[data-animate="header"]'
        );
        const cards = section.querySelectorAll<HTMLElement>(
          '[data-animate="card"]'
        );
        const contents = section.querySelectorAll<HTMLElement>(
          '[data-animate="content"]'
        );

        const sectionTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            toggleActions: "play none none none",
          },
          defaults: { ease: "power3.out" },
        });

        // Step 1: Section Header (Title + Subtitle) lifts in
        if (header) {
          sectionTl.fromTo(
            header,
            { opacity: 0, y: 35 },
            { opacity: 1, y: 0, duration: 0.85 }
          );
        }

        // Step 2: Content block if present (e.g. narrative or rush banner)
        if (contents.length > 0) {
          sectionTl.fromTo(
            contents,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.85, stagger: 0.1 },
            "-=0.5"
          );
        }

        // Step 3: Cards cascade up in a staggered wave
        if (cards.length > 0) {
          sectionTl.fromTo(
            cards,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              stagger: 0.14,
              clearProps: "transform", // clears transform on complete so hover effects remain crisp!
            },
            header ? "-=0.5" : 0 // overlaps with header reveal so it flows naturally
          );
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} aria-hidden="true">
      {/* Subtle Scroll Progress Indicator Bar at the very top */}
      <div
        ref={progressBarRef}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-secondary to-primary z-[60] origin-left scale-x-0 pointer-events-none"
      />
    </div>
  );
}
