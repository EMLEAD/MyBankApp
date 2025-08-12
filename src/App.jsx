import React from 'react'
import NavBar from './Components/NavBar'
import './index.css' 
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import HomePage from './Components/HomePage'
import ForgotPassword from './Components/ForgotPassword'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Footer from './Components/Footer'
import About from './Components/About'
import Contact from './Components/Contact'
import EasyLoan from './Components/EasyLoan'
import SendMoney from './Components/SendMoney'



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
   <div >
    <Toaster />
    <BrowserRouter>
    <NavBar/>
  <Routes>
    <Route element={<HomePage/>} path='/'/>
    <Route element={<SignUp/>} path='/SignUp'/>
    <Route element={<Login/>} path='/Login'/>
    <Route element={<About/>} path='/About'/>
    <Route element={<Contact/>} path='/Contact'/>
    <Route element={<ForgotPassword/>} path='/ForgotPassword'/>
    <Route element={<EasyLoan/>} path='/easy-loan'/>

 </Routes>
 <Footer/>
 </BrowserRouter>
    </div>
    </>
  )
}

export default App
