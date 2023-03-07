import React, { useEffect, useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header>
      <nav className="flex items-center justify-between bg-slate-50 dark:bg-black p-6 border-b-2 border-black">
        <h1 className="text-2xl font-burtons text-blue-300 font-semibold">
          DevelopedByHS
        </h1>

        <ul className="flex items-center gap-8">
          <NavLink to="/">
            <li className="px-2 py-1.5 font-semibold font-burtons mx-1 bg-blue-400 text-white w-16 rounded-lg hover:bg-gradient-to-br from-purple-600 to-blue-500">
              Home
            </li>
          </NavLink>

          <NavLink to="/cart">
            <li className="px-2 py-1.5 font-semibold mx-1 font-burtons bg-blue-400 text-white w-16 rounded-lg hover:bg-gradient-to-br from-purple-600 to-blue-500">
              Cart
            </li>
          </NavLink>
        </ul>

        <BsMoonStarsFill
          onClick={() => setDarkMode(!darkMode)}
          className="text-2xl text-blue-300 hover:text-yellow-200"
        />
      </nav>
    </header>
  );
};
