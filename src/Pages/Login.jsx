import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [errors, setErrors] = useState({ email: "", password: "" });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const validate = () => {
    const newErrors = { email: "", password: "" };

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Login successful");
      navigate("/Dashboard"); // Redirects to Dashboard
    }
  };

  return (
    <div
      style={{ backgroundColor: "#edf2f7" }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="w-[400px] mx-auto my-[10rem] p-[50px] bg-white rounded-[10px] shadow-[0_0_15px_rgba(0,0,0,0.1)]">
        <h2 className="text-[30px] font-medium text-center mb-6 font-jost pb-[20px]">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="relative w-full mb-6">
            <input
              type="email"
              id="email"
              className={`peer w-full border-[1px] ${
                errors.email ? "border-red-500" : "border-[#d1d5db]"
              } bg-[#f2f3f5] text-black placeholder-transparent px-3 py-2 rounded-md
                  focus:outline-none focus:ring-2 focus:ring-[#2873f0] focus:border-[#2873f0]
                  ${email ? "has-value" : ""}
                `}
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) {
                  setErrors((prev) => ({ ...prev, email: "" }));
                }
              }}
            />
            <label
              htmlFor="email"
              className={`
                  absolute left-3 text-sm text-gray-500 transition-all px-1 bg-[#f2f3f5]
                  peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                  peer-focus:top-[-10px] peer-focus:text-[#2873f0] peer-focus:text-sm
                  ${email ? "top-[-10px] text-sm text-[#2873f0]" : ""}
                `}
            >
              Enter Your Email Address
            </label>
            {errors.email && (
              <p className="text-red-500 text-[12px] mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="relative w-full mb-6">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className={`peer w-full border-[1px] ${
                errors.password ? "border-red-500" : "border-[#d1d5db]"
              } bg-[#f2f3f5] text-black placeholder-transparent px-3 py-2 rounded-md
                  focus:outline-none focus:ring-2 focus:ring-[#2873f0] focus:border-[#2873f0]
                  ${password ? "has-value" : ""}
                `}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) {
                  setErrors((prev) => ({ ...prev, password: "" }));
                }
              }}
            />
            <label
              htmlFor="password"
              className={`
                absolute left-3 text-sm text-gray-500 transition-all px-1 bg-[#f2f3f5]
                peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:top-[-10px] peer-focus:text-[#2873f0] peer-focus:text-sm
                ${password ? "top-[-10px] text-sm text-[#2873f0]" : ""}
              `}
            >
              Password
            </label>

            {/* Toggle Visibility Icon */}
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-3 text-[#888] cursor-pointer"
            >
              {showPassword ? (
                <i className="fa-solid fa-eye-slash"></i>
              ) : (
                <i className="fa-solid fa-eye"></i>
              )}
            </span>

            {errors.password && (
              <p className="text-red-500 text-[12px] mt-1">{errors.password}</p>
            )}
          </div>

          {/* Forgot + Submit */}
          <p className="text-right font-medium text-[12px] mb-[20px]">
            <Link to="/ForgotPassword">Forget Password?</Link>
          </p>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-[#2873f0] text-white text-base rounded-md hover:bg-[#0059f4] cursor-pointer text-[12px]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
