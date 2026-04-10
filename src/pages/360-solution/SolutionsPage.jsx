import React, { useState, useEffect } from "react";

const SolutionsPage = () => {
  const [activeTab, setActiveTab] = useState("proof-of-finance");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Update active tab based on scroll position
      const sections = [
        "proof-of-finance",
        "banking",
        "foreign-exchange",
        "loans",
        "language-tests",
        "pre-arrival",
        "accommodations",
        "visa-services",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const tabs = [
    { id: "proof-of-finance", label: "PROOF OF FINANCE" },
    { id: "banking", label: "BANKING" },
    { id: "foreign-exchange", label: "FOREIGN EXCHANGE" },
    { id: "loans", label: "LOANS" },
    { id: "language-tests", label: "LANGUAGE TESTS" },
    // { id: "pre-arrival", label: "PRE-ARRIVAL" },
    { id: "accommodations", label: "ACCOMMODATIONS" },
    { id: "visa-services", label: "VISA SERVICES" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Navigation */}
      <nav
        className={`sticky top-20 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white py-3" : "bg-white py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-montserrat mb-4">
              Everything You Need in One Place
            </h2>
            <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto">
              Explore exclusive programs to help you and your students save time
              and money. With AdmissionOnBoard, you're never far from a helping hand.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 bg-gray-100 rounded-full p-2 max-w-5xl mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white text-blue-600 shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-6"></div>

      {/* Proof of Finance Section */}
      <section
        id="proof-of-finance"
        className="py-12 px-4 sm:px-6 lg:px-8 scroll-mt-40"
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="mb-8">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
                PROOF OF FINANCE
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
                International Student Proof of Funds
              </h3>
              <p className="text-gray-600 max-w-3xl">
                Strengthen and streamline your study permit application with a
                GIC from Canada's largest banks. Or, if you're headed to
                Germany, get a blocked bank account and insurance from trusted
                partners.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* TD Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="bg-green-500 p-8 flex items-center justify-center h-36">
                  <span className="text-white text-4xl font-bold">TD</span>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-sm leading-tight">
                    TD International Student GIC Program
                  </h4>
                  <button className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors group-hover:translate-x-1 transform">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* RBC Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="bg-blue-800 p-8 flex items-center justify-center h-36">
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 text-yellow-400 mx-auto mb-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    <span className="text-white text-lg font-bold">RBC</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-sm leading-tight">
                    RBC International Student GIC Program
                  </h4>
                  <button className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors group-hover:translate-x-1 transform">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Expatrio Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="bg-teal-500 p-8 flex items-center justify-center h-36">
                  <span className="text-white text-2xl font-bold">
                    expatrio
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-sm leading-tight">
                    Get German Proof of Funds and Insurance
                  </h4>
                  <button className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors group-hover:translate-x-1 transform">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Coracle Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="bg-blue-900 p-8 flex items-center justify-center h-36">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-white text-xl font-bold">
                      Coracle
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-sm leading-tight">
                    Solve Your German Student Visa & Insurance
                  </h4>
                  <button className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors group-hover:translate-x-1 transform">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banking Section - BMO */}
      <section id="banking" className="py-12 px-4 sm:px-6 lg:px-8 scroll-mt-40">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
                  BANKING SERVICES AND PROOF OF FINANCES
                </p>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
                  Worry-free Canadian Banking
                </h3>
                <p className="text-gray-600 mb-6">
                  Have peace of mind as you start your Canadian study journey
                  with GICs, chequing accounts, and banking services from
                  Canada's oldest bank, BMO.
                </p>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg max-w-md ml-auto">
                  <div className="bg-blue-700 p-8 flex items-center justify-between">
                    <span className="text-white text-3xl font-bold">BMO</span>
                    <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Pre-Arrival GIC and Banking Solutions
                    </h4>
                    <button className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors mt-4">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foreign Exchange Section */}
      <section
        id="foreign-exchange"
        className="py-12 px-4 sm:px-6 lg:px-8 scroll-mt-40"
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
              <div className="lg:w-1/2">
                <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
                  FOREIGN EXCHANGE
                </p>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
                  Send Money Abroad, Quickly and Easily
                </h3>
                <p className="text-gray-600">
                  Send international transfers and make overseas payments, in a
                  flash, with these trusted foreign exchange services.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              {/* Reeudo Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="bg-cyan-400 p-8 flex items-center justify-center h-28">
                  <span className="text-gray-800 text-3xl font-bold">
                    Reeudo
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Easily Send Money Abroad
                  </h4>
                  <button className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors mt-2 group-hover:translate-x-1 transform">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Flywire Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="bg-blue-600 p-8 flex items-center justify-center h-28">
                  <span className="text-white text-3xl font-bold italic">
                    flywire
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Tuition Payments Made Easy
                  </h4>
                  <button className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors mt-2 group-hover:translate-x-1 transform">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Language Tests Section */}
      <section
        id="language-tests"
        className="py-12 px-4 sm:px-6 lg:px-8 scroll-mt-40"
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
                  TEST SOLUTIONS
                </p>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
                  Save $ with English Language Test Vouchers
                </h3>
                <p className="text-gray-600 mb-6">
                  Get TOEFL, PTE, GRE, and Duolingo English Test vouchers—and
                  more—at the best possible prices, on demand.
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md">
                  Let's get started
                </button>
              </div>
              <div className="lg:w-1/2">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Students taking test"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Loans Section */}
      <section id="loans" className="py-12 px-4 sm:px-6 lg:px-8 scroll-mt-40">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
                  EDUCATION LOANS
                </p>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
                  Need a Loan? We Can Help
                </h3>
                <p className="text-gray-600 mb-6">
                  Invest in your future with flexible, accessible study loans,
                  custom-built for international students like you.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-gray-700">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    No collateral or proof of funds needed
                  </li>
                  <li className="flex items-start text-gray-700">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Interest rates as low as 9.5%
                  </li>
                  <li className="flex items-start text-gray-700">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Total payment flexibility
                  </li>
                </ul>
                <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md">
                  Let's get started
                </button>
              </div>
              <div className="lg:w-1/2">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Students discussing loans"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Accommodations Section */}
      <section
        id="accommodations"
        className="py-12 px-4 sm:px-6 lg:px-8 scroll-mt-40"
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-2/3">
                <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
                  ACCOMMODATIONS
                </p>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
                  Global Student Housing Made Simple
                </h3>
                <p className="text-gray-600 mb-6">
                  Find safe, verified housing across 640+ global destinations,
                  from purpose-built student residences to private apartments
                  and homestays. Secure your ideal accommodation with flexible
                  booking policies, giving you one less thing to worry about on
                  your study abroad journey.
                </p>
              </div>
              <div className="lg:w-1/3 w-full">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg max-w-sm ml-auto">
                  <div className="bg-blue-50 p-8 flex items-center justify-center h-24">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-8 h-8 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      <span className="text-blue-800 text-xl font-bold">
                        UNIVERSITY LIVING
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Global Student Housing Made Simple
                    </h4>
                    <button className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors mt-4">
                      Learn more
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Services Section */}
      <section
        id="visa-services"
        className="py-12 px-4 sm:px-6 lg:px-8 scroll-mt-40 pb-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-2/3">
                <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
                  VISA SERVICES
                </p>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
                  Navigate Visas with Confidence
                </h3>
                <p className="text-gray-600 mb-6">
                  Turn visa uncertainty into success with expert guidance
                  throughout your application process. Our partnership with VFS
                  Global Education helps you prepare documents, practice for
                  interviews, and understand country-specific requirements,
                  increasing your chances of approval.
                </p>
              </div>
              <div className="lg:w-1/3 w-full">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg max-w-sm ml-auto">
                  <div className="bg-blue-600 p-8 flex items-center justify-center h-24">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-xs font-bold">
                          VFS
                        </span>
                      </div>
                      <span className="text-white text-sm font-bold">
                        VFS GLOBAL
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Global Student Housing Made Simple
                    </h4>
                    <button className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors mt-4">
                      Learn more
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
