import React, { useState } from 'react'
import { connect } from 'react-redux';
import { getCountry } from '../../Redux/actions/actions';

const SearchBar = (props) => {
    
    //Handlers
    const handleChange=(e)=>{        
        console.log(e.target.value);
        props.getCountry("")       
        props.getCountry(e.target.value)
        if(!e.target.value) props.getCountry("") 
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