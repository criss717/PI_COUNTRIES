import './App.css'
import React, { useEffect, useState } from 'react'
import { Route,Routes, useLocation} from 'react-router-dom'
import LandingPage from './Components/LandingPage/Landing_Page'
import Cards from './Components/Cards/Cards'
import SearchBar from './Components/SearchBar/SearchBar'

function App() {  
  //hooks
  const location=useLocation();
  
  return (
    <> 
      {
        location.pathname.includes('/home') && <SearchBar/>
      }        
      <Routes>
        <Route path='/' element={<LandingPage/>}/>        
        <Route path='/home' element={<Cards/>}/>
      </Routes>
    </>
  )
}

export default App
