import { GET_COUNTRY, GET_ALL_COUNTRIES,GET_DETAIL,CLEAN_DETAIL,FILTER_ACTIVITIES,FILTER_COUNTRIES,ORDER, POST_ACTIVITY, GET_ACTIVITIES } from "../actions/types";

const initialState = { //variables globales
    allCountries:[],   
    copyCountries:[],     
    countryDetail:{},
    activities:[],
}

export const rootReducer = (state=initialState,action)=>{
    switch(action.type) {
        case GET_ALL_COUNTRIES:                   
            return {
                ...state,
                allCountries:action.payload,
                copyCountries:action.payload,                
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
                activities:action.payload,               
            }
        case FILTER_COUNTRIES: 
            const copyCountries=[...state.copyCountries] 
            state.allCountries=copyCountries // reiniciamos el allCountries cada vez q ejecutamos la action           
            const {attribute,value}= action.payload // el atributo por el cual vamos a filtrar                                  
            if(value===''){ //todos
                return {
                    ...state,
                    allCountries:state.copyCountries
                }
            }
            const filterCountries=state.allCountries.filter((elem)=>elem[attribute]===value)            
            if(filterCountries.length>0){
                return{
                    ...state,
                    allCountries:filterCountries
                }
            } else {
                return{
                    ...state,
                    allCountries:{error:'There are no matches'}
                }
            }            
                                            
        case FILTER_ACTIVITIES:              
            if(action.payload==='') { //todos
                return {
                    ...state,
                    allCountries:state.copyCountries
                }
            }
            const filterForActivities=state.activities.find((activity)=>activity.name===action.payload) // accedo a mi estado activities y filtro por nomobre de actividad            
             
            return{
                ...state,
                allCountries:filterForActivities.Countries, // en .Countries se encuentra la info de los paises q tienen dicha actividad, esto viene de la tabla intermedia
                copyCountries:filterForActivities.Countries 
            }
        
        case ORDER:
            const typeOrder=action.payload;
            const orderCountries=[...state.allCountries] // copiamos la referencia al objeto global           
            if(typeOrder==='A-Z') orderCountries.sort((a,b)=>a.name.charCodeAt()- b.name.charCodeAt())      // ordenar por nombre alfabeticamente                                               
            if(typeOrder==='Z-A') orderCountries.sort((a,b)=>b.name.charCodeAt()- a.name.charCodeAt())      // ordenar por nombre alfabeticamente                                  
            if(typeOrder==='largestPopulationFirst') orderCountries.sort((a,b)=>b.population - a.population) //ordenar por población creciente
            if(typeOrder==='SmallestPopulationFirst') orderCountries.sort((a,b)=>a.population - b.population) //ordenar por población decreciente
            return{
                ...state,
                allCountries:orderCountries
            }        
        
        default: 
            return {
                ...state
            }
    }
}