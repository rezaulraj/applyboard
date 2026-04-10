import React from "react";

const StudentJourneyBanner = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden min-h-[600px] lg:min-h-[500px]">
          {/* Full Width Background Image */}
          <img
            src="https://plus.unsplash.com/premium_photo-1693035341606-023861b90f34?q=80&w=1200&auto=format&fit=crop"
            alt="Student writing in notebook"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient Overlay - White on left, transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-white/70 to-transparent"></div>

          {/* Content Container */}
          <div className="relative z-10 max-w-6xl mx-auto px-8 lg:px-12 xl:px-16 py-16 lg:py-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 font-montserrat">
                The Fastest and Easiest Way to Navigate the Student Journey
              </h2>

              <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-8 font-sans">
                AdmissionOnBoard is so much more than an application platform. It's
                your full-service toolbox, giving you new ways to grow your
                business and offer students peace of mind. Use these innovative
                programs to guide students through their whole journey, from
                application to arrival.
              </p>

              <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Let's get started
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentJourneyBanner;
