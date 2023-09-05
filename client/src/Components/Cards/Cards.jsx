import React, { useState,useEffect } from "react";
import Card from '../Card/Card'
import s from './Cards.module.css'
import {useSelector,useDispatch } from 'react-redux'
import { filterActivities, filterCountries, getActivities, getAll } from "../../Redux/actions/actions";

const Cards = () => {
    //Hooks
    const allCountries = useSelector(state=>state.allCountries) // accedemos a la variable global de todos los paises
    const allActivities = useSelector(state=>state.activities)   
    const dispatch = useDispatch() // para ejecutar las acciones fetAll, filter y order,    
    useEffect(()=>{        
        dispatch(getAll())
        dispatch(getActivities())
    },[]) 

    //Funcionalidades
    const cardsForPage=10 // para renderizar solo 10 tarjetas de paises por pag.
    const [currentPage,setCurrentPage]=useState({
        initialIndex:0,
        finalIndex:cardsForPage
    })
    const currentCards=allCountries.slice(currentPage.initialIndex,currentPage.finalIndex) // tendremos un slice del array original q llega por props
    
    const countries = allCountries.length>10 ?  // por si la info nos llega con menos de diez paises
        currentCards :
        allCountries
    
    //Handlers
    const handlerBack =()=>{
        setCurrentPage({ 
            initialIndex:currentPage.initialIndex - 10,
            finalIndex:currentPage.finalIndex - 10
        })
    }
    const handlerNext =()=>{
        setCurrentPage({
            initialIndex:currentPage.initialIndex + 10,
            finalIndex:currentPage.finalIndex + 10
        })
    }
    const handlerSelectContinents =(e)=>{
        const attribute = e.target.name;
        const value = e.target.value        
        if(!value) dispatch(getAll()) // si ponemos all
        else dispatch(filterCountries(attribute,value))
    }
    const handlerSelectActivities =(e)=>{      
        const value = e.target.value        
        if(!value) dispatch(getAll()) // si ponemos all
        else dispatch(filterActivities(value))
    }

    return ( 
        <div className={s.container}>
            <div>
                <label htmlFor="continents">Order by Continents</label>
                <select name='continents' onChange={handlerSelectContinents}>
                    <option value=''>All</option>
                    <option value='Africa'>Africa</option>
                    <option value='Asia'>Asia</option>
                    <option value='Antarctica'>Antartica</option>
                    <option value='Europe'>Europe</option>
                    <option value='Oceania'>Oceania</option>                    
                    <option value='North America'>North America</option>
                    <option value='South America'>South America</option>
                </select>
                <label htmlFor="Activities">Order by Activity</label>
                <select name='Activities' onChange={handlerSelectActivities}>
                    <option value=''>All</option>
                    {
                        allActivities.length >0 &&  allActivities.map((elem) => <option key={elem.id} value={elem.name}>
                        {elem.name}</option>)
                    }                        
                </select>
            </div>
            <div className={s.cards}>
                {   
                    countries.length>0 ? (countries.map((country) => // mapeamos el arreglo con slice
                        <Card name={country.name} // a cada tarjeta le  enviamos por props los datos del arreglo data
                        continents={country.continents} 
                        imageFlag={country.imageFlag} 
                        id={country.id}
                        key={country.id}          
                    />)) : <p>Loading...</p>
                }                
            </div>
            <div className={s.buttons}>
                <button onClick={handlerBack} disabled={currentPage.initialIndex === 0}>Back</button>
                <button onClick={handlerNext} disabled={currentPage.finalIndex >= allCountries.length}>Next</button>
            </div>
        </div>
     );
}

export default Cards;