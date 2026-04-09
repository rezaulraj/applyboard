import React from "react";

const Rewords = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: ELEVATE Card */}
          <div className="relative bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#0ea5e9] rounded-2xl overflow-hidden p-8 md:p-10 min-h-[480px] shadow-xl">
            {/* Background Arrow Graphic */}
            <svg
              className="absolute top-10 right-12 w-48 h-96 text-white/10 pointer-events-none"
              viewBox="0 0 100 200"
              fill="none"
              stroke="currentColor"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M50 180 L50 40 M20 70 L50 20 L80 70" />
            </svg>

            {/* Header */}
            <div className="relative z-10 text-white mb-8">
              <div className="flex items-center gap-2 mb-3">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
                <span className="font-semibold tracking-wide">AdmissionOnBoard</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-widest flex items-center gap-1">
                ELEV
                <span className="relative inline-flex items-center">
                  A
                  <svg
                    className="absolute -top-2 -right-4 w-5 h-5 text-white rotate-45"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2L2 12h4v6h8v-6h4L10 2z" />
                  </svg>
                </span>
                TE
              </h2>
            </div>

            {/* Tier Badges */}
            <div className="relative z-10 space-y-3 mt-4">
              {/* Diamond */}
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-purple-700 to-pink-500 text-white px-4 py-2 rounded-l-full rounded-r-md font-semibold text-sm flex items-center gap-2 shadow-lg">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                  Diamond
                </div>
              </div>
              {/* Titanium */}
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-400 text-white px-4 py-2 rounded-l-full rounded-r-md font-semibold text-sm flex items-center gap-2 shadow-lg ml-4">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  Titanium
                </div>
              </div>
              {/* Platinum */}
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-blue-800 to-blue-500 text-white px-4 py-2 rounded-l-full rounded-r-md font-semibold text-sm flex items-center gap-2 shadow-lg ml-8">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                  Platinum
                </div>
              </div>
              {/* Gold */}
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-amber-600 to-yellow-400 text-white px-4 py-2 rounded-l-full rounded-r-md font-semibold text-sm flex items-center gap-2 shadow-lg ml-12">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                  Gold
                </div>
              </div>
            </div>

            {/* Professional Man Image */}
            <div className="absolute bottom-0 right-0 w-1/2 h-full pointer-events-none">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional Partner"
                className="w-full h-full object-cover object-top mix-blend-luminosity opacity-90"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="space-y-6">
            {/* Label */}
            <div>
              <span className="text-base font-medium font-montserrat tracking-[1.5px] text-[#1e6deb] uppercase mb-3">
                REWARDS
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold font-montserrat text-gray-800 leading-tight">
              Get Exclusive Rewards as an Elevate Partner
            </h2>

            {/* Description Paragraphs */}
            <p className="text-base lg:text-lg font-sans text-gray-600 leading-relaxed">
              Our built-in rewards program grants you exclusive benefits like
              higher commission, priority service, access to high-profile
              events, and much more.
            </p>
            <p className="text-base lg:text-lg font-sans text-gray-600 leading-relaxed">
              Level up your status to discover elite benefits and exciting
              opportunities to grow your business!
            </p>

            {/* Feature Items */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-2">
              {/* Priority Service */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold font-sans text-gray-800 text-sm">
                    Priority service
                  </p>
                </div>
              </div>

              {/* Higher Commission */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold font-sans text-gray-800 text-sm">
                    Higher commission
                  </p>
                </div>
              </div>

              {/* Upskilling Opportunities */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold font-sans text-gray-800 text-sm">
                    Upskilling opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="px-6 py-3 bg-blue-600 text-white font-sans text-base lg:text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md">
                Register Now
              </button>
              <button className="px-6 py-3 bg-white text-blue-600 font-sans text-base lg:text-lg font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewords;
