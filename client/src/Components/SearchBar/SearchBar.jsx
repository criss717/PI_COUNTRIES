import React, { useState } from 'react'
import { connect } from 'react-redux';
import { getCountry } from '../../Redux/actions/actions';

const SearchBar = (props) => {
    
    //Handlers
    const handleChange=(e)=>{              
        props.getCountry(e.target.value)
        if(!e.target.value) props.getCountry("") // cuando vaciamos el input
    }    

    return ( 
        <div>
            <input type='text'
                placeholder='Flter By Name'
                onChange={handleChange}
            />           
        </div>
    );
}

function mapDispatchToProps(dispatch) { // action getCountry
    return {
        getCountry:(name)=>{
            dispatch(getCountry(name))
        }
    }
}
 
export default connect(null,mapDispatchToProps)(SearchBar);