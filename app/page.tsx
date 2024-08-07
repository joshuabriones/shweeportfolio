"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./components/ui/tracing-beam";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

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
