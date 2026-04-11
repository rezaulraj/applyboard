import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-1"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-2"></div>
        <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-3"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="relative w-28 h-28 mx-auto mb-8 animate-float">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse-glow"></div>
          <svg
            className="w-full h-full text-blue-600 drop-shadow-xl"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
          >
            <circle
              cx="50"
              cy="50"
              r="42"
              className="stroke-blue-200"
              strokeWidth="3"
            />
            <polygon
              points="50,22 58,42 50,52 42,42"
              fill="currentColor"
              className="animate-compass origin-center"
            />
            <circle cx="50" cy="50" r="4" fill="currentColor" />
            <path
              d="M50 12 L50 22 M50 78 L50 88 M12 50 L22 50 M78 50 L88 50"
              className="stroke-blue-300"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-4 opacity-0 animate-fade-up">
          404
        </h1>

        <div className="space-y-3 mb-10 opacity-0 animate-fade-up delay-200">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Page Not Found
          </h2>
          <p className="text-gray-600 text-lg max-w-md mx-auto leading-relaxed">
            The page you're looking for seems to have drifted away. Let's get
            you back on track!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-up delay-400">
          <Link
            to="/"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg
                className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Back to Home
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <Link
            to="/contact"
            className="px-8 py-4 border-2 border-blue-200 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 hover:border-blue-300 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contact Support
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes blob-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes blob-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 30px) scale(1.05); }
          66% { transform: translate(40px, -20px) scale(0.95); }
        }
        @keyframes blob-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, 40px) scale(0.9); }
          66% { transform: translate(-30px, -30px) scale(1.1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes compass {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-blob-1 { animation: blob-1 10s ease-in-out infinite; }
        .animate-blob-2 { animation: blob-2 8s ease-in-out infinite; }
        .animate-blob-3 { animation: blob-3 12s ease-in-out infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-fade-up { animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-compass { animation: compass 16s linear infinite; transform-origin: 50px 50px; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </div>
  );
};

export default NotFound;
