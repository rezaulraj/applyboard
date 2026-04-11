import React, { useState, useEffect } from "react";

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 1. Check if cookie exists when component mounts
  useEffect(() => {
    const hasConsent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("admissionOnBoardConsent="));

    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  // 2. Function to save the cookie
  const acceptCookies = () => {
    // Create a date 1 year from now
    const date = new Date();
    date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;

    // Set the cookie
    document.cookie = `admissionOnBoardConsent=true; ${expires}; path=/; SameSite=Lax`;

    setIsVisible(false);
  };

  const declineCookies = () => {
    // You can also set a 'false' cookie if you want to remember they declined
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white shadow-2xl border-t border-gray-700 animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Text */}
        <div className="text-sm sm:text-base text-gray-300 leading-relaxed text-center sm:text-left">
          <p>
            We use cookies to enhance your experience. By continuing to visit
            this site you agree to our use of cookies.{" "}
            <a
              href="/privacy"
              className="text-blue-400 hover:underline font-medium"
            >
              Learn more
            </a>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 shrink-0">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
