import { Link } from "react-router-dom";
import "./Style.css";
import { useState } from "react";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="w-[400px] mx-auto my-[10rem] p-[50px] bg-white rounded-[10px] shadow-[0_0_15px_rgba(0,0,0,0.1)]">
      <h2 className="text-[30px] font-medium leading-[100%] tracking-[0%] text-center mb-6 font-jost pb-[20px] ">
        Forget Password
      </h2>
      <p className="pb-[30px] text-[12px] leading-[20px] align-middle font-normal font-jost ">
        No worries! Enter your email address below and we will send you code to
        reset password
      </p>
      <input
        className="w-full mb-[15px] px-[12px] py-[10px] rounded-md text-[14px] bg-[#f2f3f5] outline-none mb-[30px]
"
        type="email"
        placeholder="Enter Your Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Link to="/check-email" state={{ email }}>
        {" "}
        <button className="w-full px-4 py-2 bg-[#2873f0] text-white text-base rounded-md hover:bg-[#0059f4] cursor-pointer text-[12px]">
          Reset Password
        </button>
      </Link>
    </div>
  );
};

export default ForgotPasswordPage;
