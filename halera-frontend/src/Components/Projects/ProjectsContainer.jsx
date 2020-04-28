import {connect} from "react-redux";
import Projects from "./Projects";

let mapStateToProps  = (state) => {
    return {
        projectsData: state.profilePage.projectsData,
        members: state.projectPage.projectData.members
    }
};

const ProjectsContainer = connect(mapStateToProps,{})(Projects);

export default ProjectsContainer;