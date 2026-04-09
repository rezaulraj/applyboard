import React from "react";

const GetStarted = () => {
  // Card data for clean mapping
  const cards = [
    {
      title: "Student",
      description:
        "Are you a student looking to study in Canada, the US, the UK, Ireland, Australia, or Germany? Register to launch your journey now!",
      buttonText: "Apply Now",
      buttonLink: "#",
      // Unsplash image: Student studying abroad / education concept
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1682089877310-b2308b0dc719?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgAccent: "from-blue-50 to-indigo-50",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      textColor: "text-blue-900",
    },
    {
      title: "Recruitment Partner",
      description:
        "Do you recruit and guide international students? Join our partner network and revolutionize your process!",
      buttonText: "Become a Recruitment Partner",
      buttonLink: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1752650735682-5d5981bae57d?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgAccent: "from-emerald-50 to-teal-50",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      textColor: "text-blue-900",
    },
    {
      title: "Partner School",
      description:
        "Join 1,500+ global institutions on the  AdmissionOnBoard platform! Complete our contact form, and our Partner Relations team will be in touch soon.",
      buttonText: "Become a Partner Institution",
      buttonLink: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1661983228065-e1fb51d026f5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgAccent: "from-amber-50 to-orange-50",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      textColor: "text-blue-900",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Main container */}
      <div className="max-w-7xl mx-auto">
        {/* Header / Title Section */}
        <div className="text-center mb-14 md:mb-20">
          <h1 className="text-[38px] font-bold tracking-tight font-montserrat text-gray-900 mb-4">
            Get Started with  AdmissionOnBoard
          </h1>
        </div>

        {/* Cards Grid - responsive 1/2/3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100`}
            >
              {/* Image Section with Unsplash source */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-grow p-6 pt-5">
                <p className="text-gray-700 leading-relaxed mb-6 text-base font-sans">
                  {card.description}
                </p>
                <div className="mt-auto pt-2">
                  <a
                    href={card.buttonLink}
                    className={`inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-transparent text-[18px] font-sans font-medium rounded-xl shadow-sm text-white ${card.buttonColor} transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${card.buttonColor.split(" ")[0].replace("bg-", "")} group-hover:shadow-md`}
                  >
                    {card.buttonText}
                    <svg
                      className="ml-2 -mr-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Decorative small indicator */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-sm font-bold text-gray-800">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
