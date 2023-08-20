import React from "react";
import Card from '../Card/Card'
import s from './Cards.module.css'

const Cards = ({data}) => {
    console.log(data);
    return ( 
        <div className={s.container}>
        {   
            data && data.map((country) => // mapeamos el arreglo de paises q nos llega por props
                <Card name={country.name} // a cada tarjeta le damos las propsenviamos por props los datos del arreglo data
                continents={country.continents} 
                imageFlag={country.imageFlag} 
                key={country.cca3}          
            />)
        }
        </div>
     );
}
 
export default Cards;