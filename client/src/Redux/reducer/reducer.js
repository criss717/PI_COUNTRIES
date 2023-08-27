import { GET_COUNTRY, GET_ALL_COUNTRIES,GET_DETAIL,CLEAN_DETAIL,FILTER,ORDER, POST_ACTIVITY, GET_ACTIVITIES } from "../actions/types";

const initialState = { //variables globales
    allCountries:[],
    copyCountries:[],   //servira para el filtrado por noombre
    countryDetail:{},
    activities:{}   
}

export const rootReducer = (state=initialState,action)=>{
    switch(action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                allCountries:action.payload,
                copyCountries:action.payload
            }
        case GET_COUNTRY: //por nombre
            // const result=state.allCountries.filter((country)=>country.name.includes(action.payload))
            // console.log(result);
            if(action.payload===''){ // si borra el nombre, volvemos a mostar todos
                return {
                    ...state,
                    allCountries:state.copyCountries
                }
            }
            return {
                ...state,
                allCountries:action.payload,
            }
        case GET_DETAIL:
            return{
                ...state,
                countryDetail:action.payload
            }
        case CLEAN_DETAIL:
            return {
                ...state,
                countryDetail:{}
            }
        case POST_ACTIVITY:
            return{
                ...state,
                //activities:action.payload
            }
        case GET_ACTIVITIES:
            return{
                ...state,
                activities:action.payload
            }
        default: 
            return {
                ...state
            }
    }
}