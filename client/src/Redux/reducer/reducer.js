import { GET_COUNTRY, GET_ALL_COUNTRIES,GET_DETAIL,CLEAN_DETAIL,FILTER,ORDER, POST_ACTIVITY, GET_ACTIVITIES } from "../actions/types";

const initialState = { //variables globales
    allCountries:[],
    copyCountries:[],   //servirá para el filtrado por nombre search bar
    countryDetail:{},
    activities:[]   
}

export const rootReducer = (state=initialState,action)=>{
    switch(action.type) {
        case GET_ALL_COUNTRIES:
            const orderCountries= action.payload.sort((a,b)=>a.name.charCodeAt()- b.name.charCodeAt())      // ordenar por nombre alfabeticamente      
            return {
                ...state,
                allCountries:orderCountries,
                copyCountries:orderCountries
            }
        case GET_COUNTRY: //por nombre            
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
        case FILTER:
            state.allCountries=state.copyCountries;                    
            const {attribute,value}= action.payload // el atributo por el cual vamos a filtrar  
            console.log(attribute,value);          
            const filterCountries=state.allCountries.filter((elem)=>elem[attribute]===value)
            return{
                ...state,
                allCountries:filterCountries
            }
        default: 
            return {
                ...state
            }
    }
}