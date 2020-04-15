import React from 'react';
import {NavLink} from "react-router-dom";
import logo from './Images/logo.svg'
import s from './Navbar.module.css'

const Navbar = (props) => {
    return (
        <div className={s.navbarPlace}>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to='/'><img alt='logo' src={logo}/></NavLink>
            </div >
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to='/profile'>Profile</NavLink>
            </div >
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to='/team'>Team</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to='/search'>Search</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to='/logIn'>Log in</NavLink>
            </div>
        </div>
    )
};

export default Navbar;