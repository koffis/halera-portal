import React from "react";
import s from './ProjectPage.module.css'
import ProjectPageHeader from "./ProjectPageHeader/ProjectPageHeader";
import ProjectPageMembers from "./PojectPageMembers/ProjectPageMembers";
import ProjectPageInfo from "./ProjectPageInfo/ProjectPageInfo";

const ProjectPage = (props) => {
    return(
        <div className={s.projectPage}>
            <ProjectPageHeader
                projectImage={props.projectData.projectImage}
                projectStatus={props.projectData.projectStatus}
                searchTeam={props.projectData.searchTeam}
                projectName={props.projectData.projectName}/>
            <ProjectPageMembers members={props.projectData.members}/>
            <ProjectPageInfo profileInfo={props.projectData.profileInfo}/>
        </div>
    )
};

export default ProjectPage