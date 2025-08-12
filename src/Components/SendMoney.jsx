import React, { useState } from 'react';

const SendMoney = () => {
  const [form, setForm] = useState({
    fromAccount: '',
    toAccount: '',
    amount: '',
    note: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Here you would send the form data to your backend for processing
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-red-600 mb-6 text-center">Send Money</h1>
        <p className="text-gray-700 mb-6 text-center">
          Transfer funds securely and instantly to any bank account.
        </p>
        {submitted ? (
          <div className="text-green-600 text-center text-lg font-semibold">
            Transfer successful!<br />
            <a href="/dashboard" className="text-red-600 underline">Go back to dashboard</a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="fromAccount">From Account</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                type="text"
                id="fromAccount"
                name="fromAccount"
                required
                value={form.fromAccount}
                onChange={handleChange}
                placeholder="Your Account Number"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="toAccount">To Account</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                type="text"
                id="toAccount"
                name="toAccount"
                required
                value={form.toAccount}
                onChange={handleChange}
                placeholder="Recipient Account Number"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="amount">Amount (₦)</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                type="number"
                id="amount"
                name="amount"
                required
                min="100"
                step="100"
                value={form.amount}
                onChange={handleChange}
                placeholder="e.g. 5000"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="note">Note (optional)</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                type="text"
                id="note"
                name="note"
                value={form.note}
                onChange={handleChange}
                placeholder="e.g. Rent, Gift, etc."
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
            >
              Send Money
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SendMoney