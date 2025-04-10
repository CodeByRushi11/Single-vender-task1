import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = () => {
    if (!email.trim()) {
      setError("Email is required.");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    setError("");
    return true;
  };

  const handleReset = (e) => {
    e.preventDefault();
    if (validateEmail()) {
      navigate("/CheckEmail", { state: { email } });
    }
  };

  return (
    <div
      style={{ backgroundColor: "#edf2f7" }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="w-[400px] mx-auto my-[10rem] p-[50px] bg-white rounded-[10px] shadow-[0_0_15px_rgba(0,0,0,0.1)]">
        <h2 className="text-[30px] font-medium leading-[100%] tracking-[0%] text-center mb-6 font-jost pb-[20px] ">
          Forget Password
        </h2>
        <p className="pb-[30px] text-[12px] leading-[20px] font-normal font-jost ">
          No worries! Enter your email address below and we will send you a code
          to reset your password.
        </p>

        <form onSubmit={handleReset}>
          <div className="relative w-full mb-6">
            <input
              type="email"
              id="email"
              className={`peer w-full border-[0.5px] ${
                error ? "border-red-500" : "border-[#d1d5db]"
              } bg-[#f2f3f5] text-black placeholder-transparent px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2873f0] focus:border-[#2873f0]`}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="email"
              className={`absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-[#2873f0] peer-focus:text-sm bg-[#f2f3f5] px-1`}
            >
              Enter Your Email Address
            </label>
            {error && <p className="text-red-500 text-[12px] mt-1">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-[#2873f0] text-white text-base rounded-md hover:bg-[#0059f4] cursor-pointer text-[12px]"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
