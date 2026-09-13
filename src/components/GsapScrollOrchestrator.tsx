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
      const heroTimeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      const heroBadge = document.querySelector("#hero-badge");
      const heroHeading = document.querySelector("#hero-heading");
      const heroSubheading = document.querySelector("#hero-subheading");
      const heroCta = document.querySelector("#hero-cta-group");
      const heroTrust = document.querySelector("#hero-trust-pills");
      const heroVisual = document.querySelector("#hero-visual");

      if (heroHeading) {
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
        y: 140,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".hero-ambient-orb-2", {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // 5. Generic Section Header Reveal
      const sectionHeadings = document.querySelectorAll("section h2");
      sectionHeadings.forEach((heading) => {
        // Skip hero since it's already animated
        if (heading.id === "hero-heading" || heading.closest("#hero")) return;

        gsap.fromTo(
          heading,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 6. Section 1: MeaningSection (#meaning)
      const meaningNarrative = document.querySelector("#meaning .lg\\:col-span-5");
      if (meaningNarrative) {
        gsap.fromTo(
          meaningNarrative,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#meaning",
              start: "top 78%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const meaningCards = document.querySelectorAll("#meaning .lg\\:col-span-7 > div");
      if (meaningCards.length > 0) {
        gsap.fromTo(
          meaningCards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.18,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#meaning",
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 7. Section 2: Mission & Vision Section (#mission)
      const missionPillars = document.querySelectorAll("#mission .grid > div");
      if (missionPillars.length > 0) {
        gsap.fromTo(
          missionPillars,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#mission",
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 8. Section 3: Process Section (#process - 4 Steps)
      const processSteps = document.querySelectorAll("#process .grid > div");
      if (processSteps.length > 0) {
        gsap.fromTo(
          processSteps,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#process",
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 9. Section 4: Keepsake Collection (#collection)
      const keepsakeCards = document.querySelectorAll("#collection .grid > div");
      if (keepsakeCards.length > 0) {
        gsap.fromTo(
          keepsakeCards,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.18,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#collection",
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 10. Section 5: Collaborations Section (#collaborations)
      const collabArtisanImage = document.querySelector(
        "#collaborations .lg\\:col-span-5"
      );
      if (collabArtisanImage) {
        gsap.fromTo(
          collabArtisanImage,
          { opacity: 0, scale: 0.96, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#collaborations",
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const collabAddonCards = document.querySelectorAll(
        "#collaborations .lg\\:col-span-7 .grid > div"
      );
      if (collabAddonCards.length > 0) {
        gsap.fromTo(
          collabAddonCards,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#collaborations",
              start: "top 72%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 11. Section 6: Timeline Section (#timeline)
      const timelineMilestones = document.querySelectorAll(
        "#timeline .grid.grid-cols-1.md\\:grid-cols-2 > div"
      );
      if (timelineMilestones.length > 0) {
        gsap.fromTo(
          timelineMilestones,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.14,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#timeline",
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const timelineRushBanner = document.querySelector(
        "#timeline .bg-surface-container-highest"
      );
      if (timelineRushBanner) {
        gsap.fromTo(
          timelineRushBanner,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: timelineRushBanner,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 12. Section 7: Simulator Section (#simulator)
      const simulatorBox = document.querySelector(
        "#simulator .bg-surface-container-lowest"
      );
      if (simulatorBox) {
        gsap.fromTo(
          simulatorBox,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#simulator",
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 13. Section 8: Testimonials Section (#stories)
      const testimonialCards = document.querySelectorAll("#stories .grid > div");
      if (testimonialCards.length > 0) {
        gsap.fromTo(
          testimonialCards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.16,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#stories",
              start: "top 78%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 14. Section 9: FAQ Accordion (#faq)
      const faqAccordion = document.querySelector("#faq [data-orientation]");
      if (faqAccordion) {
        gsap.fromTo(
          faqAccordion,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#faq",
              start: "top 78%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 15. Section 10: Final CTA Section (#cta)
      const ctaCard = document.querySelector("#cta .max-w-4xl");
      if (ctaCard) {
        gsap.fromTo(
          ctaCard,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#cta",
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
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
