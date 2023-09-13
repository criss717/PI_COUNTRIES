import React, { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cleanDetail, getDetail } from '../../Redux/actions/actions';
import { useNavigate, useParams } from 'react-router-dom';
import s from '../Detail/Detail.module.css'
import Maps from '../Maps/Maps';
import CardActivity from '../CardActivity/CardActivity';

const Detail = () => {
    //hooks
    const countryDetail = useSelector((state)=>state.countryDetail) //variable global
    const dispatch= useDispatch() // para accionar el getdetail, y el cleanDetail
    const {id:idDetail}=useParams() // traemos el id q nos viene por params en la URL
    const navigate= useNavigate();
    
    const latitude=Number(countryDetail.latitude) // latitud para mostar el mapa
    const longitude=Number(countryDetail.longitude) // longitud para mostar el mapa
    const escudoImage=countryDetail.coatOfArms //imagen escudo
        
    useEffect(()=>{
        dispatch(getDetail(idDetail)) //will did montain
        return ()=>{
            dispatch(cleanDetail()) // will unmount
        }        
    },[idDetail])

    const handlerclick = ()=>{       
        navigate(`/createActivities?id=${idDetail}`)        
    }
    return ( 
        <div className={s.containerDetail} style={{ backgroundImage: `url(${escudoImage})` }}>   
            <div className={s.divSup}>
                <div className={s.target}>                   
                    <h2 className={s.titles}>{countryDetail.id}</h2>
                    <h1 className={s.h1}>{countryDetail.name}</h1>
                    <img className={s.img} src={countryDetail.imageFlag} alt=''></img>                
                    <h2 className={s.titles}>Continents: {countryDetail.continents}</h2>
                    <h3 className={s.titles}>Capital: {countryDetail.capital}</h3>
                    { countryDetail.subRegion &&  <h3 className={s.titles}>SubRegion: {countryDetail.subRegion}</h3>}
                    { countryDetail.area && <h3 className={s.titles}>Area: {countryDetail.area} M2</h3>}
                    <h3 className={s.titles}>Population: {countryDetail.population} personas</h3>                
                </div>
                <div className={s.targetActivities}>
                    <h1 className={s.h1}> Tourist Activities:</h1>
                    <div className={s.divTargets}>
                        { //si existen actividades para ese país
                            countryDetail.Activities &&
                            countryDetail.Activities.length>0 ? (                            
                                countryDetail.Activities.map((elem)=><CardActivity
                                    key={elem.id}
                                    name={elem.name}
                                    season={elem.season}                            
                                    Countries={[]}
                                />)                      
                            
                            ):( // si no existen actividades
                                <>
                                    <h2>There are not tourist activities:</h2>                            
                                </>
                            )
                        }                
                    </div>  
                    <button onClick={()=>handlerclick()}>Create Activity</button>                    

                </div>
            </div>         
            {/* <div className={s.map}> 
                {
                    latitude && longitude && <Maps lat={latitude} lon={longitude} area={countryDetail.area}/> 
                }             
                <a href={countryDetail.maps}>See the larger map</a>  
                             
            </div>        */}
        </div>
    );
}
export default Detail;