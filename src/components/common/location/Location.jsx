"use client";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import "animate.css";
export default function Whatsapp() {
  return (
    <div className="fixed bottom-24 right-8 z-[99]">
      <Link
        href="https://maps.app.goo.gl/STeB7VpkEjnZ1Q1YA"
        target="__blank"
        className="flex animate__animated animate__pulse hover:border-4 hover:p-2 shadow-primary shadow-lg animate__infinite h-14 w-14 cursor-pointer items-center justify-center rounded-md bg-primary text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
      >
        <IoLocationOutline width={100} height={100} className=" w-10 h-10" />
      </Link>
    </div>
  );
}
