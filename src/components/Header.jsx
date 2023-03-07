import React from "react";
import { BsMoonStarsFill } from "react-icons/bs";

export const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between bg-black p-6">
        <h1 className="text-2xl font-burtons text-blue-300 font-semibold">
          DevelopedByHS
        </h1>

        <ul className="flex items-center gap-8">
          <li className="px-2 py-1.5 font-semibold font-burtons mx-1 bg-blue-400 text-white w-16 rounded-lg hover:bg-gradient-to-br from-purple-600 to-blue-500">
            Home
          </li>
          <li className="px-2 py-1.5 font-semibold mx-1 font-burtons bg-blue-400 text-white w-16 rounded-lg hover:bg-gradient-to-br from-purple-600 to-blue-500">
            Cart
          </li>
        </ul>

        <BsMoonStarsFill className="text-2xl text-blue-300 hover:text-yellow-200" />
      </nav>
    </header>
  );
};
