import React from 'react'
import SearchBar from '../SearchBar/SearchBar' 
import { Link } from 'react-router-dom';
import s from '../NavBar/NavBar.module.css'
const NavBar = () => {
    return (
        <div className={s.containerNav}>
            <SearchBar/>
            <Link to='/createActivities'>
                <div className={s.div}>Create Activities</div>
            </Link>
            <Link to='/activities'>
                <div className={s.div}>View Activities</div>
            </Link>
        </div>
    );
}
 
export default NavBar;