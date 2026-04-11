import React from "react";
import CountryFlag from "react-country-flag";

const ApplyBoardInsights = () => {
  const articles = [
    {
      id: 1,
      category: "AdmissionOnBoard Insights",
      title:
        "These Fields of Study in the UK Are Attracting International Students, Though Visa Data Suggests Softened Demand for 2026",
      date: "Apr 1, 2026",
      flag: "GB",
      bgColor: "bg-purple-600",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      graphicColor: "text-purple-300",
      link: "/blogs",
    },
    {
      id: 2,
      category: "AdmissionOnBoard Insights",
      title:
        "Canadian Permanent Resident Approval Rates Remain Higher for International Graduates in 2025",
      date: "Mar 25, 2026",
      flag: "CA",
      bgColor: "bg-teal-600",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      graphicColor: "text-teal-300",
      link: "/blogs",
    },
    {
      id: 3,
      category: "AdmissionOnBoard Insights",
      title:
        "First-Time Postsecondary Applicants for a New Canadian Student Visa had a 52% Approval Rate in 2025",
      date: "Mar 12, 2026",
      flag: "CA",
      bgColor: "bg-orange-500",
      image:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      graphicColor: "text-orange-300",
      link: "/blogs",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-base font-medium font-montserrat tracking-[1.5px] text-[#1e6deb] uppercase mb-3">
            AdmissionOnBoard INSIGHTS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-montserrat text-gray-900">
            Explore the Latest AdmissionOnBoard Insights
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div
                className={`relative h-48 ${article.bgColor} overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="currentColor"
                      className={article.graphicColor}
                    />
                    <rect
                      x="120"
                      y="30"
                      width="60"
                      height="60"
                      fill="currentColor"
                      className={article.graphicColor}
                      rx="8"
                    />
                    <circle
                      cx="250"
                      cy="80"
                      r="30"
                      fill="currentColor"
                      className={article.graphicColor}
                    />
                    <rect
                      x="300"
                      y="20"
                      width="80"
                      height="40"
                      fill="currentColor"
                      className={article.graphicColor}
                      rx="4"
                    />
                    <line
                      x1="20"
                      y1="150"
                      x2="150"
                      y2="100"
                      stroke="currentColor"
                      strokeWidth="3"
                      className={article.graphicColor}
                    />
                    <line
                      x1="150"
                      y1="100"
                      x2="280"
                      y2="140"
                      stroke="currentColor"
                      strokeWidth="3"
                      className={article.graphicColor}
                    />
                    <line
                      x1="280"
                      y1="140"
                      x2="380"
                      y2="120"
                      stroke="currentColor"
                      strokeWidth="3"
                      className={article.graphicColor}
                    />
                  </svg>
                </div>

                <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-lg">
                  <CountryFlag
                    countryCode={article.flag}
                    svg
                    style={{
                      width: "2em",
                      height: "2em",
                    }}
                    title={article.flag === "GB" ? "United Kingdom" : "Canada"}
                  />
                </div>

                <div className="absolute top-4 right-4 w-24 h-24 rounded-lg overflow-hidden shadow-lg border-2 border-white">
                  <img
                    src={article.image}
                    alt="Article thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute bottom-4 left-4 text-white opacity-60">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
              </div>

              <div className="p-6">
                <span className="inline-block px-3 py-1 font-montserrat bg-blue-50 text-blue-600 text-xs font-semibold rounded-full mb-3">
                  {article.category}
                </span>

                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug font-montserrat">
                  {article.title}
                </h3>

                <p className="text-sm text-gray-500 mb-4 font-sans">
                  {article.date}
                </p>


                <a
                  href={article.link}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 font-sans"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-1"
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
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/blogs"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 font-sans transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View More Articles
          </a>
        </div>
      </div>
    </div>
  );
};

export default ApplyBoardInsights;
