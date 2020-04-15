import React from "react";
import s from "./ProjectsProfileInfo.module.css"
import ProfileProjectItem from "./ProfileProjectItem/ProfileProjectItem";
import {NavLink} from "react-router-dom";

const ProjectsProfileInfo = (props) => {
    let path = 'project/' + props.projectsData.projectID;

    let projectListData = Object.values(props.projectsData);
    let projectsListNames = Object.keys(props.projectsData);

    let achievementsName = projectsListNames.map(k => <NavLink
        to={path}>{k}</NavLink>);

    let projectsList = projectListData.map(p => <ProfileProjectItem
        projectName={p.projectName}
        projectImage={p.projectImage}
        projectID={p.projectID}/>);

    return (
        <div className={s.projects}>
            <h4>Last projects</h4>
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