import React from "react";
import hero from "../../assets/heroModel.png";

const Hero = () => {
  return (
    <>
      <div className="relative flex items-center justify-center w-full min-h-screen p-4 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container flex flex-col items-center justify-around w-full gap-12 mx-auto md:flex-row">
          <div className="flex flex-col items-center justify-center space-y-6 md:items-start left">
            <h1 className="text-5xl font-bold text-center text-gray-900 md:text-7xl md:text-left">
              Discover Your
              <span className="block mt-2 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                Perfect Style
              </span>
            </h1>
            <p className="max-w-lg mt-4 text-xl text-center text-gray-600 md:text-2xl md:text-left">
              Explore our curated collections from premium brands, designed to
              elevate your wardrobe with timeless elegance.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 text-lg font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/25">
                Shop Now
              </button>
              <button className="px-8 py-4 text-lg font-medium text-gray-700 transition-all duration-300 border rounded-lg hover:bg-gray-50">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative w-full right md:w-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl" />
            <img
              src={hero}
              alt="Fashion Model"
              className="relative w-full max-w-[600px] mx-auto transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
