import React, { useState } from "react";
import PartnershipFormModal from "../../components/common/PartnershipFormModal";

const CareersBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden min-h-[600px] lg:min-h-[500px]">
          {/* Full Width Background Image */}
          <img
            src="https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Student writing in notebook"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient Overlay - White on left, transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-white/70 to-transparent"></div>

          {/* Content Container */}
          <div className="relative z-10 max-w-6xl mx-auto px-8 lg:px-12 xl:px-16 py-16 lg:py-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 font-montserrat">
                Help Us Change the World, One Student at a Time
              </h2>

              <p className="text-gray-700 text-base lg:text-xl leading-relaxed mb-8 font-sans">
                Our diverse team of 750+ AdmissionOnBoardians work from 35+
                countries around the world. Join us in building a more equitable
                future for students—you'll challenge yourself, grow, and have a
                whole lot of fun along the way!
              </p>

              <button
                onClick={openModal}
                className="inline-flex items-center px-8 py-4 bg-blue-700 text-white text-xl font-semibold rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                disabled={true}
              >
                View Open Roles
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
              <p className="text-gray-700 text-xs leading-relaxed mt-2 font-sans">
                "No open positions. Please check again soon."
              </p>
            </div>
          </div>
        </div>
      </div>
      <PartnershipFormModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default CareersBanner;
