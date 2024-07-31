"use client";

import React, { useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import { data } from "./data";
const Carousel = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <GrNext color="black" />,
    prevArrow: <GrPrevious color="black" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <div className="mx-10">
      <Slider {...settings}>
        {data?.map((d) => (
          <div className="p-5" key={d.id}>
            <div className="border-2 hover:shadow-lg transform transition duration-300 translate-y-3">
              <PricingBox
                packageName={d.name}
                price={d.price}
                cancelled={d.cancelled}
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
      </Slider>
    </div>
  );
};

export default Carousel;
