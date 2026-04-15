import React, { useState } from "react";
import StudentRegistrationPopup from "./StudentRegistrationPopup";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const SocialIcon = ({ type, href }) => {
    const getIconPath = () => {
      switch (type) {
        case "facebook":
          return (
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          );
        case "linkedin":
          return (
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.206 0 22.225 0z" />
          );
        case "instagram":
          return (
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          );
        default:
          return null;
      }
    };

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-indigo-600 transition-colors duration-200"
        aria-label={type}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          {getIconPath()}
        </svg>
      </a>
    );
  };

  const FooterLink = ({ href, children }) => (
    <a
      href={href}
      className="text-gray-600 hover:text-indigo-600 hover:underline transition-colors duration-200 font-sans text-base"
    >
      {children}
    </a>
  );

  const FooterHeading = ({ children }) => (
    <h3 className="font-semibold text-gray-800 mb-4 font-montserrat text-lg md:text-xl tracking-wide">
      {children}
    </h3>
  );

  return (
    <footer className="bg-white border-t border-gray-200 pt-4 pb-6">
      <div className="max-w-7xl bg-blue-50 mx-auto px-4 sm:px-6 lg:px-8 rounded-3xl py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          <div className="md:col-span-4 space-y-4">
            <div className="mb-6">
              <a href="/" className="flex items-center gap-2 no-underline">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
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
                <span
                  className="text-[24px] md:text-[28px] font-bold text-[#1a5fd8] tracking-tight"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  AdmissionOnBoard
                </span>
              </a>
            </div>
            <div className="space-y-1 text-gray-600 text-sm leading-relaxed">
              <p>101 Frederick St,</p>
              <p>Kitchener, ON</p>
              <p>N2H 6R2</p>
            </div>
            <div className="">
              <a
                href="mailto:ceo@admissiononboard.com"
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              >
                <FaEnvelope className="text-gray-500 text-lg" />{" "}
                ceo@admissiononboard.com
              </a>
            </div>
            <div className="flex space-x-5 pt-3">
              <SocialIcon type="facebook" href="https://facebook.com" />
              <SocialIcon type="linkedin" href="https://linkedin.com" />
              <SocialIcon type="instagram" href="https://instagram.com" />
            </div>
          </div>

          <div className="md:col-span-2">
            <FooterHeading>Students</FooterHeading>
            <ul className="space-y-3">
              <li>
                <FooterLink href="/recruitment-partner">
                  Recruitment Partners
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/institutions">Institutions</FooterLink>
              </li>
            </ul>
            <div className="mt-6">
              <FooterHeading>Explore</FooterHeading>
              <ul className="space-y-3">
                <li>
                  <button
                    className="text-sm text-gray-600 text-left cursor-pointer"
                    onClick={() => setPopupOpen(true)}
                  >
                    Find Programs & Institutions
                  </button>
                </li>
                <li>
                  <FooterLink href="/solutions">360 Solutions</FooterLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-2">
            <FooterHeading>Destinations</FooterHeading>
            <ul className="space-y-3">
              <li>
                <FooterLink href="/australia">Australia</FooterLink>
              </li>
              <li>
                <FooterLink href="/canada">Canada</FooterLink>
              </li>
              <li>
                <FooterLink href="/germany">Germany</FooterLink>
              </li>
              <li>
                <FooterLink href="/ireland">Ireland</FooterLink>
              </li>
              <li>
                <FooterLink href="/uk">United Kingdom</FooterLink>
              </li>
              <li>
                <FooterLink href="/usa">United States</FooterLink>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <FooterHeading>About</FooterHeading>
            <ul className="space-y-3">
              <li>
                <FooterLink href="/our-story">Our Story</FooterLink>
              </li>
              <li>
                <FooterLink href="/careers">Careers</FooterLink>
              </li>
              <li>
                <FooterLink href="/blogs">Press and Media</FooterLink>
              </li>
              <li>
                <FooterLink href="/contact">Contact</FooterLink>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <FooterHeading>Resources</FooterHeading>
            <ul className="space-y-3">
              <li>
                <FooterLink href="/blogs">Blog</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Webinar</FooterLink>
              </li>
              <li>
                <FooterLink href="/blogs">AdmissionOnBoard Insights</FooterLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 space-y-3 sm:space-y-0">
          <p>© 2026 AdmissionOnBoard Inc</p>
          <div className="flex space-x-6">
            <a
              href="/privacy"
              className="hover:text-indigo-600 transition-colors"
            >
              Privacy Policy
            </a>
            <a href="#" className="hover:text-indigo-600 transition-colors">
              Legal
            </a>
          </div>
        </div>
      </div>
      <StudentRegistrationPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
    </footer>
  );
};

export default Footer;
