import React from "react";

const OpportunityUsa = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          {/* Category Label */}
          <span className="text-base font-medium font-montserrat tracking-[1.5px] text-[#1e6deb] uppercase mb-3">
            Opportunity
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-gray-900 leading-tight">
            Find Big Opportunities in Small Cities
          </h2>

          {/* First Paragraph */}
          <p className="text-gray-600 text-base font-sans lg:text-lg leading-relaxed">
            As a huge and geographically diverse country with 50 unique states
            to choose from, the USA has plenty to offer any student whether you
            plan to study in a big city or a small student town! Although you
            might think of studying in big, famous cities like New York,
            Chicago, or Los Angeles, many of the best student opportunities
            exist in smaller, growing (and more affordable) communities.
          </p>

          {/* Second Paragraph */}
          <p className="text-gray-600 text-base font-sans lg:text-lg leading-relaxed">
            The US has countless growing cities in smaller major population
            zones—and these up-and-coming regions need talented international
            student graduates to support their local economies! Take advantage
            of a more personalized study experience with smaller class sizes at
            any number of incredible colleges across the country, then work in
            in-demand fields to kickstart your career.
          </p>
        </div>

        {/* Right Column - Images */}
        <div className="grid grid-cols-2 gap-4">
          {/* Top Left - Small Square Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[6/4]">
              <img
                src="https://images.pexels.com/photos/18668992/pexels-photo-18668992.jpeg"
                alt="Students studying together"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Left - Kangaroo Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[3.9/4]">
              <img
                src="https://images.pexels.com/photos/6147444/pexels-photo-6147444.jpeg"
                alt="Australian kangaroo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Large Vertical Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[1.7/3]">
            <img
              src="https://images.unsplash.com/photo-1761301006715-d4f6ee28b08c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Happy international student in Australia"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityUsa;
