import About from "@/components/homepage/About";
import Banner from "@/components/homepage/Banner";
import Doctors from "@/components/homepage/doctors/Doctors";
import Offers from "@/components/homepage/Offers";
import Packages from "@/components/homepage/Packages/Packages";
import GoogleReviews from "@/components/homepage/Review";
import Services from "@/components/homepage/services/Services";
import React from "react";

const page = () => {
  return (
    <div className="mt-[200px] overflow-x-hidden overflow-y-clip">
      <Banner />
      <About />
      <Offers />
      <Packages />
      <Doctors />
      <Services />
      <GoogleReviews />
    </div>
  );
};

export default page;
