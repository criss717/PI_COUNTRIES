import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cleanDetail, getDetail } from '../../Redux/actions/actions';
import { useParams } from 'react-router-dom';
import s from '../Detail/Detail.module.css'


const Detail = () => {
    //hooks
    const countryDetail = useSelector((state)=>state.countryDetail) //variable global
    const dispatch= useDispatch() // para accionar el getdetail, y el cleanDetail
    const {id:idDetail}=useParams() // traemos el id q nos viene por params en la URL
    
    useEffect(()=>{
        dispatch(getDetail(idDetail)) //will did montain
        return ()=>{
            dispatch(cleanDetail()) // will unmount
        }        
    },[idDetail])

    return ( 
        <div className={s.container}>
            <div className={s.target}>
                <h2>{countryDetail.id}</h2>
                <h1>{countryDetail.name}</h1>
                <img src={countryDetail.imageFlag} alt=''></img>                
                <h2>Continents: {countryDetail.continents}</h2>
                <h3>Capital: {countryDetail.capital}</h3>
                { countryDetail.subRegion && <h3>SubRegion: {countryDetail.subRegion}</h3>}
                { countryDetail.area && <h3>Area: {countryDetail.area} M2</h3>}
                <h3>Population: {countryDetail.population} personas</h3>                
            </div>
            
        </div>
    );
}
 
export default Detail;