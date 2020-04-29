import React from "react";
import {connect} from "react-redux";
import './ProjectPageAllMembers.scss'
import ProjectPageAllMembers from "./ProjectPageAllMembers";

let mapStateToProps  = (state) => {
    return {
        members: state.projectPage.projectData.members
    }
};


const ProjectPageAllMembersContainer = connect(mapStateToProps, {})(ProjectPageAllMembers);

export default ProjectPageAllMembersContainer;