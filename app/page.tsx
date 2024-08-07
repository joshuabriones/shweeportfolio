"use client";

import { TracingBeam } from "./_components/ui/tracing-beam";

import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";
import SkillsSection from "./_components/SkillsSection";
import ProjectSection from "./_components/ProjectSection";
import ContactSection from "./_components/ContactSection";
import Footer from "./_components/Footer";

const LandingPage = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TracingBeam className="px-3">
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </TracingBeam>
      <Footer />
    </main>
  );
};

export default LandingPage;
