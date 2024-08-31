import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="h-[75vh] flex flex-col md:flex-row items-center justify-center bg-green-900 text-white">
      <div className="w-full mb-12 md:mb-0 lg:w-3/6 flex flex-col items-center lg:items-start justify-center">
        <h1 className="text-4xl lg:text-6xl font-semibold text-green-50 text-center lg:text-left">
        Dive into a 3D 
        </h1>
        <p className="mt-4 md:mb-0 lg:text-xl text-green-200 font-thin text-center lg:text-left typing-effect">
        Explore ancient remedies, mystical herbs, and the secrets of nature in our verdant collection of medicinal volumes
        </p>
        <div className="mt-8">
          <Link to="/all-books" className="text-green-50 text-xl lg:text-2xl font-semibold border border-green-200 px-10 py-3 hover:bg-green-700 rounded-full">
            Explore Herbs
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-2/5 h-auto flex items-center justify-center lg:ml-20 lg:pl-10 p-4">
        <img
          src="/rep1.png"
          alt="hero"
          className="w-full h-auto lg:w-auto lg:h-[100%] object-contain"
        />
      </div>
    </div>
  );
}

export default Hero;
