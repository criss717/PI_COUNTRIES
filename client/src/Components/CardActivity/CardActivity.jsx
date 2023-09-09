import React from 'react'
import s from '../CardActivity/CardActivity.module.css'
const CardActivity = (props) => {
    return (
        <div className={s.cardActivity}>            
            {props.name && <h2 className={s.h2}>{props.name}</h2>}
            {props.duration && <h2 className={s.h2}>{props.duration}</h2>}
            {props.season && <h2 className={s.h2}>{props.season}</h2>}
            {props.difficulty && <h2 className={s.h2}>{props.difficulty}</h2>} 
            {
                props.Countries.length>0 && 
                <ul>
                    {
                        props.Countries.map((country)=><li key={country.id}>{country.name}</li>)
                    }
                </ul>

            }           
        </div>
    );
}
 
export default CardActivity;