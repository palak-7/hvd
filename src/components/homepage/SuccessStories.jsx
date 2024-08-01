import React from "react";
import Image from "next/image";
const SuccessStories = () => {
  return (
    <div className="mt-20">
      <h1 className="text-center text-primary lg:text-7xl text-5xl tracking-widest font-extrabold mb-3">
        SUCCESS
      </h1>
      <h2 className="text-center lg:text-7xl text-4xl text-secondary tracking-widest font-extrabold mb-10">
        STORIES
      </h2>
      <div className="mx-10 lg:grid grid-cols-3">
        <div className="grid grid-cols-2 grid-rows-2 bg-secondary/90 p-3 lg:pr-20 gap-3">
          <div className="bg-white p-2">
            <Image
              src="/success/s1.jpeg"
              width={100}
              height={100}
              className="w-full"
            />
          </div>
          <div className="bg-white p-2">
            <Image
              src="/success/s1.jpeg"
              width={100}
              height={100}
              className="w-full"
            />
          </div>
          <div className="bg-white p-2">
            <Image
              src="/success/s1.jpeg"
              width={100}
              height={100}
              className="w-full"
            />
          </div>
        </div>
        <div className="col-span-2 bg-white lg:-translate-x-9 my-10 lg:p-10 p-3 rounded-md border-2 leading-loose text-lg">
          56 yr old female presented with breast lump for 2 months. It was
          painless. She had another palpable lesion in left axilla. Her
          ultrasound breast and mammography suggested suspicious for malignancy
          BIRADS 4c with suspicious nodes. She was advised biopsy from breast
          mass and fnac from node.
          <br /> We did both under ultrasound guidance. The images depict
          precise placement of needle within the mass and lymph node.
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
