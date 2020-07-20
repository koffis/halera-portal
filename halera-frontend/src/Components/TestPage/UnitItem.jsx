import React from "react";
import './Test.scss'
import {Redirect} from "react-router-dom";

function UnitItem(props) {

    if(props.isTech === true) return <Redirect to={'/tests'}/>;

    return (
        <div className="container test_container">
            <div className="container">
                <div className="card">
                    <div className="row p-3">
                        <div className="col-3 text-center">
                            <i className="fab fa-python icon_test"/>
                            <h5>{props.name}</h5>
                        </div>
                        <div className="align_content">
                            <button onClick={() =>{
                                props.get5Tests(props.name, props.items[0])
                            }}>
                                <span>{props.items[0]}</span>
                            </button>
                            <button onClick={() =>{
                                props.get5Tests(props.name, props.items[1])
                            }}>
                                <span>{props.items[1]}</span>
                            </button>
                            <button onClick={() =>{
                                props.get5Tests(props.name, props.items[2])
                            }}>
                                <span>{props.items[2]}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnitItem;