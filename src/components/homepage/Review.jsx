"use client";
import { useEffect } from "react";

const GoogleReviews = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.sociablekit.com/google-reviews/widget.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="mt-5">
      <div className="text-center">
        <h2 className="pt-5 text-center text-3xl font-bold !leading-tight sm:text-4xl md:text-[45px] mb-10">
          Google Reviews
        </h2>
      </div>
      <div className="sk-ww-google-reviews" data-embed-id="25444062"></div>
    </div>
  );
};

export default GoogleReviews;
