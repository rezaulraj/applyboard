import React, { useEffect, useRef, useState } from "react";
import {
  FaGraduationCap,
  FaMoneyBillWave,
  FaLanguage,
  FaBolt,
  FaSearch,
  FaExchangeAlt,
  FaUniversity,
  FaIdCard,
  FaHome,
} from "react-icons/fa";

const solutions = [
  {
    id: 1,
    label: "GIC Program",
    icon: <FaGraduationCap />,
    color: "#4F8EF7",
    position: { top: "2%", left: "50%", transform: "translateX(-50%)" },
    delay: 0,
  },
  {
    id: 2,
    label: "Student Loans",
    icon: <FaMoneyBillWave />,
    color: "#F7A84F",
    position: { top: "18%", left: "10%" },
    delay: 80,
  },
  {
    id: 3,
    label: "Foreign Exchange",
    icon: <FaExchangeAlt />,
    color: "#4FF7C0",
    position: { top: "18%", right: "8%" },
    delay: 160,
  },
  {
    id: 4,
    label: "Language Tests",
    icon: <FaLanguage />,
    color: "#A84FF7",
    position: { top: "38%", left: "2%" },
    delay: 240,
  },
  {
    id: 5,
    label: "Banking",
    icon: <FaUniversity />,
    color: "#F74F4F",
    position: { top: "38%", right: "2%" },
    delay: 320,
  },
  {
    id: 6,
    label: "Instant Applications",
    icon: <FaBolt />,
    color: "#4FC8F7",
    position: { top: "57%", left: "6%" },
    delay: 400,
  },
  {
    id: 7,
    label: "Visa Services",
    icon: <FaIdCard />,
    color: "#F7D94F",
    position: { top: "57%", right: "5%" },
    delay: 480,
  },
  {
    id: 8,
    label: "Program Search",
    icon: <FaSearch />,
    color: "#4FF77A",
    position: { top: "74%", left: "12%" },
    delay: 560,
  },
  {
    id: 9,
    label: "Accommodations",
    icon: <FaHome />,
    color: "#F74FC8",
    position: { top: "74%", right: "10%" },
    delay: 640,
  },
];

const SolutionPill = ({ label, icon, color, style, delay, visible }) => (
  <div
    style={{
      ...style,
      position: "absolute",
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      opacity: visible ? 1 : 0,
      transform: visible
        ? "scale(1) translateY(0)"
        : "scale(0.85) translateY(18px)",
    }}
  >
    <div
      className="flex items-center gap-2.5 bg-white/96 rounded-full py-2.5 pl-3 pr-[18px] whitespace-nowrap cursor-pointer select-none transition-all duration-[0.22s] hover:scale-105 hover:-translate-y-0.5"
      style={{
        boxShadow: `0 4px 24px 0 rgba(79,142,247,0.10), 0 1.5px 6px 0 rgba(0,0,0,0.07)`,
        border: `1.5px solid rgba(79,142,247,0.10)`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 8px 32px 0 ${color}44, 0 2px 8px 0 rgba(0,0,0,0.10)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 4px 24px 0 rgba(79,142,247,0.10), 0 1.5px 6px 0 rgba(0,0,0,0.07)`;
      }}
    >
      <span
        className="w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0"
        style={{
          background: `${color}18`,
          color: color,
        }}
      >
        {icon}
      </span>
      <span className="font-['Open_Sans'] font-bold text-sm text-[#1a2340] tracking-[-0.01em]">
        {label}
      </span>
    </div>
  </div>
);

const Solution = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="bg-gradient-to-br from-[#eaf2ff] via-[#f5f9ff] to-[#e8f3f8] min-h-[70vh] flex items-center justify-center py-15 px-5 font-['Montserrat'] overflow-hidden relative"
      ref={sectionRef}
    >
      {/* Decorative circles */}
      <div className="absolute -top-[120px] -left-[120px] w-[480px] h-[480px] rounded-full bg-radial-[circle_from_center] from-[#c2d9ff55] to-transparent pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[340px] h-[340px] rounded-full bg-radial-[circle_from_center] from-[#b2e8f855] to-transparent pointer-events-none" />

      <div className="max-w-[1180px] w-full mx-auto flex flex-col items-center">
        {/* Badge */}
        <div className="font-['Open_Sans'] text-xs font-medium tracking-[0.16em] text-[#4F8EF7] uppercase mb-[14px] opacity-0 animate-[fadeUp_0.7s_cubic-bezier(.22,1,.36,1)_0.1s_forwards]">
          360 Solutions
        </div>

        {/* Title */}
        <h2 className="font-['Montserrat'] text-[clamp(20px,3.5vw,36px)] font-bold text-[#0f1f45] text-center leading-[1.18] mb-[18px] max-w-[940px] opacity-0 animate-[fadeUp_0.7s_cubic-bezier(.22,1,.36,1)_0.22s_forwards]">
          Find Every Solution, From Applications to Accommodations
        </h2>

        {/* Description */}
        <p className="text-[clamp(14px,1.6vw,16px)] text-[#6b7fa3] text-center max-w-[760px] leading-[1.7] mb-8 opacity-0 animate-[fadeUp_0.7s_cubic-bezier(.22,1,.36,1)_0.34s_forwards]">
          Access our full 360 Solutions, covering everything from application to
          arrival. Get instant language test vouchers, explore financial
          services, and invest in your future with flexible student loans. It's
          all here.
        </p>

        {/* CTA Button */}
        <button className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4F8EF7] to-[#2563eb] text-white font-['Open_Sans'] font-semibold text-lg py-3.5 px-8 rounded-full cursor-pointer shadow-[0_4px_24px_#4F8EF744] transition-transform duration-200 hover:-translate-y-0.5 hover:scale-104 hover:shadow-[0_8px_32px_#4F8EF766] mb-[54px] tracking-[-0.01em] opacity-0 animate-[fadeUp_0.7s_cubic-bezier(.22,1,.36,1)_0.46s_forwards]">
          Register as a Student
        </button>

        {/* Visual */}
        <div className="relative w-full max-w-[860px] min-h-[480px] flex items-end justify-center max-[700px]:min-h-[340px] max-[500px]:min-h-[280px]">
          {/* Arc backgrounds */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-[88%] rounded-[50%_50%_0_0/60%_60%_0_0] border-2 border-[rgba(79,142,247,0.13)] bg-gradient-to-b from-[rgba(79,142,247,0.06)] to-[rgba(79,142,247,0.01)] z-0" />
          <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[65%] h-[72%] rounded-[50%_50%_0_0/60%_60%_0_0] border border-dashed border-[rgba(79,142,247,0.12)] z-0" />

          {/* Floating pills */}
          {solutions.map((s) => (
            <SolutionPill
              key={s.id}
              label={s.label}
              icon={s.icon}
              color={s.color}
              style={s.position}
              delay={s.delay}
              visible={visible}
            />
          ))}

          {/* Center image */}
          <div className="relative z-2 w-[280px] h-[380px] flex-shrink-0 max-[700px]:w-[180px] max-[700px]:h-[240px] max-[500px]:w-[140px] max-[500px]:h-[190px]">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[230px] h-[230px] rounded-full bg-radial-[circle_from_center] from-[#d6e8ff] to-[#eaf2ff] -z-1 max-[700px]:w-[160px] max-[700px]:h-[160px]" />
            <img
              className="w-full h-full object-cover object-top rounded-[200px_200px_0_0] block drop-shadow-[0_12px_40px_#4F8EF722]"
              src="/student.png"
              alt="Student"
            />
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes floatY {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default Solution;
