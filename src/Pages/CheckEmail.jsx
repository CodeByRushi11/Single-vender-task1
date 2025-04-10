import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const CheckEmail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const email = state?.email || "your email";
  const inputsRef = useRef([]);
  const [error, setError] = useState("");

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;

    inputsRef.current[index].value = value;
    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    const code = inputsRef.current.map((input) => input.value).join("");
    if (code.length !== 4 || !/^\d{4}$/.test(code)) {
      setError("Please enter a valid 4-digit code.");
    } else {
      setError("");
      navigate("/ResetPassword");
    }
  };

  return (
    <div
      style={{ backgroundColor: "#edf2f7" }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="w-[400px] mx-auto my-[10rem] p-[50px] bg-white rounded-[10px] shadow-[0_0_15px_rgba(0,0,0,0.1)]">
        <h2 className="text-[30px] font-medium text-center mb-6 font-jost pb-[20px]">
          Check Your Email
        </h2>
        <p className="pb-[30px] text-[12px] leading-[20px] font-normal font-jost">
          Code sent to <strong>{email}</strong>. Please enter the code below.
        </p>

        <div className="flex justify-center gap-2 pt-2 pb-2 pl-12 pr-12">
          {[0, 1, 2, 3].map((i) => (
            <input
              key={i}
              type="text"
              maxLength="1"
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              ref={(el) => (inputsRef.current[i] = el)}
              className="w-10 h-10 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        {error && (
          <p className="text-red-500 text-[12px] mt-[-15px] mb-[15px] text-center pt-4">
            {error}
          </p>
        )}

        <button
          onClick={handleSubmit}
          className="w-full px-4 py-2 bg-[#2873f0] text-white text-base rounded-md hover:bg-[#0059f4] cursor-pointer mb-[15px] text-[12px]"
        >
          Create a new Password
        </button>

        <p className="pb-[30px] text-[12px] leading-[20px] font-normal font-jost text-center">
          Didn't receive code?{" "}
          <strong className="underline cursor-pointer">Resend Code</strong>
          <br />
          Resend Code in 00:59
        </p>
      </div>
    </div>
  );
};

export default CheckEmail;
