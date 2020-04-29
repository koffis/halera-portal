import React from "react";
import './ProjectPage.scss'
import ProjectPageHeader from "./ProjectPageHeader/ProjectPageHeader";
import ProjectPageMembers from "./PojectPageMembers/ProjectPageMembers";
import ProjectPageInfo from "./ProjectPageInfo/ProjectPageInfo";
import {NavLink} from "react-router-dom";

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
            <div className="footer-copyright text-center py-3 footerlink white global_footer revealator-slideright revealator-once">© 2020
                Copyright:
                <NavLink activeClassName="activeLink" to='/'> Halera Inc.</NavLink>
            </div>
        </div>
    )
};

export default ProjectPage