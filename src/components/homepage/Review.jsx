"use client"
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

  return <div className='sk-ww-google-reviews' data-embed-id='25444062'></div>;


  // <script src='https://widgets.sociablekit.com/google-reviews/widget.js' async defer></script>
};



export default GoogleReviews;
