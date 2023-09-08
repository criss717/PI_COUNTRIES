import { GET_COUNTRY, GET_ALL_COUNTRIES,GET_DETAIL,CLEAN_DETAIL,FILTER_COUNTRIES,FILTER_ACTIVITIES,ORDER, POST_ACTIVITY, GET_ACTIVITIES } from "./types"
import axios from "axios"

export const getAll= ()=>{
    try {
        return async(dispatch) => {
            const {data} = await axios("http://localhost:3001/countries")
            return dispatch({
                type:GET_ALL_COUNTRIES,
                payload:data,
            })
        }        
    } catch (error) {
        alert(error.message)
    }
}

export const getCountry = (name) =>{
    try {
        return async(dispatch) => {
            const {data} = await axios(`http://localhost:3001/countries?name=${name}`)
            return dispatch({
                type:GET_COUNTRY,
                payload:data
            })
        }        
    } catch (error) {
        alert(error.message)
    }
}

export const getDetail = (id) =>{
    try {
        return async(dispatch) => {            
            const {data} = await axios(`http://localhost:3001/countries/${id}`)            
            return dispatch({
                type:GET_DETAIL,
                payload:data
            })
        }        
    } catch (error) {
        alert(error.message)
    }
}

export const cleanDetail = ()=>{
    return {
        type:CLEAN_DETAIL,        
    }
}

export const postActivity =(activity)=>{
    try {
        return async (dispatch) =>{
             const {data} = await axios.post('http://localhost:3001/activities',activity )            
             return dispatch({
                type:POST_ACTIVITY,  
                payload:data              
             })
        }
    } catch (error) {
        alert(error.message)
    }
}

export const getActivities = ()=>{
    try {
        return async (dispatch) =>{
             const {data}= await axios('http://localhost:3001/activities')             
             return dispatch({
                type:GET_ACTIVITIES, 
                payload:data           
             })
        }
    } catch (error) {
        console.log(error);       
    }
}

export const filterCountries=(attribute,value)=>{   
    return ({
        type:FILTER_COUNTRIES,
        payload:{attribute,value}        
    })    
}

export const filterActivities=(value)=>{   
    return ({
        type:FILTER_ACTIVITIES,
        payload:value       
    })    
}

export const orderCountries=(typeOrder)=>{   
    return ({
        type:ORDER,
        payload:typeOrder       
    })    
}

