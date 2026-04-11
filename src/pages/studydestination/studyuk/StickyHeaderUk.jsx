import React, { useState, useEffect, useRef } from "react";
import AcademicsUk from "./AcademicsUk";
import FlexibilityUk from "./FlexibilityUk";
import ExperienceUk from "./ExperienceUk";
import LifeUk from "./LifeUk";
import ResearchUk from "./ResearchUk";

const StickyHeaderUk = () => {
  const [activeSection, setActiveSection] = useState("academics");
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const sections = [
    {
      id: "academics",
      label: "ACADEMICS",
      color: "bg-blue-500",
      hasCustom: true,
      component: AcademicsUk,
    },
    {
      id: "flexibility",
      label: "FLEXIBILITY",
      color: "bg-green-500",
      hasCustom: true,
      component: FlexibilityUk,
    },
    {
      id: "experience",
      label: "EXPERIENCE",
      color: "bg-purple-500",
      hasCustom: true,
      component: ExperienceUk,
    },
    {
      id: "life",
      label: "LIFE",
      color: "bg-orange-500",
      hasCustom: true,
      component: LifeUk,
    },
    {
      id: "research",
      label: "RESEARCH",
      color: "bg-pink-500",
      hasCustom: true,
      component: ResearchUk,
    },
  ];

  const sectionRefs = useRef({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-120px 0px -80% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const lastSection = sectionRefs.current["community"];
      const lastSectionEnd = lastSection?.offsetTop + lastSection?.offsetHeight;

      if (lastSectionEnd && scrollPosition >= lastSectionEnd - 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = sectionRefs.current[id];
    if (element) {
      const offset = 160;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <div
        id="sticky-header"
        className={`sticky top-20 z-40 transition-all duration-500 ease-in-out ${
          isHeaderVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-white/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold text-center text-gray-800 mb-5">
              5 Incredible Reasons to Study in the UK
            </h2>

            <nav className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`
                    relative px-4 sm:px-5 lg:px-6 py-2.5 rounded-full font-semibold font-sans text-xs sm:text-sm uppercase tracking-wide
                    transition-all duration-300 ease-out
                    ${
                      activeSection === section.id
                        ? `${section.color} text-white shadow-lg scale-105 ring-2 ring-offset-2 ring-current`
                        : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 hover:scale-105"
                    }
                  `}
                >
                  {activeSection === section.id && (
                    <span
                      className={`absolute inset-0 rounded-full animate-ping opacity-20 ${section.color}`}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${activeSection === section.id ? "bg-white" : "bg-gray-400"}`}
                    />
                    {section.label}
                  </span>
                </button>
              ))}
            </nav>

            <div className="mt-5 flex justify-center">
              <div className="flex items-center gap-1">
                {sections.map((section, index) => (
                  <div key={section.id} className="flex items-center">
                    <div
                      className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                        activeSection === section.id
                          ? `${section.color} w-12 sm:w-16`
                          : sections.findIndex((s) => s.id === activeSection) >
                              index
                            ? `${section.color} w-1.5 opacity-60`
                            : "bg-gray-200 w-1.5"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-0">
        {sections.map((section, index) => {
          const CustomComponent = section.component;

          return (
            <section
              key={section.id}
              id={section.id}
              ref={(el) => (sectionRefs.current[section.id] = el)}
              className={`min-h-[60vh] py-16 ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <CustomComponent />
            </section>
          );
        })}
      </div>

      <div className="h-48 bg-gradient-to-t from-white via-white/80 to-transparent" />
    </div>
  );
};

export default StickyHeaderUk;
