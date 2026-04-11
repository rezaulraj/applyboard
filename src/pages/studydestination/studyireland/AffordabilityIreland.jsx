import React from "react";

const AffordabilityIreland = () => {
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
                src="https://images.pexels.com/photos/33749595/pexels-photo-33749595.jpeg"
                alt="Students studying together"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[3.9/4]">
              <img
                src="https://images.pexels.com/photos/36709136/pexels-photo-36709136.jpeg"
                alt="Australian kangaroo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[1.7/3]">
            <img
              src="https://images.pexels.com/photos/33846137/pexels-photo-33846137.jpeg"
              alt="Happy international student in Australia"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="relative w-full py-10 rounded-4xl mt-10 flex items-center justify-center overflow-hidden bg-blue-900">

        <div className="absolute inset-0 bg-[radial-gradient(circle,theme(colors.blue.500)_0%,theme(colors.blue.500)_20%,theme(colors.blue.800)_40%,theme(colors.blue.500)_60%,theme(colors.blue.800)_100%)] opacity-80" />

        <div className="relative z-10 text-center text-gray-100 p-8 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4 font-montserrat">Did You Know?</h1>
          <p className="text-base lg:text-lg mb-4 font-sans">
            International students graduating from Irish universities are very
            likely to find work.
          </p>
          <p className="text-base opacity-90 font-sans">
            Ireland's Graduate Outcomes Survey on the class of 2018 showed that
            80% of Ireland's international students were employed or about to
            start a job.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AffordabilityIreland;
