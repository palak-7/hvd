import React from "react";
import Image from "next/image";
import { data } from "./data";
const Doctors = () => {
  return (
    <div>
      <div className="mt-20">
        <div className="flex justify-center">
          <div className="bg-secondary/20 text-secondary font-bold flex justify-center rounded-3xl">
            <h4 className="py-3 px-7">Team</h4>
          </div>
        </div>
        <h2 className="text-center text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          Meet Our Doctors
        </h2>
      </div>
      <div className="lg:grid grid-cols-3">
        {data.map((d) => (
          <div key={d.id} className="flex justify-center">
            <div className="border m-10 rounded-md p-10 bg-secondary/5 hover:-translate-y-2 transform transition duration-300 hover:shadow-xl">
              <div className="bg-primary flex justify-center rounded-2xl p-4">
                <Image
                  src={d.image}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl mt-3">{d.name}</div>
                <div className="font-semibold text-lg text-secondary mt-3">
                  {d.post}
                </div>
                <div className="font-semibold text-md mt-3">{d.education}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
