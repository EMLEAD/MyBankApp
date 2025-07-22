import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className="bg-red w-screen">
      
        <div className="flex justify-between items-center h-16 pr-10 ">
          
          <div className=" flex items-center text-xl font-bold text-red-600">
            
              EMCBank
            
          </div>

       
          <div className='w-200 flex items-center  ' >
            
            <ul className="hidden md:flex space-x-10 text-gray-700 {({ isActive }) =>
    isActive ? text-[rgb(245, 128, 89)] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200" >
            <li> <NavLink to="/">HOME</NavLink></li>
            <li> <NavLink to="/About">ABOUT US</NavLink></li>
            <li> <NavLink to="/Contact">CONTACT US</NavLink></li>
                
            </ul> 
           
          </div>
          {/* <button    className="w-2rem flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"><NavLink to="/Login">Login</NavLink></button> */}
       </div>
       
   
    </nav>
  );
};

export default NavBar;