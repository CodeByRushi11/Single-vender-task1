import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import frames from "../assets/frames.png";
import { Eye, EyeOff } from "lucide-react"; // Import eye icons

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();


  const handleSubmit = (e) => {
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
            Please enter and confirm your new password. You will need to login after you reset.
          </p>
          {/* New Password */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-1">
              New Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border border-blue-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition pr-10"
            />
            <div
              className="absolute top-9 right-3 cursor-pointer text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
            <p className="text-xs text-gray-500 mt-1">Must contain 8 characters.</p>
          </div>
          {/* Confirm Password */}
          <div className="mb-6 relative">
            <label className="block text-sm font-medium mb-1">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Enter Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-blue-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition pr-10"
            />
            <div
              className="absolute top-9 right-3 cursor-pointer text-gray-600"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
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
