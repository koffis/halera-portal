import React from 'react';
import './404.scss'
import {NavLink} from "react-router-dom";

const Error = () => {
    return (<div>
            <div className="page_bg heavy-rain-gradient cont_404">
                <div className="container card cont_404_text">
                    <div className="text-center">
                        <h1>404</h1>
                        <h4><p>Page does not exist!</p></h4>
                        <h2><p>Go <NavLink activeClassName="activeLink" to='/'>home</NavLink></p></h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Error;