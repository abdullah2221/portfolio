import React from "react";

const Contact = () => {
  return (
    <>
      <section>
        <div className=" text-center">
          <h1 className="text-6xl font-bold text-gray-800"> Contact Us</h1>
          <p className="text-gray-700">Get in touch with me</p>
        </div>

        <div className="relative ">
          <div
            className="absolute z-0 mx-3 lg:mx-7 inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-md transform
             -skew-y-6 sm:skew-y-0 sm:rotate-6 rounded-md
            "
          ></div>

          <div className="relative grid grid-cols-1 md:gap-x-3 md:grid-cols-2 z-10 m-7 py-20 bg-white p-12 rounded-md shadow-md">
      
     
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="w-full p-2 border  rounded-md my-5 mt-1"
              required
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 border rounded-md my-5 mt-1"
              required
            />

            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              className="w-full p-2 border rounded-md my-5 mt-1 col-span-2"
              required
            />

            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="w-full p-2 border rounded-md h-32 mt-1 col-span-2"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-white-800 py-2 md:col-span-2 bg w-64 px-4 rounded hover:bg-green-600 mt-4"
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
