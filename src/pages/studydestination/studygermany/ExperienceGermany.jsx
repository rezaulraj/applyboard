import React from "react";

const ExperienceGermany = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center md:items-start">
        <div
          className="flex flex-col gap-5 animate-fade-in col-span-5 order-2 md:order-1
        "
        >
          <div className="rounded-2xl shadow-lg h-64 relative z-10">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
              alt="Student working with equipment"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-4 -right-12 z-20">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md w-fit">
                <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <svg
                    className="w-3.5 h-3.5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium font-sans text-gray-800">
                  Work While Studying
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl shadow-lg h-56 w-4/5 self-end relative z-0 -mr-8">
            <img
              src="https://plus.unsplash.com/premium_photo-1714265045508-ce864a027714?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Graduate celebrating"
              className="w-full h-full object-cover object-top rounded-2xl"
            />
            <div className="absolute bottom-4 -left-12">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md w-fit">
                <div className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3.5 h-3.5 text-teal-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  </svg>
                </div>
                <span className="text-sm font-medium font-sans text-gray-800">
                  Post-Study Work Visa
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 col-span-7 order-1 md:order-2">
          <p className="text-base font-medium font-montserrat tracking-[1.5px] text-[#1e6deb] uppercase mb-3">
            Experience
          </p>

          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-gray-900 leading-tight">
            Work While Studying and After Graduation
          </h2>

          <p className="text-gray-600 text-base font-sans lg:text-lg leading-relaxed">
            For most international students, a great education abroad is a
            stepping stone to an exciting lifelong career. Germany offers
            generous work-while-studying rules to help you fund your studies and
            build connections. Usually, international students can work up to 20
            hours each week while studying. That being said, most part-time jobs
            will require you to speak German, not English.
          </p>

          <p className="text-gray-600 text-base font-sans lg:text-lg leading-relaxed">
            Then, after graduating, you can apply for a residence permit for
            jobseekers, letting you stay in the country for up to 18 months
            while seeking skilled employment. It’s a great chance to launch your
            career and find your footing as soon as your studies finish!
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <div className="flex items-center justify-between gap-4 flex-1 min-w-[160px] bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <p className="text-lg font-semibold text-gray-900 font-montserrat mb-1">
                  Work While Studying
                </p>
                <p className="text-xl font-semibold text-gray-900 font-montserrat">
                  20 Hrs
                </p>
                <p className="text-sm text-gray-500 font-sans">per weeks</p>
              </div>
              <button className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors flex-shrink-0">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="flex items-center justify-between gap-4 flex-1 min-w-[160px] bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <p className="text-lg font-semibold text-gray-900 font-montserrat">
                  Work After Study
                </p>
                <p className="text-xl font-semibold text-gray-900 font-montserrat">
                  18 months
                </p>
                <p className="text-sm text-gray-500 font-sans">
                  post-study visa
                </p>
              </div>
              <button className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors flex-shrink-0">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceGermany;
