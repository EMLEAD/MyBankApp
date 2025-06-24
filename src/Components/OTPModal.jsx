import React, { useState, useEffect } from 'react';

const OTPModal = ({ isOpen, onClose, onVerify }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    let interval;
    if (isOpen && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOpen, timer]);

  const handleChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleSubmit = () => {
    onVerify(otp.join(''));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Enter OTP</h2>
        <div className="flex gap-4 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-12 h-12 text-center border-2 rounded-md"
            />
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-red-600 text-white py-2 rounded-md"
        >
          Verify
        </button>
        <button
          onClick={onClose}
          className="w-full mt-2 text-gray-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default OTPModal;