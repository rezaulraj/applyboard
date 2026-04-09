import React from "react";
import { AiOutlineStock } from "react-icons/ai";
import { FaRobot } from "react-icons/fa";

const ResearchUk = () => {
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
                  <FaRobot className="w-3.5 h-3.5 text-purple-500" />
                </div>
                <span className="text-sm font-medium font-sans text-gray-800">
                  Innovation Hub
                </span>
              </div>
            </div>
          </div>

          {/* Bottom image — offset right */}
          <div className="rounded-2xl shadow-lg h-56 w-4/5 self-end relative z-0 -mr-8">
            <img
              src="https://plus.unsplash.com/premium_photo-1706517229833-f41d68aae8ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Graduate celebrating"
              className="w-full h-full object-cover object-top rounded-2xl"
            />
            <div className="absolute bottom-4 -right-12">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md w-fit">
                <div className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <AiOutlineStock className="w-3.5 h-3.5 text-cyan-500" />
                </div>
                <span className="text-sm font-medium font-sans text-gray-800">
                  Celebrate Diversity
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Text Column */}
        <div className="flex flex-col gap-6 col-span-7 order-1 md:order-2">
          <p className="text-base font-medium font-montserrat tracking-[1.5px] text-[#1e6deb] uppercase mb-3">
            Research
          </p>

          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-gray-900 leading-tight">
            Access and Perform Cutting-Edge Research
          </h2>

          <p className="text-gray-600 text-base font-sans lg:text-lg leading-relaxed">
            One of the best reasons to choose the UK? Its research and
            innovation is absolutely unparalleled.
          </p>

          <p className="text-gray-600 text-base font-sans lg:text-lg leading-relaxed">
            The UK is at the forefront of innovative research and emerging
            technologies, giving students exposure to insights and experiences
            that are in high demand around the world. Students in the UK have an
            opportunity to collaborate on groundbreaking research, get their
            hands on the latest technology, and learn from brilliant thinkers
            who are among the best minds in their fields.
          </p>
          <p className="text-gray-600 text-base font-sans lg:text-lg leading-relaxed">
            If you want to make discoveries and access findings that can change
            the world, especially if you’re studying at the postgraduate level,
            the United Kingdom is THE place to be.
          </p>
        </div>
      </div>
      {/* Bottom: English Proficiency Banner */}
      <div className="relative rounded-2xl mt-20 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 px-10 py-14 text-center text-white shadow-xl overflow-hidden">
        {/* Decorative Circular Rings Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large outer rings */}
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border border-white/50" />
          <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full border border-white/30" />
          <div className="absolute -top-1/2 -right-1/4 w-[400px] h-[400px] rounded-full border border-white/60" />

          <div className="absolute -bottom-1/2 -left-1/4 w-[700px] h-[700px] rounded-full border border-white/40" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[500px] h-[500px] rounded-full border border-white/30" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[300px] h-[300px] rounded-full border border-white/70" />

          {/* Additional subtle rings */}
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full border border-white/50" />
          <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full border border-white/30" />

          {/* Radial gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-transparent to-blue-800/60" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-3xl lg:text-4xl font-bold font-montserrat mb-5 tracking-tight">
            Did You Know?
          </h3>
          <p className="text-base lg:text-lg font-sans text-blue-100 leading-relaxed max-w-2xl mx-auto mb-4">
            The United Kingdom is the second most popular study destination in
            the world, second only to the United States.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResearchUk;
