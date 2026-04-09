import React from "react";

const FeedbackStudent = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "I tried [applying to institutions] and it took months, and months, and months for me to get an answer from a school. But then I stumbled upon  AdmissionOnBoard, and it was like an answer from heaven.",
      name: "Arabeille A.",
      highlight: "Like an answer from heaven",
    },
    {
      id: 2,
      quote:
        "I wanted to make my parents proud, and they are proud. And it was all thanks to  AdmissionOnBoard.",
      name: "Krupal P.",
      highlight: "All thanks to  AdmissionOnBoard",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-left mb-16">
          <h1 className="text-4xl font-montserrat font-bold text-gray-900 mb-4 tracking-tight">
            What Our Students Have to Say
          </h1>
          <p className="text-sm md:text-lg font-sans text-gray-800 text-left">
            Hear from real international students about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 md:p-10 border border-gray-100 hover:border-indigo-200"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-6 text-indigo-100 group-hover:text-indigo-200 transition-colors duration-300">
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Highlight Title */}
              <div className="mb-6">
                <h2 className="text-2xl font-montserrat font-bold text-gray-700 border-l-4 border-gray-500 pl-4">
                  {testimonial.highlight}
                </h2>
              </div>

              {/* Quote Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 font-sans">
                "{testimonial.quote}"
              </p>

              {/* Student Name */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-indigo-700 font-semibold text-sm font-sans">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 font-sans">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500 font-sans">
                      International Student
                    </p>
                  </div>
                </div>
                <div className="text-indigo-400 opacity-60">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackStudent;
