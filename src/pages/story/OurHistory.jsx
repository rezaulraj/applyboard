import React, { useState } from "react";

const OurHistory = () => {
  const [selectedYear, setSelectedYear] = useState("2025");

  const years = ["2025", "2024", "2023", "2022", "2021", "2020-2015"];

  const timelineData = {
    2025: [
      {
        month: "November 2025",
        title: "Launched the fifth AdmissionOnBoard Trends Report",
        icon: "chart",
        position: "right",
      },
      {
        month: "October 2025",
        title:
          "2.5 billion+ media impressions on ApplyInsights articles for the year",
        icon: "document",
        position: "left",
      },
      {
        month: "June 2025",
        title: "Over 1.3 million students helped",
        icon: "graduation",
        position: "right",
      },
      {
        month: "January 2025",
        title: "Launched in Germany",
        icon: "building",
        position: "left",
      },
    ],
    2024: [
      {
        month: "November 2024",
        title:
          "Ranked on Deloitte's Fast 50 for Enterprise—Industry leaders list",
        icon: "trophy",
        position: "right",
      },
      {
        month: "August 2024",
        title: "Expanded partnership network to 150+ countries",
        icon: "globe",
        position: "left",
      },
      {
        month: "March 2024",
        title: "Launched AI-powered application matching system",
        icon: "ai",
        position: "right",
      },
    ],
    2023: [
      {
        month: "December 2023",
        title: "Reached 1 million student placements milestone",
        icon: "users",
        position: "left",
      },
      {
        month: "July 2023",
        title: "Opened new office in Mumbai, India",
        icon: "building",
        position: "right",
      },
    ],
    2022: [
      {
        month: "September 2022",
        title: "Launched AdmissionOnBoard Mobile App",
        icon: "mobile",
        position: "left",
      },
      {
        month: "April 2022",
        title: "Secured $200M in Series D funding",
        icon: "funding",
        position: "right",
      },
    ],
    2021: [
      {
        month: "November 2021",
        title: "Named one of Canada's Best Employers",
        icon: "award",
        position: "left",
      },
      {
        month: "June 2021",
        title: "Expanded to UK market",
        icon: "globe",
        position: "right",
      },
    ],
    "2020-2015": [
      {
        month: "2020",
        title: "Launched virtual orientation platform",
        icon: "video",
        position: "left",
      },
      {
        month: "2019",
        title: "Reached 100,000 student placements",
        icon: "users",
        position: "right",
      },
      {
        month: "2017",
        title: "Expanded to Australia market",
        icon: "globe",
        position: "left",
      },
      {
        month: "2015",
        title: "AdmissionOnBoard founded in Kitchener, Ontario",
        icon: "startup",
        position: "right",
      },
    ],
  };

  const getIcon = (iconName) => {
    const icons = {
      chart: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      document: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      graduation: (
        <svg
          className="w-6 h-6"
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
      ),
      building: (
        <svg
          className="w-6 h-6"
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
      ),
      trophy: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      globe: (
        <svg
          className="w-6 h-6"
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
      ),
      ai: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      users: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      mobile: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      funding: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      award: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      video: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
      startup: (
        <svg
          className="w-6 h-6"
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
      ),
    };
    return icons[iconName] || icons.chart;
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8 font-montserrat">
          Our History
        </h2>

        {/* Year Selector */}
        <div className="mb-12 overflow-x-auto pb-2">
          <div className="flex justify-center min-w-max bg-white rounded-full p-2 shadow-md mx-auto max-w-fit">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedYear === year
                    ? "bg-blue-600 text-white shadow-md transform scale-105"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {timelineData[selectedYear]?.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  item.position === "left" ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`w-5/12 ${item.position === "left" ? "text-right pr-8" : "text-left pl-8"}`}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300 transform hover:-translate-y-1 group">
                    <div
                      className={`flex items-center gap-3 mb-3 ${item.position === "left" ? "flex-row-reverse" : ""}`}
                    >
                      <div
                        className={`w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300`}
                      >
                        {getIcon(item.icon)}
                      </div>
                      <span className="text-sm font-bold text-blue-600 font-montserrat">
                        {item.month}
                      </span>
                    </div>
                    <p className="text-gray-700 font-medium leading-relaxed">
                      {item.title}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                </div>

                {/* Empty Space for other side */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 rounded-full text-blue-700 font-semibold">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Continuing to grow and innovate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
