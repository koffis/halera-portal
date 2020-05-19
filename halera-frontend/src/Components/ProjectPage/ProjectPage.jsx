import React from "react";
import './ProjectPage.scss'
import ProjectPageHeader from "./ProjectPageHeader/ProjectPageHeader";
import ProjectPageMembers from "./PojectPageMembers/ProjectPageMembers";
import ProjectPageInfo from "./ProjectPageInfo/ProjectPageInfo";
import Footer from "../Footer/footer";

const ProjectPage = (props) => {
    return(
        <div className="rare-wind-gradient page_bg">
        <div className="container prj_page_cont">
            <ProjectPageHeader
                projectImage={props.projectData.projectImage}
                projectStatus={props.projectData.projectStatus}
                searchTeam={props.projectData.searchTeam}
                projectName={props.projectData.projectName}/>
            <ProjectPageMembers members={props.projectData.members}/>
            <ProjectPageInfo profileInfo={props.projectData.profileInfo}/>
        </div>
            <Footer/>
        </div>
    )
};

export default ProjectPage