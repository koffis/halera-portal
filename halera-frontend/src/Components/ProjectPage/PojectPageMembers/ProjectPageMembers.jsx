import React from "react";
import './ProjectPageMembers.scss'
import {NavLink} from "react-router-dom";

const ProjectPageMembers = (props) => {

    let memberListData = Object.entries(props.members);
    let memberList = [];
    for (let i = 0; i < 4; i++) {
        memberList.push(<div className="col-3 col_member">
            <div className="card testimonial-card">
                <NavLink to={'/profile/' + memberListData[i][1].userName}>
                    <div className="card-up indigo lighten-1"/>
                    <div className="avatar mx-auto white">
                        <img className="rounded-circle" alt={'member'} src={memberListData[i][1].profileImg}/>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title"><NavLink to={'/profile/' + memberListData[i][1].userName}/></h4>
                        <hr/>
                        <p/><i className="fas fa-quote-left"/><p>{memberListData[i][0]}</p>
                    </div>
                </NavLink>
            </div>
        </div>)
    }

    return (
        <div className="card container members_prj">
            <p/>
            <div className="container">
                <p/>
                <NavLink to={'/projects'}>All members</NavLink>


                <div className="row">
                    {memberList}
                </div>
            </div>
        </div>
    )
};

export default ProjectPageMembers;