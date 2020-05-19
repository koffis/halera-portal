import React from "react";
import ProjectsItem from "./ProjectsItem/ProjectsItem";
import Footer from "../Footer/footer";

const Projects = (props) => {

    let projectsList = props.projectsData.map(p => <ProjectsItem
            projectID={p.id}
            projectStatus={p.status}
            searchTeam={p.searching}
            projectImage={p.image_url}
            projectName={p.name}
            members={props.members}
        />
    );

    return (
        <div className="project_list_bg rare-wind-gradient">
            <div className="project_list_main_cont container">
                {projectsList}
            </div>
            <Footer/>
        </div>
    )
};

export default Projects;