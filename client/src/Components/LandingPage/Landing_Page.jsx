import React, { useEffect } from "react";
import {useNavigate} from'react-router-dom'
import s from "./LandingPage.module.css"
import {getAll} from '../../Redux/actions/actions'
import { useDispatch } from 'react-redux'

const LandingPage = () => {
    //hooks    
    const navigate=useNavigate()    
    const dispatch = useDispatch() // para ejecutar la acción mostar países,
    
    useEffect(()=>{        
        dispatch(getAll())
    },[])    
    //Handlers    
    const onClick = ()=> {               
        navigate('/home')        
    }    
    return (<div className={s.container}>        
        <button onClick={onClick} className={s.button}>HOME</button>
    </div> );
}
 
export default LandingPage;