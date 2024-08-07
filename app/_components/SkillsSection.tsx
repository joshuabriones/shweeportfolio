"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import H1 from "./H1";
import SkillCard from "./SkillCard";

export default function SkillsSection() {
  const skills = [
    {
      lang: "HTML",
      icon: "/icons/html.svg",
      years: 4,
    },
    {
      lang: "CSS 3",
      icon: "/icons/css3-plain.svg",
      years: 4,
    },
    {
      lang: "JAVASCRIPT",
      icon: "/icons/javascript-original.svg",
      years: 4,
    },
    {
      lang: "TYPESCRIPT",
      icon: "/icons/typescript-plain.svg",
      years: 2,
    },
    {
      lang: "REACTJS",
      icon: "/icons/react-original.svg",
      years: 3,
    },
    {
      lang: "NEXTJS",
      icon: "/icons/nextjs-original.svg",
      years: 2,
    },
    {
      lang: "TAILWINDCSS",
      icon: "/icons/html.svg",
      years: 3,
    },
    {
      lang: "MYSQL",
      icon: "/icons/mysql-plain.svg",
      years: 3,
    },
    {
      lang: "POSTGRESSQL",
      icon: "/icons/postgresql-plain.svg",
      years: 3,
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="section-skills"
      className="w-full px-4 py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/bg-skills-section.png')" }}
    >
      <H1 label="Personal Skills" />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 mt-20"
      >
        {skills.map((skill) => (
          <SkillCard key={skill.lang} skill={skill} />
        ))}
      </motion.div>
    </section>
  );
}
