"use client";

import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";

const projects = [
  {
    title: "L∞kingfor",
    description:
      "A dynamic job portal featuring user roles, job listings, and comprehensive application management.",
    image: "/assets/lookingfor_thumbnail.png",
    url: "https://lookingfor.vercel.app/",
    planet: "/assets/purple_planet.png",
  },
  {
    title: "NFT Marketplace",
    description:
      "A decentralized marketplace for buying, selling, and trading NFTs.",
    image: "/assets/nft_thumbnail.png",
    url: "https://joshriones.github.io/nft-react-project/",
    planet: "/assets/blue_planet.png",
  },

  {
    title: "Guess D' Pokemon",
    description:
      "A fun and interactive Pokemon guessing game built with React.",
    image: "/assets/pokemon_thumbnail.png",
    url: "https://joshriones.github.io/guess-D-pokemon/",
    planet: "/assets/yellow_planet.png",
  },
  {
    title: "Woopfu",
    description: "A passion project for shopping bed mattresses online.",
    image: "/assets/woopfu_thumbnail.png",
    url: "https://joshriones.github.io/woopfu.github.io/",
    planet: "/assets/greenplanet.png",
  },
];

export default function Carousel() {
  useEffect(() => {
    const slider = new Glide(".glide-03", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 4,
      startAt: 1,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Carousel with indicators & controls inside --> */}
      <div className="glide-03 relative w-full mt-14">
        {/*    <!-- Slides --> */}

        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {projects.map((project, index) => (
              <li
                key={index}
                className="w-full h-[560px] relative group cursor-pointer overflow-hidden bg-transparent"
                style={{ position: "relative" }}
              >
                {/* Pseudo-element for background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-out bg-op"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    opacity: 0.1, // Low opacity by default
                  }}
                ></div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full h-full flex items-end relative"
                >
                  <img
                    src={project.planet}
                    className="z-20 w-[200px] h-[200px] animate-pulse absolute top-0 group-hover:-top-20 left-1/2 transform -translate-x-1/2 rounded-full transition-all duration-300 ease-out"
                    alt={project.title}
                  />

                  <div className="px-6 py-8">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-white text-lg font-semibold">
                        {project.title}
                      </h3>
                      <Image
                        src={"/icons/arrow-slant.png"}
                        width={18}
                        height={18}
                      />
                    </div>
                    <p className="text-slate-300 text-sm">
                      {project.description}
                    </p>
                  </div>
                </a>

                {/* Hover effect */}
                <style jsx>{`
                  li:hover div {
                    opacity: 1; // More clear on hover
                  }
                `}</style>
              </li>
            ))}

            {/* {projects.map((project, index) => (
              <li
                key={index}
                className="w-full h-full flex items-center justify-center"
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full h-full flex items-center justify-center"
                >
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-4 bg-wuiSlate-700/90 rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <h3 className="text-white text-lg font-semibold">
                      {project.title}
                    </h3>
                    <p className="text-white text-sm">{project.description}</p>
                  </div>
                </a>
              </li>
            ))} */}
          </ul>
        </div>
        {/*    <!-- Controls --> */}

        {/*    <!-- Indicators --> */}
        <div
          className="absolute bottom-0 flex w-full items-center justify-center gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="group p-4"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
        </div>
      </div>
      {/*<!-- End Carousel with indicators & controls inside --> */}
    </>
  );
}
