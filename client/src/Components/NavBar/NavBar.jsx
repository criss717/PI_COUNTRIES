import React from 'react'
import SearchBar from '../SearchBar/SearchBar' 
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div>
            <SearchBar/>
            <Link to='/createActivities'>
                <div>Create Activities</div>
            </Link>
            <Link to='/activities'>
                <div>View Activities</div>
            </Link>
        </div>
    );
}
 
export default NavBar;