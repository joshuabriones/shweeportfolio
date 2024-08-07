import React from "react";

const nav_data: { name: string; id: string }[] = [
  {
    name: "Home",
    id: "#section-home",
  },
  {
    name: "Skills",
    id: "#section-skills",
  },
  {
    name: "Works",
    id: "#section-works",
  },
  {
    name: "Contact",
    id: "#section-contact",
  },
];

const Navbar = () => {
  return (
    <nav className="z-50 flex flex-col justify-center items-center w-1/3 h-[50px] bg-white bg-opacity-5 rounded-lg fixed bottom-5 left-1/2 transform -translate-x-1/2">
      <ul className="flex items-center justify-between ">
        {nav_data.map((data) => (
          <li className="relative group">
            <a href={data.id} className="nav_link">
              {data.name}
            </a>
            <span className="nav_link_hover"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
