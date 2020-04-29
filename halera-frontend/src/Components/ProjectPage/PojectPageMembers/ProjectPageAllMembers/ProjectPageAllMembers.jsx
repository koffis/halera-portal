import React from 'react';
import ProjectPageAllMembersItem from "./ProjectPageAllMembersItem";
import {NavLink} from "react-router-dom";

const ProjectPageAllMembers = (props) => {

    let membersList = props.members.map(m => <ProjectPageAllMembersItem
        position={m.position}
        userName={m.userName}
        profileImage={m.profileImage}
        name={m.name}
    />);

    return (
        <div className="all_members_cont rare-wind-gradient">
            <div className="container card member_cont revealator-fade revealator-delay1 revealator-once">
                <div className="container">
                    <div className="row">
                        {membersList}
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3 footerlink white global_footer revealator-slideright revealator-once">© 2020
                Copyright:
                <NavLink activeClassName="activeLink" to='/'> Halera Inc.</NavLink>
            </div>
        </div>
    );
};

export default ProjectPageAllMembers;