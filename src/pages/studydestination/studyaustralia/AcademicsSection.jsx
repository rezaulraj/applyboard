import React from "react";

const AcademicsSection = () => {
  // Featured programs data
  const featuredPrograms = [
    {
      university: "Griffith University",
      program: "Bachelor of Engineering (Honours)",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
    },
    {
      university: "La Trobe University",
      program: "Bachelor of Health Sciences",
      image:
        "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&q=80",
    },
    {
      university: "Deakin University - Geelong",
      program: "Bachelor of Social Work",
      image:
        "https://images.unsplash.com/photo-1627556592933-ffe99c1cd9eb?w=600&q=80",
    },
  ];

  return (
    <div className="space-y-20">
      {/* Main Academics Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="space-y-6 col-span-5 order-2 md:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Students studying together"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center space-x-3 bg-gray-50 rounded-xl p-4">
                <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center p-2">
                  <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?w=100&q=80"
                    alt="University Logo 1"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center p-2">
                  <img
                    src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=100&q=80"
                    alt="University Logo 2"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center p-2">
                  <img
                    src="https://images.unsplash.com/photo-1627556592933-ffe99c1cd9eb?w=100&q=80"
                    alt="University Logo 3"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80"
                  alt="Graduates celebrating"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 col-span-7 order-1 md:order-2">
            <span className="text-sm font-bold font-sans tracking-[1.5px] text-blue-600 uppercase mb-3">
              ACADEMICS
            </span>

            <h2 className="text-3xl font-montserrat font-bold text-gray-900 leading-tight">
              Get a Globally Respected Education
            </h2>

            <p className="text-gray-600 text-base font-sans leading-relaxed">
              Australia offers plenty of exciting, high-quality options for your
              study abroad journey. The country's many prestigious universities
              and trade institutes are recognized around the world for their
              quality and innovation. In fact, Australia's education system is
              closely regulated by the government to uphold its high standard of
              quality.
            </p>

            <p className="text-gray-600 text-base font-sans leading-relaxed">
              If you're looking for a premium education that will challenge you
              and help you grow as a lifelong learner and professional, consider
              pursuing an Australian education!
            </p>
          </div>
        </div>
      </div>

      {/* Featured Programs Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50/50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 font-montserrat">
              Explore Feature Australian Study Programs
            </h3>
            <button className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-50 text-blue-600 font-semibold rounded-lg border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md group">
              Explore more programs
              <svg
                className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredPrograms.map((program, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={program.image}
                    alt={`${program.university} campus`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-blue-600 shadow-md">
                      <svg
                        className="w-3 h-3 mr-1.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Featured
                    </span>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">
                      {program.university}
                    </p>
                    <h4 className="text-lg font-bold text-gray-900 leading-snug">
                      {program.program}
                    </h4>
                  </div>

                  {/* Apply Now Button */}
                  <button className="w-full py-3 px-4 bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-300 group/btn">
                    <span className="flex items-center justify-center gap-2">
                      Apply Now
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicsSection;
