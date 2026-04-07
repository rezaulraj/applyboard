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
      className="solution-pill"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        background: "rgba(255,255,255,0.96)",
        borderRadius: "50px",
        padding: "10px 18px 10px 12px",
        boxShadow: `0 4px 24px 0 rgba(79,142,247,0.10), 0 1.5px 6px 0 rgba(0,0,0,0.07)`,
        border: `1.5px solid rgba(79,142,247,0.10)`,
        whiteSpace: "nowrap",
        cursor: "pointer",
        userSelect: "none",
        transition: "box-shadow 0.22s, transform 0.22s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 8px 32px 0 ${color}44, 0 2px 8px 0 rgba(0,0,0,0.10)`;
        e.currentTarget.style.transform = "scale(1.07) translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 4px 24px 0 rgba(79,142,247,0.10), 0 1.5px 6px 0 rgba(0,0,0,0.07)`;
        e.currentTarget.style.transform = "scale(1) translateY(0)";
      }}
    >
      <span
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: `${color}18`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: color,
          fontSize: 18,
          flexShrink: 0,
        }}
      >
        {icon}
      </span>
      <span
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 700,
          fontSize: 14,
          color: "#1a2340",
          letterSpacing: "-0.01em",
        }}
      >
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
    <>
      <style>{`
        @import url('@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");');

        .solution-section {
          background: linear-gradient(160deg, #eaf2ff 0%, #f5f9ff 50%, #e8f3f8 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          font-family: 'Montserrat', sans-serif;
          overflow: hidden;
          position: relative;
        }
        .solution-section::before {
          content: '';
          position: absolute;
          top: -120px; left: -120px;
          width: 480px; height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, #c2d9ff55 0%, transparent 70%);
          pointer-events: none;
        }
        .solution-section::after {
          content: '';
          position: absolute;
          bottom: -80px; right: -80px;
          width: 340px; height: 340px;
          border-radius: 50%;
          background: radial-gradient(circle, #b2e8f855 0%, transparent 70%);
          pointer-events: none;
        }
        .solution-inner {
          max-width: 1180px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .solution-badge {
          font-family: 'Open Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.16em;
          color: #4F8EF7;
          text-transform: uppercase;
          margin-bottom: 14px;
          opacity: 0;
          animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.1s forwards;
        }
        .solution-title {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(20px, 3.5vw, 36px);
          font-weight: 700;
          color: #0f1f45;
          text-align: center;
          line-height: 1.18;
          margin-bottom: 18px;
          max-width: 940px;
          opacity: 0;
          animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.22s forwards;
        }
        .solution-desc {
          font-size: clamp(14px, 1.6vw, 16px);
          color: #6b7fa3;
          text-align: center;
          max-width: 760px;
          line-height: 1.7;
          margin-bottom: 32px;
          opacity: 0;
          animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.34s forwards;
        }
        .solution-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(90deg, #4F8EF7, #2563eb);
          color: #fff;
          font-family: 'Open Sans', sans-serif;
          font-weight: 600;
          font-size: 18px;
          padding: 14px 32px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 24px #4F8EF744;
          transition: transform 0.2s, box-shadow 0.2s;
          margin-bottom: 54px;
          letter-spacing: -0.01em;
          opacity: 0;
          animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.46s forwards;
        }
        .solution-btn:hover {
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 8px 32px #4F8EF766;
        }
        .solution-visual {
          position: relative;
          width: 100%;
          max-width: 860px;
          min-height: 480px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }
        .solution-arc {
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 85%;
          height: 88%;
          border-radius: 50% 50% 0 0 / 60% 60% 0 0;
          border: 2px solid rgba(79,142,247,0.13);
          background: linear-gradient(180deg, rgba(79,142,247,0.06) 0%, rgba(79,142,247,0.01) 100%);
          z-index: 0;
        }
        .solution-arc-inner {
          position: absolute;
          top: 12%;
          left: 50%;
          transform: translateX(-50%);
          width: 65%;
          height: 72%;
          border-radius: 50% 50% 0 0 / 60% 60% 0 0;
          border: 1.5px dashed rgba(79,142,247,0.12);
          z-index: 0;
        }
        .solution-image-wrap {
          position: relative;
          z-index: 2;
          width: 280px;
          height: 380px;
          flex-shrink: 0;
        }
        .solution-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          border-radius: 200px 200px 0 0;
          display: block;
          filter: drop-shadow(0 12px 40px #4F8EF722);
        }
        .solution-image-bg {
          position: absolute;
          bottom: 0; left: 50%;
          transform: translateX(-50%);
          width: 230px;
          height: 230px;
          border-radius: 50%;
          background: radial-gradient(circle, #d6e8ff 0%, #eaf2ff 100%);
          z-index: -1;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .solution-image-wrap {
          animation: floatY 4s ease-in-out infinite;
        }

        /* Responsive */
        @media (max-width: 700px) {
          .solution-visual {
            min-height: 340px;
          }
          .solution-image-wrap {
            width: 180px;
            height: 240px;
          }
          .solution-image-bg {
            width: 160px; height: 160px;
          }
        }
        @media (max-width: 500px) {
          .solution-visual {
            min-height: 280px;
          }
          .solution-image-wrap {
            width: 140px;
            height: 190px;
          }
        }
      `}</style>

      <section className="solution-section" ref={sectionRef}>
        <div className="solution-inner">
          {/* Badge */}
          <div className="solution-badge">360 Solutions</div>

          {/* Title */}
          <h2 className="solution-title">
            Find Every Solution, From Applications to Accommodations
          </h2>

          {/* Description */}
          <p className="solution-desc">
            Access our full 360 Solutions, covering everything from application
            to arrival. Get instant language test vouchers, explore financial
            services, and invest in your future with flexible student loans.
            It's all here.
          </p>

          {/* CTA Button */}
          <button className="solution-btn">Register as a Student</button>

          {/* Visual */}
          <div className="solution-visual">
            {/* Arc backgrounds */}
            <div className="solution-arc" />
            <div className="solution-arc-inner" />

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
            <div className="solution-image-wrap">
              <div className="solution-image-bg" />
              <img
                src="https://plus.unsplash.com/premium_photo-1681505586788-75d4415202df?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Student"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solution;
