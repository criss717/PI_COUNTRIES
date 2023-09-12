import React from 'react'
import SearchBar from '../SearchBar/SearchBar' 
import { Link, useLocation } from 'react-router-dom';
import s from '../NavBar/NavBar.module.css'
const NavBar = () => {
    const location= useLocation()
    return (
        <div className={s.containerNav}>
            {
                location.pathname.includes('/home') && <SearchBar/>  // así no mostramos la barra de buscar si no esta en /home
            }
            {
                !location.pathname.includes('/home') && 
                <Link to='/home'>
                    <div className={s.div}>🌎Home</div>
                </Link> 
            }
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