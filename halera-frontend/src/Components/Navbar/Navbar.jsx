import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../../common/Images/logo.svg'
import './Navbar.scss'
import $ from 'jquery'


const Navbar = (props) => {

    return (
        <nav className="mb-1 navbar navbar-expand-md navbar-dark text-black-50">
            <div className="container">
                <div className="logo">
                    <NavLink to='/'><img alt={'logo'} src={logo}/></NavLink>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbar" aria-controls="navbar"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <i data-toggle="modal" className="fas fa-bars nav_icon"/>
                </button>
                <div className="collapse navbar-collapse white_bg" id="navbar">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            {
                                props.isAuth
                                    ? <NavLink activeClassName="activeLink" to='/user'>{props.username}</NavLink>
                                    : <NavLink activeClassName="activeLink" to='/user'>Profile</NavLink>
                            }

                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="activeLink" to='/team'>Team</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="activeLink" to='/search'>Search</NavLink>
                        </li>
                    </ul>
                </div>
                {
                    props.isAuth
                        ? <div>
                            <a type="button" data-toggle="modal"
                               data-target="#SignOut"><i className="fa fa-sign-out sign_out" aria-hidden="true"/>
                            </a>


                            <div className="modal fade" id="SignOut" tabIndex="-1" role="dialog"
                                 aria-labelledby="SignOut"
                                 aria-hidden="true">



                                <div class="modal-dialog modal-dialog-centered" role="document">


                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="SignOut">Log Out</h5>
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
                        : <div className="nav-item"><NavLink to={'/login'}>Login</NavLink></div>
                }





            </div>
        </nav>
    )
};

$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.navbar').addClass('affix');
        $('.logo').addClass('logo_change');

    } else {
        $('.navbar').removeClass('affix');
        $('.logo').removeClass('logo_change');
    }
});
$(window).bind('click tap', function () {
    $('.navbar-collapse').collapse('hide');
});
export default Navbar;
