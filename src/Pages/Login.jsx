import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div
      style={{ backgroundColor: "#edf2f7" }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="w-[400px] mx-auto my-[10rem] p-[50px] bg-white rounded-[10px] shadow-[0_0_15px_rgba(0,0,0,0.1)]">
        <h2 className="text-[30px] font-medium leading-[100%] tracking-[0%] text-center mb-6 font-jost pb-[20px] ">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Enter Your Email Address"
          className="w-full px-[12px] py-[10px] rounded-md text-[14px] bg-[#f2f3f5] outline-none mb-[40px]"
        />

        <div className="relative">
          <input
            style={{ WebkitTextSecurity: showPassword ? "none" : "disc" }}
            placeholder="Password"
            className="w-full  px-[12px] py-[10px] rounded-md text-[14px] bg-[#f2f3f5] outline-none mb-[40px]"
          />
          <span
            onClick={togglePasswordVisibility}
            className="absolute right-[10px] top-[10%] translate-y-[10%] text-[#888] cursor-pointer"
          >
            {showPassword ? (
              <i className="fa-solid fa-eye-slash"></i>
            ) : (
              <i className="fa-solid fa-eye"></i>
            )}
          </span>
        </div>

        <p className="text-right font-medium text-[12px] mb-[40px]">
          <Link to="/ForgotPassword">Forget Password?</Link>
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

export default Login;
