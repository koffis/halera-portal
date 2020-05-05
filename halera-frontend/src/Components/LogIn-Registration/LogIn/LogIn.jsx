import React from "react";
import './LogIn.scss'
import {NavLink} from "react-router-dom";

const LogIn = (props) => {
    return (
        <div className="loignbackgr rare-wind-gradient">
            <div className="loginPlace container">
                <div className="card revealator-fade revealator-delay1 revealator-once">

                    <h5 className="card-header aqua-gradient white-text text-center py-4">
                        <strong>Sign in</strong>
                    </h5>

                    <div className="card-body px-lg-5 pt-0">

                        <form className="text-center" action="#!">
                            <div className="md-form">
                                <input type="email" placeholder="E-mail" className="form-control"/>
                            </div>

                            <div className="md-form">
                                <input type="password" id="materialLoginFormPassword" placeholder="Password"
                                       className="form-control"/>
                            </div>

                            <div className="d-flex justify-content-around">
                                <div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input"
                                               id="materialLoginFormRemember"/>
                                        <label className="form-check-label" htmlFor="materialLoginFormRemember">Remember
                                            me</label>
                                    </div>
                                </div>
                                <div>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#">Forgot password?</a>
                                </div>
                            </div>

                            <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect"
                                    type="submit">Sign in
                            </button>

                            <p>Not a member?&nbsp;&nbsp;
                                <NavLink to={'/registration'}>Sign Up</NavLink>
                            </p>


                        </form>


                    </div>

                </div>
            </div>
            <div className="wave">
        </div>
        </div>
    )
};

export default LogIn;