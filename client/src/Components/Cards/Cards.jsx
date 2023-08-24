import React, { useState } from "react";
import Card from '../Card/Card'
import s from './Cards.module.css'
import {useSelector } from 'react-redux'

const Cards = () => {
    //Hooks
    const data = useSelector(state=>state.allCountries) // accedemos a la variable global
  
    //Funcionalidades
    const cardsForPage=10 // para renderizar solo 10 tarjetas de paises por pag.
    const [currentPage,setCurrentPage]=useState({
        initialIndex:0,
        finalIndex:cardsForPage
    })
    const currentCards=data.slice(currentPage.initialIndex,currentPage.finalIndex) // tendremos un slice del array original q llega por props
    
    const countries = data.length>10 ?  // por si la info nos llega con menos de diez paises
        currentCards :
        data
    
    //Handlers
    const handlerBack =()=>{
        setCurrentPage({
            initialIndex:currentPage.initialIndex - 1,
            finalIndex:currentPage.finalIndex - 1
        })
    }
    const handlerNext =()=>{
        setCurrentPage({
            initialIndex:currentPage.initialIndex + 1,
            finalIndex:currentPage.finalIndex + 1
        })
    }

    return ( 
        <div className={s.container}>
            <div className={s.cards}>
                {   
                    countries && countries.map((country) => // mapeamos el arreglo con slice
                        <Card name={country.name} // a cada tarjeta le damos las propsenviamos por props los datos del arreglo data
                        continents={country.continents} 
                        imageFlag={country.imageFlag} 
                        id={country.id}
                        key={country.id}          
                    />)
                }                
            </div>
            <div className={s.buttons}>
                <button onClick={handlerBack} disabled={currentPage.initialIndex === 0}>Back</button>
                <button onClick={handlerNext} disabled={currentPage.finalIndex >= data.length}>Next</button>
            </div>
        </div>
     );
}

export default Cards;