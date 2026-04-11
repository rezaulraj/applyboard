import React from "react";

const OurImpact = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image with Stats */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Graduate students celebrating"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Stat Card 1 - Top */}
            <div className="absolute -top-6 left-8 bg-white rounded-2xl shadow-xl p-4 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-purple-600"
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
                <div>
                  <p className="text-2xl font-bold text-gray-900">1.3M+</p>
                  <p className="text-sm text-gray-600">Students</p>
                </div>
              </div>
            </div>

            {/* Floating Stat Card 2 - Middle Right */}
            <div className="absolute top-1/2 -right-6 bg-white rounded-2xl shadow-xl p-4 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">10+</p>
                  <p className="text-sm text-gray-600">Years of Expertise</p>
                </div>
              </div>
            </div>

            {/* Floating Stat Card 3 - Bottom */}
            <div className="absolute -bottom-6 left-12 bg-white rounded-2xl shadow-xl p-4 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-teal-600"
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
                <div>
                  <p className="text-2xl font-bold text-gray-900">1,500+</p>
                  <p className="text-sm text-gray-600">Partner Institutions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight font-montserrat">
              Our Impact
            </h2>

            <div className="space-y-6 text-gray-600 font-sans text-lg lg:text-xl leading-relaxed">
              <p>
                AdmissionOnBoard has helped over 1.3 million students kickstart their
                study abroad journeys, built partnerships with over 1,500
                primary, secondary, and post-secondary institutions, and
                actively works with over 6,500 recruitment partners to drive
                diversity on campuses across Canada, the United States, the
                United Kingdom, Australia, Ireland, and Germany.
              </p>

              <p>
                AdmissionOnBoard provides a one-stop for students seeking global
                education opportunities, and the smartest full-service mobility
                solution for recruitment partners.
              </p>

              <p>
                We also offer document verification, training, financial
                services, language tests, and more to help students succeed
                throughout their entire journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
