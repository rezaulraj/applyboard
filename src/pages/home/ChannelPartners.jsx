import React from "react";

const GlobeIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const TableIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>
);
const UsersIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const features = [
  {
    icon: <GlobeIcon />,
    text: "Diversify your enrolment with students from 180+ nationalities",
  },
  {
    icon: <TableIcon />,
    text: "Receive higher quality applications and improve conversion by 10%",
  },
  {
    icon: <UsersIcon />,
    text: "Leverage proven technology to save time and reduce manual processing by 40%",
  },
];

const ChannelPartners = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <h2 className="text-center text-3xl lg:text-4xl font-montserrat font-bold text-gray-800 mb-12 tracking-tight">
        Channel Partners
      </h2>

      <div className="max-w-[980px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image collage */}
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: "120px 1fr",
            gridTemplateRows: "auto auto",
          }}
        >
          {/* Stat card */}
          <div
            className="bg-blue-600 rounded-2xl p-5 flex flex-col items-center justify-center gap-2 min-h-[130px]"
            style={{ gridRow: "1/2", gridColumn: "1/2" }}
          >
            <GlobeIcon style={{ color: "#fff", width: 28, height: 28 }} />
            <span
              className="text-white text-2xl font-extrabold leading-none"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              150+
            </span>
            <span className="text-white/90 text-xs font-sans text-center leading-snug">
              Student Nationalities
            </span>
          </div>

          {/* Main image */}
          <div
            className="rounded-2xl overflow-hidden bg-emerald-500 h-[280px]"
            style={{ gridRow: "1/3", gridColumn: "2/3" }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1770404622540-d4a6d6cb7f59?q=80&w=789&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Partner institution"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Secondary image */}
          <div
            className="rounded-xl overflow-hidden bg-blue-200 h-[138px]"
            style={{ gridRow: "2/3", gridColumn: "1/2" }}
          >
            <img
              src="https://images.unsplash.com/photo-1611095973763-414019e72400?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Partner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col gap-5">
          <span className="text-base font-medium font-montserrat tracking-[1.5px] text-[#1e6deb] uppercase mb-3 ">
            Partners Institutions
          </span>
          <h3 className="text-3xl font-bold font-montserrat text-gray-900 leading-snug tracking-tight">
            How We Help Partner Institutions
          </h3>

          <div className="flex flex-col gap-4 mt-1">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg border-[1.5px] border-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-blue-600">
                  {f.icon}
                </div>
                <p className="text-base lg:text-lg text-gray-600 font-sans leading-relaxed">
                  {f.text}
                </p>
              </div>
            ))}
          </div>

          <button className="mt-2 px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white text-[18px] font-medium rounded-lg transition-colors w-fit font-sans">
            Partner with Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChannelPartners;
