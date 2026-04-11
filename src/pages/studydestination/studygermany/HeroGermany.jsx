import React, { useState } from "react";
import StudentRegistrationPopup from "../../../components/common/StudentRegistrationPopup";

const HeroGermany = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-purple-50/30 flex items-center px-6 sm:px-12 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center md:px-16">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold leading-normal text-gray-900">
            Your Study Abroad{" "}
            <span className="bg-[#9846c3] bg-clip-text text-transparent">
              Journey to Germany
            </span>{" "}
            Starts Here
          </h1>

          <p className="text-gray-600 text-base lg:text-lg font-sans leading-relaxed max-w-xl">
            Located in the very heart of Europe, Germany is a cultural and
            education powerhouse, holding an impressive{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline underline-offset-2 hover:text-blue-800 transition-colors"
            >
              10% of the world’s top 200 universities!
            </a>{" "}
            Learn how you can enjoy the country’s exceptional quality of life
            and career opportunities for yourself by studying abroad in historic
            Deutschland.
          </p>

          <button
            onClick={() => setPopupOpen(true)}
            className="group relative inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-base md:text-lg font-sans rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
          >
            Start Your Journey
          </button>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-3 sm:gap-4 h-auto lg:h-[380px] ">
          <div className="col-span-2 row-span-3 relative overflow-hidden rounded-2xl shadow-xl group">
            <img
              src="https://images.unsplash.com/photo-1634627219651-70f2c49a5bcd?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Student in Sydney with Opera House"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="col-span-1 row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://plus.unsplash.com/premium_photo-1661962435210-e6cdbb2cbeb4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

export default HeroGermany;
