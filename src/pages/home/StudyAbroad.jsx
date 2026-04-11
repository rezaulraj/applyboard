import React, { useState } from "react";
import { LuBookOpen, LuUser } from "react-icons/lu";
import { RiBarChart2Fill } from "react-icons/ri";
import StudentRegistrationPopup from "../../components/common/StudentRegistrationPopup";

const features = [
  { icon: LuBookOpen, text: "Easily apply to multiple programs" },
  {
    icon: LuUser,
    text: "Find your perfect program from 150,000+ options in five top destinations",
  },
  {
    icon: RiBarChart2Fill,
    text: "Get a higher chance of success with quality checks and AI technology",
  },
];

const StudyAbroad = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <section className="flex items-center gap-12 px-12 py-14 max-w-6xl mx-auto flex-wrap">
      <div className="flex-1 min-w-[280px]">
        <p className="text-base font-medium font-montserrat tracking-[1.5px] text-[#1e6deb] uppercase mb-3">
          International Students
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold font-montserrat text-gray-800 leading-tight mb-4">
          Find Your Perfect Study Program
        </h2>
        <p className="text-base lg:text-lg text-gray-600 font-sans leading-relaxed mb-7 max-w-lg">
          We've spent a decade perfecting a faster, easier, quality-first
          international study application process. Now, the world is yours to
          explore in just a few clicks.
        </p>

        <ul className="flex flex-col gap-4 mb-9">
          {features.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="text-blue-600 text-base" />
              </div>
              <span className="text-base lg:text-lg text-gray-600 font-sans leading-relaxed">
                {text}
              </span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setPopupOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 font-sans text-white font-semibold text-[18px] px-8 py-[14px] rounded-xl transition-colors duration-200 cursor-pointer"
        >
          Create a Student Account
        </button>
      </div>

      <div className="shrink-0 grid grid-cols-2 gap-3 w-[420px]">
        <div className="row-span-2 rounded-[18px] overflow-hidden h-[380px]">
          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Student"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="bg-blue-600 rounded-[18px] p-5 flex flex-col gap-2">
          <LuBookOpen className="text-white text-[28px] opacity-90" />
          <p className="text-[32px] font-extrabold text-white font-montserrat leading-none">
            95%
          </p>
          <p className="text-base text-white/80 font-sans">Acceptance Rate</p>
        </div>

        <div className="rounded-[18px] overflow-hidden h-[220px]">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=260&fit=crop"
            alt="Students studying"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <StudentRegistrationPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
    </section>
  );
};

export default StudyAbroad;
