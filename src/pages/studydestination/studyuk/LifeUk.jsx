import React from "react";

const LifeUk = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-16">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        {/* Left: Text */}
        <div className="flex flex-col gap-5 animate-fade-in col-span-7">
          <p className="text-base font-medium font-montserrat tracking-[1.5px] text-[#1e6deb] uppercase mb-3">
            Life
          </p>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-gray-900 leading-tight">
            Enjoy a High Quality of Life
          </h2>
          <p className="text-gray-600 text-base font-sans lg:text-lg leading-relaxed">
            No matter where you go in the United Kingdom, you can expect to be
            immersed in culture, surrounded by history, and enjoying a high
            quality of life overall!{" "}
          </p>
          <p className="text-gray-600 text-base font-sans lg:text-lg leading-relaxed">
            If you love a big city,{" "}
            <a
              href="https://www.topuniversities.com/city-rankings/2024"
              className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors"
            >
              London has been named the world’s best student city
            </a>{" "}
            for at least six years in a row. London is the most diverse part of
            the UK (with over 300 languages spoken there), beloved by its
            students (ranked consistently highly by QS based on student and
            alumni feedback), and offers incredible sport and culture to
            everyone. Plus, it’s home to many of the UK’s top universities and
            exciting career opportunities you can’t find elsewhere.
          </p>
          <p className="text-gray-600 text-base font-sans lg:text-lg leading-relaxed">
            Or, if London isn’t for you, consider the other countries within the
            UK, including Scotland, Wales, and Northern Ireland, or other parts
            of England. Each of these locales is known for their staggering
            natural beauty, dramatic architecture, and unique culture and
            history. These countries all offer international students
            extraordinary study abroad opportunities and fulfilling,
            unforgettable life experiences!
          </p>
        </div>

        {/* Right: Stacked Images */}
        <div className="flex flex-col gap-4 col-span-5">
          {/* Top image */}
          <div className="rounded-2xl shadow-lg h-64 relative ">
            <img
              src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              src="https://plus.unsplash.com/premium_photo-1663946448097-c2358e0c6b6c?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

      
    </div>
  );
};

export default LifeUk;
