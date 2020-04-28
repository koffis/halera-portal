import React from "react";
import './ProjectPageMembers.scss'
import {NavLink} from "react-router-dom";

const ProjectPageMembers = (props) =>{

    let memberList = props.members.map(m => <div>
        <NavLink to={'/profile/' + m.userName}>
            <img alt={'member'} src={m.profileImage}/>
        </NavLink>
        <p>{m.position}</p>
    </div>);

    return(
        <div className="">
            <div className="">
                {memberList}
            </div>
        </div>
    )
};

export default ProjectPageMembers;