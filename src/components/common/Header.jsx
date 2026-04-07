import React, { useState, useRef, useEffect } from "react";

const navLinks = [
  { label: "Students", path: "/students" },
  {
    label: "Study Destinations",
    subnavLink: [
      { label: "Australia", path: "/australia" },
      { label: "Canada", path: "/canada" },
      { label: "Ireland", path: "/ireland" },
      { label: "Germany", path: "/germany" },
      { label: "United Kingdom", path: "/uk" },
      { label: "United States", path: "/usa" },
    ],
  },
  {
    label: "Partners",
    subnavLink: [
      { label: "Institutions", path: "/institutions" },
      { label: "Recruitment Partner", path: "/recruitment-partner" },
    ],
  },
];

const ChevronIcon = ({ className }) => (
  <svg
    className={className}
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="4 6 8 10 12 6" />
  </svg>
);

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSub, setOpenMobileSub] = useState(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (label) =>
    setOpenDropdown((prev) => (prev === label ? null : label));

  const toggleMobileSub = (label) =>
    setOpenMobileSub((prev) => (prev === label ? null : label));

  return (
    <header
      ref={headerRef}
      className="w-full bg-white font-sans relative z-50"
    >
      {/* Desktop Nav */}
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 no-underline">
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
              <path
                d="M20 4C11.2 4 4 11.2 4 20s7.2 16 16 16 16-7.2 16-16S28.8 4 20 4zm0 5c6.1 0 11 4.9 11 11s-4.9 11-11 11S9 26.1 9 20 13.9 9 20 9z"
                fill="#1a5fd8"
              />
              <path
                d="M20 4v8M20 28v8M4 20h8M28 20h8"
                stroke="#1a5fd8"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="20" cy="20" r="4" fill="#1a5fd8" />
            </svg>
          </div>
          <span className="text-[28px] font-bold text-[#1a5fd8] tracking-tight">
            ApplyBoard
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.subnavLink ? (
              <div key={link.label} className="relative">
                <button
                  onClick={() => toggleDropdown(link.label)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-[18px] font-semibold leading-7 font-sans text-[#292e3e] rounded-lg transition-all duration-150 cursor-pointer border-none bg-transparent
                    ${
                      openDropdown === link.label
                        ? "text-[#2e3447]"
                        : "text-[#292e3e] hover:text-[#00368A]"
                    }`}
                >
                  {link.label}
                  <ChevronIcon
                    className={`transition-transform duration-200 ${
                      openDropdown === link.label
                        ? "rotate-180 text-[#1a5fd8]"
                        : "text-gray-500"
                    }`}
                  />
                </button>

                {openDropdown === link.label && (
                  <div className="absolute top-[calc(100%+8px)] left-0 bg-white border border-blue-200 rounded-xl min-w-[200px] p-1.5 shadow-[0_8px_24px_rgba(26,95,216,0.10)] z-50">
                    {link.subnavLink.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.path}
                        className="block px-3.5 py-2 text-[18px] font-semibold leading-7 font-sans text-[#292e3e] rounded-lg no-underline transition-all duration-150 hover:bg-blue-50 hover:text-[#00368A]"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.path}
                className="px-3.5 py-2 text-[18px] font-semibold leading-7 font-sans text-[#292e3e] hover:text-[#00368A] rounded-lg no-underline transition-all duration-150 "
              >
                {link.label}
              </a>
            ),
          )}
          <div className="hidden lg:flex items-center pl-4">
            <button className="px-5 py-2 text-[18px] font-sans font-semibold text-[#1a5fd8] bg-transparent border-[1.5px] border-[#1a5fd8] rounded-lg cursor-pointer transition-all duration-150 hover:bg-[#1a5fd8] hover:text-white">
              Register as a Student
            </button>
          </div>
        </nav>

        {/* CTA */}

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1.5 rounded-md"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span
            className={`block w-[22px] h-[2px] bg-gray-900 rounded transition-transform duration-200 ${
              mobileOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-gray-900 rounded transition-opacity duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-gray-900 rounded transition-transform duration-200 ${
              mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-blue-100 px-4 pb-4 pt-2">
          {navLinks.map((link) =>
            link.subnavLink ? (
              <div key={link.label} className="mb-1">
                <button
                  onClick={() => toggleMobileSub(link.label)}
                  className="w-full flex items-center justify-between px-2 py-2.5 text-[18px] font-semibold leading-7 font-sans text-[#292e3e] hover:text-[#00368A] bg-transparent border-none rounded-lg cursor-pointer transition-all duration-150 hover:bg-blue-50"
                >
                  {link.label}
                  <ChevronIcon
                    className={`transition-transform duration-200 ${
                      openMobileSub === link.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openMobileSub === link.label && (
                  <div className="pl-3">
                    {link.subnavLink.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.path}
                        className="block px-2.5 py-1.5 no-underline rounded-lg transition-all duration-150 text-[18px] font-semibold leading-7 font-sans text-[#292e3e] hover:text-[#00368A]"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.path}
                className="block px-2 py-2.5 no-underline rounded-lg transition-all duration-150 text-[18px] font-semibold leading-7 font-sans text-[#292e3e] hover:text-[#00368A]"
              >
                {link.label}
              </a>
            ),
          )}
          <button className="mt-3 w-full py-2.5 text-[18px] font-medium text-[#1a5fd8] bg-transparent border-[1.5px] border-[#1a5fd8] rounded-lg cursor-pointer transition-all duration-150 hover:bg-[#1a5fd8] hover:text-white">
            Register as a Student
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
