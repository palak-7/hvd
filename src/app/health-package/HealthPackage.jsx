import React from "react";
import { data } from "@/components/homepage/Packages/data";
import PricingBox from "@/components/homepage/Packages/PricingBox";
import Image from "next/image";

const HealthPackage = () => {
  return (
    <div className="mt-[250px]">
      <h2 className="mt-10 text-center text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
        Our Health Packages
      </h2>
      <div className="grid grid-cols-3">
        {data?.map((d) => (
          <div className="p-5" key={d.id}>
            <div className="border-2 hover:shadow-lg transform transition duration-500 hover:-translate-y-3">
              <PricingBox
                packageName={d.name}
                price={d.price}
                cancelled={d.cancelled}
                url={d.url}
              >
                <Image
                  src={d.image}
                  width={1000}
                  height={1000}
                  className="w-full h-[300px] object-cover"
                />
                {/* <OfferList text="All UI Components" status="active" />
              <OfferList text="Use with Unlimited Projects" status="active" />
              <OfferList text="Commercial Use" status="active" />
              <OfferList text="Email Support" status="active" />
              <OfferList text="Lifetime Access" status="inactive" />
              <OfferList text="Free Lifetime Updates" status="inactive" /> */}
              </PricingBox>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthPackage;
