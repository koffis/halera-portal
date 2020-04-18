import React from "react";
import s from "./ProjectsProfileInfo.module.css"
import ProfileProjectItem from "./ProfileProjectItem/ProfileProjectItem";
import {NavLink} from "react-router-dom";

const ProjectsProfileInfo = (props) => {

    let projectListData = Object.values(props.projectsData);
    let projectsListNames = Object.keys(props.projectsData);

    let achievementsName = projectsListNames.map(k => <p>{k}</p>);

    let projectsList = projectListData.map(p => <ProfileProjectItem
        projectImage={p.projectImage}
        projectID={p.projectID}/>);

    return (
        <div className={s.projects}>
            <NavLink to={'/projects'} >Last projects</NavLink>
            <div className={s.projectsSpace}>
                <div className={s.projectsPlace}>
                    {projectsList}
                </div>
                <div className={s.projectsNames}>
                    {achievementsName}
                </div>
            </div>
        </div>
    )
};

export default ProjectsProfileInfo;