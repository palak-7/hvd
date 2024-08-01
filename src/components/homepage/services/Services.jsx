import Image from "next/image";
import React from "react";
import { servicesdata } from "@/data/servicesdata";
import Link from "next/link";
const Services = () => {
  return (
    <div className="mt-20 bg-gradient-to-br from-secondary/80 to-primary">
      {/* <Image
        src="/services/service-banner3.png"
        width={1000}
        height={1000}
        className="w-full object-cover"
      /> */}
      {/* <div className="bg-black absolute inset-0 opacity-40"></div> */}
      <div className="z-10">
        <div className="text-center">
          {/* <div className="flex justify-center mb-4">
            <div className="bg-secondary/20 text-secondary font-bold flex justify-center rounded-3xl">
              <h4 className="py-3 px-7">What We Provide</h4>
            </div>
          </div> */}
          <h2 className="pt-5 text-center text-3xl font-bold !leading-tight text-white sm:text-4xl md:text-[45px] mb-10">
            Our Services
          </h2>
        </div>
        <div className="lg:grid grid-cols-2 grid-rows-3 gap-5 pb-10">
          {servicesdata.map((s) => (
            <Link
              href="/"
              key={s.id}
              className="bg-white hover:scale-105 transform duration-300 flex lg:mx-20 mx-2 mb-3 lg:mb-0 shadow-lg shadow-gray-400 rounded-lg border-black border-2"
            >
              <Image
                src={`/services/${s.image}`}
                alt="service1"
                width={1000}
                height={1000}
                className="w-1/2 p-2 object-cover"
              />
              <div className="text-center my-3">
                <h1 className="text-xl font-bold">{s.name}</h1>
                <p className="mt-4">{s.short_desc}</p>
                {/* <div className="text-white mt-4 bg-primary rounded-lg mx-4 py-1">
                  Know More
                </div> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
