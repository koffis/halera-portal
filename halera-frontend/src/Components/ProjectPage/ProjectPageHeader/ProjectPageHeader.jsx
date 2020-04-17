import React from "react";
import s from './ProjectPageHeader.module.css'

const ProjectPageHeader = (props) =>{
    return(
        <div className={s.ProjectPageHeader}>
            <div className={s.ProjectPageHeaderName}>
                <h4>{props.projectName}</h4>
                <button type={'submit'}>Try join team</button>
            </div>
            <div className={s.ProjectPageHeaderIcon}>
                <img alt={'project img'} src = {props.projectImage}/>
            </div>
            <div className={s.ProjectPageHeaderStatus}>
                <h4>Project status: {props.projectStatus}</h4>
                <h4>Search teammates: {props.searchTeam ? 'yes' : 'no'}</h4>
            </div>
        </div>
    )
};

export default ProjectPageHeader;