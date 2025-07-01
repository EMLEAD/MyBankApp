import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Here you would send the form data to your backend or email service
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-6">
          Have a question, feedback, or need support? Fill out the form below or reach us directly via email or phone. Our team will get back to you as soon as possible.
        </p>
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg font-semibold text-gray-800">Email</h2>
              <a href="mailto:adewalem88@gmail.com" className="text-red-600 hover:underline">adewalem88@gmail.com</a>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Phone</h2>
              <a href="tel:+2347037627565" className="text-red-600 hover:underline">+2347037627565</a>
            </div>
          </div>
        </div>
        <hr className="mb-8" />
        {submitted ? (
          <div className="text-green-600 text-center text-lg font-semibold">
            Thank you for contacting us! We will respond soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
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
              <label className="block text-gray-700 mb-1" htmlFor="message">Message</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                id="message"
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        )}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>EMCBank Headquarters:</p>
          <p>123 Main Street, Ibadan, Nigeria</p>
          <p>Mon - Fri: 8:00am - 6:00pm</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;