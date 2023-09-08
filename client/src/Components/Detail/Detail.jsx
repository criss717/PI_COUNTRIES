import React, { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cleanDetail, getDetail } from '../../Redux/actions/actions';
import { Link, useNavigate, useParams } from 'react-router-dom';
import s from '../Detail/Detail.module.css'
import Maps from '../Maps/Maps';

const Detail = () => {
    //hooks
    const countryDetail = useSelector((state)=>state.countryDetail) //variable global
    const dispatch= useDispatch() // para accionar el getdetail, y el cleanDetail
    const {id:idDetail}=useParams() // traemos el id q nos viene por params en la URL
    const navigate= useNavigate();
    
    const latitude=Number(countryDetail.latitude) // latitud para mostar el mapa
    const longitude=Number(countryDetail.longitude) // longitud para mostar el mapa
         
    useEffect(()=>{
        dispatch(getDetail(idDetail)) //will did montain
        return ()=>{
            dispatch(cleanDetail()) // will unmount
        }        
    },[idDetail])

    const handlerclick = ()=>{       
        navigate(`/activities?id=${idDetail}`)        
    }
    return ( 
        <div className={s.container}>
            <Link to='/home'>
                <button>Atras</button>
            </Link>
            <div className={s.target}>
                <h2>{countryDetail.id}</h2>
                <h1>{countryDetail.name}</h1>
                <img src={countryDetail.imageFlag} alt=''></img>                
                <h2>Continents: {countryDetail.continents}</h2>
                <h3>Capital: {countryDetail.capital}</h3>
                { countryDetail.subRegion &&  <h3>SubRegion: {countryDetail.subRegion}</h3>}
                { countryDetail.area && <h3>Area: {countryDetail.area} M2</h3>}
                <h3>Population: {countryDetail.population} personas</h3>                
            </div>
            <div>
                { //si existen actividades para ese país
                    countryDetail.Activities &&
                    countryDetail.Activities.length>0 ? (
                        <>
                            <h2>Activities:</h2>
                            <h3>{countryDetail.Activities[0].name}</h3>
                            <h3>Season: {countryDetail.Activities[0].season}</h3>
                            <h3>Duration: {countryDetail.Activities[0].duration}</h3>                      
                        </>
                    ):( // si no existen actividades
                        <>
                            <h2>There are not tourist activities:</h2>                            
                            <button onClick={()=>handlerclick()}>Create Activity</button>                    
                        </>
                    )
                }                
            </div>  
            <div>
                {
                    latitude && longitude && <Maps lat={latitude} lon={longitude} area={countryDetail.area}/> 
                }             
                <a href={countryDetail.maps}>See the larger map</a>  
                             
            </div>       
        </div>
    );
}
 
export default Detail;