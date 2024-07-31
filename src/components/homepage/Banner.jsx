"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "animate.css";
import ScrollTrigger from "react-scroll-trigger";

const BannerWithOverlay = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <div className="relative">
      <Image
        src="/banner/banner-2.jpg"
        width={1000}
        height={1000}
        className="w-full h-[450px] object-cover"
        alt="banner"
      />
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 items-center">
        <ScrollTrigger
          onEnter={() => setAnimate(true)}
          onExit={() => setAnimate(false)}
        >
          <Image
            src="/banner/banner-content.png"
            width={1000}
            height={1000}
            className={`w-[80%] md:w-[480px] m-2 md:ml-20 h-[200px] md:h-[360px] ${
              animate && "animate__animated animate__fadeInUp animate__slow"
            }`}
            alt="banner content"
          />
          <div className="ml-4 mt-5 md:ml-24 md:mt-5 flex flex-col md:flex-row gap-3">
            <Link
              href="/"
              className="text-white bg-secondary p-3 rounded-lg border-white border-2 hover:bg-secondary/90"
            >
              Learn More
            </Link>
            <Link
              href="/"
              className="text-white bg-secondary p-3 rounded-lg border-white border-2 hover:bg-secondary/90"
            >
              Services
            </Link>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default BannerWithOverlay;
