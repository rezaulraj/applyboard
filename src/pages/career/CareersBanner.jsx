import React from "react";

const CareersBanner = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row min-h-[420px]">
            {/* Left Side - Text Content with Gradient Background */}
            <div className="md:w-1/2 relative bg-gradient-to-br from-blue-50 via-blue-50/80 to-transparent p-8 md:p-12 lg:p-16 flex flex-col justify-center z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 font-montserrat">
                Help Us Change the World, One Student at a Time
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-lg font-sans">
                Our diverse team of 750+ AdmissionOnBoardians work from 35+ countries
                around the world. Join us in building a more equitable future
                for students—you'll challenge yourself, grow, and have a whole
                lot of fun along the way!
              </p>

              <div>
                <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg group">
                  <span>View Open Roles</span>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
              <img
                src="https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Happy team member at AdmissionOnBoard"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Subtle overlay on the right side */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-transparent md:bg-gradient-to-l"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersBanner;
