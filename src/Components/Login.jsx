import React, { useState, useEffect } from "react";
import { useNavigate,Link} from "react-router-dom";
import { login } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [showOTPModal, setShowOTPModal] = useState(false);
  const { isLoading, error, success } = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault();s
    try {
      await dispatch(login({ email, password })).unwrap();
      // Navigation will be handled in useEffect
    } catch (err) {
      // Error handled by Redux
    }
  };

  // Redirect on successful login
  useEffect(() => {
    if (success) {
      navigate("/");
    }
  }, [success, navigate]);

  return (
    <div className="h-[30rem] flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-red-600">
          Login
        </h2>
        {error && <div className="mb-4 text-red-600 text-center">{error.message}</div>}
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="username"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 text-gray-700">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <Link to='/forgot-password' class='text-blue-700'>Forgot Password </Link>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Login"}
        </button>
      </form>
      {isLoading && <Loader />}
    </div>
  );
};

export default Login;
