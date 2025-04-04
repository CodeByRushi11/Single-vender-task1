import { Link } from "react-router-dom";
import "./auth.css";

const CheckEmailPage = () => {
  return (
    <div className="auth-container">
      <h2>Check Your Email</h2>
      <p>We have sent you an email with a link to reset your password.</p>
      <Link to="/">Back to Login</Link>
    </div>
  );
};

export default CheckEmailPage;
