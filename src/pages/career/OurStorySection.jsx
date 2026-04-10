import React from "react";

const OurStorySection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-montserrat">
          Our Story
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed font-sans">
              Since 2015, AdmissionOnBoard has been on a mission to make education
              accessible. Our co-founders, Meti, Martin, and Massi Basiri, were
              international students themselves. After facing obstacles and
              struggling with a restrictive process, the brothers saw an
              opportunity to break down these barriers.
            </p>

            <p className="text-gray-700 leading-relaxed font-sans">
              In 2024, AdmissionOnBoard was named one of the fastest-growing
              technology companies in Canada by Deloitte, ranking #4 on the
              Deloitte Technology Fast 50 Enterprise—Industry leaders list. This
              marked the sixth consecutive year that AdmissionOnBoard was recognized
              by Deloitte.
            </p>

            {/* Mission and Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {/* Mission Card */}
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 font-montserrat">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed font-sans">
                  We enable global access to global education through our full
                  service platform, empowering students, institutions, and
                  partners across the globe.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 font-montserrat">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed font-sans">
                  To unlock the potential of every aspiring mind.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="space-y-4">
            {/* Top Row - Two Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="AdmissionOnBoard team at event"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="AdmissionOnBoard mascot presentation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom Row - One Large Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
              <img
                src="https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AdmissionOnBoard team photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
