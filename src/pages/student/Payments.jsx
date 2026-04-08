import React from "react";

const MakeEasyPayments = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left - Text Content */}
        <div className="space-y-5 order-2 lg:order-1 lg:pr-8">
          {/* Category Label */}
          <p className="text-base font-sans font-bold tracking-[1.5px] text-blue-600 uppercase">
            PAYMENTS
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-gray-900 leading-tight">
            Make Easy Payments
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-md">
            Make secure tuition payments through{" "}
            <a
              href="#"
              className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition-all duration-200"
            >
              Flywire
            </a>
            , or send money abroad easily with{" "}
            <a
              href="#"
              className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition-all duration-200"
            >
              Reeedo
            </a>
            .
          </p>
        </div>

        {/* Right - Visual Flow Diagram */}
        <div className="relative order-1 lg:order-2 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            {/* Background Dashed Flow Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Top-left to top-right path */}
              <path
                d="M130 100 L130 80 Q130 60 150 60 L330 60 Q350 60 350 80 L350 100"
                stroke="#d1d5db"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-dash-flow-1"
              />
              {/* Arrow head top-right */}
              <path d="M345 90 L350 105 L355 90" fill="#d1d5db" />

              {/* Top-right to right path */}
              <path
                d="M430 130 L430 130 Q430 130 430 180 L430 180"
                stroke="#d1d5db"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-dash-flow-2"
              />

              {/* Right to bottom-right path */}
              <path
                d="M430 260 L430 370 Q430 390 410 390 L390 390"
                stroke="#d1d5db"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-dash-flow-3"
              />
              {/* Arrow head bottom-right */}
              <path d="M395 385 L380 390 L395 395" fill="#d1d5db" />

              {/* Bottom-right to bottom-left path */}
              <path
                d="M310 410 L130 410 Q110 410 110 390 L110 370"
                stroke="#d1d5db"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-dash-flow-4"
              />
              {/* Arrow head bottom-left */}
              <path d="M105 375 L110 360 L115 375" fill="#d1d5db" />

              {/* Bottom-left to top-left path */}
              <path
                d="M110 290 L110 130 Q110 110 130 110 L130 110"
                stroke="#d1d5db"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-dash-flow-5"
              />
              {/* Arrow head top-left */}
              <path d="M125 115 L130 100 L135 115" fill="#d1d5db" />
            </svg>

            {/* Center - Student Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shadow-xl animate-float-slow">
              <img
                src="https://plus.unsplash.com/premium_photo-1682430974123-dfe0a2dbb637?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Student with laptop and headphones"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top-Left - Purple Search Icon */}
            <div className="absolute top-22 left-16 animate-float-slow">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="7" strokeWidth={2} />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35"
                  />
                </svg>
                <span
                  className="absolute text-white text-xs font-bold"
                  style={{ fontSize: "10px", top: "35%", left: "42%" }}
                >
                  $
                </span>
              </div>
            </div>

            {/* Top-Right - Flywire Logo */}
            <div className="absolute top-6 right-8 animate-float-medium">
              <div className="bg-white rounded-xl shadow-md px-6 py-4 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <svg
                  width="120"
                  height="36"
                  viewBox="0 0 120 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <text
                    x="0"
                    y="27"
                    fontFamily="Arial, Helvetica, sans-serif"
                    fontSize="26"
                    fontWeight="700"
                    fill="#2563eb"
                    fontStyle="italic"
                  >
                    fly<tspan fill="#3b82f6">wire</tspan>
                  </text>
                </svg>
              </div>
            </div>

            {/* Right - Make Payment Button */}
            <div className="absolute right-0 top-1/3 -translate-y-1/2 animate-float-fast">
              <div className="relative group">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap">
                  Make Payment
                </button>
                {/* Cursor Pointer */}
                <svg
                  className="absolute -bottom-2 -right-1 w-8 h-8 text-gray-800 animate-cursor-bounce drop-shadow-md transform rotate-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 18.5293L18.3333 18.5293L18.3333 12.3673L5.65376 12.3673Z" />
                </svg>
              </div>
            </div>

            {/* Bottom-Left - Reeedo Logo */}
            <div className="absolute bottom-6 left-4 animate-float-medium">
              <div className="bg-white rounded-xl shadow-md px-6 py-4 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <svg
                  width="130"
                  height="40"
                  viewBox="0 0 130 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <text
                    x="0"
                    y="30"
                    fontFamily="Arial, Helvetica, sans-serif"
                    fontSize="24"
                    fontWeight="400"
                    fill="#1f2937"
                  >
                    Ree<tspan fontWeight="700">udo</tspan>
                  </text>
                  {/* Teal triangle */}
                  <polygon points="115,12 125,18 115,24" fill="#14b8a6" />
                </svg>
              </div>
            </div>

            {/* Bottom-Right - Green Currency Icon */}
            <div className="absolute bottom-16 right-28 animate-float-slow">
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <div className="grid grid-cols-2 gap-x-2 gap-y-0">
                  <span className="text-white text-sm font-bold">$</span>
                  <span className="text-white text-sm font-bold">€</span>
                  <span className="text-white text-sm font-bold">¥</span>
                  <span className="text-white text-sm font-bold">£</span>
                </div>
              </div>
            </div>

            {/* Decorative Background Glows */}
            <div className="absolute -z-10 top-1/3 right-0 w-56 h-56 bg-blue-100 rounded-full blur-3xl opacity-40" />
            <div className="absolute -z-10 bottom-1/3 left-0 w-44 h-44 bg-purple-100 rounded-full blur-3xl opacity-30" />
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes cursor-bounce {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(5px) rotate(12deg); }
        }
        @keyframes dash-flow-1 {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -24; }
        }
        @keyframes dash-flow-2 {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -24; }
        }
        @keyframes dash-flow-3 {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -24; }
        }
        @keyframes dash-flow-4 {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -24; }
        }
        @keyframes dash-flow-5 {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -24; }
        }
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.02); }
        }
        .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 3.5s ease-in-out infinite; }
        .animate-cursor-bounce { animation: cursor-bounce 2s ease-in-out infinite; }
        .animate-dash-flow-1 { animation: dash-flow-1 2s linear infinite; }
        .animate-dash-flow-2 { animation: dash-flow-2 2s linear infinite 0.4s; }
        .animate-dash-flow-3 { animation: dash-flow-3 2s linear infinite 0.8s; }
        .animate-dash-flow-4 { animation: dash-flow-4 2s linear infinite 1.2s; }
        .animate-dash-flow-5 { animation: dash-flow-5 2s linear infinite 1.6s; }
        .animate-float-slow-img { animation: float 4.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default MakeEasyPayments;
