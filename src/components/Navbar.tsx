import { useState } from "react";

const navItems = ["Home", "About", "Projects", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <nav className="flex justify-end items-center px-8 py-4 fixed top-0 right-0 z-30">
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col items-center justify-center gap-1.5 h-10 w-10"
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

      {/* Right drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-20
        transform transition-transform duration-300 ease-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col gap-6 p-8 mt-20">
          {navItems.map((item, index) => (
            <li
              key={item}
              className={`transition-all duration-300 ease-out ${
                open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <a href="#" className="text-lg font-medium hover:text-blue-600">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Backdrop (optional but recommended) */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black z-10 transition-opacity duration-300
          ${open ? "opacity-30 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />
    </>
  );
};

export default Navbar;
