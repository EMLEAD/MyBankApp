import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from './store/authSlice';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import ProtectedRoute from './Components/ProtectedRoute';
import './index.css';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import HomePage from './Components/HomePage';
import ForgotPassword from './Components/ForgotPassword';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import EasyLoan from './Components/EasyLoan';



// Component to handle protected routes and sidebar logic
const AppContent = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { token, user, isLoading } = useSelector((state) => state.auth);
  const isDashboardRoute = ['/', '/easy-loan'].includes(location.pathname);

  // Fetch user profile when token exists
  useEffect(() => {
    if (token && !user) {
      dispatch(getUserProfile());
    }
  }, [token, user, dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex flex-1">
        {isDashboardRoute && token && <SideBar />}
        <main className="flex-1 overflow-auto bg-gray-50">
          <Routes>
            {/* Public routes */}
            <Route element={<SignUp />} path='/signup' />
            <Route element={<Login />} path='/login' />
            <Route element={<About />} path='/about' />
            <Route element={<Contact />} path='/contact' />
            <Route element={<ForgotPassword />} path='/forgot-password' />
            
            {/* Protected routes */}
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/easy-loan" 
              element={
                <ProtectedRoute>
                  <EasyLoan />
                </ProtectedRoute>
              } 
            />
            
            {/* Redirect any unknown routes to home or login */}
            <Route 
              path="*" 
              element={
                token ? <Navigate to="/" replace /> : <Navigate to="/login" replace />
              } 
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </>
  )
}

export default App
