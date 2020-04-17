import React from "react";
import {connect} from "react-redux";
import ProjectPage from "./ProjectPage";

let mapStateToProps  = (state) => {
    return {
        projectData: state.projectPage.projectData
    }
};


const ProjectPageContainer = connect(mapStateToProps, {})(ProjectPage);

export default ProjectPageContainer;