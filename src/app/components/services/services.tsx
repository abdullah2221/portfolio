import React from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoLayersOutline } from "react-icons/io5";
import { IoChatbubblesOutline } from "react-icons/io5";
const Services = () => {
  return (
    <>
      <section className="bg-gray-50 pt-20 pb-28 px-9">
        <div className="max-w-7xl mx-auto " />
        <div className="text-center font-bold">
          <h2 className="text-6xl text-gray-800 "> Services</h2>
          <p className="text-gray-400 mt-2"> Here's What i Offer</p>
        </div>
        <div className="mt-20 mx-10 grid grid-cols-1 sm:grid-cols-2 gap-16 lg:grid-cols-3 space-x-7 justify-between items-stretch">
      
      
          <div className="relative ">
            <div
              className="absolute z-0 inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-md transform
             -skew-y-6 sm:skew-y-0 sm:rotate-6 rounded-md
            "
            ></div>

            <div className="relative z-10 py-20  bg-white p-12 rounded-md shadow-md">
              <IoPhonePortraitOutline color="cyan" size={"50"} />
              <h3 className="mt-4 font-bold text-2xl leading-6 text-gray-700">
                Responsive Design
              </h3>
              <p className="mt-3 text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                quibusdam nulla provident, sequi quod ipsam, eaque autem quis
                odit animi dolore eligendi?{" "}
              </p>
            </div>
          </div>

          <div className="relative ">
            <div
              className="absolute z-0 inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-md transform
             -skew-y-6 sm:skew-y-0 sm:rotate-6 rounded-md
            "
            ></div>

            <div className="relative z-10 py-20 bg-white p-12 rounded-md shadow-md">
            <IoLayersOutline color="cyan" size={"50"}/>
              
              <h3 className="mt-4 font-bold text-2xl leading-6 text-gray-700">
                Web Apps
              </h3>
              <p className="mt-3 text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                quibusdam nulla provident, sequi quod ipsam, eaque autem quis
                odit animi dolore eligendi?{" "}
              </p>
            </div>
          </div>

          <div className="relative ">
            <div
              className="absolute z-0 inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-md transform
             -skew-y-6 sm:skew-y-0 sm:rotate-6 rounded-md
            "
            ></div>

            <div className="relative z-10 py-20 bg-white p-12 rounded-md shadow-md">
            <IoChatbubblesOutline  color={"cyan"} size={"50"}/>
              <h3 className="mt-4 font-bold text-2xl leading-6 text-gray-700">
                Consultation
              </h3>
              <p className="mt-3 text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                quibusdam nulla provident, sequi quod ipsam, eaque autem quis
                odit animi dolore eligendi?{" "}
              </p>
            </div>
          </div>



        </div>
      </section>
    </>
  );
};

export default Services;



<div className="p-10">
<h4 className="font-bold text-2xl text-gray-600">
  {" "}
  Work Title
</h4>
<p className="p-3 text-gray-600">
  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
  Minus, nemo! Vitae culpa natus veniam eius praesentium ullam

</p>
<a href="#" className="inline-block mt-4 bg-gradient-to-r from-cyan-400 to-emerald-400 font-bold text-white text-sm px-6 py-2 rounded-md shadow-md">View More</a>
</div>