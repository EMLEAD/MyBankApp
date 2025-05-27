import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className="bg-red ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Brand/Logo */}
          <div className="flex items-center text-xl font-bold text-red-600">
            
              EMCBank
            
          </div>

          {/* Navigation Links */}
          <div  >
            
            <ul className="hidden md:flex space-x-8 text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200" >
                <li> HOME</li>
                <li>  ABOUT US</li>
                <li> CONTACT US</li>

            </ul> 
           
          </div>

          <button    className="w-2rem flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Login</button>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;