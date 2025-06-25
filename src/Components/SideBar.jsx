import React from 'react'
import { FaChartPie, FaCommentDots, FaCalendarAlt, FaThLarge, FaCogs, FaQuestionCircle, FaSignOutAlt, FaDatabase } from 'react-icons/fa';


const SideBar = () => {

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

  return (
    <div>

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
    </div>
  )
}


export default SideBar

