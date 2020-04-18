import React from "react";
import s from './ProjectPageInfo.module.css'

const ProjectPageInfo = (props) =>{
    return(
        <div className={s.ProjectPageInfo}>
            <p>{props.profileInfo}</p>
        </div>
    )
};

export default ProjectPageInfo;