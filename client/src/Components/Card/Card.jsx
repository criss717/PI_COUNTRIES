import React from 'react'
import s from './Card.module.css'
import { Link } from 'react-router-dom'


const Card = ({imageFlag,name,continents,id}) => {
    return (         
        <div className={s.container}>
            <Link to={`/detail/${id}`}>
                <img src={imageFlag} alt=''></img>
            </Link>
            <div>{name}</div>
            <div>{continents}</div>
        </div>
     );
}
 
export default Card;