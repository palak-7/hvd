import React from "react";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import Link from "next/link";

const Top = () => {
  return (
    <div>
      <div className="ticker-container">
        <marquee behavior="scroll" direction="left" scrollamount="4">
          <span className=" tracking-wider font-bold">
            Free Home Sample Collection
          </span>
          <span>&emsp;|&emsp;</span>
          <span className=" tracking-wider font-bold">
            Book Appointment Now - +91 9311883059
          </span>
          <span>&emsp;|&emsp;</span>
          <span className=" tracking-wider font-bold">
            Upto 15% discount on all tests (First order offer).
          </span>
          <span>&emsp;|&emsp;</span>
          <span className=" tracking-wider font-bold">
            Extra 10% discount on all tests for Senior Citizens
          </span>
          <span>&emsp;|&emsp;</span>
          <span className=" tracking-wider font-bold">
            Free Doctor Consultation with Health Packages (By Appointment)
          </span>
        </marquee>
      </div>
      <div className="bg-primary text-white p-3 lg:flex justify-around">
        {/* social links */}
        <div className="flex justify-center lg:mb-0 mb-2 items-center">
          <Link
            href="https://www.instagram.com/healthvistadiagnostics/"
            aria-label="social-link"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-6 text-body-color duration-300 hover:text-secondary"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.facebook.com/people/Health-Vista-Diagnostics/61552586340123/"
            aria-label="social-link"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-6 text-body-color duration-300 hover:text-secondary"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="https://www.linkedin.com/company/101285725/admin/notifications/all/"
            aria-label="social-link"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-6 text-body-color duration-300 hover:text-secondary"
          >
            <FaLinkedinIn />
          </Link>
          {/* <Link
          href="https://twitter.com/MedicamenL38700"
          aria-label="social-link"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-6 text-body-color duration-300 hover:text-secondary"
        >
          <FaXTwitter />
        </Link> */}
        </div>
        {/* mail and phone */}
        <div className="lg:flex justify-evenly">
          <Link
            href="tel:+91-93118-83059"
            target="__blank"
            className="flex justify-center lg:mb-0 mb-2 mr-10 hover:text-secondary"
          >
            <FaPhoneAlt className="mt-1 mr-1" />
            +91-93118-83059
          </Link>
          <Link
            href="mailto:healthvista.diagnostics@gmail.com"
            target="__blank"
            className="flex justify-center lg:mb-0 mb-2 hover:text-secondary"
          >
            <IoMail className="mt-1 mr-1" />
            healthvista.diagnostics@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Top;
