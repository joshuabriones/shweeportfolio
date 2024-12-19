"use client";

import { TracingBeam } from "./_components/ui/tracing-beam";

import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";
import SkillsSection from "./_components/SkillsSection";
import ProjectSection from "./_components/ProjectSection";
import ContactSection from "./_components/ContactSection";
import Footer from "./_components/Footer";

import Image from "next/image";
import { FloatingDock } from "./_components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandPnpm,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconPhone,
} from "@tabler/icons-react";

const LandingPage = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#section-home",
    },
    {
      title: "Skills",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#section-skills",
    },
    {
      title: "Projects",
      icon: (
        <IconBrandPnpm className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#section-works",
    },

    {
      title: "Contact",
      icon: (
        <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),

      href: "#section-contact",
    },
  ];

  return (
    <main>
      <HeroSection />
      <TracingBeam className="px-3">
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </TracingBeam>
      <Footer />

      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </main>
  );
};

export default LandingPage;
