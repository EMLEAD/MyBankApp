import React from 'react'
import NavBar from './Components/NavBar'
import './index.css' 
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import HomePage from './Components/HomePage'
import ForgotPassword from './Components/ForgotPassword'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import OTPModal from './Components/OTPModal'


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
    <Route element={<ForgotPassword/>} path='/ForgotPassword'/>
  

 </Routes>
 </BrowserRouter>
    </div>
    </>
  )
}

export default App
