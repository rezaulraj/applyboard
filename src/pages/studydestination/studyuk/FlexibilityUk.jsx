import React from "react";

const FlexibilityUk = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          {/* Category Label */}
          <span className="text-base font-medium font-montserrat tracking-[1.5px] text-[#1e6deb] uppercase mb-3">
            FLEXIBILITY
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-gray-900 leading-tight">
            The UK Has It All
          </h2>

          {/* First Paragraph */}
          <p className="text-gray-600 text-base font-sans lg:text-lg leading-relaxed">
            The United Kingdom truly has something for everyone, from the
            world’s oldest and most prestigious universities to modern-day
            institutions with sleek amenities and innovative new courses.
          </p>

          {/* Second Paragraph */}
          <p className="text-gray-600 text-base font-sans lg:text-lg leading-relaxed">
            There are many routes into higher education in the UK, including
            pathways, foundation years, and pre-sessional English courses.
            Students can also complete a degree in less time compared to other
            countries, making it more cost-effective. Depending on your prior
            education and field of study, it’s possible to earn a bachelor’s
            degree in as little as three years, and a master’s in just one year!
          </p>
          <p className="text-gray-600 text-base font-sans lg:text-lg leading-relaxed">
            On the other hand, if you’re in no rush to finish your studies and
            want to get more direct work experience instead, you can explore the
            UK’s unique sandwich courses, which let you alternate between
            coursework and a long-term job placement.
          </p>
          <p className="text-gray-600 text-base font-sans lg:text-lg leading-relaxed">
            No matter your study preferences, choosing to study in the UK gives
            you access to especially flexible study options to suit your
            particular needs!
          </p>
        </div>

        {/* Right Column - Images */}
        <div className="grid grid-cols-2 gap-4">
          {/* Top Left - Small Square Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[6/4]">
              <img
                src="https://images.pexels.com/photos/33749595/pexels-photo-33749595.jpeg"
                alt="Students studying together"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Left - Kangaroo Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[3.9/4]">
              <img
                src="https://images.unsplash.com/photo-1717239749112-1722940626d1?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Australian kangaroo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Large Vertical Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[1.7/3]">
            <img
              src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Happy international student in Australia"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="relative w-full py-10 rounded-4xl mt-10 flex items-center justify-center overflow-hidden bg-blue-900">
        {/* The Concentric Gradient Background */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-400/30 via-blue-600/20 to-blue-900/80" /> */}

        {/* Alternative: More distinct 'Ripple' rings effect */}

        <div className="absolute inset-0 bg-[radial-gradient(circle,theme(colors.blue.500)_0%,theme(colors.blue.500)_20%,theme(colors.blue.800)_40%,theme(colors.blue.500)_60%,theme(colors.blue.800)_100%)] opacity-80" />

        {/* Content */}
        <div className="relative z-10 text-center text-gray-100 p-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4 font-montserrat">
            Proof of English Proficiency in the UK
          </h1>
          <p className="text-base lg:text-lg mb-4 font-sans">
            If you’re studying with a Higher Education Provider in the UK (a
            university, for example), the institution will assess your level of
            English instead of the UK government. Score requirements vary by
            university and course, so be sure to check the institution’s website
            for their expectations.
          </p>
          <p className="text-base opacity-90 font-sans">
            Some of the most popular and widely-accepted English language
            proficiency tests in the UK include TOEFL, IELTS, PTE, the Cambridge
            C1 Advanced exam, and Duolingo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlexibilityUk;
