import React from "react";
import './ProjectPageMembers.scss'
import {NavLink} from "react-router-dom";

const ProjectPageMembers = (props) =>{

    let memberListData = Object.entries(props.members);
    let memberList = [];
    for(let i = 0; i < memberListData.length; i++){
        memberList.push(<div>
            <NavLink to={'/profile/' + memberListData[i][1].userName }>
                <img alt={'member'} src={memberListData[i][1].profileImg}/>
            </NavLink>
            <p>{memberListData[i][0]}</p>
            </div>)
    }

    return(
        <div className="">
            <div className="">
                {memberList}
            </div>
        </div>
    )
};

export default ProjectPageMembers;