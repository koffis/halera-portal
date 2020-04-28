import React from 'react';
import ProjectPageAllMembersItem from "./ProjectPageAllMembersItem";

const ProjectPageAllMembers = (props) => {

    let membersList = props.members.map(m => <ProjectPageAllMembersItem
        position={m.position}
        userName={m.userName}
        profileImage={m.profileImage}
        name={m.name}
    />);

    return (
        <div>
            {membersList}
        </div>
    );
};

export default ProjectPageAllMembers;