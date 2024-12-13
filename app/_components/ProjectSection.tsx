"use client";

import H1 from "./H1";
import { Vortex } from "./ui/vortex";
import { LayoutGrid } from "./ui/layout-grid";
// import Carousel from "./Carousel";

export default function ProjectSection() {
  return (
    <section
      id="section-works"
      className="w-full h-screen px-4 mb-[160px] md:mb-[300px] bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/bg-works-section.png')" }}
    >
      <H1 label="Projects" />

      <LayoutGrid cards={projects} />
      {/* <Carousel /> */}
    </section>
  );
}

const Skeleton = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <div className="flex flex-col">
      <p className="font-bold md:text-4xl text-xl text-white">{title}</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {description}
      </p>
      <div className="flex justify-end mt-auto">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-base text-black px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-50 transition-background-all duration-300 ease-in-out"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

const projects = [
  {
    id: 1,
    content: (
      <Skeleton
        title="WellTalk"
        description="WellTalk is a web-based platform designed to optimize the appointment process for CIT-U's guidance counseling department. "
        link="https://well-talk-ten.vercel.app/"
      />
    ),
    className: "md:col-span-2",
    thumbnail: "/assets/welltalkwelltalk.png",
  },
  {
    id: 2,
    content: (
      <Skeleton
        title="Rada Diha Badi"
        description="An AI recipe generator that provides a list of ingredients and instructions for a dish."
        link="https://rada-diha-badi-recipe.vercel.app/"
      />
    ),
    className: "col-span-1",
    thumbnail: "/assets/radarada.png",
  },
  {
    id: 3,
    content: (
      <Skeleton
        title="L∞kingfor"
        description="A dynamic job portal featuring user roles, job listings, and comprehensive application management."
        link="https://lookingfor.vercel.app/"
      />
    ),
    className: "col-span-1",
    thumbnail: "/assets/lflf.png",
  },
  {
    id: 4,
    content: (
      <Skeleton
        title="NFT Marketplace"
        description="A decentralized marketplace for buying, selling, and trading NFTs."
        link="https://joshriones.github.io/nft-react-project/"
      />
    ),
    className: "md:col-span-2",
    thumbnail: "/assets/nftnft.png",
  },
];

// const projects = [
//   {
//     title: "L∞kingfor",
//     description:
//       "A dynamic job portal featuring user roles, job listings, and comprehensive application management.",
//     image: "/assets/lookingfor_thumbnail.png",
//     url: "https://lookingfor.vercel.app/",
//     planet: "/assets/purple_planet.png",
//   },
//   {
//     title: "NFT Marketplace",
//     description:
//       "A decentralized marketplace for buying, selling, and trading NFTs.",
//     image: "/assets/nft_thumbnail.png",
//     url: "https://joshriones.github.io/nft-react-project/",
//     planet: "/assets/blue_planet.png",
//   },

//   {
//     title: "Guess D' Pokemon",
//     description:
//       "A fun and interactive Pokemon guessing game built with React.",
//     image: "/assets/pokemon_thumbnail.png",
//     url: "https://joshriones.github.io/guess-D-pokemon/",
//     planet: "/assets/yellow_planet.png",
//   },
//   {
//     title: "Woopfu",
//     description: "A passion project for shopping bed mattresses online.",
//     image: "/assets/woopfu_thumbnail.png",
//     url: "https://joshriones.github.io/woopfu.github.io/",
//     planet: "/assets/greenplanet.png",
//   },
// ];
