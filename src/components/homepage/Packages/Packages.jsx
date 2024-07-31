import React from "react";
import Carousel from "./Carousel";
import Image from "next/image";
const Packages = () => {
  return (
    <div className="mb-10">
      <h2 className="mt-10 text-center text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
        Our Health Packages
      </h2>
      <Carousel />

      {/* <div class="transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-blue shadow-xl transition duration-300 hover:translate-y-3">
        <div class="flex h-full justify-center items-center">
          <span class="font-bold text-yellow-500">Translate</span>
        </div>
      </div> */}
    </div>
  );
};

export default Packages;
