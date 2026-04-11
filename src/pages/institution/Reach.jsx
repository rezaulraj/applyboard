import React from "react";

const Reach = () => {
  const students = [
    {
      id: 1,
      name: "Student 1",
      image: "https://randomuser.me/api/portraits/women/79.jpg",
      flag: "🇻🇪",
      position: "top-left",
      color: "bg-purple-100",
    },
    {
      id: 2,
      name: "Student 2",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      flag: "🇭",
      position: "top-right",
      color: "bg-teal-100",
    },
    {
      id: 3,
      name: "Student 3",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      flag: "🇳🇬",
      position: "middle-left",
      color: "bg-yellow-100",
    },
    {
      id: 4,
      name: "Student 4",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      flag: "🇦🇷",
      position: "middle-right",
      color: "bg-pink-100",
    },
    {
      id: 5,
      name: "Student 5",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
      flag: "🇹🇭",
      position: "bottom-left",
      color: "bg-cyan-100",
    },
    {
      id: 6,
      name: "Student 6",
      image:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
      flag: "🇵🇰",
      position: "bottom-right",
      color: "bg-purple-100",
    },
  ];

  return (
    <div className=" bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="uppercase tracking-wide">
              <span className="text-base font-medium font-montserrat tracking-[1.5px] text-[#1e6deb] uppercase mb-3">
                REACH
              </span>
            </div>

            <h1 className="text-4xl font-montserrat font-bold text-gray-800 leading-tight">
              Scale Your Reach to 180+ Student Markets
            </h1>

            <p className="text-base lg:text-lg text-gray-600 font-sans leading-relaxed max-w-xl">
               AdmissionOnBoard instantly presents your campus' unique offerings to an
              entire world of vetted, passionate student recruiters and
              ambitious student talent from 150+ countries.
            </p>
          </div>

          <div className="relative lg:h-[500px] flex items-center justify-center">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-md z-10">
              <div className="bg-gradient-to-r from-blue-300 to-blue-400 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <span className="text-white font-semibold text-sm">
                      University Profile
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-400">
                      University of Waterloo
                    </h3>
                    <div className="flex items-center mt-1 space-x-2">
                      <span className="text-red-300">🇨🇦</span>
                      <span className="text-gray-300 text-sm">Canada</span>
                      <span className="text-gray-300">|</span>
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-gray-300 text-sm">
                        Waterloo, ON
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-2 row-span-2">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd2U-b2QIuGYA2Dool-GP_6sOboUfs5T1Dig&s"
                      alt="Campus aerial view"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="col-span-1">
                    <img
                      src="https://aplicar-prod-public.s3.amazonaws.com/uploads/campus_images/cbe844bc-108e-40d9-8335-4a92a994f6f8/b1faos-campus-erial-est-ide-024x682.jpg"
                      alt="Campus building"
                      className="w-full h-20 object-cover rounded-lg"
                    />
                  </div>
                  <div className="col-span-1">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIx1WBh-6GVd_xB1nTlmPrECWfEBvkNolEBQ&s"
                      alt="Students on campus"
                      className="w-full h-20 object-cover rounded-lg"
                    />
                  </div>
                </div>

                <div className="flex space-x-4 mt-4 border-b border-gray-200">
                  <button className="pb-2 px-1 text-blue-300 border-b-2 border-blue-300 font-medium text-sm">
                    Overview
                  </button>
                  <button className="pb-2 px-1 text-gray-300 hover:text-gray-300 font-medium text-sm">
                    Features
                  </button>
                  <button className="pb-2 px-1 text-gray-300 hover:text-gray-300 font-medium text-sm">
                    Location
                  </button>
                  <button className="pb-2 px-1 text-gray-300 hover:text-gray-700 font-medium text-sm">
                    Programs
                  </button>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>

            <div className="absolute top-20 left-16 lg:left-4 transform -translate-x-1/2 z-20">
              <div
                className={`relative ${students[0].color} p-2 rounded-full shadow-lg`}
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white">
                  <img
                    src={students[0].image}
                    alt={students[0].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
                  <span className="text-2xl">{students[0].flag}</span>
                </div>
              </div>
            </div>

            <div className="absolute top-20 right-16 lg:right-4 transform translate-x-1/2 z-10">
              <div
                className={`relative ${students[1].color} p-2 rounded-full shadow-lg`}
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white">
                  <img
                    src={students[1].image}
                    alt={students[1].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
                  <span className="text-xl">{students[1].flag}</span>
                </div>
              </div>
            </div>

            <div className="absolute top-2/3 left-8 lg:left-0 transform -translate-x-1/2 z-20">
              <div
                className={`relative ${students[2].color} p-2 rounded-full shadow-lg`}
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white">
                  <img
                    src={students[2].image}
                    alt={students[2].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
                  <span className="text-2xl">{students[2].flag}</span>
                </div>
              </div>
            </div>

            <div className="absolute top-2/3 right-8 lg:right-8 transform translate-x-1/2 z-20">
              <div
                className={`relative ${students[3].color} p-2 rounded-full shadow-lg`}
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white">
                  <img
                    src={students[3].image}
                    alt={students[3].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
                  <span className="text-xl">{students[3].flag}</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-18 left-36 lg:left-36 transform -translate-x-1/2 z-20">
              <div
                className={`relative ${students[4].color} p-2 rounded-full shadow-lg`}
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white">
                  <img
                    src={students[4].image}
                    alt={students[4].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
                  <span className="text-xl">{students[4].flag}</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-18 right-36 lg:right-36 transform translate-x-1/2 z-20">
              <div
                className={`relative ${students[5].color} p-2 rounded-full shadow-lg`}
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white">
                  <img
                    src={students[5].image}
                    alt={students[5].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
                  <span className="text-2xl">{students[5].flag}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reach;
