import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md p-6 flex justify-between items-center">
      <span className="font-bold text-xl">Kai Portfolio</span>
      <ul className="flex gap-4">
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
