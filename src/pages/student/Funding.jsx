import React from "react";

const Funding = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left - Mockup */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-md">
            {/* Browser Window */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Browser Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 h-10 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-white/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/80" />
              </div>

              <div className="flex">
                {/* Sidebar */}
                <div className="w-14 bg-gray-50 border-r border-gray-100 py-6 flex flex-col items-center gap-5">
                  <div className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <div className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
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
                  <div className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div className="text-blue-600 bg-blue-50 p-2 rounded-lg">
                    <svg
                      className="w-5 h-5"
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
                  <div className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
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
                  </div>
                  <div className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-8 flex flex-col items-center">
                  {/* User Icon Placeholder */}
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <svg
                      className="w-10 h-10 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>

                  {/* Application Title */}
                  <h3 className="text-2xl font-bold font-sans text-gray-900 mb-6">
                    Application
                  </h3>

                  {/* Placeholder Lines */}
                  <div className="w-full space-y-3 mb-8">
                    <div className="h-3 bg-gray-100 rounded-full w-full" />
                    <div className="h-3 bg-gray-100 rounded-full w-5/6" />
                    <div className="h-3 bg-gray-100 rounded-full w-4/6" />
                    <div className="h-3 bg-gray-100 rounded-full w-full" />
                    <div className="h-3 bg-gray-100 rounded-full w-3/4" />
                  </div>

                  {/* Apply for a Loan Button */}
                  <div className="relative">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-lg shadow-lg font-sans hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
                      Apply for a Loan
                    </button>
                    {/* Cursor Pointer */}
                    <svg
                      className="absolute -bottom-2 -right-2 w-8 h-8 text-gray-700 animate-cursor-bounce drop-shadow-md transform rotate-12"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 18.5293L18.3333 18.5293L18.3333 12.3673L5.65376 12.3673Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Finance Icons */}
            <div className="absolute -right-4 top-12 flex flex-col gap-3">
              {/* Green Document Icon */}
              <div className="w-14 h-14 bg-emerald-500 rounded-xl shadow-lg flex items-center justify-center animate-float-slow hover:scale-110 transition-transform duration-300 cursor-pointer">
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
                  <circle cx="17.5" cy="6.5" r="2.5" strokeWidth={2} />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.5 4v5"
                  />
                </svg>
              </div>

              {/* Yellow Bank Icon */}
              <div className="w-14 h-14 bg-amber-400 rounded-xl shadow-lg flex items-center justify-center animate-float-medium hover:scale-110 transition-transform duration-300 cursor-pointer">
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
                    d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                  <circle cx="12" cy="10" r="2" strokeWidth={2} />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4"
                  />
                </svg>
              </div>

              {/* Purple Home/Money Icon */}
              <div className="w-14 h-14 bg-purple-500 rounded-xl shadow-lg flex items-center justify-center animate-float-fast hover:scale-110 transition-transform duration-300 cursor-pointer">
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                  <circle cx="12" cy="14" r="2" strokeWidth={2} />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 12v4"
                  />
                </svg>
              </div>
            </div>

            {/* Decorative Background Glow */}
            <div className="absolute -z-10 top-1/2 -left-12 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30" />
            <div className="absolute -z-10 bottom-0 right-10 w-56 h-56 bg-purple-200 rounded-full blur-3xl opacity-30" />
          </div>
        </div>

        {/* Right - Text Content */}
        <div className="space-y-6 lg:pl-8">
          {/* Category Label */}
          <span className="text-base font-bold font-sans tracking-[1.5px] text-blue-600 uppercase">
            FUNDING
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-gray-800 leading-tight">
            Get Financial Assistance
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg font-sans text-gray-600 leading-relaxed max-w-lg">
            Strengthen your study permit application with a GIC, or fund your
            journey with an{" "}
            <a
              href="#"
              className="text-blue-600 font-medium underline underline-offset-4 hover:text-blue-800 transition-colors duration-200"
            >
              ApplyBoard Student Loan
            </a>
            .
          </p>

          {/* CTA Button */}
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 font-sans text-base lg:text-lg hover:-translate-y-0.5">
            Explore Funding Options
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes cursor-bounce {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(4px) rotate(12deg); }
        }
        .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 3.5s ease-in-out infinite; }
        .animate-cursor-bounce { animation: cursor-bounce 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Funding;
