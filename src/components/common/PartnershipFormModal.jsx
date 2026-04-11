// PartnershipFormModal.jsx
import React, { useState, useEffect } from "react";

const PartnershipFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    destinationCountry: "",
    schoolName: "",
    contactFirstName: "",
    contactLastName: "",
    contactEmail: "",
    contactTitle: "",
    phoneNumber: "",
    referredBySomeone: false,
    additionalComments: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setSubmitSuccess(true);

    setTimeout(() => {
      setSubmitSuccess(false);
      setCurrentStep(1);
      onClose();
      setFormData({
        destinationCountry: "",
        schoolName: "",
        contactFirstName: "",
        contactLastName: "",
        contactEmail: "",
        contactTitle: "",
        phoneNumber: "",
        referredBySomeone: false,
        additionalComments: "",
      });
    }, 2000);
  };

  const steps = [
    {
      number: "01",
      title: "Fill the Form",
      description: "Provide your institution details",
    },
    {
      number: "02",
      title: "Review",
      description: "Our team reviews your application",
    },
    {
      number: "03",
      title: "Connect",
      description: "We'll schedule a call with you",
    },
    {
      number: "04",
      title: "Partner",
      description: "Start your partnership journey",
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>


      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform transition-all">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="relative h-48 sm:h-64 overflow-hidden rounded-t-3xl">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Partnership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-2">
                Partnership Request
              </h2>
              <p className="text-blue-100 text-sm sm:text-base">
                Join our global network of educational institutions
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 sm:px-8 pt-8 pb-4">
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 transition-all duration-300 ${
                    currentStep > index
                      ? "bg-green-500 text-white"
                      : currentStep === index + 1
                        ? "bg-blue-600 text-white ring-4 ring-blue-100"
                        : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {currentStep > index ? (
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <span className="text-sm sm:text-base font-bold">
                      {step.number}
                    </span>
                  )}
                </div>
                <h4
                  className={`text-xs sm:text-sm font-semibold mb-1 ${
                    currentStep >= index + 1 ? "text-gray-900" : "text-gray-400"
                  }`}
                >
                  {step.title}
                </h4>
                <p className="text-xs text-gray-500 hidden sm:block">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="relative mt-4">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 rounded-full">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>


        <form onSubmit={handleSubmit} className="p-6 sm:p-8">
          {submitSuccess ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Thank You!
              </h3>
              <p className="text-gray-600 mb-2">
                We've received your partnership request.
              </p>
              <p className="text-gray-500 text-sm">
                Our team will review your application and contact you within 2-3
                business days.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div>
                  <label
                    htmlFor="destinationCountry"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Destination Country <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="destinationCountry"
                    name="destinationCountry"
                    value={formData.destinationCountry}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none bg-white hover:border-gray-400"
                  >
                    <option value="">Please Select</option>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="germany">Germany</option>
                    <option value="ireland">Ireland</option>
                    <option value="uk">United Kingdom</option>
                    <option value="usa">United States</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="schoolName"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    School Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="schoolName"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    required
                    placeholder="Enter school name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none hover:border-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div>
                  <label
                    htmlFor="contactFirstName"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Contact First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactFirstName"
                    name="contactFirstName"
                    value={formData.contactFirstName}
                    onChange={handleChange}
                    required
                    placeholder="Enter first name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none hover:border-gray-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contactLastName"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Contact Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactLastName"
                    name="contactLastName"
                    value={formData.contactLastName}
                    onChange={handleChange}
                    required
                    placeholder="Enter last name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none hover:border-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contactEmail"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Contact Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    required
                    placeholder="Enter email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none hover:border-gray-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contactTitle"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Contact Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactTitle"
                    name="contactTitle"
                    value={formData.contactTitle}
                    onChange={handleChange}
                    required
                    placeholder="Enter job title"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none hover:border-gray-400"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none hover:border-gray-400"
                />
              </div>

              <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                <input
                  type="checkbox"
                  id="referredBySomeone"
                  name="referredBySomeone"
                  checked={formData.referredBySomeone}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="referredBySomeone"
                  className="ml-3 text-sm text-gray-700 cursor-pointer"
                >
                  <span className="font-semibold">Referred by someone?</span>
                  <span className="block text-gray-600 mt-1">
                    Were you referred by someone in AdmissionOnBoard?
                  </span>
                </label>
              </div>

              <div>
                <label
                  htmlFor="additionalComments"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Additional Comments
                </label>
                <textarea
                  id="additionalComments"
                  name="additionalComments"
                  value={formData.additionalComments}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us more about your institution and partnership goals..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none hover:border-gray-400"
                />
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-blue-400 disabled:to-blue-500 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Partnership Request</span>
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
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-gray-500 mt-3">
                  By submitting, you agree to our privacy policy and terms of
                  service.
                </p>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default PartnershipFormModal;
