"use client";

import { Vortex } from "./ui/vortex";

const Footer = () => {
  return (
    <footer className="text-white min-h-24  overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={200}
      />
    </footer>
  );
};

export default Footer;
