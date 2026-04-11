import React, { useState } from "react";
import StudentRegistrationPopup from "../../components/common/StudentRegistrationPopup";

const Hero = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <section className="mt-10">
      <div className="max-w-6xl mx-auto bg-blue-50 rounded-4xl px-16 py-8 flex items-center justify-between gap-10 overflow-hidden min-h-[400px]">
        <div className="flex-1 max-w-[500px]">
          <h1 className="text-5xl font-bold font-montserrat text-[#1E2D4E] leading-normal">
            Your Future Goes
            <span className="block text-blue-600">Beyond Borders</span>
          </h1>
          <p className="font-sans text-[18px] text-gray-500 leading-relaxed mt-4 mb-8 max-w-[420px]">
            Explore 1,500+ global universities and colleges. Submit your best
            possible application with a 95% success rate. Unlock your full
            potential with AdmissionOnBoard!
          </p>
          <button
            onClick={() => setPopupOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 font-sans leading-relaxed text-white font-semibold text-[18px] px-7 py-3 rounded-lg transition-colors duration-200"
          >
            Register as a Student
          </button>
        </div>

        <div className="shrink-0 relative w-[380px] h-[420px]">
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
                className={`${item.bg} rounded-[18px] overflow-hidden w-[150px] h-[150px]`}
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
      </div>
      <StudentRegistrationPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
    </section>
  );
};

export default Hero;
