import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
 return (
    <footer className="bg-white-600 text-red-600">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo / Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-2">EMC Bank</h2>
          <p className="text-sm text-black">Building the future with easy banking.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-black">
            <li><a href="/" className="hover:text-red-500">Home</a></li>
            <li><a href="/about" className="hover:text-red-500">About</a></li>
            <li><a href="/contact" className="hover:text-red-500">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" className="hover:text-red-500 text-black">
              <FaFacebook  size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" className="hover:text-red-500 text-black">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-red-500 text-black">
              <FaInstagram size={24} />
            </a>
            <a href="https://github.com" target="_blank" className="hover:text-red-500 text-black">
              <FaGithub size={24} />
            </a>
          </div>
        </div>

      </div>

      <div className=" border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} EMLEAD. All rights reserved.
      </div>
    </footer>
  );

}

export default Footer