import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../../common/Images/logo.svg'
import './Navbar.scss'
import $ from 'jquery'

const Navbar = (props) => {
    return (
        <nav className="nav ">
            <div className="container">
                <div className="logo">
                    <NavLink to='/'><img alt={'logo'} src={logo}/></NavLink>
                </div>
                <div id="mainListDiv" className="main_list">
                    <ul className="navlinks">
                        <li><NavLink activeClassName="activeLink" to='/user'>Profile</NavLink></li>
                        <li><NavLink activeClassName="activeLink" to='/team'>Team</NavLink></li>
                        <li><NavLink activeClassName="activeLink" to='/search'>Search</NavLink></li>
                        <li>{
                            props.isAuth
                                ? <div>{props.username} - <button onClick={props.logout}>Log out</button></div>
                                : <NavLink to={'/login'}>Login</NavLink>
                        }</li>
                    </ul>
                </div>
                <span className="navTrigger">
            </span>
            </div>
        </nav>
    )
};

$(window).scroll(function() {
    if ($(document).scrollTop() > 40) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});
export default Navbar;
