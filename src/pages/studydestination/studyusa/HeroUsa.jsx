import React from "react";

const HeroUsa = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-purple-50/30 flex items-center px-6 sm:px-12 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center md:px-16">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold leading-normal text-gray-900">
            Your Study Abroad Journey{" "}
            <span className="bg-[#e86f3c] bg-clip-text text-transparent">
              to the United States
            </span>{" "}
            Starts Here
          </h1>

          <p className="text-gray-600 text-base lg:text-lg font-sans leading-relaxed max-w-xl">
            The United States of America is the world’s #1 study destination for
            a reason. Learn all about the USA, and how to begin your study
            journey there, with the information on this page.
          </p>

          <button className="group relative inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-base font-sans rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5">
            Start Your Journey
          </button>
        </div>

        {/* Right Images Grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-3 sm:gap-4 h-auto lg:h-[380px] ">
          {/* Main Large Image - Student with Sydney Opera House */}
          <div className="col-span-2 row-span-3 relative overflow-hidden rounded-2xl shadow-xl group">
            <img
              src="https://plus.unsplash.com/premium_photo-1682657000431-84ea0dcf361c?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Student in Sydney with Opera House"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Top Small Image - Male Student with Books */}
          <div className="col-span-1 row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
            <img src="https://images.unsplash.com/photo-1715006019828-8ac44a1d9c2d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Bottom Small Image - Australian Flags */}
          <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://images.pexels.com/photos/7972313/pexels-photo-7972313.jpeg"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroUsa;
