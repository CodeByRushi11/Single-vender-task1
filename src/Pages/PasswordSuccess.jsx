import React from "react";
import { Link } from "react-router-dom";

import success from "../assets/success.png";

const PasswordSuccess = () => {
  return (
    <div className="min-h-screen bg-[#eaf3f7] flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-semibold mb-4 text-black">
          Password Changed <br /> Successfully
        </h2>

        <img src={success} alt="Success" className="w-40 h-40 mx-auto mb-4" />

        <p className="text-sm text-gray-700 mb-6">
          Your password has been changed successfully. <br />
          You can now use your new password to login to your account.
        </p>
        <Link to="/Dashboard">
          <button className="w-full px-4 py-2 bg-[#2873f0] text-white text-base rounded-md hover:bg-[#0059f4] cursor-pointer text-[12px]">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PasswordSuccess;
