import React from "react";
import CountryFlag from "react-country-flag";

const Program = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div>
              <span className="text-base font-montserrat tracking-[1.5px] text-[#1e6deb] uppercase mb-3">
                PROGRAMS
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-gray-800 leading-tight">
              Access 150,000+ Global Study Programs
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg font-sans text-gray-600 leading-relaxed max-w-xl">
              Explore the world from one platform. No need to manage
              partnerships or contracts. Find programs to suit any student's
              needs. Plus, discover exclusive institutions that are only
              available here.
            </p>
          </div>

          {/* Right Column: Graphic Illustration */}
          <div className="relative flex justify-center lg:justify-end py-8">
            {/* Browser Mockup */}
            <div className="relative bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-blue-100 w-full max-w-md z-10 overflow-hidden">
              {/* Browser Header */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
                </div>
              </div>

              {/* Browser Content */}
              <div className="p-6 space-y-5 bg-white/95 backdrop-blur-sm">
                {/* Search Bar */}
                <div className="relative group">
                  <input
                    type="text"
                    value="What would you like to study?"
                    readOnly
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all shadow-sm"
                  />
                  <svg
                    className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                {/* Filter Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-purple-600 rounded-full text-xs font-semibold border border-purple-100">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Popular
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-semibold border border-emerald-100">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    High Job Demand
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold border border-blue-100">
                    <svg
                      className="w-3.5 h-3.5"
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
                    Prime
                  </span>
                </div>

                {/* Program Card */}
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-yellow-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 space-y-1.5">
                      <div className="h-2.5 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-blue-50 text-blue-600 text-xs font-semibold rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors">
                    Create application
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Flags */}
            <div className="absolute top-0 left-1/4 transform -translate-x-1/3 -translate-y-1/4 bg-white rounded-full p-2 shadow-lg border border-gray-100 z-20">
              <CountryFlag
                countryCode="GB"
                svg
                style={{ width: "2.2em", height: "2.2em" }}
                title="United Kingdom"
              />
            </div>

            <div className="absolute -top-10 left-2/4 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-lg border border-gray-100 z-20">
              <CountryFlag
                countryCode="AU"
                svg
                style={{ width: "2.2em", height: "2.2em" }}
                title="Australia"
              />
            </div>

            <div className="absolute -top-8 right-1/4 transform translate-x-1/2 bg-white rounded-full p-2 shadow-lg border border-gray-100 z-20">
              <CountryFlag
                countryCode="DE"
                svg
                style={{ width: "2.2em", height: "2.2em" }}
                title="Germany"
              />
            </div>

            <div className="absolute top-14 right-0 transform translate-x-1/3 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border border-gray-100 z-20">
              <CountryFlag
                countryCode="IE"
                svg
                style={{ width: "2.2em", height: "2.2em" }}
                title="Ireland"
              />
            </div>

            <div className="absolute top-1/3 left-8 lg:left-36 transform -translate-x-full bg-white rounded-full p-2 shadow-lg border border-gray-100 z-20">
              <CountryFlag
                countryCode="US"
                svg
                style={{ width: "2.2em", height: "2.2em" }}
                title="United States"
              />
            </div>

            <div className="absolute bottom-16 left-12 lg:left-44 transform -translate-x-full bg-white rounded-full p-2 shadow-lg border border-gray-100 z-20">
              <CountryFlag
                countryCode="CA"
                svg
                style={{ width: "2.2em", height: "2.2em" }}
                title="Canada"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
