import React from "react";
import ProjectsItem from "./ProjectsItem/ProjectsItem";

const Projects = (props) => {

    let projectsListArray = Object.values(props.projectsData);
    let projectsList = projectsListArray.map(p => <ProjectsItem
        projectID={p.projectID}
        projectName={p.projectName}
        projectImage={p.projectImage}
        projectStatus={p.projectStatus}
        searchTeam={p.searchTeam}
    />);

    return(
        <div>
            {projectsList}
        </div>
    )
};

export default Projects;