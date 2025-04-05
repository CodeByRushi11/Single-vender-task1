import { Link, useLocation } from "react-router-dom";
import "./Style.css";
import { useRef } from "react";

const CheckEmailPage = () => {
  const { state } = useLocation();
  const email = state?.email || "your email";
  const inputsRef = useRef([]);
  // input ref to create input feild feild as 4 container to eneter code 4 digit code
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return; // Only allow one digit

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

  return (
    <div className="email-container">
      <h2 className="text-[30px] font-normal leading-[100%] tracking-[0%] text-center mb-6 font-jost">
        Check Your Email
      </h2>

      <p className="text-justify">
        Code send to <strong>{email}</strong> .Please Enter the code below
      </p>
      <div className="flex justify-center gap-3 p-5">
        {[0, 1, 2, 3].map((i) => (
          <input
            key={i}
            type="text"
            maxLength="1"
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            ref={(el) => (inputsRef.current[i] = el)}
          />
        ))}
      </div>
      {/* When on create new password button redirect to the next page name create new passowrd */}
      <Link to="newPasswordPage">
        {" "}
        <button>Create a new Password</button>
      </Link>
      <p className="text-justify">
        Didn't receive code ?<strong className="underline">Resend Code</strong>{" "}
        <br></br>
        Resend Code in 00.59
      </p>
    </div>
  );
};

export default CheckEmailPage;
