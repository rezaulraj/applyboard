import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-purple-50/30 flex items-center px-6 sm:px-12 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center md:px-16">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-4xl font-montserrat font-bold leading-normal text-gray-900">
            Your Journey to{" "}
            <span className="bg-[#9846c3] bg-clip-text text-transparent">
              Study in Australia
            </span>{" "}
            Starts Here
          </h1>

          <p className="text-gray-600 text-base font-sans leading-relaxed max-w-xl">
            Australia might be your top study abroad choice for so many reasons:
            academic excellence, laid-back lifestyle, exciting job
            opportunities, and more. Learn all about Australia, and how to begin
            your study journey there, with the information on this page.
          </p>

          <button className="group relative inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-base font-sans rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5">
            Start Your Journey
          </button>
        </div>

        {/* Right Images Grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-3 sm:gap-4 h-auto lg:h-[380px] ">
          {/* Main Large Image - Student with Sydney Opera House */}
          <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl shadow-xl group">
            <img
              src="https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Student in Sydney with Opera House"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Top Small Image - Male Student with Books */}
          <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://plus.unsplash.com/premium_photo-1661594735500-da5058ebd10d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Bottom Small Image - Australian Flags */}
          <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1680173764109-bfe1a34a1877?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Australia flag and beach"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
