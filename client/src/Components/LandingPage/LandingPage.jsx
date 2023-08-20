import React from "react";
import {useNavigate} from'react-router-dom'
import s from "./LandingPage.module.css"

const LandingPage = ({getData}) => {
    //hooks
    const navigate= useNavigate(); 
    const onClick = (e)=> {
        e.preventDefault();
        getData()
        navigate('/home')
    }    
    return (<div className={s.container}>        
        <button onClick={onClick} className={s.button}>HOME</button>
    </div> );
}
 
export default LandingPage;