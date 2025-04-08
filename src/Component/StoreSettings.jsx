import React from "react";

const StoreSettings = () => {
  return (
    <div className="p-6 bg-gray-50  space-y-6">
      {/* Store Language Section */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">STORE LANGUAGE</h2>
        <label className="block text-sm text-gray-700 mb-1">
          Store language
        </label>
        <select className="w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-gray-100">
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
      </div>

      {/* Google Analytics Section */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <div className="flex items-center gap-2 mb-2">
          <img
            src="https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg"
            alt="Google Analytics"
            className="w-5 h-5"
          />
          <h2 className="text-lg font-semibold">GOOGLE ANALYTICS</h2>
        </div>
        <p className="text-xs text-gray-500 mb-1">Account not connected</p>
        <p className="text-sm text-gray-600 mb-4">
          Google Analytics is a popular free tool, provided by Google. In fact,
          66% of all websites using analytics technology are now using Google
          Analytics.
        </p>
        <input
          type="text"
          placeholder="Enter your web property ID"
          className="w-full p-2 mb-3 border border-gray-300 rounded-md bg-gray-100"
        />
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-[10px] hover:bg-blue-600 transition">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreSettings;
