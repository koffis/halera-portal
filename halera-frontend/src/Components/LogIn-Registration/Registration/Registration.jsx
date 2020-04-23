import React from "react";
import "./Registration.scss"
import {NavLink} from "react-router-dom";

const Registration = (props) => {
    return (
        <div className="regbackgr rare-wind-gradient">
            <div className="registerPlace container">
                <div className="card revealator-fade revealator-delay1 revealator-once">

                    <h5 className="card-header aqua-gradient white-text text-center py-4">
                        <strong>Sign up</strong>
                    </h5>

                    <div className="card-body px-lg-5 pt-0">

                        <form className="text-center" action="#!">
                            <div className="md-form">
                                <input type="email" placeholder="Username" className="form-control"/>
                            </div>
                            <div className="md-form">
                                <input type="email" placeholder="E-mail" className="form-control"/>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="md-form">
                                        <input type="password" placeholder="Password" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="md-form">
                                        <input type="password" placeholder="Confirm Password" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="md-form">
                                <input placeholder="Full name" className="form-control"/>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="md-form">
                                        <input placeholder="Country" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="md-form">
                                        <input placeholder="City" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-around">
                                <div>
                                    <NavLink to={'/login'}>Have account?</NavLink>
                                </div>
                            </div>

                            <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect"
                                    type="submit">Sign up
                            </button>


                        </form>


                    </div>

                </div>
                <div className="wave"></div>
            </div>
        </div>
    )
};

export default Registration;