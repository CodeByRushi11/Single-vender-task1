import React from "react";


const PasswordSuccess = () => {
  

 

  return (
    <div className="min-h-screen bg-[#eaf3f7] flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-semibold mb-4 text-black">
          Password Changed <br /> Successfully
        </h2>

        <img
          src="/successillu.jpg"
          alt="Success"
          className="w-40 h-40 mx-auto mb-4"
        />

        <p className="text-sm text-gray-700 mb-6">
          Your password has been changed successfully. <br />
          You can now use your new password to login to your account.
        </p>

        <button
         
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default PasswordSuccess;
