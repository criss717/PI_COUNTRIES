import { GET_COUNTRY, GET_ALL_COUNTRIES,GET_DETAIL,CLEAN_DETAIL,FILTER,ORDER } from "./types"
import axios from "axios"

export const getAll= ()=>{
    return async(dispatch) => {
        const {data} = await axios("http://localhost:3001/countries")
        return dispatch({
            type:GET_ALL_COUNTRIES,
            payload:data,
        })
    }
}

export const getCountry = (name) =>{
    return ({
        type:GET_COUNTRY,
        payload:name,
    })
    return async(dispatch) => {
        //const {data} = await axios(`http://localhost:3001/countries?name=${name}`)
    }
}