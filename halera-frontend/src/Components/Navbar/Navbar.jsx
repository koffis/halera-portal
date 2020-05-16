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
                        <li>{
                            props.isAuth
                                ? <NavLink activeClassName="activeLink" to='/user'>{props.username}</NavLink>
                                : <NavLink activeClassName="activeLink" to='/user'>Profile</NavLink>
                        }</li>
                        <li><NavLink activeClassName="activeLink" to='/team'>Team</NavLink></li>
                        <li><NavLink activeClassName="activeLink" to='/search'>Search</NavLink></li>
                        <li>{
                            props.isAuth
                                ? <div>
                                    <a type="button" data-toggle="modal"
                                       data-target="#exampleModalCenter">Log Out
                                    </a>


                                    <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
                                         aria-labelledby="exampleModalCenterTitle"
                                         aria-hidden="true">


                                        <div class="modal-dialog modal-dialog-centered" role="document">


                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLongTitle">Log Out</h5>
                                                    <button type="button" className="close" data-dismiss="modal"
                                                            aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    Are you shure? Unsaved data will be
                                                    lost forever;(
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-outline-success btn-rounded btn-follow"
                                                            data-dismiss="modal">Close
                                                    </button>
                                                    <button type="button" onClick={props.logout}
                                                            data-dismiss="modal"  className="btn btn-outline-danger btn-rounded btn-follow">Log out
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
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

$(window).scroll(function () {
    if ($(document).scrollTop() > 40) {
        $('.nav').addClass('affix');
    } else {
        $('.nav').removeClass('affix');
    }
});

export default Navbar;
