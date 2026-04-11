import React from "react";
import { AiOutlineStock } from "react-icons/ai";
import { FaRobot, FaUsers } from "react-icons/fa";

const CommunityGermany = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-28 items-center md:items-start">
        <div
          className="flex flex-col gap-5 animate-fade-in col-span-5 order-2 md:order-1
        "
        >
          <div className="rounded-2xl shadow-lg h-64 relative z-10">
            <img
              src="https://images.pexels.com/photos/8197537/pexels-photo-8197537.jpeg"
              alt="Student working with equipment"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-4 -left-12 z-20">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md w-fit">
                <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <FaUsers className="w-3.5 h-3.5 text-purple-500" />
                </div>
                <span className="text-sm font-medium font-sans text-gray-800">
                  Diverse Population
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl shadow-lg h-56 w-4/5 self-end relative z-0 -mr-8">
            <img
              src="https://images.unsplash.com/photo-1449452198679-05c7fd30f416?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Graduate celebrating"
              className="w-full h-full object-cover object-top rounded-2xl"
            />
            <div className="absolute bottom-4 -right-12">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md w-fit">
                <div className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                  <AiOutlineStock className="w-3.5 h-3.5 text-cyan-500" />
                </div>
                <span className="text-sm font-medium font-sans text-gray-800">
                  Incredible Culture
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 col-span-7 order-1 md:order-2">
          <p className="text-base font-medium font-montserrat tracking-[1.5px] text-[#1e6deb] uppercase mb-3">
            Community
          </p>

          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-gray-900 leading-tight">
            Join a Safe and Welcoming Community
          </h2>

          <p className="text-gray-600 text-base font-sans lg:text-lg leading-relaxed">
            In addition to the positive student experience, many immigrants{" "}
            <a
              href="https://www.migrationpolicy.org/article/germanys-approach-integration-immigrants"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 hover:underline"
            >
              build happy new lives for themselves
            </a>{" "}
            in Germany. With its diverse and welcoming population, Germany is a
            safe and beloved home for global citizens from all different walks
            of life. In fact, it’s one of the world’s most popular immigration
            destinations, attracting over 1 million people every year!
          </p>

          <p className="text-gray-600 text-base font-sans lg:text-lg leading-relaxed">
            All across Germany, no matter where you end up, you’ll find kind,
            welcoming communities full of passionate, hardworking people. Not to
            mention Germany’s location in the very heart of Europe, giving you
            easy access to travel and explore all of the incredible culture and
            experience the entire continent has to offer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunityGermany;
