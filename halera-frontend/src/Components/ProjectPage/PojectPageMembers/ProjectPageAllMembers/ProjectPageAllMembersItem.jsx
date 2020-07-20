import React from 'react';
import {NavLink} from "react-router-dom";

const ProjectPageAllMembersItem = (props) => {
    let path = '/profile/' + props.userName;

    return (
<div className="col-3 card_all_members">
    <NavLink to={path}>
        <div className="card testimonial-card">

            <div className="card-up indigo lighten-1"></div>

            <div className="avatar mx-auto white">
                <img className="rounded-circle" alt={'member'} src={props.profileImage}/>
            </div>

            <div className="card-body">
                <h4 className="card-title"><h4>{props.name}</h4></h4>
                <hr/>
                    <p>{props.position}</p>
            </div>
        </div>
    </NavLink>
        </div>


    );
};

export default ProjectPageAllMembersItem;