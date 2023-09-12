import './App.css'
import React, { useEffect, useState } from 'react'
import { Route,Routes, useLocation} from 'react-router-dom'
import LandingPage from './Components/LandingPage/Landing_Page'
import Cards from './Components/Cards/Cards'
import Detail from './Components/Detail/Detail'
import Form from './Components/Form/Form'
import NavBar from './Components/NavBar/NavBar'
import Activities from './Components/Activities/Activities'

function App() {  
  //hooks
  const location=useLocation();
  
  return (
    <> 
      {
        location.pathname!==('/') && <NavBar/>
      }        
      <Routes>
        <Route path='/' element={<LandingPage/>}/>        
        <Route path='/home' element={<Cards/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>        
        <Route path='/createActivities' element={<Form/>}/>
        <Route path='/activities' element={<Activities/>}/>
      </Routes>
    </>
  )
}

export default App
