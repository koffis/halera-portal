import React from "react";
import './ProjectPageInfo.scss'

const ProjectPageInfo = (props) =>{
    return(
        <div className="container card prj_page_info p-4 revealator-fade revealator-delay3 revealator-once">
            <p>{props.profileInfo}</p>
        </div>
    )
};

export default ProjectPageInfo;