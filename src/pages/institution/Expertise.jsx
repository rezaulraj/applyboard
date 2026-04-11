import React from "react";

const Expertise = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image & Floating Elements */}
          <div className="relative order-2 md:order-1">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Team analyzing global data points on a dashboard"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>

            {/* Floating Chart Card */}
            <div className="absolute top-6 right-0 translate-x-1/4 lg:translate-x-1/3 z-20">
              <div className="bg-white rounded-xl shadow-2xl p-4 border border-gray-100 w-36 lg:w-44">
                <div className="flex items-end justify-between h-16 space-x-2 px-2">
                  <div className="w-3 bg-blue-200 rounded-t h-10"></div>
                  <div className="w-3 bg-blue-400 rounded-t h-14"></div>
                  <div className="w-3 bg-blue-300 rounded-t h-8"></div>
                  <div className="w-3 bg-blue-500 rounded-t h-16"></div>
                  <div className="w-3 bg-blue-200 rounded-t h-10"></div>
                  <div className="w-3 bg-blue-400 rounded-t h-12"></div>
                </div>
                <div className="mt-2 h-1.5 bg-gray-100 rounded-full w-3/4 mx-auto"></div>
              </div>
            </div>

            {/* Floating Blue Icon Card */}
            <div className="absolute top-1/3 right-0 translate-x-1/3 lg:translate-x-1/4 z-30">
              <div className="bg-blue-600 rounded-xl shadow-xl p-3 w-14 h-14 flex items-center justify-center border-4 border-white">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
            </div>

            {/* Floating Green Icon Card */}
            <div className="absolute top-1/2 right-0 translate-x-1/3 lg:translate-x-1/4 z-30 mt-6">
              <div className="bg-emerald-500 rounded-xl shadow-xl p-3 w-14 h-14 flex items-center justify-center border-4 border-white">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6 order-1 md:order-2">
            {/* Category Label */}
            <div>
              <span className="text-base font-medium font-montserrat tracking-[1.5px] text-[#1e6deb] uppercase mb-3">
                EXPERTISE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-montserrat leading-tight">
              Leverage Millions of Global Data Points
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 font-sans leading-relaxed max-w-xl">
              Our experienced strategy team empowers you with sector-leading
              insights, market trends, and recruitment partner vetting,
              monitoring, and compliance training.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
