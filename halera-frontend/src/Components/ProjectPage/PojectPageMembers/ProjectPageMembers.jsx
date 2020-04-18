import React from "react";
import s from './ProjectPageMembers.module.css'
import {NavLink} from "react-router-dom";

const ProjectPageMembers = (props) =>{

    let membersListArray = Object.values(props.members);
    let positionListArray = Object.keys(props.members);

    let positionList = positionListArray.map(p => <h4>{p}</h4>);

    let memberList = membersListArray.map(m => <NavLink
        to={'/profile/'+ m.userName}><img alt={'member'} src={m.profileImg}/></NavLink>);

    return(














        <div className={s.ProjectPageMembers}>
            <div className={s.ProjectPageMembersImg}>
                {memberList}
            </div>
            <div className={s.ProjectPageMembersPosition}>
                {positionList}
            </div>


        </div>
    )
};

export default ProjectPageMembers;