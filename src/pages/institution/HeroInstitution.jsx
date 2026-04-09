import React from "react";

const HeroInstitution = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-purple-50/30 flex items-center px-6 sm:px-12 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center md:px-16">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold leading-normal text-gray-900">
            Attract Quality Students from{" "}
            <span className="bg-[#0a967c] bg-clip-text text-transparent">
              150+ Countries
            </span>
          </h1>

          <p className="text-gray-600 text-base lg:text-lg font-sans leading-relaxed max-w-xl">
            Revolutionize your international student enrolment with the smartest
            platform for global student mobility, trusted by over 1,500
            institutions worldwide.
          </p>

          <button className="group relative inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-base font-sans rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5">
            Partner with us
          </button>
        </div>

        {/* Right Images Grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-3 sm:gap-4 h-auto lg:h-[380px] ">
          <div className="col-span-2 row-span-3 relative overflow-hidden rounded-2xl shadow-xl group">
            <img
              src="https://images.unsplash.com/photo-1562767332-ce0b1e2426bb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Student in Sydney with Opera House"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Top Small Image - Male Student with Books */}
          <div className="col-span-1 row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
            <img src="https://images.unsplash.com/photo-1717239749112-1722940626d1?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Bottom Small Image - Australian Flags */}
          <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://plus.unsplash.com/premium_photo-1726862569563-37d29397ac3b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroInstitution;
