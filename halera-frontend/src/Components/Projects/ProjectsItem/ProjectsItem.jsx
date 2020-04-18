import React from "react";
import s from './ProjectsItem.module.css'
import {NavLink} from "react-router-dom";

const ProjectsItem = (props) => {
  let path = '/project/' + props.projectID;
    return(
            <div className={s.projectsItemSpace}>
                <div className={s.ProjectsItemName}>
                    <h5>{props.projectName}</h5>
                </div>
                <div className={s.ProjectItemIcon}>
                    <NavLink to={path}><img alt={'project img'} src = {props.projectImage}/></NavLink>
                </div>
                <div className={s.ProjectItemStatus}>
                    <h5>Project status: {props.projectStatus}</h5>
                    <h5>Search teammates: {props.searchTeam ? 'yes' : 'no'}</h5>
                </div>
            </div>
    )
};

export default ProjectsItem;