import React, { useState,useEffect } from "react";
import Card from '../Card/Card'
import s from './Cards.module.css'
import {useSelector,useDispatch } from 'react-redux'
import { filterActivities, filterCountries, getActivities, getAll, orderCountries } from "../../Redux/actions/actions";

const Cards = () => {
    //Hooks
    const allCountries = useSelector(state=>state.allCountries) // accedemos a la variable global de todos los paises
    const allActivities = useSelector(state=>state.activities)   
    const dispatch = useDispatch() // para ejecutar las acciones getAll, filter y order,    
    useEffect(()=>{ 
        if (allActivities.length === 0) dispatch(getActivities());          
        dispatch(getAll())        
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
    const handlerSelect=(e)=>{
        const attribute = e.target.name;
        const value = e.target.value 
        if(attribute === 'continents') dispatch(filterCountries(attribute,value))
        if(attribute === 'Activities') dispatch(filterActivities(value))
        if(attribute === 'order' || attribute === 'orderByPopulation') dispatch(orderCountries(value))
    }   

    return ( 
        <div className={s.container}>
            <div className={s.filtersOrders}>
                <div className={s.filters}>
                    <label htmlFor="continents">Filter by Continents</label>
                    <select name='continents' onChange={handlerSelect}>
                        <option value=''>All</option>
                        <option value='Africa'>Africa</option>
                        <option value='Asia'>Asia</option>
                        <option value='Antarctica'>Antartica</option>
                        <option value='Europe'>Europe</option>
                        <option value='Oceania'>Oceania</option>                    
                        <option value='North America'>North America</option>
                        <option value='South America'>South America</option>
                    </select>
                    <label htmlFor="Activities">Filter by Activity</label>
                    <select name='Activities' onChange={handlerSelect}>
                        <option value=''>All</option>
                        {
                            allActivities.length > 0 ? allActivities.map((elem) => (
                                <option key={elem.id} value={elem.name}>
                                    {elem.name}
                                </option>
                            )) : (
                                <option value='' disabled>
                                    No hay actividades disponibles
                                </option>
                            )
                        }                        
                    </select>                
                </div>
                <div className={s.order}>
                    <label htmlFor="order">Order A-Z</label>
                    <select name='order' onChange={handlerSelect}>
                        <option value=''>Select Order</option>
                        <option value='A-Z'>A-Z</option>
                        <option value='Z-A'>Z-A</option>                    
                    </select>
                    <label htmlFor="orderByPopulation">Order by Poulation</label>
                    <select name='orderByPopulation' onChange={handlerSelect}>
                        <option value=''>Select Order</option>
                        <option value='largestPopulationFirst'>largest Population First</option>
                        <option value='SmallestPopulationFirst'>Smallest Population First</option>                    
                    </select>
                </div>

                </div>
            <div className={s.cards}>
                {   
                    countries.length>0 ? (countries.map((country) => // mapeamos el arreglo con slice
                        <Card name={country.name} // a cada tarjeta le  enviamos por props los datos del arreglo data
                        continents={country.continents} 
                        imageFlag={country.imageFlag} 
                        id={country.id}
                        key={country.id}          
                    />)) : <div className={s.loading}></div>
                }                
                <div className={s.buttons}>
                    <button onClick={handlerBack} disabled={currentPage.initialIndex === 0}>Back</button>
                    <button onClick={handlerNext} disabled={currentPage.finalIndex >= allCountries.length}>Next</button>
                </div>
            </div>
        </div>
     );
}

export default Cards;