import React, { useState } from "react";

const CompanyInfo = () => {
  const [hideTrailingZero, setHideTrailingZero] = useState(false);

  // Example price
  const examplePrice = 1234.0;
  const displayPrice = hideTrailingZero
    ? `kr. ${parseInt(examplePrice)}`
    : `kr. ${examplePrice.toFixed(2)}`;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
      <h3 className="text-lg font-semibold mb-4">COMPANY INFO</h3>

      {/* Company Info Section */}
      <div className="shadow-[0px_0px_5px_#fddbdb] p-5 space-y-4">
        {/* Line 1: Store Name */}
        <div>
          <label className="text-xs text-gray-500 mb-1 block">Store Name</label>
          <input
            type="text"
            className="w-2/3 border-none rounded-md p-2 bg-gray-100"
          />
        </div>

        {/* Line 2: Street Address + City */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="text-xs text-gray-500 mb-1 block">
              Street Address
            </label>
            <input
              type="text"
              className="w-full border-none rounded-md p-2 bg-gray-100"
            />
          </div>
          <div className="w-full">
            <label className="text-xs text-gray-500 mb-1 block">City</label>
            <input
              type="text"
              className="w-full border-none rounded-md p-2 bg-gray-100"
            />
          </div>
        </div>

        {/* Line 3: Country + State + Postal Code */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="text-xs text-gray-500 mb-1 block">Country</label>
            <select className="w-full border-none rounded-md p-2 bg-gray-100">
              <option value="">Select Country</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
            </select>
          </div>
          <div className="w-full">
            <label className="text-xs text-gray-500 mb-1 block">State</label>
            <select className="w-full border-none rounded-md p-2 bg-gray-100">
              <option value="">Select State</option>
              <option value="delhi">Delhi</option>
              <option value="maharashtra">Maharashtra</option>
            </select>
          </div>
          <div className="w-full">
            <label className="text-xs text-gray-500 mb-1 block">
              Postal Code
            </label>
            <input
              type="text"
              className="w-full border-none rounded-md p-2 bg-gray-100"
            />
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-4 mt-6">Currency</h3>

      {/* Currency Section */}
      <div className="shadow-[0px_0px_5px_#fddbdb] p-5 space-y-4">
        {/* Line 1: Currency + Price Display Inputs */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="text-xs text-gray-500 mb-1 block">Currency</label>
            <input
              type="text"
              className="w-full border-none rounded-md p-2 bg-gray-100"
            />
          </div>
          <div className="w-full">
            <label className="text-xs text-gray-500 mb-1 block">
              Price Display
            </label>
            <input
              type="text"
              className="w-full border-none rounded-md p-2 bg-gray-100"
            />
          </div>
        </div>

        {/* Line 2: Currency Symbol + Display Example */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="w-1/2">
            <label className="text-xs text-gray-500 mb-1 block ">
              Currency Symbol
            </label>
            <input
              type="text"
              className="w-full border-none rounded-md p-2 bg-gray-100"
            />
          </div>
        </div>

        {/* Line 3: Toggle + Updated Example */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between ">
          <div className="flex items-center gap-3">
            <label className="text-xs text-gray-500 block">
              Hide Trailing Zero Fraction
            </label>

            {/* Custom Toggle Switch */}
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={hideTrailingZero}
                onChange={(e) => setHideTrailingZero(e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-all duration-300"></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
            </label>
          </div>
          {/* Styled example display */}
          <div className="bg-gray-100 px-10 py-4 rounded-md text-center  w-1/2 translate-y-[-10%]">
            <div className="text-lg font-medium text-black">{displayPrice}</div>
            <div className="text-sm text-gray-500">Price display example</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
