import React, { useState } from "react";
import StudentRegistrationPopup from "../../components/common/StudentRegistrationPopup";

const Hero = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section className="mt-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-blue-50 rounded-3xl sm:rounded-4xl px-6 sm:px-10 lg:px-16 py-10 sm:py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 overflow-hidden">
        {/* Text Content */}
        <div className="flex-1 w-full text-center lg:text-left z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-montserrat text-[#1E2D4E] leading-tight">
            Your Future Goes
            <span className="block text-blue-600 mt-2">Beyond Borders</span>
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mt-5 sm:mt-6 mb-6 sm:mb-8 max-w-full lg:max-w-[480px] mx-auto lg:mx-0">
            Explore 1,500+ global universities and colleges. Submit your best
            possible application with a 95% success rate. Unlock your full
            potential with AdmissionOnBoard!
          </p>
          <button
            onClick={() => setPopupOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 font-sans text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto mx-auto lg:mx-0"
          >
            Register as a Student
          </button>
        </div>

        {/* Image Grid - Desktop */}
        <div className="hidden lg:block shrink-0 relative w-[380px] h-[420px]">
          <div
            className="absolute inset-0 grid gap-10"
            style={{
              gridTemplateColumns: "repeat(2, 130px)",
              gridTemplateRows: "repeat(3, 130px)",
              transform: "rotate(45deg) translate(-10px, 30px)",
              transformOrigin: "center center",
            }}
          >
            {[
              {
                bg: "bg-amber-400",
                col: 2,
                row: 1,
                src: "https://plus.unsplash.com/premium_photo-1682089930633-6a76458014d4?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                bg: "bg-violet-500",
                col: 1,
                row: 2,
                src: "https://plus.unsplash.com/premium_photo-1682089861447-7363590a8ec9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                bg: "bg-emerald-500",
                col: 2,
                row: 2,
                src: "https://plus.unsplash.com/premium_photo-1683133311955-8092b79380a4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                bg: "bg-red-500",
                col: 1,
                row: 3,
                src: "https://plus.unsplash.com/premium_photo-1683133979652-a8f78aeef249?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                bg: "bg-blue-300",
                col: 2,
                row: 3,
                src: "https://plus.unsplash.com/premium_photo-1681487041056-38ab90b17605?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.bg} rounded-[18px] overflow-hidden w-[150px] h-[150px] shadow-lg`}
                style={{ gridColumn: item.col, gridRow: item.row }}
              >
                <img
                  src={item.src}
                  alt={`Student ${i + 1}`}
                  className="w-full h-full object-cover"
                  style={{
                    transform: "rotate(-45deg) scale(1.55)",
                    transformOrigin: "center center",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Image Grid - Tablet */}
        <div className="hidden md:block lg:hidden shrink-0 relative w-[320px] h-[360px]">
          <div
            className="absolute inset-0 grid gap-6"
            style={{
              gridTemplateColumns: "repeat(2, 110px)",
              gridTemplateRows: "repeat(3, 110px)",
              transform: "rotate(45deg) translate(-5px, 25px)",
              transformOrigin: "center center",
            }}
          >
            {[
              {
                bg: "bg-amber-400",
                col: 2,
                row: 1,
                src: "https://plus.unsplash.com/premium_photo-1682089930633-6a76458014d4?q=80&w=600&auto=format&fit=crop",
              },
              {
                bg: "bg-violet-500",
                col: 1,
                row: 2,
                src: "https://plus.unsplash.com/premium_photo-1682089861447-7363590a8ec9?q=80&w=600&auto=format&fit=crop",
              },
              {
                bg: "bg-emerald-500",
                col: 2,
                row: 2,
                src: "https://plus.unsplash.com/premium_photo-1683133311955-8092b79380a4?q=80&w=600&auto=format&fit=crop",
              },
              {
                bg: "bg-red-500",
                col: 1,
                row: 3,
                src: "https://plus.unsplash.com/premium_photo-1683133979652-a8f78aeef249?q=80&w=600&auto=format&fit=crop",
              },
              {
                bg: "bg-blue-300",
                col: 2,
                row: 3,
                src: "https://plus.unsplash.com/premium_photo-1681487041056-38ab90b17605?q=80&w=600&auto=format&fit=crop",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.bg} rounded-xl overflow-hidden w-[120px] h-[120px] shadow-md`}
                style={{ gridColumn: item.col, gridRow: item.row }}
              >
                <img
                  src={item.src}
                  alt={`Student ${i + 1}`}
                  className="w-full h-full object-cover"
                  style={{
                    transform: "rotate(-45deg) scale(1.4)",
                    transformOrigin: "center center",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Image Grid - Simplified */}
        <div className="md:hidden w-full flex justify-center">
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: "repeat(2, 110px)",
              gridTemplateRows: "repeat(3, 110px)",
              transform: "rotate(45deg) translate(-5px, 25px)",
              transformOrigin: "center center",
            }}
          >
            {[
              {
                bg: "bg-amber-400",
                col: 2,
                row: 1,
                src: "https://plus.unsplash.com/premium_photo-1682089930633-6a76458014d4?q=80&w=600&auto=format&fit=crop",
              },
              {
                bg: "bg-violet-500",
                col: 1,
                row: 2,
                src: "https://plus.unsplash.com/premium_photo-1682089861447-7363590a8ec9?q=80&w=600&auto=format&fit=crop",
              },
              {
                bg: "bg-emerald-500",
                col: 2,
                row: 2,
                src: "https://plus.unsplash.com/premium_photo-1683133311955-8092b79380a4?q=80&w=600&auto=format&fit=crop",
              },
              {
                bg: "bg-red-500",
                col: 1,
                row: 3,
                src: "https://plus.unsplash.com/premium_photo-1683133979652-a8f78aeef249?q=80&w=600&auto=format&fit=crop",
              },
              {
                bg: "bg-blue-300",
                col: 2,
                row: 3,
                src: "https://plus.unsplash.com/premium_photo-1681487041056-38ab90b17605?q=80&w=600&auto=format&fit=crop",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.bg} rounded-xl overflow-hidden w-[120px] h-[120px] shadow-md`}
                style={{ gridColumn: item.col, gridRow: item.row }}
              >
                <img
                  src={item.src}
                  alt={`Student ${i + 1}`}
                  className="w-full h-full object-cover"
                  style={{
                    transform: "rotate(-45deg) scale(1.4)",
                    transformOrigin: "center center",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <StudentRegistrationPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
    </section>
  );
};

export default Hero;
