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
      <h1 className="text-4xl font-bold mb-2">Kyle Cagayan</h1>
      <p className="text-lg text-gray-700 mb-4">
        Software Engineer | Backend & Full Stack Developer
      </p>
    </div>
  );
};

export default Home;
