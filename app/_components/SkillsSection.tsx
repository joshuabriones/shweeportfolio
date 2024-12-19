"use client";

import H1 from "./H1";
import { IconCloud } from "../_components/ magicui/IconCloud";

export default function SkillsSection() {
  const skills = {
    html5: "HTML5",
    css3: "CSS3",
    tailwindcss: "TailwindCSS",
    javascript: "JavaScript",
    typescript: "TypeScript",
    react: "React.js",
    nextdotjs: "Next.js",
    nodedotjs: "Node.js",
    express: "Express.js",
    springboot: "SpringBoot",
    mongodb: "MongoDB",
    postgresql: "PostgreSQL",
    mysql: "MySQL",
    prisma: "Prisma",
    python: "Python",
    firebase: "Firebase",
    vercel: "Vercel",
    git: "Git",
    github: "GitHub",
    figma: "Figma",
    webflow: "Webflow",
  };

  const gradients = {
    html5: "linear-gradient(90deg, #E34F26, #F06529)",
    css3: "linear-gradient(90deg, #264DE4, #2965F1)",
    tailwindcss: "linear-gradient(90deg, #38BDF8, #0EA5E9)",
    javascript: "linear-gradient(90deg, #F7DF1E, #FFD700)",
    typescript: "linear-gradient(90deg, #007ACC, #3178C6)",
    react: "linear-gradient(90deg, #61DAFB, #21A1F1)",
    nextdotjs: "linear-gradient(90deg, #FFFFFF, #CCCCCC)", // Light gray for visibility
    nodedotjs: "linear-gradient(90deg, #339933, #5FAF4D)",
    express: "linear-gradient(90deg, #FFFFFF, #AAAAAA)", // Light gray for visibility
    mongodb: "linear-gradient(90deg, #47A248, #4DB33D)",
    prisma: "linear-gradient(90deg, #FFFFFF, #BBBBBB)", // Light gray for visibility
    postgresql: "linear-gradient(90deg, #336791, #3E7DBB)",
    mysql: "linear-gradient(90deg, #4479A1, #00758F)",
    springboot: "linear-gradient(90deg, #6DB33F, #73C04F)",
    python: "linear-gradient(90deg, #3776AB, #FFD43B)",
    firebase: "linear-gradient(90deg, #FFCA28, #FFA000)",
    vercel: "linear-gradient(90deg, #FFFFFF, #CCCCCC)", // Light gray for visibility
    git: "linear-gradient(90deg, #F05032, #E94E31)",
    github: "linear-gradient(90deg, #FFFFFF, #CCCCCC)", // Light gray for visibility
    figma: "linear-gradient(90deg, #F24E1E, #A259FF)",
    webflow: "linear-gradient(90deg, #4353FF, #4A7CFF)",
  };

  const slugs = Object.keys(skills) as Array<keyof typeof skills>;

  return (
    <section
      className="w-full py-[160px] md:py-[300px] px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/bg-skills-section.png')" }}
    >
      <H1 label="Technical Skills" />

      <div
        id="section-skills"
        className="flex flex-col md:flex-row gap-10 items-center"
      >
        <div className="flex-1 text-white ">
          {" "}
          <div className="flex flex-wrap gap-4">
            {slugs.map((slug) => (
              <div
                key={slug}
                className="py-2 px-4 rounded-2xl text-center text-slate-300"
                style={{
                  border: `2px solid transparent`,
                  borderImage: `${gradients[slug]} 1`,
                  borderRadius: "20px",
                }}
              >
                {skills[slug]}
              </div>
            ))}
          </div>
        </div>
        <IconCloud iconSlugs={slugs} />
      </div>
    </section>
  );
}
