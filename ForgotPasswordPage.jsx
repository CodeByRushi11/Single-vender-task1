import { Link } from "react-router-dom";
import "./Style.css";
import { useState } from "react";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="forget-container">
      <h2 className="text-[30px] font-normal leading-[100%] tracking-[0%] text-center mb-6 font-jost">
        Forget Password
      </h2>
      <p className="text-justify">
        No worries! Enter your email address below and we will send you code to
        reset password
      </p>
      <input
        type="email"
        placeholder="Enter Your Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Link to="/check-email" state={{ email }}>
        {" "}
        <button>Reset Password</button>
      </Link>
    </div>
  );
};

export default ForgotPasswordPage;
