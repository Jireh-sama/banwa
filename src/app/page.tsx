import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MeaningSection from "@/components/MeaningSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import ProcessSection from "@/components/ProcessSection";
import KeepsakeSection from "@/components/KeepsakeSection";
import CollaborationsSection from "@/components/CollaborationsSection";
import TimelineSection from "@/components/TimelineSection";
import SimulatorSection from "@/components/SimulatorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <HeroSection />
          <MeaningSection />
          <MissionVisionSection />
          <ProcessSection />
          <KeepsakeSection />
          <CollaborationsSection />
          <TimelineSection />
          <SimulatorSection />
          <TestimonialsSection />
          <FaqSection />
          <CtaSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
