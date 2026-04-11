import React from "react";

const SatisfactionGermany = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="space-y-6">
          <span className="text-base font-medium font-montserrat tracking-[1.5px] text-[#1e6deb] uppercase mb-3">
            Affordability
          </span>

          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-gray-900 leading-tight">
            Spend Less on Your Studies
          </h2>

          <p className="text-gray-600 text-base font-sans lg:text-lg leading-relaxed">
            One of the best benefits of studying in Ireland is that you can get
            a premium study abroad experience while spending comparatively less
            on tuition and cost of living.
          </p>

          <p className="text-gray-600 text-base font-sans lg:text-lg leading-relaxed">
            Although an education abroad can still require a substantial
            investment no matter where it is, Ireland is quite affordable,
            especially compared to other major study destinations (like the US
            or UK) and other European countries (like France, Norway, or
            Denmark). Generally speaking, students can expect to spend between
            €7,000 to €12,000 per year while studying in Ireland.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[6/4]">
              <img
                src="https://images.pexels.com/photos/8199172/pexels-photo-8199172.jpeg"
                alt="Students studying together"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[3.9/4]">
              <img
                src="https://images.pexels.com/photos/29242212/pexels-photo-29242212.jpeg"
                alt="Australian kangaroo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[1.7/3]">
            <img
              src="https://images.unsplash.com/photo-1618259278412-2819cbdea4dc?q=80&w=821&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Happy international student in Australia"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="relative w-full py-10 rounded-4xl mt-10 flex items-center justify-center overflow-hidden bg-blue-900">

        <div className="absolute inset-0 bg-[radial-gradient(circle,theme(colors.blue.500)_0%,theme(colors.blue.500)_20%,theme(colors.blue.800)_40%,theme(colors.blue.500)_60%,theme(colors.blue.800)_100%)] opacity-80" />

        {/* Content */}
        <div className="relative z-10 text-center text-gray-100 p-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4 font-montserrat">
            Proof of Language Proficiency in Germany
          </h1>
          <p className="text-base mb-4 font-sans">
            To study in Germany, you’ll be required to provide proof of language
            proficiency—either in German or in English, depending on what
            language your programme will be taught in. If in German, you’ll need
            to take a TestDaF or DSH exam. If in English, you’ll likely want to
            take a TOEFL or IELTS exam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SatisfactionGermany;
