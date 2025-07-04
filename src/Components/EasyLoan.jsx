import React, { useState } from 'react';

const EasyLoan = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    amount: '',
    tenure: '',
    purpose: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Here you would send the form data to your backend or loan processing service
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-red-600 mb-4 text-center">Easy Loan Application & Repayment</h1>
        <p className="text-gray-700 mb-6 text-center">
          Apply for a loan in minutes and enjoy flexible repayment options with EMCBank. Our process is fast, secure, and transparent.
        </p>
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Why Choose Our Loans?</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Quick online application</li>
                <li>Instant eligibility check</li>
                <li>Competitive interest rates</li>
                <li>Flexible repayment plans</li>
                <li>No hidden charges</li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">How Repayment Works</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Automatic monthly deductions</li>
                <li>Early repayment allowed with no penalty</li>
                <li>Track your repayment status online</li>
                <li>Get reminders before due dates</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="mb-8" />
        {submitted ? (
          <div className="text-green-600 text-center text-lg font-semibold">
            Thank you for applying!<br />
            Our team will review your application and contact you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="name">Full Name</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="amount">Loan Amount (₦)</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                type="number"
                id="amount"
                name="amount"
                required
                min="10000"
                step="1000"
                value={form.amount}
                onChange={handleChange}
                placeholder="e.g. 50000"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="tenure">Repayment Tenure (months)</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                id="tenure"
                name="tenure"
                required
                value={form.tenure}
                onChange={handleChange}
              >
                <option value="">Select tenure</option>
                <option value="3">3 months</option>
                <option value="6">6 months</option>
                <option value="12">12 months</option>
                <option value="24">24 months</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="purpose">Purpose of Loan</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                id="purpose"
                name="purpose"
                rows="3"
                required
                value={form.purpose}
                onChange={handleChange}
                placeholder="e.g. Business expansion, school fees, medical, etc."
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
            >
              Apply Now
            </button>
          </form>
        )}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Need help? <a href="/contact" className="text-red-600 hover:underline">Contact our support team</a></p>
        </div>
      </div>
    </div>
  );
};

export default EasyLoan;