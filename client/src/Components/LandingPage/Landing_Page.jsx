import React from "react";
import {useNavigate} from'react-router-dom'
import s from "./LandingPage.module.css"


const LandingPage = () => {
    //hooks    
    const navigate=useNavigate()   
     
    //Handlers    
    const onClick = ()=> {               
        navigate('/home')        
    }    
    return (<div className={s.container}>        
        <button onClick={onClick} className={s.button}>HOME</button>
    </div> );
}
 
export default LandingPage;