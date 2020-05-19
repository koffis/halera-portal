import React from "react";
import './Test.scss'

const Test = (props) => {
    return (
        <div className="rare-wind-gradient page_bg">
            <div className="container test_container">
                <h4 className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <div className="container">
                    <div className="card">
                        <div className="row p-3">
                            <div className="col-3 text-center">
                                <i className="fab fa-python icon_test"/>
                                <h5>Python</h5>
                                <button type="button"
                                        className="btn btn-outline-success btn-rounded waves-effect">Try Yourself
                                </button>
                            </div>
                            <div className="col-9 text-justify text_test">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                    <p/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
};

export default Test;