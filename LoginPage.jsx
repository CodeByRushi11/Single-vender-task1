import { Link } from "react-router-dom";
import "./auth.css";

const LoginPage = () => {
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
      <p>
        <Link to="/forgot-password">Forgot Password?</Link>
      </p>
    </div>
  );
};

export default LoginPage;
