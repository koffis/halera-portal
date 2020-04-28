import React from "react";
import "./ProjectsProfileInfo.scss"
import ProfileProjectItem from "./ProfileProjectItem/ProfileProjectItem";
import {NavLink} from "react-router-dom";

const ProjectsProfileInfo = (props) => {
    let projectListData = Object.entries(props.projectsData);
    let projectsList = [];
    for(let i = 0; i < 4; i++){
       projectsList.push(<ProfileProjectItem projectName={projectListData[i][0]}
                                             projectImage={projectListData[i][1].projectImage}
                                             projectID={projectListData[i][1].projectID}
       />)
    }


    return (<div className="containerprj revealator-fade revealator-delay2 revealator-once">
        <div className="container card testimonial-card">
            <NavLink to={'/projects'} >Last projects</NavLink>
            <p/>
            <div className="row">

                  {projectsList}

        </div>
        </div>

        </div>
    )
};

export default ProjectsProfileInfo;