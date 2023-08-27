import React from 'react'
import SearchBar from '../SearchBar/SearchBar' 
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div>
            <SearchBar/>
            <Link to='/form'>
                <div>Añadir actividad</div>
            </Link>
        </div>
    );
}
 
export default NavBar;