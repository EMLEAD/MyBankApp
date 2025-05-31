import { FaChartPie, FaCommentDots, FaCalendarAlt, FaThLarge, FaCogs, FaQuestionCircle, FaSignOutAlt, FaDatabase } from 'react-icons/fa';
import React from 'react';
import { NavLink } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className='flex w-full '>
    <div className="min-h-screen w-64 bg-red-600 text-white flex flex-col">
      <div className="py-6 px-4 flex items-center justify-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            
          {/* User's Registered Image will be declared here */}
          <div className="w-10 h-8  "></div>
        </div>
        
      </div>

      <nav className="flex-1 px-4 space-y-4">
        <MenuItem icon={<FaThLarge />} label="Profile" />
        <MenuItem icon={<FaChartPie />} label="Transfer" />
        <MenuItem icon={<FaCommentDots />} label="Aitime/Data Subscription" />
        <MenuItem icon={<FaCalendarAlt />} label="Transaction History" />
        <MenuItem icon={<FaDatabase />} label="Book Flights"  />
      </nav>

      <div className="mt-auto px-4 space-y-4 py-4 border-t border-white/20">
        <MenuItem icon={<FaCogs />} label="Settings" />
        <MenuItem icon={<FaQuestionCircle />} label="Help" />
        <MenuItem icon={<FaSignOutAlt />} label="Log Out" />
      </div>
    
    </div>


    <div className="p-6 bg-white min-h-screen">
      {/*HomePage Search Area */}
      <div className="flex justify-end items-center mb-6">
        
        <input
          type="text"
          placeholder="Search"
          className="rounded-full px-4 py-2 border border-red-300 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Account Statement */}
      <div className="flex items-center mb-4 justify-end">
        <h2 className="text-2xl  text-gray-700 font-san text-red-600 ">Account Statement:</h2>
        <select className="px-4 py-2 border rounded-md shadow-sm focus:outline-none">
          <option>Last 30 Days</option>
          <option>Last 7 Days</option>
          <option>Last Year</option>
        </select>
      </div>

      {/* Account Informations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="border rounded-xl rounded-xl p-4">
            <NavLink to={"/"}>
          <div className="text-red-600 text-l font-bold">Balance</div>
          <div className="text-sm">$30,000</div>
          </NavLink>
        </div>

        <div className="bg-white border rounded-xl p-4 shadow-sm">
        <NavLink to={"/"}>
          <div className="text-red-600 text-l font-bold">Mobile Top-Up</div>
          <div className="text-sm text-gray-700">Up to $3,000</div>
          </NavLink>
        </div>

        <div className="bg-white border rounded-xl p-4 shadow-sm">
        <NavLink to={"/"}>
          <div className="text-red-600 text-l font-bold">Int. Transfer</div>
          <div className="text-sm text-gray-700">Up To</div>
          <div className="text-xs text-gray-500 mt-1">$100,000</div>
          </NavLink>
        </div>

        <div className="bg-white border rounded-xl p-4 shadow-sm">
        <NavLink to={"/"}>
          <div className="text-red-600 text-l font-bold">Loans</div>
          <div className="text-sm text-gray-700">Up To</div>
          <div className="text-xs text-gray-500 mt-1">50% Of Your Savings</div>
          </NavLink>
        </div>
      </div>
      <div className='w-[40rem] h-[20rem]  border rounded-xl shadow-sm mt-8'>
      
        
        
      </div>
    </div>
    </div>
    
  );
};

const MenuItem = ({ icon, label, isActive }) => {
  return (
    <div
      className={`flex items-center space-x-3 p-2 rounded-md cursor-pointer transition hover:bg-yellow-600 ${
        isActive ? "bg-purple-300 text-white" : ""
      }`}
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
      
    </div>
    
  );
};

export default HomePage;
