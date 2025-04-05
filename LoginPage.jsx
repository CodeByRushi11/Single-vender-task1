import { Link } from "react-router-dom";
import "./Style.css";
import { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="login-container">
      <h2 className="text-[30px] font-normal leading-[100%] tracking-[0%] text-center mb-6 font-jost">
        Admin Login
      </h2>

      <input type="email" placeholder="Enter Your Email Address" />

      <div className="password-field">
        <input
          style={{ WebkitTextSecurity: showPassword ? "none" : "disc" }}
          placeholder="Password"
        />
        <span onClick={togglePasswordVisibility} className="toggle-icon">
          {showPassword ? (
            <i className="fa-solid fa-eye-slash"></i>
          ) : (
            <i className="fa-solid fa-eye"></i>
          )}
        </span>
      </div>

      <p className="forget-text">
        <Link to="/forgot-password">Forgot Password?</Link>
      </p>

      <button>Login</button>
    </div>
  );
};

export default LoginPage;
