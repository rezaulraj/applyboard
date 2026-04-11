import React, { useState } from "react";
import PartnershipFormModal from "../../components/common/PartnershipFormModal";

const HeroStory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden min-h-[600px] lg:min-h-[500px]">
          {/* Full Width Background Image */}
          <img
            src="https://images.pexels.com/photos/3781537/pexels-photo-3781537.jpeg"
            alt="Student writing in notebook"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient Overlay - White on left, transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-white/70 to-transparent"></div>

          {/* Content Container */}
          <div className="relative z-10 max-w-6xl mx-auto px-8 lg:px-12 xl:px-16 py-16 lg:py-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 font-montserrat">
                Unlock Potential
              </h2>

              <p className="text-gray-700 text-base lg:text-xl leading-relaxed mb-8 font-sans">
                At AdmissionOnBoard, we believe in unlocking the potential of
                every aspiring mind.
              </p>
              <p className="text-gray-700 text-base lg:text-xl leading-relaxed mb-8 font-sans">
                We enable global access to global education by connecting
                students, partner institutions, and recruitment partners on one
                intuitive full-service platform.
              </p>

              <button
                onClick={openModal}
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Partner with Us
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
            </div>
          </div>
        </div>
      </div>
      <PartnershipFormModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default HeroStory;
