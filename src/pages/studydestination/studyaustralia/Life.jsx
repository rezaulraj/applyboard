import React from "react";

const Life = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        <div className="flex flex-col gap-5 animate-fade-in col-span-7">
          <p className="text-sm font-bold font-sans tracking-[1.5px] text-blue-600 uppercase">
            Life
          </p>
          <h2 className="text-4xl font-bold font-montserrat text-gray-900 leading-tight">
            Enjoy Life by the Waves
          </h2>
          <p className="text-base lg:text-lg font-sans text-gray-500 leading-relaxed">
            There's a reason Australia is associated with a laid-back,
            enjoyable, high quality of life.{" "}
            <a
              href="https://www.numbeo.com/quality-of-life/rankings_by_country.jsp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors"
            >
              According to the OECD Better Life Index
            </a>
            , Australia ranks above average in life satisfaction, health,
            education, civic engagement, and more. If you want to enjoy life on
            the beach among some of the world's most breathtaking natural
            scenery, Australia is a wonderful place to be!
          </p>
          <p className="text-base lg:text-lg font-sans text-gray-500 leading-relaxed">
            Plus, Australia's well-funded education system creates a
            high-quality learning environment. By studying and living in
            Australia, students become global citizens by learning empathy and
            cross-cultural awareness, as well as building important practical
            skills that lead to successful, fulfilling careers.
          </p>
        </div>

        <div className="flex flex-col gap-4 col-span-5">
          <div className="rounded-2xl shadow-lg h-52 relative ">
            <img
              src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Australian coastal walkway"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-3 -right-8">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md w-fit">
                <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-yellow-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-800">
                  High Quality Life
                </span>
              </div>
            </div>
          </div>

          <div className="self-end w-4/5 rounded-2xl shadow-lg h-44 relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1663946448097-c2358e0c6b6c?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="People enjoying Australian nature"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-3 -left-8">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md w-fit">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-green-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 8C8 10 5.9 16.17 3.82 19.82" />
                    <path d="M12 22C12 22 17 16 20 10c-4 2-7 0-8-4" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-800">
                  Natural Scenery
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative rounded-2xl bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 px-10 py-14 text-center text-white shadow-xl overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
       <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border border-white/50" />
          <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full border border-white/30" />
          <div className="absolute -top-1/2 -right-1/4 w-[400px] h-[400px] rounded-full border border-white/60" />

          <div className="absolute -bottom-1/2 -left-1/4 w-[700px] h-[700px] rounded-full border border-white/40" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[500px] h-[500px] rounded-full border border-white/30" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[300px] h-[300px] rounded-full border border-white/70" />

          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full border border-white/50" />
          <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full border border-white/30" />

          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-transparent to-blue-800/60" />
        </div>

        <div className="relative z-10">
          <h3 className="text-3xl font-bold font-montserrat mb-5 tracking-tight">
            Proof of English Proficiency in Australia
          </h3>
          <p className="text-base lg:text-lg font-sans text-blue-100 leading-relaxed max-w-2xl mx-auto mb-4">
            To study in Australia, you'll need an eligible English language
            proficiency test score from within the past three years. Accepted
            tests and score requirements vary by course and institution, so
            check your course language requirements very closely.
          </p>
          <p className="text-base lg:text-lg font-sans text-blue-100 leading-relaxed max-w-2xl mx-auto">
            The most widely-accepted English language proficiency tests in
            Australia include TOEFL, IELTS, PTE, the Cambridge C1 Advanced exam,
            and the Occupational English Test (OET), which is specifically for
            professionals in the healthcare sector.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Life;
