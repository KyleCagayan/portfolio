import { useState } from "react";

const navItems = ["Home", "About", "Projects", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-end items-center bg-gray-100 px-8 py-4">
      {/* Inline animated menu */}
      <ul className="flex items-center gap-6 mr-4">
        {navItems.map((item, index) => (
          <li
            key={item}
            className={`transform transition-all duration-500 ease-out ${
              open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <a href="#" className="hover:text-blue-600 font-medium">
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col items-center justify-center gap-1.5 h-10 w-10 z-20"
      >
        <span
          className={`h-0.5 w-6 bg-black transition-all duration-300 ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-black transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-black transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>
    </nav>
  );
};

export default Navbar;
