"use client";

import { data, globeConfig } from "../../data/globedata";
import dynamic from "next/dynamic";
// import { World } from "./ui/globe";
const DynamicWorld = dynamic(
  () => import("./ui/globe").then((mod) => mod.World),
  { ssr: false }
);

import { SparklesCore } from "./ui/sparkles";
import { FlipWords } from "./ui/flip-words";

import Image from "next/image";

const purple_planet_position = [
  "absolute top-[10%] left-1/3 animate-spin-slow",
  "absolute top-[18%] md:right-[30%] animate-spin-slow right-[10%]",
  "absolute md:bottom-[25%] bottom-[20%] md:right-[32%] animate-spin-slow right-[16%]",
  "absolute bottom-[15%] left-[26%] animate-spin-slow",
];

const words = ["Hello.", "Bonjour.", "Ohayõ.", "Hola."];

const HeroSection = () => {
  return (
    <section id="section-home" className="w-full h-screen inset-0 relative">
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={50}
        className="w-full h-full absolute top-0 left-0"
        particleColor="#FFFFFF"
      />

      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[328px] h-[328px] relative flex justify-center items-center">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[url('/assets/ring.png')] bg-cover animate-spin-slow" />
          {/* <World globeConfig={globeConfig} data={data} /> */}
          <DynamicWorld globeConfig={globeConfig} data={data} />
        </div>
      </div>

      <div className="absolute top-1/3 left-[15%] font-extralight w-[420px]">
        <h1 className="">Hello.</h1>
        <FlipWords words={words} />
        <p className="text-lg text-white font-medium mt-3">
          I'm Joshua E. Briones
        </p>
        <p className="text-base text-rgba-white-50">
          A web developer with a focus on frontend development and a growing
          expertise in backend technologies. I constantly strive to enhance my
          skills and stay updated with the latest industry trends.
        </p>
      </div>

      {/* Purple Planets SVG */}
      {purple_planet_position.map((data, index) => (
        <Image
          key={index}
          src={"/assets/purple-planet.svg"}
          alt="Purple planet"
          width={36}
          height={36}
          className={data}
        />
      ))}
    </section>
  );
};

export default HeroSection;
