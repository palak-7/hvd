import React from "react";
import Image from "next/image";
const Offers = () => {
  return (
    <div>
      <h2 className=" mt-4 text-center mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
        New Offers
      </h2>
      <div className="lg:flex justify-center gap-3">
        <div className="lg:bg-primary p-3 flex justify-center">
          <Image
            src="/offers/of.jpeg"
            width={1000}
            height={1000}
            className="w-[300px] h-[300px]"
          />
        </div>
        <div className="lg:bg-primary p-3 flex justify-center">
          <Image
            src="/offers/off.jpeg"
            width={1000}
            height={1000}
            className="w-[300px] h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
