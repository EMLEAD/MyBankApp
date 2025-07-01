import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-red-600 mb-4">About EMCBank</h1>
        <p className="text-gray-700 text-lg mb-6">
        EMCBank is dedicated to providing secure, innovative, and user-friendly banking solutions for individuals and businesses.
        Our mission is to empower our customers with the tools and support they need to achieve their financial goals.
      </p>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Why Choose EMCBank?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>24/7 secure online and mobile banking</li>
          <li>Fast and reliable customer support</li>
          <li>Easy money transfers and bill payments</li>
          <li>Advanced security and privacy protection</li>
          <li>Personalized financial insights and tools</li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h2>
        <p className="text-gray-700">
          To be the most trusted digital bank, making banking simple, accessible, and rewarding for everyone.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center mt-8">
        <div className="mb-4 md:mb-0">
          <span className="text-gray-600">Contact us: </span>
          <a href="mailto:support@emcbank.com" className="text-red-600 hover:underline">support@emcbank.com</a>
        </div>
        
      </div>
    </div>
  </div>
  );
};

export default About;