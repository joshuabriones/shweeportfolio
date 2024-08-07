"use client";

import React from "react";
import Image from "next/image";

interface H1Props {
  label: string;
}

const H1: React.FC<H1Props> = ({ label }) => {
  return (
    <h1 className="text-white text-4xl font-regular relative inline">
      <Image
        src={"/assets/header-circle.png"}
        width={80}
        height={80}
        alt="sdsds"
        className="absolute -top-5 -left-8"
      />
      {label}
      <div className="h-[2px] w-14 bg-gradient-to-r from-[#FDC898] to-[#172eff7f] absolute -bottom-1 right-0 rounded-lg" />
    </h1>
  );
};

export default H1;
