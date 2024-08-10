import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-teal-800 w-screen font-sans">
      <div className="container px-6 py-12 mx-auto">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <div className="flex flex-col md:flex-row justify-evenly w-full">
            <div className="text-center md:text-left">
              <p className="font-semibold text-white text-3xl">Quick Links</p>

              <div className="flex flex-col md:items-start items-center mt-5 space-y-2 ">
                <p className="transition-colors duration-300 text-[#6C8593] hover:text-blue-400 hover:underline hover:cursor-pointer">
                  Home
                </p>
                <p className="transition-colors duration-300 text-[#6C8593] hover:text-blue-400 hover:underline hover:cursor-pointer">
                  Who We Are
                </p>
                <p className="transition-colors duration-300 text-[#6C8593] hover:text-blue-400 hover:underline hover:cursor-pointer">
                  why choose us
                </p>
                <p className="transition-colors duration-300 text-[#6C8593] hover:text-blue-400 hover:underline hover:cursor-pointer">
                Testimonials
                </p>
              </div>
            </div>

            <div className="text-center md:text-left">
              <p className="font-semibold text-white text-3xl">Industries</p>

              <div className="flex flex-col md:items-start items-center mt-5 space-y-2">
                <p className="transition-colors duration-300 text-[#6C8593] hover:text-blue-400 hover:underline hover:cursor-pointer">
                  Blogs
                </p>
                <p className="transition-colors duration-300 text-[#6C8593] hover:text-blue-400 hover:underline hover:cursor-pointer">
                  Informationaal Content
                </p>
                <p className="transition-colors duration-300 text-[#6C8593] hover:text-blue-400 hover:underline hover:cursor-pointer">
                  Scolarships
                </p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="font-semibold text-white text-3xl mb-5">Social Media Links </p>
              <div className="flex gap-3 justify-center md:items-start items-center">
                <FaFacebook className="text-white text-3xl" />
                <IoIosMail className="text-white text-4xl" />
                <FaLinkedin className="text-white text-3xl" />
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-8 h-2" />

        <p className="text-white font-sans p-8 text-start text-[11px] lg:text-lg md:text-lg sm:text-lg md:text-center md:p-4">
          © 2024 Royal Digital Company All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
