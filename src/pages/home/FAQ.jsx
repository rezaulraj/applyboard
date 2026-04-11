import React, { useState } from "react";
import { FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    q: "How can I find my dream program?",
    a: "It couldn't be easier! Register for a free  AdmissionOnBoard account, then take a few short minutes to tell us about your educational goals and set up your profile. Our platform will suggest study programs just for your needs, and you'll have full access to explore the 150,000+ programs available through our AI-guided search.",
  },
  {
    q: "How do I apply once I've found the right program?",
    a: 'Once you\'ve found your ideal program, simply click "Apply" and follow the guided steps. Our platform walks you through each requirement, checks your documents for quality, and submits your application — all in one place.',
  },
  {
    q: "Why should I use  AdmissionOnBoard?",
    a: " AdmissionOnBoard gives you access to 150,000+ programs across top study destinations, a 95% acceptance rate, AI-powered guidance, and dedicated support from application to enrollment — all completely free for students.",
  },
  {
    q: "Which countries can I apply to study in?",
    a: "You can apply to study in Canada, the United States, the United Kingdom, Australia, and Ireland — five of the world's top international student destinations.",
  },
  {
    q: "I've applied, so what's next?",
    a: "After you apply,  AdmissionOnBoard's team will review your application and keep you updated every step of the way. You'll receive notifications on your application status, and we'll help you with visa guidance and pre-departure support once you receive an offer.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-12 py-16 flex gap-14 items-start flex-wrap">
      <div className="shrink-0 w-[360px]">
        <p className="text-base font-medium font-montserrat tracking-[1.5px] text-[#1e6deb] uppercase mb-3">
          FAQ's
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold font-montserrat text-gray-800 leading-tight mb-4">
          Got Questions? We Have Answers
        </h2>
        <p className="text-base lg:text-lg text-gray-500 font-sans leading-relaxed">
          Still wondering about studying abroad, and how AdmissionOnBoard can
          get you there? Read these answers to our most commonly asked
          questions.
        </p>
      </div>

      <div className="flex-1 flex flex-col gap-3 min-w-[280px]">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`rounded-xl overflow-hidden transition-colors duration-200 ${open === i ? "bg-indigo-50" : "bg-[#F0F4FF]"}`}
          >
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full flex items-center justify-between px-6 py-[18px] text-left gap-4 bg-transparent border-none cursor-pointer"
            >
              <span className="text-base font-semibold text-[#1E2D4E] leading-snug font-sans">
                {faq.q}
              </span>
              <FiChevronUp
                className={`shrink-0 text-gray-400 text-[18px] transition-transform duration-300 ${open === i ? "rotate-0" : "rotate-180"}`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-350 ${open === i ? "max-h-96" : "max-h-0"}`}
            >
              <div className="px-6 pb-5 pt-4 text-sm font-sans text-gray-600 leading-relaxed border-t border-blue-100">
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
