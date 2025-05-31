import React from 'react'
import NavBar from './Components/NavBar'
import './index.css' 
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import HomePage from './Components/HomePage'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {


  return (
    <>
   <div >
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route element={<HomePage/>} path='/'/>
    <Route element={<SignUp/>} path='/SignUp'/>
    <Route element={<Login/>} path='/Login'/>
 
 </Routes>
 </BrowserRouter>
    </div>
    </>
  )
}

export default App
