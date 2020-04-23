import React from "react";
import {NavLink} from "react-router-dom";
import s from './ProfileProjectItem.module.css'

const ProfileProjectItem =(props) => {

    let path = '/project/' + props.projectID;
    return(
        <div className={s.item}>
            <NavLink to={path}><img alt={'project'} src={props.projectImage}/></NavLink>
            <NavLink to={path}>{props.projectName}</NavLink>
        </div>
    )
};

export default ProfileProjectItem;