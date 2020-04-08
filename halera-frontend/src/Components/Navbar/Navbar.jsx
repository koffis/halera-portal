import React from 'react';
import {NavLink} from "react-router-dom";
import logo from './Images/logo.svg'
import s from './Navbar.module.css'

const Navbar = (props) => {
    return (
        <div className={s.navbarPlace}>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to='/home'>Home</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to='/profile'>Profile</NavLink>
            </div >
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to='/mainPage'><img alt='logo' src={logo}/></NavLink>
            </div >
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to='/test'>Test</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to='/maxEblo'>MaxEblo</NavLink>
            </div>
        </div>
    )
};

export default Navbar;