import React from "react";
import s from "./ProjectsProfileInfo.module.css"
import ProfileProjectItem from "./ProfileProjectItem/ProfileProjectItem";
import {NavLink} from "react-router-dom";


const ProjectsProfileInfo = (props) => {
    let projectListData = Object.entries(props.projectsData);
    let projectsList = [];
    for(let i = 0; i < 3; i++){
       projectsList.push(<ProfileProjectItem projectName={projectListData[i][0]}
                                             projectImage={projectListData[i][1].projectImage}
                                             projectID={projectListData[i][1].projectID}
       />)
    }


    return (
        <div className={s.projects}>
            <NavLink to={'/projects'} >Last projects</NavLink>
            <div className={s.projectsSpace}>
                <div className={s.projectsPlace}>
                  {projectsList}
                </div>
            </div>
        </div>
    )
};

export default ProjectsProfileInfo;