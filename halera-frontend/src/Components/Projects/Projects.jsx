import React from "react";
import ProjectsItem from "./ProjectsItem/ProjectsItem";
import {NavLink} from "react-router-dom";

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
            <div className="footer-copyright text-center py-3 footerlink white global_footer revealator-slideright revealator-once">© 2020
                Copyright:
                <NavLink activeClassName="activeLink" to='/'> Halera Inc.</NavLink>
            </div>
        </div>
    )
};

export default Projects;