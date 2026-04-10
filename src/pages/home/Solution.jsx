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
import StudentRegistrationPopup from "../../components/common/StudentRegistrationPopup";

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

const SolutionPill = ({ label, icon, color, style, delay, visible, id }) => (
  <div
    className={`solution-pill solution-pill-${id}`}
    style={{
      ...style,
      position: "absolute",
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      opacity: visible ? 1 : 0,
      transform: visible
        ? "scale(1) translateY(0)"
        : "scale(0.85) translateY(18px)",
      zIndex: 20,
    }}
  >
    <div
      className="pill-inner flex items-center gap-2.5 bg-white/96 rounded-full py-2.5 pl-3 pr-[18px] whitespace-nowrap cursor-pointer select-none transition-all duration-[0.22s] hover:scale-105 hover:-translate-y-0.5"
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
  const containerRef = useRef(null);
  const [linePaths, setLinePaths] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  // Calculate dynamic SVG paths from pill positions to center
  useEffect(() => {
    if (!visible || !containerRef.current) return;

    // Use requestAnimationFrame to ensure DOM is painted
    const calculatePaths = () => {
      const container = containerRef.current;
      if (!container) return;

      const centerElement = container.querySelector(".center-image-container");
      if (!centerElement) return;

      const containerRect = container.getBoundingClientRect();
      const centerRect = centerElement.getBoundingClientRect();

      // Center point (where the image is)
      const centerX =
        centerRect.left + centerRect.width / 2 - containerRect.left;
      const centerY =
        centerRect.top + centerRect.height / 2 - containerRect.top;

      // Get all pill elements
      const newPaths = [];

      solutions.forEach((solution, index) => {
        const pillElement = container.querySelector(
          `.solution-pill-${solution.id}`,
        );
        if (!pillElement) return;

        const pillRect = pillElement.getBoundingClientRect();

        // Pill center coordinates relative to container
        const startX = pillRect.left + pillRect.width / 2 - containerRect.left;
        const startY = pillRect.top + pillRect.height / 2 - containerRect.top;

        // Calculate control points for a smooth curved line
        const dx = centerX - startX;
        const dy = centerY - startY;

        // Create a bezier curve that arcs outward
        let cp1x, cp1y, cp2x, cp2y;

        // For top center pill, create a downward curve
        if (solution.id === 1) {
          cp1x = startX + dx * 0.3;
          cp1y = startY + dy * 0.2;
          cp2x = startX + dx * 0.7;
          cp2y = startY + dy * 0.5;
        }
        // For left side pills, curve outward to the left then in
        else if (startX < centerX - 50) {
          cp1x = startX - Math.abs(dx) * 0.2;
          cp1y = startY + dy * 0.3;
          cp2x = startX + dx * 0.5;
          cp2y = centerY - Math.abs(dy) * 0.1;
        }
        // For right side pills, curve outward to the right then in
        else if (startX > centerX + 50) {
          cp1x = startX + Math.abs(dx) * 0.2;
          cp1y = startY + dy * 0.3;
          cp2x = startX + dx * 0.5;
          cp2y = centerY - Math.abs(dy) * 0.1;
        }
        // Default curve
        else {
          cp1x = startX + dx * 0.25;
          cp1y = startY + dy * 0.25;
          cp2x = startX + dx * 0.75;
          cp2y = startY + dy * 0.75;
        }

        const pathData = `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${centerX} ${centerY}`;

        newPaths.push({
          id: solution.id,
          d: pathData,
          color: solution.color,
          startX,
          startY,
          centerX,
          centerY,
          delay: solution.delay,
        });
      });

      setLinePaths(newPaths);
    };

    // Small delay to ensure DOM elements are fully rendered and positioned
    const timer = setTimeout(calculatePaths, 150);
    // Also recalculate on window resize
    window.addEventListener("resize", calculatePaths);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculatePaths);
    };
  }, [visible]);

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
    <section className=" bg-white">
      <section
        className="bg-gradient-to-br from-[#eaf2ff] via-[#f5f9ff] to-[#e8f3f8] flex items-center justify-center py-15 px-5 font-['Montserrat'] overflow-hidden relative"
        ref={sectionRef}
      >
        {/* Decorative circles */}
        <div className="absolute -top-[120px] -left-[120px] w-[480px] h-[480px] rounded-full bg-radial-[circle_from_center] from-[#c2d9ff55] to-transparent pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-[340px] h-[340px] rounded-full bg-radial-[circle_from_center] from-[#b2e8f855] to-transparent pointer-events-none" />

        <div className="max-w-[1180px] w-full mx-auto flex flex-col items-center">
          {/* Badge */}
          <div className="ttext-base font-medium font-montserrat tracking-[1.5px] text-[#1e6deb] uppercase mb-3">
            360 Solutions
          </div>

          {/* Title */}
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-center text-gray-800 leading-tight mb-6">
            Find Every Solution, From <br /> Applications to Accommodations
          </h2>

          {/* Description */}
          <p className="text-base lg:text-lg text-center text-gray-600 font-sans leading-relaxed mb-10 max-w-2xl">
            Access our full 360 Solutions, covering everything from application
            to arrival. Get instant language test vouchers, explore financial
            services, and invest in your future with flexible student loans.
            It's all here.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => setPopupOpen(true)}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 group cursor-pointer"
          >
            Register as a Student
          </button>

          {/* Visual */}
          <div
            className="relative w-full max-w-[860px] min-h-[480px] flex items-end justify-center max-[700px]:min-h-[340px] max-[500px]:min-h-[280px]"
            ref={containerRef}
          >
            {/* SVG Layer for connecting lines */}
            {visible && linePaths.length > 0 && (
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                style={{ overflow: "visible" }}
              >
                <defs>
                  {linePaths.map((path) => (
                    <linearGradient
                      key={`grad-${path.id}`}
                      id={`lineGradient-${path.id}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor={path.color}
                        stopOpacity="0.7"
                      />
                      <stop
                        offset="100%"
                        stopColor="#4F8EF7"
                        stopOpacity="0.9"
                      />
                    </linearGradient>
                  ))}
                  {/* Glow filter for lines */}
                  <filter
                    id="glow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {linePaths.map((path) => (
                  <path
                    key={path.id}
                    d={path.d}
                    fill="none"
                    stroke={`url(#lineGradient-${path.id})`}
                    strokeWidth="2"
                    strokeDasharray="6 4"
                    strokeLinecap="round"
                    filter="url(#glow)"
                    style={{
                      strokeDashoffset: visible ? 0 : 100,
                      animation: `drawLine 0.6s ease-out ${path.delay}ms forwards`,
                    }}
                  />
                ))}

                {/* Animated dots at the end of each line (center) */}
                {linePaths.map((path) => (
                  <circle
                    key={`dot-${path.id}`}
                    cx={path.centerX}
                    cy={path.centerY}
                    r="3"
                    fill={path.color}
                    style={{
                      animation: `pulseGlow 1.5s ease-in-out infinite ${(path.delay + 400) / 1000}s`,
                      opacity: 0,
                    }}
                  >
                    <animate
                      attributeName="opacity"
                      from="0"
                      to="0.8"
                      dur="0.4s"
                      begin={`${(path.delay + 300) / 1000}s`}
                      fill="freeze"
                    />
                  </circle>
                ))}
              </svg>
            )}

            {/* Arc backgrounds */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-[88%] rounded-[50%_50%_0_0/60%_60%_0_0] border-2 border-[rgba(79,142,247,0.13)] bg-gradient-to-b from-[rgba(79,142,247,0.06)] to-[rgba(79,142,247,0.01)] z-0" />
            <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[65%] h-[72%] rounded-[50%_50%_0_0/60%_60%_0_0] border border-dashed border-[rgba(79,142,247,0.12)] z-0" />

            {/* Floating pills */}
            {solutions.map((s) => (
              <SolutionPill
                key={s.id}
                id={s.id}
                label={s.label}
                icon={s.icon}
                color={s.color}
                style={s.position}
                delay={s.delay}
                visible={visible}
              />
            ))}

            {/* Center image */}
            <div className="center-image-container relative z-2 w-[280px] h-[380px] flex-shrink-0 max-[700px]:w-[180px] max-[700px]:h-[240px] max-[500px]:w-[140px] max-[500px]:h-[190px]">
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
          @keyframes pulseGlow {
            0%,
            100% {
              opacity: 0.5;
              r: 3;
            }
            50% {
              opacity: 1;
              r: 5;
            }
          }
          @keyframes drawLine {
            from {
              stroke-dashoffset: 100;
            }
            to {
              stroke-dashoffset: 0;
            }
          }
        `}</style>
      </section>
      <StudentRegistrationPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
    </section>
  );
};

export default Solution;
