import React from "react";
import Image from "next/image";

interface SkillCardProps {
  skill: {
    lang: string;

    icon: string;

    years: number;
  };
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="flex gap-5 items-center p-5 border border-l-0 border-t-0">
      <div>
        <Image src={skill.icon} alt={skill.lang} width={45} height={45} />
      </div>
      <div className="flex flex-col justify-between text-gray-500 font-light">
        <h3 className="text-lg">{skill.lang}</h3>
        <p className="text-sm ">{skill.years} years exp</p>
      </div>
    </div>
  );
};

export default SkillCard;
