import React from "react";

const Search = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Floating UI Cards */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              
              {/* Card 1 - Coventry University (Top Left) */}
              <div className="absolute top-0 -left-10 z-10 w-64 bg-white rounded-2xl shadow-lg border border-blue-100 p-4 animate-float-slow hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-xs">CU</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Coventry University</p>
                  </div>
                </div>
                <div className="space-y-2 mb-3">
                  <div className="h-2 bg-gray-100 rounded-full w-full" />
                  <div className="h-2 bg-gray-100 rounded-full w-3/4" />
                </div>
                <button className="w-full py-2 text-xs font-semibold font-sans text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                  Create application
                </button>
              </div>

              {/* Green Icon - Top Right */}
              <div className="absolute -top-32 -left-10 z-20 w-16 h-16 bg-emerald-500 rounded-2xl shadow-lg flex items-center justify-center animate-float-medium hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  <circle cx="17.5" cy="6.5" r="3.5" strokeWidth={2} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-3.5-3.5" />
                </svg>
              </div>

              {/* Card 2 - University of Waterloo (Center) */}
              <div className="absolute top-10 left-36 z-30 w-72 bg-white rounded-2xl shadow-xl border-2 border-blue-200 p-5 animate-float-fast hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-700 font-bold text-xs">UW</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">University of Waterloo</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="h-2.5 bg-gray-100 rounded-full w-full" />
                  <div className="h-2.5 bg-gray-100 rounded-full w-5/6" />
                  <div className="h-2.5 bg-gray-100 rounded-full w-2/3" />
                </div>
                <div className="relative">
                  <button className="w-full py-2.5 text-sm font-sans font-semibold text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-200">
                    Create application
                  </button>
                  {/* Cursor pointer */}
                  <div className="absolute -right-2 -bottom-2">
                    <svg className="w-8 h-8 text-gray-800 transform rotate-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 18.5293L18.3333 18.5293L18.3333 12.3673L5.65376 12.3673Z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Yellow Icon - Middle Left */}
              <div className="absolute top-44 left-0 z-20 w-16 h-16 bg-amber-400 rounded-2xl shadow-lg flex items-center justify-center animate-float-medium hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              {/* Card 3 - University of Toronto (Bottom Left) */}
              <div className="absolute bottom-0 left-14 z-10 w-64 bg-white rounded-2xl shadow-lg border border-pink-100 p-4 animate-float-slow hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs">RT</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900 font-sans leading-tight">University of Toronto - Rotman School of Management</p>
                  </div>
                </div>
                <div className="space-y-2 mb-3">
                  <div className="h-2 bg-gray-100 rounded-full w-full" />
                  <div className="h-2 bg-gray-100 rounded-full w-2/3" />
                </div>
                <button className="w-full py-2 text-xs font-semibold font-sans text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                  Create application
                </button>
              </div>
              <div className="absolute bottom-8 right-0 z-30 animate-float-fast">
                <div className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-xl font-bold font-sans">150,000+</span>
                </div>
              </div>
              <div className="absolute -z-10 top-10 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50" />
              <div className="absolute -z-10 bottom-10 left-10 w-48 h-48 bg-purple-100 rounded-full blur-3xl opacity-50" />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-6">
            <span className="text-base font-bold font-sans tracking-[1.5px] text-blue-600 uppercase">
              SEARCH
            </span>

            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-gray-900 leading-tight">
              Select a Program
            </h2>

            <div className="space-y-4">
              <p className="text-base sm:text-lg font-sans text-gray-600 leading-relaxed">
                <span className="text-blue-600 font-semibold">Search 150,000+ programs</span>{" "}
                by location, start date, tuition, and more—for free. Our comprehensive AI will help guide you with personalized results to make your search easier.
              </p>
            </div>

            <button className="inline-flex items-center gap-2 font-sans text-base lg:text-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5">
              Start Searching
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
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
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Search;