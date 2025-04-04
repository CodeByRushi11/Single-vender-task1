import { Link } from "react-router-dom";
import "./auth.css";

const ForgotPasswordPage = () => {
  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <input type="email" placeholder="Enter your email" />
      <button>Reset Password</button>
      <p>
        <Link to="/check-email">Check Email</Link>
      </p>
    </div>
  );
};

export default ForgotPasswordPage;
