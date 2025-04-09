import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/PasswordSuccess");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="min-h-screen bg-[#f1f7fa] flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-2">
            Create Your Password
          </h2>
          <p className="text-sm text-center text-black font-medium mb-6">
            Please enter and confirm your new password. You will need to login
            after you reset.
          </p>
          {/* New Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              New Password
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="Enter New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full border rounded-md px-4 py-2 bg-gray-100 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-2 text-gray-500"
              >
                👁️
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">must contain 8 char.</p>
          </div>
          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Enter Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border rounded-md px-4 py-2 bg-gray-100 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2 text-gray-500"
              >
                👁️
              </button>
            </div>
          </div>
          {/* Submit Button */}

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition">
            Reset New Password
          </button>
        </div>
      </div>
    </form>
  );
};

export default ResetPassword;
