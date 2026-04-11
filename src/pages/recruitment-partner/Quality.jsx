import React from "react";

const Quality = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-blue-100 w-full max-w-md p-6 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50"></div>
                  <div className="h-4 font-sans text-xs font-medium text-gray-400 rounded ">
                    Programm Summary
                  </div>
                </div>
                <div className="space-y-2 pl-11">
                  <div className="h-2 bg-gray-100 rounded w-full"></div>
                  <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                  <div className="h-2 bg-gray-100 rounded w-4/6"></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50"></div>
                  <div className="h-4 font-sans text-xs font-medium text-gray-400 rounded ">
                    Admission Requirements
                  </div>
                </div>
                <div className="space-y-2 pl-11">
                  <div className="h-2 bg-gray-100 rounded w-full"></div>
                  <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                </div>
              </div>
            </div>

            <div className="absolute top-2 -right-4 sm:right-8 bg-emerald-300 text-white px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 z-20">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <span className="text-lg font-bold">95%</span>
            </div>

            <div className="absolute -bottom-6 left-2/3 transform -translate-x-1/2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200 p-5 w-64 z-30">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">
                Predicted success chance
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
                  <span className="text-sm text-gray-400">Aug intake</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-rose-400 bg-rose-50 px-2 py-0.5 rounded-full">
                      Low
                    </span>
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
                  <span className="text-sm text-gray-400">Jan intake</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-emerald-400 bg-emerald-50 px-2 py-0.5 rounded-full">
                      High
                    </span>
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <div>
              <span className="text-base font-medium font-montserrat tracking-[1.5px] text-[#1e6deb] uppercase mb-3">
                QUALITY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-montserrat text-gray-800 leading-tight">
              Boost Your Success Rate to 95%
            </h2>

            <p className="text-base sm:text-lg text-gray-600 font-sans leading-relaxed max-w-xl">
              Tired of taking risks? ApplyBoard's AI-powered tech and built-in
              quality checks result in a 95% chance of application success,
              meaning more student success and more consistent commissions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
