import React from 'react';
import {NavLink} from "react-router-dom";

const ProjectPageAllMembersItem = (props) => {
    let path = '/profile/' + props.userName;

    return (
        <div>
            <NavLink to={path}><img alt={'member'} src={props.profileImage}/></NavLink>
            <NavLink to={path}><h4>{props.name}</h4></NavLink>
            <h5>Position: {props.position}</h5>
        </div>
    );
};

export default ProjectPageAllMembersItem;