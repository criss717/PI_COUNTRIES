import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../Redux/actions/actions';
import { useParams } from 'react-router-dom';

const Detail = () => {
    //hooks
    const country = useSelector((state)=>state.countryDetail) //variable global
    const dispatch= useDispatch() // para accionar el getdetail
    const {id:idDetail}=useParams() // traemos el id q nos viene por params en la URL
    
    useEffect(()=>{
        dispatch(getDetail(idDetail)) //will did montain
    },[])
    return ( 
        <div>
            <div>
                <div>{country.id}</div>
                <div>{country.name}</div>
                <img src={country.imageFlag} alt=''></img>                
                <div>{country.continents}</div>
                <div>{country.capitak}</div>
                { country.subRegion && <div>{country.subRegion}</div>}
                { country.area && <div>{country.area} M2</div>}
                <div>{country.population} personas</div>                
            </div>
            
        </div>
    );
}
 
export default Detail;