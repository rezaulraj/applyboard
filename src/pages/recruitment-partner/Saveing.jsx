import React from "react";

const Saveing = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute top-1/2 -left-4 sm:left-12 transform -translate-y-1/2 z-20 hidden lg:flex items-start space-x-4 animate-pulse-slow">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-300 via-pink-300 to-purple-400 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-white font-bold text-xl font-sans">Q</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-[320px] relative">
                <p className="text-sm text-gray-400 leading-relaxed font-medium font-sans">
                  1. Calgary, offers a vibrant city life with lots of
                  activities. Home to institutions like SAIT...
                </p>
                <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-3 h-3 bg-white border-t border-r border-gray-100 rotate-45"></div>
              </div>
            </div>

            <div className="relative w-full max-w-sm bg-white rounded-2xl border-2 border-blue-100 shadow-2xl overflow-hidden z-10">
              <div className="bg-gradient-to-r from-blue-300 to-blue-400 px-4 py-3 flex justify-center items-center">
                <h3 className="text-gray-200 font-bold text-lg tracking-wide font-sans">
                  Live Chat
                </h3>
              </div>

              <div className="p-5 bg-gray-50/50 space-y-6 min-h-[340px]">
                <div className="flex justify-end items-start space-x-3">
                  <div className="flex flex-col items-end space-y-2 max-w-[80%]">
                    <div className="bg-blue-100 text-blue-900 px-4 py-3 rounded-2xl rounded-tr-none text-sm shadow-sm leading-snug font-sans">
                      My student wants to study in Alberta. What are the most
                      popular cities?
                    </div>
                    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
                      <img
                        src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150"
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-start items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 border-2 border-white shadow-sm">
                    <span className="text-blue-600 font-bold text-xs font-sans">AI</span>
                  </div>
                  <div className="flex flex-col items-start space-y-2 max-w-[80%]">
                    <div className="bg-white border border-gray-100 text-gray-500 px-4 py-3 rounded-2xl rounded-tl-none text-sm shadow-sm font-sans leading-snug">
                      1. Calgary, offers a vibrant city life with lots of
                      activities. Home to institutions like SAIT...
                    </div>
                  </div>
                </div>

                <div className="flex justify-end items-start space-x-3">
                  <div className="flex flex-col items-end space-y-2 max-w-[80%]">
                    <div className="bg-blue-100 font-sans text-blue-400 px-4 py-3 rounded-2xl rounded-tr-none text-sm shadow-sm leading-snug">
                      Great! What about top programs?
                    </div>
                    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
                      <img
                        src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150"
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-base font-medium font-montserrat tracking-[1.5px] text-[#1e6deb] uppercase mb-3">
                SAVINGS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-montserrat text-gray-800 leading-tight">
              Save Yourself Time and Money
            </h2>

            <p className="text-base lg:text-lg text-gray-600 font-sans leading-relaxed max-w-md">
              Use proven automation technology to speed up applications and
              eliminate back-and-forth. Revolutionize your workflow and put
              students (and your business) on the fast track to success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Saveing;
