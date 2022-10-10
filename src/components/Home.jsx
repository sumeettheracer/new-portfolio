import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Sumeet Biswas
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a fullstack developer{" "}
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700]">
          I am a fullstack developer (and occasionally designing) exceptional
          digital experiences. currently, Iam focused on Increasing my skill
          level on building responsive full-stack web applications
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex justify-between items-center hover:bg-pink-600 hover:border-pink-600 duration-300">
            <span>View Work</span>
            <span class="mx-2 group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
// image is to be added later remember that part...
export default Home;
