import React from "react";
import profilePic from "../assets/kai_portrait.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <div className="m-8">
      {/* title row */}
      <div className="flex w-full justify-between md:flex-row md:items-center">
        <p className="w-1/2 text-gray-600 font-semibold"><span className="text-gray-700">Kyle Cagayan</span> is currently open to new positions</p>
        <div className="flex gap-4 items-center">
          <a
            href="https://github.com/KyleCagayan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/kaicagayan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
        </div>

      </div>
      {/* horizontal line */}
      <div className="mt-2 h-0.5 bg-[#C2D8B9] w-full" />

      {/* content */}
      <div className="flex p-10 flex-col items-center justify-center md:flex-row">
        <div className="flex-2 md:w-2/5 p-4">
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full rounded-full mb-4 border-4 border-[#C2D8B9] object-cover"
          />
        </div>
        <div className="flex-3 md:w-3/5 p-4">
          <p className="text-m md:text-xl leading-relaxed">
              <span className="font-bold font-">Kyle Cagayan</span>.  
          </p>
          <p className="text-m md:text-gray-600 leading-relaxed">
            I’m a full-stack software engineer who loves building clean, maintainable applications and solving problems that actually matter.  
            I’m comfortable jumping into new technologies, working across teams, and delivering results that make an impact.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
