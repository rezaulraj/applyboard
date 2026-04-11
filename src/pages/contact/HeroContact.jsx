import React from "react";

const HeroContact = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="bg-gradient-to-b from-blue-50 to-white rounded-3xl p-8 md:p-12 mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
            Contact
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-sans leading-relaxed">
            Interested in becoming a partner, or learning more about study
            abroad? We're here to help.
            <br className="hidden md:block" />
            Our expert support team can help answer all of your questions:
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Email Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4 flex justify-center">
              <svg
                className="w-12 h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 font-montserrat">
              Email
            </h3>
            <a
              href="mailto:help@AdmissionOnBoard.com"
              className="text-blue-600 hover:text-blue-700 font-medium mb-4 block font-sans"
            >
              help@AdmissionOnBoard.com
            </a>
            <p className="text-gray-600 text-sm font-sans">
              Please email us with your inquiries.
            </p>
          </div>

          {/* Live Chat Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4 flex justify-center">
              <svg
                className="w-12 h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 font-montserrat">
              Live Chat
            </h3>

            <p className="text-gray-600 text-sm font-sans">Available 24/7</p>
          </div>

          {/* Canada Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4 flex justify-center">
              <svg
                className="w-12 h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-montserrat">
              Canada
            </h3>
            <address className="text-gray-600 text-sm mb-3 not-italic font-sans leading-relaxed">
              101 Frederick St,
              <br />
              Kitchener, ON
              <br />
              N2H 6R3
            </address>
            <p className="text-gray-600 text-sm font-sans">
              Monday-Friday
              <br />9 AM-5:30 PM EST
            </p>
          </div>

          {/* India Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4 flex justify-center">
              <svg
                className="w-12 h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-montserrat">
              India
            </h3>
            <address className="text-gray-600 text-sm mb-3 not-italic font-sans leading-relaxed">
              World Tech Park,
              <br />
              6th Floor, Sector 30,
              <br />
              Gurugram, 122001
            </address>
            <p className="text-gray-600 text-sm font-sans">
              Monday-Friday
              <br />9 AM-5:30 PM EST
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2231897.362439609!2d89.88605017975219!3d23.257120652095566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1775897489482!5m2!1sen!2sbd"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HeroContact;
