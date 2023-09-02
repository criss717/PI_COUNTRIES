import './App.css'
import React, { useEffect, useState } from 'react'
import { Route,Routes, useLocation} from 'react-router-dom'
import LandingPage from './Components/LandingPage/Landing_Page'
import Cards from './Components/Cards/Cards'
import Detail from './Components/Detail/Detail'
import Form from './Components/Form/Form'
import NavBar from './Components/NavBar/NavBar'

function App() {  
  //hooks
  const location=useLocation();
  
  return (
    <> 
      {
        location.pathname.includes('/home') && <NavBar/>
      }        
      <Routes>
        <Route path='/' element={<LandingPage/>}/>        
        <Route path='/home' element={<Cards/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>        
        <Route path='/activities' element={<Form/>}/>
      </Routes>
    </>
  )
}

export default App
