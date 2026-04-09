import React from "react";
import { LuUsersRound, LuLayers, LuClock } from "react-icons/lu";

const features = [
  {
    icon: LuUsersRound,
    text: "Access 150,000+ programs at 1,500+ academic institutions",
  },
  {
    icon: LuLayers,
    text: "Use AI-powered tools to benefit from  AdmissionOnBoard's 95% application success rate",
  },
  {
    icon: LuClock,
    text: "Support students with extra built-in services, from language tests to student loans",
  },
];

const RecruitmentSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-12 py-14">
      {/* TOP ROW */}
      <div className="flex items-center gap-12 flex-wrap">
        {/* Left */}
        <div className="flex-1 min-w-[280px]">
          <p className="text-base font-medium font-montserrat tracking-[1.5px] text-[#1e6deb] uppercase mb-3">
            Recruitment Partners
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold font-montserrat text-gray-800 leading-tight mb-7">
            How We Help Recruitment Partners
          </h2>

          <ul className="flex flex-col gap-5 mb-9">
            {features.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-4">
                <div className="w-[38px] h-[38px] rounded-[9px] bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="text-blue-600 text-[18px]" />
                </div>
                <span className="text-[18px] font-sans text-gray-600 leading-relaxed">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          <button className="mt-2 px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white text-[18px] font-medium rounded-lg transition-colors w-fit font-sans">
            Join Our Network
          </button>
        </div>

        {/* Right image grid */}
        <div
          className="flex-shrink-0 grid gap-3"
          style={{
            width: 380,
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "200px 160px",
          }}
        >
          <div
            className="rounded-2xl overflow-hidden"
            style={{ gridColumn: 1, gridRow: 1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop&crop=faces"
              className="w-full h-full object-cover"
              alt="Partners"
            />
          </div>

          <div
            className="rounded-2xl overflow-hidden bg-amber-400"
            style={{ gridColumn: 2, gridRow: "1/3" }}
          >
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=top"
              className="w-full h-full object-cover object-top"
              alt="Professional"
            />
          </div>

          <div
            className="rounded-2xl bg-orange-500 p-5 flex flex-col gap-1.5"
            style={{ gridColumn: 1, gridRow: 2 }}
          >
            <LuUsersRound className="text-white text-[26px] opacity-90" />
            <p className="text-[22px] font-extrabold text-white leading-none">
              1.3 Million+
            </p>
            <p className="text-[12.5px] text-white/85">Students Helped</p>
          </div>
        </div>
      </div>

      {/* CTA BANNER */}
      <div className="mt-10 rounded-[20px] bg-blue-600 flex items-end gap-10 overflow-hidden px-14 relative min-h-[180px]">
        <div className="absolute left-16 bottom-[-60px] w-64 h-64 rounded-full bg-white/5" />
        <div className="absolute left-5 bottom-[-90px] w-80 h-80 rounded-full bg-white/[0.03]" />

        <div className="shrink-0 self-end">
          <img
            src="/choose.webp"
            className="w-[180px] h-[280px] object-cover"
            alt="Student"
          />
        </div>

        <div className="flex-1 py-9">
          <h3 className="text-[28px] font-bold font-montserrat text-white mb-2 leading-snug">
            Choose from 150,000+ Study Programs
          </h3>
          <p className="text-[14px] text-white/80 font-sans leading-relaxed mb-6 max-w-lg">
            Pick your programs. Apply all at once. Built-in quality checks give
            you a ~95% chance of application success.
          </p>
          <button className="border-2 border-white/70 font-sans text-white font-bold text-base px-6 py-[10px] rounded-lg hover:bg-white hover:text-blue-600 transition-all">
            Start Your Student Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentSection;
