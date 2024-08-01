"use client";

import React, { useEffect, useState } from "react";
import { blogs } from "../../services/blogs";
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  const [blogfetch, setBlogfetch] = useState([]);

  useEffect(() => {
    async function getBlog() {
      const result = await blogs();
      if (result.success) {
        setBlogfetch(result.result);
      } else {
        console.log(result.message);
      }
    }
    getBlog();
  }, []);

  const selectedBlogs = blogfetch.slice(0, 3);

  return (
    <div className="relative">
      <div className="relative h-96">
        <Image
          src="/services/service-banner.jpg"
          alt="blog-service"
          className="w-full object-cover"
          width={1000}
          height={1000}
        />
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      </div>

      <div className="relative lg:-mt-40 -mt-[330px] z-10">
        <h2 className="text-center text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[45px] mb-10">
          Check Out the Latest Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-5 lg:mt-10">
          {selectedBlogs.map((b) => (
            <Link
              href={"/"}
              key={b.id}
              className="m-10 border p-5 bg-white bg-opacity-90 rounded-lg shadow-lg transform duration-300 hover:-translate-y-3"
            >
              <Image
                src={`/blogs/${b?.image}`}
                width={1000}
                height={1000}
                className="w-full rounded-t-lg"
                alt={b?.title}
              />
              <div className="mt-2 font-bold text-2xl text-black">
                {b?.title}
              </div>
              <p
                className="line-clamp-3 text-black"
                dangerouslySetInnerHTML={{ __html: b?.description }}
              ></p>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mb-4">
          <Link
            href="/blogs"
            className="bg-primary p-3 rounded-lg text-white hover:scale-105 transition transform duration-300"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
