"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

const page = () => {
  const Images = [
    {
      id: 1,
      image: "/gallery/img1.png",
      category: "HVD",
    },
    {
      id: 2,
      image: "/gallery/img2.png",
      category: "HVD",
    },
    {
      id: 3,
      image: "/gallery/img3.png",
      category: "HVD",
    },
    {
      id: 4,
      image: "/gallery/img4.png",
      category: "Camps",
    },
    {
      id: 5,
      image: "/gallery/img5.png",
      category: "Camps",
    },
    {
      id: 6,
      image: "/gallery/img6.png",
      category: "Camps",
    },
    {
      id: 7,
      image: "/gallery/img7.jpeg",
      category: "HVD",
    },
    {
      id: 8,
      image: "/gallery/img8.png",
      category: "HVD",
    },
    {
      id: 9,
      image: "/gallery/img9.jpeg",
      category: "City Scan",
    },
    {
      id: 10,
      image: "/gallery/img10.jpeg",
      category: "City Scan",
    },
    {
      id: 11,
      image: "/gallery/img11.png",
      category: "HVD",
    },
    {
      id: 12,
      image: "/gallery/img12.jpeg",
      category: "Camps",
    },
    {
      id: 13,
      image: "/gallery/img13.png",
      category: "HVD",
    },
    {
      id: 14,
      image: "/gallery/img14.png",
      category: "Camps",
    },
    {
      id: 15,
      image: "/gallery/img15.jpeg",
      category: "City Scan",
    },
    {
      id: 16,
      image: "/gallery/img16.jpeg",
      category: "Camps",
    },
    {
      id: 17,
      image: "/gallery/img17.jpeg",
      category: "HVD",
    },
    {
      id: 18,
      image: "/gallery/img18.jpeg",
      category: "HVD",
    },
    {
      id: 19,
      image: "/gallery/img19.png",
      category: "Camps",
    },
    {
      id: 20,
      image: "/gallery/img20.png",
      category: "Camps",
    },
    {
      id: 21,
      image: "/gallery/img21.jpeg",
      category: "HVD",
    },
    {
      id: 22,
      image: "/gallery/img22.jpeg",
      category: "Camps",
    },
  ];

  const [filter, setFilter] = useState("All");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const filteredImages = Images.filter((item) => {
    if (filter === "All") return true;
    return item.category === filter;
  });
  const buttonClasses = (active) =>
    `text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:ring-4 focus:outline-none ${
      active
        ? "bg-blue-800 focus:ring-blue-800"
        : "bg-blue-700 hover:bg-green-600 focus:bg-green-600 dark:bg-green-600 dark:bg-green-600 dark:focus:bg-green-600"
    }`;
  return (
    <div className="mt-[200px]">
      <div className="text-center mb-8">
        <button
          type="button"
          className={buttonClasses(filter === "All")}
          onClick={() => handleFilterChange("All")}
        >
          All Images
        </button>

        <button
          type="button"
          className={buttonClasses(filter === "Camps")}
          onClick={() => handleFilterChange("Camps")}
        >
          Camps
        </button>

        <button
          type="button"
          className={buttonClasses(filter === "City Scan")}
          onClick={() => handleFilterChange("City Scan")}
        >
          City Scan
        </button>

        <button
          type="button"
          className={buttonClasses(filter === "HVD")}
          onClick={() => handleFilterChange("HVD")}
        >
          HVD
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-4 grid-cols-1">
        {filteredImages.map((item) => (
          <div
            key={item.id}
            className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={item.image}
              width={200}
              height={300}
              alt={`Image ${item.id}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
