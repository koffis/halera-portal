import React from "react";
import "./ProjectsProfileInfo.scss"
import ProfileProjectItem from "./ProfileProjectItem/ProfileProjectItem";
import {NavLink} from "react-router-dom";
import {def_max_cards_prj} from "../../../Config";

const ProjectsProfileInfo = (props) => {

    let projectsList = props.profileData.project_list.map(p => <ProfileProjectItem
        projectID = {p.id}
        projectImage={p.image_url}
        projectName={p.name}
    />);


    return (<div className="containerprj revealator-fade revealator-delay2 revealator-once">
        <div className="container card testimonial-card">
            <NavLink  to={'/projects'} >Last projects</NavLink>
            <p/>
            <div className="row">
                  {projectsList}
        </div>
        </div>

        </div>
    )
};

export default ProjectsProfileInfo;