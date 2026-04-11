const Quality = () => {
  return (
    <div className=" bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Visual Composition */}
          <div className="relative order-2 md:order-1">
            {/* Browser Window Mockup */}
            <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Browser Header */}
              <div className="bg-gradient-to-r from-blue-200 to-blue-300 px-4 py-3">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-300"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
                    <div className="w-3 h-3 rounded-full bg-green-300"></div>
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="bg-white/20 rounded-md h-6 w-64"></div>
                  </div>
                </div>
              </div>

              {/* Browser Content */}
              <div className="p-6 bg-white">
                {/* University Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-300 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">NTU</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-300 mb-1">
                      Nottingham Trent University
                    </h3>
                    <div className="space-y-2 mt-3">
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>

                {/* Additional Content Placeholder */}
                <div className="space-y-3">
                  <div className="h-20 bg-gray-100 rounded-lg"></div>
                  <div className="flex space-x-3">
                    <div className="h-16 bg-gray-100 rounded-lg flex-1"></div>
                    <div className="h-16 bg-gray-100 rounded-lg flex-1"></div>
                    <div className="h-16 bg-gray-100 rounded-lg flex-1"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Icon 1 - Purple (Revenue/Building) */}
            <div className="absolute bottom-20 left-4 z-20">
              <div className="w-16 h-16 bg-purple-300 rounded-2xl shadow-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
            </div>

            {/* Floating Icon 2 - Green (People/Network) */}
            <div className="absolute bottom-20 left-1/5 z-20">
              <div className="w-16 h-16 bg-emerald-300 rounded-2xl shadow-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Floating Icon 3 - Orange (Globe/International) */}
            <div className="absolute bottom-20 left-1/3 z-20">
              <div className="w-16 h-16 bg-amber-300 rounded-2xl shadow-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Graduate Photo */}
            <div className="absolute -bottom-8 right-0 z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-300 rounded-2xl transform rotate-3 scale-105"></div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEeTZ4eEGcaVUtVvok1da18hvvG-MG1Cv1cQ&s"
                  alt="Graduate student"
                  className="relative w-44 h-44 object-cover rounded-2xl shadow-2xl blur-xs"
                />
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Extra spacing for floating elements */}
            <div className="h-32"></div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6 lg:pl-8 order-1 md:order-2">
            {/* Category Label */}
            <div>
              <span className="text-base font-medium font-montserrat tracking-[1.5px] text-[#1e6deb] uppercase ">
                QUALITY
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-montserrat leading-tight">
              Convert Quality Leads to Quality Graduates
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 font-sans leading-relaxed max-w-xl">
              Our platform connects top students to the right programs at the
              right times, enabling you to achieve all of your institution's
              revenue, enrolment, and diversity goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
