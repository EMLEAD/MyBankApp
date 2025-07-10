import React from 'react';
import { 
  FaChartPie, 
  FaCommentDots, 
  FaCalendarAlt, 
  FaThLarge, 
  FaCogs, 
  FaQuestionCircle, 
  FaSignOutAlt, 
  FaDatabase,
  FaHome,
  FaExchangeAlt,
  FaMoneyBillWave
} from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';


const SideBar = () => {
  const location = useLocation();

  const MenuItem = ({ icon, label, to }) => {
    const isActive = location.pathname === to;
    return (
      <NavLink
        to={to}
        className={`flex items-center space-x-3 p-3 rounded-md transition-colors ${
          isActive 
            ? 'bg-white/20 text-white' 
            : 'text-white/80 hover:bg-white/10 hover:text-white'
        }`}
      >
        <span className="text-lg">{icon}</span>
        <span className="text-sm font-medium">{label}</span>
      </NavLink>
    );
  };

  return (
    <div className="w-64 bg-red-600 text-white flex flex-col flex-shrink-0">
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">U</span>
          </div>
          <div>
            <p className="font-medium">Welcome Back</p>
            <p className="text-xs opacity-75">Premium Member</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        <MenuItem icon={<FaHome />} label="Dashboard" to="/" />
        <MenuItem icon={<FaExchangeAlt />} label="Transfers" to="/transfers" />
        <MenuItem icon={<FaMoneyBillWave />} label="Payments" to="/payments" />
        <MenuItem icon={<FaChartPie />} label="Analytics" to="/analytics" />
        <MenuItem icon={<FaCalendarAlt />} label="Transactions" to="/transactions" />
        <MenuItem icon={<FaDatabase />} label="Cards" to="/cards" />
      </nav>

      <div className="p-4 border-t border-white/10 space-y-1">
        <MenuItem icon={<FaCogs />} label="Settings" to="/settings" />
        <MenuItem icon={<FaQuestionCircle />} label="Help & Support" to="/help" />
        <div className="mt-4 pt-4 border-t border-white/10">
          <button className="flex items-center space-x-3 w-full p-3 rounded-md text-white/80 hover:bg-white/10 hover:text-white transition-colors">
            <FaSignOutAlt />
            <span className="text-sm font-medium">Log Out</span>
          </button>
        </div>
      </div>
    </div>
  )
}


export default SideBar

