import React from "react";
import { PiGraduationCap } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { MdOutlineFlag } from "react-icons/md";
import { RiUserStarLine } from "react-icons/ri";

const stats = [
  {
    icon: PiGraduationCap,
    stat: "1.3M+",
    label: "Students Helped",
    color: "text-blue-500",
    bg: "bg-blue-500",
  },
  {
    icon: TbWorld,
    stat: "150,000+",
    label: "Global Programs",
    color: "text-rose-500",
    bg: "bg-gradient-to-br from-rose-500 to-pink-500",
  },
  {
    icon: HiOutlineBuildingLibrary,
    stat: "1,500+",
    label: "Institutions Globally",
    color: "text-emerald-500",
    bg: "bg-emerald-500",
  },
  {
    icon: MdOutlineFlag,
    stat: "180+",
    label: "Nationalities",
    color: "text-orange-500",
    bg: "bg-orange-500",
  },
  {
    icon: RiUserStarLine,
    stat: "10+",
    label: "Years of Expertise",
    color: "text-violet-500",
    bg: "bg-violet-500",
  },
];

const Stats = () => {
  return (
    <section className="py-16 px-8 text-center">
      <h2 className="text-[34px] font-montserrat font-bold text-[#1E2D4E] leading-tight mb-12">
        The Fastest and Easiest Way
        <br />
        to Successfully Study Abroad
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
        {stats.map(({ icon: Icon, stat, label, color, bg }) => (
          <div
            key={stat}
            className="bg-white rounded-2xl border border-gray-200 p-7 text-left"
          >
            <div
              className={`w-[52px] h-[52px] rounded-[14px] ${bg} flex items-center justify-center mb-5`}
            >
              <Icon className="text-white text-[26px]" />
            </div>
            <p className={`text-[26px] font-extrabold ${color} mb-1`}>{stat}</p>
            <p className="text-sm text-gray-500 font-sans">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
