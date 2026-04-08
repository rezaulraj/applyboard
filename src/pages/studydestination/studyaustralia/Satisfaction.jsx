import React from "react";

const Satisfaction = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          {/* Category Label */}
          <span className="text-sm font-bold font-sans tracking-[1.5px] text-blue-600 uppercase mb-3">
            SATISFACTION
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-gray-900 leading-tight">
            Australia-Bound Students Are Satisfied
          </h2>

          {/* First Paragraph */}
          <p className="text-gray-600 text-base font-sans sm:text-lg leading-relaxed">
            According to the latest Student Experience Surveys given by the
            Australian government, international students in Australia have
            become increasingly satisfied with their learning resources and
            engagement over time, and in general, most students are{" "}
            <span className="text-cyan-600 font-medium">
              very satisfied with their Australian study situation
            </span>
            . Around 75% of students are satisfied with the quality of their
            education experience.
          </p>

          {/* Second Paragraph */}
          <p className="text-gray-600 text-base font-sans sm:text-lg leading-relaxed">
            If you're committed to your education and want to love your study
            abroad experience, going to Australia is a good bet. Join the
            700,000+ other international students there, and have an
            unforgettable educational journey Down Under.
          </p>
        </div>

        {/* Right Column - Images */}
        <div className="grid grid-cols-2 gap-4">
          {/* Top Left - Small Square Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[6/4]">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80"
                alt="Students studying together"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Left - Kangaroo Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[5/4]">
              <img
                src="https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&q=80"
                alt="Australian kangaroo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Large Vertical Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[2/3]">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
              alt="Happy international student in Australia"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Satisfaction;
