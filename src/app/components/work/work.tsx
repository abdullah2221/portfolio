import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <>
      <section className="pt-20 pb-28 px-8 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-lg text-gray-800 font-bold">
              Some of My Great Works
            </h1>
          </div>
          <div className="grid grid-cols-1  sm:grid-cols-2  gap-12 lg:grid-cols-3 sm:gap-x-12 items-center">
            <div className="rounded-md shadow-md py-5 lg:col-span-2 min-h-full ">
              <Image
                src="/back.jpg"
                alt="back"
                width={"450"}
                height={"80"}
                className="h-64 w-full sm:w-full mt-0  object-cover rounded-md shadow-md"
              />

              <div className="p-10 lg:space-y-8 ">
                <h4 className="font-bold text-2xl text-gray-600">
                  {" "}
                  Work Title
                </h4>
                <p className="p-3 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus, nemo! Vitae culpa natus veniam eius praesentium ullam
                </p>
                <a
                  href="#"
                  className="inline-block mt-4 bg-gradient-to-r from-cyan-400 to-emerald-400 font-bold text-white text-sm px-6 py-2 rounded-md shadow-md"
                >
                  View More
                </a>
              </div>
            </div>

            <div className="rounded-md shadow-md py-5 min-h-full ">
              <Image
                src="/back.jpg"
                alt="back"
                width={"450"}
                height={"80"}
                className="h-64 w-full sm:w-full mt-0  object-cover rounded-md shadow-md"
              />

              <div className="p-10">
                <h4 className="font-bold text-2xl text-gray-600">
                  {" "}
                  Work Title
                </h4>
                <p className="p-3 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus, nemo! Vitae culpa natus veniam eius praesentium ullam
                </p>
                <a
                  href="#"
                  className="inline-block mt-4 bg-gradient-to-r from-cyan-400 to-emerald-400 font-bold text-white text-sm px-6 py-2 rounded-md shadow-md"
                >
                  View More
                </a>
              </div>
            </div>

            <div className="rounded-md shadow-md py-5 min-h-full ">
              <Image
                src="/back.jpg"
                alt="back"
                width={"450"}
                height={"80"}
                className="h-64 w-full sm:w-full mt-0  object-cover rounded-md shadow-md"
              />

              <div className="p-10">
                <h4 className="font-bold text-2xl text-gray-600">
                  {" "}
                  Work Title
                </h4>
                <p className="p-3 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus, nemo! Vitae culpa natus veniam eius praesentium ullam
                </p>
                <a
                  href="#"
                  className="inline-block mt-4 bg-gradient-to-r from-cyan-400 to-emerald-400 font-bold text-white text-sm px-6 py-2 rounded-md shadow-md"
                >
                  View More
                </a>
              </div>
            </div>

            <div className="rounded-md shadow-md py-5 lg:col-span-2 min-h-full ">
              <Image
                src="/back.jpg"
                alt="back"
                width={"450"}
                height={"80"}
                className="h-64 w-full sm:w-full mt-0  object-cover rounded-md shadow-md"
              />

              <div className="p-10 lg:space-y-8 ">
                <h4 className="font-bold text-2xl text-gray-600">
                  {" "}
                  Work Title
                </h4>
                <p className="p-3 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus, nemo! Vitae culpa natus veniam eius praesentium ullam
                </p>
                <a
                  href="#"
                  className="inline-block mt-4 bg-gradient-to-r from-cyan-400 to-emerald-400 font-bold text-white text-sm px-6 py-2 rounded-md shadow-md"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
