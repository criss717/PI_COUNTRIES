import React from 'react'
import s from './Card.module.css'


const Card = ({imageFlag,name,continents}) => {
    return ( 
        <div className={s.container}>
            <img src={imageFlag}></img>
            <div>{name}</div>
            <div>{continents}</div>
        </div>
     );
}
 
export default Card;