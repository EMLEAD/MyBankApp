import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OTPModal from './OTPModal';

// import your API functions if you have them
// import { sendOTP, verifyOTP } from '../services/authService';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [otpError, setOtpError] = useState('');
  const navigate = useNavigate();

  // Simulate login and OTP API calls for demonstration
  const fakeLogin = async (email, password) => {
    // Replace this with your real login API call
    if (email && password) return Promise.resolve();
    return Promise.reject(new Error('Invalid credentials'));
  };
  const fakeVerifyOTP = async (email, otp) => {
    // Replace this with your real OTP verification API call
    if (otp === '1234') return Promise.resolve();
    return Promise.reject(new Error('Invalid OTP'));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setOtpError('');
    try {
      // await sendOTP(email); // If using real API
      await fakeLogin(email, password);
      setShowOTPModal(true);
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleOTPVerify = async (otp) => {
    setLoading(true);
    setOtpError('');
    try {
      // await verifyOTP(email, otp); // If using real API
      await fakeVerifyOTP(email, otp);
      setShowOTPModal(false);
      navigate('/'); // or wherever you want to redirect
    } catch (err) {
      setOtpError(err.message || 'OTP verification failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[30rem] flex items-center justify-center bg-gray-50">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-red-600">Login</h2>
        {error && <div className="mb-4 text-red-600 text-center">{error}</div>}
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoComplete="username"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Login'}
        </button>
      </form>

      {/* OTP Modal */}
      <OTPModal
        isOpen={showOTPModal}
        onClose={() => setShowOTPModal(false)}
        onVerify={handleOTPVerify}
        loading={loading}
        error={otpError}
      />
    </div>
  );
};

export default Login;