import React from "react";
import CountryFlag from "react-country-flag";

const StudyDestinationsCanada = () => {
  const destinations = [
    { country: "Australia", code: "AU", path: "/study-in-australia" },
    { country: "Canada", code: "CA", path: "/study-in-canada" },
    { country: "Germany", code: "DE", path: "/study-in-germany" },
    { country: "Ireland", code: "IE", path: "/study-in-ireland" },
    { country: "United Kingdom", code: "GB", path: "/study-in-uk" },
    { country: "United States", code: "US", path: "/study-in-us" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 space-y-3">
          <span className="text-sm font-bold font-sans tracking-[1.5px] text-blue-600 uppercase">
            STUDY DESTINATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-gray-900">
            More Study Destinations to Explore
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {destinations.map((destination) => (
            <a
              key={destination.code}
              href={destination.path}
              className="group flex items-center gap-3 bg-white border border-gray-100 hover:border-gray-200 rounded-2xl px-6 py-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex-shrink-0">
                <CountryFlag
                  countryCode={destination.code}
                  svg
                  className="w-8 h-8 rounded shadow-sm"
                  title={destination.country}
                />
              </div>

              <span className="text-base font-semibold font-sans text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                Study in {destination.country}
              </span>

              <svg
                className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300 ml-auto"
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyDestinationsCanada;
