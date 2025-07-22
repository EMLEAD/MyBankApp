import { FaChartPie, FaMoneyBillWave, FaExchangeAlt, FaPiggyBank, FaCreditCard, FaBell, FaSearch, FaChevronDown, FaUser } from 'react-icons/fa';
import { BsGraphUp, BsCreditCard2Front } from 'react-icons/bs';
import { BiTransferAlt } from 'react-icons/bi';
import { MdOutlineSavings } from 'react-icons/md';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from '../store/authSlice';
import { format } from 'date-fns';


const HomePage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('all');
  
  useEffect(() => {
    // Fetch user profile when component mounts
    dispatch(getUserProfile());
    
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, [dispatch]);
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount || 0);
  };
  
  const formatDate = (dateString) => {
    return format(new Date(dateString), 'MMM d, yyyy');
  };
  
  const recentTransactions = [
    { id: 1, name: 'Grocery Store', amount: -125.75, date: 'Today', type: 'shopping' },
    { id: 2, name: 'Salary Deposit', amount: 3200.00, date: 'Yesterday', type: 'income' },
    { id: 3, name: 'Electric Bill', amount: -85.30, date: 'Jul 8', type: 'bill' },
    { id: 4, name: 'Online Transfer', amount: -250.00, date: 'Jul 7', type: 'transfer' },
  ];

  const filteredTransactions = activeTab === 'all'
    ? recentTransactions
    : recentTransactions.filter(tx => tx.type === activeTab);

  return (
    <div className="min-h-screen bg-gray-50"> 
      <div className="p-4 md:p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Welcome, {user?.firstName || 'User'}</h1>
            <p className="text-gray-500">{currentTime.toLocaleTimeString()}</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-100">
              <FaBell className="text-gray-600" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                {user?.firstName ? (
                  <span className="text-blue-600 font-medium text-lg">
                    {user.firstName.charAt(0).toUpperCase()}
                  </span>
                ) : (
                  <FaUser className="text-blue-600" />
                )}
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-800">
                  {user?.firstName || ''} {user?.lastName || ''}
                </p>
                <p className="text-xs text-gray-500">{user?.accountNumber || 'Account Number'}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Header with Search and User Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-500">{currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search transactions, pay bills..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <button className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50">
              <FaBell className="text-lg" />
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <button className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="bg-red-50 p-3 rounded-full mb-2">
              <FaMoneyBillWave className="text-red-500 text-xl" />
            </div>
            <span className="text-sm font-medium">Send Money</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="bg-blue-50 p-3 rounded-full mb-2">
              <BiTransferAlt className="text-blue-500 text-xl" />
            </div>
            <span className="text-sm font-medium">Transfer</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="bg-green-50 p-3 rounded-full mb-2">
              <MdOutlineSavings className="text-green-500 text-xl" />
            </div>
            <span className="text-sm font-medium">Savings</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="bg-purple-50 p-3 rounded-full mb-2">
              <BsCreditCard2Front className="text-purple-500 text-xl" />
            </div>
            <span className="text-sm font-medium">Cards</span>
          </button>
        </div>

        {/* Account Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Main Balance Card */}
          <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-red-100">Total Balance</p>
                <h2 className="text-2xl font-bold">{formatCurrency(30250.75)}</h2>
              </div>
              <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                <FaChartPie className="text-xl" />
              </div>
            </div>
            <div className="flex justify-between text-sm text-red-100">
              <div>
                <p>Income</p>
                <p className="font-medium">+{formatCurrency(3200.00)}</p>
              </div>
              <div>
                <p>Expenses</p>
                <p className="font-medium">-{formatCurrency(461.05)}</p>
              </div>
              <div>
                <p>Savings</p>
                <p className="font-medium">{formatCurrency(12500.00)}</p>
              </div>
            </div>
          </div>

          {/* Quick Transfer */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800">Quick Transfer</h3>
              <button className="text-sm text-red-600 flex items-center">
                View All <FaChevronDown className="ml-1 text-xs" />
              </button>
            </div>
            <div className="flex -space-x-2 mb-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 border-2 border-white">
                  {String.fromCharCode(64 + item)}
                </div>
              ))}
              <button className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center border-2 border-white">
                +
              </button>
            </div>
            <button className="w-full bg-red-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
              Send Money
            </button>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {recentTransactions.slice(0, 3).map((tx) => (
                <div key={tx.id} className="flex items-center">
                  <div className={`p-2 rounded-lg mr-3 ${
                    tx.amount > 0 ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                  }`}>
                    {tx.amount > 0 ? <FaMoneyBillWave /> : <FaExchangeAlt />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{tx.name}</p>
                    <p className="text-xs text-gray-500">{tx.date}</p>
                  </div>
                  <span className={`text-sm font-medium ${
                    tx.amount > 0 ? 'text-green-600' : 'text-gray-800'
                  }`}>
                    {tx.amount > 0 ? '+' : ''}{formatCurrency(tx.amount)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Account Summary */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Account Summary</h2>
            <div className="text-sm text-gray-500">
              Member since {user?.createdAt ? formatDate(user.createdAt) : 'N/A'}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">Account Balance</span>
                <FaMoneyBillWave className="text-blue-500" />
              </div>
              <p className="text-2xl font-bold">{formatCurrency(user?.balance || 0)}</p>
              <p className="text-xs text-gray-500">Available balance</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">Account Number</span>
                <BsCreditCard2Front className="text-green-500" />
              </div>
              <p className="text-2xl font-mono font-bold">{user?.accountNumber || 'N/A'}</p>
              <p className="text-xs text-gray-500">Primary account</p>
            </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentTransactions.slice(0, 3).map((tx) => (
              <div key={tx.id} className="flex items-center">
                <div className={`p-2 rounded-lg mr-3 ${
                  tx.amount > 0 ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                }`}>
                  {tx.amount > 0 ? <FaMoneyBillWave /> : <FaExchangeAlt />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{tx.name}</p>
                  <p className="text-xs text-gray-500">{tx.date}</p>
                </div>
                <span className={`text-sm font-medium ${
                  tx.amount > 0 ? 'text-green-600' : 'text-gray-800'
                }`}>
                  {tx.amount > 0 ? '+' : ''}{formatCurrency(tx.amount)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transactions Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 sm:mb-0">Recent Transactions</h3>
          <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
            {['all', 'income', 'shopping', 'bill', 'transfer'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                  activeTab === tab 
                    ? 'bg-white text-red-600 shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTransactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-lg mr-3 ${
                        tx.amount > 0 
                          ? 'bg-green-50 text-green-600' 
                          : 'bg-red-50 text-red-600'
                      }`}>
                        {tx.amount > 0 ? <FaMoneyBillWave /> : <FaExchangeAlt />}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{tx.name}</div>
                        <div className="text-xs text-gray-500">{tx.type}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {tx.date}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                    <span className={`${tx.amount > 0 ? 'text-green-600' : 'text-gray-900'}`}>
                      {tx.amount > 0 ? '+' : ''}{formatCurrency(tx.amount)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { title: 'Total Income', value: 12500, change: '+12%', trend: 'up', icon: <BsGraphUp /> },
          { title: 'Total Expense', value: 8450, change: '-5%', trend: 'down', icon: <FaExchangeAlt /> },
          { title: 'Savings', value: 8500, change: '+8%', trend: 'up', icon: <FaPiggyBank /> },
          { title: 'Credit Score', value: 785, change: '+15', trend: 'up', icon: <FaCreditCard /> },
        ].map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-xl font-bold text-gray-800">
                  {typeof stat.value === 'number' && stat.title !== 'Credit Score' 
                    ? formatCurrency(stat.value) 
                    : stat.value}
                </p>
              </div>
              <div className={`p-2 rounded-lg ${
                stat.trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
              }`}>
                {stat.icon}
              </div>
            </div>
            <div className={`mt-2 text-sm ${
              stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change} from last month
            </div>
          </div>
        ))}
      </div>

      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-6 text-white mb-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-md">
            <h3 className="text-xl font-bold mb-2">Get 5% Cashback</h3>
            <p className="text-blue-100 mb-4 md:mb-0">
              Apply for our premium credit card and enjoy 5% cashback on all your purchases for the first 3 months.
            </p>
          </div>
          <button className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-blue-50 transition-colors">
            Apply Now
          </button>
        </div>
      </div>
  
            </div>
    </div>
  );
};

export default HomePage;
