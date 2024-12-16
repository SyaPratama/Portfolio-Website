import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import MainLayout from './layouts/MainLayout'
import AboutLayout from './layouts/AboutLayout'
import PortfolioLayout from './layouts/PortfolioLayout'
import { useState } from 'react'

const App = () => {
  const [navbar,setNavbar]= useState(null);
  
  const handleNavbar = (val) =>{
    setNavbar(val);
  }
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route element={<Home handle={handleNavbar} nav={navbar}/>}>
            <Route path='/' element={<MainLayout/>}/>
            <Route path='About' element={<AboutLayout/>}/>
            <Route path='Portfolio' element={<PortfolioLayout/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
