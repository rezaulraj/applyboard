import { useState } from "react";

import PartnershipFormModal from "../../components/common/PartnershipFormModal";

const Impack = () => {
const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className=" bg-white pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="space-y-6">
            <div>
              <span className="text-base font-medium font-montserrat tracking-[1.5px] text-[#1e6deb] uppercase mb-3">
                IMPACT
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-800 mt-3 leading-tight">
                Step into the Spotlight
              </h2>
            </div>
            <p className="text-lg text-gray-600 font-sans leading-relaxed max-w-md">
              Unlock powerful, tailored support and skyrocket your institution's
              impact. Become a Growth Partner to get <strong>90%+</strong> more
              qualified student applications, and issue <strong>180%+</strong>{" "}
              more final offers.
            </p>
          </div>

          <div className="relative lg:h-[400px] flex items-center justify-center">
            <div className="relative z-10 bg-white p-6 rounded-xl shadow-xl border border-gray-100 w-64 sm:w-80">
              <div className="flex items-center space-x-2 mb-4 text-gray-500 font-semibold">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <span>Application</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-gray-200 rounded w-full"></div>
                <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                <div className="h-2 bg-gray-200 rounded w-4/6"></div>
                <div className="h-2 bg-gray-200 rounded w-full"></div>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 sm:left-10 sm:top-0 z-20 animate-bounce-slow">
              <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-50 flex flex-col items-center">
                <span className="text-xs font-bold text-gray-500 uppercase mb-1">
                  QUALITY
                </span>
                <div className="relative w-16 h-16">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      className="text-gray-100"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      className="text-green-300"
                      strokeDasharray="176"
                      strokeDashoffset="18"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-green-400">
                    +90%
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-4 sm:-right-8 z-30">
              <div className="bg-blue-400 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 text-sm font-medium">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Issue final offer</span>
              </div>
            </div>

            <div className="absolute top-12 -right-6 sm:right-0 z-20 space-y-2">
              {[
                {
                  color: "bg-yellow-100",
                  img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
                },
                {
                  color: "bg-purple-100",
                  img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
                },
                {
                  color: "bg-pink-100",
                  img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
                },
              ].map((student, i) => (
                <div key={i} className="relative group">
                  <div
                    className={`w-12 h-12 rounded-lg overflow-hidden border-2 border-white shadow-md ${student.color}`}
                  >
                    <img
                      src={student.img}
                      alt="Student"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl overflow-hidden shadow-2xl mt-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-20 w-64 h-64 bg-white opacity-5 rounded-full transform translate-y-1/3"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 items-center">
            <div className="md:col-span-2 p-8 flex justify-center md:justify-end">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                alt="Professional Man"
                className="rounded-xl shadow-lg object-cover h-48 w-48 md:h-64 md:w-56 mask-image-gradient"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 30%)",
                }}
              />
            </div>

            <div className="md:col-span-3 p-8 md:pl-12 text-white md:-ml-16">
              <h3 className="text-2xl sm:text-3xl font-bold leading-snug mb-6">
                Ready to take your recruitment to the next level of quality,
                efficiency, and control
              </h3>
              <button
                onClick={() => openModal()}
                className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md font-sans text-base md:text-lg"
              >
                Partner with us today
              </button>
            </div>
          </div>
        </div>
      </div>
      <PartnershipFormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Impack;
