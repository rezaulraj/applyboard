import React, { useState } from "react";
import CountryFlag from "react-country-flag";

const TrustedPartners = () => {
  const [activeCountry, setActiveCountry] = useState("australia");

  const countries = [
    { id: "australia", name: "Australia", code: "AU", link: "/australia" },
    { id: "canada", name: "Canada", code: "CA", link: "/canada" },
    { id: "germany", name: "Germany", code: "DE", link: "/germany" },
    { id: "ireland", name: "Ireland", code: "IE", link: "/ireland" },
    { id: "united-states", name: "United States", code: "US", link: "/usa" },
    { id: "united-kingdom", name: "United Kingdom", code: "GB", link: "/uk" },
  ];

  const universities = {
    australia: [
      {
        name: "Deakin University",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf8MHcQQAEt9YXGGjEVqKVeQjBdqBCWbIkMw&s",
      },
      {
        name: "RMIT University",
        logo: "https://1000logos.net/wp-content/uploads/2020/10/Macquarie-University-logo.jpg",
      },
      {
        name: "La Trobe University",
        logo: "https://talloiresnetwork.tufts.edu/wp-content/uploads/the-university-of-newcastle-australia-vector-logo.png",
      },
      {
        name: "University of Tasmania",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7z1mCp714S3wLWkPECNgc6ugSMEGLfL3jdA&s",
      },
      {
        name: "Griffith University",
        logo: "https://courseseeker.edu.au/assets/images/institutions/3027.png",
      },
      {
        name: "Western Sydney University",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu5dcykrs14pOu0IdqqkdkVqUBFDHSfQVubw&s",
      },
      {
        name: "James Cook University",
        logo: "https://vectorseek.com/wp-content/uploads/2023/09/Federation-University-Australia-Logo-Vector.svg-.png",
      },
      {
        name: "Federation University",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSo41z7OsFWR889lbIBCmxqeryIeY-qD6LyA&s",
      },
    ],
    canada: [
      {
        name: "University of Toronto",
        logo: "https://www.woundscanada.ca/images/2024/07/26/university-of-toronto-logo-fec5e0e0e6-seeklogo.com.png",
      },
      {
        name: "McGill University",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPBEhyqH8kTgC-9PD3Qy0kQXrf-kp42oaaug&s",
      },
      {
        name: "University of Waterloo",
        logo: "https://bestoverseas.in/upload/university/01.png",
      },
      {
        name: "University of British Columbia",
        logo: "https://data.universitystudy.ca/wp-content/uploads/2024/10/UM_Logo_HORZ_CMYK_web-2.jpg",
      },
      {
        name: "York University",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAwMa077EE7oZmgPkwLikbN0ymEN1JXUB2Tw&s",
      },
      {
        name: "Simon Fraser University",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUiRcX6dxTCsYcu4GBCN7U1HTAR4Dg11x6uA&s",
      },
      {
        name: "University of Alberta",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRidCylVuV5JlmL-FkG8AwTTrEM1BhIm7x4yA&s",
      },
      {
        name: "McMaster University",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6h3L7OUZofXuXINnXNTC9lqaCDsLeKkyxcA&s",
      },
    ],
    germany: [
      {
        name: "Technical University of Munich",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZYIOCAOTVnVeuGNBm9m8XRV_gJFzmYoWFMA&s",
      },
      {
        name: "LMU Munich",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Universitaet_zu_Koeln_Logo_ENG.jpg",
      },
      {
        name: "Heidelberg University",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnBAM8zmx3-ShaIADZ9qIfY3GQKyNOFVw-Uw&s",
      },
      {
        name: "Humboldt University",
        logo: "https://content.web-repository.com/s/22746302800119232/thumbnails/640x480/UE_Germany/Screenshot_2023-07-18_125951-9674413.jpg?format=webp",
      },
      {
        name: "RWTH Aachen",
        logo: "https://smiconsultant.com/wp-content/uploads/2025/03/arden-university.webp",
      },
      {
        name: "University of Bonn",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM3epo4U1n-TR6Xp6MP374OCj_QZpogbdM6Q&s",
      },
      {
        name: "Free University of Berlin",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJGjE9DlMLfYQmig0Sm7YmUofvxOsdUCBdWg&s",
      },
      {
        name: "University of Freiburg",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN0yl8iS34NSNpe3TXFhifTkf1p9PafDIYbg&s",
      },
    ],
    ireland: [
      {
        name: "Trinity College Dublin",
        logo: "https://www.standyou.com/uploads/20220425161538_file_University-Of-Limerick-Logo.png",
      },
      {
        name: "University College Dublin",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/University_College_Dublin_logo.svg/200px-University_College_Dublin_logo.svg.png",
      },
      {
        name: "University College Cork",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/University_College_Dublin_logo.svg/200px-University_College_Dublin_logo.svg.png",
      },
      {
        name: "National University of Ireland",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/University_College_Dublin_logo.svg/200px-University_College_Dublin_logo.svg.png",
      },
      {
        name: "Dublin City University",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/University_College_Dublin_logo.svg/200px-University_College_Dublin_logo.svg.png",
      },
      {
        name: "University of Limerick",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/University_College_Dublin_logo.svg/200px-University_College_Dublin_logo.svg.png",
      },
      {
        name: "Maynooth University",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/University_College_Dublin_logo.svg/200px-University_College_Dublin_logo.svg.png",
      },
      {
        name: "University of Galway",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/University_College_Dublin_logo.svg/200px-University_College_Dublin_logo.svg.png",
      },
    ],
    "united-states": [
      {
        name: "Harvard University",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpS_PzirCrWKlTTo4sd4VeP0alVnKK1G3RtQ&s",
      },
      {
        name: "Stanford University",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpS_PzirCrWKlTTo4sd4VeP0alVnKK1G3RtQ&s",
      },
      {
        name: "MIT",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpS_PzirCrWKlTTo4sd4VeP0alVnKK1G3RtQ&s",
      },
      {
        name: "Yale University",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpS_PzirCrWKlTTo4sd4VeP0alVnKK1G3RtQ&s",
      },
      {
        name: "Princeton University",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpS_PzirCrWKlTTo4sd4VeP0alVnKK1G3RtQ&s",
      },
      {
        name: "Columbia University",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpS_PzirCrWKlTTo4sd4VeP0alVnKK1G3RtQ&s",
      },
      {
        name: "University of Chicago",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpS_PzirCrWKlTTo4sd4VeP0alVnKK1G3RtQ&s",
      },
      {
        name: "University of Pennsylvania",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpS_PzirCrWKlTTo4sd4VeP0alVnKK1G3RtQ&s",
      },
    ],
    "united-kingdom": [
      {
        name: "University of Oxford",
        logo: "https://miro.medium.com/v2/resize:fit:1248/1*5VdMquqyoxU4drclBAd8lw.png",
      },
      {
        name: "University of Cambridge",
        logo: "https://miro.medium.com/v2/resize:fit:1248/1*5VdMquqyoxU4drclBAd8lw.png",
      },
      {
        name: "Imperial College London",
        logo: "https://miro.medium.com/v2/resize:fit:1248/1*5VdMquqyoxU4drclBAd8lw.png",
      },
      {
        name: "UCL",
        logo: "https://miro.medium.com/v2/resize:fit:1248/1*5VdMquqyoxU4drclBAd8lw.png",
      },
      {
        name: "University of Edinburgh",
        logo: "https://miro.medium.com/v2/resize:fit:1248/1*5VdMquqyoxU4drclBAd8lw.png",
      },
      {
        name: "King's College London",
        logo: "https://miro.medium.com/v2/resize:fit:1248/1*5VdMquqyoxU4drclBAd8lw.png",
      },
      {
        name: "London School of Economics",
        logo: "https://miro.medium.com/v2/resize:fit:1248/1*5VdMquqyoxU4drclBAd8lw.png",
      },
      {
        name: "University of Manchester",
        logo: "https://miro.medium.com/v2/resize:fit:1248/1*5VdMquqyoxU4drclBAd8lw.png",
      },
    ],
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 space-y-3">
          <span className="text-sm font-bold font-sans tracking-[2px] text-blue-600 uppercase">
            TRUSTED PARTNERS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
            Trusted by 1,500+ Universities, Colleges, and Schools Worldwide
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {countries.map((country) => (
            <button
              key={country.id}
              onClick={() => setActiveCountry(country.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCountry === country.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <CountryFlag
                countryCode={country.code}
                svg
                className="w-5 h-5 rounded-sm"
              />
              {country.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {universities[activeCountry]?.map((university, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 flex items-center justify-center min-h-[120px] animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={university.logo}
                  alt={university.name}
                  className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/200x80?text=" +
                      encodeURIComponent(university.name);
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href={countries.find((c) => c.id === activeCountry)?.link}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold font-sans text-base px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 group"
          >
            <span className="flex items-center gap-2">
              Explore More{" "}
              {activeCountry === "australia"
                ? "Australian"
                : countries.find((c) => c.id === activeCountry)?.name}{" "}
              Institutions
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
            </span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default TrustedPartners;
