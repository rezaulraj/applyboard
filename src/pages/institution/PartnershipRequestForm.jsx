import React, { useState } from "react";

const PartnershipRequestForm = () => {
  const [formData, setFormData] = useState({
    destinationCountry: "",
    schoolName: "",
    contactFirstName: "",
    contactLastName: "",
    contactEmail: "",
    contactTitle: "",
    phoneNumber: "",
    referredByAdmissionOnBoard: false,
    referredByFullName: "",
    referredByEmail: "",
    additionalComments: "",
    agreeToPrivacy: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="bg-gradient-to-b from-blue-700 to-blue-500 rounded-t-2xl p-8 sm:p-12 text-white">
          <p className="text-sm font-semibold text-blue-100 uppercase tracking-wider mb-2">
            GET STARTED
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Partnership Request
          </h1>
          <p className="text-blue-50 text-base sm:text-lg leading-relaxed max-w-2xl">
            Complete the quick form below, and our Partner Relations team will be in touch shortly to discuss how AdmissionOnBoard can elevate your student reach, recruitment process, and enrollment success.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-b-2xl shadow-xl p-6 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Destination Country */}
              <div>
                <label htmlFor="destinationCountry" className="block text-sm font-medium text-gray-700 mb-2">
                  Destination Country
                </label>
                <select
                  id="destinationCountry"
                  value={formData.destinationCountry}
                  onChange={(e) => setFormData({ ...formData, destinationCountry: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none bg-white"
                >
                  <option value="">Please Select</option>
                  <option value="canada">Canada</option>
                  <option value="usa">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="australia">Australia</option>
                </select>
              </div>

              {/* School Name */}
              <div>
                <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700 mb-2">
                  School Name
                </label>
                <input
                  type="text"
                  id="schoolName"
                  value={formData.schoolName}
                  onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  placeholder="Enter school name"
                />
              </div>

              {/* Contact First Name */}
              <div>
                <label htmlFor="contactFirstName" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact First Name
                </label>
                <input
                  type="text"
                  id="contactFirstName"
                  value={formData.contactFirstName}
                  onChange={(e) => setFormData({ ...formData, contactFirstName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  placeholder="Enter first name"
                />
              </div>

              {/* Contact Last Name */}
              <div>
                <label htmlFor="contactLastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Last Name
                </label>
                <input
                  type="text"
                  id="contactLastName"
                  value={formData.contactLastName}
                  onChange={(e) => setFormData({ ...formData, contactLastName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  placeholder="Enter last name"
                />
              </div>

              {/* Contact Email */}
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Email
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  placeholder="Enter email address"
                />
              </div>

              {/* Contact Title */}
              <div>
                <label htmlFor="contactTitle" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Title
                </label>
                <input
                  type="text"
                  id="contactTitle"
                  value={formData.contactTitle}
                  onChange={(e) => setFormData({ ...formData, contactTitle: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  placeholder="Enter job title"
                />
              </div>

              {/* Phone Number - Full Width */}
              <div className="sm:col-span-2">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            {/* Referred By Section */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="referredByAdmissionOnBoard"
                  checked={formData.referredByAdmissionOnBoard}
                  onChange={(e) => setFormData({ ...formData, referredByAdmissionOnBoard: e.target.checked })}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="referredByAdmissionOnBoard" className="ml-2 text-sm text-gray-700">
                  Referred by someone in AdmissionOnBoard?
                </label>
              </div>

              {formData.referredByAdmissionOnBoard && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  <div>
                    <label htmlFor="referredByFullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Referred by Full Name
                    </label>
                    <input
                      type="text"
                      id="referredByFullName"
                      value={formData.referredByFullName}
                      onChange={(e) => setFormData({ ...formData, referredByFullName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="Enter full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="referredByEmail" className="block text-sm font-medium text-gray-700 mb-2">
                      Referred by Email
                    </label>
                    <input
                      type="email"
                      id="referredByEmail"
                      value={formData.referredByEmail}
                      onChange={(e) => setFormData({ ...formData, referredByEmail: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Additional Comments */}
            <div>
              <label htmlFor="additionalComments" className="block text-sm font-medium text-gray-700 mb-2">
                Partnership Request Form Additional Comments
              </label>
              <textarea
                id="additionalComments"
                rows="4"
                value={formData.additionalComments}
                onChange={(e) => setFormData({ ...formData, additionalComments: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                placeholder="Enter any additional information..."
              />
            </div>

            {/* Privacy Section */}
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <p className="text-xs text-gray-600 leading-relaxed">
                AdmissionOnBoard is committed to protecting and respecting your privacy, and will only use your personal information to administer your account and to provide the products and services you have requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick below to say how you would like us to contact you.
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                In order to provide the content and other features available on our site, we may need to collect and process certain personal data about you. This includes information you provide when you fill in forms on our site, when you subscribe to our newsletter, or when you use certain features on our site. For more information on how we collect and use your personal data, please refer to our Privacy Policy.
              </p>

              <div className="flex items-start mt-4">
                <input
                  type="checkbox"
                  id="agreeToPrivacy"
                  checked={formData.agreeToPrivacy}
                  onChange={(e) => setFormData({ ...formData, agreeToPrivacy: e.target.checked })}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded mt-1 focus:ring-blue-500"
                />
                <label htmlFor="agreeToPrivacy" className="ml-2 text-sm text-gray-700">
                  By clicking submit below, you consent to allow AdmissionOnBoard to store and process the personal information submitted above to provide you the content requested.
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PartnershipRequestForm;