import React from "react";

const TransformativeCaseStudies = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-base font-medium font-montserrat tracking-[1.5px] text-[#1e6deb] uppercase mb-3">
            SUCCESS STORIES
          </p>
          <h2 className="text-3xl sm:text-4xl font-montserrat  font-bold text-gray-800 leading-tight">
            Transformative Case Studies
          </h2>
        </div>

        {/* Video Container */}
        <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-3 sm:p-4 shadow-xl">
          <div className="relative rounded-2xl overflow-hidden bg-white">
            {/* Main Image */}
            <div className="relative aspect-video w-full">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Trade show exhibition hall with booths and attendees"
                className="w-full h-full object-cover"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformativeCaseStudies;
