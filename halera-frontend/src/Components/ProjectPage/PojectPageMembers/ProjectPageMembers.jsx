import React from "react";
import './ProjectPageMembers.scss'
import {NavLink} from "react-router-dom";

const ProjectPageMembers = (props) => {

    let memberList = props.members.slice(0, 4).map(m => <div className="col-3 col_member">
        <div className="card testimonial-card">
            <NavLink to={'/profile/' + m.userName}>
                <div className="card-up indigo lighten-1"/>
                <div className="avatar mx-auto white">
                    <img className="rounded-circle" alt={'member'} src={m.profileImage}/>
                </div>
                <div className="card-body">
                    <h4 className="card-title">{m.name}</h4>
                    <hr/>
                    <p/><i className="fas fa-quote-left"/><p>{m.position}</p>
                </div>
            </NavLink>
        </div>
    </div>);

    return (
        <div className="card container members_prj">
            <p/>
            <div className="container">
                <p/>
                <NavLink to={'/projectMembers'}>All members</NavLink>
                <div className="row">
                    {memberList}
                </div>
            </div>
        </div>
    )
};

export default ProjectPageMembers;