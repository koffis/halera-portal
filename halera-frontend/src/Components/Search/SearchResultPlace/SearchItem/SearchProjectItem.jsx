import React from "react";
import s from './SearchProjectItem.module.css'
import {NavLink} from "react-router-dom";

const SearchUserItem = (props) => {
    let path = '/project/' + props.projectID;
    return (
        <div className={s.projectItem}>
            <div className={s.projectImage}>
                <NavLink to={path}><img alt='dog' src={props.projectImage}/></NavLink>
            </div>
            <div className={s.projectStatus}>
                <NavLink to={path}>{props.projectName}</NavLink>
                <p>Project status: {props.projectStatus}</p>
            </div>
            <div>
                <h5>Search teammates: {props.searchTeam ? 'yes' : 'no'}</h5>
            </div>
        </div>
    )
};

export default SearchUserItem;