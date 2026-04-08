import React from "react";

const CommunityCanada = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center md:items-start">
        {/* Images Column */}
        <div
          className="flex flex-col gap-5 animate-fade-in col-span-5 order-2 md:order-1
        "
        >
          {/* Top image */}
          <div className="rounded-2xl shadow-lg h-56 relative z-10">
            <img
              src="https://plus.unsplash.com/premium_photo-1661963563108-50f1f802d08c?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Student working with equipment"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-4 -left-12 z-20">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md w-fit">
                <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
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
                  Friendly People
                </span>
              </div>
            </div>
          </div>

          {/* Bottom image — offset right */}
          <div className="rounded-2xl shadow-lg h-48 w-4/5 self-end relative z-0 -mr-8">
            <img
              src="https://plus.unsplash.com/premium_photo-1706517229833-f41d68aae8ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Graduate celebrating"
              className="w-full h-full object-cover object-top rounded-2xl"
            />
            <div className="absolute bottom-4 -right-12">
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
                  Celebrate Diversity
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Text Column */}
        <div className="flex flex-col gap-6 col-span-7 order-1 md:order-2">
          <p className="text-sm font-bold font-sans tracking-[1.5px] text-blue-600 uppercase">
            Community
          </p>

          <h2 className="text-4xl font-bold text-gray-900 font-montserrat leading-tight">
            Join a Safe and Welcoming Community
          </h2>

          <p className="text-base lg:text-lg font-sans text-gray-500 leading-relaxed">
            Australia’s known for its natural beauty, multicultural cities, and
            friendly people! No matter which side of Australia you end up on,
            you’ll find safe and vibrant communities full of caring, kind
            people.
          </p>

          <p className="text-base lg:text-lg font-sans text-gray-500 leading-relaxed">
            As a particularly diverse and multicultural society, Australia is
            very welcoming to immigrants and international students
            alike—meaning you’ll find friendly faces wherever in the country you
            go.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunityCanada;
