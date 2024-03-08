import React from "react";
import { FiYoutube } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { url } from "inspector";
const Header = () => {
  return (
    <>
      <div className="absolute w-full min-h-screen">
        <div
          className="absolute top-0 w-full h-1/2 bg-cover bg-bottom"
          style={{ backgroundImage: `url("/back.jpg")` }}
        ></div>
      </div>
    
        <section className="flex justify-center items-center min-h-screen">
          <div className="relative">
            <div
              className="absolute z-0 inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-md transform
             -skew-y-6 sm:skew-y-0 sm:rotate-6 rounded-md
            "
            ></div>
            <div className=" relative z-10 max-w-3xl p-12 md:flex md:flex-row text-gray-600 bg-white rounded-md shadow-md ">
              <div className="flex flex-col justify-between  space-y-6 py-4">
                <div>
                  <p className="text-lg">Hello, I am</p>
                  <h1 className="text-5xl text-gray-800 font-bold pt-1 ">
                    Abdullah
                  </h1>
                </div>

                <p className="text-xl pt-3 leading-relaxed">
                  Front-End Developer who crafts beautiful websites that help
                  your buisness online
                </p>
                <div className="inline-flex space-x-4 text-xl py-5">
                  <FiYoutube />
                  <FaTwitter />
                  <FaLinkedin />
                  <FaGithub />
                </div>
              </div>
              <div className="w-60 h-60 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  className="object-cover border-6 border-white shadow-md rounded-full  object-top w-full h-full"
                  src={"/abdullah.jpg"}
                  alt="img"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </section>
      
    </>
  );
};

export default Header;
