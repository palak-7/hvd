"use client";
import React from "react";
import { useState } from "react";
import { data } from "./data";
import Image from "next/image";

const Gallery = () => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const filteredImages = data.filter((item) => {
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
    <div>
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
    </div>
  );
};

export default Gallery;
