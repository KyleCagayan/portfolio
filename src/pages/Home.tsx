import React from "react";
import profilePic from "../assets/kai_portrait.jpg";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-20">
      <img
        src={profilePic}
        alt="Profile"
        className="w-32 h-32 rounded-full mb-4"
      />
      <pre className="p-6 text-3xl font-sans [font-family:inherit]">
        <code className="font-sans [font-family:inherit]">
          <span className="text-purple-400">&lt;h1&gt;</span>
          <span className="text-black">Hi, I'm Kyle Cagayan</span>
          <span className="text-purple-400">&lt;/h1&gt;</span>
          {"\n"}
          <span className="text-purple-400">&lt;p&gt;</span>
          <span className="text-black">and I'm a full-stack software developer</span>
          <span className="text-purple-400">&lt;/p&gt;</span>
        </code>
      </pre>
          </div>
        );
      };

export default Home;
