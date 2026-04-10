import React, { useState } from "react";
import PartnershipFormModal from "../../components/common/PartnershipFormModal";

const HeroRecruitment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold font-montserrat leading-tight text-gray-900">
                Join the Smartest Platform for{" "}
                <span className="text-orange-500">
                  International Student Recruitment
                </span>
              </h1>

              <p className="text-lg text-gray-600 font-sans leading-relaxed max-w-lg">
                Revolutionize your international student enrolment with the
                smartest platform for global student mobility, trusted by over
                1,500 institutions worldwide.
              </p>

              <button
                onClick={openModal}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Register Now
              </button>
            </div>

            {/* Right Column: Image Collage */}
            <div className="flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-md flex gap-4">
                {/* Left Column of Images */}
                <div className="flex flex-col gap-4 w-1/2">
                  {/* Top Image: People with laptop */}
                  <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[3/4] bg-gray-100">
                    <img
                      src="https://images.pexels.com/photos/8199610/pexels-photo-8199610.jpeg"
                      alt="Students studying together"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Bottom Image: Telescope */}
                  <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-square bg-orange-100 flex items-center justify-center">
                    <img
                      src="https://images.pexels.com/photos/3915455/pexels-photo-3915455.jpeg"
                      alt="Telescope on tripod"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right Main Image: Man with Laptop */}
                <div className="w-3/4 relative h-auto">
                  {/* Orange Background Blob for aesthetic match */}
                  <div className="absolute inset-0 bg-orange-100 rounded-3xl transform scale-90"></div>

                  <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl aspect-[2/4]">
                    <img
                      src="https://images.pexels.com/photos/34008273/pexels-photo-34008273.jpeg"
                      alt="Man in yellow shirt holding laptop"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Form Modal */}
      <PartnershipFormModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default HeroRecruitment;
