import React from "react";

const CultureUsa = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-16">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        {/* Left: Text */}
        <div className="flex flex-col gap-5 animate-fade-in col-span-7">
          <p className="text-base font-medium font-montserrat tracking-[1.5px] text-[#1e6deb] uppercase mb-3">
            Culture
          </p>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-gray-900 leading-tight">
            Immerse Yourself in the American Cultural Experience
          </h2>
          <p className="text-gray-600 text-base font-sans lg:text-lg leading-relaxed">
            The United States is a global cultural powerhouse, and nearly
            everyone on the planet has been exposed to American media in some
            format. So, chances are good you have an idea of the quintessential
            “American” college experience from movies, shows, and other famous
            cultural exports.
          </p>
          <p className="text-gray-600 text-base font-sans lg:text-lg leading-relaxed">
            Well, although you shouldn’t believe everything you see on TV, it’s
            true that USA-bound students are likely to enjoy a vibrant student
            life and make new friends on busy, sprawling campuses! Many students
            want nothing more than to have the full American experience and make
            exciting new lifelong connections while they begin the rest of their
            lives. Are you one of them?
          </p>
        </div>

        {/* Right: Stacked Images */}
        <div className="flex flex-col gap-4 col-span-5">
          {/* Top image */}
          <div className="rounded-2xl shadow-lg h-64 relative ">
            <img
              src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Australian coastal walkway"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-3 -right-8">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md w-fit">
                <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-yellow-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-800">
                  High Quality Life
                </span>
              </div>
            </div>
          </div>

          {/* Bottom image — offset left */}
          <div className="self-end w-4/5 rounded-2xl shadow-lg h-56 relative">
            <img
              src="https://images.unsplash.com/photo-1610312278520-bcc893a3ff1d?q=80&w=847&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="People enjoying Australian nature"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-3 -left-8">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md w-fit">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-green-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 8C8 10 5.9 16.17 3.82 19.82" />
                    <path d="M12 22C12 22 17 16 20 10c-4 2-7 0-8-4" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-800">
                  Natural Scenery
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full py-10 rounded-4xl mt-10 flex items-center justify-center overflow-hidden bg-blue-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle,theme(colors.blue.500)_0%,theme(colors.blue.500)_20%,theme(colors.blue.800)_40%,theme(colors.blue.500)_60%,theme(colors.blue.800)_100%)] opacity-80" />

        {/* Content */}
        <div className="relative z-10 text-center text-gray-100 p-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4 font-montserrat">
            Proof of English Proficiency in the USA
          </h1>
          <p className="text-base lg:text-lg mb-4 font-sans">
            You will need to prove your English language proficiency to be
            accepted into most American colleges or universities. Test score
            requirements vary by program and other factors, so check program and
            institution language requirements very closely.
          </p>
          <p className="text-base opacity-90 font-sans">
            Widely-accepted English language proficiency tests in the USA
            include TOEFL, IELTS, PTE, and Duolingo, among others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CultureUsa;
