"use client";

import H1 from "./H1";
import Carousel from "./Carousel";

export default function ProjectSection() {
  return (
    <section
      id="section-works"
      className="w-full px-4 py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/bg-works-section.png')" }}
    >
      <H1 label="Projects" />
      <Carousel />
    </section>
  );
}
