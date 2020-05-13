import React from "react";
import ProjectsItem from "./ProjectsItem/ProjectsItem";
import Footer from "../Footer/footer";

const Projects = (props) => {

    let projectsListArray = Object.values(props.projectsData);
    let projectsList = projectsListArray.map(p => <ProjectsItem
        projectID={p.projectID}
        projectName={p.projectName}
        projectImage={p.projectImage}
        projectStatus={p.projectStatus}
        searchTeam={p.searchTeam}
        members = {props.members}

    />);
    return(
        <div className="project_list_bg rare-wind-gradient">
            <div className="project_list_main_cont container">
            {projectsList}
            </div>
            <Footer/>
        </div>
    )
};

export default Projects;