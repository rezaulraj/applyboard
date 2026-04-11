import React from "react";

const SuccessStoriesSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <p className="text-base font-medium font-montserrat tracking-[1.5px] text-[#1e6deb] uppercase mb-3">
            SUCCESS STORIES
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-gray-800 mb-6 leading-tight">
            Transformative Case Studies
          </h2>

          <p className="text-base sm:text-lg font-sans text-gray-600 leading-relaxed mb-8">
            " AdmissionOnBoard and Algoma worked together to build awareness
            around Algoma's affordable, flexible undergraduate options to a
            global student audience. This led to international undergraduate
            enrolment growing from 7 percent to 25 percent of international
            student enrolment over the last couple of years."
          </p>

          <a
            href="/blogs"
            className="inline-flex items-center px-6 py-2.5 border-2 border-blue-600 text-blue-600 font-semibold rounded-md font-sans hover:bg-blue-600 hover:text-white transition-colors duration-200 text-base"
          >
            Read More
          </a>
        </div>

        <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/3184303/pexels-photo-3184303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Student working on laptop"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg">
              <div className="bg-emerald-500 rounded-lg p-4 text-white shadow-lg">
                <p className="text-2xl font-bold font-montserrat">1.3 M+</p>
                <p className="text-sm font-medium mt-1 font-sans">
                  students helped
                </p>
              </div>

              <div className="bg-blue-600 rounded-lg p-4 text-white shadow-lg">
                <p className="text-2xl font-bold font-montserrat">150,000+</p>
                <p className="text-sm font-medium mt-1 font-sans">programs</p>
              </div>

              <div className="bg-gray-600/80 backdrop-blur-sm rounded-lg p-4 text-white shadow-lg">
                <p className="text-2xl font-bold font-montserrat">$200M+</p>
                <p className="text-sm font-medium mt-1">
                  in scholarships unlocked
                </p>
              </div>

              <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 text-white shadow-lg">
                <p className="text-2xl font-bold font-montserrat">1,500+</p>
                <p className="text-sm font-medium mt-1 font-sans">
                  partner institutions
                </p>
              </div>

              <div className="bg-purple-600 rounded-lg p-4 text-white shadow-lg">
                <p className="text-2xl font-bold font-montserrat">180+</p>
                <p className="text-sm font-medium mt-1 font-sans">
                  student countries
                </p>
              </div>

              <div className="bg-amber-500 rounded-lg p-4 text-white shadow-lg">
                <p className="text-2xl font-bold font-montserrat">5,000+</p>
                <p className="text-sm font-medium mt-1 font-sans">
                  recruitment partners
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesSection;
