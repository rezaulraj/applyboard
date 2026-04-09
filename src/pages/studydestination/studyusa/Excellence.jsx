import React from "react";
import { AiOutlineStock } from "react-icons/ai";
import { FaHandshake, FaRobot, FaUser } from "react-icons/fa";

const Excellence = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center md:items-start">
        {/* Images Column */}
        <div
          className="flex flex-col gap-5 animate-fade-in col-span-5 order-2 md:order-1
        "
        >
          {/* Top image */}
          <div className="rounded-2xl shadow-lg h-64 relative z-10">
            <img
              src="https://plus.unsplash.com/premium_photo-1661963563108-50f1f802d08c?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Student working with equipment"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-4 -left-12 z-20">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md w-fit">
                <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <FaHandshake className="w-3.5 h-3.5 text-purple-500" />
                </div>
                <span className="text-sm font-medium font-sans text-gray-800">
                  High-Quaility Education
                </span>
              </div>
            </div>
          </div>

          {/* Bottom image — offset right */}
          <div className="rounded-2xl shadow-lg h-56 w-4/5 self-end relative z-0 -mr-8">
            <img
              src="https://images.unsplash.com/photo-1580129893797-a7e6d5b1a6ea?q=80&w=417&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Graduate celebrating"
              className="w-full h-full object-cover object-top rounded-2xl"
            />
            <div className="absolute bottom-4 -right-12">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md w-fit">
                <div className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <FaUser className="w-3.5 h-3.5 text-cyan-500" />
                </div>
                <span className="text-sm font-medium font-sans text-gray-800">
                  Best Professors
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Text Column */}
        <div className="flex flex-col gap-6 col-span-7 order-1 md:order-2">
          <p className="text-base font-medium font-montserrat tracking-[1.5px] text-[#1e6deb] uppercase mb-3">
            Excellence
          </p>

          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-gray-900 leading-tight">
            Learn from the Best
          </h2>

          <p className="text-gray-600 text-base font-sans lg:text-lg leading-relaxed">
            Those who study in the USA will enjoy the benefits of a high-quality
            education system offering internationally recognized credentials—and
            a large part of that great experience comes from the chance to
            study, work, and research with some of the best professors in their
            fields.
          </p>

          <p className="text-gray-600 text-base font-sans lg:text-lg leading-relaxed">
            Whether you’re interested in studying engineering, healthcare,
            economics, sciences, law, or the arts, many of the world’s premier
            minds gather and teach at academic institutions across the country.
            So, if you’re ambitious, highly career- or academically-oriented,
            and want to strive to be among the top performers in your field,
            there’s no better place to start.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Excellence;
