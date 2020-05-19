import "./Preloader.scss"
import React from "react";

const Preloader = (props) =>{
    return(<div id="cube-loader">
            <div className="caption">
                <div className="cube-loader">
                    <div className="cube loader-1"/>
                    <div className="cube loader-2"/>
                    <div className="cube loader-4"/>
                    <div className="cube loader-3"/>
                </div>
            </div>
        </div>


    )
};

export default Preloader;