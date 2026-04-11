import React, { useState } from "react";
import PartnershipFormModal from "../../components/common/PartnershipFormModal";

const SolutionBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Banner Container */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-white">
          <div className="flex flex-col md:flex-row min-h-[320px] rounded-r-full bg-gradient-to-br from-teal-400 to-teal-200">
            {/* Left: Image Section */}
            <div className="md:w-2/5 lg:w-1/3 relative h-64 md:h-auto">
              <img
                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional woman with tablet near coastal lighthouse"
                className="absolute inset-0 w-full h-full object-cover rounded-r-full"
              />
              {/* Subtle overlay for better contrast if needed */}
              <div className="absolute inset-0 bg-black/5"></div>
            </div>

            {/* Right: Content & Gradient Section */}
            <div className="flex-1 bg-gradient-to-br from-teal-400 to-teal-200 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
              {/* Decorative Curved Lines */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 pointer-events-none">
                <div className="w-72 h-72 border-2 border-white/25 rounded-full"></div>
                <div className="absolute top-10 left-10 w-52 h-52 border-2 border-white/25 rounded-full"></div>
                <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/25 rounded-full"></div>
              </div>

              {/* Text & Button Content */}
              <div className="relative z-10 max-w-lg">
                <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-white mb-3 leading-tight">
                  Discover More Ways We Help, From Application To Arrival
                </h2>
                <div className="flex items-center gap-4">
                  <button
                    onClick={openModal}
                    className="inline-flex items-center bg-white text-lg text-blue-600 font-semibold px-6 py-2.5 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all duration-200 mt-4"
                  >
                    I am a Recruitment Partner
                  </button>
                  <button
                    onClick={openModal}
                    className="inline-flex items-center border border-blue-600 text-lg text-blue-900 font-semibold px-6 py-2.5 rounded-lg hover:shadow-md transition-all duration-200 mt-4"
                  >
                    I work at a school
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PartnershipFormModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default SolutionBanner;
