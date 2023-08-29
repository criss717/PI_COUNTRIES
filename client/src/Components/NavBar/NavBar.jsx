import React from 'react'
import SearchBar from '../SearchBar/SearchBar' 
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div>
            <SearchBar/>
            <Link to='/activities'>
                <div>Create Activities</div>
            </Link>
        </div>
    );
}
 
export default NavBar;