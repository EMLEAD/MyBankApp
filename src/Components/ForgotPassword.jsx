import React, { useState, useRef } from 'react';

const fakeSendOTP = async (email) => {
  // Simulate API call to send OTP
  if (email) return Promise.resolve();
  return Promise.reject(new Error('Email not found'));
};

const fakeVerifyOTP = async (email, otp) => {
  // Simulate OTP verification
  if (otp === '1234') return Promise.resolve();
  return Promise.reject(new Error('Invalid OTP'));
};

const fakeResetPassword = async (email, password) => {
  // Simulate password reset
  if (password.length >= 6) return Promise.resolve();
  return Promise.reject(new Error('Password too short'));
};

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // 1: email, 2: otp, 3: reset
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      await fakeSendOTP(email);
      setStep(2);
      setSuccess('OTP sent to your email.');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOTPChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 3) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleOTPKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      await fakeVerifyOTP(email, otp.join(''));
      setStep(3);
      setSuccess('OTP verified. Please enter your new password.');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    if (password !== confirm) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }
    try {
      await fakeResetPassword(email, password);
      setSuccess('Password reset successful! You can now log in.');
      setStep(4);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[30rem] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">Forgot Password</h2>
        {error && <div className="mb-4 text-red-600 text-center">{error}</div>}
        {success && <div className="mb-4 text-green-600 text-center">{success}</div>}

        {step === 1 && (
          <form onSubmit={handleSendOTP} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@email.com"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
              disabled={loading}
            >
              {loading ? 'Sending OTP...' : 'Send OTP'}
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerifyOTP} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="otp">Enter OTP</label>
              <div className="flex gap-3 justify-center">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    ref={inputRefs[idx]}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={e => handleOTPChange(idx, e.target.value)}
                    onKeyDown={e => handleOTPKeyDown(idx, e)}
                    className="w-12 h-12 text-center text-xl border-2 border-gray-300 rounded focus:border-red-500 focus:outline-none"
                    autoFocus={idx === 0}
                  />
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
              disabled={loading}
            >
              {loading ? 'Verifying...' : 'Verify OTP'}
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleResetPassword} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="password">New Password</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                type="password"
                id="password"
                name="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter new password"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="confirm">Confirm Password</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                type="password"
                id="confirm"
                name="confirm"
                required
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                placeholder="Confirm new password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
              disabled={loading}
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        )}

        {step === 4 && (
          <div className="text-center text-green-700 font-semibold">
            Password reset successful! <br />
            <a href="/login" className="text-red-600 underline">Go to Login</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;