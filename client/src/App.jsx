import './App.css'
import React, { useEffect, useState } from 'react'
import { Route,Routes} from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import Cards from './Components/Cards/Cards'
import axios from 'axios'

function App() {  
  const [data, setData] = useState([])

  const getData = ()=>{ // para obtener los datos de paises
    axios('http://localhost:3001/countries')
      .then(({data})=>{
        setData(data)
      })
      .catch((err)=>alert(err))
    
  } 

  return (
    <>    
      <Routes>
        <Route path='/' element={<LandingPage  getData={getData}/>}/>
        <Route path='/home' element={<Cards data={data}/>}/>
      </Routes>
    </>
  )
}

export default App
