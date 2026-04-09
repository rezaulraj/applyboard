import React from "react";

const StudentVisa = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-14">
      {/* Top Section: Student Visa */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        {/* Left: Text */}
        <div className="flex flex-col gap-5 col-span-7">
          <p className="text-sm font-bold font-sans tracking-[1.5px] text-blue-600 uppercase">
            Student Visa
          </p>
          <h2 className="text-3xl font-bold font-montserrat text-gray-900 leading-tight">
            Getting an Australian Student Visa
          </h2>
          <p className="text-base lg:text-lg font-sans text-gray-600 leading-relaxed">
            International students need a student visa (Subclass 500) to travel
            to and study in Australia.
          </p>
          <p className="text-base lg:text-lg font-sans text-gray-600 leading-relaxed">
            To apply, you'll submit your student visa application online through
            the Australian Government's{" "}
            <a
              href="#"
              className="text-base lg:text-lg font-sans text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors leading-relaxed"
            >
              ImmiAccount system
            </a>
            . You can only apply for your Australian student visa after
            enrolling in a course of study, paying your enrollment deposit, and
            receiving your Electronic Confirmation of Enrollment (eCoE).
          </p>
        </div>

        {/* Right: Image with badge */}
        <div className="relative col-span-4">
          <div className="rounded-2xl overflow-hidden h-96 shadow-xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1661594735500-da5058ebd10d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="International student"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4">
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg w-fit">
              <div className="w-7 h-7 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-3.5 h-3.5 text-green-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M8 4v4M12 4v4M16 4v4M2 10h20" />
                  <circle cx="8" cy="15" r="1" fill="currentColor" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-800">
                Student Visa
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative rounded-2xl bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 px-12 py-14 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[220px]">
        {/* Decorative rings */}
        <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-white/20 pointer-events-none" />
        <div className="absolute right-[-110px] top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-white/15 pointer-events-none" />
        <div className="absolute right-[-160px] top-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full border border-white/10 pointer-events-none" />

        {/* Text */}
        <div className="relative z-30 flex flex-col gap-4">
          <h3 className="text-4xl font-bold font-montserrat text-white leading-tight">
            Study in Australia and
            <br />
            Achieve <span className="text-purple-500">Your Dreams</span>
          </h3>
          <p className="text-base font-sans leading-relaxed text-white/80 ">
            Ready to launch your study abroad journey? It can be intimidating,
            but we’re here for you! Follow in the steps of 1.3M+ other students
            and trust AdmissionOnBoard’s team of experts to guide your way.
          </p>
          <button className="mt-2 w-fit bg-white text-blue-700 font-sans font-semibold text-base px-7 py-3.5 rounded-xl hover:bg-purple-50 transition-colors">
            Find Your Perfect Program
          </button>
        </div>

        {/* Student Image */}
        <div className="relative z-10 flex justify-end items-end h-full">
          <img
            src="/irl.png"
            alt="Smiling student with laptop"
            className="absolute -bottom-14 right-0 h-96 z-20 w-auto object-cover object-top rounded-t-2xl"
            style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.25))" }}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentVisa;
